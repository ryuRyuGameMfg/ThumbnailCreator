# カラーレギュレーション違反チェック結果

## チェック日時
2024-12-18

## 概要

すべてのスライドファイルでカラーレギュレーション違反をチェックしました。

## 主な問題点

### 1. COLORS.tsが使用されていない
- `src/constants/COLORS.ts`は存在するが、実際のスライドファイルでは使用されていない
- すべてのスライドファイルで色が直接ハードコードされている

### 2. レギュレーション違反の色の使用

#### 禁止色の使用
以下の色がレギュレーション違反として検出されました：

- **cyan色**: `cyan-400`, `cyan-500`, `cyan-600`, `cyan-50`, `cyan-200`, `cyan-300`, `cyan-700`
  - 使用箇所: `cluster-development`, `unity-text-support`, `unity-video-support`の複数スライド
  - レギュレーション: 青色系は`sky`, `blue`, `indigo`, `violet`のみ許可

- **teal色**: `teal-400`, `teal-500`
  - 使用箇所: `cluster-development/coconala/slides/UseCases.tsx`
  - レギュレーション: 青色系以外の色はアプリカラー以外では使用禁止

- **purple色**: `purple-400`, `purple-50`
  - 使用箇所: `unity-video-support/coconala/slides/Pricing.tsx`, `unity-video-support/coconala/slides/PricingOptions.tsx`
  - レギュレーション: 青色系以外の色はアプリカラー以外では使用禁止

#### 統一されていない色階調
- **sky-400**: レギュレーションでは`sky-500`/`sky-600`のみ許可
- **blue-400**: レギュレーションでは`blue-500`/`blue-600`のみ許可
- **indigo-400**: レギュレーションでは`indigo-500`/`indigo-600`のみ許可

#### バッジ色（要確認）
- **pink-400**, **yellow-400**: Pricingスライドのバッジで使用
  - これは許容範囲の可能性がありますが、レギュレーションに明記されていません

## 違反ファイル一覧

### Flowスライド
- ✅ 修正済み: すべてのFlowスライド（6ファイル）

### Deliverablesスライド
- ❌ `unity-video-support/coconala/slides/Deliverables.tsx`
  - `sky-400`, `cyan-400`, `blue-400`を使用
- ❌ `unity-text-support/coconala/slides/Deliverables.tsx`
  - `sky-400`, `cyan-400`, `blue-400`を使用
- ⚠️ `unity-text-support-v2/coconala/slides/Deliverables.tsx`
  - `sky-500`, `sky-600`, `blue-600`を使用（レギュレーション準拠だがCOLORS.ts未使用）
- ⚠️ `unity-video-support-v2/coconala/slides/Deliverables.tsx`
  - `sky-500`, `sky-600`, `blue-600`を使用（レギュレーション準拠だがCOLORS.ts未使用）
- ⚠️ `cluster-development-v2/coconala/slides/Deliverables.tsx`
  - `sky-500`, `sky-600`, `blue-600`を使用（レギュレーション準拠だがCOLORS.ts未使用）

### Featuresスライド
- ❌ `cluster-development/coconala/slides/Features.tsx`
  - `sky-400`, `cyan-400`, `blue-400`を使用
- ⚠️ `unity-text-support-v2/coconala/slides/Features.tsx`
  - `sky-500`, `sky-600`, `blue-600`, `indigo-600`を使用（レギュレーション準拠だがCOLORS.ts未使用）
- ⚠️ `unity-video-support-v2/coconala/slides/Features.tsx`
  - `sky-500`, `sky-600`, `blue-600`, `indigo-600`を使用（レギュレーション準拠だがCOLORS.ts未使用）
- ⚠️ `cluster-development-v2/coconala/slides/Features.tsx`
  - `sky-500`, `sky-600`, `blue-600`を使用（レギュレーション準拠だがCOLORS.ts未使用）

### UseCasesスライド
- ❌ `cluster-development/coconala/slides/UseCases.tsx`
  - `sky-400`, `cyan-400`, `teal-400`, `purple-400`を使用
- ⚠️ `unity-video-support-v2/coconala/slides/UseCases.tsx`
  - `sky-500`, `sky-600`, `blue-600`を使用（レギュレーション準拠だがCOLORS.ts未使用）

### Pricingスライド
- ⚠️ `unity-text-support-v2/coconala/slides/Pricing.tsx`
  - `sky-500`, `sky-600`を使用（レギュレーション準拠だがCOLORS.ts未使用）
  - `pink-400`, `yellow-400`をバッジで使用（要確認）
- ⚠️ `unity-video-support-v2/coconala/slides/Pricing.tsx`
  - `sky-500`, `sky-600`を使用（レギュレーション準拠だがCOLORS.ts未使用）
  - `yellow-400`をバッジで使用（要確認）
- ❌ `unity-video-support/coconala/slides/Pricing.tsx`
  - `purple-50`を使用

### PricingOptionsスライド
- ❌ `cluster-development/coconala/slides/PricingOptions.tsx`
  - `cyan-300`, `cyan-600`, `cyan-50`, `cyan-700`を使用
- ❌ `unity-text-support/coconala/slides/PricingOptions.tsx`
  - `cyan-50`, `cyan-200`, `cyan-700`を使用
- ❌ `unity-video-support/coconala/slides/PricingOptions.tsx`
  - `sky-400`, `cyan-400`, `purple-50`を使用
- ⚠️ `unity-text-support-v2/coconala/slides/PricingOptions.tsx`
  - `sky-600`, `blue-600`を使用（レギュレーション準拠だがCOLORS.ts未使用）
  - `sky-400`をボーダーで使用（要確認）

### FAQスライド
- ⚠️ すべてのFAQスライド
  - `sky-500`, `sky-600`, `blue-600`を使用（レギュレーション準拠だがCOLORS.ts未使用）
  - `sky-400`をボーダーで使用（要確認）

## 修正方針

### 優先度1: レギュレーション違反の修正
1. `cyan`, `teal`, `purple`色を削除し、レギュレーション準拠の色に置き換え
2. `sky-400`, `blue-400`, `indigo-400`を`sky-500`/`sky-600`などに置き換え

### 優先度2: COLORS.tsの使用
1. すべてのスライドファイルで`COLORS.ts`から定数をインポート
2. ハードコードされた色を定数に置き換え

### 優先度3: レギュレーションの明確化
1. バッジ色（`pink`, `yellow`）の使用可否をレギュレーションに明記
2. ボーダー色のレギュレーションを明確化

## 次のステップ

1. ✅ レギュレーションドキュメントにカラー管理の設計方針を追加（完了）
2. ⏳ すべてのスライドファイルでCOLORS.tsを使用するように修正
3. ⏳ レギュレーション違反の色を修正
4. ⏳ バッジ色とボーダー色のレギュレーションを明確化
