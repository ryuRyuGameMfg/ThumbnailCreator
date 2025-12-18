/**
 * 緑クロマキー背景を透過処理するスクリプト
 * 
 * 使用方法: node scripts/remove-green-screen.mjs
 */

import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PUBLIC_DIR = path.join(__dirname, '..', 'public');

// 処理対象の画像
const images = [
  { input: 'character-1.png', output: 'character-1-transparent.png' },
  { input: 'character-2.png', output: 'character-2-transparent.png' },
];

/**
 * 緑色（クロマキー）を透過処理
 * RGB値から緑色を検出し、アルファチャンネルを0に設定
 */
async function removeGreenScreen(inputPath, outputPath) {
  console.log(`Processing: ${inputPath}`);
  
  const image = sharp(inputPath);
  const metadata = await image.metadata();
  
  // RAWピクセルデータを取得
  const { data, info } = await image
    .raw()
    .toBuffer({ resolveWithObject: true });
  
  const channels = info.channels;
  const width = info.width;
  const height = info.height;
  
  console.log(`  Size: ${width}x${height}, Channels: ${channels}`);
  
  // 新しいRGBAバッファを作成
  const newData = Buffer.alloc(width * height * 4);
  
  for (let i = 0; i < width * height; i++) {
    const srcIdx = i * channels;
    const dstIdx = i * 4;
    
    const r = data[srcIdx];
    const g = data[srcIdx + 1];
    const b = data[srcIdx + 2];
    const a = channels === 4 ? data[srcIdx + 3] : 255;
    
    // 緑色判定（クロマキー用）
    // 緑が強く、赤と青が弱い場合に透過
    const isGreen = isChromaKeyGreen(r, g, b);
    
    newData[dstIdx] = r;
    newData[dstIdx + 1] = g;
    newData[dstIdx + 2] = b;
    newData[dstIdx + 3] = isGreen ? 0 : a;
  }
  
  // 新しい画像として保存
  await sharp(newData, {
    raw: {
      width: width,
      height: height,
      channels: 4,
    },
  })
    .png()
    .toFile(outputPath);
  
  console.log(`  Saved: ${outputPath}`);
}

/**
 * 緑色（クロマキー）かどうか判定
 * 様々な緑色のバリエーションに対応
 */
function isChromaKeyGreen(r, g, b) {
  // HSV変換で緑色を検出
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const delta = max - min;
  
  // 彩度が低い場合（灰色系）はスキップ
  if (delta < 30) return false;
  
  // 緑が最大値でない場合はスキップ
  if (g !== max) return false;
  
  // 緑が支配的な色相かチェック
  // 色相が緑の範囲（約60-180度）にあるか
  let hue = 0;
  if (delta > 0) {
    if (g === max) {
      hue = 60 * (((b - r) / delta) + 2);
    }
  }
  
  // 緑色の範囲（色相70-160度くらい）
  const isGreenHue = hue >= 70 && hue <= 160;
  
  // 緑が赤と青より十分に大きいか
  const greenDominance = g > r * 1.2 && g > b * 1.1;
  
  // 明るい緑（クロマキー用の蛍光緑）
  // RGB(0, 255, 0) や RGB(80, 255, 80) など
  const isBrightGreen = g >= 180 && r < 180 && b < 180;
  
  // 画像の緑背景（RGB約 57, 255, 20 = #39FF14 蛍光緑）
  const isNeonGreen = g >= 200 && r < 150 && b < 100;
  
  return (isGreenHue && greenDominance) || isBrightGreen || isNeonGreen;
}

// メイン処理
async function main() {
  console.log('=== Green Screen Removal Script ===\n');
  
  for (const { input, output } of images) {
    const inputPath = path.join(PUBLIC_DIR, input);
    const outputPath = path.join(PUBLIC_DIR, output);
    
    try {
      await removeGreenScreen(inputPath, outputPath);
    } catch (error) {
      console.error(`Error processing ${input}:`, error.message);
    }
  }
  
  console.log('\n=== Done ===');
}

main();
