'use client';

import { forwardRef } from 'react';
import SlideWrapperLancers from '../SlideWrapperLancers';
import { Check, X, Star, Gift, Headphones } from 'lucide-react';

// ========================================
// フォント設計（ハイブリッド）
// ========================================
// タイトル: Melete（英語）
// サブタイトル・本文: HackGen（日本語）
// ========================================

export const PricingLancers = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <SlideWrapperLancers ref={ref} slideNumber={9} slideName="pricing">
      <div className="relative flex flex-col h-full font-hackgen">
        {/* タイトル */}
        <div className="text-center mb-1">
          <h1 className="font-melete text-4xl font-bold tracking-wider text-blue-600">
            PRICING
          </h1>
          <p className="text-base text-gray-500">料金プラン</p>
        </div>

        {/* タグエリア（z-index設定で前面に） */}
        <div className="h-8 relative z-20">
          {/* 期間限定タグ - ベーシックの中央 */}
          <div className="absolute left-[16.6%] -translate-x-1/2 top-0 bg-gradient-to-r from-sky-500 to-sky-600 text-white text-sm font-bold px-5 py-1.5 rounded-full shadow-lg">
            期間限定
          </div>
          {/* おすすめタグ - スタンダードの中央 */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm font-bold px-5 py-1.5 rounded-full flex items-center gap-1 shadow-lg">
            <Star className="w-4 h-4 fill-white" />おすすめ
          </div>
        </div>
        
        {/* 期間限定の期間明示（左下） */}
        <div className="absolute bottom-3 left-3 text-[9px] text-gray-400 z-30">
          評価件数3件まで
        </div>

        {/* 3プラン */}
        <div className="flex-1 flex gap-4 mt-2 relative z-10">
          {/* ベーシック */}
          <div className="flex-1 bg-white rounded-2xl p-4 flex flex-col border-2 border-sky-300 shadow-sm">
            <div className="text-center mb-2">
              <div className="text-base font-bold text-gray-700">ベーシック</div>
              <div className="text-xs text-gray-400 line-through">100,000円</div>
              <div className="text-xl font-bold text-sky-600">75,000<span className="text-sm font-normal">円</span></div>
            </div>
            <div className="flex flex-col gap-1.5 flex-1 text-xs">
              <div className="flex items-center gap-2"><Check className="w-4 h-4 text-sky-600" /><span className="text-gray-700 font-bold">アプリ × 1</span></div>
              <div className="flex items-center gap-2"><X className="w-4 h-4 text-gray-300" /><span className="text-gray-400">キャラカスタム</span></div>
              <div className="flex items-center gap-2"><X className="w-4 h-4 text-gray-300" /><span className="text-gray-400">音声カスタム</span></div>
              <div className="flex items-center gap-2"><X className="w-4 h-4 text-gray-300" /><span className="text-gray-400">専門知識学習</span></div>
              <div className="flex items-center gap-2"><Check className="w-4 h-4 text-sky-600" /><span className="text-gray-700">サポート15日</span></div>
            </div>
          </div>

          {/* スタンダード（推奨） */}
          <div className="flex-[1.15] bg-blue-50/50 rounded-2xl p-1.5">
            <div className="bg-white rounded-xl p-4 flex flex-col border-2 border-blue-500 shadow-lg h-full">
              <div className="text-center mb-2">
                <div className="text-base font-bold text-gray-700">スタンダード</div>
                <div className="text-xs text-transparent">-</div>
                <div className="text-xl font-bold text-blue-600">200,000<span className="text-sm font-normal">円</span></div>
              </div>
              <div className="flex flex-col gap-1.5 flex-1 text-xs">
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-blue-600" /><span className="text-gray-700 font-bold">アプリ × 1</span></div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-blue-600" /><span className="text-gray-700">キャラカスタム</span></div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-blue-600" /><span className="text-gray-700">音声カスタム</span></div>
                <div className="flex items-center gap-2"><X className="w-4 h-4 text-gray-300" /><span className="text-gray-400">専門知識学習</span></div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-blue-600" /><span className="text-gray-700">サポート30日</span></div>
              </div>
            </div>
          </div>

          {/* プロ */}
          <div className="flex-1 bg-white rounded-2xl p-4 flex flex-col border-2 border-indigo-300 shadow-sm">
            <div className="text-center mb-2">
              <div className="text-base font-bold text-gray-700">プロ</div>
              <div className="text-xs text-transparent">-</div>
              <div className="text-xl font-bold text-indigo-600">350,000<span className="text-sm font-normal">円</span></div>
            </div>
            <div className="flex flex-col gap-1.5 flex-1 text-xs">
              <div className="flex items-center gap-2"><Check className="w-4 h-4 text-indigo-600" /><span className="text-gray-700 font-bold">アプリ × 1</span></div>
              <div className="flex items-center gap-2"><Check className="w-4 h-4 text-indigo-600" /><span className="text-gray-700">キャラカスタム</span></div>
              <div className="flex items-center gap-2"><Check className="w-4 h-4 text-indigo-600" /><span className="text-gray-700">音声カスタム</span></div>
              <div className="flex items-center gap-2"><Check className="w-4 h-4 text-indigo-600" /><span className="text-gray-700">専門知識学習</span></div>
              <div className="flex items-center gap-2"><Check className="w-4 h-4 text-indigo-600" /><span className="text-gray-700">サポート30日</span></div>
            </div>
          </div>
        </div>

        {/* 下部2カード */}
        <div className="flex gap-4 mt-3">
          <div className="flex-1 bg-amber-50 rounded-xl px-4 py-2 border border-amber-200 flex items-center gap-3">
            <Gift className="w-6 h-6 text-amber-600" />
            <div className="flex-1 flex items-center justify-between">
              <span className="text-sm text-amber-700 font-bold">まとめ割引</span>
              <span className="text-sm text-amber-600">2アプリ〜</span>
            </div>
          </div>
          <div className="flex-1 bg-blue-50 rounded-xl px-4 py-2 border border-blue-200 flex items-center gap-3">
            <Headphones className="w-6 h-6 text-blue-600" />
            <div className="flex-1 flex items-center justify-between">
              <span className="text-sm text-blue-700 font-bold">年間サポート</span>
              <span className="text-sm text-blue-600">100,000円/年</span>
            </div>
          </div>
        </div>
      </div>
    </SlideWrapperLancers>
  );
});
PricingLancers.displayName = 'PricingLancers';
