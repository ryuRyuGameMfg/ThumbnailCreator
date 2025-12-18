'use client';

import SlideWrapper from '../SlideWrapper';
import { Plus } from 'lucide-react';
import { PinkTitleV2 } from '@/components/PinkTitleV2';

export function PricingOptions() {
  const basicOptions = [
    { name: '実績公開NGオプション', price: '＋10,000円' },
  ];

  const featureOptions = [
    { name: '乗り物設置', price: '＋3,000円〜' },
    { name: 'コメントスクリーン', price: '＋3,000円〜' },
    { name: '天候システム', price: '＋5,000円〜' },
    { name: '時間連動', price: '＋5,000円〜' },
    { name: 'ボタンギミック', price: '＋3,000円〜' },
    { name: '座れる椅子', price: '＋2,000円〜' },
    { name: '手に持てる食べ物', price: '＋2,000円〜' },
    { name: '看板設置', price: '＋2,000円〜' },
    { name: '動画スクリーン', price: '＋3,000円〜' },
  ];

  return (
    <SlideWrapper slideNumber={5} slideName="pricing-options">
      <div className="flex flex-col h-full font-hackgen">
        <PinkTitleV2 english="OPTIONS" japanese="有料オプション" />
        
        <div className="flex-1 flex flex-col gap-2.5">
          {/* 基本オプション */}
          <div className="bg-white/10 border-2 border-white/30 rounded-xl p-3 shadow-sm backdrop-blur">
            <h4 className="text-white font-bold text-sm mb-2 flex items-center gap-1">
              <Plus className="w-4 h-4" />
              基本オプション
            </h4>
            <div className="space-y-1.5">
              {basicOptions.map(({ name, price }, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between py-2 px-3 bg-gradient-to-r from-sky-500 to-sky-600 rounded text-sm"
                >
                  <span className="text-white font-bold">{name}</span>
                  <span className="text-white font-black">{price}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Cluster機能オプション */}
          <div className="bg-white/10 border-2 border-white/30 rounded-xl p-3 shadow-sm flex-1 backdrop-blur">
            <h4 className="text-white font-bold text-sm mb-2 flex items-center gap-1">
              <Plus className="w-4 h-4" />
              Cluster機能オプション
            </h4>
            <div className="grid grid-cols-2 gap-1.5">
              {featureOptions.map(({ name, price }, index) => (
                <div
                  key={index}
                  className="flex flex-col py-2 px-2 bg-gradient-to-r from-sky-600/50 to-blue-600/50 rounded text-xs"
                >
                  <span className="text-white font-bold leading-tight mb-0.5">{name}</span>
                  <span className="text-white font-black">{price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}
