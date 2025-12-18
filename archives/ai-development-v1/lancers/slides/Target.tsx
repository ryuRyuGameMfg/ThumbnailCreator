'use client';

import { forwardRef } from 'react';
import SlideWrapperLancers from '../SlideWrapperLancers';
import { User, Building2, Briefcase, Lightbulb } from 'lucide-react';

// ========================================
// フォント設計（ハイブリッド）
// ========================================
// タイトル: Melete（英語）
// サブタイトル・本文: HackGen（日本語）
// ========================================

export const TargetLancers = forwardRef<HTMLDivElement>((_, ref) => {
  const targets = [
    { icon: User, label: '配信者', desc: '自動化したい方', color: 'text-sky-600', bg: 'bg-sky-50', border: 'border-sky-200' },
    { icon: Building2, label: '店舗・企業', desc: '接客を自動化したい', color: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-200' },
    { icon: Briefcase, label: 'マーケター・広報', desc: '動画を量産したい', color: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-200' },
    { icon: Lightbulb, label: '個人事業主', desc: 'フリーランス', color: 'text-indigo-600', bg: 'bg-indigo-50', border: 'border-indigo-200' },
  ];

  return (
    <SlideWrapperLancers ref={ref} slideNumber={8} slideName="target">
      <div className="flex flex-col h-full font-hackgen">
        {/* タイトル */}
        <div className="text-center mb-6">
          <h1 className="font-melete text-5xl font-bold tracking-wider text-blue-600 mb-1">
            TARGET
          </h1>
          <p className="text-base text-gray-500">こんな方におすすめ</p>
        </div>
        {/* コンテンツ */}
        <div className="flex-1 flex gap-4">
          {targets.map(({ icon: Icon, label, desc, color, bg, border }) => (
            <div key={label} className={`flex-1 ${bg} ${border} border-2 rounded-2xl p-6 flex flex-col items-center justify-center text-center`}>
              <Icon className={`w-16 h-16 ${color} mb-4`} strokeWidth={1.5} />
              <span className="text-xl font-bold text-gray-800">{label}</span>
              <span className="text-sm text-gray-500 mt-1">{desc}</span>
            </div>
          ))}
        </div>
      </div>
    </SlideWrapperLancers>
  );
});
TargetLancers.displayName = 'TargetLancers';
