'use client';

import SlideWrapper from '../SlideWrapper';
import { PinkTitleV2 } from '@/components/PinkTitleV2';
import { TrendingUp, Clock, Heart, Eye } from 'lucide-react';
import { FONTS } from '@/constants/STYLES';
import { FEATURES_COLORS } from '@/constants/COLORS';

// ========================================
// Benefits（得られる成果） - サービス画像制作代行
// 文字サイズ大きめ版
// ========================================

export function Benefits() {
  const benefits = [
    {
      icon: <Eye className="w-7 h-7 text-white" />,
      title: 'クリック率UP',
      description: '目を引くデザイン',
      gradient: FEATURES_COLORS[0],
    },
    {
      icon: <TrendingUp className="w-7 h-7 text-white" />,
      title: '成約率UP',
      description: '論理的な構成',
      gradient: FEATURES_COLORS[1],
    },
    {
      icon: <Clock className="w-7 h-7 text-white" />,
      title: '時間節約',
      description: '本業に集中できる',
      gradient: FEATURES_COLORS[2],
    },
    {
      icon: <Heart className="w-7 h-7 text-white" />,
      title: '信頼感UP',
      description: 'プロ感で安心',
      gradient: FEATURES_COLORS[3],
    },
  ];

  return (
    <SlideWrapper slideNumber={5} slideName="benefits">
      <div className={`flex flex-col h-full ${FONTS.JAPANESE}`}>
        <PinkTitleV2 english="BENEFITS" japanese="得られる成果" />

        <div className="flex-1 grid grid-cols-2 gap-3">
          {benefits.map(({ icon, title, description, gradient }, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${gradient} rounded-xl p-4 flex flex-col shadow-lg relative overflow-hidden`}
            >
              <div className="absolute top-0 right-2 text-white/10 font-black text-6xl leading-none">
                {index + 1}
              </div>

              <div className="relative z-10 flex items-start gap-3">
                <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  {icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-bold text-lg mb-1 leading-tight">{title}</h3>
                  <p className="text-white/90 text-base leading-tight">{description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* フッター */}
        <div className="mt-3 text-center">
          <p className="text-lg text-white/90">
            売れるサービスに生まれ変わる!
          </p>
        </div>
      </div>
    </SlideWrapper>
  );
}
