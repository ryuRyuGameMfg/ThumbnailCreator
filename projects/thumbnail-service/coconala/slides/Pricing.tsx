'use client';

import SlideWrapper from '../SlideWrapper';
import { Check } from 'lucide-react';
import { PinkTitleV2 } from '@/components/PinkTitleV2';
import { PRICING_COLORS } from '@/constants/COLORS';
import { FONTS } from '@/constants/STYLES';

// ========================================
// Pricing（料金プラン） - サービス画像制作代行
// 文字サイズ大きめ版
// ========================================

export function Pricing() {
  const plans = [
    {
      name: '基本プラン',
      price: '10,000円',
      badge: '人気',
      features: ['10枚セット', '構成提案込み', '修正2回無料', '3日納品', 'PNG/JPEG'],
      gradient: PRICING_COLORS[1],
      recommended: true,
    },
  ];

  const options = [
    { name: '追加1枚', price: '+3,000円' },
    { name: '追加修正1回', price: '+3,000円' },
    { name: '特急（24h）', price: '+5,000円' },
    { name: 'ランサーズ版', price: '+3,000円' },
  ];

  return (
    <SlideWrapper slideNumber={8} slideName="pricing">
      <div className={`flex flex-col h-full ${FONTS.JAPANESE}`}>
        <PinkTitleV2 english="PRICING" japanese="料金プラン" />

        <div className="flex-1 flex flex-col gap-3">
          {/* メインプラン */}
          {plans.map(({ name, price, badge, features, gradient }, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${gradient} rounded-xl p-5 shadow-lg relative`}
            >
              {badge && (
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 bg-pink-500 text-white text-sm font-bold px-4 py-1 rounded-full whitespace-nowrap">
                  {badge}
                </div>
              )}
              <div className="text-center mb-4">
                <h3 className="text-white font-bold text-xl mb-1">{name}</h3>
                <p className="text-white text-3xl font-black">{price}</p>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-white flex-shrink-0" />
                    <span className="text-white/90 text-base">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* オプション */}
          <div className="bg-gradient-to-r from-sky-500/20 to-blue-600/20 border-2 border-sky-500/50 rounded-xl p-4 shadow-sm">
            <h4 className="text-white font-bold text-base mb-3 text-center">オプション</h4>
            <div className="grid grid-cols-2 gap-2">
              {options.map(({ name, price }, idx) => (
                <div key={idx} className="flex items-center justify-between bg-white/10 rounded-lg px-3 py-2">
                  <span className="text-white/90 text-sm">{name}</span>
                  <span className="text-sky-300 text-sm font-bold">{price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}
