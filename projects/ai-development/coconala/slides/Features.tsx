'use client';

import SlideWrapper from '../SlideWrapper';
import { DollarSign, Zap, Settings, HeadphonesIcon, CheckCircle } from 'lucide-react';
import { PinkTitleV2 } from '@/components/PinkTitleV2';
import { FEATURES_COLORS } from '@/constants/COLORS';
import { FONTS } from '@/constants/STYLES';

// ========================================
// Features（5つの特徴）v2 - AI開発サービス
// カラーレギュレーション: FEATURES_COLORSを使用
// ========================================

export function Features() {
  const features = [
    {
      icon: <DollarSign className="w-6 h-6 text-white" />,
      title: '月額費用0円',
      description: '買い切り型・追加課金なし',
      gradient: FEATURES_COLORS[0], // sky-500
    },
    {
      icon: <Zap className="w-6 h-6 text-white" />,
      title: '最短4日で納品',
      description: 'スピード開発対応',
      gradient: FEATURES_COLORS[1], // blue-500
    },
    {
      icon: <Settings className="w-6 h-6 text-white" />,
      title: '高い拡張性',
      description: 'プロンプト・NGワード・ログ設定自由',
      gradient: FEATURES_COLORS[2], // indigo-500
    },
    {
      icon: <HeadphonesIcon className="w-5 h-5 text-white" />,
      title: '1ヶ月無料サポート',
      description: 'メンテナンス+チャット対応',
      gradient: FEATURES_COLORS[3], // violet-500
    },
    {
      icon: <CheckCircle className="w-5 h-5 text-white" />,
      title: '商用利用OK',
      description: '収益化・法人利用可能',
      gradient: FEATURES_COLORS[0], // sky-500（循環）
    },
  ];

  return (
    <SlideWrapper slideNumber={2} slideName="features">
      <div className={`flex flex-col h-full ${FONTS.JAPANESE}`}>
        <PinkTitleV2 english="FEATURES" japanese="5つのサービスの特徴" />

        <div className="flex-1 flex flex-col gap-2 py-2">
          {features.slice(0, 3).map(({ icon, title, description, gradient }, index) => (
            <div
              key={index}
              className={`flex-1 bg-gradient-to-r ${gradient} rounded-xl p-3 flex items-center gap-3 shadow-lg`}
            >
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                {icon}
              </div>
              <div className="flex-1">
                <h3 className="text-white font-bold text-sm mb-0.5 leading-tight">{title}</h3>
                <p className="text-white/90 text-xs leading-tight">{description}</p>
              </div>
            </div>
          ))}
          <div className="grid grid-cols-2 gap-2">
            {features.slice(3).map(({ icon, title, description, gradient }, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${gradient} rounded-xl p-2.5 flex flex-col items-center justify-center shadow-lg`}
              >
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mb-1.5">
                  {icon}
                </div>
                <h3 className="text-white font-bold text-xs text-center mb-0.5 leading-tight">{title}</h3>
                <p className="text-white/90 text-[10px] text-center leading-tight">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}
