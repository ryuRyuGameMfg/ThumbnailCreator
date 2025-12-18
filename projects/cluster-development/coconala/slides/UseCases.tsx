'use client';

import SlideWrapper from '../SlideWrapper';
import { Users, Calendar, Radio, Gamepad2 } from 'lucide-react';

// ========================================
// UseCases（用途例）
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

export function UseCases() {
  const useCases = [
    {
      icon: <Users className="w-8 h-8 text-white" />,
      title: 'オンラインサロン',
      gradient: 'from-sky-400 to-sky-500',
    },
    {
      icon: <Calendar className="w-8 h-8 text-white" />,
      title: 'コミュニティイベント',
      gradient: 'from-cyan-400 to-cyan-500',
    },
    {
      icon: <Radio className="w-8 h-8 text-white" />,
      title: 'ライブ配信',
      gradient: 'from-teal-400 to-teal-500',
    },
    {
      icon: <Gamepad2 className="w-8 h-8 text-white" />,
      title: 'ゲームイベント',
      gradient: 'from-purple-400 to-purple-500',
    },
  ];

  return (
    <SlideWrapper slideNumber={2} slideName="usecases">
      <div className="flex flex-col h-full font-hackgen">
        <SlideTitle english="USE CASES" japanese="幅広い用途に対応可能" />
        
        <div className="flex-1 grid grid-cols-2 gap-4">
          {useCases.map(({ icon, title, gradient }, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${gradient} rounded-xl p-4 flex flex-col items-center justify-center shadow-lg`}
            >
              <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mb-3">
                {icon}
              </div>
              <h3 className="text-white font-bold text-base text-center">{title}</h3>
            </div>
          ))}
        </div>
      </div>
    </SlideWrapper>
  );
}

