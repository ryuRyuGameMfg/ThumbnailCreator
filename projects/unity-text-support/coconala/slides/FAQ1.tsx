'use client';

import SlideWrapper from '../SlideWrapper';
import { HelpCircle } from 'lucide-react';
import { PinkTitleV2 } from '@/components/PinkTitleV2';

// ========================================
// FAQ1（基礎知識）v2 - 見やすく改善
// ========================================

export function FAQ1() {
  const faqs = [
    {
      question: 'Unityって何ですか？',
      answer: 'ゲーム開発エンジンで、2D/3Dゲーム、VR/ARアプリなどを作成できます。公式: https://unity.com/ja',
    },
    {
      question: '回答はどのくらいで来ますか？',
      answer: 'お問い合わせから3時間以内に回答いたします。深夜でもOKです。',
    },
    {
      question: '初心者でも大丈夫ですか？',
      answer: 'はい、初心者の方にも分かりやすく丁寧に解説いたします。',
    },
  ];

  return (
    <SlideWrapper slideNumber={7} slideName="faq1">
      <div className="flex flex-col h-full font-hackgen">
        <PinkTitleV2 english="FAQ" japanese="よくある質問" />
        
        <div className="flex-1 flex flex-col gap-4">
          {faqs.map(({ question, answer }, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-sky-500/20 to-blue-600/20 border-2 border-sky-500/50 rounded-xl p-4 shadow-sm backdrop-blur"
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
