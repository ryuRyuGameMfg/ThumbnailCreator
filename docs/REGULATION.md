# デザインレギュレーション完全版

**このドキュメントが唯一の公式レギュレーションです。他のドキュメントやコメントは参照用です。**

最終更新: 2024-12-18

---

## 📋 目次

1. [基本方針](#基本方針)
2. [カラーレギュレーション](#カラーレギュレーション)
3. [スタイルレギュレーション](#スタイルレギュレーション)
4. [共通コンポーネント](#共通コンポーネント)
5. [実装例](#実装例)
6. [運用ルール](#運用ルール)

---

## 基本方針

### 設計原則
1. **一元管理**: すべての色・スタイルは定数ファイルから取得
2. **一貫性**: すべてのスライドで統一されたデザイン
3. **メンテナンス性**: 定数ファイルの修正だけで全体に反映
4. **エラー防止**: ハードコードを禁止

### ファイル構成
```
src/
├── constants/
│   ├── COLORS.ts         # カラーレギュレーション定数（実装）
│   └── STYLES.ts         # スタイルレギュレーション定数（実装）
└── components/
    └── common/           # 共通コンポーネント
        ├── SlideTitle.tsx
        ├── CardWithIcon.tsx
        ├── StepCard.tsx
        ├── FAQItem.tsx
        └── index.ts
```

---

## カラーレギュレーション

### 基本方針
**すべてのスライドで`src/constants/COLORS.ts`から定数をインポートして使用する**

### カラーパレット（青色系4段階のみ）

| レベル | 明るさ | LIGHT (500) | DARK (600) | 用途 |
|--------|--------|-------------|------------|------|
| レベル1 | 最も明るい | `sky-500` (#0EA5E9) | `sky-600` (#0284C7) | アクセント・強調 |
| レベル2 | 中間・メイン | `blue-500` (#3B82F6) | `blue-600` (#2563EB) | デフォルト・メイン |
| レベル3 | やや暗い | `indigo-500` (#6366F1) | `indigo-600` (#4F46E5) | 差別化・強調 |
| レベル4 | 最も暗い | `violet-500` (#8B5CF6) | `violet-600` (#7C3AED) | 最終段階・強調 |

### スライドタイプ別の色定義

#### Flowスライド（サービスの流れ）
- **定数**: `FLOW_COLORS`
- **色**: sky-500, blue-500, indigo-500, violet-500（4ステップ）
- **使用例**:
```tsx
import { FLOW_COLORS } from '@/constants/COLORS';
gradient: FLOW_COLORS[0]  // sky-500
gradient: FLOW_COLORS[1]  // blue-500
gradient: FLOW_COLORS[2]  // indigo-500
gradient: FLOW_COLORS[3]  // violet-500
```

#### Targetスライド（ターゲット）
- **定数**: `TARGET_COLORS`
- **色**: sky-600, blue-600, indigo-600, violet-600（4項目）

#### Deliverablesスライド（納品内容）
- **定数**: `DELIVERABLES_COLORS`
- **色**: sky-500, blue-500, indigo-500, violet-500, sky-600, blue-600（6項目・循環）

#### Pricingスライド（料金プラン）
- **定数**: `PRICING_COLORS`
- **色**: sky-600, blue-600, indigo-600（3プラン）

#### Featuresスライド（特徴）
- **定数**: `FEATURES_COLORS`
- **色**: Flowと同じ（sky-500, blue-500, indigo-500, violet-500）

#### UseCasesスライド（ユースケース）
- **定数**: `USECASES_COLORS`
- **色**: Flowと同じ（sky-500, blue-500, indigo-500, violet-500）

### 共通グラデーション

#### 基本グラデーション（デフォルト）
- **定数**: `DEFAULT_GRADIENT`
- **指定**: `from-sky-500 to-blue-600`
- **用途**: アイコン背景、カード背景など汎用的な箇所

#### 段階的グラデーション（差別化用）
- **定数**: `STEP_GRADIENTS`
- **パターン1（明るい）**: `from-sky-500 to-sky-600`
- **パターン2（中間）**: `from-sky-600 to-blue-600`
- **パターン3（暗い）**: `from-blue-600 to-indigo-600`

### アプリ別カラー（アプリ専用スライド用）
- **定数**: `APP_COLORS`
- **ライブ配信**: `rose-600` (#E11D48)
- **音声対話**: `teal-600` (#0D9488)
- **動画生成**: `indigo-600` (#4F46E5)
- **チャット**: `amber-600` (#D97706)

### 禁止色

❌ **青色系以外の色**（アプリカラー以外）
- `cyan`, `teal`, `purple`, `pink`, `green`, `red`, `yellow`, `orange`

❌ **統一されていない色階調**
- `sky-400`, `blue-400`, `indigo-400`, `violet-400`など
- 許可されているのは`-500`と`-600`のみ

❌ **基本カラーパレット4段階以外の青色系**
- `azure`, `cyan`など

---

## スタイルレギュレーション

### 基本方針
**すべてのスライドで`src/constants/STYLES.ts`から定数をインポートして使用する**

### フォント設定

#### フォントファミリー
| 用途 | 定数 | フォント |
|-----|-----|---------|
| 英語タイトル | `FONTS.ENGLISH` | Melete |
| 日本語本文 | `FONTS.JAPANESE` | HackGen |

#### フォントサイズ
| 用途 | 定数 | サイズ | 使用例 |
|-----|-----|-------|--------|
| タイトル（英語） | `FONT_SIZES.TITLE_ENGLISH` | 36px | スライドタイトル |
| タイトル（英語・大） | `FONT_SIZES.TITLE_ENGLISH_LARGE` | 48px | 大きなタイトル |
| サブタイトル（日本語） | `FONT_SIZES.SUBTITLE_JAPANESE` | 14px | タイトル下の説明 |
| サブタイトル（日本語・小） | `FONT_SIZES.SUBTITLE_JAPANESE_SMALL` | 12px | 小さなサブタイトル |
| 見出し（大） | `FONT_SIZES.HEADING_LARGE` | 20px | カードタイトル |
| 見出し（中） | `FONT_SIZES.HEADING_MEDIUM` | 18px | 中見出し |
| 見出し（小） | `FONT_SIZES.HEADING_SMALL` | 16px | 小見出し |
| 本文（大） | `FONT_SIZES.BODY_LARGE` | 16px | 本文 |
| 本文（中） | `FONT_SIZES.BODY_MEDIUM` | 14px | 本文（標準） |
| 本文（小） | `FONT_SIZES.BODY_SMALL` | 12px | 小さな本文 |
| 本文（極小） | `FONT_SIZES.BODY_TINY` | 10px | 極小テキスト |
| 価格（大） | `FONT_SIZES.PRICE_LARGE` | 24px | 価格表示 |
| 価格（中） | `FONT_SIZES.PRICE_MEDIUM` | 20px | 価格表示 |
| 価格（小） | `FONT_SIZES.PRICE_SMALL` | 18px | 価格表示 |

#### フォントウェイト
| 用途 | 定数 | ウェイト |
|-----|-----|---------|
| 極太 | `FONT_WEIGHTS.BLACK` | 900 |
| 太字 | `FONT_WEIGHTS.BOLD` | 700 |
| 半太字 | `FONT_WEIGHTS.SEMIBOLD` | 600 |
| 中太 | `FONT_WEIGHTS.MEDIUM` | 500 |
| 通常 | `FONT_WEIGHTS.NORMAL` | 400 |

### スペーシング

#### 余白
| 用途 | 定数 | Tailwindクラス | サイズ |
|-----|-----|---------------|-------|
| タイトルとコンテンツの間 | `SPACING.TITLE_CONTENT_GAP` | mb-4 | 16px |
| タイトルとコンテンツの間（小） | `SPACING.TITLE_CONTENT_GAP_SMALL` | mb-3 | 12px |
| コンテンツ間の余白（大） | `SPACING.CONTENT_GAP_LARGE` | gap-4 | 16px |
| コンテンツ間の余白（中） | `SPACING.CONTENT_GAP_MEDIUM` | gap-3 | 12px |
| コンテンツ間の余白（小） | `SPACING.CONTENT_GAP_SMALL` | gap-2 | 8px |
| コンテンツ間の余白（極小） | `SPACING.CONTENT_GAP_TINY` | gap-1 | 4px |

#### パディング
| 用途 | 定数 | Tailwindクラス | サイズ |
|-----|-----|---------------|-------|
| カードパディング（大） | `SPACING.CARD_PADDING_LARGE` | p-4 | 16px |
| カードパディング（中） | `SPACING.CARD_PADDING_MEDIUM` | p-3 | 12px |
| カードパディング（小） | `SPACING.CARD_PADDING_SMALL` | p-2 | 8px |

### サイズ

#### アイコンサイズ
| 用途 | 定数 | Tailwindクラス | サイズ |
|-----|-----|---------------|-------|
| アイコン（大） | `SIZES.ICON_LARGE` | w-8 h-8 | 32px |
| アイコン（中） | `SIZES.ICON_MEDIUM` | w-6 h-6 | 24px |
| アイコン（小） | `SIZES.ICON_SMALL` | w-5 h-5 | 20px |
| アイコンボックス（大） | `SIZES.ICON_BOX_LARGE` | w-16 h-16 | 64px |
| アイコンボックス（中） | `SIZES.ICON_BOX_MEDIUM` | w-14 h-14 | 56px |
| アイコンボックス（小） | `SIZES.ICON_BOX_SMALL` | w-12 h-12 | 48px |

### ボーダー・角丸
| 用途 | 定数 | Tailwindクラス |
|-----|-----|---------------|
| 角丸（大） | `BORDERS.RADIUS_LARGE` | rounded-2xl |
| 角丸（中） | `BORDERS.RADIUS_MEDIUM` | rounded-xl |
| 角丸（小） | `BORDERS.RADIUS_SMALL` | rounded-lg |
| 円形 | `BORDERS.RADIUS_FULL` | rounded-full |
| ボーダー色（薄） | `BORDERS.BORDER_COLOR_LIGHT` | border-sky-200 |
| ボーダー色（中） | `BORDERS.BORDER_COLOR_MEDIUM` | border-blue-300 |

### テキストカラー
| 用途 | 定数 | Tailwindクラス |
|-----|-----|---------------|
| タイトル（プライマリ） | `TEXT_COLORS.TITLE_PRIMARY` | text-sky-600 |
| タイトル（セカンダリ） | `TEXT_COLORS.TITLE_SECONDARY` | text-blue-600 |
| 白色 | `TEXT_COLORS.WHITE` | text-white |
| 白色（薄） | `TEXT_COLORS.WHITE_HIGH` | text-white/90 |
| グレー（濃） | `TEXT_COLORS.GRAY_DARK` | text-gray-800 |
| グレー（標準） | `TEXT_COLORS.GRAY_DEFAULT` | text-gray-600 |
| グレー（薄） | `TEXT_COLORS.GRAY_LIGHT` | text-gray-500 |

---

## 共通コンポーネント

すべてのコンポーネントは`src/components/common/`に配置されています。

### SlideTitle
スライドタイトルコンポーネント

```tsx
import { SlideTitle } from '@/components/common';

<SlideTitle 
  english="FLOW" 
  japanese="サービスの流れ" 
  variant="default" // または "large"
/>
```

### CardWithIcon
アイコン付きカードコンポーネント（Flow, Features, UseCases, Deliverables用）

```tsx
import { CardWithIcon } from '@/components/common';

<CardWithIcon
  icon={<Icon className="w-8 h-8 text-white" />}
  title="タイトル"
  description="説明文"
  gradient={DELIVERABLES_COLORS[0]}
  iconSize="medium"    // "small" | "medium" | "large"
  iconBoxSize="medium" // "small" | "medium" | "large"
/>
```

### StepCard
ステップカード（2x2グリッド用、Flow専用）

```tsx
import { StepCard } from '@/components/common';

<StepCard
  number="1"
  icon={<Icon className="w-6 h-6 text-white" />}
  title="ステップタイトル"
  description="説明文"
  gradient={FLOW_COLORS[0]}
/>
```

### FAQItem
FAQ項目コンポーネント

```tsx
import { FAQItem } from '@/components/common';

<FAQItem
  question="質問文"
  answer="回答文"
/>
```

---

## 実装例

### Flowスライド（完全版）

```tsx
'use client';

import SlideWrapper from '../SlideWrapper';
import { MessageCircle, ShoppingCart, MessageSquare, CheckCircle } from 'lucide-react';
import { PinkTitleV2 } from '@/components/PinkTitleV2';
import { StepCard } from '@/components/common';
import { FLOW_COLORS } from '@/constants/COLORS';
import { FONT_SIZES, TEXT_COLORS, FONTS, SPACING } from '@/constants/STYLES';

export function Flow() {
  const steps = [
    {
      number: '1',
      icon: <MessageCircle className="w-6 h-6 text-white" />,
      title: '無料相談',
      description: '見積もり相談',
      gradient: FLOW_COLORS[0],
    },
    {
      number: '2',
      icon: <ShoppingCart className="w-6 h-6 text-white" />,
      title: 'ご購入',
      description: '手続き完了',
      gradient: FLOW_COLORS[1],
    },
    {
      number: '3',
      icon: <MessageSquare className="w-6 h-6 text-white" />,
      title: '開始',
      description: '72時間サポート',
      gradient: FLOW_COLORS[2],
    },
    {
      number: '4',
      icon: <CheckCircle className="w-6 h-6 text-white" />,
      title: '完了',
      description: 'レビュー後終了',
      gradient: FLOW_COLORS[3],
    },
  ];

  return (
    <SlideWrapper slideNumber={6} slideName="flow">
      <div className={`flex flex-col h-full ${FONTS.JAPANESE}`}>
        <PinkTitleV2 english="FLOW" japanese="サービスの流れ" />
        
        <div className={`flex-1 grid grid-cols-2 ${SPACING.CONTENT_GAP_LARGE}`}>
          {steps.map((step, index) => (
            <StepCard key={index} {...step} />
          ))}
        </div>

        <div className={`${SPACING.SECTION_MARGIN_TOP} text-center`}>
          <p className={`${FONT_SIZES.BODY_SMALL} ${TEXT_COLORS.WHITE}`}>
            ご不安な方は無料相談からOK
          </p>
        </div>
      </div>
    </SlideWrapper>
  );
}
```

---

## 運用ルール

### 新しいスライドを作成する際
1. ✅ `COLORS.ts`から色定数をインポート
2. ✅ `STYLES.ts`からスタイル定数をインポート
3. ✅ `common`コンポーネントを活用
4. ❌ ハードコードを避ける

### レギュレーション変更時
1. `COLORS.ts`または`STYLES.ts`のみを修正
2. 全スライドに自動的に反映される
3. デザインの一貫性が保たれる

### コードレビューのチェックポイント
- [ ] 色はすべて`COLORS.ts`から取得しているか
- [ ] フォントサイズはすべて`STYLES.ts`から取得しているか
- [ ] 共通コンポーネントを活用しているか
- [ ] ハードコードされた色・サイズがないか

### 禁止事項
- ❌ 色を直接ハードコード（例: `'from-sky-500 to-blue-600'`）
- ❌ フォントサイズを直接ハードコード（例: `'text-lg'`）
- ❌ レギュレーションにない色の使用
- ❌ 統一されていない色階調の使用

---

## 参照ファイル

### 実装ファイル
- **カラー定数**: `src/constants/COLORS.ts`
- **スタイル定数**: `src/constants/STYLES.ts`
- **共通コンポーネント**: `src/components/common/`

### 関連ドキュメント
- **プロジェクト運用ルール**: `docs/PROJECT_RULES.md`
- **実施報告書**: `docs/REGULATION_UNIFICATION_REPORT.md`
- **違反チェック結果**: `docs/COLOR_REGULATION_AUDIT.md`

---

**このドキュメントが唯一の公式レギュレーションです。**
