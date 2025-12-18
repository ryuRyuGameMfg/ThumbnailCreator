'use client';

import SlideWrapper from '../SlideWrapper';
import { MessageSquare, Calendar, Video, CheckCircle } from 'lucide-react';
import { PinkTitleV2 } from '@/components/PinkTitleV2';

export function Flow() {
  const steps = [
    {
      number: '1',
      icon: <MessageSquare className="w-6 h-6 text-white" />,
      title: 'DMでご相談',
      description: '日程調整',
      gradient: 'from-sky-500 to-sky-600',
    },
    {
      number: '2',
      icon: <Calendar className="w-6 h-6 text-white" />,
      title: 'ご購入・日程確定',
      description: '手続き完了',
      gradient: 'from-sky-600 to-blue-600',
    },
    {
      number: '3',
      icon: <Video className="w-6 h-6 text-white" />,
      title: 'ビデオチャット実施',
      description: '画面共有で解決',
      gradient: 'from-sky-500 to-blue-600',
    },
    {
      number: '4',
      icon: <CheckCircle className="w-6 h-6 text-white" />,
      title: '完了・記録納品',
      description: 'ログ・メモ提供',
      gradient: 'from-blue-600 to-indigo-600',
    },
  ];

  return (
    <SlideWrapper slideNumber={6} slideName="flow">
      <div className="flex flex-col h-full font-hackgen">
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
