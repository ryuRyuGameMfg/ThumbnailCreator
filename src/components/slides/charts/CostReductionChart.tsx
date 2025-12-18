'use client';

/**
 * コスト削減を示す棒グラフ（SVG）
 */
export default function CostReductionChart() {
  return (
    <svg viewBox="0 0 120 80" className="w-full h-full">
      {/* 背景 */}
      <rect width="120" height="80" fill="transparent" />
      
      {/* Before bar */}
      <rect x="20" y="15" width="30" height="50" rx="4" fill="#ef4444" opacity="0.8" />
      <text x="35" y="72" textAnchor="middle" className="text-[8px] fill-gray-600 font-bold">Before</text>
      <text x="35" y="12" textAnchor="middle" className="text-[7px] fill-red-500 font-bold">100%</text>
      
      {/* After bar */}
      <rect x="70" y="45" width="30" height="20" rx="4" fill="#22c55e" opacity="0.9" />
      <text x="85" y="72" textAnchor="middle" className="text-[8px] fill-gray-600 font-bold">After</text>
      <text x="85" y="42" textAnchor="middle" className="text-[7px] fill-green-600 font-bold">20%</text>
      
      {/* 矢印 */}
      <path d="M52 40 L60 40 L60 35 L68 42 L60 49 L60 44 L52 44 Z" fill="#3b82f6" />
      
      {/* ラベル */}
      <text x="60" y="58" textAnchor="middle" className="text-[6px] fill-blue-600 font-bold">80%削減</text>
    </svg>
  );
}
