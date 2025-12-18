'use client';

import { forwardRef } from 'react';
import SlideWrapper from './SlideWrapper';

const Slide09FAQ1 = forwardRef<HTMLDivElement>((_, ref) => {
  const faqs = [
    {
      q: '届いたらすぐ使える?',
      a: 'はい！ダウンロードして起動するだけ。マニュアル付き。',
    },
    {
      q: '私は何をすればいい?',
      a: 'API発行以外は全てお任せ。発行もサポートします。',
    },
    {
      q: '対応デバイスは?',
      a: 'Windows / macOS対応。デジタルサイネージもご相談可。',
    },
    {
      q: '月額料金はかかる?',
      a: '買い切りで月額0円。API利用料のみお客様負担。',
    },
    {
      q: '用意が必要なものは?',
      a: 'OpenAI APIキー。Live配信はYouTube APIも必要。',
    },
  ];

  return (
    <SlideWrapper ref={ref} slideNumber={9} slideName="faq1">
      <div className="flex flex-col h-full">
        {/* ヘッダー */}
        <div className="text-center mb-4">
          <h1 className="text-[26px] font-black text-gray-900 tracking-tight">
            よくある質問<span className="text-blue-600">（1/3）</span>
          </h1>
          <p className="text-xs text-gray-500 mt-0.5">ご購入前の疑問を解決</p>
        </div>

        {/* FAQリスト */}
        <div className="flex flex-col gap-2 flex-1">
          {faqs.map(({ q, a }, index) => (
            <div
              key={index}
              className="card-white rounded-xl px-4 py-3 flex-1 flex flex-col justify-center"
            >
              <div className="flex items-center gap-2 mb-0.5">
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

Slide09FAQ1.displayName = 'Slide09FAQ1';

export default Slide09FAQ1;
