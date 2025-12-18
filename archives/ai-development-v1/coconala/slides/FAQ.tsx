'use client';

import SlideWrapper from '../SlideWrapper';

// ========================================
// フォント設計（ハイブリッド）
// ========================================
// タイトル: Melete（英語）
// サブタイトル・本文: HackGen（日本語）
// ========================================
// カラーレギュレーション
// ========================================
// FAQ番号バッジ: blue-600（統一）
// ボーダー: border-blue-200（統一）
// タイトルテキスト: blue-600（統一）
// ========================================

// FAQ1: 価格・信頼性（5問）
const faqs1 = [
  {
    q: 'なぜこんなに安いの?',
    a: '基盤システムが完成済みで、お客様ごとのカスタマイズのみで提供可能なため短期間・低コストを実現。また、API料金はお客様側で管理いただくため、管理コストを削減しています。'
  },
  {
    q: '月額料金は?',
    a: '買い切り型のため月額0円です。別途、生成AIのAPI利用料（従量課金）のみかかります。'
  },
  {
    q: 'API料金の目安は?',
    a: '使用するAIモデルにより異なりますが、1回の会話で数円程度が目安です。使用量に応じた従量課金のため無駄がありません。詳細は各AI提供元の料金表をご確認ください。'
  },
  {
    q: '実績はあるの?',
    a: 'ココナラで総販売実績230件以上、評価4以上を3年以上継続中。各種SNSからの直接依頼も多数いただいております。'
  },
  {
    q: '届いたらすぐ使える?',
    a: 'はい！ダウンロードして起動するだけで、すぐにご利用いただけます。詳しいセットアップガイドも同梱しています。'
  },
];

// FAQ2: 利用条件・著作権（5問）
const faqs2 = [
  {
    q: '対応OSは?',
    a: 'Windows / macOS に対応しています。その他プラットフォーム（Linux、iOS、Android等）はカスタマイズにてご相談可能です。'
  },
  {
    q: '商用利用は?',
    a: '個人利用は無料でOK。法人での商用利用は別途ライセンス契約が必要となります。詳細はお問い合わせください。'
  },
  {
    q: 'キャラは用意する?',
    a: 'ユニティちゃんを無料で同梱。VRM形式に対応しているため、お好みの3Dキャラクターもご利用可能です。'
  },
  {
    q: 'ユニティちゃんのライセンスは?',
    a: 'ユニティちゃんは「UCL（ユニティちゃんライセンス）」に基づきます。詳細は unity-chan.com をご確認ください。アプリ内フォントも各提供元のライセンスに従います。'
  },
  {
    q: 'プログラムの著作権は?',
    a: 'システムのプログラム著作権は譲渡できません。お客様には「使用権」をご提供する形となります。再配布・転売はご遠慮ください。'
  },
];

// FAQ3: サポート・機能（5問）
const faqs3 = [
  {
    q: 'サポート期間は?',
    a: '納品後30日間は無料サポート付き。年間サポートオプション（別途料金）をご購入いただくと、1年間に延長可能です。'
  },
  {
    q: 'サポート内容は?',
    a: 'テキストチャットでいつでもご質問OK。アプリの基本操作や設定方法をサポート。外部API仕様変更によるエラー発生時も無料で修正対応いたします。'
  },
  {
    q: '専門知識学習とは?',
    a: 'RAG（検索拡張生成）という技術です。FAQ・マニュアル等のテキストを登録すると、AIが回答時にその内容を検索・参照します。ファインチューニング（モデル再学習）とは異なり、データの追加・更新が簡単です。'
  },
  {
    q: 'カスタマイズはどこまで対応?',
    a: 'キャラクター変更、プロンプト調整、UI変更など幅広く対応。大規模な機能追加は別途お見積りとなります。'
  },
  {
    q: '責任範囲は?',
    a: '外部AIサービスに起因するエラー・ハルシネーション・サーバー障害は責任を負いかねます。当方の責任範囲はクライアントプログラムとなります。'
  },
];

// 共通のFAQリストコンポーネント（コンパクト版）
function FAQList({ faqs, startIndex }: { faqs: typeof faqs1; startIndex: number }) {
  return (
    <div className="flex-1 flex flex-col gap-1.5">
      {faqs.map(({ q, a }, index) => (
        <div key={index} className="flex-1 bg-white border border-blue-200 rounded-lg px-3 py-1.5 flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xs flex-shrink-0">
            {startIndex + index + 1}
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-xs font-bold text-gray-800 leading-tight">{q}</div>
            <div className="text-[10px] text-gray-500 leading-tight line-clamp-2">{a}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

// FAQ1: 価格・信頼性
export function FAQ() {
  return (
    <SlideWrapper slideNumber={11} slideName="faq1">
      <div className="flex flex-col h-full font-hackgen">
        {/* タイトル（コンパクト） */}
        <div className="text-center mb-2">
          <div className="flex items-center justify-center gap-2">
            <h1 className="font-melete text-2xl font-bold tracking-wider text-blue-600">FAQ</h1>
            <span className="text-xs font-bold text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded">1/3</span>
          </div>
          <p className="text-xs text-gray-500">価格・信頼性について</p>
        </div>
        <FAQList faqs={faqs1} startIndex={0} />
      </div>
    </SlideWrapper>
  );
}

// FAQ2: 利用条件・著作権
export function FAQ2() {
  return (
    <SlideWrapper slideNumber={12} slideName="faq2">
      <div className="flex flex-col h-full font-hackgen">
        {/* タイトル（コンパクト） */}
        <div className="text-center mb-2">
          <div className="flex items-center justify-center gap-2">
            <h1 className="font-melete text-2xl font-bold tracking-wider text-blue-600">FAQ</h1>
            <span className="text-xs font-bold text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded">2/3</span>
          </div>
          <p className="text-xs text-gray-500">利用条件・著作権について</p>
        </div>
        <FAQList faqs={faqs2} startIndex={5} />
      </div>
    </SlideWrapper>
  );
}

// FAQ3: サポート・機能
export function FAQ3() {
  return (
    <SlideWrapper slideNumber={13} slideName="faq3">
      <div className="flex flex-col h-full font-hackgen">
        {/* タイトル（コンパクト） */}
        <div className="text-center mb-2">
          <div className="flex items-center justify-center gap-2">
            <h1 className="font-melete text-2xl font-bold tracking-wider text-blue-600">FAQ</h1>
            <span className="text-xs font-bold text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded">3/3</span>
          </div>
          <p className="text-xs text-gray-500">サポート・機能について</p>
        </div>
        <FAQList faqs={faqs3} startIndex={10} />
      </div>
    </SlideWrapper>
  );
}
