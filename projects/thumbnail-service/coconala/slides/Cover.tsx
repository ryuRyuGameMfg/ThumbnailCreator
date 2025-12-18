'use client';

import Image from 'next/image';
import { Star, Zap, Clock, ImageIcon } from 'lucide-react';

// ========================================
// Cover（カバー） - サービス画像制作代行
// ========================================

// メダルバッジ
function BadgeMedalsRound() {
  return (
    <div className="flex items-center gap-2">
      {/* 実績メダル */}
      <div className="w-12 h-12 bg-gradient-to-br from-amber-400 via-yellow-300 to-amber-500 rounded-full flex items-center justify-center shadow-lg border-2 border-amber-300">
        <div className="text-center">
          <div className="text-[8px] font-bold text-white drop-shadow-md" style={{ fontFamily: 'HackGen, sans-serif' }}>実績</div>
          <div className="text-[10px] font-black text-white drop-shadow-md" style={{ fontFamily: 'HackGen, sans-serif' }}>230+</div>
        </div>
      </div>
      {/* 評価メダル */}
      <div className="w-12 h-12 bg-gradient-to-br from-violet-400 via-purple-300 to-indigo-500 rounded-full flex items-center justify-center shadow-lg border-2 border-violet-300">
        <div className="text-center">
          <Star className="w-3 h-3 text-white fill-white mx-auto drop-shadow-md" />
          <div className="text-[10px] font-black text-white drop-shadow-md" style={{ fontFamily: 'HackGen, sans-serif' }}>4.9</div>
        </div>
      </div>
      {/* プラチナランクメダル */}
      <div className="w-12 h-12 bg-gradient-to-br from-cyan-300 via-sky-200 to-cyan-400 rounded-full flex items-center justify-center shadow-lg border-2 border-cyan-200">
        <div className="text-center">
          <div className="text-[7px] font-bold text-white drop-shadow-md" style={{ fontFamily: 'HackGen, sans-serif' }}>coconala</div>
          <div className="text-[8px] font-black text-white drop-shadow-md" style={{ fontFamily: 'HackGen, sans-serif' }}>PLATINUM</div>
        </div>
      </div>
    </div>
  );
}

// 特徴アイコン
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
    <div className="flex gap-3">
      {iconData.map(({ icon: Icon, label }, i) => (
        <div key={label} className="text-center flex-1 min-w-0">
          <div className={`w-14 h-14 bg-gradient-to-br ${colors[i]} rounded-lg flex items-center justify-center mb-1 mx-auto shadow-lg`}>
            <Icon className="w-7 h-7 text-white" />
          </div>
          <div className="text-sm font-bold text-white leading-tight" style={{ fontFamily: 'HackGen, sans-serif' }}>{label}</div>
        </div>
      ))}
    </div>
  );
}

// 価格情報
function PriceInfo() {
  return (
    <div>
      <div className="text-2xl font-bold text-sky-400 mb-1" style={{ fontFamily: 'HackGen, sans-serif' }}>10枚10,000円</div>
      <div className="text-base text-white/70" style={{ fontFamily: 'HackGen, sans-serif' }}>爆速3日納品・修正2回無料</div>
    </div>
  );
}

// メインタイトル
function MainTitle() {
  return (
    <>
      <h1 className="text-[40px] font-bold text-white leading-tight mt-3 mb-2" style={{ fontFamily: 'HackGen, sans-serif' }}>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-400">プロが作る</span><br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-400">サービス画像</span>
      </h1>
      <p className="text-base text-gray-400 mb-3" style={{ fontFamily: 'HackGen, sans-serif' }}>
        ココナラ用10枚セット制作
      </p>
    </>
  );
}

// 背景
function BgBasic() {
  return (
    <>
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-blue-900" />
      <div className="absolute top-8 left-8 w-20 h-20 bg-sky-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-16 right-8 w-28 h-28 bg-blue-500/10 rounded-full blur-3xl" />
    </>
  );
}

// キャラクター
function Character() {
  return (
    <div className="absolute bottom-0 right-0 w-[392px] h-[560px] flex items-end justify-center z-10">
      <Image
        src="/images/character-1-transparent.png"
        alt="Character"
        width={392}
        height={784}
        style={{
          objectFit: 'contain',
          objectPosition: 'bottom',
          height: '100%',
          width: 'auto',
        }}
        priority
      />
    </div>
  );
}

export function Cover() {
  return (
    <div className="relative w-full h-full overflow-hidden font-hackgen">
      <BgBasic />
      <div className="absolute inset-0 p-8 pl-10 flex flex-col justify-center z-20">
        <div className="max-w-[300px]">
          <BadgeMedalsRound />
          <MainTitle />
          <IconsSquare />
          <div className="mt-4"><PriceInfo /></div>
        </div>
      </div>
      <Character />
    </div>
  );
}
