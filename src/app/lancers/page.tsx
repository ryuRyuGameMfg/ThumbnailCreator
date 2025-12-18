'use client';

import { useRef, useCallback, useState } from 'react';
import { toPng } from 'html-to-image';
import { Download, Loader2 } from 'lucide-react';
import JSZip from 'jszip';
import { 
  ProblemLancers,
  SolutionLancers,
  UseCasesLancers,
  VoiceChatLancers,
  LiveStreamLancers,
  VideoGenLancers,
  TextChatLancers,
  TargetLancers,
  PricingLancers,
  DeliverablesLancers,
  FAQLancers,
  FlowLancers,
} from '@projects/ai-development/lancers/slides';

// ========== ランサーズ版（1220x686px 16:9横長） ==========
const SLIDE_WIDTH = 1220;
const SLIDE_HEIGHT = 686;

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
  return (
    <div className="relative flex-shrink-0">
      <div 
        className="bg-white rounded-2xl shadow-xl overflow-hidden"
        style={{ width: SLIDE_WIDTH, height: SLIDE_HEIGHT }}
      >
        {children}
      </div>
    </div>
  );
}

const slideInfo = [
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
  { name: 'faq', title: 'FAQ' },
];

export default function LancersPage() {
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState(0);
  
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
        const fileName = `${String(i + 1).padStart(2, '0')}_${slideInfo[i].name}_lancers.png`;
        zip.file(fileName, base64Data, { base64: true });

        setDownloadProgress(Math.round(((i + 1) / totalSlides) * 100));
      }

      const content = await zip.generateAsync({ type: 'blob' });
      const url = URL.createObjectURL(content);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'lancers_slides.zip';
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
    <main className="min-h-screen bg-gray-50">
      {/* ヘッダー */}
      <div className="bg-white border-b border-gray-200 py-4 px-8 sticky top-0 z-50">
        <div className="max-w-[2400px] mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-black text-gray-900">スライドデザイン - ランサーズ版</h1>
            <p className="text-gray-500 text-sm mt-1">全12スライド | {SLIDE_WIDTH}×{SLIDE_HEIGHT}px（16:9横長）</p>
          </div>
          <button
            onClick={handleDownloadAll}
            disabled={isDownloading}
            className="bg-orange-600 hover:bg-orange-700 disabled:bg-orange-400 text-white px-6 py-3 rounded-xl shadow-lg flex items-center gap-3 font-bold transition-colors"
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

      {/* 1. お悩み */}
      <SectionTitle title="1. こんなお悩みありませんか?" />
      <SlideRow>
        <SlideContainer>
          <div ref={setSlideRef(0)} className="w-full h-full">
            <ProblemLancers />
          </div>
        </SlideContainer>
      </SlideRow>

      {/* 2. 解決 */}
      <SectionTitle title="2. 全部解決します" />
      <SlideRow>
        <SlideContainer>
          <div ref={setSlideRef(1)} className="w-full h-full">
            <SolutionLancers />
          </div>
        </SlideContainer>
      </SlideRow>

      {/* 3. 4つのアプリ */}
      <SectionTitle title="3. 4つのアプリをご用意" />
      <SlideRow>
        <SlideContainer>
          <div ref={setSlideRef(2)} className="w-full h-full">
            <UseCasesLancers />
          </div>
        </SlideContainer>
      </SlideRow>

      {/* 4. 音声対話 */}
      <SectionTitle title="4. 音声対話" />
      <SlideRow>
        <SlideContainer>
          <div ref={setSlideRef(3)} className="w-full h-full">
            <VoiceChatLancers />
          </div>
        </SlideContainer>
      </SlideRow>

      {/* 5. ライブ配信 */}
      <SectionTitle title="5. ライブ配信" />
      <SlideRow>
        <SlideContainer>
          <div ref={setSlideRef(4)} className="w-full h-full">
            <LiveStreamLancers />
          </div>
        </SlideContainer>
      </SlideRow>

      {/* 6. 動画生成 */}
      <SectionTitle title="6. 動画生成" />
      <SlideRow>
        <SlideContainer>
          <div ref={setSlideRef(5)} className="w-full h-full">
            <VideoGenLancers />
          </div>
        </SlideContainer>
      </SlideRow>

      {/* 7. テキストチャット */}
      <SectionTitle title="7. テキストチャット" />
      <SlideRow>
        <SlideContainer>
          <div ref={setSlideRef(6)} className="w-full h-full">
            <TextChatLancers />
          </div>
        </SlideContainer>
      </SlideRow>

      {/* 8. ターゲット */}
      <SectionTitle title="8. こんな方におすすめ" />
      <SlideRow>
        <SlideContainer>
          <div ref={setSlideRef(7)} className="w-full h-full">
            <TargetLancers />
          </div>
        </SlideContainer>
      </SlideRow>

      {/* 9. 納品内容 */}
      <SectionTitle title="9. 納品内容" />
      <SlideRow>
        <SlideContainer>
          <div ref={setSlideRef(8)} className="w-full h-full">
            <DeliverablesLancers />
          </div>
        </SlideContainer>
      </SlideRow>

      {/* 10. 料金プラン */}
      <SectionTitle title="10. 料金プラン" />
      <SlideRow>
        <SlideContainer>
          <div ref={setSlideRef(9)} className="w-full h-full">
            <PricingLancers />
          </div>
        </SlideContainer>
      </SlideRow>

      {/* 11. サービスの流れ */}
      <SectionTitle title="11. サービスの流れ" />
      <SlideRow>
        <SlideContainer>
          <div ref={setSlideRef(10)} className="w-full h-full">
            <FlowLancers />
          </div>
        </SlideContainer>
      </SlideRow>

      {/* 12. FAQ */}
      <SectionTitle title="12. よくある質問" />
      <SlideRow>
        <SlideContainer>
          <div ref={setSlideRef(11)} className="w-full h-full">
            <FAQLancers />
          </div>
        </SlideContainer>
      </SlideRow>
    </main>
  );
}
