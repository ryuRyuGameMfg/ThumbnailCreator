'use client';

import { forwardRef } from 'react';
import SlideWrapperLancers from '../SlideWrapperLancers';
import { Package, Clock, Coins } from 'lucide-react';

// ========================================
// フォント設計（ハイブリッド）
// ========================================
// タイトル: Melete（英語）
// サブタイトル・本文: HackGen（日本語）
// ========================================

export const SolutionLancers = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <SlideWrapperLancers ref={ref} slideNumber={2} slideName="solution">
      <div className="flex flex-col h-full font-hackgen">
        {/* タイトル */}
        <div className="text-center mb-6">
          <h1 className="font-melete text-5xl font-bold tracking-wider text-blue-600 mb-1">
            SOLUTION
          </h1>
          <p className="text-base text-gray-500">全部解決します</p>
        </div>
        {/* コンテンツ */}
        <div className="flex-1 flex gap-4">
          <div className="flex-1 bg-gradient-to-br from-sky-500 to-sky-600 rounded-2xl p-6 flex flex-col justify-center shadow-lg shadow-sky-600/20">
            <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-4">
              <Package className="w-8 h-8 text-white" />
            </div>
            <div className="text-xl font-bold text-white">完全おまかせ納品</div>
            <div className="text-base text-sky-100">キャラを渡すだけ。あとは全部お任せ</div>
          </div>
          <div className="flex-1 bg-gradient-to-br from-sky-600 to-blue-600 rounded-2xl p-6 flex flex-col justify-center shadow-lg shadow-blue-600/20">
            <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-4">
              <Clock className="w-8 h-8 text-white" />
            </div>
            <div className="text-xl font-bold text-white">24時間働くAI社員</div>
            <div className="text-base text-blue-100">寝ている間も接客・配信・対応</div>
          </div>
          <div className="flex-1 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl p-6 flex flex-col justify-center shadow-lg shadow-indigo-600/20">
            <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-4">
              <Coins className="w-8 h-8 text-white" />
            </div>
            <div className="text-xl font-bold text-white">買い切り・月額0円</div>
            <div className="text-base text-blue-100">かかるのはAPI料金だけ</div>
          </div>
        </div>
      </div>
    </SlideWrapperLancers>
  );
});
SolutionLancers.displayName = 'SolutionLancers';
