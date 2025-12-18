'use client';

import SlideWrapper from '../SlideWrapper';
import { HelpCircle } from 'lucide-react';
import { PinkTitleV2 } from '@/components/PinkTitleV2';
import { FONTS } from '@/constants/STYLES';

// ========================================
// FAQ（よくある質問） - サービス画像制作代行
// 文字サイズ大きめ版（4問に削減）
// ========================================

export function FAQ() {
  const faqs = [
    {
      question: '納期は何日ですか？',
      answer: '基本3日以内。特急で24時間以内も可能。',
    },
    {
      question: '修正は何回できますか？',
      answer: '2回まで無料。追加は1回3,000円。',
    },
    {
      question: 'どんな情報が必要？',
      answer: 'サービス概要をヒアリング。丸投げOK。',
    },
    {
      question: '納品形式は？',
      answer: 'PNG/JPEG、620×620pxに最適化。',
    },
  ];

  return (
    <SlideWrapper slideNumber={9} slideName="faq">
      <div className={`flex flex-col h-full ${FONTS.JAPANESE}`}>
        <PinkTitleV2 english="FAQ" japanese="よくある質問" />

        <div className="flex-1 flex flex-col gap-3 py-2">
          {faqs.map(({ question, answer }, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-sky-500/20 to-blue-600/20 border-2 border-sky-500/50 rounded-xl p-3 shadow-sm backdrop-blur"
            >
              <div className="flex items-start gap-3 mb-1">
                <div className="w-7 h-7 bg-sky-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <HelpCircle className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-white font-bold text-base flex-1 leading-tight pt-0.5">{question}</h3>
              </div>
              <p className="text-white/90 text-sm leading-tight pl-10">{answer}</p>
            </div>
          ))}
        </div>
      </div>
    </SlideWrapper>
  );
}
