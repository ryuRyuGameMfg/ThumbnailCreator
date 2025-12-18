'use client';

import SlideWrapper from '../SlideWrapper';
import { Film, FileText, Cpu, Play, Presentation, Youtube } from 'lucide-react';

// ========================================
// フォント設計（ハイブリッド）
// ========================================
// タイトル: Melete（英語）
// サブタイトル・本文: HackGen（日本語）
// ========================================
// カラーレギュレーション
// ========================================
// タイトルアイコン背景: 基本グラデーション（from-sky-500 to-blue-600）
// STEPアイコン背景（基本カラーパレット4段階）:
//   STEP1: sky-500（レベル1・最も明るい）
//   STEP2: blue-500（レベル2・中間）
//   STEP3: indigo-500（レベル3・やや暗い）
// タイトルテキスト: indigo-600（アプリカラー）
// STEP番号テキスト: blue-600（統一）
// ボーダー: border-blue-200（統一）
// ========================================

export function VideoGen() {
  return (
    <SlideWrapper slideNumber={6} slideName="video">
      <div className="flex flex-col h-full font-hackgen">
        {/* タイトル（コンパクト） */}
        <div className="flex items-center gap-2 mb-2">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-sky-500 to-blue-600 flex items-center justify-center shadow-lg shadow-blue-600/20">
            <Film className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="font-melete text-xl font-bold tracking-wider text-indigo-600">
              VIDEO GEN
            </h1>
            <p className="text-[10px] text-gray-500">動画生成</p>
          </div>
        </div>
        {/* フロー */}
        <div className="flex-1 flex flex-col justify-center gap-2">
          <div className="bg-white border border-blue-200 rounded-lg px-3 py-2 flex items-center gap-3 shadow-sm">
            <div className="w-10 h-10 rounded-lg bg-sky-500 flex items-center justify-center">
              <FileText className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="text-[10px] font-bold text-blue-600">STEP 1</div>
              <div className="text-sm font-bold text-gray-800">台本を入力</div>
              <div className="text-xs text-gray-500">テキストを貼り付けるだけ</div>
            </div>
          </div>
          <div className="bg-white border border-blue-200 rounded-lg px-3 py-2 flex items-center gap-3 shadow-sm">
            <div className="w-10 h-10 rounded-lg bg-blue-500 flex items-center justify-center">
              <Cpu className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="text-[10px] font-bold text-blue-600">STEP 2</div>
              <div className="text-sm font-bold text-gray-800">AI自動生成</div>
              <div className="text-xs text-gray-500">表情・リップシンク自動</div>
            </div>
          </div>
          <div className="bg-white border border-blue-200 rounded-lg px-3 py-2 flex items-center gap-3 shadow-sm">
            <div className="w-10 h-10 rounded-lg bg-indigo-500 flex items-center justify-center">
              <Play className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="text-[10px] font-bold text-blue-600">STEP 3</div>
              <div className="text-sm font-bold text-gray-800">動画を出力</div>
              <div className="text-xs text-gray-500">MP4でダウンロード</div>
            </div>
          </div>
        </div>
        {/* 利用シーン */}
        <div className="flex gap-1.5 mt-2">
          <div className="flex-1 bg-white border border-blue-200 rounded-lg px-2 py-1.5 flex items-center gap-1.5">
            <Presentation className="w-4 h-4 text-blue-600" />
            <span className="text-xs font-bold text-gray-700">プレゼン</span>
          </div>
          <div className="flex-1 bg-white border border-blue-200 rounded-lg px-2 py-1.5 flex items-center gap-1.5">
            <Youtube className="w-4 h-4 text-blue-600" />
            <span className="text-xs font-bold text-gray-700">PR動画</span>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}
