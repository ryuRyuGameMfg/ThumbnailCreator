'use client';

import SlideWrapper from '../SlideWrapper';
import { Book, Bug, Code, Sparkles } from 'lucide-react';

// ========================================
// UseCases（サポート範囲）
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

import { USECASES_COLORS } from '@/constants/COLORS';

export function UseCases() {
  const useCases = [
    {
      icon: <Book className="w-8 h-8 text-white" />,
      title: 'Unityの基本操作',
      gradient: USECASES_COLORS[0],
    },
    {
      icon: <Bug className="w-8 h-8 text-white" />,
      title: 'バグやエラー解決',
      gradient: USECASES_COLORS[1],
    },
    {
      icon: <Code className="w-8 h-8 text-white" />,
      title: '開発アドバイス',
      gradient: USECASES_COLORS[2],
    },
    {
      icon: <Sparkles className="w-8 h-8 text-white" />,
      title: 'AI開発・Web制作',
      gradient: USECASES_COLORS[3],
    },
  ];

  return (
    <SlideWrapper slideNumber={2} slideName="usecases">
      <div className="flex flex-col h-full font-hackgen">
        <SlideTitle english="SUPPORT" japanese="サポート範囲" />
        
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
