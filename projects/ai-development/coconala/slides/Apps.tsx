'use client';

import SlideWrapper from '../SlideWrapper';
import { Mic, Radio, Film, MessageCircle } from 'lucide-react';
import { PinkTitleV2 } from '@/components/PinkTitleV2';
import { APP_COLORS } from '@/constants/COLORS';
import { FONTS } from '@/constants/STYLES';

// ========================================
// Apps（4つのアプリ紹介）v2 - AI開発サービス
// カラーレギュレーション: APP_COLORSを使用
// ========================================

export function Apps() {
  const apps = [
    {
      icon: <Mic className="w-8 h-8 text-white" />,
      title: 'VOICE APP',
      subtitle: '音声対話',
      description: 'マイクで話しかけるとキャラが返答',
      color: APP_COLORS.VOICE, // teal-600
    },
    {
      icon: <Radio className="w-8 h-8 text-white" />,
      title: 'LIVE APP',
      subtitle: 'ライブ配信',
      description: '24時間無人で配信・コメント自動応答',
      color: APP_COLORS.LIVE, // rose-600
    },
    {
      icon: <Film className="w-8 h-8 text-white" />,
      title: 'VIDEO APP',
      subtitle: '動画生成',
      description: '台本からAIが自動で動画を生成',
      color: APP_COLORS.VIDEO, // indigo-600
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-white" />,
      title: 'CHAT APP',
      subtitle: 'テキストチャット',
      description: 'テキストで質問すると即座に回答',
      color: APP_COLORS.CHAT, // amber-600
    },
  ];

  return (
    <SlideWrapper slideNumber={3} slideName="apps">
      <div className={`flex flex-col h-full ${FONTS.JAPANESE}`}>
        <PinkTitleV2 english="4 APPS" japanese="4つのアプリケーション" />

        <div className="flex-1 grid grid-cols-2 gap-3">
          {apps.map(({ icon, title, subtitle, description, color }, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br from-${color} to-${color} rounded-xl p-3.5 flex flex-col items-center justify-center shadow-lg relative overflow-hidden`}
            >
              {/* 背景装飾 */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>

              <div className="relative z-10 text-center">
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-2.5 mx-auto">
                  {icon}
                </div>
                <h3 className="text-white font-bold text-base mb-0.5 leading-tight font-melete tracking-wider">
                  {title}
                </h3>
                <p className="text-white/90 text-xs mb-2">{subtitle}</p>
                <p className="text-white/80 text-[10px] leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SlideWrapper>
  );
}
