'use client';

import SlideWrapper from '../SlideWrapper';
import { FileText, Cpu, Play } from 'lucide-react';
import { PinkTitleV2 } from '@/components/PinkTitleV2';
import { APP_COLORS } from '@/constants/COLORS';
import { FONTS } from '@/constants/STYLES';

// ========================================
// VideoGen（動画生成）v2 - AI開発サービス
// カラーレギュレーション: APP_COLORS.VIDEO (indigo-600)、透明度あり
// ========================================

export function VideoGen() {
  const steps = [
    {
      icon: <FileText className="w-5 h-5 text-white" />,
      step: 'STEP 1',
      title: '台本を入力',
      description: 'テキストを貼り付けるだけ',
    },
    {
      icon: <Cpu className="w-5 h-5 text-white" />,
      step: 'STEP 2',
      title: 'AI自動生成',
      description: '表情・リップシンク自動',
    },
    {
      icon: <Play className="w-5 h-5 text-white" />,
      step: 'STEP 3',
      title: '動画を出力',
      description: 'MP4でダウンロード',
    },
  ];

  return (
    <SlideWrapper slideNumber={5} slideName="video">
      <div className={`flex flex-col h-full ${FONTS.JAPANESE}`}>
        <PinkTitleV2 english="VIDEO APP" japanese="動画生成" />

        {/* フロー */}
        <div className="flex-1 flex flex-col justify-center gap-2.5">
          {steps.map(({ icon, step, title, description }, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br from-${APP_COLORS.VIDEO} to-${APP_COLORS.VIDEO} rounded-xl px-3 py-2.5 flex items-center gap-3 shadow-lg relative overflow-hidden`}
            >
              {/* 背景装飾 */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>

              <div className="w-11 h-11 rounded-lg bg-white/20 flex items-center justify-center shadow-md relative z-10">
                {icon}
              </div>
              <div className="flex-1 relative z-10">
                <div className={`text-[10px] font-bold text-white/90`}>{step}</div>
                <div className="text-sm font-bold text-white leading-tight">{title}</div>
                <div className="text-xs text-white/80">{description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SlideWrapper>
  );
}
