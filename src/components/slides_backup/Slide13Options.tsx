'use client';

import { forwardRef } from 'react';
import SlideWrapper from './SlideWrapper';
import { Cpu, UserPlus, Smile, Key, EyeOff, MessageCircle } from 'lucide-react';

const Slide13Options = forwardRef<HTMLDivElement>((_, ref) => {
  const functionOptions = [
    {
      icon: Cpu,
      name: '複数AI切り替え',
      description: 'GPT-4やClaudeなど複数のAIを使い分け可能',
    },
    {
      icon: UserPlus,
      name: 'キャラクター追加（1体）',
      description: '2体目以降のキャラクターを追加',
    },
    {
      icon: Smile,
      name: '感情表現カスタマイズ',
      description: '表情パターンの追加・調整',
    },
  ];

  const serviceOptions = [
    {
      icon: Key,
      name: 'API発行代行',
      price: '+1万円',
      description: '必要なAPIキーの取得を代行',
    },
    {
      icon: EyeOff,
      name: 'ポートフォリオ掲載禁止',
      price: '+1万円',
      description: '制作実績として公開しません',
    },
    {
      icon: MessageCircle,
      name: 'サポート1ヶ月延長',
      price: '+2万円',
      description: 'チャットサポート期間を延長',
    },
  ];

  return (
    <SlideWrapper ref={ref} slideNumber={13} slideName="options">
      <div className="flex flex-col h-full">
        {/* ヘッダー */}
        <div className="text-center mb-4">
          <h1 className="text-[26px] font-black text-gray-900 tracking-tight">
            オプション一覧
          </h1>
          <p className="text-xs text-gray-500 mt-0.5">プランに合わせて自由に選択</p>
        </div>

        {/* 機能オプション */}
        <div className="mb-3">
          <div className="flex items-center gap-2 mb-2">
            <div className="bg-blue-600 text-white text-[10px] font-bold px-2.5 py-1 rounded">
              機能オプション
            </div>
            <span className="text-[10px] text-gray-500">スタンダード: 1つ / プロ: 3つ選択</span>
          </div>
          <div className="flex flex-col gap-2">
            {functionOptions.map(({ icon: Icon, name, description }, index) => (
              <div
                key={index}
                className="card-white rounded-xl px-4 py-3 flex items-center gap-3"
              >
                <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-bold text-gray-800">{name}</div>
                  <div className="text-[10px] text-gray-500">{description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* サービスオプション */}
        <div className="flex-1 flex flex-col">
          <div className="flex items-center gap-2 mb-2">
            <div className="bg-gray-700 text-white text-[10px] font-bold px-2.5 py-1 rounded">
              サービスオプション
            </div>
            <span className="text-[10px] text-gray-500">別途費用で追加可能</span>
          </div>
          <div className="flex flex-col gap-2 flex-1">
            {serviceOptions.map(({ icon: Icon, name, price, description }, index) => (
              <div
                key={index}
                className="card-gray rounded-xl px-4 py-3 flex items-center gap-3 flex-1"
              >
                <div className="w-9 h-9 rounded-lg bg-gray-500 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-gray-800">{name}</span>
                    <span className="text-sm font-bold text-blue-600">{price}</span>
                  </div>
                  <div className="text-[10px] text-gray-500">{description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
});

Slide13Options.displayName = 'Slide13Options';

export default Slide13Options;
