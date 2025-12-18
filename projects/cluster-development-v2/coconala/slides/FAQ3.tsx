'use client';

import SlideWrapper from '../SlideWrapper';
import { HelpCircle } from 'lucide-react';
import { PinkTitleV2 } from '@/components/PinkTitleV2';

export function FAQ3() {
  const faqs = [
    {
      question: '納品後の拡張も可能ですか？',
      answer: '可能です。機能追加やデザイン変更など、内容に応じてお見積りいたします。',
    },
    {
      question: 'これまでどんなワールドを作りましたか？',
      answer: 'リサイクルショップの店舗再現、婚活メタバース、ライブ配信用コミュニティステージなど多数の実績があります。',
    },
    {
      question: '技術的なサポートはありますか？',
      answer: '納品後30日間は無料修正対応いたします。小規模な修正は無料、大規模な変更は都度お見積りとなります。',
    },
  ];

  return (
    <SlideWrapper slideNumber={9} slideName="faq3">
      <div className="flex flex-col h-full font-hackgen">
        <PinkTitleV2 english="FAQ" japanese="よくある質問 - サポート・実績" />
        
        <div className="flex-1 flex flex-col gap-3.5">
          {faqs.map(({ question, answer }, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-sky-500/20 to-blue-600/20 border-2 border-sky-500/50 rounded-xl p-3.5 shadow-sm backdrop-blur"
            >
              <div className="flex items-start gap-2.5 mb-1.5">
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
