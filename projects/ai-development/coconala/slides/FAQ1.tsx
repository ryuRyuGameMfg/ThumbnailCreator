'use client';

import SlideWrapper from '../SlideWrapper';
import { HelpCircle } from 'lucide-react';
import { PinkTitleV2 } from '@/components/PinkTitleV2';
import { FONTS } from '@/constants/STYLES';

// ========================================
// FAQ1（よくある質問）v2 - AI開発サービス
// ========================================

export function FAQ1() {
  const faqs = [
    {
      question: 'なぜこんなに安いんですか？',
      answer: '自動化・AI活用で開発コストを削減しているためです。利益率を抑え、お客様に還元しています。',
    },
    {
      question: '月額費用はかかりますか？',
      answer: '月額0円です。OpenAI API料金（50〜500円/月程度）のみお客様負担となります。',
    },
    {
      question: 'API料金はどのくらいですか？',
      answer: '使用量次第ですが、月50〜500円程度が目安です。使いすぎ防止設定も可能です。',
    },
    {
      question: '実績はありますか？',
      answer: '230件以上の納品実績があり、★4.9以上の高評価をいただいています。',
    },
    {
      question: '本当に信頼できますか？',
      answer: 'ココナラプラチナランク、評価4.9、230件以上の実績でご安心いただけます。',
    },
  ];

  return (
    <SlideWrapper slideNumber={7} slideName="faq1">
      <div className={`flex flex-col h-full ${FONTS.JAPANESE}`}>
        <PinkTitleV2 english="FAQ" japanese="よくある質問" />

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
