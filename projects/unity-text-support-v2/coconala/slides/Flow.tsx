'use client';

import SlideWrapper from '../SlideWrapper';
import { MessageCircle, ShoppingCart, MessageSquare, CheckCircle } from 'lucide-react';
import { PinkTitleV2 } from '@/components/PinkTitleV2';
import { StepCard } from '@/components/common';
import { FLOW_COLORS } from '@/constants/COLORS';
import { FONT_SIZES, TEXT_COLORS, FONTS, SPACING } from '@/constants/STYLES';

// ========================================
// Flow（サービスの流れ）v2
// レギュレーション準拠版
// ========================================

export function Flow() {
  const steps = [
    {
      number: '1',
      icon: <MessageCircle className="w-6 h-6 text-white" />,
      title: '無料相談',
      description: '見積もり相談',
      gradient: FLOW_COLORS[0],
    },
    {
      number: '2',
      icon: <ShoppingCart className="w-6 h-6 text-white" />,
      title: 'ご購入',
      description: '手続き完了',
      gradient: FLOW_COLORS[1],
    },
    {
      number: '3',
      icon: <MessageSquare className="w-6 h-6 text-white" />,
      title: '開始',
      description: '72時間サポート',
      gradient: FLOW_COLORS[2],
    },
    {
      number: '4',
      icon: <CheckCircle className="w-6 h-6 text-white" />,
      title: '完了',
      description: 'レビュー後終了',
      gradient: FLOW_COLORS[3],
    },
  ];

  return (
    <SlideWrapper slideNumber={6} slideName="flow">
      <div className={`flex flex-col h-full ${FONTS.JAPANESE}`}>
        <PinkTitleV2 english="FLOW" japanese="サービスの流れ" />
        
        <div className={`flex-1 grid grid-cols-2 ${SPACING.CONTENT_GAP_LARGE}`}>
          {steps.map((step, index) => (
            <StepCard key={index} {...step} />
          ))}
        </div>

        <div className={`${SPACING.SECTION_MARGIN_TOP} text-center`}>
          <p className={`${FONT_SIZES.BODY_SMALL} ${TEXT_COLORS.WHITE}`}>
            ご不安な方は無料相談からOK
          </p>
        </div>
      </div>
    </SlideWrapper>
  );
}
