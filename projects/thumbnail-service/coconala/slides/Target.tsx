'use client';

import SlideWrapper from '../SlideWrapper';
import { PinkTitleV2 } from '@/components/PinkTitleV2';
import { User, Briefcase, Store, Rocket } from 'lucide-react';
import { FONTS } from '@/constants/STYLES';
import { TARGET_COLORS } from '@/constants/COLORS';

// ========================================
// Target（こんな方におすすめ） - サービス画像制作代行
// 文字サイズ大きめ版
// ========================================

export function Target() {
  const targets = [
    {
      icon: <Rocket className="w-6 h-6 text-white" />,
      title: 'ココナラ初出品の方',
      description: '何を書けばいいかわからない',
      gradient: TARGET_COLORS[0],
    },
    {
      icon: <Store className="w-6 h-6 text-white" />,
      title: '売上を伸ばしたい方',
      description: '既存サービスを改善したい',
      gradient: TARGET_COLORS[1],
    },
    {
      icon: <Briefcase className="w-6 h-6 text-white" />,
      title: '本業に集中したい方',
      description: 'デザインに時間をかけられない',
      gradient: TARGET_COLORS[2],
    },
    {
      icon: <User className="w-6 h-6 text-white" />,
      title: 'デザインが苦手な方',
      description: 'プロのクオリティが欲しい',
      gradient: TARGET_COLORS[3],
    },
  ];

  return (
    <SlideWrapper slideNumber={6} slideName="target">
      <div className={`flex flex-col h-full ${FONTS.JAPANESE}`}>
        <PinkTitleV2 english="TARGET" japanese="こんな方におすすめ" />

        <div className="flex-1 flex flex-col gap-2.5 py-1">
          {targets.map(({ icon, title, description, gradient }, index) => (
            <div
              key={index}
              className={`flex-1 bg-gradient-to-r ${gradient} rounded-xl px-4 py-3 flex items-center gap-4 shadow-lg`}
            >
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                {icon}
              </div>
              <div className="flex-1">
                <h3 className="text-white font-bold text-lg leading-tight">{title}</h3>
                <p className="text-white/80 text-base leading-tight">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SlideWrapper>
  );
}
