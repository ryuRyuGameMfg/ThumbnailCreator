'use client';

import SlideWrapper from '../SlideWrapper';
import { Package, Upload, Wrench } from 'lucide-react';

// ========================================
// Deliverables（納品内容）
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

export function Deliverables() {
  const items = [
    {
      icon: <Package className="w-7 h-7 text-white" />,
      title: 'Clusterのワールド制作',
      description: 'お客様のご要望に合わせた完全カスタマイズ',
      gradient: 'from-sky-400 to-sky-500',
    },
    {
      icon: <Upload className="w-7 h-7 text-white" />,
      title: 'Clusterへのアップロード代行',
      description: 'すぐに使える状態でお届けします',
      gradient: 'from-cyan-400 to-blue-500',
    },
    {
      icon: <Wrench className="w-7 h-7 text-white" />,
      title: '30日間の無料修正',
      description: '納品後も安心のアフターサポート（一部有料）',
      gradient: 'from-blue-400 to-indigo-500',
    },
  ];

  return (
    <SlideWrapper slideNumber={3} slideName="deliverables">
      <div className="flex flex-col h-full font-hackgen">
        <SlideTitle english="SERVICE" japanese="充実なサービス内容" />
        
        <div className="flex-1 flex flex-col gap-3">
          {items.map(({ icon, title, description, gradient }, index) => (
            <div
              key={index}
              className={`flex-1 bg-gradient-to-r ${gradient} rounded-xl p-4 flex items-center gap-4 shadow-lg`}
            >
              <div className="w-14 h-14 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                {icon}
              </div>
              <div className="flex-1">
                <h3 className="text-white font-bold text-base mb-1">{title}</h3>
                <p className="text-white/90 text-sm leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SlideWrapper>
  );
}

