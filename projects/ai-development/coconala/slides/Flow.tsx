'use client';

import SlideWrapper from '../SlideWrapper';
import { MessageSquare, FileText, Code, CheckCircle } from 'lucide-react';
import { PinkTitleV2 } from '@/components/PinkTitleV2';
import { FLOW_COLORS } from '@/constants/COLORS';
import { FONTS } from '@/constants/STYLES';

// ========================================
// Flow（サービスの流れ）v2 - AI開発サービス
// カラーレギュレーション: FLOW_COLORSを使用（4ステップ）
// ========================================

export function Flow() {
  const steps = [
    {
      number: '1',
      icon: <MessageSquare className="w-6 h-6 text-white" />,
      title: 'ご相談・要件定義',
      description: 'DMチャット',
      gradient: FLOW_COLORS[0], // sky-500
    },
    {
      number: '2',
      icon: <FileText className="w-6 h-6 text-white" />,
      title: 'お見積もり・契約',
      description: '仕様書作成',
      gradient: FLOW_COLORS[1], // blue-500
    },
    {
      number: '3',
      icon: <Code className="w-6 h-6 text-white" />,
      title: '開発・実装',
      description: '進捗報告・修正',
      gradient: FLOW_COLORS[2], // indigo-500
    },
    {
      number: '4',
      icon: <CheckCircle className="w-6 h-6 text-white" />,
      title: '納品・サポート',
      description: '動作確認・引継ぎ',
      gradient: FLOW_COLORS[3], // violet-500
    },
  ];

  return (
    <SlideWrapper slideNumber={6} slideName="flow">
      <div className={`flex flex-col h-full ${FONTS.JAPANESE}`}>
        <PinkTitleV2 english="FLOW" japanese="サービスの流れ" />

        <div className="flex-1 grid grid-cols-2 gap-3">
          {steps.map(({ number, icon, title, description, gradient }) => (
            <div
              key={number}
              className={`bg-gradient-to-br ${gradient} rounded-xl p-3.5 flex flex-col justify-between shadow-lg relative overflow-hidden`}
            >
              <div className="absolute top-0 right-2 text-white/10 font-black text-7xl leading-none">
                {number}
              </div>

              <div className="relative z-10">
                <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-2">
                  {icon}
                </div>
                <h3 className="text-white font-bold text-base mb-1 leading-tight">{title}</h3>
                <p className="text-white/90 text-sm">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SlideWrapper>
  );
}
