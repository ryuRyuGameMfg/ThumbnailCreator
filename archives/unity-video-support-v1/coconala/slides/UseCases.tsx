'use client';

import SlideWrapper from '../SlideWrapper';
import { Bug, GraduationCap, Code } from 'lucide-react';

// ========================================
// UseCases（こんな相談に最適）
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
      icon: <Bug className="w-7 h-7 text-white" />,
      title: 'バグ・エラー即時解決',
      description: '画面共有でリアルタイムに問題解決',
      gradient: USECASES_COLORS[0],
    },
    {
      icon: <GraduationCap className="w-7 h-7 text-white" />,
      title: '初心者向け開発サポート',
      description: 'ヒアリング→計画→カリキュラム作成→毎月講義',
      gradient: USECASES_COLORS[1],
    },
    {
      icon: <Code className="w-7 h-7 text-white" />,
      title: 'コードレビュー・基本操作',
      description: 'コードの改善点や基本操作を丁寧に指導',
      gradient: USECASES_COLORS[2],
    },
  ];

  return (
    <SlideWrapper slideNumber={2} slideName="usecases">
      <div className="flex flex-col h-full font-hackgen">
        <SlideTitle english="USE CASES" japanese="こんな相談に最適" />
        
        <div className="flex-1 flex flex-col gap-3">
          {useCases.map(({ icon, title, description, gradient }, index) => (
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
