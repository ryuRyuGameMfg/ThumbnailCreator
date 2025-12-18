'use client';

import SlideWrapper from '../SlideWrapper';
import { HelpCircle } from 'lucide-react';
import { PinkTitleV2 } from '@/components/PinkTitleV2';

// ========================================
// FAQ2（利用方法）v2 - 見やすく改善
// ========================================

export function FAQ2() {
  const faqs = [
    {
      question: 'どうやって質問すればいいですか？',
      answer: 'テキスト、画像、動画、URL、プログラムコードなど、どの形式でもOKです。',
    },
    {
      question: '質問回数に制限はありますか？',
      answer: 'いいえ、期間内であれば何度でも質問できます。',
    },
    {
      question: '追加料金が発生する場合は？',
      answer: '開発代行や技術調査が必要な場合は別途料金をご案内いたします。',
    },
  ];

  return (
    <SlideWrapper slideNumber={8} slideName="faq2">
      <div className="flex flex-col h-full font-hackgen">
        <PinkTitleV2 english="FAQ" japanese="よくある質問 - 利用方法" />
        
        <div className="flex-1 flex flex-col gap-4">
          {faqs.map(({ question, answer }, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-sky-500/20 to-blue-600/20 border-2 border-sky-400/50 rounded-xl p-4 shadow-sm backdrop-blur"
            >
              <div className="flex items-start gap-3 mb-2">
                <div className="w-7 h-7 bg-sky-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <HelpCircle className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-white font-bold text-base flex-1">{question}</h3>
              </div>
              <p className="text-white/90 text-sm leading-relaxed pl-10">{answer}</p>
            </div>
          ))}
        </div>
      </div>
    </SlideWrapper>
  );
}
