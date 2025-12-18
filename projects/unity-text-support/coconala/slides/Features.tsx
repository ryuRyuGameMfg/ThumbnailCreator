'use client';

import SlideWrapper from '../SlideWrapper';
import { MessageSquare, Clock, Lightbulb, Users } from 'lucide-react';

// ========================================
// Features（4つの特徴）
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
      title: '24時間質問無制限',
      description: 'お好きな時に、お好きなだけ質問できます',
      gradient: 'from-sky-400 to-sky-500',
    },
    {
      icon: <Clock className="w-7 h-7 text-white" />,
      title: '迅速なフィードバック',
      description: 'お問い合わせから3時間以内に回答',
      gradient: 'from-cyan-400 to-cyan-500',
    },
    {
      icon: <Lightbulb className="w-7 h-7 text-white" />,
      title: '多岐にわたるサポート',
      description: '基本から高度なテクニックまで幅広く対応',
      gradient: 'from-blue-400 to-blue-500',
    },
    {
      icon: <Users className="w-7 h-7 text-white" />,
      title: '丁寧なヒアリング',
      description: 'お客様のニーズに徹底的に応えます',
      gradient: 'from-indigo-400 to-indigo-500',
    },
  ];

  return (
    <SlideWrapper slideNumber={1} slideName="features">
      <div className="flex flex-col h-full font-hackgen">
        <SlideTitle english="FEATURES" japanese="4つのサービスの特徴" />
        
        <div className="flex-1 grid grid-cols-2 gap-3">
          {features.map(({ icon, title, description, gradient }, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${gradient} rounded-xl p-3 flex flex-col justify-center shadow-lg`}
            >
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-2 mx-auto">
                {icon}
              </div>
              <h3 className="text-white font-bold text-sm text-center mb-1">{title}</h3>
              <p className="text-white/90 text-xs leading-tight text-center">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </SlideWrapper>
  );
}

