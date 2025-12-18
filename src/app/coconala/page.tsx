'use client';

import { useRef, useCallback, useState, createContext, useContext } from 'react';
import { toPng } from 'html-to-image';
import { Download, Loader2, Eye, EyeOff } from 'lucide-react';
import JSZip from 'jszip';
import { 
  Cover,
  Problem,
  Solution,
  UseCases,
  VoiceChat,
  LiveStream,
  VideoGen,
  TextChat,
  Target,
  Pricing,
  Deliverables,
  FAQ,
  FAQ2,
  FAQ3,
  Flow,
} from '@projects/ai-development/coconala/slides';
import { SAFE_AREA_TOP, SAFE_AREA_BOTTOM } from '@/components/slides/SlideWrapper';

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
  { name: 'cover', title: '表紙' },
  { name: 'problem', title: 'お悩み' },
  { name: 'solution', title: '解決' },
  { name: 'usecases', title: '4つのアプリ' },
  { name: 'voicechat', title: '音声対話' },
  { name: 'livestream', title: 'ライブ配信' },
  { name: 'videogen', title: '動画生成' },
  { name: 'textchat', title: 'テキストチャット' },
  { name: 'target', title: 'ターゲット' },
  { name: 'deliverables', title: '納品内容' },
  { name: 'pricing', title: '料金プラン' },
  { name: 'flow', title: 'サービスの流れ' },
  { name: 'faq1', title: 'FAQ_価格信頼性' },
  { name: 'faq2', title: 'FAQ_利用条件著作権' },
  { name: 'faq3', title: 'FAQ_サポート責任' },
];

export default function CoconalaPage() {
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
      link.download = 'coconala_slides.zip';
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
              <h1 className="text-2xl font-black text-gray-900">スライドデザイン - ココナラ版</h1>
              <p className="text-gray-500 text-sm mt-1">
                全15スライド | {SLIDE_WIDTH}×{SLIDE_HEIGHT}px（正方形）| 
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
                className="bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white px-6 py-3 rounded-xl shadow-lg flex items-center gap-3 font-bold transition-colors"
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

      {/* 0. 表紙 */}
      <SectionTitle title="0. 表紙" />
      <SlideRow>
        <SlideContainer>
          <div ref={setSlideRef(0)} className="w-full h-full">
            <Cover />
          </div>
        </SlideContainer>
      </SlideRow>

      {/* 1. お悩み */}
      <SectionTitle title="1. こんなお悩みありませんか?" />
      <SlideRow>
        <SlideContainer>
          <div ref={setSlideRef(1)} className="w-full h-full">
            <Problem />
          </div>
        </SlideContainer>
      </SlideRow>

      {/* 2. 解決 */}
      <SectionTitle title="2. 全部解決します" />
      <SlideRow>
        <SlideContainer>
          <div ref={setSlideRef(2)} className="w-full h-full">
            <Solution />
          </div>
        </SlideContainer>
      </SlideRow>

      {/* 3. 4つのアプリ */}
      <SectionTitle title="3. 4つのアプリをご用意" />
      <SlideRow>
        <SlideContainer>
          <div ref={setSlideRef(3)} className="w-full h-full">
            <UseCases />
          </div>
        </SlideContainer>
      </SlideRow>

      {/* 4. 音声対話 */}
      <SectionTitle title="4. 音声対話" />
      <SlideRow>
        <SlideContainer>
          <div ref={setSlideRef(4)} className="w-full h-full">
            <VoiceChat />
          </div>
        </SlideContainer>
      </SlideRow>

      {/* 5. ライブ配信 */}
      <SectionTitle title="5. ライブ配信" />
      <SlideRow>
        <SlideContainer>
          <div ref={setSlideRef(5)} className="w-full h-full">
            <LiveStream />
          </div>
        </SlideContainer>
      </SlideRow>

      {/* 6. 動画生成 */}
      <SectionTitle title="6. 動画生成" />
      <SlideRow>
        <SlideContainer>
          <div ref={setSlideRef(6)} className="w-full h-full">
            <VideoGen />
          </div>
        </SlideContainer>
      </SlideRow>

      {/* 7. テキストチャット */}
      <SectionTitle title="7. テキストチャット" />
      <SlideRow>
        <SlideContainer>
          <div ref={setSlideRef(7)} className="w-full h-full">
            <TextChat />
          </div>
        </SlideContainer>
      </SlideRow>

      {/* 8. ターゲット */}
      <SectionTitle title="8. こんな方におすすめ" />
      <SlideRow>
        <SlideContainer>
          <div ref={setSlideRef(8)} className="w-full h-full">
            <Target />
          </div>
        </SlideContainer>
      </SlideRow>

      {/* 9. 納品内容 */}
      <SectionTitle title="9. 納品内容" />
      <SlideRow>
        <SlideContainer>
          <div ref={setSlideRef(9)} className="w-full h-full">
            <Deliverables />
          </div>
        </SlideContainer>
      </SlideRow>

      {/* 10. 料金プラン */}
      <SectionTitle title="10. 料金プラン" />
      <SlideRow>
        <SlideContainer>
          <div ref={setSlideRef(10)} className="w-full h-full">
            <Pricing />
          </div>
        </SlideContainer>
      </SlideRow>

      {/* 11. サービスの流れ */}
      <SectionTitle title="11. サービスの流れ" />
      <SlideRow>
        <SlideContainer>
          <div ref={setSlideRef(11)} className="w-full h-full">
            <Flow />
          </div>
        </SlideContainer>
      </SlideRow>

      {/* 12. FAQ（価格・信頼性） */}
      <SectionTitle title="12. よくある質問（価格・信頼性）" />
      <SlideRow>
        <SlideContainer>
          <div ref={setSlideRef(12)} className="w-full h-full">
            <FAQ />
          </div>
        </SlideContainer>
      </SlideRow>

      {/* 13. FAQ2（利用条件・著作権） */}
      <SectionTitle title="13. よくある質問（利用条件・著作権）" />
      <SlideRow>
        <SlideContainer>
          <div ref={setSlideRef(13)} className="w-full h-full">
            <FAQ2 />
          </div>
        </SlideContainer>
      </SlideRow>

        {/* 14. FAQ3（サポート・責任範囲） */}
        <SectionTitle title="14. よくある質問（サポート・責任範囲）" />
        <SlideRow>
          <SlideContainer>
            <div ref={setSlideRef(14)} className="w-full h-full">
              <FAQ3 />
            </div>
          </SlideContainer>
        </SlideRow>
      </main>
    </SafeAreaContext.Provider>
  );
}
