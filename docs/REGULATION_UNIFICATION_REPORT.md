# レギュレーション統一化の完了報告

## 実施日
2024-12-18

## 実施内容

### 1. スタイル定数ファイルの作成 ✅
- **ファイル**: `src/constants/STYLES.ts`
- **内容**: 
  - フォントサイズ、フォントウェイト
  - スペーシング（余白、パディング、マージン）
  - サイズ（アイコン、ボックス）
  - ボーダー、角丸、シャドウ
  - 透明度、テキストカラー
  - レイアウト、アニメーション
  - 組み合わせスタイル

### 2. 共通コンポーネントの作成 ✅
- **フォルダ**: `src/components/common/`
- **コンポーネント**:
  - `SlideTitle.tsx`: 統一されたスライドタイトル
  - `CardWithIcon.tsx`: アイコン付きカード
  - `StepCard.tsx`: ステップカード（2x2グリッド用）
  - `FAQItem.tsx`: FAQ項目

### 3. レギュレーション違反の修正 ✅
- **スクリプト**: `scripts/fix-color-regulations.sh`
- **修正内容**:
  - `cyan`色 → `blue`/`sky`色に置換
  - `teal`色 → `indigo`/`blue`色に置換
  - `purple`色 → `violet`色に置換
  - `sky-400`, `blue-400` → `sky-500`, `blue-500`に置換

- **修正対象ファイル数**: 63ファイル

### 4. カラー管理の設計方針をドキュメントに追加 ✅
- **ファイル**: `docs/PROJECT_RULES.md`
- **追加内容**:
  - カラー定数の使用（必須）
  - カラー定数の構造
  - レギュレーション違反の禁止

## 新しい設計構成

### フォルダ構成

```
src/
├── constants/
│   ├── COLORS.ts         # カラーレギュレーション定数
│   └── STYLES.ts         # スタイルレギュレーション定数
├── components/
│   ├── common/           # 共通コンポーネント
│   │   ├── SlideTitle.tsx
│   │   ├── CardWithIcon.tsx
│   │   ├── StepCard.tsx
│   │   ├── FAQItem.tsx
│   │   └── index.ts
│   └── ...
└── ...
```

### 使用方法

#### カラー定数の使用

```tsx
import { FLOW_COLORS, BLUE_PALETTE } from '@/constants/COLORS';

export function Flow() {
  const steps = [
    { gradient: FLOW_COLORS[0] },  // sky-500
    { gradient: FLOW_COLORS[1] },  // blue-500
    { gradient: FLOW_COLORS[2] },  // indigo-500
    { gradient: FLOW_COLORS[3] },  // violet-500
  ];
}
```

#### スタイル定数の使用

```tsx
import { FONTS, FONT_SIZES, SPACING } from '@/constants/STYLES';

<div className={`${FONTS.JAPANESE} ${FONT_SIZES.BODY_MEDIUM} ${SPACING.CONTENT_GAP_LARGE}`}>
  コンテンツ
</div>
```

#### 共通コンポーネントの使用

```tsx
import { SlideTitle, StepCard } from '@/components/common';

<SlideTitle english="FLOW" japanese="サービスの流れ" />
<StepCard number="1" icon={icon} title="タイトル" description="説明" gradient={FLOW_COLORS[0]} />
```

## レギュレーション

### 色のレギュレーション
- **許可**: `sky-500`, `sky-600`, `blue-500`, `blue-600`, `indigo-500`, `indigo-600`, `violet-500`, `violet-600`
- **禁止**: `cyan`, `teal`, `purple`, `pink`（アプリカラー除く）, `sky-400`, `blue-400`など

### フォントのレギュレーション
- **英語タイトル**: Melete, 36px (デフォルト) / 48px (大)
- **日本語サブタイトル**: HackGen, 14px (デフォルト) / 12px (小)
- **本文**: HackGen, 16px / 14px / 12px / 10px

### スペーシングのレギュレーション
- **タイトルとコンテンツの間**: `mb-4` (デフォルト) / `mb-3` (小)
- **コンテンツ間の余白**: `gap-4` (大) / `gap-3` (中) / `gap-2` (小) / `gap-1` (極小)

## 今後の運用

### 新しいスライドを作成する際
1. `COLORS.ts`から色定数をインポート
2. `STYLES.ts`からスタイル定数をインポート
3. `common`コンポーネントを活用
4. ハードコードを避ける

### レギュレーション変更時
1. `COLORS.ts`または`STYLES.ts`を修正
2. 全スライドに自動的に反映される

### デザイン崩れを防ぐために
- 色は必ず`COLORS.ts`から取得
- フォントサイズは必ず`STYLES.ts`から取得
- 共通コンポーネントを活用してコードの一貫性を保つ
