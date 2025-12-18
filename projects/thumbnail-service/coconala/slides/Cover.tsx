'use client';

import { Star, Zap, Clock, ImageIcon } from 'lucide-react';
import SlideWrapper from '../SlideWrapper';

// ========================================
// Cover（カバー） - サービス画像制作代行
// キャラクターなし・セーフエリア考慮版
// ========================================

// メダルバッジ（大きめ）
function BadgeMedalsRound() {
  return (
    <div className="flex items-center justify-center gap-3 mb-4">
      {/* 実績メダル */}
      <div className="w-14 h-14 bg-gradient-to-br from-amber-400 via-yellow-300 to-amber-500 rounded-full flex items-center justify-center shadow-lg border-2 border-amber-300">
        <div className="text-center">
          <div className="text-[9px] font-bold text-white drop-shadow-md" style={{ fontFamily: 'HackGen, sans-serif' }}>実績</div>
          <div className="text-xs font-black text-white drop-shadow-md" style={{ fontFamily: 'HackGen, sans-serif' }}>230+</div>
        </div>
      </div>
      {/* 評価メダル */}
      <div className="w-14 h-14 bg-gradient-to-br from-violet-400 via-purple-300 to-indigo-500 rounded-full flex items-center justify-center shadow-lg border-2 border-violet-300">
        <div className="text-center">
          <Star className="w-3.5 h-3.5 text-white fill-white mx-auto drop-shadow-md" />
          <div className="text-xs font-black text-white drop-shadow-md" style={{ fontFamily: 'HackGen, sans-serif' }}>4.9</div>
        </div>
      </div>
      {/* プラチナランクメダル */}
      <div className="w-14 h-14 bg-gradient-to-br from-cyan-300 via-sky-200 to-cyan-400 rounded-full flex items-center justify-center shadow-lg border-2 border-cyan-200">
        <div className="text-center">
          <div className="text-[8px] font-bold text-white drop-shadow-md" style={{ fontFamily: 'HackGen, sans-serif' }}>coconala</div>
          <div className="text-[9px] font-black text-white drop-shadow-md" style={{ fontFamily: 'HackGen, sans-serif' }}>PLATINUM</div>
        </div>
      </div>
    </div>
  );
}

// 特徴アイコン（大きめ）
const iconData = [
  { icon: Zap, label: '爆速' },
  { icon: Clock, label: '3日' },
  { icon: ImageIcon, label: '10枚' },
];

const colors = [
  'from-sky-500 to-blue-600',
  'from-blue-500 to-indigo-600',
  'from-indigo-500 to-violet-600',
];

function IconsSquare() {
  return (
    <div className="flex gap-4 justify-center">
      {iconData.map(({ icon: Icon, label }, i) => (
        <div key={label} className="text-center">
          <div className={`w-16 h-16 bg-gradient-to-br ${colors[i]} rounded-xl flex items-center justify-center mb-2 mx-auto shadow-lg`}>
            <Icon className="w-8 h-8 text-white" />
          </div>
          <div className="text-base font-bold text-white leading-tight" style={{ fontFamily: 'HackGen, sans-serif' }}>{label}</div>
        </div>
      ))}
    </div>
  );
}

// 価格情報（大きめ）
function PriceInfo() {
  return (
    <div className="text-center mt-4">
      <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-400 mb-1" style={{ fontFamily: 'HackGen, sans-serif' }}>
        10枚 10,000円
      </div>
      <div className="text-lg text-white/80" style={{ fontFamily: 'HackGen, sans-serif' }}>爆速3日納品・修正2回無料</div>
    </div>
  );
}

// メインタイトル（大きめ・中央配置）
function MainTitle() {
  return (
    <div className="text-center mb-5">
      <p className="text-lg text-sky-300 mb-2" style={{ fontFamily: 'HackGen, sans-serif' }}>
        AIを使いこなすプロが作る
      </p>
      <h1 className="text-[44px] font-black text-white leading-tight mb-2" style={{ fontFamily: 'HackGen, sans-serif' }}>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-400">格安爆速</span>
      </h1>
      <h2 className="text-[38px] font-black leading-tight" style={{ fontFamily: 'HackGen, sans-serif' }}>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-400">サービス画像制作</span>
      </h2>
      <p className="text-base text-gray-400 mt-3" style={{ fontFamily: 'HackGen, sans-serif' }}>
        ココナラ用10枚セット
      </p>
    </div>
  );
}

export function Cover() {
  return (
    <SlideWrapper slideNumber={1} slideName="cover">
      <div className="flex flex-col h-full items-center justify-center">
        <BadgeMedalsRound />
        <MainTitle />
        <IconsSquare />
        <PriceInfo />
      </div>
    </SlideWrapper>
  );
}
