'use client';

import { useRef, useCallback, useState, createContext, useContext } from 'react';
import { toPng } from 'html-to-image';
import { Download, Loader2, Eye, EyeOff } from 'lucide-react';
import JSZip from 'jszip';
import { 
  Features,
  UseCases,
  Deliverables,
  Pricing,
  PricingOptions,
  Flow,
  FAQ1,
  FAQ2,
  FAQ3,
} from '@projects/unity-text-support/coconala/slides';
import { SAFE_AREA_TOP, SAFE_AREA_BOTTOM } from '@projects/unity-text-support/coconala/SlideWrapper';

// ========== ココナラ版（620x620px 正方形） ==========
const SLIDE_WIDTH = 620;
const SLIDE_HEIGHT = 620;

// セーフエリア表示コンテキスト
const SafeAreaContext = createContext(false);

function SectionTitle({ title }: { title: string }) {
  return (
    <div className="w-full max-w-[2400px] mx-auto py-4 px-8 border-b border-gray-200">
      <h2 className="text-xl font-black text-gray-900">{title}</h2>
    </div>
  );
}

function SlideRow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-4 p-6 overflow-x-auto max-w-[2400px] mx-auto">
      {children}
    </div>
  );
}

function SlideContainer({ children }: { children: React.ReactNode }) {
  const showSafeArea = useContext(SafeAreaContext);
  
  return (
    <div className="relative flex-shrink-0">
      <div className={`w-[${SLIDE_WIDTH}px] h-[${SLIDE_HEIGHT}px] bg-white rounded-2xl shadow-xl overflow-hidden`}
           style={{ width: SLIDE_WIDTH, height: SLIDE_HEIGHT }}>
        {children}
      </div>
      {/* セーフエリアオーバーレイ（グローバル表示） */}
      {showSafeArea && (
        <div className="absolute inset-0 pointer-events-none z-30 rounded-2xl overflow-hidden">
          {/* 上部危険エリア */}
          <div 
            className="absolute left-0 right-0 top-0 bg-red-500/20 border-b-2 border-red-500"
            style={{ height: SAFE_AREA_TOP }}
          />
          {/* 下部危険エリア */}
          <div 
            className="absolute left-0 right-0 bottom-0 bg-red-500/20 border-t-2 border-red-500"
            style={{ height: SAFE_AREA_BOTTOM }}
          />
          {/* セーフエリア中央線（参考） */}
          <div 
            className="absolute left-0 right-0 border border-green-500/50"
            style={{ top: SAFE_AREA_TOP, bottom: SAFE_AREA_BOTTOM }}
          />
        </div>
      )}
    </div>
  );
}

const slideInfo = [
  { name: 'features', title: '4つの特徴' },
  { name: 'usecases', title: 'サポート範囲' },
  { name: 'deliverables', title: 'サービス内容' },
  { name: 'pricing', title: '料金プラン' },
  { name: 'pricing-options', title: '有料オプション' },
  { name: 'flow', title: 'サービスの流れ' },
  { name: 'faq1', title: 'FAQ - 基礎知識' },
  { name: 'faq2', title: 'FAQ - 利用方法' },
  { name: 'faq3', title: 'FAQ - サポート実績' },
];

