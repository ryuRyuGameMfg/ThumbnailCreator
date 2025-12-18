'use client';

import SlideWrapper from '../SlideWrapper';
import { HelpCircle } from 'lucide-react';
import { PinkTitleV2 } from '@/components/PinkTitleV2';
import { FONTS } from '@/constants/STYLES';

// ========================================
// FAQ3（よくある質問 - サポート・実績）v2 - AI開発サービス
// ========================================

export function FAQ3() {
  const faqs = [
    {
      question: 'サポート期間はどのくらいですか？',
      answer: '納品後30日間の無料サポート付きです。延長も可能です。',
    },
    {
      question: 'カスタマイズは可能ですか？',
      answer: 'はい！プロンプト・NGワード・ログなど自由に設定できます。',
    },
    {
      question: '複数キャラに対応できますか？',
      answer: 'はい、複数キャラ切り替え機能も実装可能です。',
    },
    {
      question: '音声は変更できますか？',
      answer: 'はい、VOICEVOX、OpenAI TTS、ElevenLabsなど選択できます。',
    },
    {
      question: 'サーバーは必要ですか？',
      answer: '基本不要ですが、24時間稼働ならサーバー推奨です。',
    },
  ];

  return (
    <SlideWrapper slideNumber={9} slideName="faq3">
      <div className={`flex flex-col h-full ${FONTS.JAPANESE}`}>
        <PinkTitleV2 english="FAQ" japanese="よくある質問 - サポート・実績" />

        <div className="flex-1 flex flex-col gap-2 py-2">
          {faqs.map(({ question, answer }, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-sky-500/20 to-blue-600/20 border-2 border-sky-500/50 rounded-xl p-2 shadow-sm backdrop-blur"
            >
              <div className="flex items-start gap-2 mb-0.5">
                <div className="w-5 h-5 bg-sky-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <HelpCircle className="w-3 h-3 text-white" />
                </div>
                <h3 className="text-white font-bold text-xs flex-1 leading-tight">{question}</h3>
              </div>
              <p className="text-white/90 text-[10px] leading-tight pl-7">{answer}</p>
            </div>
          ))}
        </div>
      </div>
    </SlideWrapper>
  );
}
