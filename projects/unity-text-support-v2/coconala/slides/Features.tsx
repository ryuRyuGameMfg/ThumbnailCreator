'use client';

import SlideWrapper from '../SlideWrapper';
import { MessageSquare, Clock, Lightbulb, Users } from 'lucide-react';
import { PinkTitleV2 } from '@/components/PinkTitleV2';

// ========================================
// Features（4つの特徴）v2
// カラーレギュレーション: AI開発の4段階青色
// ========================================

export function Features() {
  const features = [
    {
      icon: <MessageSquare className="w-8 h-8 text-white" />,
      title: '24時間質問無制限',
      description: 'お好きな時に質問できます',
      gradient: 'from-sky-500 to-sky-600',
    },
    {
      icon: <Clock className="w-8 h-8 text-white" />,
      title: '迅速なフィードバック',
      description: '3時間以内に回答',
      gradient: 'from-sky-600 to-blue-600',
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-white" />,
      title: '多岐にわたるサポート',
      description: '基本から高度な技術まで',
      gradient: 'from-sky-500 to-blue-600',
    },
    {
      icon: <Users className="w-8 h-8 text-white" />,
      title: '丁寧なヒアリング',
      description: 'ニーズに徹底対応',
      gradient: 'from-blue-600 to-indigo-600',
    },
  ];

  return (
    <SlideWrapper slideNumber={1} slideName="features">
      <div className="flex flex-col h-full font-hackgen">
        <PinkTitleV2 english="FEATURES" japanese="4つのサービスの特徴" />
        
        <div className="flex-1 grid grid-cols-2 gap-4">
          {features.map(({ icon, title, description, gradient }, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${gradient} rounded-xl p-4 flex flex-col justify-center shadow-lg`}
            >
              <div className="w-14 h-14 bg-white/20 rounded-lg flex items-center justify-center mb-3 mx-auto">
                {icon}
              </div>
              <h3 className="text-white font-bold text-base text-center mb-2">{title}</h3>
              <p className="text-white/90 text-sm leading-tight text-center">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </SlideWrapper>
  );
}
