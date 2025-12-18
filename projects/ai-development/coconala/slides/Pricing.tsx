'use client';

import SlideWrapper from '../SlideWrapper';
import { Check } from 'lucide-react';
import { PinkTitleV2 } from '@/components/PinkTitleV2';
import { PRICING_COLORS } from '@/constants/COLORS';
import { FONTS } from '@/constants/STYLES';

// ========================================
// Pricing（料金プラン）v2 - AI開発サービス
// カラーレギュレーション: PRICING_COLORSを使用（3プラン）
// V1と同じ内容（ベーシック、スタンダード、プロ）
// ========================================

export function Pricing() {
  const plans = [
    {
      name: 'ベーシック',
      price: '75,000円',
      badge: '期間限定',
      features: ['アプリ×1', 'キャラカスタム', '音声カスタム', '専門知識学習', 'サポート30日'],
      gradient: PRICING_COLORS[0], // sky-600
    },
    {
      name: 'スタンダード',
      price: '200,000円',
      badge: 'おすすめ',
      features: ['アプリ×2', 'キャラカスタム', '音声カスタム', '専門知識学習', 'サポート30日'],
      gradient: PRICING_COLORS[1], // blue-600
      recommended: true,
    },
    {
      name: 'プロ',
      price: '350,000円',
      features: ['アプリ×4', 'キャラカスタム', '音声カスタム', '専門知識学習', 'サポート30日'],
      gradient: PRICING_COLORS[2], // indigo-600
    },
  ];

  return (
    <SlideWrapper slideNumber={9} slideName="pricing">
      <div className={`flex flex-col h-full ${FONTS.JAPANESE}`}>
        <PinkTitleV2 english="PRICING" japanese="料金プラン" />

        <div className="flex-1 flex flex-col gap-2">
          {/* プラン */}
          <div className="grid grid-cols-3 gap-2">
            {plans.map(({ name, price, badge, features, gradient }, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${gradient} rounded-xl p-2.5 flex flex-col shadow-lg relative`}
              >
                {badge && (
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 bg-pink-500 text-white text-[9px] font-bold px-2.5 py-0.5 rounded-full whitespace-nowrap">
                    {badge}
                  </div>
                )}
                <div className="text-center mb-2">
                  <h3 className="text-white font-bold text-sm mb-0.5">{name}</h3>
                  <p className="text-white text-base font-black">{price}</p>
                </div>
                <div className="flex-1 space-y-0.5">
                  {features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-1.5">
                      <Check className="w-3 h-3 text-white flex-shrink-0 mt-0.5" />
                      <span className="text-white/90 text-[9px] leading-tight">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* まとめ割引・年間サポート */}
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-gradient-to-br from-pink-500 to-rose-600 rounded-xl p-2 text-center shadow-lg">
              <p className="text-white font-bold text-xs mb-0.5">まとめ割引</p>
              <p className="text-white/90 text-[9px] leading-tight">2アプリ目〜10%OFF</p>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-violet-600 rounded-xl p-2 text-center shadow-lg">
              <p className="text-white font-bold text-xs mb-0.5">年間サポート</p>
              <p className="text-white/90 text-[9px] leading-tight">100,000円/年</p>
            </div>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}
