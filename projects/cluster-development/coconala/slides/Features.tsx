'use client';

import SlideWrapper from '../SlideWrapper';
import { MessageSquare, Users, Radio } from 'lucide-react';
import { PinkTitleV2 } from '@/components/PinkTitleV2';

export function Features() {
  const features = [
    {
      icon: <MessageSquare className="w-8 h-8 text-white" />,
      title: '的確なヒアリング',
      description: 'アイデアをヒアリングシートで的確にキャッチ',
      gradient: 'from-sky-500 to-sky-600',
    },
    {
      icon: <Users className="w-8 h-8 text-white" />,
      title: '幅広い用途に適応',
      description: 'サロン、イベント、配信など多彩な活動に対応',
      gradient: 'from-sky-600 to-blue-600',
    },
    {
      icon: <Radio className="w-8 h-8 text-white" />,
      title: '丁寧なコミュニケーション',
      description: 'Unity開発サポートも提供し、ニーズに応える',
      gradient: 'from-sky-500 to-blue-600',
    },
  ];

  return (
    <SlideWrapper slideNumber={1} slideName="features">
      <div className="flex flex-col h-full font-hackgen">
        <PinkTitleV2 english="FEATURES" japanese="3つのサービスの特徴" />
        
        <div className="flex-1 flex flex-col gap-3.5">
          {features.map(({ icon, title, description, gradient }, index) => (
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
