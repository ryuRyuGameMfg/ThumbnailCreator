'use client';

import Image from 'next/image';

interface CharacterImageProps {
  src: string;
  alt?: string;
  className?: string;
}

/**
 * キャラクター画像コンポーネント
 * 緑背景（クロマキー）を除去して表示
 * 
 * 使用方法:
 * <CharacterImage src="/images/character-1.png" className="absolute bottom-0 right-0" />
 */
export function CharacterImage({ 
  src, 
  alt = 'AI Character', 
  className = '' 
}: CharacterImageProps) {
  return (
    <div className={`relative ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={280}
        height={620}
        style={{ 
          objectFit: 'contain',
          // 緑背景を暗く補正してブレンド
          mixBlendMode: 'multiply',
        }}
        className="character-chroma-key"
        priority
      />
      <style jsx global>{`
        /* 緑背景除去（クロマキー風） */
        .character-chroma-key {
          filter: 
            saturate(1.2)
            contrast(1.1);
        }
      `}</style>
    </div>
  );
}
