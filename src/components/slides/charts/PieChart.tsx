'use client';

interface PieChartProps {
  percentage: number;
  color?: string;
  label?: string;
}

/**
 * 円グラフ（SVG）
 */
export default function PieChart({ 
  percentage, 
  color = '#3b82f6',
  label = ''
}: PieChartProps) {
  const radius = 30;
  const circumference = 2 * Math.PI * radius;
  const strokeDasharray = `${(percentage / 100) * circumference} ${circumference}`;
  
  return (
    <svg viewBox="0 0 80 80" className="w-full h-full">
      {/* 背景円 */}
      <circle
        cx="40"
        cy="40"
        r={radius}
        fill="none"
        stroke="#e5e7eb"
        strokeWidth="8"
      />
      
      {/* 進捗円 */}
      <circle
        cx="40"
        cy="40"
        r={radius}
        fill="none"
        stroke={color}
        strokeWidth="8"
        strokeDasharray={strokeDasharray}
        strokeLinecap="round"
        transform="rotate(-90 40 40)"
      />
      
      {/* 中央テキスト */}
      <text x="40" y="38" textAnchor="middle" className="text-[14px] font-black" fill={color}>
        {percentage}%
      </text>
      {label && (
        <text x="40" y="50" textAnchor="middle" className="text-[6px] fill-gray-500">
          {label}
        </text>
      )}
    </svg>
  );
}
