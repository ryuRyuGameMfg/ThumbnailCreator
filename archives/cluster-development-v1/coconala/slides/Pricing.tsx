'use client';

import SlideWrapper from '../SlideWrapper';
import { Coins } from 'lucide-react';
import { DEFAULT_GRADIENT } from '@/constants/COLORS';

// ========================================
// Pricing（料金）
// ========================================

function SlideTitle({ english, japanese }: { english: string; japanese: string }) {
  return (
    <div className="text-center mb-4">
      <h1 className="font-melete text-[36px] font-bold text-sky-600 tracking-wider">
        {english}
      </h1>
      <p className="text-sm text-gray-500 font-hackgen">{japanese}</p>
    </div>
  );
}

export function Pricing() {
  return (
    <SlideWrapper slideNumber={4} slideName="pricing">
      <div className="flex flex-col h-full font-hackgen">
        <SlideTitle english="PRICING" japanese="料金プラン" />
        
        <div className="flex-1 flex flex-col justify-center gap-4">
          {/* メイン料金 */}
          <div className={`bg-gradient-to-br ${DEFAULT_GRADIENT} rounded-2xl p-6 shadow-xl text-center`}>
            <div className="flex items-center justify-center gap-3 mb-2">
              <Coins className="w-8 h-8 text-white" />
              <h3 className="text-white font-bold text-lg">基本料金</h3>
            </div>
            <div className="text-5xl font-black text-white mb-1">
              95,000<span className="text-3xl">円</span>
            </div>
            <p className="text-white/90 text-sm">お届け日数: 基本12日以内</p>
          </div>

          {/* 注釈 */}
          <div className="bg-sky-50 border-2 border-sky-200 rounded-xl p-3 text-center">
            <p className="text-sky-700 font-bold text-sm">
              豊富なカスタマイズオプションをご用意
            </p>
            <p className="text-gray-600 text-xs mt-1">
              詳細は次のページをご確認ください
            </p>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}
