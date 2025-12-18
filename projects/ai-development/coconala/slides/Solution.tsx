'use client';

import SlideWrapper from '../SlideWrapper';
import { Package, Clock, Coins } from 'lucide-react';

// ========================================
// フォント設計（ハイブリッド）
// ========================================
// タイトル: Melete（英語）
// サブタイトル・本文: HackGen（日本語）
// ========================================
// カラーレギュレーション
// ========================================
// 段階的グラデーション（差別化用・3パターン）:
//   パターン1: from-sky-500 to-sky-600（明るい）
//   パターン2: from-sky-600 to-blue-600（中間）
//   パターン3: from-blue-600 to-indigo-600（暗い）
// タイトルテキスト: blue-600（統一）
// ========================================

export function Solution() {
  return (
    <SlideWrapper slideNumber={2} slideName="solution">
      <div className="flex flex-col h-full font-hackgen">
        {/* タイトル（コンパクト） */}
        <div className="text-center mb-2">
          <h1 className="font-melete text-3xl font-bold tracking-wider text-blue-600">
            SOLUTION
          </h1>
          <p className="text-xs text-gray-500">全部解決します</p>
        </div>
        {/* コンテンツ */}
        <div className="flex-1 flex flex-col gap-2">
          <div className="flex-1 bg-gradient-to-r from-sky-500 to-sky-600 rounded-xl p-3 flex items-center gap-3 shadow-lg shadow-sky-600/20">
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
              <Package className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-base font-bold text-white">完全おまかせ納品</div>
              <div className="text-xs text-sky-100">キャラを渡すだけ。あとは全部お任せ</div>
            </div>
          </div>
          <div className="flex-1 bg-gradient-to-r from-sky-600 to-blue-600 rounded-xl p-3 flex items-center gap-3 shadow-lg shadow-blue-600/20">
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-base font-bold text-white">24時間働くAI社員</div>
              <div className="text-xs text-blue-100">寝ている間も接客・配信・対応</div>
            </div>
          </div>
          <div className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-3 flex items-center gap-3 shadow-lg shadow-indigo-600/20">
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
              <Coins className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-base font-bold text-white">買い切り・月額0円</div>
              <div className="text-xs text-blue-100">かかるのはAPI料金だけ</div>
            </div>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}
