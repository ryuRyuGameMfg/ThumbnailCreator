'use client';

import { forwardRef } from 'react';
import SlideWrapperLancers from '../SlideWrapperLancers';
import { MessageSquare, FileCheck, Headphones, Package, Clock, Shield, Sparkles } from 'lucide-react';

// ========================================
// フォント設計（ハイブリッド）
// ========================================
// タイトル: Melete（英語）
// サブタイトル・本文: HackGen（日本語）
// ========================================

export const FlowLancers = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <SlideWrapperLancers ref={ref} slideNumber={12} slideName="flow">
      <div className="flex flex-col h-full font-hackgen">
        {/* タイトル */}
        <div className="text-center mb-4">
          <h1 className="font-melete text-5xl font-bold tracking-wider text-blue-600 mb-1">
            FLOW
          </h1>
          <p className="text-base text-gray-500">サービスの流れ</p>
        </div>

        {/* フローチャート（横並び矢印） */}
        <div className="flex items-center mb-6">
          <div className="flex w-full h-28">
            <div className="flex-1 relative">
              <div className="bg-sky-500 rounded-l-xl h-full px-5 py-3 flex flex-col justify-center">
                <MessageSquare className="w-7 h-7 text-white mb-2" />
                <div className="text-xs text-sky-100">STEP 1</div>
                <div className="text-base font-bold text-white">無料相談</div>
              </div>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-0 h-0 border-t-[28px] border-t-transparent border-b-[28px] border-b-transparent border-l-[14px] border-l-sky-500 z-10" />
            </div>
            <div className="flex-1 relative">
              <div className="bg-blue-500 h-full px-5 py-3 flex flex-col justify-center pl-7">
                <FileCheck className="w-7 h-7 text-white mb-2" />
                <div className="text-xs text-blue-100">STEP 2</div>
                <div className="text-base font-bold text-white">ご契約</div>
              </div>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-0 h-0 border-t-[28px] border-t-transparent border-b-[28px] border-b-transparent border-l-[14px] border-l-blue-500 z-10" />
            </div>
            <div className="flex-1 relative">
              <div className="bg-indigo-500 h-full px-5 py-3 flex flex-col justify-center pl-7">
                <Headphones className="w-7 h-7 text-white mb-2" />
                <div className="text-xs text-indigo-100">STEP 3</div>
                <div className="text-base font-bold text-white">ヒアリング</div>
              </div>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-0 h-0 border-t-[28px] border-t-transparent border-b-[28px] border-b-transparent border-l-[14px] border-l-indigo-500 z-10" />
            </div>
            <div className="flex-1">
              <div className="bg-violet-500 rounded-r-xl h-full px-5 py-3 flex flex-col justify-center pl-7">
                <Package className="w-7 h-7 text-white mb-2" />
                <div className="text-xs text-violet-100">STEP 4</div>
                <div className="text-base font-bold text-white">納品</div>
              </div>
            </div>
          </div>
        </div>

        {/* 特徴カード（横並び3カード） */}
        <div className="flex-1 flex gap-4">
          <div className="flex-1 bg-gradient-to-br from-sky-50 to-blue-50 rounded-2xl p-5 border border-sky-200 flex flex-col items-center justify-center text-center">
            <div className="w-14 h-14 bg-sky-500 rounded-xl flex items-center justify-center mb-3">
              <Clock className="w-7 h-7 text-white" />
            </div>
            <div className="text-2xl font-bold text-sky-600">最短4日</div>
            <div className="text-sm text-gray-600">スピード納品</div>
          </div>
          <div className="flex-1 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-5 border border-blue-200 flex flex-col items-center justify-center text-center">
            <div className="w-14 h-14 bg-blue-500 rounded-xl flex items-center justify-center mb-3">
              <Shield className="w-7 h-7 text-white" />
            </div>
            <div className="text-2xl font-bold text-blue-600">30日保証</div>
            <div className="text-sm text-gray-600">無料修正対応</div>
          </div>
          <div className="flex-1 bg-gradient-to-br from-indigo-50 to-violet-50 rounded-2xl p-5 border border-indigo-200 flex flex-col items-center justify-center text-center">
            <div className="w-14 h-14 bg-indigo-500 rounded-xl flex items-center justify-center mb-3">
              <Sparkles className="w-7 h-7 text-white" />
            </div>
            <div className="text-2xl font-bold text-indigo-600">完全おまかせ</div>
            <div className="text-sm text-gray-600">技術知識不要</div>
          </div>
        </div>

        {/* 下部CTA文言 */}
        <div className="mt-4 text-center">
          <p className="text-base text-gray-500">まずはお気軽にご相談ください</p>
        </div>
      </div>
    </SlideWrapperLancers>
  );
});
FlowLancers.displayName = 'FlowLancers';
