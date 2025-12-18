'use client';

import { forwardRef, ReactNode, useRef, useImperativeHandle } from 'react';
import { toPng } from 'html-to-image';

// ========================================
// ココナラ サムネイル仕様
// ========================================
// フルサイズ: 1220×1240px
// 表示サイズ: 1220×1009px（一覧・検索結果）
// 上下カット: 各115.5px（合計231px）
// 
// 620px版に換算:
// 620/1220 = 0.508倍
// フル: 620×630px（実際は620×620の正方形で作成）
// セーフエリア: 上下各58px（115.5×0.508）
// ========================================

// セーフエリア定数（620px正方形基準）
export const SAFE_AREA_TOP = 58; // 上部の切れる範囲
export const SAFE_AREA_BOTTOM = 58; // 下部の切れる範囲
export const SAFE_PADDING = 24; // セーフエリア内のパディング

interface SlideWrapperProps {
  children: ReactNode;
  className?: string;
  slideNumber?: number;
  slideName?: string;
}

export interface SlideWrapperHandle {
  downloadSlide: () => Promise<void>;
  getSlideData: () => Promise<{ dataUrl: string; fileName: string } | null>;
}

const SlideWrapper = forwardRef<SlideWrapperHandle, SlideWrapperProps>(
  ({ children, className = '', slideNumber = 1, slideName = 'slide' }, ref) => {
    const slideRef = useRef<HTMLDivElement>(null);

    useImperativeHandle(ref, () => ({
      downloadSlide: async () => {
        if (!slideRef.current) return;

        try {
          const dataUrl = await toPng(slideRef.current, {
            width: 620,
            height: 620,
            pixelRatio: 2,
          });

          const link = document.createElement('a');
          link.download = `${String(slideNumber).padStart(2, '0')}_${slideName}.png`;
          link.href = dataUrl;
          link.click();
        } catch (error) {
          console.error('Download failed:', error);
        }
      },
      getSlideData: async () => {
        if (!slideRef.current) return null;

        try {
          const dataUrl = await toPng(slideRef.current, {
            width: 620,
            height: 620,
            pixelRatio: 2,
          });

          return {
            dataUrl,
            fileName: `${String(slideNumber).padStart(2, '0')}_${slideName}.png`,
          };
        } catch (error) {
          console.error('Get slide data failed:', error);
          return null;
        }
      },
    }));

    return (
      <div className="relative">
        {/* スライド本体 */}
        <div
          ref={slideRef}
          className={`slide-container bg-white relative overflow-hidden ${className}`}
        >
          {/* コンテンツエリア（セーフエリアを考慮したパディング） */}
          <div 
            className="absolute z-10 flex flex-col"
            style={{
              left: SAFE_PADDING,
              right: SAFE_PADDING,
              top: SAFE_AREA_TOP + SAFE_PADDING,
              bottom: SAFE_AREA_BOTTOM + SAFE_PADDING,
            }}
          >
            {children}
          </div>
        </div>
      </div>
    );
  }
);

SlideWrapper.displayName = 'SlideWrapper';

export default SlideWrapper;

