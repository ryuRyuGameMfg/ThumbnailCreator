'use client';

import { forwardRef } from 'react';
import SlideWrapper from './SlideWrapper';
import { Package, Download, Coins, Clock, Wrench } from 'lucide-react';

const Slide03Solution = forwardRef<HTMLDivElement>((_, ref) => {
  const solutions = [
    {
      icon: Package,
      title: '完全おまかせ納品',
      desc: 'キャラを渡すだけ。あとは全部お任せ',
    },
    {
      icon: Download,
      title: '届いたら起動するだけ',
      desc: '専門知識ゼロでOK',
    },
    {
      icon: Coins,
      title: '買い切り・月額0円',
      desc: 'かかるのはAPI料金だけ',
    },
    {
      icon: Clock,
      title: '24時間働くAI社員',
      desc: '寝ている間も接客・配信・対応',
    },
    {
      icon: Wrench,
      title: '30日間 無料修正',
      desc: '納品後も安心サポート',
    },
  ];

  return (
    <SlideWrapper ref={ref} slideNumber={3} slideName="solution">
      <div className="flex flex-col h-full">
        {/* ヘッダー */}
        <div className="text-center mb-5">
          <h1 className="text-[28px] font-black text-gray-900 leading-tight tracking-tight">
            <span className="text-blue-600">全部解決</span>します
          </h1>
          <p className="text-sm text-gray-500 mt-1">このサービスでできること</p>
        </div>

        {/* ソリューションリスト */}
        <div className="flex flex-col gap-3 flex-1">
          {solutions.map(({ icon: Icon, title, desc }, index) => (
            <div key={index} className="flex items-center gap-4 card-white rounded-xl px-5 py-4 flex-1">
              <div className="w-11 h-11 rounded-lg icon-bg flex items-center justify-center flex-shrink-0">
                <Icon className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-base font-bold text-gray-900">{title}</p>
                <p className="text-sm text-gray-500">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SlideWrapper>
  );
});

Slide03Solution.displayName = 'Slide03Solution';

export default Slide03Solution;
