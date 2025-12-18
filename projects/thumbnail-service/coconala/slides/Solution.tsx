'use client';

import SlideWrapper from '../SlideWrapper';
import { PinkTitleV2 } from '@/components/PinkTitleV2';
import { Check } from 'lucide-react';
import { FONTS } from '@/constants/STYLES';
import { FLOW_COLORS } from '@/constants/COLORS';

// ========================================
// Solution（解決策） - サービス画像制作代行
// 文字サイズ大きめ版
// ========================================

export function Solution() {
  const solutions = [
    { text: 'デザインは全てお任せ', gradient: FLOW_COLORS[0] },
    { text: '売れる構成テンプレート', gradient: FLOW_COLORS[1] },
    { text: '爆速3日納品・10枚1万円', gradient: FLOW_COLORS[2] },
  ];

  return (
    <SlideWrapper slideNumber={3} slideName="solution">
      <div className={`flex flex-col h-full ${FONTS.JAPANESE}`}>
        <PinkTitleV2 english="SOLUTION" japanese="このサービスで全部解決!" />

        {/* コンテンツ */}
        <div className="flex-1 flex flex-col gap-3 py-2">
          {solutions.map(({ text, gradient }, index) => (
            <div
              key={index}
              className={`flex-1 bg-gradient-to-r ${gradient} rounded-xl px-5 py-4 flex items-center gap-4 shadow-lg`}
            >
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                <Check className="w-7 h-7 text-white" />
              </div>
              <div className="flex-1">
                <div className="text-xl font-bold text-white leading-tight">{text}</div>
              </div>
            </div>
          ))}
        </div>

        {/* フッター */}
        <div className="mt-3 text-center">
          <p className="text-lg text-white/90">
            ヒアリングから納品まで丸投げOK!
          </p>
        </div>
      </div>
    </SlideWrapper>
  );
}
