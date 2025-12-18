'use client';

import Image from 'next/image';
import { Crown, Star, HelpCircle, Users, MapPin, Radio } from 'lucide-react';

// メダル丸3つバッジ（統一テキストカラー - 白）
function BadgeMedalsRound() {
  return (
    <div className="flex items-center gap-2">
      {/* 実績メダル - ゴールド */}
      <div className="w-12 h-12 bg-gradient-to-br from-amber-400 via-yellow-300 to-amber-500 rounded-full flex items-center justify-center shadow-lg border-2 border-amber-300">
        <div className="text-center">
          <div className="text-[8px] font-bold text-white drop-shadow-md" style={{ fontFamily: 'HackGen, sans-serif' }}>実績</div>
          <div className="text-[10px] font-black text-white drop-shadow-md" style={{ fontFamily: 'HackGen, sans-serif' }}>230+</div>
        </div>
      </div>
      {/* 評価メダル - 青紫 */}
      <div className="w-12 h-12 bg-gradient-to-br from-violet-400 via-purple-300 to-indigo-500 rounded-full flex items-center justify-center shadow-lg border-2 border-violet-300">
        <div className="text-center">
          <Star className="w-3 h-3 text-white fill-white mx-auto drop-shadow-md" />
          <div className="text-[10px] font-black text-white drop-shadow-md" style={{ fontFamily: 'HackGen, sans-serif' }}>4.5</div>
        </div>
      </div>
      {/* プラチナランクメダル - 水色 */}
      <div className="w-12 h-12 bg-gradient-to-br from-cyan-300 via-sky-200 to-cyan-400 rounded-full flex items-center justify-center shadow-lg border-2 border-cyan-200">
        <div className="text-center">
          <div className="text-[7px] font-bold text-white drop-shadow-md" style={{ fontFamily: 'HackGen, sans-serif' }}>coconala</div>
          <div className="text-[8px] font-black text-white drop-shadow-md" style={{ fontFamily: 'HackGen, sans-serif' }}>PLATINUM</div>
        </div>
      </div>
    </div>
  );
}

// アイコン: 3倍 四角型
const iconData = [
  { icon: HelpCircle, label: 'FAQ' },
  { icon: Users, label: '接客' },
  { icon: MapPin, label: '案内' },
  { icon: Radio, label: '配信' },
];

const colors = [
  'from-sky-500 to-blue-600',
  'from-teal-500 to-cyan-600',
  'from-indigo-500 to-purple-600',
  'from-rose-500 to-pink-600',
];

function IconsSquare3x() {
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
      <div className="text-2xl font-bold text-sky-400 mb-1" style={{ fontFamily: 'HackGen, sans-serif' }}>月額0円</div>
      <div className="text-base text-white/70" style={{ fontFamily: 'HackGen, sans-serif' }}>最短4日・75,000円〜</div>
    </div>
  );
}

// メインタイトル
function MainTitle() {
  return (
    <>
      <h1 className="text-[44px] font-bold text-white leading-tight mt-3 mb-2" style={{ fontFamily: 'HackGen, sans-serif' }}>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-400">プロが作る</span><br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-400" style={{ fontFamily: 'Melete, sans-serif' }}>AI</span>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-400">自動化</span>
      </h1>
      <p className="text-base text-gray-400 mb-3" style={{ fontFamily: 'HackGen, sans-serif' }}>
        収益最大化・業務効率化を実現
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

// キャラクター（1.4倍サイズ）
function Character() {
  return (
    <div className="absolute bottom-0 right-0 w-[392px] h-[560px] flex items-end justify-center z-10">
      <Image
        src="/images/character-1-transparent.png"
        alt="AI Character"
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
          <IconsSquare3x />
          <div className="mt-4"><PriceInfo /></div>
        </div>
      </div>
      <Character />
    </div>
  );
}
