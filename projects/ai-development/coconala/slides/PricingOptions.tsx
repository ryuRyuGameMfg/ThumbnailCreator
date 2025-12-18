'use client';

import SlideWrapper from '../SlideWrapper';
import { Building2, HeadphonesIcon } from 'lucide-react';
import { PinkTitleV2 } from '@/components/PinkTitleV2';
import { STEP_GRADIENTS } from '@/constants/COLORS';
import { FONTS } from '@/constants/STYLES';

// ========================================
// PricingOptions（オプション料金）v2 - AI開発サービス
// カラーレギュレーション: STEP_GRADIENTSを使用
// ========================================

export function PricingOptions() {
  const options = [
    {
      icon: <Building2 className="w-7 h-7 text-white" />,
      title: '法人ライセンス',
      price: '100,000円',
      note: '商用利用・再配布可能',
      gradient: STEP_GRADIENTS.LIGHT, // sky-500 to sky-600
    },
    {
      icon: <HeadphonesIcon className="w-7 h-7 text-white" />,
      title: '年間サポート',
      price: '100,000円',
      note: '機能追加・保守対応',
      gradient: STEP_GRADIENTS.MIDDLE, // sky-600 to blue-600
    },
  ];

  return (
    <SlideWrapper slideNumber={10} slideName="pricing-options">
      <div className={`flex flex-col h-full ${FONTS.JAPANESE}`}>
        <PinkTitleV2 english="OPTIONS" japanese="オプション料金" />

        <div className="flex-1 flex flex-col gap-4">
          {options.map(({ icon, title, price, note, gradient }, index) => (
            <div
              key={index}
              className={`flex-1 bg-gradient-to-r ${gradient} rounded-xl p-5 flex items-center gap-4 shadow-lg`}
            >
              <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                {icon}
              </div>
              <div className="flex-1">
                <h3 className="text-white font-bold text-lg mb-1.5">{title}</h3>
                <p className="text-white font-bold text-2xl mb-1">{price}</p>
                <p className="text-white/90 text-sm">{note}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-3 bg-white/10 border border-white/30 rounded-lg p-3.5 backdrop-blur">
          <p className="text-sm text-white leading-relaxed text-center">
            メッセージでご相談いただければ、柔軟に対応いたします。
          </p>
        </div>
      </div>
    </SlideWrapper>
  );
}
