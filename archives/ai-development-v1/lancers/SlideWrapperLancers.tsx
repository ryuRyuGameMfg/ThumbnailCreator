'use client';

import { forwardRef, ReactNode, useRef, useCallback } from 'react';
import { toPng } from 'html-to-image';
import { Download } from 'lucide-react';

interface SlideWrapperProps {
  children: ReactNode;
  className?: string;
  slideNumber?: number;
  slideName?: string;
}

// ランサーズ用スライドラッパー（1220x686px 16:9横長）
const SlideWrapperLancers = forwardRef<HTMLDivElement, SlideWrapperProps>(
  ({ children, className = '', slideNumber = 1, slideName = 'slide' }, ref) => {
    const slideRef = useRef<HTMLDivElement>(null);

    const handleDownload = useCallback(async () => {
      if (!slideRef.current) return;

      try {
        const dataUrl = await toPng(slideRef.current, {
          width: 1220,
          height: 686,
          pixelRatio: 2,
        });

        const link = document.createElement('a');
        link.download = `${String(slideNumber).padStart(2, '0')}_${slideName}_lancers.png`;
        link.href = dataUrl;
        link.click();
      } catch (error) {
        console.error('Download failed:', error);
      }
    }, [slideNumber, slideName]);

    return (
      <div className="relative group">
        {/* スライド本体 */}
        <div
          ref={slideRef}
          className={`slide-container-lancers bg-white relative overflow-hidden ${className}`}
        >
          {/* コンテンツエリア（横長用に調整） */}
          <div className="absolute left-10 right-10 top-6 bottom-6 z-10 flex flex-col">
            {children}
          </div>
        </div>

        {/* ダウンロードボタン */}
        <button
          onClick={handleDownload}
          className="absolute top-3 right-3 z-20 bg-orange-600 hover:bg-orange-700 text-white px-3 py-2 rounded-lg shadow-lg flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <Download className="w-4 h-4" />
          <span className="text-sm font-medium">PNG</span>
        </button>
      </div>
    );
  }
);

SlideWrapperLancers.displayName = 'SlideWrapperLancers';

export default SlideWrapperLancers;
