'use client';

import SlideWrapper from '../SlideWrapper';
import { Check, X, Star, Gift, Headphones } from 'lucide-react';

// ========================================
// フォント設計（ハイブリッド）
// ========================================
// タイトル: Melete（英語）
// サブタイトル・本文: HackGen（日本語）
// ========================================
// カラーレギュレーション
// ========================================
// プランカラー（基本カラーパレット4段階）:
//   ベーシック: sky-600（レベル1・最も明るい）
//   スタンダード: blue-600（レベル2・中間・メインアクセント）
//   プロ: indigo-600（レベル3・やや暗い）
// プランボーダー（プランカラーに合わせた-200）:
//   ベーシック: border-sky-200
//   スタンダード: border-blue-500（強調用）
//   プロ: border-indigo-200
// タググラデーション:
//   期間限定: from-sky-500 to-sky-600（ベーシック用）
//   おすすめ: from-blue-500 to-blue-600（スタンダード用）
// タイトルテキスト: blue-600（統一）
// ========================================

export function Pricing() {
  return (
    <SlideWrapper slideNumber={9} slideName="pricing">
      <div className="relative flex flex-col h-full font-hackgen">
        {/* タイトル（コンパクト） */}
        <div className="text-center mb-0.5">
          <h1 className="font-melete text-2xl font-bold tracking-wider text-blue-600">
            PRICING
          </h1>
          <p className="text-[10px] text-gray-500">料金プラン</p>
        </div>

        {/* タグエリア（z-index設定で前面に） */}
        <div className="h-5 relative z-20">
          {/* 期間限定タグ - ベーシックの中央 */}
          <div className="absolute left-[16.6%] -translate-x-1/2 top-0 bg-gradient-to-r from-sky-500 to-sky-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-lg">
            期間限定
          </div>
          {/* おすすめタグ - スタンダードの中央 */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-0.5 shadow-lg">
            <Star className="w-3 h-3 fill-white" />おすすめ
          </div>
        </div>
        
        {/* 期間限定の期間明示（左下） */}
        <div className="absolute bottom-0 left-0 text-[7px] text-gray-400 z-30">
          評価件数3件まで
        </div>

        {/* 3プラン */}
        <div className="flex-1 grid grid-cols-3 gap-1.5 relative z-10">
          {/* ベーシック */}
          <div className="bg-white rounded-xl p-2 flex flex-col border border-sky-200 shadow-sm">
            <div className="text-center mb-1">
              <div className="text-xs font-bold text-gray-700">ベーシック</div>
              <div className="text-[9px] text-gray-400 line-through">100,000円</div>
              <div className="text-base font-bold text-sky-600">75,000<span className="text-[10px] font-normal">円</span></div>
            </div>
            <div className="flex flex-col gap-0.5 flex-1 text-[10px]">
              <div className="flex items-center gap-1"><Check className="w-3 h-3 text-sky-600" /><span className="text-gray-700 font-bold">アプリ × 1</span></div>
              <div className="flex items-center gap-1"><X className="w-3 h-3 text-gray-300" /><span className="text-gray-400">キャラカスタム</span></div>
              <div className="flex items-center gap-1"><X className="w-3 h-3 text-gray-300" /><span className="text-gray-400">音声カスタム</span></div>
              <div className="flex items-center gap-1"><X className="w-3 h-3 text-gray-300" /><span className="text-gray-400">専門知識学習</span></div>
              <div className="flex items-center gap-1"><Check className="w-3 h-3 text-sky-600" /><span className="text-gray-700">サポート15日</span></div>
            </div>
          </div>

          {/* スタンダード（推奨） */}
          <div className="bg-blue-50/50 rounded-xl p-0.5 -mx-0.5 scale-[1.02]">
            <div className="bg-white rounded-lg p-2 flex flex-col border border-blue-500 shadow-lg h-full">
              <div className="text-center mb-1">
                <div className="text-xs font-bold text-gray-700">スタンダード</div>
                <div className="text-[9px] text-transparent">-</div>
                <div className="text-base font-bold text-blue-600">200,000<span className="text-[10px] font-normal">円</span></div>
              </div>
              <div className="flex flex-col gap-0.5 flex-1 text-[10px]">
                <div className="flex items-center gap-1"><Check className="w-3 h-3 text-blue-600" /><span className="text-gray-700 font-bold">アプリ × 1</span></div>
                <div className="flex items-center gap-1"><Check className="w-3 h-3 text-blue-600" /><span className="text-gray-700">キャラカスタム</span></div>
                <div className="flex items-center gap-1"><Check className="w-3 h-3 text-blue-600" /><span className="text-gray-700">音声カスタム</span></div>
                <div className="flex items-center gap-1"><X className="w-3 h-3 text-gray-300" /><span className="text-gray-400">専門知識学習</span></div>
                <div className="flex items-center gap-1"><Check className="w-3 h-3 text-blue-600" /><span className="text-gray-700">サポート30日</span></div>
              </div>
            </div>
          </div>

          {/* プロ */}
          <div className="bg-white rounded-xl p-2 flex flex-col border border-indigo-200 shadow-sm">
            <div className="text-center mb-1">
              <div className="text-xs font-bold text-gray-700">プロ</div>
              <div className="text-[9px] text-transparent">-</div>
              <div className="text-base font-bold text-indigo-600">350,000<span className="text-[10px] font-normal">円</span></div>
            </div>
            <div className="flex flex-col gap-0.5 flex-1 text-[10px]">
              <div className="flex items-center gap-1"><Check className="w-3 h-3 text-indigo-600" /><span className="text-gray-700 font-bold">アプリ × 1</span></div>
              <div className="flex items-center gap-1"><Check className="w-3 h-3 text-indigo-600" /><span className="text-gray-700">キャラカスタム</span></div>
              <div className="flex items-center gap-1"><Check className="w-3 h-3 text-indigo-600" /><span className="text-gray-700">音声カスタム</span></div>
              <div className="flex items-center gap-1"><Check className="w-3 h-3 text-indigo-600" /><span className="text-gray-700">専門知識学習</span></div>
              <div className="flex items-center gap-1"><Check className="w-3 h-3 text-indigo-600" /><span className="text-gray-700">サポート30日</span></div>
            </div>
          </div>
        </div>

        {/* 下部カード */}
        <div className="grid grid-cols-2 gap-1.5 mt-1.5">
          <div className="bg-amber-50 rounded-lg px-2 py-1 border border-amber-200 flex items-center gap-1.5">
            <Gift className="w-3.5 h-3.5 text-amber-600" />
            <div className="flex-1 flex items-center justify-between text-[10px]">
              <span className="text-amber-700 font-bold">まとめ割引</span>
              <span className="text-amber-600">2アプリ〜</span>
            </div>
          </div>
          <div className="bg-blue-50 rounded-lg px-2 py-1 border border-blue-200 flex items-center gap-1.5">
            <Headphones className="w-3.5 h-3.5 text-blue-600" />
            <div className="flex-1 flex items-center justify-between text-[10px]">
              <span className="text-blue-700 font-bold">年間サポート</span>
              <span className="text-blue-600">100,000円/年</span>
            </div>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}
