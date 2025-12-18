'use client';

import SlideWrapper from '../SlideWrapper';
import { MessageCircle, Clock, Shield, Star } from 'lucide-react';
import { FONTS } from '@/constants/STYLES';

// ========================================
// CTA（お問い合わせ） - サービス画像制作代行
// ========================================

export function CTA() {
  const points = [
    { icon: <Clock className="w-4 h-4 text-white" />, text: '爆速3日納品' },
    { icon: <Shield className="w-4 h-4 text-white" />, text: '修正2回無料' },
    { icon: <Star className="w-4 h-4 text-white" />, text: '実績230件+' },
  ];

  return (
    <SlideWrapper slideNumber={10} slideName="cta">
      <div className={`flex flex-col h-full items-center justify-center text-center ${FONTS.JAPANESE}`}>
        {/* メインメッセージ */}
        <div className="mb-4">
          <h2 className="text-3xl font-black text-white mb-2">
            まずは<span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-400">無料相談</span>から
          </h2>
          <p className="text-white/80 text-sm">
            サービス内容・ご要望をお聞かせください
          </p>
        </div>

        {/* CTAボタン */}
        <div className="bg-gradient-to-r from-sky-500 to-blue-600 rounded-2xl px-8 py-4 shadow-lg mb-4">
          <div className="flex items-center gap-3">
            <MessageCircle className="w-8 h-8 text-white" />
            <div className="text-left">
              <p className="text-white font-black text-xl">DMでお問い合わせ</p>
              <p className="text-white/80 text-xs">24時間以内に返信します</p>
            </div>
          </div>
        </div>

        {/* ポイント */}
        <div className="flex gap-4">
          {points.map(({ icon, text }, index) => (
            <div key={index} className="flex items-center gap-1.5 bg-white/10 rounded-full px-3 py-1.5">
              {icon}
              <span className="text-white text-xs font-bold">{text}</span>
            </div>
          ))}
        </div>

        {/* 価格情報 */}
        <div className="mt-4 pt-4 border-t border-white/20">
          <p className="text-white/60 text-xs mb-1">サービス画像10枚セット</p>
          <p className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-400">
            10,000円
          </p>
        </div>
      </div>
    </SlideWrapper>
  );
}
