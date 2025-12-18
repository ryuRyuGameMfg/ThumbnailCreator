'use client';

import SlideWrapper from '../SlideWrapper';
import { Clock, Plus } from 'lucide-react';

// ========================================
// Pricing（料金プラン）
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

import { PRICING_COLORS } from '@/constants/COLORS';

export function Pricing() {
  const plans = [
    {
      duration: '60分',
      price: '5,500円',
      description: 'ビデオチャット相談',
      icon: <Clock className="w-6 h-6 text-white" />,
      gradient: PRICING_COLORS[0],
    },
    {
      duration: '90分',
      price: '8,000円',
      description: '30分延長（+2,500円）',
      icon: <Plus className="w-6 h-6 text-white" />,
      gradient: PRICING_COLORS[1],
    },
    {
      duration: '120分',
      price: '10,500円',
      description: '60分延長（+5,000円）',
      icon: <Plus className="w-6 h-6 text-white" />,
      gradient: PRICING_COLORS[2],
    },
  ];

  return (
    <SlideWrapper slideNumber={4} slideName="pricing">
      <div className="flex flex-col h-full font-hackgen">
        <SlideTitle english="PRICING" japanese="料金プラン" />
        
        <div className="flex-1 flex flex-col gap-3">
          {plans.map(({ duration, price, description, icon, gradient }, index) => (
            <div
              key={index}
              className={`flex-1 bg-gradient-to-r ${gradient} rounded-xl p-4 flex items-center gap-4 shadow-lg`}
            >
              <div className="w-14 h-14 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                {icon}
              </div>
              <div className="flex-1">
                <div className="flex items-baseline gap-2 mb-1">
                  <h3 className="text-white font-bold text-xl">{duration}</h3>
                  <span className="text-white/90 text-sm">{description}</span>
                </div>
                <p className="text-white font-bold text-2xl">{price}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-3 bg-gradient-to-r from-sky-50 to-blue-50 rounded-lg p-3 border border-sky-200">
          <p className="text-xs text-gray-600 font-hackgen leading-relaxed">
            ※ 詳細なオプションは次ページをご覧ください
          </p>
        </div>
      </div>
    </SlideWrapper>
  );
}
