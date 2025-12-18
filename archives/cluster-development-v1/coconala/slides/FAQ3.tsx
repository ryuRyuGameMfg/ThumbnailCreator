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
      question: '納品後の拡張も可能ですか？',
      answer: '可能です。機能追加やデザイン変更など、内容に応じてお見積りいたします。',
    },
    {
      question: 'これまでどんなワールドを作りましたか？',
      answer: 'リサイクルショップの店舗再現、婚活メタバース、ライブ配信用コミュニティステージなど多数の実績があります。',
    },
    {
      question: '制作物はポートフォリオに掲載されますか？',
      answer: '掲載させていただく場合があります。非公開希望の場合は「実績公開NGオプション（10,000円）」をご選択ください。',
    },
    {
      question: '技術的なサポートはありますか？',
      answer: '納品後30日間、仕様・お見積り段階で合意した内容に関するエラーは全て無料で修正対応いたします。仕様変更や追加機能は有料となりますが、事前にお知らせしますのでご安心ください。',
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
