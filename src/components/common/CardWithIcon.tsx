'use client';

import { ReactNode } from 'react';
import { SIZES, BORDERS, SHADOWS, BG_OPACITY, TEXT_COLORS, FONT_SIZES, FONT_WEIGHTS, FONTS } from '@/constants/STYLES';

interface CardWithIconProps {
  icon: ReactNode;
  title: string;
  description: string;
  gradient: string;
  iconSize?: 'small' | 'medium' | 'large';
  iconBoxSize?: 'small' | 'medium' | 'large';
}

/**
 * アイコン付きカードコンポーネント
 * Flow, Features, UseCases, Deliverablesなどで使用
 */
export function CardWithIcon({
  icon,
  title,
  description,
  gradient,
  iconSize = 'medium',
  iconBoxSize = 'medium',
}: CardWithIconProps) {
  const iconSizeClass = {
    small: SIZES.ICON_SMALL,
    medium: SIZES.ICON_MEDIUM,
    large: SIZES.ICON_LARGE,
  }[iconSize];
  
  const iconBoxSizeClass = {
    small: SIZES.ICON_BOX_SMALL,
    medium: SIZES.ICON_BOX_MEDIUM,
    large: SIZES.ICON_BOX_LARGE,
  }[iconBoxSize];
  
  return (
    <div className={`flex-1 bg-gradient-to-r ${gradient} ${BORDERS.RADIUS_MEDIUM} p-4 flex items-center gap-4 ${SHADOWS.LARGE}`}>
      <div className={`${iconBoxSizeClass} ${BG_OPACITY.ICON_BOX} ${BORDERS.RADIUS_SMALL} flex items-center justify-center flex-shrink-0`}>
        <div className={iconSizeClass}>
          {icon}
        </div>
      </div>
      <div className="flex-1">
        <h3 className={`${TEXT_COLORS.WHITE} ${FONT_WEIGHTS.BOLD} ${FONT_SIZES.HEADING_SMALL} mb-1`}>
          {title}
        </h3>
        <p className={`${TEXT_COLORS.WHITE_HIGH} ${FONT_SIZES.BODY_MEDIUM} leading-relaxed`}>
          {description}
        </p>
      </div>
    </div>
  );
}
