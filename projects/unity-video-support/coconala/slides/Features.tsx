'use client';

import SlideWrapper from '../SlideWrapper';
import { Monitor, BookOpen, Layers, MessageSquare, Clock } from 'lucide-react';

// ========================================
// Features（5つの特徴）
// ========================================

function SlideTitle({ english, japanese }: { english: string; japanese: string }) {
  return (
    <div className="text-center mb-3">
      <h1 className="font-melete text-[36px] font-bold text-sky-600 tracking-wider">
        {english}
      </h1>
      <p className="text-sm text-gray-500 font-hackgen">{japanese}</p>
    </div>
  );
}

import { FEATURES_COLORS, DELIVERABLES_COLORS } from '@/constants/COLORS';

export function Features() {
  const features = [
    {
      icon: <Monitor className="w-6 h-6 text-white" />,
      title: '画面共有で即時解決',
      description: 'リアルタイム解析',
      gradient: FEATURES_COLORS[0],
    },
    {
      icon: <BookOpen className="w-6 h-6 text-white" />,
      title: '初心者向け解説',
      description: 'かみ砕いて説明',
      gradient: FEATURES_COLORS[1],
    },
    {
      icon: <Layers className="w-6 h-6 text-white" />,
      title: '幅広い技術領域',
      description: '2D/3D・VR・AI対応',
      gradient: FEATURES_COLORS[2],
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-white" />,
      title: 'ヒアリング重視',
      description: '60分をフル活用',
      gradient: FEATURES_COLORS[3],
    },
    {
      icon: <Clock className="w-6 h-6 text-white" />,
      title: '柔軟な対応',
      description: 'DM返信保証',
      gradient: DELIVERABLES_COLORS[4], // 5項目目はDeliverablesの色を使用
    },
  ];

  return (
    <SlideWrapper slideNumber={1} slideName="features">
      <div className="flex flex-col h-full font-hackgen">
        <SlideTitle english="FEATURES" japanese="5つのサービスの特徴" />
        
        <div className="flex-1 flex flex-col gap-2">
          {features.slice(0, 3).map(({ icon, title, description, gradient }, index) => (
            <div
              key={index}
              className={`flex-1 bg-gradient-to-r ${gradient} rounded-xl p-3 flex items-center gap-3 shadow-lg`}
            >
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                {icon}
              </div>
              <div className="flex-1">
                <h3 className="text-white font-bold text-sm mb-0.5">{title}</h3>
                <p className="text-white/90 text-xs">{description}</p>
              </div>
            </div>
          ))}
          <div className="grid grid-cols-2 gap-2">
            {features.slice(3).map(({ icon, title, description, gradient }, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${gradient} rounded-xl p-2 flex flex-col items-center justify-center shadow-lg`}
              >
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mb-1">
                  {icon}
                </div>
                <h3 className="text-white font-bold text-xs text-center mb-0.5">{title}</h3>
                <p className="text-white/90 text-[10px] text-center">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}
