'use client';

import SlideWrapper from '../SlideWrapper';
import { Monitor, BookOpen, Layers, MessageSquare, Clock } from 'lucide-react';
import { PinkTitleV2 } from '@/components/PinkTitleV2';

// ========================================
// Features（5つの特徴）v2 - セーフエリア調整
// ========================================

export function Features() {
  const features = [
    {
      icon: <Monitor className="w-7 h-7 text-white" />,
      title: '画面共有で即時解決',
      description: 'リアルタイム解析',
      gradient: 'from-sky-500 to-sky-600',
    },
    {
      icon: <BookOpen className="w-7 h-7 text-white" />,
      title: '初心者向け解説',
      description: 'かみ砕いて説明',
      gradient: 'from-sky-600 to-blue-600',
    },
    {
      icon: <Layers className="w-7 h-7 text-white" />,
      title: '幅広い技術領域',
      description: '2D/3D・VR・AI対応',
      gradient: 'from-sky-500 to-blue-600',
    },
    {
      icon: <MessageSquare className="w-7 h-7 text-white" />,
      title: 'ヒアリング重視',
      description: '60分をフル活用',
      gradient: 'from-blue-600 to-indigo-600',
    },
    {
      icon: <Clock className="w-7 h-7 text-white" />,
      title: '柔軟な対応',
      description: 'DM返信保証',
      gradient: 'from-sky-600 to-blue-600',
    },
  ];

  return (
    <SlideWrapper slideNumber={1} slideName="features">
      <div className="flex flex-col h-full font-hackgen">
        <PinkTitleV2 english="FEATURES" japanese="5つのサービスの特徴" />
        
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
                className={`bg-gradient-to-br ${gradient} rounded-xl p-2.5 flex flex-col items-center justify-center shadow-lg`}
              >
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mb-1.5">
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
