'use client';

import { forwardRef } from 'react';
import SlideWrapperLancers from '../SlideWrapperLancers';
import { Radio, Cpu, User, HelpCircle, Sparkles, MessageSquare } from 'lucide-react';

// ========================================
// フォント設計（ハイブリッド）
// ========================================
// タイトル: Melete（英語）
// サブタイトル・本文: HackGen（日本語）
// カラー: rose-600（ディープトーン）
// ========================================

export const LiveStreamLancers = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <SlideWrapperLancers ref={ref} slideNumber={5} slideName="live">
      <div className="flex h-full gap-6 font-hackgen">
        {/* 左側：タイトル+フロー */}
        <div className="flex-1 flex flex-col">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-2xl bg-rose-600 flex items-center justify-center shadow-lg shadow-rose-600/20">
              <Radio className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="font-melete text-3xl font-bold tracking-wider text-rose-600">
                LIVE STREAM
              </h1>
              <p className="text-base text-gray-500">ライブ配信</p>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-3">
            <div className="flex-1 bg-white border-2 border-rose-200 rounded-xl px-5 py-3 flex items-center gap-4 shadow-sm">
              <div className="w-14 h-14 rounded-xl bg-rose-600 flex items-center justify-center">
                <Radio className="w-7 h-7 text-white" />
              </div>
              <div>
                <div className="text-sm font-bold text-rose-600">STEP 1</div>
                <div className="text-lg font-bold text-gray-800">コメントが届く</div>
              </div>
            </div>
            <div className="flex-1 bg-white border-2 border-rose-200 rounded-xl px-5 py-3 flex items-center gap-4 shadow-sm">
              <div className="w-14 h-14 rounded-xl bg-rose-600 flex items-center justify-center">
                <Cpu className="w-7 h-7 text-white" />
              </div>
              <div>
                <div className="text-sm font-bold text-rose-600">STEP 2</div>
                <div className="text-lg font-bold text-gray-800">AIが返答を生成</div>
              </div>
            </div>
            <div className="flex-1 bg-white border-2 border-rose-200 rounded-xl px-5 py-3 flex items-center gap-4 shadow-sm">
              <div className="w-14 h-14 rounded-xl bg-rose-600 flex items-center justify-center">
                <User className="w-7 h-7 text-white" />
              </div>
              <div>
                <div className="text-sm font-bold text-rose-600">STEP 3</div>
                <div className="text-lg font-bold text-gray-800">キャラが配信</div>
              </div>
            </div>
          </div>
        </div>
        {/* 右側：利用シーン */}
        <div className="w-72 flex flex-col">
          <div className="text-sm font-bold text-gray-500 mb-3">利用シーン</div>
          <div className="flex-1 flex flex-col gap-3">
            <div className="flex-1 bg-rose-50 border-2 border-rose-200 rounded-xl px-4 py-3 flex items-center gap-3">
              <HelpCircle className="w-8 h-8 text-rose-600" />
              <span className="text-lg font-bold text-gray-700">24時間FAQ</span>
            </div>
            <div className="flex-1 bg-rose-50 border-2 border-rose-200 rounded-xl px-4 py-3 flex items-center gap-3">
              <Sparkles className="w-8 h-8 text-rose-600" />
              <span className="text-lg font-bold text-gray-700">占いVTuber</span>
            </div>
            <div className="flex-1 bg-rose-50 border-2 border-rose-200 rounded-xl px-4 py-3 flex items-center gap-3">
              <MessageSquare className="w-8 h-8 text-rose-600" />
              <span className="text-lg font-bold text-gray-700">雑談VTuber</span>
            </div>
          </div>
        </div>
      </div>
    </SlideWrapperLancers>
  );
});
LiveStreamLancers.displayName = 'LiveStreamLancers';
