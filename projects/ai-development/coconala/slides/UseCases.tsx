'use client';

import SlideWrapper from '../SlideWrapper';
import { Radio, Mic, Film, MessageCircle } from 'lucide-react';

// ========================================
// フォント設計（ハイブリッド）
// ========================================
// タイトル: Melete（英語）
// サブタイトル・本文: HackGen（日本語）
// ========================================
// カラーレギュレーション
// ========================================
// アイコン背景（基本カラーパレット4段階）:
//   ライブ配信: sky-500（レベル1・最も明るい）
//   音声対話: blue-500（レベル2・中間）
//   動画生成: indigo-500（レベル3・やや暗い）
//   チャット: violet-500（レベル4・最も暗い）
// アプリ別テキストカラー（アプリカラー）:
//   ライブ配信: rose-600
//   音声対話: teal-600
//   動画生成: indigo-600
//   チャット: amber-600
// タイトルテキスト: blue-600（統一）
// ========================================

export function UseCases() {
  const apps = [
    { icon: Radio, label: 'ライブ配信', desc: '24時間無人配信', textColor: 'text-rose-600', bgColor: 'bg-sky-500' },
    { icon: Mic, label: '音声対話', desc: '店舗・観光案内', textColor: 'text-teal-600', bgColor: 'bg-blue-500' },
    { icon: Film, label: '動画生成', desc: '台本から自動', textColor: 'text-indigo-600', bgColor: 'bg-indigo-500' },
    { icon: MessageCircle, label: 'チャット', desc: 'FAQ自動対応', textColor: 'text-amber-600', bgColor: 'bg-violet-500' },
  ];

  return (
    <SlideWrapper slideNumber={3} slideName="usecases">
      <div className="flex flex-col h-full font-hackgen">
        {/* タイトル（コンパクト） */}
        <div className="text-center mb-2">
          <h1 className="font-melete text-3xl font-bold tracking-wider text-blue-600">
            APPS
          </h1>
          <p className="text-xs text-gray-500">4つのアプリをご用意</p>
        </div>
        {/* コンテンツ */}
        <div className="flex-1 flex flex-col gap-2">
          {apps.map(({ icon: Icon, label, desc, textColor, bgColor }) => (
            <div key={label} className="flex-1 flex items-center gap-3 bg-white rounded-lg p-3 shadow-sm border border-gray-100">
              <div className={`w-11 h-11 ${bgColor} rounded-lg flex items-center justify-center`}>
                <Icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className={`text-base font-bold ${textColor}`}>{label}</div>
                <div className="text-xs text-gray-500">{desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SlideWrapper>
  );
}
