'use client';

import { forwardRef } from 'react';
import SlideWrapper from './SlideWrapper';
import { Monitor, FileText, Wrench, CheckCircle, ShoppingBag } from 'lucide-react';

const Slide06Deliverables = forwardRef<HTMLDivElement>((_, ref) => {
  const deliverables = [
    {
      icon: Monitor,
      title: 'アプリケーション',
      desc: 'Windows / macOS 対応',
    },
    {
      icon: FileText,
      title: '詳細マニュアル',
      desc: 'セットアップから運用まで解説',
    },
    {
      icon: Wrench,
      title: '30日間 無料修正',
      desc: '納品後も安心サポート',
    },
    {
      icon: CheckCircle,
      title: '商用利用OK',
      desc: '収益化・ビジネス利用可能',
    },
    {
      icon: ShoppingBag,
      title: '買い切り',
      desc: '月額料金なし',
    },
  ];

  return (
    <SlideWrapper ref={ref} slideNumber={6} slideName="deliverables">
      <div className="flex flex-col h-full">
        {/* ヘッダー */}
        <div className="text-center mb-5">
          <h1 className="text-[28px] font-black text-gray-900 tracking-tight">
            納品内容
          </h1>
          <p className="text-sm text-gray-500 mt-1">充実のサポート体制</p>
        </div>

        {/* 納品物リスト */}
        <div className="flex flex-col gap-3 flex-1">
          {deliverables.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="flex items-center gap-4 card-white rounded-xl px-5 py-4 flex-1"
            >
              <div className="w-11 h-11 rounded-lg icon-bg flex items-center justify-center flex-shrink-0">
                <Icon className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-base font-bold text-gray-900">{title}</p>
                <p className="text-sm text-gray-500">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SlideWrapper>
  );
});

Slide06Deliverables.displayName = 'Slide06Deliverables';

export default Slide06Deliverables;
