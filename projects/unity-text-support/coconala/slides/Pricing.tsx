'use client';

import SlideWrapper from '../SlideWrapper';
import { Coins } from 'lucide-react';
import { PinkTitleV2 } from '@/components/PinkTitleV2';

// ========================================
// Pricing（料金）v2 - サイズと色を統一
// ========================================

export function Pricing() {
  const plans = [
    { days: '3日間', price: '8,000円', badge: '人気', badgeColor: 'bg-pink-400 text-pink-900', bonus: null },
    { days: '5日間', price: '12,000円', badge: 'おすすめ', badgeColor: 'bg-yellow-400 text-yellow-900', bonus: null },
    { days: '7日間', price: '15,000円', badge: null, badgeColor: null, bonus: null },
    { days: '30日間', price: '55,000円', badge: null, badgeColor: null, bonus: 'ビデオチャット60分無料特典' },
  ];

  return (
    <SlideWrapper slideNumber={4} slideName="pricing">
      <div className="flex flex-col h-full font-hackgen">
        <PinkTitleV2 english="PRICING" japanese="料金プラン（固定料金）" />
        
        <div className="flex-1 flex flex-col gap-2.5">
          {plans.map(({ days, price, badge, badgeColor, bonus }, index) => (
            <div
              key={index}
              className="flex items-center justify-between px-4 py-3 rounded-xl shadow-lg bg-gradient-to-r from-sky-500 to-sky-600"
            >
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-white font-bold text-lg">{days}</span>
                  {badge && (
                    <span className={`${badgeColor} text-xs font-black px-2 py-0.5 rounded`}>
                      {badge}
                    </span>
                  )}
                </div>
                <div className="text-white/90 text-sm">
                  質問し放題
                  {bonus && <span className="ml-2 text-yellow-300 font-bold">+ {bonus}</span>}
                </div>
              </div>
              <div className="font-black text-white text-2xl">
                {price}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SlideWrapper>
  );
}
