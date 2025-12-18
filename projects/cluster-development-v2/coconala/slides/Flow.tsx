'use client';

import SlideWrapper from '../SlideWrapper';
import { MessageCircle, ShoppingCart, Code, Upload } from 'lucide-react';
import { PinkTitleV2 } from '@/components/PinkTitleV2';

export function Flow() {
  const steps = [
    {
      number: '1',
      icon: <MessageCircle className="w-6 h-6 text-white" />,
      title: '無料相談・お見積り',
      description: '即日〜3日',
      gradient: 'from-sky-500 to-sky-500',
    },
    {
      number: '2',
      icon: <ShoppingCart className="w-6 h-6 text-white" />,
      title: 'ご購入・仕様確定',
      description: '1〜2日',
      gradient: 'from-blue-500 to-blue-500',
    },
    {
      number: '3',
      icon: <Code className="w-6 h-6 text-white" />,
      title: '開発 & β版→修正',
      description: '5日〜',
      gradient: 'from-indigo-500 to-indigo-500',
    },
    {
      number: '4',
      icon: <Upload className="w-6 h-6 text-white" />,
      title: 'Clusterへアップロード',
      description: '即日',
      gradient: 'from-violet-500 to-violet-500',
    },
  ];

  return (
    <SlideWrapper slideNumber={6} slideName="flow">
      <div className="flex flex-col h-full font-hackgen">
        <PinkTitleV2 english="FLOW" japanese="サービスの流れ" />
        
        <div className="flex-1 grid grid-cols-2 gap-3">
          {steps.map(({ number, icon, title, description, gradient }, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${gradient} rounded-xl p-3.5 flex flex-col justify-between shadow-lg relative overflow-hidden`}
            >
              <div className="absolute top-0 right-2 text-white/10 font-black text-7xl leading-none">
                {number}
              </div>
              
              <div className="relative z-10">
                <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-2">
                  {icon}
                </div>
                <h3 className="text-white font-bold text-base mb-1 leading-tight">{title}</h3>
                <p className="text-white/90 text-sm">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SlideWrapper>
  );
}
