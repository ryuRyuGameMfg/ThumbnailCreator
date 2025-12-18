'use client';

import SlideWrapper from '../SlideWrapper';
import { HelpCircle } from 'lucide-react';
import { PinkTitleV2 } from '@/components/PinkTitleV2';

export function FAQ3() {
  const faqs = [
    {
      question: 'どんな実績がありますか？',
      answer: 'ゲーム開発ランキング1位、総販売230件達成。GC甲子園・東京ゲームショウ出展経験あり。',
    },
    {
      question: 'どんな技術に対応していますか？',
      answer: '2D/3Dゲーム、VR/AR、メタバース、AI連携など幅広く対応。',
    },
    {
      question: '他のサービスもありますか？',
      answer: 'テキストチャットサポートやClusterワールド開発なども行っております。',
    },
  ];

  return (
    <SlideWrapper slideNumber={9} slideName="faq3">
      <div className="flex flex-col h-full font-hackgen">
        <PinkTitleV2 english="FAQ" japanese="よくある質問 - サポート・実績" />
        
        <div className="flex-1 flex flex-col gap-3">
          {faqs.map(({ question, answer }, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-sky-500/20 to-blue-600/20 border-2 border-sky-400/50 rounded-xl p-3 shadow-sm backdrop-blur"
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
