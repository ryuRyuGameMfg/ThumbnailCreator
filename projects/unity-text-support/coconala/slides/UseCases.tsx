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

export function UseCases() {
  const useCases = [
    {
      icon: <Book className="w-8 h-8 text-white" />,
      title: 'Unityの基本操作',
      gradient: 'from-sky-400 to-sky-500',
    },
    {
      icon: <Bug className="w-8 h-8 text-white" />,
      title: 'バグやエラー解決',
      gradient: 'from-cyan-400 to-cyan-500',
    },
    {
      icon: <Code className="w-8 h-8 text-white" />,
      title: '開発アドバイス',
      gradient: 'from-teal-400 to-teal-500',
    },
    {
      icon: <Sparkles className="w-8 h-8 text-white" />,
      title: 'AI開発・Web制作',
      gradient: 'from-purple-400 to-purple-500',
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
