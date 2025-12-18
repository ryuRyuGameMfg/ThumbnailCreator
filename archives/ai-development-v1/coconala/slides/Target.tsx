'use client';

import SlideWrapper from '../SlideWrapper';
import { User, Building2, Briefcase, Lightbulb } from 'lucide-react';

// ========================================
// フォント設計（ハイブリッド）
// ========================================
// タイトル: Melete（英語）
// サブタイトル・本文: HackGen（日本語）
// ========================================
// カラーレギュレーション
// ========================================
// アイコンテキストカラー（基本カラーパレット4段階）:
//   配信者: sky-600（レベル1・最も明るい）
//   店舗: blue-600（レベル2・中間・メインアクセント）
//   マーケター: indigo-600（レベル3・やや暗い）
//   個人事業主: violet-600（レベル4・最も暗い）
// タイトルテキスト: blue-600（統一）
// ========================================

export function Target() {
  const targets = [
    { icon: User, label: '配信者', sub: '自動化したい方', color: 'text-sky-600' },
    { icon: Building2, label: '店舗', sub: '企業', color: 'text-blue-600' },
    { icon: Briefcase, label: 'マーケター', sub: '広報', color: 'text-indigo-600' },
    { icon: Lightbulb, label: '個人事業主', sub: 'フリーランス', color: 'text-violet-600' },
  ];

  return (
    <SlideWrapper slideNumber={8} slideName="target">
      <div className="flex flex-col h-full font-hackgen">
        {/* タイトル（コンパクト） */}
        <div className="text-center mb-3">
          <h1 className="font-melete text-3xl font-bold tracking-wider text-blue-600">
            TARGET
          </h1>
          <p className="text-xs text-gray-500">こんな方におすすめ</p>
        </div>
        {/* コンテンツ */}
        <div className="flex-1 flex items-center justify-center">
          <div className="grid grid-cols-4 gap-3 w-full">
            {targets.map(({ icon: Icon, label, sub, color }) => (
              <div key={label} className="flex flex-col items-center text-center">
                <Icon className={`w-14 h-14 ${color} mb-2`} strokeWidth={1.5} />
                <span className="text-sm font-bold text-gray-800">{label}</span>
                {sub && <span className="text-[10px] text-gray-500">{sub}</span>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}
