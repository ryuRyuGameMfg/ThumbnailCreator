'use client';

import { useRef, useState } from 'react';
import { toPng } from 'html-to-image';
import JSZip from 'jszip';
import { 
  CoverDesign2,
  CoverDesignRecommended1_1,
  CoverDesignRecommended1_2,
  CoverDesignRecommended1_3,
  CoverDesignRecommended1_4,
} from '@/components/slides/cover/CoverDesign';

export default function CoverPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const recommendedRef = useRef<HTMLDivElement>(null);
  const [isDownloading, setIsDownloading] = useState(false);

  const recommendedDesigns = [
    { component: CoverDesignRecommended1_1, name: 'cover-recommended-1-1', label: '★ おすすめ1-1: シンプルアイコン背景' },
    { component: CoverDesignRecommended1_2, name: 'cover-recommended-1-2', label: '★ おすすめ1-2: メタリック風' },
    { component: CoverDesignRecommended1_3, name: 'cover-recommended-1-3', label: '★ おすすめ1-3: 3D風エンボス' },
    { component: CoverDesignRecommended1_4, name: 'cover-recommended-1-4', label: '★ おすすめ1-4: グロー効果強化' },
  ];

  const normalDesigns = [
    { component: CoverDesign2, name: 'cover-02-medal-square-3x', label: '通常2: メダル丸 + 3倍四角' },
  ];

  const downloadAllAsZip = async () => {
    if (isDownloading) return;
    
    setIsDownloading(true);
    const zip = new JSZip();
    
    try {
      // おすすめデザイン
      if (recommendedRef.current) {
        const recommendedElements = recommendedRef.current.querySelectorAll('.slide-container-cover');
        for (let i = 0; i < recommendedElements.length; i++) {
          const element = recommendedElements[i] as HTMLElement;
          const dataUrl = await toPng(element, { pixelRatio: 2.44 });
          const base64Data = dataUrl.split(',')[1];
          zip.file(`${recommendedDesigns[i].name}.png`, base64Data, { base64: true });
        }
      }
      
      // 通常デザイン
      if (containerRef.current) {
        const normalElements = containerRef.current.querySelectorAll('.slide-container-cover');
        for (let i = 0; i < normalElements.length; i++) {
          const element = normalElements[i] as HTMLElement;
          const dataUrl = await toPng(element, { pixelRatio: 2.44 });
          const base64Data = dataUrl.split(',')[1];
          zip.file(`${normalDesigns[i].name}.png`, base64Data, { base64: true });
        }
      }
      
      const content = await zip.generateAsync({ type: 'blob' });
      const url = URL.createObjectURL(content);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'cover-designs.zip';
      link.click();
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Download failed:', error);
      alert('ダウンロードに失敗しました');
    } finally {
      setIsDownloading(false);
    }
  };

  const downloadSingle = async (element: HTMLElement, filename: string) => {
    try {
      const dataUrl = await toPng(element, { pixelRatio: 2.44 });
      const link = document.createElement('a');
      link.href = dataUrl;
      link.download = `${filename}.png`;
      link.click();
    } catch (error) {
      console.error('Download failed:', error);
    }
  };

  return (
    <main className="min-h-screen bg-gray-900 p-4">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-white mb-2">Cover Design バリエーション</h1>
        <p className="text-gray-400 mb-4">ベース: 「プロが作るAI自動化」</p>
        <button
          onClick={downloadAllAsZip}
          disabled={isDownloading}
          className="px-6 py-3 bg-sky-600 hover:bg-sky-700 disabled:bg-gray-600 text-white font-bold rounded-lg transition-colors"
        >
          {isDownloading ? 'ダウンロード中...' : '全てZIPでダウンロード'}
        </button>
      </div>

      {/* おすすめデザイン */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-amber-400 mb-4">★ おすすめデザイン（リッチバッジ使用）</h2>
        <div ref={recommendedRef} className="grid grid-cols-2 gap-6">
          {recommendedDesigns.map(({ component: Component, name, label }, index) => (
            <div key={`rec-${index}`} className="relative group">
              <div className="mb-2 text-sm text-amber-300 font-bold">{label}</div>
              <div>
                <Component />
              </div>
              <button
                onClick={async () => {
                  if (!recommendedRef.current) return;
                  const slideElements = recommendedRef.current.querySelectorAll('.slide-container-cover');
                  const element = slideElements[index] as HTMLElement;
                  if (!element) return;
                  await downloadSingle(element, name);
                }}
                className="absolute top-10 right-2 px-3 py-1 bg-black/70 hover:bg-black/90 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity"
              >
                PNG
              </button>
            </div>
          ))}
        </div>
      </div>
      
      {/* 通常デザイン */}
      <div>
        <h2 className="text-xl font-bold text-white mb-4">通常バリエーション</h2>
        <div ref={containerRef} className="grid grid-cols-1 gap-6 max-w-[500px]">
          {normalDesigns.map(({ component: Component, name, label }, index) => (
            <div key={index} className="relative group">
              <div className="mb-2 text-sm text-gray-300 font-bold">{label}</div>
              <Component />
              <button
                onClick={async () => {
                  if (!containerRef.current) return;
                  const slideElements = containerRef.current.querySelectorAll('.slide-container-cover');
                  const element = slideElements[index] as HTMLElement;
                  if (!element) return;
                  await downloadSingle(element, name);
                }}
                className="absolute top-10 right-2 px-3 py-1 bg-black/70 hover:bg-black/90 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity"
              >
                PNG
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
