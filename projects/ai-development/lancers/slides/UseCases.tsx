'use client';

import { forwardRef } from 'react';
import SlideWrapperLancers from '../SlideWrapperLancers';
import { Radio, Mic, Film, MessageCircle } from 'lucide-react';

// ========================================
// フォント設計（ハイブリッド）
// ========================================
// タイトル: Melete（英語）
// サブタイトル・本文: HackGen（日本語）
// カラー: ディープトーン
// ========================================

export const UseCasesLancers = forwardRef<HTMLDivElement>((_, ref) => {
  const apps = [
    { icon: Radio, label: 'ライブ配信', desc: '24時間無人配信', color: 'bg-rose-600' },
    { icon: Mic, label: '音声対話', desc: '店舗・観光案内', color: 'bg-teal-600' },
    { icon: Film, label: '動画生成', desc: '台本から自動', color: 'bg-indigo-600' },
    { icon: MessageCircle, label: 'チャット', desc: 'FAQ自動対応', color: 'bg-amber-600' },
  ];

  return (
    <SlideWrapperLancers ref={ref} slideNumber={3} slideName="usecases">
      <div className="flex flex-col h-full font-hackgen">
        {/* タイトル */}
        <div className="text-center mb-6">
          <h1 className="font-melete text-5xl font-bold tracking-wider text-blue-600 mb-1">
            APPS
          </h1>
          <p className="text-base text-gray-500">4つのアプリをご用意</p>
        </div>
        {/* コンテンツ */}
        <div className="flex-1 flex gap-4">
          {apps.map(({ icon: Icon, label, desc, color }) => (
            <div key={label} className="flex-1 flex flex-col items-center justify-center bg-white rounded-2xl p-6 shadow-md border border-gray-100">
              <div className={`w-20 h-20 ${color} rounded-2xl flex items-center justify-center mb-4`}>
                <Icon className="w-10 h-10 text-white" />
              </div>
              <div className="text-xl font-bold text-gray-800">{label}</div>
              <div className="text-base text-gray-500">{desc}</div>
            </div>
          ))}
        </div>
      </div>
    </SlideWrapperLancers>
  );
});
UseCasesLancers.displayName = 'UseCasesLancers';
