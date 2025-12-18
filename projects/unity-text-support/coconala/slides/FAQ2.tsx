'use client';

import SlideWrapper from '../SlideWrapper';
import { HelpCircle } from 'lucide-react';

// ========================================
// FAQ2（利用方法）
// ========================================

function SlideTitle({ english, japanese }: { english: string; japanese: string }) {
  return (
    <div className="text-center mb-3">
      <h1 className="font-melete text-[36px] font-bold text-sky-600 tracking-wider">
        {english}
      </h1>
      <p className="text-sm text-gray-500 font-hackgen">{japanese}</p>
    </div>
  );
}

export function FAQ2() {
  const faqs = [
    {
      question: 'どうやって質問すればいいですか？',
      answer: 'テキスト、画像、動画、URL、プログラムコードなど、どの形式でもOKです。',
    },
    {
      question: 'プロジェクトデータを送れますか？',
      answer: 'はい、ファイルお預かりオプションでプロジェクト一式をお預かりできます。',
    },
    {
      question: '質問回数に制限はありますか？',
      answer: 'いいえ、72時間以内であれば何度でも質問できます。',
    },
    {
      question: '追加料金が発生する場合は？',
      answer: '開発代行や技術調査が必要な場合は別途料金をご案内いたします。',
    },
  ];

  return (
    <SlideWrapper slideNumber={8} slideName="faq2">
      <div className="flex flex-col h-full font-hackgen">
        <SlideTitle english="FAQ" japanese="よくある質問 - 利用方法" />
        
        <div className="flex-1 flex flex-col gap-2">
          {faqs.map(({ question, answer }, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-sky-50 to-blue-50 border-2 border-sky-200 rounded-lg p-2 shadow-sm"
            >
              <div className="flex items-start gap-2 mb-0.5">
                <div className="w-5 h-5 bg-sky-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <HelpCircle className="w-3 h-3 text-white" />
                </div>
                <h3 className="text-sky-700 font-bold text-xs flex-1">{question}</h3>
              </div>
              <p className="text-gray-600 text-[10px] leading-relaxed pl-7">{answer}</p>
            </div>
          ))}
        </div>

        <div className="mt-2 text-center">
          <p className="text-[10px] text-gray-500">
            その他のご質問はDMでお気軽にご連絡ください
          </p>
        </div>
      </div>
    </SlideWrapper>
  );
}

