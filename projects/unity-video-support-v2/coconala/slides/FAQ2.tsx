'use client';

import SlideWrapper from '../SlideWrapper';
import { HelpCircle } from 'lucide-react';
import { PinkTitleV2 } from '@/components/PinkTitleV2';

export function FAQ2() {
  const faqs = [
    {
      question: '画面共有はどうやりますか？',
      answer: 'ZoomやDiscordなどのツールを使用します。使い方も丁寧にサポートいたします。',
    },
    {
      question: 'セッション中に何をしますか？',
      answer: '画面共有でエラーログを確認し、修正コードを提案。チャットログとメモもお渡しします。',
    },
    {
      question: 'キャンセルはできますか？',
      answer: '購入後のキャンセルはできません。ただし日程の変更は可能ですので、DMでご相談ください。',
    },
  ];

  return (
    <SlideWrapper slideNumber={8} slideName="faq2">
      <div className="flex flex-col h-full font-hackgen">
        <PinkTitleV2 english="FAQ" japanese="よくある質問 - 利用方法" />
        
        <div className="flex-1 flex flex-col gap-3">
          {faqs.map(({ question, answer }, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-sky-500/20 to-blue-600/20 border-2 border-sky-500/50 rounded-xl p-3 shadow-sm backdrop-blur"
            >
              <div className="flex items-start gap-2.5 mb-1">
                <div className="w-6 h-6 bg-sky-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <HelpCircle className="w-3.5 h-3.5 text-white" />
                </div>
                <h3 className="text-white font-bold text-sm flex-1">{question}</h3>
              </div>
              <p className="text-white/90 text-xs leading-relaxed pl-9">{answer}</p>
            </div>
          ))}
        </div>
      </div>
    </SlideWrapper>
  );
}
