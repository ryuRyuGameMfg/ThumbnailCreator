'use client';

import SlideWrapper from '../SlideWrapper';
import { Package, Upload, Wrench } from 'lucide-react';
import { PinkTitleV2 } from '@/components/PinkTitleV2';

export function Deliverables() {
  const items = [
    {
      icon: <Package className="w-8 h-8 text-white" />,
      title: 'Clusterのワールド制作',
      description: 'お客様のご要望に合わせた完全カスタマイズ',
      gradient: 'from-sky-500 to-sky-600',
    },
    {
      icon: <Upload className="w-8 h-8 text-white" />,
      title: 'Clusterへのアップロード代行',
      description: 'すぐに使える状態でお届けします',
      gradient: 'from-sky-600 to-blue-600',
    },
    {
      icon: <Wrench className="w-8 h-8 text-white" />,
      title: '30日間の無料修正',
      description: '納品後も安心のアフターサポート（一部有料）',
      gradient: 'from-sky-500 to-blue-600',
    },
  ];

  return (
    <SlideWrapper slideNumber={3} slideName="deliverables">
      <div className="flex flex-col h-full font-hackgen">
        <PinkTitleV2 english="SERVICE" japanese="充実なサービス内容" />
        
        <div className="flex-1 flex flex-col gap-3.5">
          {items.map(({ icon, title, description, gradient }, index) => (
            <div
              key={index}
              className={`flex-1 bg-gradient-to-r ${gradient} rounded-xl p-4 flex items-center gap-4 shadow-lg`}
            >
              <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                {icon}
              </div>
              <div className="flex-1">
                <h3 className="text-white font-bold text-lg mb-1">{title}</h3>
                <p className="text-white/90 text-base leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SlideWrapper>
  );
}
