'use client';

import SlideWrapper from '../SlideWrapper';
import { MessageSquare, FileText, Palette, CheckCircle } from 'lucide-react';
import { PinkTitleV2 } from '@/components/PinkTitleV2';
import { FLOW_COLORS } from '@/constants/COLORS';
import { FONTS } from '@/constants/STYLES';

// ========================================
// Flow（サービスの流れ） - サービス画像制作代行
// 文字サイズ大きめ版
// ========================================

export function Flow() {
  const steps = [
    {
      number: '1',
      icon: <MessageSquare className="w-7 h-7 text-white" />,
      title: 'ヒアリング',
      description: 'サービス内容を確認',
      gradient: FLOW_COLORS[0],
    },
    {
      number: '2',
      icon: <FileText className="w-7 h-7 text-white" />,
      title: '構成提案',
      description: '10枚の内容を決定',
      gradient: FLOW_COLORS[1],
    },
    {
      number: '3',
      icon: <Palette className="w-7 h-7 text-white" />,
      title: 'デザイン制作',
      description: '最短3日で完成',
      gradient: FLOW_COLORS[2],
    },
    {
      number: '4',
      icon: <CheckCircle className="w-7 h-7 text-white" />,
      title: '納品・修正',
      description: '2回まで無料修正',
      gradient: FLOW_COLORS[3],
    },
  ];

  return (
    <SlideWrapper slideNumber={7} slideName="flow">
      <div className={`flex flex-col h-full ${FONTS.JAPANESE}`}>
        <PinkTitleV2 english="FLOW" japanese="サービスの流れ" />

        <div className="flex-1 grid grid-cols-2 gap-3">
          {steps.map(({ number, icon, title, description, gradient }) => (
            <div
              key={number}
              className={`bg-gradient-to-br ${gradient} rounded-xl p-4 flex flex-col justify-between shadow-lg relative overflow-hidden`}
            >
              <div className="absolute top-0 right-2 text-white/10 font-black text-7xl leading-none">
                {number}
              </div>

              <div className="relative z-10">
                <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-3">
                  {icon}
                </div>
                <h3 className="text-white font-bold text-lg mb-1 leading-tight">{title}</h3>
                <p className="text-white/90 text-base">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SlideWrapper>
  );
}
