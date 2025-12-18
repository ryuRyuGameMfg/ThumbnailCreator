'use client';

import SlideWrapper from '../SlideWrapper';
import { HelpCircle } from 'lucide-react';

// ========================================
// FAQ3（サポート・実績）
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

export function FAQ3() {
  const faqs = [
    {
      question: 'どんな実績がありますか？',
      answer: 'ゲーム開発ランキング1位、総販売230件達成。GC甲子園2022・東京ゲームショウ2023出展経験あり。',
    },
    {
      question: 'AI開発もサポートできますか？',
      answer: 'はい、AI系企業での開発実績があります。AIアバター会話システムやWebGL形式のAIキャラクター開発など対応可能です。',
    },
    {
      question: 'どんな技術に対応していますか？',
      answer: '2D/3Dゲーム、VR/AR、メタバース、AI連携、Web制作など幅広い技術領域に対応しています。',
    },
    {
      question: '回答できない場合もありますか？',
      answer: 'はい、内容によっては回答できない場合がございます。予めご了承ください。',
    },
  ];

  return (
    <SlideWrapper slideNumber={9} slideName="faq3">
      <div className="flex flex-col h-full font-hackgen">
        <SlideTitle english="FAQ" japanese="よくある質問 - サポート・実績" />
        
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
            まずは無料相談からお気軽にどうぞ
          </p>
        </div>
      </div>
    </SlideWrapper>
  );
}
