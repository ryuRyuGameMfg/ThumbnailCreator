'use client';

import SlideWrapper from '../SlideWrapper';
import { Coins } from 'lucide-react';
import { PinkTitleV2 } from '@/components/PinkTitleV2';

export function Pricing() {
  return (
    <SlideWrapper slideNumber={4} slideName="pricing">
      <div className="flex flex-col h-full font-hackgen">
        <PinkTitleV2 english="PRICING" japanese="料金プラン" />
        
        <div className="flex-1 flex flex-col justify-center gap-3">
          {/* メイン料金 */}
          <div className="bg-gradient-to-br from-sky-500 to-blue-600 rounded-2xl p-5 shadow-xl text-center">
            <div className="flex items-center justify-center gap-3 mb-2">
              <Coins className="w-7 h-7 text-white" />
              <h3 className="text-white font-bold text-lg">基本料金</h3>
            </div>
            <div className="text-4xl font-black text-white mb-1">
              95,000<span className="text-2xl">円</span>
            </div>
            <p className="text-white/90 text-sm">お届け日数: 基本12日以内</p>
          </div>

          {/* 注釈 */}
          <div className="bg-white/10 border-2 border-white/30 rounded-xl p-3 text-center backdrop-blur">
            <p className="text-white font-bold text-sm">
              豊富なカスタマイズオプションをご用意
            </p>
            <p className="text-white/80 text-xs mt-1">
              詳細は次のページをご確認ください
            </p>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}
