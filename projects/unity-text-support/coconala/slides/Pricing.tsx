'use client';

import SlideWrapper from '../SlideWrapper';
import { Coins } from 'lucide-react';

// ========================================
// Pricing（料金）
// ========================================

function SlideTitle({ english, japanese }: { english: string; japanese: string }) {
  return (
    <div className="text-center mb-3">
      <h1 className="font-melete text-[36px] font-bold text-sky-600 tracking-wider">
        {english}
      </h1>
      <p className="text-sm text-gray-500 font-hackgen">{japanese}</p>
    </div>
  );
}

export function Pricing() {
  const plans = [
    { days: '3日間', price: '8,000円', popular: false },
    { days: '5日間', price: '12,000円', popular: true },
    { days: '7日間', price: '15,000円', popular: false },
    { days: '30日間', price: '55,000円', popular: false },
  ];

  return (
    <SlideWrapper slideNumber={4} slideName="pricing">
      <div className="flex flex-col h-full font-hackgen">
        <SlideTitle english="PRICING" japanese="料金プラン（固定料金）" />
        
        <div className="flex-1 flex flex-col gap-2">
          {plans.map(({ days, price, popular }, index) => (
            <div
              key={index}
              className={`flex items-center justify-between px-4 py-3 rounded-xl shadow-lg relative overflow-hidden ${
                popular 
                  ? 'bg-gradient-to-r from-sky-500 to-blue-600' 
                  : 'bg-gradient-to-r from-sky-400 to-sky-500'
              }`}
            >
              {popular && (
                <div className="absolute top-1 right-1 bg-yellow-400 text-yellow-900 text-[8px] font-black px-2 py-0.5 rounded">
                  人気
                </div>
              )}
              <div>
                <div className="text-white font-bold text-base">{days}</div>
                <div className="text-white/80 text-xs">質問し放題</div>
              </div>
              <div className={`font-black text-white ${popular ? 'text-2xl' : 'text-xl'}`}>
                {price}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-2 text-center">
          <p className="text-xs text-gray-500">
            オプションで延長・即修復も可能
          </p>
        </div>
      </div>
    </SlideWrapper>
  );
}
