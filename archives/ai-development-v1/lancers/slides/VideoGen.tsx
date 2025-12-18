'use client';

import { forwardRef } from 'react';
import SlideWrapperLancers from '../SlideWrapperLancers';
import { Film, FileText, Cpu, Play, Presentation, Youtube } from 'lucide-react';

// ========================================
// フォント設計（ハイブリッド）
// ========================================
// タイトル: Melete（英語）
// サブタイトル・本文: HackGen（日本語）
// カラー: indigo-600（ディープトーン）
// ========================================

export const VideoGenLancers = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <SlideWrapperLancers ref={ref} slideNumber={6} slideName="video">
      <div className="flex h-full gap-6 font-hackgen">
        {/* 左側：タイトル+フロー */}
        <div className="flex-1 flex flex-col">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-2xl bg-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-600/20">
              <Film className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="font-melete text-3xl font-bold tracking-wider text-indigo-600">
                VIDEO GEN
              </h1>
              <p className="text-base text-gray-500">動画生成</p>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-3">
            <div className="flex-1 bg-white border-2 border-indigo-200 rounded-xl px-5 py-3 flex items-center gap-4 shadow-sm">
              <div className="w-14 h-14 rounded-xl bg-indigo-600 flex items-center justify-center">
                <FileText className="w-7 h-7 text-white" />
              </div>
              <div>
                <div className="text-sm font-bold text-indigo-600">STEP 1</div>
                <div className="text-lg font-bold text-gray-800">台本を入力</div>
              </div>
            </div>
            <div className="flex-1 bg-white border-2 border-indigo-200 rounded-xl px-5 py-3 flex items-center gap-4 shadow-sm">
              <div className="w-14 h-14 rounded-xl bg-indigo-600 flex items-center justify-center">
                <Cpu className="w-7 h-7 text-white" />
              </div>
              <div>
                <div className="text-sm font-bold text-indigo-600">STEP 2</div>
                <div className="text-lg font-bold text-gray-800">AI自動生成</div>
              </div>
            </div>
            <div className="flex-1 bg-white border-2 border-indigo-200 rounded-xl px-5 py-3 flex items-center gap-4 shadow-sm">
              <div className="w-14 h-14 rounded-xl bg-indigo-600 flex items-center justify-center">
                <Play className="w-7 h-7 text-white" />
              </div>
              <div>
                <div className="text-sm font-bold text-indigo-600">STEP 3</div>
                <div className="text-lg font-bold text-gray-800">動画を出力</div>
              </div>
            </div>
          </div>
        </div>
        {/* 右側：利用シーン */}
        <div className="w-72 flex flex-col">
          <div className="text-sm font-bold text-gray-500 mb-3">利用シーン</div>
          <div className="flex-1 flex flex-col gap-3">
            <div className="flex-1 bg-indigo-50 border-2 border-indigo-200 rounded-xl px-4 py-3 flex items-center gap-3">
              <Presentation className="w-8 h-8 text-indigo-600" />
              <span className="text-lg font-bold text-gray-700">プレゼン動画</span>
            </div>
            <div className="flex-1 bg-indigo-50 border-2 border-indigo-200 rounded-xl px-4 py-3 flex items-center gap-3">
              <Youtube className="w-8 h-8 text-indigo-600" />
              <span className="text-lg font-bold text-gray-700">PR動画</span>
            </div>
          </div>
        </div>
      </div>
    </SlideWrapperLancers>
  );
});
VideoGenLancers.displayName = 'VideoGenLancers';
