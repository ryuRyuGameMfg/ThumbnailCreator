'use client';

import SlideWrapper from '../SlideWrapper';
import { Users, Calendar, Radio, Gamepad2 } from 'lucide-react';
import { PinkTitleV2 } from '@/components/PinkTitleV2';

export function UseCases() {
  const useCases = [
    {
      icon: <Users className="w-10 h-10 text-white" />,
      title: 'オンラインサロン',
      gradient: 'from-sky-500 to-sky-600',
    },
    {
      icon: <Calendar className="w-10 h-10 text-white" />,
      title: 'コミュニティイベント',
      gradient: 'from-sky-600 to-blue-600',
    },
    {
      icon: <Radio className="w-10 h-10 text-white" />,
      title: 'ライブ配信',
      gradient: 'from-sky-500 to-blue-600',
    },
    {
      icon: <Gamepad2 className="w-10 h-10 text-white" />,
      title: 'ゲームイベント',
      gradient: 'from-blue-600 to-indigo-600',
    },
  ];

  return (
    <SlideWrapper slideNumber={2} slideName="usecases">
      <div className="flex flex-col h-full font-hackgen">
        <PinkTitleV2 english="USE CASES" japanese="幅広い用途に対応可能" />
        
        <div className="flex-1 grid grid-cols-2 gap-3.5">
          {useCases.map(({ icon, title, gradient }, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${gradient} rounded-xl p-4 flex flex-col items-center justify-center shadow-lg`}
            >
              <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mb-3">
                {icon}
              </div>
              <h3 className="text-white font-bold text-lg text-center">{title}</h3>
            </div>
          ))}
        </div>
      </div>
    </SlideWrapper>
  );
}
