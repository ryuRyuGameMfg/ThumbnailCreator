'use client';

import SlideWrapper from '../SlideWrapper';

// ========================================
// フォント設計（ハイブリッド）
// ========================================
// タイトル: Melete（英語）
// サブタイトル・本文: HackGen（日本語）
// ========================================
// カラーレギュレーション
// ========================================
// 基本グラデーション（デフォルト）: from-sky-500 to-blue-600
// タイトルテキスト: blue-600（統一）
// ========================================

export function Problem() {
  const problems = [
    { num: '01', title: 'AI活用したいけど', desc: '何から始めればいいかわからない' },
    { num: '02', title: '24時間対応したい', desc: 'でも1人じゃ限界がある' },
    { num: '03', title: '開発を依頼したい', desc: 'でも費用が高額になりそう' },
  ];

  return (
    <SlideWrapper slideNumber={1} slideName="problem">
      <div className="flex flex-col h-full font-hackgen">
        {/* タイトル（コンパクト） */}
        <div className="text-center mb-2">
          <h1 className="font-melete text-3xl font-bold tracking-wider text-blue-600">
            PROBLEM
          </h1>
          <p className="text-xs text-gray-500">こんなお悩みありませんか?</p>
        </div>
        {/* コンテンツ */}
        <div className="flex-1 flex flex-col gap-2">
          {problems.map(({ num, title, desc }) => (
            <div key={num} className="flex-1 bg-gradient-to-r from-sky-500 to-blue-600 rounded-xl px-4 py-3 flex items-center gap-3 shadow-lg">
              <div className="text-3xl font-bold text-white/30">{num}</div>
              <div>
                <div className="text-base font-bold text-white">{title}</div>
                <div className="text-xs text-sky-100">{desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SlideWrapper>
  );
}
