'use client';

import SlideWrapper from '../SlideWrapper';
import { Monitor, FileText, Wrench, ShoppingBag, CheckCircle, Package } from 'lucide-react';
import { PinkTitleV2 } from '@/components/PinkTitleV2';
import { DELIVERABLES_COLORS } from '@/constants/COLORS';
import { FONTS } from '@/constants/STYLES';

// ========================================
// Deliverables（サービス内容）v2 - AI開発サービス
// カラーレギュレーション: DELIVERABLES_COLORSを使用（6項目・循環）
// V1の内容を参考に作成
// ========================================

export function Deliverables() {
  const deliverables = [
    {
      icon: <Monitor className="w-7 h-7 text-white" />,
      title: 'アプリ本体',
      description: 'Win/Mac対応',
      gradient: DELIVERABLES_COLORS[0], // sky-500
    },
    {
      icon: <FileText className="w-7 h-7 text-white" />,
      title: 'マニュアル',
      description: '詳細解説付き',
      gradient: DELIVERABLES_COLORS[1], // blue-500
    },
    {
      icon: <Wrench className="w-7 h-7 text-white" />,
      title: '30日サポート',
      description: '無料修正対応',
      gradient: DELIVERABLES_COLORS[2], // indigo-500
    },
    {
      icon: <ShoppingBag className="w-7 h-7 text-white" />,
      title: '買い切り',
      description: '月額0円',
      gradient: DELIVERABLES_COLORS[3], // violet-500
    },
    {
      icon: <CheckCircle className="w-7 h-7 text-white" />,
      title: '商用OK',
      description: '収益化可能',
      gradient: DELIVERABLES_COLORS[4], // sky-600
    },
    {
      icon: <Package className="w-7 h-7 text-white" />,
      title: '追加費用なし',
      description: 'API料金のみ',
      gradient: DELIVERABLES_COLORS[5], // blue-600
    },
  ];

  return (
    <SlideWrapper slideNumber={8} slideName="deliverables">
      <div className={`flex flex-col h-full ${FONTS.JAPANESE}`}>
        <PinkTitleV2 english="DELIVERABLES" japanese="サービス内容" />

        <div className="flex-1 grid grid-cols-3 gap-3">
          {deliverables.map(({ icon, title, description, gradient }, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${gradient} rounded-xl p-3.5 flex flex-col items-center justify-center shadow-lg`}
            >
              <div className="w-14 h-14 bg-white/20 rounded-lg flex items-center justify-center mb-2">
                {icon}
              </div>
              <h3 className="text-white font-bold text-sm text-center mb-1 leading-tight">
                {title}
              </h3>
              <p className="text-white/90 text-xs text-center">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </SlideWrapper>
  );
}
