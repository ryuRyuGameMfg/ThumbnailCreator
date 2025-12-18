'use client';

import { forwardRef } from 'react';
import SlideWrapperLancers from '../SlideWrapperLancers';

// ========================================
// フォント設計（ハイブリッド）
// ========================================
// タイトル: Melete（英語）
// サブタイトル・本文: HackGen（日本語）
// ========================================

// FAQ1: 価格・信頼性
const faqs1 = [
  { q: 'なぜこんなに安いの?', a: '基盤システム完成済み。お客様ごとのカスタマイズのみで短期間・低コストを実現。' },
  { q: '月額料金は?', a: '買い切りで月額0円。別途、生成AIのAPI利用料（従量課金）のみ。' },
  { q: 'API料金の目安は?', a: '1回の会話で数円程度が目安。使用量に応じた従量課金。' },
  { q: '実績はあるの?', a: 'ココナラで総販売実績230件以上、評価4以上を3年以上継続中。' },
  { q: '届いたらすぐ使える?', a: 'はい！ダウンロードして起動するだけ。セットアップガイド同梱。' },
];

// FAQ2: 利用条件・著作権
const faqs2 = [
  { q: '対応OSは?', a: 'Windows / macOS対応。その他は要相談。' },
  { q: '商用利用は?', a: '個人利用OK。法人は別途ライセンス契約が必要。' },
  { q: 'キャラは用意する?', a: 'ユニティちゃん無料同梱。VRM形式対応。' },
  { q: 'ユニティちゃんのライセンスは?', a: 'UCLに基づきます。詳細はunity-chan.comへ。' },
  { q: 'プログラムの著作権は?', a: '使用権のご提供。再配布・転売は不可。' },
];

// FAQ3: サポート・機能
const faqs3 = [
  { q: 'サポート期間は?', a: '納品後30日間無料。年間サポートオプションあり。' },
  { q: 'サポート内容は?', a: 'チャットで質問OK。外部API変更による修正も無料対応。' },
  { q: '専門知識学習とは?', a: 'RAG技術。FAQ等を登録するとAIが検索・参照して回答。モデル再学習とは異なりデータ追加・更新が簡単。' },
  { q: 'カスタマイズはどこまで?', a: 'キャラ変更、プロンプト調整等対応。大規模追加は別途見積。' },
  { q: '責任範囲は?', a: '外部AIサービス起因のエラー等は責任外。クライアントプログラムのみ。' },
];

function FAQColumn({ title, faqs, startIndex }: { title: string; faqs: typeof faqs1; startIndex: number }) {
  return (
    <div className="flex-1 flex flex-col">
      <div className="text-sm font-bold text-gray-500 mb-2">{title}</div>
      <div className="flex-1 flex flex-col gap-2">
        {faqs.map(({ q, a }, index) => (
          <div key={index} className="flex-1 bg-white border-2 border-blue-100 rounded-xl px-3 py-2 flex items-start gap-2">
            <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
              {startIndex + index + 1}
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-bold text-gray-800 truncate">{q}</div>
              <div className="text-xs text-gray-500 line-clamp-2">{a}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export const FAQLancers = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <SlideWrapperLancers ref={ref} slideNumber={11} slideName="faq">
      <div className="flex flex-col h-full font-hackgen">
        {/* タイトル */}
        <div className="text-center mb-4">
          <h1 className="font-melete text-5xl font-bold tracking-wider text-blue-600 mb-1">
            FAQ
          </h1>
          <p className="text-base text-gray-500">よくある質問</p>
        </div>
        {/* コンテンツ */}
        <div className="flex-1 flex gap-4">
          <FAQColumn title="価格・信頼性" faqs={faqs1} startIndex={0} />
          <FAQColumn title="利用条件・著作権" faqs={faqs2} startIndex={5} />
          <FAQColumn title="サポート・機能" faqs={faqs3} startIndex={10} />
        </div>
      </div>
    </SlideWrapperLancers>
  );
});
FAQLancers.displayName = 'FAQLancers';
