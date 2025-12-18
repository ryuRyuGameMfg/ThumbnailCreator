'use client';

import SlideWrapper from '../SlideWrapper';
import { PinkTitleV2 } from '@/components/PinkTitleV2';
import { Zap, FileText, Palette, RefreshCw } from 'lucide-react';
import { FONTS } from '@/constants/STYLES';
import { FEATURES_COLORS } from '@/constants/COLORS';

// ========================================
// Features（選ばれる理由） - サービス画像制作代行
// 文字サイズ大きめ版
// ========================================

export function Features() {
  const features = [
    {
      icon: <Zap className="w-7 h-7 text-white" />,
      title: '爆速3日納品',
      description: '最短で高品質を実現',
      gradient: FEATURES_COLORS[0],
    },
    {
      icon: <FileText className="w-7 h-7 text-white" />,
      title: '売れる構成',
      description: 'マーケティング理論',
      gradient: FEATURES_COLORS[1],
    },
    {
      icon: <Palette className="w-7 h-7 text-white" />,
      title: 'プロデザイン',
      description: '統一感ある仕上がり',
      gradient: FEATURES_COLORS[2],
    },
    {
      icon: <RefreshCw className="w-7 h-7 text-white" />,
      title: '修正2回無料',
      description: '納得いくまで対応',
      gradient: FEATURES_COLORS[3],
    },
  ];

  return (
    <SlideWrapper slideNumber={4} slideName="features">
      <div className={`flex flex-col h-full ${FONTS.JAPANESE}`}>
        <PinkTitleV2 english="FEATURES" japanese="選ばれる4つの理由" />

        <div className="flex-1 grid grid-cols-2 gap-3">
          {features.map(({ icon, title, description, gradient }, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${gradient} rounded-xl p-4 flex flex-col justify-between shadow-lg relative overflow-hidden`}
            >
              <div className="absolute top-0 right-2 text-white/10 font-black text-7xl leading-none">
                {index + 1}
              </div>

              <div className="relative z-10">
                <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-3">
                  {icon}
                </div>
                <h3 className="text-white font-bold text-lg mb-1 leading-tight">{title}</h3>
                <p className="text-white/90 text-base">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SlideWrapper>
  );
}
