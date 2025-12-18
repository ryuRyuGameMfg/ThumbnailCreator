'use client';

import { ReactNode } from 'react';
import Image from 'next/image';

interface CardImageProps {
  // 画像パスまたはURL（省略時はchildrenを表示）
  src?: string;
  alt?: string;
  // カスタムコンテンツ（SVGやグラフなど）
  children?: ReactNode;
  // スタイル
  className?: string;
  // 画像のフィット方法
  fit?: 'cover' | 'contain' | 'fill';
  // 背景色（画像がない場合）
  bgColor?: string;
}

/**
 * カード内の画像/ビジュアル用コンポーネント
 * - src: 画像パスを指定すると画像を表示
 * - children: SVGやカスタムコンテンツを表示
 * - 両方なし: プレースホルダーを表示
 */
export default function CardImage({
  src,
  alt = 'Card image',
  children,
  className = '',
  fit = 'cover',
  bgColor = 'bg-gray-100',
}: CardImageProps) {
  const baseClass = `relative w-full h-full overflow-hidden ${className}`;

  // 画像がある場合
  if (src) {
    return (
      <div className={`${baseClass} ${bgColor}`}>
        <Image
          src={src}
          alt={alt}
          fill
          className={`object-${fit}`}
          sizes="(max-width: 620px) 100vw, 300px"
        />
      </div>
    );
  }

  // カスタムコンテンツがある場合
  if (children) {
    return (
      <div className={`${baseClass} flex items-center justify-center`}>
        {children}
      </div>
    );
  }

  // プレースホルダー
  return (
    <div className={`${baseClass} ${bgColor} flex items-center justify-center`}>
      <div className="text-gray-400 text-xs">Image</div>
    </div>
  );
}
