'use client';

import { forwardRef } from 'react';
import SlideWrapper from './SlideWrapper';

const Slide11FAQ3 = forwardRef<HTMLDivElement>((_, ref) => {
  const faqs = [
    {
      q: '複数機能を同時に依頼できる?',
      a: '可能。基本は別アプリで納品。1つにまとめることも可。',
    },
    {
      q: 'カスタム開発はどこまで対応?',
      a: 'クラウドDB構築、PoCからの開発など柔軟に対応。',
    },
    {
      q: 'アップデートはある?',
      a: '基本なし。必要時は都度お見積りで対応。',
    },
    {
      q: 'キャンセル・返金は?',
      a: '契約後のキャンセル・返金は承っておりません。',
    },
  ];

  return (
    <SlideWrapper ref={ref} slideNumber={11} slideName="faq3">
      <div className="flex flex-col h-full">
        {/* ヘッダー */}
        <div className="text-center mb-4">
          <h1 className="text-[26px] font-black text-gray-900 tracking-tight">
            よくある質問<span className="text-blue-600">（3/3）</span>
          </h1>
          <p className="text-xs text-gray-500 mt-0.5">契約・カスタムについて</p>
        </div>

        {/* FAQリスト */}
        <div className="flex flex-col gap-3 flex-1">
          {faqs.map(({ q, a }, index) => (
            <div
              key={index}
              className="card-white rounded-xl px-4 py-4 flex-1 flex flex-col justify-center"
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="w-5 h-5 rounded icon-bg flex items-center justify-center text-[10px] font-black text-white flex-shrink-0">
                  Q
                </span>
                <span className="text-sm font-bold text-gray-900">{q}</span>
              </div>
              <div className="pl-7">
                <span className="text-xs text-gray-600">{a}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SlideWrapper>
  );
});

Slide11FAQ3.displayName = 'Slide11FAQ3';

export default Slide11FAQ3;
