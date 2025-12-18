'use client';

import SlideWrapper from '../SlideWrapper';
import { Wrench, Calendar } from 'lucide-react';
import { PinkTitleV2 } from '@/components/PinkTitleV2';

export function PricingOptions() {
  const options = [
    {
      icon: <Wrench className="w-6 h-6 text-white" />,
      title: 'ファイルお預かり・即修復',
      price: '30,000円〜',
      note: 'お見積もり',
      gradient: 'from-sky-500 to-sky-600',
    },
    {
      icon: <Calendar className="w-6 h-6 text-white" />,
      title: '定額料金型・定期講座',
      price: 'お見積もり',
      note: '毎月定期的な講座も対応',
      gradient: 'from-sky-600 to-blue-600',
    },
  ];

  return (
    <SlideWrapper slideNumber={5} slideName="pricing-options">
      <div className="flex flex-col h-full font-hackgen">
        <PinkTitleV2 english="OPTIONS" japanese="オプション料金" />
        
        <div className="flex-1 flex flex-col gap-3">
          {options.map(({ icon, title, price, note, gradient }, index) => (
            <div
              key={index}
              className={`flex-1 bg-gradient-to-r ${gradient} rounded-xl p-4 flex items-center gap-3 shadow-lg`}
            >
              <div className="w-14 h-14 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                {icon}
              </div>
              <div className="flex-1">
                <h3 className="text-white font-bold text-base mb-1">{title}</h3>
                <p className="text-white font-bold text-xl">{price}</p>
                <p className="text-white/90 text-sm">{note}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-2 bg-white/10 border border-white/30 rounded-lg p-3 backdrop-blur">
          <p className="text-sm text-white leading-relaxed text-center">
            メッセージでご相談いただければ、柔軟に対応いたします。
          </p>
        </div>
      </div>
    </SlideWrapper>
  );
}
