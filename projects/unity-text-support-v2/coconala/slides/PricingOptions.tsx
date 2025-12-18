'use client';

import SlideWrapper from '../SlideWrapper';
import { Plus } from 'lucide-react';
import { PinkTitleV2 } from '@/components/PinkTitleV2';

// ========================================
// PricingOptions（有料オプション）v2
// ========================================

export function PricingOptions() {
  const options = [
    { name: '1日延長', price: '＋3,000円' },
    { name: 'ファイルお預かり・即修復', price: '30,000円〜' },
  ];

  return (
    <SlideWrapper slideNumber={5} slideName="pricing-options">
      <div className="flex flex-col h-full font-hackgen">
        <PinkTitleV2 english="OPTIONS" japanese="有料オプション" />
        
        <div className="flex-1 flex flex-col gap-4">
          {/* オプション */}
          <div className="bg-white/10 backdrop-blur border-2 border-white/30 rounded-xl p-5 shadow-sm flex-1">
            <h4 className="text-white font-bold text-xl mb-4 flex items-center gap-2">
              <Plus className="w-6 h-6" />
              追加オプション
            </h4>
            <div className="space-y-4">
              {options.map(({ name, price }, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between py-4 px-5 bg-gradient-to-r from-sky-500 to-sky-600 rounded-lg"
                >
                  <span className="text-white font-bold text-lg">{name}</span>
                  <span className="text-white font-black text-2xl">{price}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 説明 */}
          <div className="bg-gradient-to-r from-sky-600/30 to-blue-600/30 border-2 border-sky-400/50 rounded-xl p-4 backdrop-blur">
            <p className="text-white font-bold text-base mb-2">ファイルお預かり・即修復プラン</p>
            <p className="text-white/90 text-sm leading-relaxed">
              プロジェクト一式をお預かりし、エラーを修復して返却いたします。
            </p>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}
