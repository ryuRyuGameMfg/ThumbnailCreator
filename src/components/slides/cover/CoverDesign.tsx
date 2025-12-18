'use client';

import Image from 'next/image';
import { Crown, Star, HelpCircle, Users, MapPin, Radio, Award } from 'lucide-react';

// ========================================
// キャラクター 120%（固定）
// ========================================
function Character120() {
  return (
    <div className="absolute bottom-0 right-0 w-[336px] h-[480px] flex items-end justify-center z-10">
      <Image
        src="/images/character-1-transparent.png"
        alt="AI Character"
        width={336}
        height={672}
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

// キャラクター左配置
function Character120Left() {
  return (
    <div className="absolute bottom-0 left-0 w-[336px] h-[480px] flex items-end justify-center z-10">
      <Image
        src="/images/character-1-transparent.png"
        alt="AI Character"
        width={336}
        height={672}
        style={{ 
          objectFit: 'contain',
          objectPosition: 'bottom',
          height: '100%',
          width: 'auto',
          transform: 'scaleX(-1)', // 左右反転
        }}
        priority
      />
    </div>
  );
}

// ========================================
// バッジ バリエーション
// ========================================

// バッジA: メダル丸3つ（統一テキストカラー - 白）
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

// ========================================
// リッチバッジ パターン1: シンプルなアイコン背景
// ========================================
function BadgeRichSet1() {
  return (
    <div className="flex items-center gap-3">
      {/* 実績 - 王冠 */}
      <div className="relative w-14 h-14">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-400 via-yellow-300 to-amber-500 rounded-full shadow-xl border-2 border-amber-300"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <Crown className="w-7 h-7 text-white drop-shadow-lg" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center pb-1">
          <span className="text-[9px] font-black text-white drop-shadow-md" style={{ fontFamily: 'HackGen, sans-serif' }}>230+</span>
        </div>
      </div>
      {/* 評価 - 星 */}
      <div className="relative w-14 h-14">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-400 via-purple-300 to-indigo-500 rounded-full shadow-xl border-2 border-violet-300"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <Star className="w-7 h-7 text-white fill-white drop-shadow-lg" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center pb-1">
          <span className="text-[10px] font-black text-white drop-shadow-md" style={{ fontFamily: 'HackGen, sans-serif' }}>4.5</span>
        </div>
      </div>
      {/* プラチナ */}
      <div className="relative w-14 h-14">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-300 via-sky-200 to-cyan-400 rounded-full shadow-xl border-2 border-cyan-200"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <Award className="w-7 h-7 text-white drop-shadow-lg" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center pb-0.5">
          <span className="text-[6px] font-bold text-white drop-shadow-md" style={{ fontFamily: 'HackGen, sans-serif' }}>PLATINUM</span>
        </div>
      </div>
    </div>
  );
}

// ========================================
// リッチバッジ パターン2: メタリック風
// ========================================
function BadgeRichSet2() {
  return (
    <div className="flex items-center gap-3">
      {/* 実績 - 王冠 */}
      <div className="relative w-14 h-14">
        <svg width="56" height="56" viewBox="0 0 56 56" className="absolute inset-0">
          <defs>
            <linearGradient id="crownGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fde047" />
              <stop offset="50%" stopColor="#fbbf24" />
              <stop offset="100%" stopColor="#f59e0b" />
            </linearGradient>
            <filter id="crownShadow">
              <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#000" floodOpacity="0.3"/>
            </filter>
          </defs>
          <circle cx="28" cy="28" r="26" fill="url(#crownGrad2)" filter="url(#crownShadow)" />
          <circle cx="28" cy="28" r="24" fill="none" stroke="#fff" strokeWidth="1" opacity="0.3" />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center pt-1">
          <Crown className="w-6 h-6 text-white drop-shadow-lg" />
        </div>
        <div className="absolute bottom-1 left-0 right-0 flex items-center justify-center">
          <span className="text-[9px] font-black text-white drop-shadow-md" style={{ fontFamily: 'HackGen, sans-serif' }}>230+</span>
        </div>
      </div>
      {/* 評価 - 星 */}
      <div className="relative w-14 h-14">
        <svg width="56" height="56" viewBox="0 0 56 56" className="absolute inset-0">
          <defs>
            <linearGradient id="starGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#c4b5fd" />
              <stop offset="50%" stopColor="#a78bfa" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
            <filter id="starShadow">
              <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#000" floodOpacity="0.3"/>
            </filter>
          </defs>
          <circle cx="28" cy="28" r="26" fill="url(#starGrad2)" filter="url(#starShadow)" />
          <circle cx="28" cy="28" r="24" fill="none" stroke="#fff" strokeWidth="1" opacity="0.3" />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center pt-1">
          <Star className="w-6 h-6 text-white fill-white drop-shadow-lg" />
        </div>
        <div className="absolute bottom-1 left-0 right-0 flex items-center justify-center">
          <span className="text-[10px] font-black text-white drop-shadow-md" style={{ fontFamily: 'HackGen, sans-serif' }}>4.5</span>
        </div>
      </div>
      {/* プラチナ */}
      <div className="relative w-14 h-14">
        <svg width="56" height="56" viewBox="0 0 56 56" className="absolute inset-0">
          <defs>
            <linearGradient id="platinumGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#a5f3fc" />
              <stop offset="50%" stopColor="#67e8f9" />
              <stop offset="100%" stopColor="#22d3ee" />
            </linearGradient>
            <filter id="platinumShadow">
              <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#000" floodOpacity="0.3"/>
            </filter>
          </defs>
          <circle cx="28" cy="28" r="26" fill="url(#platinumGrad2)" filter="url(#platinumShadow)" />
          <circle cx="28" cy="28" r="24" fill="none" stroke="#fff" strokeWidth="1" opacity="0.3" />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center pt-1">
          <Award className="w-6 h-6 text-white drop-shadow-lg" />
        </div>
        <div className="absolute bottom-1 left-0 right-0 flex items-center justify-center">
          <span className="text-[6px] font-bold text-white drop-shadow-md" style={{ fontFamily: 'HackGen, sans-serif' }}>PLATINUM</span>
        </div>
      </div>
    </div>
  );
}

// ========================================
// リッチバッジ パターン3: 3D風エンボス
// ========================================
function BadgeRichSet3() {
  return (
    <div className="flex items-center gap-3">
      {/* 実績 - 王冠 */}
      <div className="relative w-14 h-14">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500 via-amber-400 to-yellow-300 rounded-full shadow-2xl" 
             style={{ 
               boxShadow: 'inset 0 2px 4px rgba(255,255,255,0.3), 0 4px 8px rgba(0,0,0,0.3)',
               border: '2px solid rgba(255,255,255,0.2)'
             }}>
        </div>
        <div className="absolute inset-0 flex items-center justify-center pt-1">
          <Crown className="w-6 h-6 text-white drop-shadow-lg" />
        </div>
        <div className="absolute bottom-1 left-0 right-0 flex items-center justify-center">
          <span className="text-[9px] font-black text-white drop-shadow-md" style={{ fontFamily: 'HackGen, sans-serif' }}>230+</span>
        </div>
      </div>
      {/* 評価 - 星 */}
      <div className="relative w-14 h-14">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-500 via-purple-400 to-indigo-400 rounded-full shadow-2xl"
             style={{ 
               boxShadow: 'inset 0 2px 4px rgba(255,255,255,0.3), 0 4px 8px rgba(0,0,0,0.3)',
               border: '2px solid rgba(255,255,255,0.2)'
             }}>
        </div>
        <div className="absolute inset-0 flex items-center justify-center pt-1">
          <Star className="w-6 h-6 text-white fill-white drop-shadow-lg" />
        </div>
        <div className="absolute bottom-1 left-0 right-0 flex items-center justify-center">
          <span className="text-[10px] font-black text-white drop-shadow-md" style={{ fontFamily: 'HackGen, sans-serif' }}>4.5</span>
        </div>
      </div>
      {/* プラチナ */}
      <div className="relative w-14 h-14">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-sky-300 to-cyan-300 rounded-full shadow-2xl"
             style={{ 
               boxShadow: 'inset 0 2px 4px rgba(255,255,255,0.3), 0 4px 8px rgba(0,0,0,0.3)',
               border: '2px solid rgba(255,255,255,0.2)'
             }}>
        </div>
        <div className="absolute inset-0 flex items-center justify-center pt-1">
          <Award className="w-6 h-6 text-white drop-shadow-lg" />
        </div>
        <div className="absolute bottom-1 left-0 right-0 flex items-center justify-center">
          <span className="text-[6px] font-bold text-white drop-shadow-md" style={{ fontFamily: 'HackGen, sans-serif' }}>PLATINUM</span>
        </div>
      </div>
    </div>
  );
}

// ========================================
// リッチバッジ パターン4: グロー効果強化
// ========================================
function BadgeRichSet4() {
  return (
    <div className="flex items-center gap-3">
      {/* 実績 - 王冠 */}
      <div className="relative w-14 h-14">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-400 via-yellow-300 to-amber-500 rounded-full shadow-xl border-2 border-amber-200"
             style={{ 
               boxShadow: '0 0 20px rgba(251, 191, 36, 0.6), inset 0 1px 2px rgba(255,255,255,0.4)'
             }}>
        </div>
        <div className="absolute inset-0 flex items-center justify-center pt-1">
          <Crown className="w-6 h-6 text-white drop-shadow-lg" />
        </div>
        <div className="absolute bottom-1 left-0 right-0 flex items-center justify-center">
          <span className="text-[9px] font-black text-white drop-shadow-md" style={{ fontFamily: 'HackGen, sans-serif' }}>230+</span>
        </div>
      </div>
      {/* 評価 - 星 */}
      <div className="relative w-14 h-14">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-400 via-purple-300 to-indigo-500 rounded-full shadow-xl border-2 border-violet-200"
             style={{ 
               boxShadow: '0 0 20px rgba(167, 139, 250, 0.6), inset 0 1px 2px rgba(255,255,255,0.4)'
             }}>
        </div>
        <div className="absolute inset-0 flex items-center justify-center pt-1">
          <Star className="w-6 h-6 text-white fill-white drop-shadow-lg" />
        </div>
        <div className="absolute bottom-1 left-0 right-0 flex items-center justify-center">
          <span className="text-[10px] font-black text-white drop-shadow-md" style={{ fontFamily: 'HackGen, sans-serif' }}>4.5</span>
        </div>
      </div>
      {/* プラチナ */}
      <div className="relative w-14 h-14">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-300 via-sky-200 to-cyan-400 rounded-full shadow-xl border-2 border-cyan-100"
             style={{ 
               boxShadow: '0 0 20px rgba(103, 232, 249, 0.6), inset 0 1px 2px rgba(255,255,255,0.4)'
             }}>
        </div>
        <div className="absolute inset-0 flex items-center justify-center pt-1">
          <Award className="w-6 h-6 text-white drop-shadow-lg" />
        </div>
        <div className="absolute bottom-1 left-0 right-0 flex items-center justify-center">
          <span className="text-[6px] font-bold text-white drop-shadow-md" style={{ fontFamily: 'HackGen, sans-serif' }}>PLATINUM</span>
        </div>
      </div>
    </div>
  );
}

// ========================================
// アイコン バリエーション（アクセントカラー）
// ========================================

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

// アイコン: 3倍 四角型
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

// ========================================
// 価格情報
// ========================================
function PriceInfo() {
  return (
    <div>
      <div className="text-2xl font-bold text-sky-400 mb-1" style={{ fontFamily: 'HackGen, sans-serif' }}>月額0円</div>
      <div className="text-base text-white/70" style={{ fontFamily: 'HackGen, sans-serif' }}>最短4日・75,000円〜</div>
    </div>
  );
}

// ========================================
// メインタイトル
// ========================================
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

// ========================================
// 背景（ベーシック）
// ========================================
function BgBasic() {
  return (
    <>
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-blue-900" />
      <div className="absolute top-8 left-8 w-20 h-20 bg-sky-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-16 right-8 w-28 h-28 bg-blue-500/10 rounded-full blur-3xl" />
    </>
  );
}

// ========================================
// 通常2: メダル丸3つ + 3倍四角アイコン
// ========================================
export function CoverDesign2() {
  return (
    <div className="slide-container-cover relative overflow-hidden">
      <BgBasic />
      <div className="absolute inset-0 p-5 pl-6 flex flex-col justify-center z-20">
        <div className="max-w-[280px]">
          <BadgeMedalsRound />
          <MainTitle />
          <IconsSquare3x />
          <div className="mt-4"><PriceInfo /></div>
        </div>
      </div>
      <Character120 />
    </div>
  );
}

// ========================================
// おすすめ1-1: リッチバッジパターン1 + キャラクター左配置
// ========================================
export function CoverDesignRecommended1_1() {
  return (
    <div className="slide-container-cover relative overflow-hidden">
      <BgBasic />
      <Character120Left />
      <div className="absolute inset-0 p-5 pr-6 flex flex-col justify-center z-20">
        <div className="max-w-[280px] ml-auto">
          <BadgeRichSet1 />
          <MainTitle />
          <IconsSquare3x />
          <div className="mt-4"><PriceInfo /></div>
        </div>
      </div>
    </div>
  );
}

// ========================================
// おすすめ1-2: リッチバッジパターン2 + キャラクター左配置
// ========================================
export function CoverDesignRecommended1_2() {
  return (
    <div className="slide-container-cover relative overflow-hidden">
      <BgBasic />
      <Character120Left />
      <div className="absolute inset-0 p-5 pr-6 flex flex-col justify-center z-20">
        <div className="max-w-[280px] ml-auto">
          <BadgeRichSet2 />
          <MainTitle />
          <IconsSquare3x />
          <div className="mt-4"><PriceInfo /></div>
        </div>
      </div>
    </div>
  );
}

// ========================================
// おすすめ1-3: リッチバッジパターン3 + キャラクター左配置
// ========================================
export function CoverDesignRecommended1_3() {
  return (
    <div className="slide-container-cover relative overflow-hidden">
      <BgBasic />
      <Character120Left />
      <div className="absolute inset-0 p-5 pr-6 flex flex-col justify-center z-20">
        <div className="max-w-[280px] ml-auto">
          <BadgeRichSet3 />
          <MainTitle />
          <IconsSquare3x />
          <div className="mt-4"><PriceInfo /></div>
        </div>
      </div>
    </div>
  );
}

// ========================================
// おすすめ1-4: リッチバッジパターン4 + キャラクター左配置
// ========================================
export function CoverDesignRecommended1_4() {
  return (
    <div className="slide-container-cover relative overflow-hidden">
      <BgBasic />
      <Character120Left />
      <div className="absolute inset-0 p-5 pr-6 flex flex-col justify-center z-20">
        <div className="max-w-[280px] ml-auto">
          <BadgeRichSet4 />
          <MainTitle />
          <IconsSquare3x />
          <div className="mt-4"><PriceInfo /></div>
        </div>
      </div>
    </div>
  );
}
