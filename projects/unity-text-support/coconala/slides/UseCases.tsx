'use client';

import SlideWrapper from '../SlideWrapper';
import { Book, Bug, Code, Sparkles } from 'lucide-react';
import { PinkTitleV2 } from '@/components/PinkTitleV2';

// ========================================
// UseCases（サポート範囲）v2
// ========================================

export function UseCases() {
  const useCases = [
    {
      icon: <Book className="w-10 h-10 text-white" />,
      title: 'Unityの基本操作',
      gradient: 'from-sky-500 to-sky-600',
    },
    {
      icon: <Bug className="w-10 h-10 text-white" />,
      title: 'バグやエラー解決',
      gradient: 'from-sky-600 to-blue-600',
    },
    {
      icon: <Code className="w-10 h-10 text-white" />,
      title: 'ゲーム開発全般',
      gradient: 'from-sky-500 to-blue-600',
    },
    {
      icon: <Sparkles className="w-10 h-10 text-white" />,
      title: 'AI・Web も対応可',
      gradient: 'from-blue-600 to-indigo-600',
    },
  ];

  return (
    <SlideWrapper slideNumber={2} slideName="usecases">
      <div className="flex flex-col h-full font-hackgen">
        <PinkTitleV2 english="SUPPORT" japanese="サポート範囲" />
        
        <div className="flex-1 grid grid-cols-2 gap-4">
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
