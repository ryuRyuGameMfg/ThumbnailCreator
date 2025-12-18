'use client';

import SlideWrapper from '../SlideWrapper';
import { MessageCircle, Clock, Shield, Star } from 'lucide-react';
import { FONTS } from '@/constants/STYLES';

// ========================================
// CTA（お問い合わせ） - サービス画像制作代行
// 文字サイズ大きめ版
// ========================================

export function CTA() {
  const points = [
    { icon: <Clock className="w-5 h-5 text-white" />, text: '爆速3日納品' },
    { icon: <Shield className="w-5 h-5 text-white" />, text: '修正2回無料' },
    { icon: <Star className="w-5 h-5 text-white" />, text: '実績230件+' },
  ];

  return (
    <SlideWrapper slideNumber={10} slideName="cta">
      <div className={`flex flex-col h-full items-center justify-center text-center ${FONTS.JAPANESE}`}>
        {/* メインメッセージ */}
        <div className="mb-5">
          <h2 className="text-[32px] font-black text-white mb-2">
            まずは<span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-400">無料相談</span>から
          </h2>
          <p className="text-white/80 text-lg">
            サービス内容・ご要望をお聞かせください
          </p>
        </div>

        {/* CTAボタン */}
        <div className="bg-gradient-to-r from-sky-500 to-blue-600 rounded-2xl px-10 py-5 shadow-lg mb-5">
          <div className="flex items-center gap-4">
            <MessageCircle className="w-10 h-10 text-white" />
            <div className="text-left">
              <p className="text-white font-black text-2xl">DMでお問い合わせ</p>
              <p className="text-white/80 text-base">24時間以内に返信します</p>
            </div>
          </div>
        </div>

        {/* ポイント */}
        <div className="flex gap-4">
          {points.map(({ icon, text }, index) => (
            <div key={index} className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
              {icon}
              <span className="text-white text-base font-bold">{text}</span>
            </div>
          ))}
        </div>

        {/* 価格情報 */}
        <div className="mt-5 pt-4 border-t border-white/20">
          <p className="text-white/60 text-base mb-1">サービス画像10枚セット</p>
          <p className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-400">
            10,000円
          </p>
        </div>
      </div>
    </SlideWrapper>
  );
}
