'use client';

import SlideWrapper from '../SlideWrapper';
import { Package, Clock, Coins } from 'lucide-react';
import { PinkTitleV2 } from '@/components/PinkTitleV2';
import { FONTS } from '@/constants/STYLES';

// ========================================
// Solution（解決策）v2 - AI開発サービス
// カラーレギュレーション: 段階的グラデーションブルー系
// ========================================

export function Solution() {
  const solutions = [
    {
      icon: <Package className="w-6 h-6 text-white" />,
      title: '完全おまかせ納品',
      desc: 'キャラを渡すだけ。あとは全部お任せ',
      gradient: 'from-sky-500 to-sky-600',
    },
    {
      icon: <Clock className="w-6 h-6 text-white" />,
      title: '24時間働くAI社員',
      desc: '寝ている間も接客・配信・対応',
      gradient: 'from-sky-600 to-blue-600',
    },
    {
      icon: <Coins className="w-6 h-6 text-white" />,
      title: '買い切り・月額0円',
      desc: 'かかるのはAPI料金だけ',
      gradient: 'from-blue-600 to-indigo-600',
    },
  ];

  return (
    <SlideWrapper slideNumber={3} slideName="solution">
      <div className={`flex flex-col h-full ${FONTS.JAPANESE}`}>
        <PinkTitleV2 english="SOLUTION" japanese="全部解決します" />

        {/* コンテンツ */}
        <div className="flex-1 flex flex-col gap-2.5 py-2">
          {solutions.map(({ icon, title, desc, gradient }, index) => (
            <div
              key={index}
              className={`flex-1 bg-gradient-to-r ${gradient} rounded-xl p-3 flex items-center gap-3 shadow-lg`}
            >
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                {icon}
              </div>
              <div className="flex-1">
                <div className="text-base font-bold text-white leading-tight mb-0.5">{title}</div>
                <div className="text-xs text-white/90 leading-tight">{desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SlideWrapper>
  );
}
