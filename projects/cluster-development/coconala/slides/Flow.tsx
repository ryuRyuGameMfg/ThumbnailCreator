'use client';

import SlideWrapper from '../SlideWrapper';
import { MessageCircle, ShoppingCart, Code, Upload } from 'lucide-react';

// ========================================
// Flow（サービスの流れ）
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

export function Flow() {
  const steps = [
    {
      number: '1',
      icon: <MessageCircle className="w-5 h-5 text-white" />,
      title: '無料相談・お見積り',
      duration: '即日〜3日',
      gradient: 'from-sky-500 to-sky-500',
    },
    {
      number: '2',
      icon: <ShoppingCart className="w-5 h-5 text-white" />,
      title: 'ご購入・仕様確定',
      duration: '1〜2日',
      gradient: 'from-blue-500 to-blue-500',
    },
    {
      number: '3',
      icon: <Code className="w-5 h-5 text-white" />,
      title: '開発 & β版→修正',
      duration: '5日〜',
      gradient: 'from-indigo-500 to-indigo-500',
    },
    {
      number: '4',
      icon: <Upload className="w-5 h-5 text-white" />,
      title: 'Clusterへアップロード',
      duration: '即日',
      gradient: 'from-violet-500 to-violet-500',
    },
  ];

  return (
    <SlideWrapper slideNumber={5} slideName="flow">
      <div className="flex flex-col h-full font-hackgen">
        <SlideTitle english="FLOW" japanese="サービスの流れ" />
        
        <div className="flex-1 grid grid-cols-2 gap-3">
          {steps.map(({ number, icon, title, duration, gradient }, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${gradient} rounded-xl p-4 flex flex-col justify-between shadow-lg relative overflow-hidden`}
            >
              {/* 背景の大きな数字 */}
              <div className="absolute top-0 right-2 text-white/10 font-black text-6xl leading-none">
                {number}
              </div>
              
              {/* コンテンツ */}
              <div className="relative z-10">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-2">
                  {icon}
                </div>
                <h3 className="text-white font-bold text-sm mb-1 leading-tight">{title}</h3>
                <p className="text-white/90 text-xs">{duration}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-3 text-center">
          <p className="text-xs text-gray-500">
            ご不安な方は無料相談からOK
          </p>
        </div>
      </div>
    </SlideWrapper>
  );
}

