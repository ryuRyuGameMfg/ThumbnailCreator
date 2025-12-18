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

import { PRICING_COLORS } from '@/constants/COLORS';

export function Pricing() {
  const plans = [
    { days: '3日間', price: '8,000円', badge: '人気', badgeColor: 'bg-sky-500 text-sky-900', bonus: null },
    { days: '5日間', price: '12,000円', badge: 'おすすめ', badgeColor: 'bg-blue-500 text-blue-900', bonus: null },
    { days: '7日間', price: '15,000円', badge: null, badgeColor: null, bonus: null },
    { days: '30日間', price: '55,000円', badge: null, badgeColor: null, bonus: 'ビデオチャット60分無料' },
  ];

  return (
    <SlideWrapper slideNumber={4} slideName="pricing">
      <div className="flex flex-col h-full font-hackgen">
        <SlideTitle english="PRICING" japanese="料金プラン（固定料金）" />
        
        <div className="flex-1 flex flex-col gap-2">
          {plans.map(({ days, price, badge, badgeColor, bonus }, index) => (
            <div
              key={index}
              className={`flex items-center justify-between px-4 py-3 rounded-xl shadow-lg relative overflow-hidden bg-gradient-to-r ${PRICING_COLORS[index % PRICING_COLORS.length]}`}
            >
              {badge && (
                <div className={`absolute top-1 right-1 ${badgeColor} text-[8px] font-black px-2 py-0.5 rounded`}>
                  {badge}
                </div>
              )}
              <div>
                <div className="text-white font-bold text-base">{days}</div>
                <div className="text-white/80 text-xs">質問し放題</div>
                {bonus && (
                  <div className="text-yellow-300 text-[10px] font-bold mt-0.5">
                    🎁 {bonus}
                  </div>
                )}
              </div>
              <div className={`font-black text-white ${badge === 'おすすめ' ? 'text-2xl' : 'text-xl'}`}>
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
