'use client';

import SlideWrapper from '../SlideWrapper';
import { MessageSquareText, Image, Video } from 'lucide-react';
import { PinkTitleV2 } from '@/components/PinkTitleV2';

// ========================================
// Deliverables（サービス内容）v2
// ========================================

export function Deliverables() {
  const items = [
    {
      icon: <MessageSquareText className="w-8 h-8 text-white" />,
      title: '72時間質問し放題',
      description: 'テキストチャットで徹底サポート',
      gradient: 'from-sky-500 to-sky-600',
    },
    {
      icon: <Image className="w-8 h-8 text-white" />,
      title: '多様なサポート形式',
      description: 'テキスト・画像・動画・URLで回答',
      gradient: 'from-sky-600 to-blue-600',
    },
    {
      icon: <Video className="w-8 h-8 text-white" />,
      title: 'プログラム提供',
      description: 'コードやプロジェクトファイルも共有',
      gradient: 'from-sky-500 to-blue-600',
    },
  ];

  return (
    <SlideWrapper slideNumber={3} slideName="deliverables">
      <div className="flex flex-col h-full font-hackgen">
        <PinkTitleV2 english="SERVICE" japanese="サービス内容" />
        
        <div className="flex-1 flex flex-col gap-4">
          {items.map(({ icon, title, description, gradient }, index) => (
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
