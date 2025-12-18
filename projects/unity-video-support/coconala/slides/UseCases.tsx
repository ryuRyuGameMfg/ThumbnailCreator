'use client';

import SlideWrapper from '../SlideWrapper';
import { Bug, GraduationCap, Code } from 'lucide-react';
import { PinkTitleV2 } from '@/components/PinkTitleV2';

export function UseCases() {
  const useCases = [
    {
      icon: <Bug className="w-10 h-10 text-white" />,
      title: 'バグ・エラー即時解決',
      description: '画面共有でリアルタイムに問題解決',
      gradient: 'from-sky-500 to-sky-600',
    },
    {
      icon: <GraduationCap className="w-10 h-10 text-white" />,
      title: '初心者向け開発サポート',
      description: 'ヒアリング→計画→講義',
      gradient: 'from-sky-600 to-blue-600',
    },
    {
      icon: <Code className="w-10 h-10 text-white" />,
      title: 'コードレビュー・基本操作',
      description: 'コードの改善点を丁寧に指導',
      gradient: 'from-sky-500 to-blue-600',
    },
  ];

  return (
    <SlideWrapper slideNumber={2} slideName="usecases">
      <div className="flex flex-col h-full font-hackgen">
        <PinkTitleV2 english="USE CASES" japanese="こんな相談に最適" />
        
        <div className="flex-1 flex flex-col gap-4">
          {useCases.map(({ icon, title, description, gradient }, index) => (
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
