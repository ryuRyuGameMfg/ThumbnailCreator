'use client';

import SlideWrapper from '../SlideWrapper';
import { MessageSquare, Calendar, Video, CheckCircle } from 'lucide-react';

// ========================================
// Flow（サービスの流れ）
// ========================================

function SlideTitle({ english, japanese }: { english: string; japanese: string }) {
  return (
    <div className="text-center mb-3">
      <h1 className="font-melete text-[36px] font-bold text-sky-600 tracking-wider">
        {english}
      </h1>
      <p className="text-sm text-gray-500 font-hackgen">{japanese}</p>
    </div>
  );
}

export function Flow() {
  const steps = [
    {
      number: '1',
      icon: <MessageSquare className="w-5 h-5 text-white" />,
      title: 'DMでご相談・お見積もり',
      description: 'ご予約の日程がなくてもDMからメッセージいただければ必ずご返信します',
      gradient: 'from-sky-500 to-sky-500',
    },
    {
      number: '2',
      icon: <Calendar className="w-5 h-5 text-white" />,
      title: 'ご購入・日程調整',
      description: 'ご都合の良い日時を調整します',
      gradient: 'from-blue-500 to-blue-500',
    },
    {
      number: '3',
      icon: <Video className="w-5 h-5 text-white" />,
      title: 'ビデオチャット実施',
      description: '画面共有で問題解決・丁寧にサポート',
      gradient: 'from-indigo-500 to-indigo-500',
    },
    {
      number: '4',
      icon: <CheckCircle className="w-5 h-5 text-white" />,
      title: '完了・フォローアップ',
      description: '必要に応じてアフターサポート',
      gradient: 'from-violet-500 to-violet-500',
    },
  ];

  return (
    <SlideWrapper slideNumber={6} slideName="flow">
      <div className="flex flex-col h-full font-hackgen">
        <SlideTitle english="FLOW" japanese="サービスの流れ" />
        
        <div className="flex-1 flex flex-col gap-2">
          {steps.map(({ number, icon, title, description, gradient }) => (
            <div
              key={number}
              className={`flex-1 bg-gradient-to-r ${gradient} rounded-xl p-3 flex items-center gap-3 shadow-lg relative overflow-hidden`}
            >
              <div className="absolute left-0 top-0 bottom-0 w-16 flex items-center justify-center">
                <span className="text-white/10 font-melete text-5xl font-bold">{number}</span>
              </div>
              
              <div className="relative z-10 w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 ml-12">
                {icon}
              </div>
              
              <div className="relative z-10 flex-1">
                <h3 className="text-white font-bold text-sm mb-0.5">{title}</h3>
                <p className="text-white/90 text-xs leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SlideWrapper>
  );
}
