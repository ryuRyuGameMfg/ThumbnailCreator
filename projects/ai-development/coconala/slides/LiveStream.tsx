'use client';

import SlideWrapper from '../SlideWrapper';
import { Radio, Cpu, User } from 'lucide-react';
import { PinkTitleV2 } from '@/components/PinkTitleV2';
import { APP_COLORS } from '@/constants/COLORS';
import { FONTS } from '@/constants/STYLES';

// ========================================
// LiveStream（ライブ配信）v2 - AI開発サービス
// カラーレギュレーション: APP_COLORS.LIVE (rose-600)、透明度あり
// ========================================

export function LiveStream() {
  const steps = [
    {
      icon: <Radio className="w-5 h-5 text-white" />,
      step: 'STEP 1',
      title: 'コメントが届く',
      description: 'YouTubeから自動取得',
    },
    {
      icon: <Cpu className="w-5 h-5 text-white" />,
      step: 'STEP 2',
      title: 'AIが返答を生成',
      description: 'AI + 音声合成',
    },
    {
      icon: <User className="w-5 h-5 text-white" />,
      step: 'STEP 3',
      title: 'キャラが配信',
      description: '24時間無人で自動応答',
    },
  ];

  return (
    <SlideWrapper slideNumber={5} slideName="live">
      <div className={`flex flex-col h-full ${FONTS.JAPANESE}`}>
        <PinkTitleV2 english="LIVE APP" japanese="ライブ配信" />

        {/* フロー */}
        <div className="flex-1 flex flex-col justify-center gap-2.5">
          {steps.map(({ icon, step, title, description }, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br from-${APP_COLORS.LIVE} to-${APP_COLORS.LIVE} rounded-xl px-3 py-2.5 flex items-center gap-3 shadow-lg relative overflow-hidden`}
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
