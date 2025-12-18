'use client';

import SlideWrapper from '../SlideWrapper';
import { MessageCircle, ShoppingCart, MessageSquare, CheckCircle } from 'lucide-react';
import { PinkTitleV2 } from '@/components/PinkTitleV2';

// ========================================
// Flow（サービスの流れ）v2
// ========================================

export function Flow() {
  const steps = [
    {
      number: '1',
      icon: <MessageCircle className="w-6 h-6 text-white" />,
      title: '無料相談',
      duration: '見積もり相談',
      gradient: 'from-sky-500 to-sky-600',
    },
    {
      number: '2',
      icon: <ShoppingCart className="w-6 h-6 text-white" />,
      title: 'ご購入',
      duration: '手続き完了',
      gradient: 'from-sky-600 to-blue-600',
    },
    {
      number: '3',
      icon: <MessageSquare className="w-6 h-6 text-white" />,
      title: '開始',
      duration: '72時間サポート',
      gradient: 'from-sky-500 to-blue-600',
    },
    {
      number: '4',
      icon: <CheckCircle className="w-6 h-6 text-white" />,
      title: '完了',
      duration: 'レビュー後終了',
      gradient: 'from-blue-600 to-indigo-600',
    },
  ];

  return (
    <SlideWrapper slideNumber={6} slideName="flow">
      <div className="flex flex-col h-full font-hackgen">
        <PinkTitleV2 english="FLOW" japanese="サービスの流れ" />
        
        <div className="flex-1 grid grid-cols-2 gap-4">
          {steps.map(({ number, icon, title, duration, gradient }, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${gradient} rounded-xl p-4 flex flex-col justify-between shadow-lg relative overflow-hidden`}
            >
              {/* 背景の大きな数字 */}
              <div className="absolute top-0 right-2 text-white/10 font-black text-7xl leading-none">
                {number}
              </div>
              
              {/* コンテンツ */}
              <div className="relative z-10">
                <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-3">
                  {icon}
                </div>
                <h3 className="text-white font-bold text-base mb-1 leading-tight">{title}</h3>
                <p className="text-white/90 text-sm">{duration}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-3 text-center">
          <p className="text-sm text-white">
            ご不安な方は無料相談からOK
          </p>
        </div>
      </div>
    </SlideWrapper>
  );
}
