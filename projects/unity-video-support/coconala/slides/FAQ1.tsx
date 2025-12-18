'use client';

import SlideWrapper from '../SlideWrapper';
import { HelpCircle } from 'lucide-react';
import { PinkTitleV2 } from '@/components/PinkTitleV2';

export function FAQ1() {
  const faqs = [
    {
      question: 'ご予約の日程がない場合でも相談できますか？',
      answer: 'はい！DMからメッセージいただければ必ずご返信いたします。',
    },
    {
      question: 'ビデオチャットの準備は必要ですか？',
      answer: 'PC・スマホ・タブレットで参加可能です。画面共有のみでOK。顔出しなしでも大丈夫です！',
    },
    {
      question: '60分で足りない場合は？',
      answer: '時間延長オプション（30分単位）をご利用いただけます。当日延長も可能ですが、事前にご相談いただければ割安になります。',
    },
  ];

  return (
    <SlideWrapper slideNumber={7} slideName="faq1">
      <div className="flex flex-col h-full font-hackgen">
        <PinkTitleV2 english="FAQ" japanese="よくある質問" />
        
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
