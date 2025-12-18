'use client';

/**
 * 処理フロー図（SVG）
 */
export default function FlowDiagram() {
  return (
    <svg viewBox="0 0 140 60" className="w-full h-full">
      {/* Step 1 - Input */}
      <rect x="5" y="20" width="35" height="25" rx="4" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="1" />
      <text x="22" y="35" textAnchor="middle" className="text-[7px] fill-gray-600 font-medium">Input</text>
      
      {/* Arrow 1 */}
      <path d="M42 32 L50 32" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowhead)" />
      
      {/* Step 2 - AI */}
      <rect x="52" y="15" width="35" height="35" rx="6" fill="#3b82f6" />
      <text x="70" y="30" textAnchor="middle" className="text-[8px] fill-white font-black">AI</text>
      <text x="70" y="40" textAnchor="middle" className="text-[5px] fill-blue-200">Processing</text>
      
      {/* Arrow 2 */}
      <path d="M89 32 L97 32" stroke="#8b5cf6" strokeWidth="2" />
      
      {/* Step 3 - Output */}
      <rect x="100" y="20" width="35" height="25" rx="4" fill="#8b5cf6" />
      <text x="117" y="35" textAnchor="middle" className="text-[7px] fill-white font-medium">Output</text>
      
      {/* Decorative dots */}
      <circle cx="10" cy="10" r="2" fill="#3b82f6" opacity="0.3" />
      <circle cx="130" cy="10" r="2" fill="#8b5cf6" opacity="0.3" />
      <circle cx="70" cy="55" r="2" fill="#22c55e" opacity="0.3" />
      
      {/* Arrow marker definition */}
      <defs>
        <marker id="arrowhead" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto">
          <polygon points="0 0, 6 2, 0 4" fill="#3b82f6" />
        </marker>
      </defs>
    </svg>
  );
}
