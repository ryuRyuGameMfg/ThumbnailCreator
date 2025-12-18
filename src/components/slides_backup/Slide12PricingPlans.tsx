'use client';

import { forwardRef } from 'react';
import SlideWrapper from './SlideWrapper';
import { Check, X, Star } from 'lucide-react';

const Slide12PricingPlans = forwardRef<HTMLDivElement>((_, ref) => {
  const plans = [
    {
      name: 'ベーシック',
      price: '75,000',
      originalPrice: '100,000',
      discount: '25%OFF',
      features: {
        system: true,
        customChar: false,
        rag: false,
        support: true,
        options: 'なし',
      },
      recommended: false,
      isDiscounted: true,
    },
    {
      name: 'スタンダード',
      price: '200,000',
      features: {
        system: true,
        customChar: true,
        rag: false,
        support: true,
        options: '1つ',
      },
      recommended: true,
      isDiscounted: false,
    },
    {
      name: 'プロ',
      price: '350,000',
      features: {
        system: true,
        customChar: true,
        rag: true,
        support: true,
        options: '3つ',
      },
      recommended: false,
      isDiscounted: false,
    },
  ];

  const featureLabels = [
    { key: 'system', label: '基本システム' },
    { key: 'customChar', label: 'キャラ変更' },
    { key: 'rag', label: '専門知識DB' },
    { key: 'support', label: 'サポート30日' },
    { key: 'options', label: '追加オプション' },
  ];

  return (
    <SlideWrapper ref={ref} slideNumber={12} slideName="pricing-plans">
      <div className="flex flex-col h-full">
        {/* ヘッダー */}
        <div className="text-center mb-3">
          <h1 className="text-[26px] font-black text-gray-900 tracking-tight">
            料金プラン
          </h1>
          <p className="text-xs text-gray-500 mt-0.5">目的に合わせて選べる3つのプラン</p>
        </div>

        {/* プラン比較表 */}
        <div className="flex-1 flex flex-col">
          {/* ヘッダー行 */}
          <div className="flex mb-2">
            <div className="w-[90px]"></div>
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`flex-1 text-center py-2 rounded-lg mx-0.5 relative ${
                  plan.recommended
                    ? 'bg-blue-600 text-white'
                    : plan.isDiscounted
                    ? 'bg-red-50 text-gray-700 border-2 border-red-400'
                    : 'bg-gray-100 text-gray-700'
                }`}
              >
                {plan.recommended && (
                  <div className="flex items-center justify-center gap-0.5 mb-0.5">
                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    <span className="text-[8px] font-bold">おすすめ</span>
                  </div>
                )}
                {plan.isDiscounted && (
                  <div className="absolute -top-2 -right-1 bg-red-500 text-white text-[8px] font-black px-1.5 py-0.5 rounded">
                    期間限定
                  </div>
                )}
                <div className="text-xs font-bold">{plan.name}</div>
                {plan.isDiscounted ? (
                  <div className="flex flex-col items-center">
                    <span className="text-[10px] text-gray-400 line-through">¥{plan.originalPrice}</span>
                    <div className="flex items-center gap-1">
                      <span className="text-base font-black text-red-600">¥{plan.price}</span>
                      <span className="text-[8px] font-bold text-red-500 bg-red-100 px-1 rounded">{plan.discount}</span>
                    </div>
                  </div>
                ) : (
                  <div className={`text-base font-black ${plan.recommended ? 'text-white' : 'text-blue-600'}`}>
                    ¥{plan.price}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* 機能行 */}
          <div className="flex flex-col gap-1.5 flex-1">
            {featureLabels.map(({ key, label }) => (
              <div key={key} className="flex items-stretch flex-1">
                <div className="w-[90px] text-xs font-bold text-gray-700 flex items-center">
                  {label}
                </div>
                {plans.map((plan, colIndex) => {
                  const value = plan.features[key as keyof typeof plan.features];
                  const isMiddle = colIndex === 1;
                  return (
                    <div
                      key={colIndex}
                      className={`flex-1 flex items-center justify-center mx-0.5 rounded-lg h-full ${
                        isMiddle ? 'bg-blue-50' : 'bg-gray-50'
                      }`}
                    >
                      {typeof value === 'boolean' ? (
                        value ? (
                          <Check className="w-6 h-6 text-blue-600" strokeWidth={3} />
                        ) : (
                          <X className="w-6 h-6 text-gray-300" strokeWidth={3} />
                        )
                      ) : (
                        <span className={`text-base font-bold ${
                          value === 'なし' ? 'text-gray-400' : 'text-blue-600'
                        }`}>
                          {value}
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>

          {/* フッター注釈 */}
          <div className="mt-3 text-center">
            <p className="text-[10px] text-gray-500">
              ※ 追加オプションの詳細は次ページをご覧ください
            </p>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
});

Slide12PricingPlans.displayName = 'Slide12PricingPlans';

export default Slide12PricingPlans;
