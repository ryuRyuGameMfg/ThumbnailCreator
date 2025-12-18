'use client';

import SlideWrapper from '../SlideWrapper';
import { Monitor, FileText, Wrench, ShoppingBag, CheckCircle, Package } from 'lucide-react';

// ========================================
// フォント設計（ハイブリッド）
// ========================================
// タイトル: Melete（英語）
// サブタイトル・本文: HackGen（日本語）
// ========================================
// カラーレギュレーション
// ========================================
// アイコン背景（基本カラーパレット4段階・循環）:
//   アプリ本体: sky-500（レベル1・最も明るい）
//   マニュアル: blue-500（レベル2・中間）
//   30日サポート: indigo-500（レベル3・やや暗い）
//   買い切り: violet-500（レベル4・最も暗い）
//   商用OK: sky-600（レベル1・循環）
//   追加費用なし: blue-600（レベル2・循環）
// タイトルテキスト: blue-600（統一）
// ========================================

export function Deliverables() {
  const items = [
    { icon: Monitor, label: 'アプリ本体', desc: 'Win/Mac', color: 'bg-sky-500', border: 'border-sky-200' },
    { icon: FileText, label: 'マニュアル', desc: '詳細解説', color: 'bg-blue-500', border: 'border-blue-200' },
    { icon: Wrench, label: '30日サポート', desc: '無料修正', color: 'bg-indigo-500', border: 'border-indigo-200' },
    { icon: ShoppingBag, label: '買い切り', desc: '月額0円', color: 'bg-violet-500', border: 'border-violet-200' },
    { icon: CheckCircle, label: '商用OK', desc: '収益化可', color: 'bg-sky-600', border: 'border-sky-200' },
    { icon: Package, label: '追加費用なし', desc: 'API料金のみ', color: 'bg-blue-600', border: 'border-blue-200' },
  ];

  return (
    <SlideWrapper slideNumber={10} slideName="deliverables">
      <div className="flex flex-col h-full font-hackgen">
        {/* タイトル（コンパクト） */}
        <div className="text-center mb-2">
          <h1 className="font-melete text-2xl font-bold tracking-wider text-blue-600">
            DELIVERABLES
          </h1>
          <p className="text-xs text-gray-500">納品内容</p>
        </div>
        {/* コンテンツ */}
        <div className="flex-1 grid grid-cols-3 gap-2">
          {items.map(({ icon: Icon, label, desc, color, border }) => (
            <div key={label} className={`bg-white ${border} border rounded-lg p-2 flex flex-col items-center justify-center text-center shadow-sm`}>
              <div className={`w-9 h-9 ${color} rounded-lg flex items-center justify-center mb-1`}>
                <Icon className="w-5 h-5 text-white" />
              </div>
              <div className="text-xs font-bold text-gray-800">{label}</div>
              <div className="text-[10px] text-gray-500">{desc}</div>
            </div>
          ))}
        </div>
      </div>
    </SlideWrapper>
  );
}
