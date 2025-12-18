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
  const options = [
    { name: '1日延長', price: '＋3,000円' },
    { name: 'ファイルお預かり・即修復', price: '30,000円〜' },
  ];

  return (
    <SlideWrapper slideNumber={5} slideName="pricing-options">
      <div className="flex flex-col h-full font-hackgen">
        <SlideTitle english="OPTIONS" japanese="有料オプション" />
        
        <div className="flex-1 flex flex-col gap-3">
          {/* オプション */}
          <div className="bg-white border-2 border-sky-300 rounded-xl p-4 shadow-sm flex-1">
            <h4 className="text-sky-600 font-bold text-base mb-3 flex items-center gap-2">
              <Plus className="w-5 h-5" />
              追加オプション
            </h4>
            <div className="space-y-3">
              {options.map(({ name, price }, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between py-3 px-4 bg-sky-50 rounded-lg"
                >
                  <span className="text-gray-700 font-bold text-base">{name}</span>
                  <span className="text-sky-600 font-black text-lg">{price}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 説明 */}
          <div className="bg-gradient-to-r from-cyan-50 to-blue-50 border-2 border-cyan-200 rounded-xl p-3">
            <p className="text-cyan-700 font-bold text-sm mb-1">ファイルお預かり・即修復プラン</p>
            <p className="text-gray-600 text-xs leading-relaxed">
              プロジェクト一式をお預かりし、ビルドエラーや実行エラーを最短1営業日で修復して返却いたします。
            </p>
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
