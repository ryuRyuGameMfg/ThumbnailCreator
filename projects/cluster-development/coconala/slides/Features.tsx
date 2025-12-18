'use client';

import SlideWrapper from '../SlideWrapper';
import { MessageSquare, Users, Radio, Gamepad2 } from 'lucide-react';

// ========================================
// Features（3つの特徴）
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

export function Features() {
  const features = [
    {
      icon: <MessageSquare className="w-7 h-7 text-white" />,
      title: '的確なヒアリング',
      description: 'アイデアをヒアリングシートで的確にキャッチ',
      gradient: 'from-sky-400 to-sky-500',
    },
    {
      icon: <Users className="w-7 h-7 text-white" />,
      title: '幅広い用途に適応',
      description: 'サロン、イベント、配信など多彩な活動に対応',
      gradient: 'from-cyan-400 to-cyan-500',
    },
    {
      icon: <Radio className="w-7 h-7 text-white" />,
      title: '丁寧なコミュニケーション',
      description: 'Unity開発サポートも提供し、ニーズに応える',
      gradient: 'from-blue-400 to-blue-500',
    },
  ];

  return (
    <SlideWrapper slideNumber={1} slideName="features">
      <div className="flex flex-col h-full font-hackgen">
        <SlideTitle english="FEATURES" japanese="3つのサービスの特徴" />
        
        <div className="flex-1 flex flex-col gap-3">
          {features.map(({ icon, title, description, gradient }, index) => (
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

