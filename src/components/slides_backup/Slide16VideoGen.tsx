'use client';

import { forwardRef } from 'react';
import SlideWrapper from './SlideWrapper';
import { Film, FileText, Newspaper, Megaphone, Package, User } from 'lucide-react';

const Slide16VideoGen = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <SlideWrapper ref={ref} slideNumber={16} slideName="video-gen">
      <div className="flex flex-col h-full">
        {/* ヘッダー */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-11 h-11 rounded-xl bg-purple-500 flex items-center justify-center shadow-lg shadow-purple-500/30">
            <Film className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-black text-gray-900 tracking-tight">
              動画生成
            </h1>
            <p className="text-[10px] text-gray-500">台本を読み込むと動画を自動生成</p>
          </div>
        </div>

        {/* フロー: 横長のステップ矢印 */}
        <div className="flex items-center gap-0 mb-4">
          {/* Step 1 */}
          <div className="flex-1 relative">
            <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-l-xl pl-3 pr-6 py-2 flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center">
                <FileText className="w-4 h-4 text-purple-500" />
              </div>
              <div>
                <div className="text-[10px] font-bold text-gray-800">CSV台本</div>
                <div className="text-[8px] text-gray-500">テキスト</div>
              </div>
            </div>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-0 h-0 border-t-[20px] border-t-transparent border-b-[20px] border-b-transparent border-l-[12px] border-l-purple-100 z-10" />
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
          <div className="col-span-2 row-span-1 bg-gradient-to-br from-purple-500 to-fuchsia-600 rounded-2xl p-4 flex flex-col justify-between shadow-lg shadow-purple-500/20">
            <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center">
              <Newspaper className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="text-base font-black text-white">ニュース動画</div>
              <div className="text-[11px] text-purple-100 font-medium">制作費90%カット</div>
            </div>
          </div>
          
          {/* 小さいカード1 */}
          <div className="col-span-1 row-span-1 bg-white rounded-2xl p-3 flex flex-col justify-between border border-gray-100 shadow-sm">
            <div className="w-8 h-8 rounded-lg bg-rose-50 flex items-center justify-center">
              <Megaphone className="w-4 h-4 text-rose-500" />
            </div>
            <div>
              <div className="text-xs font-bold text-gray-800">PR動画</div>
              <div className="text-[9px] text-gray-500">自社キャラで簡単作成</div>
            </div>
          </div>
          
          {/* 小さいカード2 */}
          <div className="col-span-1 row-span-1 bg-white rounded-2xl p-3 flex flex-col justify-between border border-gray-100 shadow-sm">
            <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center">
              <Package className="w-4 h-4 text-amber-500" />
            </div>
            <div>
              <div className="text-xs font-bold text-gray-800">商品紹介</div>
              <div className="text-[9px] text-gray-500">AIキャラで量産</div>
            </div>
          </div>
          
          {/* CTA */}
          <div className="col-span-2 row-span-1 bg-gray-900 rounded-2xl p-4 flex items-center justify-between shadow-lg">
            <div>
              <div className="text-sm font-black text-white">無料相談 受付中</div>
              <div className="text-[10px] text-gray-400">詳細資料・デモ動画をご提供</div>
            </div>
            <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center">
              <Film className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
});

Slide16VideoGen.displayName = 'Slide16VideoGen';

export default Slide16VideoGen;
