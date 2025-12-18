'use client';

import SlideWrapper from '../SlideWrapper';
import { Plus } from 'lucide-react';

// ========================================
// PricingOptions（有料オプション）
// ========================================

function SlideTitle({ english, japanese }: { english: string; japanese: string }) {
  return (
    <div className="text-center mb-3">
      <h1 className="font-melete text-[36px] font-bold text-sky-600 tracking-wider">
        {english}
      </h1>
      <p className="text-sm text-gray-500 font-hackgen">{japanese}</p>
    </div>
  );
}

export function PricingOptions() {
  const basicOptions = [
    { name: '実績公開NGオプション', price: '＋10,000円' },
  ];

  const featureOptions = [
    { name: '乗り物設置', price: '＋3,000円〜' },
    { name: 'コメントスクリーン', price: '＋3,000円〜' },
    { name: '天候システム', price: '＋5,000円〜' },
    { name: '時間連動（朝・昼・夜）', price: '＋5,000円〜' },
    { name: 'ボタンギミック', price: '＋3,000円〜' },
    { name: '座れる椅子', price: '＋2,000円〜' },
    { name: '手に持てる食べ物', price: '＋2,000円〜' },
    { name: '看板設置', price: '＋2,000円〜' },
    { name: '動画スクリーン', price: '＋3,000円〜' },
  ];

  return (
    <SlideWrapper slideNumber={5} slideName="pricing-options">
      <div className="flex flex-col h-full font-hackgen">
        <SlideTitle english="OPTIONS" japanese="有料オプション" />
        
        <div className="flex-1 flex flex-col gap-3">
          {/* 基本オプション */}
          <div className="bg-white border-2 border-sky-300 rounded-xl p-2 shadow-sm">
            <h4 className="text-sky-600 font-bold text-xs mb-1.5 flex items-center gap-1">
              <Plus className="w-3 h-3" />
              基本オプション
            </h4>
            <div className="space-y-1">
              {basicOptions.map(({ name, price }, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between py-1 px-2 bg-sky-50 rounded text-[10px]"
                >
                  <span className="text-gray-700">{name}</span>
                  <span className="text-sky-600 font-bold">{price}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Cluster機能オプション */}
          <div className="bg-white border-2 border-sky-300 rounded-xl p-2 shadow-sm flex-1">
            <h4 className="text-blue-600 font-bold text-xs mb-1.5 flex items-center gap-1">
              <Plus className="w-3 h-3" />
              Cluster機能オプション
            </h4>
            <div className="grid grid-cols-2 gap-1">
              {featureOptions.map(({ name, price }, index) => (
                <div
                  key={index}
                  className="flex flex-col py-1 px-2 bg-sky-50 rounded text-[9px]"
                >
                  <span className="text-gray-700 font-bold leading-tight">{name}</span>
                  <span className="text-blue-600 font-bold">{price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-2 bg-sky-50 border border-sky-300 rounded-lg p-2">
          <p className="text-[10px] text-sky-700 leading-relaxed text-center">
            オプションをご希望の場合は、購入時のメッセージにご記入ください。<br />
            または購入後にメッセージいただいて追加することも可能ですので、お気軽にご相談ください。
          </p>
        </div>
      </div>
    </SlideWrapper>
  );
}

