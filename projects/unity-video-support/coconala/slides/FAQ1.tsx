'use client';

import SlideWrapper from '../SlideWrapper';
import { HelpCircle } from 'lucide-react';

// ========================================
// FAQ1（基礎知識）
// ========================================

function SlideTitle({ english, japanese }: { english: string; japanese: string }) {
  return (
    <div className="text-center mb-3">
      <h1 className="font-melete text-[36px] font-bold text-sky-600 tracking-wider">
        {english}
      </h1>
      <p className="text-sm text-gray-500 font-hackgen">{japanese}</p>
    </div>
  );
}

export function FAQ1() {
  const faqs = [
    {
      question: 'ご予約の日程がない場合でもDMできますか？',
      answer: 'もちろんです！ご予約の日程がなくてもDMからメッセージいただければ必ずご返信いたします。お気軽にご相談ください。',
    },
    {
      question: 'ビデオチャットの準備は必要ですか？',
      answer: 'PC・スマホ・タブレットで参加可能です。画面共有のみでOK。カメラOFFで顔出しなしでも大丈夫です！',
    },
    {
      question: 'どんな質問ができますか？',
      answer: 'Unityの基本操作、エラー対応、2D/3Dゲーム開発、VR/AR/AI開発など幅広く対応します。',
    },
    {
      question: '60分で足りない場合は？',
      answer: '時間延長オプション（30分単位）をご利用いただけます。当日延長も可能ですが、事前にご相談いただければ割安になります。',
    },
  ];

  return (
    <SlideWrapper slideNumber={7} slideName="faq1">
      <div className="flex flex-col h-full font-hackgen">
        <SlideTitle english="FAQ" japanese="よくある質問 - 基礎知識" />
        
        <div className="flex-1 flex flex-col gap-2">
          {faqs.map(({ question, answer }, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-sky-50 to-blue-50 border-2 border-sky-200 rounded-lg p-2 shadow-sm"
            >
              <div className="flex items-start gap-2 mb-0.5">
                <div className="w-5 h-5 bg-sky-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <HelpCircle className="w-3 h-3 text-white" />
                </div>
                <h3 className="text-sky-700 font-bold text-xs flex-1">{question}</h3>
              </div>
              <p className="text-gray-600 text-[10px] leading-relaxed pl-7">{answer}</p>
            </div>
          ))}
        </div>

        <div className="mt-2 text-center">
          <p className="text-[10px] text-gray-500">
            詳細はココナラのサービスページをご覧ください
          </p>
        </div>
      </div>
    </SlideWrapper>
  );
}
