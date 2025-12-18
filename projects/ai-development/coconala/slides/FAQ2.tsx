'use client';

import SlideWrapper from '../SlideWrapper';
import { HelpCircle } from 'lucide-react';
import { PinkTitleV2 } from '@/components/PinkTitleV2';
import { FONTS } from '@/constants/STYLES';

// ========================================
// FAQ2（よくある質問 - 利用方法）v2 - AI開発サービス
// ========================================

export function FAQ2() {
  const faqs = [
    {
      question: 'どんなOSで動きますか？',
      answer: 'Windows・Mac・Linux全てに対応しています。',
    },
    {
      question: 'スマホでも使えますか？',
      answer: 'PC推奨ですが、スマホ対応も可能です。お気軽にご相談ください。',
    },
    {
      question: '商用利用は可能ですか？',
      answer: 'はい、可能です。収益化・法人利用も問題ありません。',
    },
    {
      question: 'キャラは自分で用意できますか？',
      answer: 'Live2D・VRoid・VTubeStudio形式に対応しています。',
    },
    {
      question: '著作権はどうなりますか？',
      answer: '納品後の著作権はお客様に帰属します。ご安心ください。',
    },
  ];

  return (
    <SlideWrapper slideNumber={8} slideName="faq2">
      <div className={`flex flex-col h-full ${FONTS.JAPANESE}`}>
        <PinkTitleV2 english="FAQ" japanese="よくある質問 - 利用方法" />

        <div className="flex-1 flex flex-col gap-2 py-2">
          {faqs.map(({ question, answer }, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-sky-500/20 to-blue-600/20 border-2 border-sky-500/50 rounded-xl p-2 shadow-sm backdrop-blur"
            >
              <div className="flex items-start gap-2 mb-0.5">
                <div className="w-5 h-5 bg-sky-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <HelpCircle className="w-3 h-3 text-white" />
                </div>
                <h3 className="text-white font-bold text-xs flex-1 leading-tight">{question}</h3>
              </div>
              <p className="text-white/90 text-[10px] leading-tight pl-7">{answer}</p>
            </div>
          ))}
        </div>
      </div>
    </SlideWrapper>
  );
}
