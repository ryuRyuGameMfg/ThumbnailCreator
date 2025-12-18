'use client';

import { forwardRef } from 'react';
import SlideWrapper from './SlideWrapper';
import { Radio, Mic, Film, MessageCircle } from 'lucide-react';

const Slide04UseCases = forwardRef<HTMLDivElement>((_, ref) => {
  const useCases = [
    {
      icon: Radio,
      title: 'Live配信',
      desc: '24時間無人配信\nコメント自動対応',
      color: 'icon-bg-1',
    },
    {
      icon: Mic,
      title: '音声対話',
      desc: 'デジタルスタッフとして接客\n自社FAQで正確に回答',
      color: 'icon-bg-2',
    },
    {
      icon: Film,
      title: '動画生成',
      desc: 'テキスト入力で動画作成\n解説・研修動画を量産',
      color: 'icon-bg-3',
    },
    {
      icon: MessageCircle,
      title: 'チャット',
      desc: '問い合わせ対応を自動化\n24時間お客様対応',
      color: 'icon-bg-4',
    },
  ];

  return (
    <SlideWrapper ref={ref} slideNumber={4} slideName="usecases">
      <div className="flex flex-col h-full">
        {/* ヘッダー */}
        <div className="text-center mb-5">
          <h1 className="text-[28px] font-black text-gray-900 leading-tight tracking-tight">
            <span className="text-blue-600">様々な活用シーン</span>に対応
          </h1>
          <p className="text-sm text-gray-500 mt-1">ご要望に合わせて機能を納品</p>
        </div>

        {/* 活用例グリッド */}
        <div className="grid grid-cols-2 gap-4 flex-1">
          {useCases.map(({ icon: Icon, title, desc, color }, index) => (
            <div key={index} className="card-white rounded-2xl p-5 flex flex-col">
              <div className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center mb-3`}>
                <Icon className="w-6 h-6 text-white" />
              </div>
              <p className="text-lg font-bold text-gray-900 mb-2">{title}</p>
              <p className="text-sm text-gray-500 leading-relaxed whitespace-pre-line">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </SlideWrapper>
  );
});

Slide04UseCases.displayName = 'Slide04UseCases';

export default Slide04UseCases;
