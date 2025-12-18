'use client';

import { CheckCircle } from 'lucide-react';
import { BORDERS, SHADOWS, TEXT_COLORS, FONT_SIZES, FONT_WEIGHTS, FONTS, SIZES } from '@/constants/STYLES';
import { BLUE_PALETTE } from '@/constants/COLORS';

interface FAQItemProps {
  question: string;
  answer: string;
}

/**
 * FAQ項目コンポーネント
 * すべてのFAQスライドで統一されたスタイルを提供
 */
export function FAQItem({ question, answer }: FAQItemProps) {
  return (
    <div className={`bg-gradient-to-r from-${BLUE_PALETTE.LEVEL_1.LIGHT}/20 to-${BLUE_PALETTE.LEVEL_2.DARK}/20 ${BORDERS.BORDER_MEDIUM} ${BORDERS.BORDER_COLOR_LIGHT_ALPHA} ${BORDERS.RADIUS_MEDIUM} p-4 ${SHADOWS.SMALL} backdrop-blur`}>
      <div className="flex items-start gap-3 mb-2">
        <div className={`${SIZES.ICON_MEDIUM} bg-${BLUE_PALETTE.LEVEL_1.LIGHT} ${BORDERS.RADIUS_FULL} flex items-center justify-center flex-shrink-0 mt-0.5`}>
          <CheckCircle className="w-4 h-4 text-white" />
        </div>
        <h4 className={`${TEXT_COLORS.GRAY_DARK} ${FONT_WEIGHTS.BOLD} ${FONT_SIZES.BODY_MEDIUM} ${FONTS.JAPANESE} flex-1`}>
          {question}
        </h4>
      </div>
      <p className={`${TEXT_COLORS.GRAY_DEFAULT} ${FONT_SIZES.BODY_SMALL} leading-relaxed pl-9 ${FONTS.JAPANESE}`}>
        {answer}
      </p>
    </div>
  );
}
