'use client';

import SlideWrapper from '../SlideWrapper';
import { Clock, Plus } from 'lucide-react';
import { PinkTitleV2 } from '@/components/PinkTitleV2';

export function Pricing() {
  const plans = [
    { duration: '60分', price: '5,500円', description: 'ビデオチャット相談', badge: null },
    { duration: '90分', price: '8,000円', description: '30分延長', badge: 'お得' },
    { duration: '120分', price: '10,500円', description: '60分延長', badge: null },
  ];

  return (
    <SlideWrapper slideNumber={4} slideName="pricing">
      <div className="flex flex-col h-full font-hackgen">
        <PinkTitleV2 english="PRICING" japanese="料金プラン" />
        
        <div className="flex-1 flex flex-col gap-3">
          {plans.map(({ duration, price, description, badge }, index) => (
            <div
              key={index}
              className="flex-1 bg-gradient-to-r from-sky-500 to-sky-600 rounded-xl p-4 flex items-center gap-4 shadow-lg"
            >
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-white font-bold text-xl">{duration}</span>
                  {badge && (
                    <span className="bg-yellow-400 text-yellow-900 text-xs font-black px-2 py-0.5 rounded">
                      {badge}
                    </span>
                  )}
                </div>
                <p className="text-white/90 text-sm">{description}</p>
              </div>
              <div className="text-white font-black text-2xl">{price}</div>
            </div>
          ))}
        </div>
      </div>
    </SlideWrapper>
  );
}
