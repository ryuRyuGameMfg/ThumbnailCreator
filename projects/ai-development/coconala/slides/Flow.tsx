'use client';

import SlideWrapper from '../SlideWrapper';
import { MessageSquare, FileCheck, Headphones, Package, Clock, Shield, Sparkles } from 'lucide-react';

// ========================================
// フォント設計（ハイブリッド）
// ========================================
// タイトル: Melete（英語）
// サブタイトル・本文: HackGen（日本語）
// ========================================
// カラーレギュレーション
// ========================================
// フローチャート（基本カラーパレット4段階）:
//   STEP1: sky-500（レベル1・最も明るい）
//   STEP2: blue-500（レベル2・中間）
//   STEP3: indigo-500（レベル3・やや暗い）
//   STEP4: violet-500（レベル4・最も暗い）
// 背景グラデーション（薄い色）:
//   カード1: from-sky-50 to-blue-50
//   カード2: from-blue-50 to-indigo-50
//   カード3: from-indigo-50 to-violet-50
// タイトルテキスト: blue-600（統一）
// ========================================

export function Flow() {
  return (
    <SlideWrapper slideNumber={14} slideName="flow">
      <div className="flex flex-col h-full font-hackgen">
        {/* タイトル（コンパクト） */}
        <div className="text-center mb-2">
          <h1 className="font-melete text-3xl font-bold tracking-wider text-blue-600">
            FLOW
          </h1>
          <p className="text-xs text-gray-500">サービスの流れ</p>
        </div>

        {/* フローチャート */}
        <div className="flex items-center mb-2">
          <div className="flex w-full h-16">
            <div className="flex-1 relative">
              <div className="bg-sky-500 rounded-l-lg h-full px-2 py-1 flex flex-col justify-center">
                <MessageSquare className="w-4 h-4 text-white mb-0.5" />
                <div className="text-[8px] text-sky-100">STEP 1</div>
                <div className="text-[10px] font-bold text-white">無料相談</div>
              </div>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-0 h-0 border-t-[16px] border-t-transparent border-b-[16px] border-b-transparent border-l-[8px] border-l-sky-500 z-10" />
            </div>
            <div className="flex-1 relative">
              <div className="bg-blue-500 h-full px-2 py-1 flex flex-col justify-center pl-4">
                <FileCheck className="w-4 h-4 text-white mb-0.5" />
                <div className="text-[8px] text-blue-100">STEP 2</div>
                <div className="text-[10px] font-bold text-white">ご契約</div>
              </div>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-0 h-0 border-t-[16px] border-t-transparent border-b-[16px] border-b-transparent border-l-[8px] border-l-blue-500 z-10" />
            </div>
            <div className="flex-1 relative">
              <div className="bg-indigo-500 h-full px-2 py-1 flex flex-col justify-center pl-4">
                <Headphones className="w-4 h-4 text-white mb-0.5" />
                <div className="text-[8px] text-indigo-100">STEP 3</div>
                <div className="text-[10px] font-bold text-white">ヒアリング</div>
              </div>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-0 h-0 border-t-[16px] border-t-transparent border-b-[16px] border-b-transparent border-l-[8px] border-l-indigo-500 z-10" />
            </div>
            <div className="flex-1">
              <div className="bg-violet-500 rounded-r-lg h-full px-2 py-1 flex flex-col justify-center pl-4">
                <Package className="w-4 h-4 text-white mb-0.5" />
                <div className="text-[8px] text-violet-100">STEP 4</div>
                <div className="text-[10px] font-bold text-white">納品</div>
              </div>
            </div>
          </div>
        </div>

        {/* 特徴カード（Bento風3カード） */}
        <div className="flex-1 grid grid-cols-3 gap-2">
          <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-xl p-2 border border-sky-200 flex flex-col items-center justify-center text-center">
            <div className="w-9 h-9 bg-sky-500 rounded-lg flex items-center justify-center mb-1">
              <Clock className="w-5 h-5 text-white" />
            </div>
            <div className="text-sm font-bold text-sky-600">最短4日</div>
            <div className="text-[10px] text-gray-600">スピード納品</div>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-2 border border-blue-200 flex flex-col items-center justify-center text-center">
            <div className="w-9 h-9 bg-blue-500 rounded-lg flex items-center justify-center mb-1">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <div className="text-sm font-bold text-blue-600">30日保証</div>
            <div className="text-[10px] text-gray-600">無料修正対応</div>
          </div>
          <div className="bg-gradient-to-br from-indigo-50 to-violet-50 rounded-xl p-2 border border-indigo-200 flex flex-col items-center justify-center text-center">
            <div className="w-9 h-9 bg-indigo-500 rounded-lg flex items-center justify-center mb-1">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div className="text-sm font-bold text-indigo-600">完全おまかせ</div>
            <div className="text-[10px] text-gray-600">技術知識不要</div>
          </div>
        </div>

        {/* 下部CTA文言 */}
        <div className="mt-1.5 text-center">
          <p className="text-xs text-gray-500">まずはお気軽にご相談ください</p>
        </div>
      </div>
    </SlideWrapper>
  );
}
