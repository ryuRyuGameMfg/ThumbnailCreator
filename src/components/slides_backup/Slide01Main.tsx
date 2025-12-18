'use client';

import { forwardRef } from 'react';
import SlideWrapper from './SlideWrapper';
import { Radio, Mic, Film, MessageCircle } from 'lucide-react';

const Slide01Main = forwardRef<HTMLDivElement>((_, ref) => {
  const useCases = [
    { icon: Radio, label: 'Live配信' },
    { icon: Mic, label: '音声対話' },
    { icon: Film, label: '動画生成' },
    { icon: MessageCircle, label: 'チャット' },
  ];

  return (
    <SlideWrapper ref={ref} slideNumber={1} slideName="main">
      <div className="flex flex-col items-center justify-center h-full text-center">
        {/* メインコピー */}
        <h1 className="text-[32px] font-black text-gray-900 leading-tight mb-3">
          あなたの代わりに働く
          <br />
          <span className="text-blue-600">AI社員</span>を納品します
        </h1>

        {/* サブコピー */}
        <p className="text-lg text-gray-600 mb-6">
          届いたら起動するだけ。専門知識不要。
        </p>

        {/* キャラクターエリア */}
        <div className="relative w-28 h-28 mb-6">
          <div className="relative w-full h-full rounded-full bg-gray-100 border-2 border-gray-200 flex items-center justify-center shadow-soft">
            <div className="w-14 h-14 rounded-full bg-gradient-to-b from-gray-300 to-gray-400 relative overflow-hidden">
              <div className="absolute w-5 h-5 bg-gray-500 rounded-full top-2 left-1/2 -translate-x-1/2" />
              <div className="absolute w-9 h-4 bg-gray-500 rounded-t-full bottom-0 left-1/2 -translate-x-1/2" />
            </div>
          </div>
          {/* 吹き出し */}
          <div className="absolute -right-3 top-0 bg-white rounded-xl rounded-bl-none px-2.5 py-1.5 shadow-medium border border-gray-200">
            <p className="text-xs text-gray-700 font-medium">お任せください!</p>
          </div>
        </div>

        {/* 活用例アイコン */}
        <div className="flex gap-4 mb-6">
          {useCases.map(({ icon: Icon, label }) => (
            <div key={label} className="flex flex-col items-center gap-1.5">
              <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center">
                <Icon className="w-5 h-5 text-blue-600" />
              </div>
              <span className="text-[11px] text-gray-500 font-medium">{label}</span>
            </div>
          ))}
        </div>

        {/* バッジ */}
        <div className="flex gap-3">
          <span className="px-4 py-2 rounded-full badge-gold text-sm font-bold shadow-soft">
            買い切り・月額0円
          </span>
          <span className="px-4 py-2 rounded-full badge-blue text-sm font-bold">
            最短4日で届く
          </span>
        </div>
      </div>
    </SlideWrapper>
  );
});

Slide01Main.displayName = 'Slide01Main';

export default Slide01Main;
