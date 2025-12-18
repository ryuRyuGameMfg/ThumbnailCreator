'use client';

/**
 * タイムライン/時間軸（SVG）
 */
export default function TimelineChart() {
  return (
    <svg viewBox="0 0 120 50" className="w-full h-full">
      {/* メインライン */}
      <line x1="10" y1="25" x2="110" y2="25" stroke="#e5e7eb" strokeWidth="3" strokeLinecap="round" />
      
      {/* 進捗バー */}
      <line x1="10" y1="25" x2="85" y2="25" stroke="url(#timelineGradient)" strokeWidth="3" strokeLinecap="round" />
      
      {/* ポイント */}
      <circle cx="10" cy="25" r="5" fill="#22c55e" />
      <circle cx="40" cy="25" r="5" fill="#3b82f6" />
      <circle cx="70" cy="25" r="5" fill="#8b5cf6" />
      <circle cx="100" cy="25" r="5" fill="#e5e7eb" stroke="#d1d5db" strokeWidth="1" />
      
      {/* ラベル */}
      <text x="10" y="38" textAnchor="middle" className="text-[6px] fill-gray-500">Day1</text>
      <text x="40" y="38" textAnchor="middle" className="text-[6px] fill-gray-500">Day2</text>
      <text x="70" y="38" textAnchor="middle" className="text-[6px] fill-gray-500">Day3</text>
      <text x="100" y="38" textAnchor="middle" className="text-[6px] fill-gray-500">Day4</text>
      
      {/* 上部ラベル */}
      <text x="10" y="14" textAnchor="middle" className="text-[5px] fill-green-600 font-bold">相談</text>
      <text x="40" y="14" textAnchor="middle" className="text-[5px] fill-blue-600 font-bold">契約</text>
      <text x="70" y="14" textAnchor="middle" className="text-[5px] fill-violet-600 font-bold">開発</text>
      <text x="100" y="14" textAnchor="middle" className="text-[5px] fill-gray-400 font-bold">納品</text>
      
      {/* グラデーション定義 */}
      <defs>
        <linearGradient id="timelineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#22c55e" />
          <stop offset="50%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
      </defs>
    </svg>
  );
}
