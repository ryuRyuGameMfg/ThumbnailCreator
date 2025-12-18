'use client';

import { ReactNode } from 'react';
import { BORDERS, SHADOWS, BG_OPACITY, TEXT_COLORS, FONT_SIZES, FONT_WEIGHTS } from '@/constants/STYLES';

interface StepCardProps {
  number: string;
  icon: ReactNode;
  title: string;
  description: string;
  gradient: string;
}

/**
 * ステップカードコンポーネント（2x2グリッド用）
 * Flowスライドで使用
 */
export function StepCard({ number, icon, title, description, gradient }: StepCardProps) {
  return (
    <div className={`bg-gradient-to-br ${gradient} ${BORDERS.RADIUS_MEDIUM} p-4 flex flex-col justify-between ${SHADOWS.LARGE} relative overflow-hidden`}>
      {/* 背景の大きな数字 */}
      <div className="absolute top-0 right-2 text-white/10 font-black text-7xl leading-none">
        {number}
      </div>
      
      {/* コンテンツ */}
      <div className="relative z-10">
        <div className={`w-14 h-14 ${BG_OPACITY.ICON_BOX} ${BORDERS.RADIUS_MEDIUM} flex items-center justify-center mb-3`}>
          {icon}
        </div>
        <h3 className={`${TEXT_COLORS.WHITE} ${FONT_WEIGHTS.BOLD} ${FONT_SIZES.HEADING_SMALL} mb-1 leading-tight`}>
          {title}
        </h3>
        <p className={`${TEXT_COLORS.WHITE_HIGH} ${FONT_SIZES.BODY_SMALL}`}>
          {description}
        </p>
      </div>
    </div>
  );
}
