'use client';

import { forwardRef } from 'react';
import SlideWrapper from './SlideWrapper';
import { User, Building2, Lightbulb, Briefcase } from 'lucide-react';

const Slide08Target = forwardRef<HTMLDivElement>((_, ref) => {
  const targets = [
    {
      icon: User,
      title: 'VTuber・配信者',
      desc: '配信を自動化して視聴者を増やしたい',
      iconBg: 'icon-bg-1',
    },
    {
      icon: Building2,
      title: '店舗・企業',
      desc: '接客・案内を自動化したい',
      iconBg: 'icon-bg-2',
    },
    {
      icon: Briefcase,
      title: 'マーケター・広報',
      desc: '動画コンテンツを効率的に量産したい',
      iconBg: 'icon-bg-3',
    },
    {
      icon: Lightbulb,
      title: '1人で働く個人事業主',
      desc: 'もう1人の自分が欲しい',
      iconBg: 'icon-bg-4',
    },
  ];

  return (
    <SlideWrapper ref={ref} slideNumber={8} slideName="target">
      <div className="flex flex-col h-full">
        {/* ヘッダー */}
        <div className="text-center mb-5">
          <h1 className="text-[28px] font-black text-gray-900 tracking-tight">
            こんな方に<span className="text-blue-600">おすすめ</span>
          </h1>
          <p className="text-sm text-gray-500 mt-1">幅広い用途に対応</p>
        </div>

        {/* ターゲットリスト */}
        <div className="flex flex-col gap-4 flex-1">
          {targets.map(({ icon: Icon, title, desc, iconBg }) => (
            <div
              key={title}
              className="flex items-center gap-4 card-white rounded-xl px-5 py-5 flex-1"
            >
              <div className={`w-12 h-12 rounded-xl ${iconBg} flex items-center justify-center flex-shrink-0`}>
                <Icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-lg font-bold text-gray-900">{title}</p>
                <p className="text-sm text-gray-500">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SlideWrapper>
  );
});

Slide08Target.displayName = 'Slide08Target';

export default Slide08Target;
