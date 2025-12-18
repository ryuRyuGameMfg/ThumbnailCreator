'use client';

import SlideWrapper from '../SlideWrapper';
import { PinkTitleV2 } from '@/components/PinkTitleV2';
import { FONTS } from '@/constants/STYLES';

// ========================================
// Problem（お悩み） - サービス画像制作代行
// ========================================

export function Problem() {
  const problems = [
    { num: '01', title: 'サービス画像を作りたいけど', desc: 'デザインスキルがない...' },
    { num: '02', title: '何を書けばいいか', desc: '構成がわからない...' },
    { num: '03', title: '外注したいけど', desc: '高額で時間がかかりそう...' },
  ];

  return (
    <SlideWrapper slideNumber={2} slideName="problem">
      <div className={`flex flex-col h-full ${FONTS.JAPANESE}`}>
        <PinkTitleV2 english="PROBLEM" japanese="こんなお悩みありませんか?" />

        {/* コンテンツ */}
        <div className="flex-1 flex flex-col gap-2.5 py-2">
          {problems.map(({ num, title, desc }) => (
            <div
              key={num}
              className="flex-1 bg-gradient-to-r from-sky-500 to-blue-600 rounded-xl px-4 py-3 flex items-center gap-3 shadow-lg"
            >
              <div className="text-4xl font-black text-white/20">{num}</div>
              <div className="flex-1">
                <div className="text-base font-bold text-white leading-tight mb-0.5">{title}</div>
                <div className="text-xs text-white/90 leading-tight">{desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SlideWrapper>
  );
}