export default function UnityTextCoconalaPage() {
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [showSafeArea, setShowSafeArea] = useState(false);
  
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);

  const setSlideRef = (index: number) => (el: HTMLDivElement | null) => {
    slideRefs.current[index] = el;
  };

  const handleDownloadAll = useCallback(async () => {
    setIsDownloading(true);
    setDownloadProgress(0);

    try {
      const zip = new JSZip();
      const totalSlides = slideRefs.current.length;

      for (let i = 0; i < totalSlides; i++) {
        const slideEl = slideRefs.current[i];
        if (!slideEl) continue;

        const dataUrl = await toPng(slideEl, {
          width: SLIDE_WIDTH,
          height: SLIDE_HEIGHT,
          pixelRatio: 2,
        });

        const base64Data = dataUrl.replace(/^data:image\/png;base64,/, '');
        const fileName = `${String(i + 1).padStart(2, '0')}_${slideInfo[i].name}.png`;
        zip.file(fileName, base64Data, { base64: true });

        setDownloadProgress(Math.round(((i + 1) / totalSlides) * 100));
      }

      const content = await zip.generateAsync({ type: 'blob' });
      const url = URL.createObjectURL(content);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'unity_text_coconala_slides.zip';
      link.click();
      URL.revokeObjectURL(url);

    } catch (error) {
      console.error('Download failed:', error);
      alert('ダウンロードに失敗しました');
    } finally {
      setIsDownloading(false);
      setDownloadProgress(0);
    }
  }, []);

  return (
    <SafeAreaContext.Provider value={showSafeArea}>
      <main className="min-h-screen bg-gray-50">
        {/* ヘッダー */}
        <div className="bg-white border-b border-gray-200 py-4 px-8 sticky top-0 z-50">
          <div className="max-w-[2400px] mx-auto flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-black text-gray-900">Unityテキストサポート - ココナラ版</h1>
              <p className="text-gray-500 text-sm mt-1">
                全9スライド | {SLIDE_WIDTH}×{SLIDE_HEIGHT}px（正方形）| 
                セーフエリア: 上下{SAFE_AREA_TOP}px切れる
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setShowSafeArea(!showSafeArea)}
                className={`px-4 py-3 rounded-xl shadow-lg flex items-center gap-2 font-bold transition-colors ${
                  showSafeArea 
                    ? 'bg-red-100 text-red-700 border-2 border-red-300' 
                    : 'bg-gray-100 text-gray-700 border-2 border-gray-200'
                }`}
              >
                {showSafeArea ? <Eye className="w-5 h-5" /> : <EyeOff className="w-5 h-5" />}
                <span>セーフエリア</span>
              </button>
              <button
                onClick={handleDownloadAll}
                disabled={isDownloading}
                className="bg-sky-600 hover:bg-sky-700 disabled:bg-sky-400 text-white px-6 py-3 rounded-xl shadow-lg flex items-center gap-3 font-bold transition-colors"
              >
                {isDownloading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>ダウンロード中... {downloadProgress}%</span>
                  </>
                ) : (
                  <>
                    <Download className="w-5 h-5" />
                    <span>一括ダウンロード (ZIP)</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

      {/* 1. 4つの特徴 */}
      <SectionTitle title="1. 4つのサービスの特徴" />
        <SlideRow>
          <SlideContainer>
            <div ref={setSlideRef(0)} className="w-full h-full">
              <Features />
            </div>
          </SlideContainer>
        </SlideRow>

      {/* 2. サポート範囲 */}
      <SectionTitle title="2. サポート範囲" />
        <SlideRow>
          <SlideContainer>
            <div ref={setSlideRef(1)} className="w-full h-full">
              <UseCases />
            </div>
          </SlideContainer>
        </SlideRow>

      {/* 3. サービス内容 */}
      <SectionTitle title="3. サービス内容" />
        <SlideRow>
          <SlideContainer>
            <div ref={setSlideRef(2)} className="w-full h-full">
              <Deliverables />
            </div>
          </SlideContainer>
        </SlideRow>

      {/* 4. 料金プラン */}
      <SectionTitle title="4. 料金プラン" />
      <SlideRow>
        <SlideContainer>
          <div ref={setSlideRef(3)} className="w-full h-full">
            <Pricing />
          </div>
        </SlideContainer>
      </SlideRow>

      {/* 5. 有料オプション */}
      <SectionTitle title="5. 有料オプション" />
      <SlideRow>
        <SlideContainer>
          <div ref={setSlideRef(4)} className="w-full h-full">
            <PricingOptions />
          </div>
        </SlideContainer>
      </SlideRow>

      {/* 6. サービスの流れ */}
      <SectionTitle title="6. サービスの流れ" />
      <SlideRow>
        <SlideContainer>
          <div ref={setSlideRef(5)} className="w-full h-full">
            <Flow />
          </div>
        </SlideContainer>
      </SlideRow>

      {/* 7. よくある質問 - 基礎知識 */}
      <SectionTitle title="7. よくある質問 - 基礎知識" />
      <SlideRow>
        <SlideContainer>
          <div ref={setSlideRef(6)} className="w-full h-full">
            <FAQ1 />
          </div>
        </SlideContainer>
      </SlideRow>

      {/* 8. よくある質問 - 利用方法 */}
      <SectionTitle title="8. よくある質問 - 利用方法" />
      <SlideRow>
        <SlideContainer>
          <div ref={setSlideRef(7)} className="w-full h-full">
            <FAQ2 />
          </div>
        </SlideContainer>
      </SlideRow>

      {/* 9. よくある質問 - サポート・実績 */}
      <SectionTitle title="9. よくある質問 - サポート・実績" />
      <SlideRow>
        <SlideContainer>
          <div ref={setSlideRef(8)} className="w-full h-full">
            <FAQ3 />
          </div>
        </SlideContainer>
      </SlideRow>
      </main>
    </SafeAreaContext.Provider>
  );
}

