'use client';

import { forwardRef } from 'react';
import SlideWrapper from './SlideWrapper';

const Slide10FAQ2 = forwardRef<HTMLDivElement>((_, ref) => {
  const faqs = [
    {
      q: 'キャラは自分で用意する?',
      a: 'ユニティちゃんを無料提供。VRM・Live2Dなら追加料金なし。',
    },
    {
      q: '商用利用はできる?',
      a: '個人は無料。法人は別途¥100,000のライセンス料が必要。',
    },
    {
      q: '使用するLLMは?',
      a: '基本はOpenAI。Claude・Gemini等も対応可能。',
    },
    {
      q: 'YouTube以外の配信は?',
      a: 'Twitch等もカスタム開発でご相談可能。',
    },
    {
      q: 'メンテナンスは必要?',
      a: '基本不要な設計。必要時は都度ご依頼ください。',
    },
  ];

  return (
    <SlideWrapper ref={ref} slideNumber={10} slideName="faq2">
      <div className="flex flex-col h-full">
        {/* ヘッダー */}
        <div className="text-center mb-4">
          <h1 className="text-[26px] font-black text-gray-900 tracking-tight">
            よくある質問<span className="text-blue-600">（2/3）</span>
          </h1>
          <p className="text-xs text-gray-500 mt-0.5">キャラ・技術について</p>
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

Slide10FAQ2.displayName = 'Slide10FAQ2';

export default Slide10FAQ2;
