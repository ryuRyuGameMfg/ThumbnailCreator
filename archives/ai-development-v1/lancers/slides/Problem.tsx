'use client';

import { forwardRef } from 'react';
import SlideWrapperLancers from '../SlideWrapperLancers';

// ========================================
// フォント設計（ハイブリッド）
// ========================================
// タイトル: Melete（英語）
// サブタイトル・本文: HackGen（日本語）
// ========================================

export const ProblemLancers = forwardRef<HTMLDivElement>((_, ref) => {
  const problems = [
    { num: '01', title: 'AI活用したいけど', desc: '何から始めればいいかわからない' },
    { num: '02', title: '24時間対応したい', desc: 'でも1人じゃ限界がある' },
    { num: '03', title: '開発を依頼したい', desc: 'でも費用が高額になりそう' },
  ];

  return (
    <SlideWrapperLancers ref={ref} slideNumber={1} slideName="problem">
      <div className="flex flex-col h-full font-hackgen">
        {/* タイトル */}
        <div className="text-center mb-6">
          <h1 className="font-melete text-5xl font-bold tracking-wider text-blue-600 mb-1">
            PROBLEM
          </h1>
          <p className="text-base text-gray-500">こんなお悩みありませんか?</p>
        </div>
        {/* コンテンツ */}
        <div className="flex-1 flex gap-4">
          {problems.map(({ num, title, desc }) => (
            <div key={num} className="flex-1 bg-gradient-to-br from-sky-500 to-blue-600 rounded-2xl px-6 py-5 flex flex-col justify-center shadow-lg">
              <div className="text-5xl font-bold text-white/30 mb-2">{num}</div>
              <div className="text-xl font-bold text-white">{title}</div>
              <div className="text-base text-sky-100">{desc}</div>
            </div>
          ))}
        </div>
      </div>
    </SlideWrapperLancers>
  );
});
ProblemLancers.displayName = 'ProblemLancers';
