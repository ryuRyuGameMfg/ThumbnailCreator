'use client';

import { forwardRef } from 'react';
import SlideWrapper from './SlideWrapper';
import { MessageSquare, FileCheck, Headphones, Package } from 'lucide-react';

const Slide07Flow = forwardRef<HTMLDivElement>((_, ref) => {
  const steps = [
    {
      num: '1',
      icon: MessageSquare,
      title: '無料相談',
      desc: 'ご要望をヒアリング',
      color: 'icon-bg-1',
    },
    {
      num: '2',
      icon: FileCheck,
      title: 'ご契約',
      desc: 'お見積り・ご契約',
      color: 'icon-bg-2',
    },
    {
      num: '3',
      icon: Headphones,
      title: 'ヒアリング',
      desc: 'キャラ・仕様の確認',
      color: 'icon-bg-3',
    },
    {
      num: '4',
      icon: Package,
      title: '納品',
      desc: '最短4日でお届け',
      color: 'icon-bg-4',
    },
  ];

  return (
    <SlideWrapper ref={ref} slideNumber={7} slideName="flow">
      <div className="flex flex-col h-full">
        {/* ヘッダー */}
        <div className="text-center mb-5">
          <h1 className="text-[28px] font-black text-gray-900 tracking-tight">
            サービスの流れ
          </h1>
          <p className="text-sm text-gray-500 mt-1">シンプル4ステップ</p>
        </div>

        {/* ステップ */}
        <div className="flex flex-col gap-4 flex-1">
          {steps.map(({ num, icon: Icon, title, desc, color }, index) => (
            <div key={index} className="flex items-center gap-4 flex-1">
              {/* ステップ番号 */}
              <div className={`w-14 h-14 rounded-full ${color} flex items-center justify-center flex-shrink-0`}>
                <span className="text-2xl font-black text-white">{num}</span>
              </div>
              
              {/* コンテンツ */}
              <div className="flex-1 card-white rounded-xl px-5 py-4 flex items-center gap-4 h-full">
                <Icon className="w-6 h-6 text-gray-400" />
                <div>
                  <p className="text-base font-bold text-gray-900">{title}</p>
                  <p className="text-sm text-gray-500">{desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SlideWrapper>
  );
});

Slide07Flow.displayName = 'Slide07Flow';

export default Slide07Flow;
