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

const SlideWrapper = forwardRef<HTMLDivElement, SlideWrapperProps>(
  ({ children, className = '', slideNumber = 1, slideName = 'slide' }, ref) => {
    const slideRef = useRef<HTMLDivElement>(null);

    const handleDownload = useCallback(async () => {
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
    }, [slideNumber, slideName]);

    return (
      <div className="relative group">
        {/* スライド本体 */}
        <div
          ref={slideRef}
          className={`slide-container bg-white relative overflow-hidden ${className}`}
        >
          {/* コンテンツエリア */}
          <div className="absolute left-8 right-8 top-8 bottom-8 z-10 flex flex-col">
            {children}
          </div>
        </div>

        {/* ダウンロードボタン */}
        <button
          onClick={handleDownload}
          className="absolute top-3 right-3 z-20 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg shadow-lg flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <Download className="w-4 h-4" />
          <span className="text-sm font-medium">PNG</span>
        </button>
      </div>
    );
  }
);

SlideWrapper.displayName = 'SlideWrapper';

export default SlideWrapper;
