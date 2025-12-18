'use client';

import { forwardRef } from 'react';
import SlideWrapper from './SlideWrapper';
import { Radio, Mic, Film, MessageCircle, Cpu, Database, UserPlus, Key, EyeOff, Settings } from 'lucide-react';

const Slide05Pricing = forwardRef<HTMLDivElement>((_, ref) => {
  const options = [
    { icon: Cpu, name: '複数LLM対応', price: '+¥50,000' },
    { icon: Database, name: 'DB構築（RAG）', price: '+¥100,000' },
    { icon: UserPlus, name: '追加キャラクター', price: '+¥50,000' },
    { icon: Key, name: 'API発行代行', price: '+¥10,000' },
    { icon: EyeOff, name: 'ポートフォリオ掲載禁止', price: '+¥10,000' },
  ];

  return (
    <SlideWrapper ref={ref} slideNumber={5} slideName="pricing">
      <div className="flex flex-col h-full">
        {/* ヘッダー */}
        <div className="text-center mb-3">
          <h1 className="text-[26px] font-black text-gray-900 tracking-tight">
            料金表
          </h1>
          <p className="text-xs text-gray-500 mt-0.5">シンプルな料金体系</p>
        </div>

        {/* 基本料金 */}
        <div className="card-white rounded-xl px-4 py-3 mb-2">
          <div className="flex items-center justify-between mb-2">
            <span className="text-base font-bold text-gray-900">基本料金</span>
            <span className="text-xl font-black text-blue-600">¥100,000</span>
          </div>
          <div className="flex gap-1.5">
            {[
              { icon: Radio, label: 'Live配信' },
              { icon: Mic, label: '音声対話' },
              { icon: Film, label: '動画生成' },
              { icon: MessageCircle, label: 'チャット' },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-1 bg-blue-50 rounded px-2 py-1">
                <Icon className="w-3 h-3 text-blue-600" />
                <span className="text-[10px] text-blue-700 font-medium">{label}</span>
              </div>
            ))}
          </div>
          <p className="text-[10px] text-gray-500 mt-1">※ 上記から1つ選択</p>
        </div>

        {/* オプション */}
        <div className="flex-1 flex flex-col">
          <p className="text-xs font-bold text-gray-500 mb-1.5 pl-1">オプション</p>
          <div className="flex flex-col gap-1.5 flex-1">
            {options.map(({ icon: Icon, name, price }, index) => (
              <div
                key={index}
                className="flex items-center justify-between card-gray rounded-lg px-3 py-2"
              >
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded bg-gray-200 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-3 h-3 text-gray-600" />
                  </div>
                  <span className="text-xs font-medium text-gray-700">{name}</span>
                </div>
                <span className="text-sm font-bold text-gray-700">{price}</span>
              </div>
            ))}
          </div>
        </div>

        {/* カスタム開発 */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl px-4 py-3 flex items-center justify-between mt-2">
          <div className="flex items-center gap-2">
            <Settings className="w-5 h-5 text-white" />
            <span className="text-sm font-bold text-white">カスタム開発</span>
          </div>
          <span className="text-lg font-black text-white">¥300,000〜</span>
        </div>
      </div>
    </SlideWrapper>
  );
});

Slide05Pricing.displayName = 'Slide05Pricing';

export default Slide05Pricing;
