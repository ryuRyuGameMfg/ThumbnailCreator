'use client';

import SlideWrapper from '../SlideWrapper';
import { HelpCircle } from 'lucide-react';
import { PinkTitleV2 } from '@/components/PinkTitleV2';
import { FONTS } from '@/constants/STYLES';

// ========================================
// FAQ（よくある質問） - サービス画像制作代行
// ========================================

export function FAQ() {
  const faqs = [
    {
      question: '納期は何日ですか？',
      answer: '基本3日以内に納品します。特急オプションで24時間以内も可能です。',
    },
    {
      question: '修正は何回できますか？',
      answer: '2回まで無料です。追加修正は1回3,000円で対応します。',
    },
    {
      question: 'どんな情報が必要ですか？',
      answer: 'サービス名・内容・価格・特徴をヒアリングします。丸投げOKです。',
    },
    {
      question: '納品形式は？',
      answer: 'PNG/JPEGで納品。ココナラ規定サイズ（620×620px）に最適化。',
    },
    {
      question: 'キャンセルはできますか？',
      answer: '制作開始前であれば全額返金対応します。',
    },
  ];

  return (
    <SlideWrapper slideNumber={9} slideName="faq">
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
