'use client';

import SlideWrapper from '../SlideWrapper';
import { MessageSquareText, Image, Video } from 'lucide-react';
import { PinkTitleV2 } from '@/components/PinkTitleV2';
import { CardWithIcon } from '@/components/common';
import { DELIVERABLES_COLORS } from '@/constants/COLORS';
import { FONTS, SPACING } from '@/constants/STYLES';

// ========================================
// Deliverables（サービス内容）v2
// レギュレーション準拠版
// ========================================

export function Deliverables() {
  const items = [
    {
      icon: <MessageSquareText className="w-8 h-8 text-white" />,
      title: '72時間質問し放題',
      description: 'テキストチャットで徹底サポート',
      gradient: DELIVERABLES_COLORS[0],
    },
    {
      icon: <Image className="w-8 h-8 text-white" />,
      title: '多様なサポート形式',
      description: 'テキスト・画像・動画・URLで回答',
      gradient: DELIVERABLES_COLORS[1],
    },
    {
      icon: <Video className="w-8 h-8 text-white" />,
      title: 'プログラム提供',
      description: 'コードやプロジェクトファイルも共有',
      gradient: DELIVERABLES_COLORS[2],
    },
  ];

  return (
    <SlideWrapper slideNumber={3} slideName="deliverables">
      <div className={`flex flex-col h-full ${FONTS.JAPANESE}`}>
        <PinkTitleV2 english="SERVICE" japanese="サービス内容" />
        
        <div className={`flex-1 flex flex-col ${SPACING.CONTENT_GAP_LARGE}`}>
          {items.map((item, index) => (
            <CardWithIcon 
              key={index}
              {...item}
              iconSize="large"
              iconBoxSize="large"
            />
          ))}
        </div>
      </div>
    </SlideWrapper>
  );
}
