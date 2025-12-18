'use client';

import { forwardRef } from 'react';
import SlideWrapper from './SlideWrapper';
import { Radio, MessageCircle, HelpCircle, Sparkles, Briefcase, User } from 'lucide-react';

const Slide14LiveStream = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <SlideWrapper ref={ref} slideNumber={14} slideName="live-stream">
      <div className="flex flex-col h-full">
        {/* ヘッダー */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-11 h-11 rounded-xl bg-red-500 flex items-center justify-center shadow-lg shadow-red-500/30">
            <Radio className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-black text-gray-900 tracking-tight">
              ライブ配信
            </h1>
            <p className="text-[10px] text-gray-500">YouTubeコメントに24時間自動応答</p>
          </div>
        </div>

        {/* フロー: 横長のステップ矢印 */}
        <div className="flex items-center gap-0 mb-4">
          {/* Step 1 */}
          <div className="flex-1 relative">
            <div className="bg-gradient-to-r from-red-50 to-red-100 rounded-l-xl pl-3 pr-6 py-2 flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center">
                <MessageCircle className="w-4 h-4 text-red-500" />
              </div>
              <div>
                <div className="text-[10px] font-bold text-gray-800">コメント</div>
                <div className="text-[8px] text-gray-500">YouTube</div>
              </div>
            </div>
            {/* 矢印 */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-0 h-0 border-t-[20px] border-t-transparent border-b-[20px] border-b-transparent border-l-[12px] border-l-red-100 z-10" />
          </div>
          
          {/* Step 2 */}
          <div className="flex-1 relative">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 pl-5 pr-6 py-2 flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
                <span className="text-[10px] font-black text-white">AI</span>
              </div>
              <div>
                <div className="text-[10px] font-bold text-white">AI処理</div>
                <div className="text-[8px] text-blue-200">LLM+TTS</div>
              </div>
            </div>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-0 h-0 border-t-[20px] border-t-transparent border-b-[20px] border-b-transparent border-l-[12px] border-l-blue-600 z-10" />
          </div>
          
          {/* Step 3 */}
          <div className="flex-1">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-r-xl pl-5 pr-3 py-2 flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
                <User className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="text-[10px] font-bold text-white">キャラが話す</div>
                <div className="text-[8px] text-pink-200">表情+音声</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bento Grid: 活用例 */}
        <div className="flex-1 grid grid-cols-3 grid-rows-2 gap-2">
          {/* 大きいカード */}
          <div className="col-span-2 row-span-1 bg-gradient-to-br from-red-500 to-rose-600 rounded-2xl p-4 flex flex-col justify-between shadow-lg shadow-red-500/20">
            <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center">
              <HelpCircle className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="text-base font-black text-white">24時間FAQ</div>
              <div className="text-[11px] text-red-100 font-medium">年間240万円の人件費削減</div>
            </div>
          </div>
          
          {/* 小さいカード1 */}
          <div className="col-span-1 row-span-1 bg-white rounded-2xl p-3 flex flex-col justify-between border border-gray-100 shadow-sm">
            <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-amber-500" />
            </div>
            <div>
              <div className="text-xs font-bold text-gray-800">占いVTuber</div>
              <div className="text-[9px] text-gray-500">24時間365日稼働</div>
            </div>
          </div>
          
          {/* 小さいカード2 */}
          <div className="col-span-1 row-span-1 bg-white rounded-2xl p-3 flex flex-col justify-between border border-gray-100 shadow-sm">
            <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
              <Briefcase className="w-4 h-4 text-blue-500" />
            </div>
            <div>
              <div className="text-xs font-bold text-gray-800">ポートフォリオ</div>
              <div className="text-[9px] text-gray-500">自動で作品をPR</div>
            </div>
          </div>
          
          {/* CTA */}
          <div className="col-span-2 row-span-1 bg-gray-900 rounded-2xl p-4 flex items-center justify-between shadow-lg">
            <div>
              <div className="text-sm font-black text-white">無料相談 受付中</div>
              <div className="text-[10px] text-gray-400">詳細資料・デモ動画をご提供</div>
            </div>
            <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center">
              <Radio className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
});

Slide14LiveStream.displayName = 'Slide14LiveStream';

export default Slide14LiveStream;
