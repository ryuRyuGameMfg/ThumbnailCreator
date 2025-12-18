'use client';

import SlideWrapper from '../SlideWrapper';
import { Wrench, Calendar, MessageSquare } from 'lucide-react';

// ========================================
// PricingOptions（オプション料金）
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

export function PricingOptions() {
  const options = [
    {
      icon: <Wrench className="w-5 h-5 text-white" />,
      title: 'ファイルお預かり・即修復',
      price: '30,000円〜',
      note: 'お見積もり',
      gradient: 'from-sky-400 to-sky-500',
    },
    {
      icon: <Calendar className="w-5 h-5 text-white" />,
      title: '定額料金型・定期講座',
      price: 'お見積もり',
      note: 'メッセージでご相談ください',
      gradient: 'from-cyan-400 to-cyan-500',
    },
  ];

  return (
    <SlideWrapper slideNumber={5} slideName="pricing-options">
      <div className="flex flex-col h-full font-hackgen">
        <SlideTitle english="OPTIONS" japanese="オプション料金" />
        
        <div className="flex-1 flex flex-col gap-2">
          {options.map(({ icon, title, price, note, gradient }, index) => (
            <div
              key={index}
              className={`flex-1 bg-gradient-to-r ${gradient} rounded-xl p-3 flex items-center gap-3 shadow-lg`}
            >
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                {icon}
              </div>
              <div className="flex-1">
                <h3 className="text-white font-bold text-sm mb-1">{title}</h3>
                <p className="text-white font-bold text-lg">{price}</p>
                <p className="text-white/90 text-xs">{note}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-3 bg-gradient-to-r from-purple-50 to-sky-50 rounded-lg p-3 border border-sky-200">
          <div className="flex items-start gap-2">
            <MessageSquare className="w-4 h-4 text-sky-600 flex-shrink-0 mt-0.5" />
            <p className="text-xs text-gray-700 font-hackgen leading-relaxed">
              メッセージでご相談いただければ、柔軟に対応いたします。毎月定期的な講座型のプランもご用意できますので、お気軽にお問い合わせください。
            </p>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}
