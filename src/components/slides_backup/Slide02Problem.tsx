'use client';

import { forwardRef } from 'react';
import SlideWrapper from './SlideWrapper';
import { HelpCircle } from 'lucide-react';

const Slide02Problem = forwardRef<HTMLDivElement>((_, ref) => {
  const problems = [
    'AI活用したいけど、何から始めればいい?',
    '自動化したいけど、開発を頼むと高額...',
    '24時間対応したいけど、自分1人じゃ無理',
    '動画やコンテンツを増やしたいけど時間がない',
    '専門人材を雇う余裕がない',
  ];

  return (
    <SlideWrapper ref={ref} slideNumber={2} slideName="problem">
      <div className="flex flex-col h-full">
        {/* ヘッダー */}
        <div className="text-center mb-5">
          <h1 className="text-[28px] font-black text-gray-900 tracking-tight leading-tight">
            こんな<span className="text-blue-600">お悩み</span>ありませんか?
          </h1>
          <p className="text-sm text-gray-500 mt-1">多くのお客様が抱える課題</p>
        </div>

        {/* 悩みリスト */}
        <div className="flex flex-col gap-3 flex-1">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="flex items-center gap-4 card-white rounded-xl px-5 py-4 flex-1"
            >
              <div className="w-10 h-10 rounded-lg bg-red-50 border border-red-100 flex items-center justify-center flex-shrink-0">
                <HelpCircle className="w-5 h-5 text-red-500" />
              </div>
              <span className="text-base font-medium text-gray-700 leading-relaxed">{problem}</span>
            </div>
          ))}
        </div>
      </div>
    </SlideWrapper>
  );
});

Slide02Problem.displayName = 'Slide02Problem';

export default Slide02Problem;
