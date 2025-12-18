'use client';

import { forwardRef } from 'react';
import SlideWrapperLancers from '../SlideWrapperLancers';
import { MessageCircle, Send, Cpu, MessageSquare, ShoppingBag, Map, Building2 } from 'lucide-react';

// ========================================
// フォント設計（ハイブリッド）
// ========================================
// タイトル: Melete（英語）
// サブタイトル・本文: HackGen（日本語）
// カラー: amber-600（ディープトーン）
// ========================================

export const TextChatLancers = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <SlideWrapperLancers ref={ref} slideNumber={7} slideName="chat">
      <div className="flex h-full gap-6 font-hackgen">
        {/* 左側：タイトル+フロー */}
        <div className="flex-1 flex flex-col">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-2xl bg-amber-600 flex items-center justify-center shadow-lg shadow-amber-600/20">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="font-melete text-3xl font-bold tracking-wider text-amber-600">
                TEXT CHAT
              </h1>
              <p className="text-base text-gray-500">テキストチャット</p>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-3">
            <div className="flex-1 bg-white border-2 border-amber-200 rounded-xl px-5 py-3 flex items-center gap-4 shadow-sm">
              <div className="w-14 h-14 rounded-xl bg-amber-600 flex items-center justify-center">
                <Send className="w-7 h-7 text-white" />
              </div>
              <div>
                <div className="text-sm font-bold text-amber-600">STEP 1</div>
                <div className="text-lg font-bold text-gray-800">質問を送信</div>
              </div>
            </div>
            <div className="flex-1 bg-white border-2 border-amber-200 rounded-xl px-5 py-3 flex items-center gap-4 shadow-sm">
              <div className="w-14 h-14 rounded-xl bg-amber-600 flex items-center justify-center">
                <Cpu className="w-7 h-7 text-white" />
              </div>
              <div>
                <div className="text-sm font-bold text-amber-600">STEP 2</div>
                <div className="text-lg font-bold text-gray-800">AIが理解・処理</div>
              </div>
            </div>
            <div className="flex-1 bg-white border-2 border-amber-200 rounded-xl px-5 py-3 flex items-center gap-4 shadow-sm">
              <div className="w-14 h-14 rounded-xl bg-amber-600 flex items-center justify-center">
                <MessageSquare className="w-7 h-7 text-white" />
              </div>
              <div>
                <div className="text-sm font-bold text-amber-600">STEP 3</div>
                <div className="text-lg font-bold text-gray-800">回答を表示</div>
              </div>
            </div>
          </div>
        </div>
        {/* 右側：利用シーン */}
        <div className="w-72 flex flex-col">
          <div className="text-sm font-bold text-gray-500 mb-3">利用シーン</div>
          <div className="flex-1 flex flex-col gap-3">
            <div className="flex-1 bg-amber-50 border-2 border-amber-200 rounded-xl px-4 py-3 flex items-center gap-3">
              <ShoppingBag className="w-8 h-8 text-amber-600" />
              <span className="text-lg font-bold text-gray-700">店舗案内</span>
            </div>
            <div className="flex-1 bg-amber-50 border-2 border-amber-200 rounded-xl px-4 py-3 flex items-center gap-3">
              <Map className="w-8 h-8 text-amber-600" />
              <span className="text-lg font-bold text-gray-700">観光案内</span>
            </div>
            <div className="flex-1 bg-amber-50 border-2 border-amber-200 rounded-xl px-4 py-3 flex items-center gap-3">
              <Building2 className="w-8 h-8 text-amber-600" />
              <span className="text-lg font-bold text-gray-700">展示会</span>
            </div>
          </div>
        </div>
      </div>
    </SlideWrapperLancers>
  );
});
TextChatLancers.displayName = 'TextChatLancers';
