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
      question: 'どんな技術に対応していますか？',
      answer: '2D/3Dゲーム、VR/AR、メタバース、AI連携、AIを活用したライブコーディングなど幅広い技術領域に対応しています。',
    },
    {
      question: '回答できない場合もありますか？',
      answer: '内容によって回答できない場合がございます。あらかじめご了承ください。ただし事前調査を行うことで（別途費用）、特殊なアセットやニッチな領域の技術のサポートも多数実績がありますので、お気軽にお声掛けください。',
    },
    {
      question: '他のサービスもありますか？',
      answer: 'はい、ビデオチャットサポートやClusterワールド開発なども行っております。DMでご相談ください。',
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
            詳細はココナラのサービスページをご覧ください
          </p>
        </div>
      </div>
    </SlideWrapper>
  );
}
