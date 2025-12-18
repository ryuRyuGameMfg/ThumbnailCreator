'use client';

interface CharacterIllustrationProps {
  type?: 'vtuber' | 'robot' | 'avatar';
  color?: string;
}

/**
 * シンプルなキャラクターイラスト（SVG）
 */
export default function CharacterIllustration({ 
  type = 'vtuber',
  color = '#8b5cf6'
}: CharacterIllustrationProps) {
  if (type === 'robot') {
    return (
      <svg viewBox="0 0 80 80" className="w-full h-full">
        {/* アンテナ */}
        <line x1="40" y1="8" x2="40" y2="18" stroke={color} strokeWidth="2" />
        <circle cx="40" cy="6" r="3" fill={color} />
        
        {/* 頭 */}
        <rect x="22" y="18" width="36" height="30" rx="6" fill={color} />
        
        {/* 目 */}
        <circle cx="32" cy="32" r="5" fill="white" />
        <circle cx="48" cy="32" r="5" fill="white" />
        <circle cx="32" cy="32" r="2" fill="#1f2937" />
        <circle cx="48" cy="32" r="2" fill="#1f2937" />
        
        {/* 口 */}
        <rect x="32" y="40" width="16" height="3" rx="1" fill="white" />
        
        {/* 体 */}
        <rect x="28" y="52" width="24" height="20" rx="4" fill={color} opacity="0.8" />
        
        {/* ボタン */}
        <circle cx="40" cy="60" r="3" fill="white" />
      </svg>
    );
  }

  if (type === 'avatar') {
    return (
      <svg viewBox="0 0 80 80" className="w-full h-full">
        {/* 髪の毛 */}
        <ellipse cx="40" cy="28" rx="22" ry="18" fill={color} />
        
        {/* 顔 */}
        <ellipse cx="40" cy="35" rx="18" ry="20" fill="#fcd9c8" />
        
        {/* 目 */}
        <ellipse cx="33" cy="35" rx="3" ry="4" fill="#1f2937" />
        <ellipse cx="47" cy="35" rx="3" ry="4" fill="#1f2937" />
        
        {/* ハイライト */}
        <circle cx="32" cy="33" r="1" fill="white" />
        <circle cx="46" cy="33" r="1" fill="white" />
        
        {/* 口 */}
        <path d="M36 45 Q40 50 44 45" stroke="#e11d48" strokeWidth="2" fill="none" strokeLinecap="round" />
        
        {/* 体 */}
        <path d="M20 75 Q20 55 40 55 Q60 55 60 75" fill={color} opacity="0.8" />
      </svg>
    );
  }

  // VTuber (default)
  return (
    <svg viewBox="0 0 80 80" className="w-full h-full">
      {/* 髪（長め） */}
      <path d="M15 35 Q15 10 40 10 Q65 10 65 35 L65 55 Q65 65 55 70 L25 70 Q15 65 15 55 Z" fill={color} />
      
      {/* 顔 */}
      <ellipse cx="40" cy="40" rx="18" ry="22" fill="#fcd9c8" />
      
      {/* 前髪 */}
      <path d="M22 30 Q30 15 40 20 Q50 15 58 30 L55 35 Q45 25 40 28 Q35 25 25 35 Z" fill={color} />
      
      {/* 目 */}
      <ellipse cx="32" cy="38" rx="4" ry="5" fill="#1f2937" />
      <ellipse cx="48" cy="38" rx="4" ry="5" fill="#1f2937" />
      
      {/* ハイライト */}
      <circle cx="30" cy="36" r="1.5" fill="white" />
      <circle cx="46" cy="36" r="1.5" fill="white" />
      
      {/* 口 */}
      <path d="M35 50 Q40 55 45 50" stroke="#e11d48" strokeWidth="2" fill="none" strokeLinecap="round" />
      
      {/* 頬 */}
      <ellipse cx="25" cy="45" rx="4" ry="2" fill="#fca5a5" opacity="0.5" />
      <ellipse cx="55" cy="45" rx="4" ry="2" fill="#fca5a5" opacity="0.5" />
    </svg>
  );
}
