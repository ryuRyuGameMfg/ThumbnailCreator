'use client';

import SlideWrapper from '../SlideWrapper';
import { HelpCircle } from 'lucide-react';
import { PinkTitleV2 } from '@/components/PinkTitleV2';

export function FAQ1() {
  const faqs = [
    {
      question: 'Clusterってなんですか？',
      answer: 'メタバースSNSという仮想空間プラットフォームです。PC・スマホ・VRで利用できます。公式: https://cluster.mu/',
    },
    {
      question: 'メタバースSNSってなんですか？',
      answer: '仮想空間でコミュニケーションができるSNSです。オンラインコミュニティやイベント開催などに活用できます。',
    },
    {
      question: 'どんなデバイスで使えますか？',
      answer: 'PC（Windows/Mac）、スマートフォン（iOS/Android）、VRヘッドセット（Quest等）に対応しています。',
    },
  ];

  return (
    <SlideWrapper slideNumber={7} slideName="faq1">
      <div className="flex flex-col h-full font-hackgen">
        <PinkTitleV2 english="FAQ" japanese="よくある質問 - 基礎知識" />
        
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
