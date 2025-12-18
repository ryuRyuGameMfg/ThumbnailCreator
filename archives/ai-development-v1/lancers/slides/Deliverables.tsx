'use client';

import { forwardRef } from 'react';
import SlideWrapperLancers from '../SlideWrapperLancers';
import { Monitor, FileText, Wrench, ShoppingBag, CheckCircle, Package } from 'lucide-react';

// ========================================
// フォント設計（ハイブリッド）
// ========================================
// タイトル: Melete（英語）
// サブタイトル・本文: HackGen（日本語）
// ========================================

export const DeliverablesLancers = forwardRef<HTMLDivElement>((_, ref) => {
  const items = [
    { icon: Monitor, label: 'アプリ本体', desc: 'Win/Mac対応', color: 'bg-sky-500', border: 'border-sky-200' },
    { icon: FileText, label: 'マニュアル', desc: '詳細な操作解説', color: 'bg-blue-500', border: 'border-blue-200' },
    { icon: Wrench, label: '30日サポート', desc: '無料修正対応', color: 'bg-indigo-500', border: 'border-indigo-200' },
    { icon: ShoppingBag, label: '買い切り', desc: '月額0円', color: 'bg-violet-500', border: 'border-violet-200' },
    { icon: CheckCircle, label: '商用OK', desc: '収益化可能', color: 'bg-purple-500', border: 'border-purple-200' },
    { icon: Package, label: '追加費用なし', desc: 'API料金のみ', color: 'bg-pink-500', border: 'border-pink-200' },
  ];

  return (
    <SlideWrapperLancers ref={ref} slideNumber={10} slideName="deliverables">
      <div className="flex flex-col h-full font-hackgen">
        {/* タイトル */}
        <div className="text-center mb-6">
          <h1 className="font-melete text-5xl font-bold tracking-wider text-blue-600 mb-1">
            DELIVERABLES
          </h1>
          <p className="text-base text-gray-500">納品内容</p>
        </div>
        {/* コンテンツ */}
        <div className="flex-1 grid grid-cols-6 gap-4">
          {items.map(({ icon: Icon, label, desc, color, border }) => (
            <div key={label} className={`bg-white ${border} border-2 rounded-2xl p-4 flex flex-col items-center justify-center text-center shadow-sm`}>
              <div className={`w-14 h-14 ${color} rounded-xl flex items-center justify-center mb-3`}>
                <Icon className="w-7 h-7 text-white" />
              </div>
              <div className="text-base font-bold text-gray-800">{label}</div>
              <div className="text-sm text-gray-500">{desc}</div>
            </div>
          ))}
        </div>
      </div>
    </SlideWrapperLancers>
  );
});
DeliverablesLancers.displayName = 'DeliverablesLancers';
