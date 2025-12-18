'use client';

import { FONTS, FONT_SIZES, FONT_WEIGHTS, TEXT_COLORS, SPACING } from '@/constants/STYLES';

interface SlideTitleProps {
  english: string;
  japanese: string;
  variant?: 'default' | 'large';
}

/**
 * スライドタイトルコンポーネント
 * すべてのスライドで統一されたタイトルスタイルを提供
 */
export function SlideTitle({ english, japanese, variant = 'default' }: SlideTitleProps) {
  const fontSize = variant === 'large' ? FONT_SIZES.TITLE_ENGLISH_LARGE : FONT_SIZES.TITLE_ENGLISH;
  
  return (
    <div className={`text-center ${SPACING.TITLE_CONTENT_GAP}`}>
      <h1 className={`${FONTS.ENGLISH} ${fontSize} ${FONT_WEIGHTS.BOLD} ${TEXT_COLORS.TITLE_PRIMARY} tracking-wider`}>
        {english}
      </h1>
      <p className={`${FONT_SIZES.SUBTITLE_JAPANESE} ${TEXT_COLORS.GRAY_LIGHT} ${FONTS.JAPANESE}`}>
        {japanese}
      </p>
    </div>
  );
}
