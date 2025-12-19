# CLAUDE.md

Claude Code（CLI）に対するプロジェクト固有のコンテキストと指示。
プロジェクトルートに配置すると自動で読み込まれる。

## 0. プロジェクト概要

- **プロダクト/目的**：サムネイル生成Webアプリ（ローカル環境で動作、複数プラットフォーム向けサムネイルを効率的に管理・生成）
- **主要技術**：Next.js 16 / React 19 / TypeScript / Tailwind CSS 4
- **重要な制約**：
  - デザインレギュレーション（`DOCS/REGULATION.md`）を厳守
  - カラー・スタイルは定数ファイルから取得（ハードコード禁止）
  - 既存コンポーネントの活用を優先

## 1. フォルダ構成

```
ThumbnailCreator/
├── AI_PROJECT_KIT/          # AI開発運用キット（必須）
├── DOCS/                    # ドキュメント
│   ├── REGULATION.md        # 唯一の公式デザインレギュレーション
│   ├── PROJECT_RULES.md     # プロジェクト運用ルール
│   ├── LEGAL_REVIEW.md      # フォント・画像の法的レビュー
│   ├── analysis/            # スライド分析ドキュメント
│   └── fonts-source/        # フォント原本
├── archives/                # アーカイブ（旧版プロジェクト）
│   ├── ai-development-v1/
│   ├── cluster-development-v1/
│   ├── unity-text-support-v1/
│   └── unity-video-support-v1/
├── projects/                # プロジェクト別サムネイル（kebab-case）
│   ├── ai-development/      # AI開発サービス
│   ├── cluster-development/ # Clusterワールド開発
│   ├── unity-text-support/  # Unityテキストサポート
│   └── unity-video-support/ # Unityビデオサポート
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── [project]-[platform]/  # 例: ai-development-coconala
│   │   └── fonts/           # フォント設定
│   ├── components/
│   │   ├── common/          # 共通コンポーネント
│   │   └── slides/          # スライドコンポーネント
│   └── constants/
│       ├── COLORS.ts        # カラーレギュレーション定数
│       └── STYLES.ts        # スタイルレギュレーション定数
└── public/
    ├── fonts/               # Webフォント
    └── images/              # 画像ファイル（BG.png, character-*.png）
```

## 2. 重要ファイル

| ファイル | 用途 |
|----------|------|
| `DOCS/REGULATION.md` | **唯一の公式デザインレギュレーション** |
| `DOCS/PROJECT_RULES.md` | プロジェクト運用ルール |
| `src/constants/COLORS.ts` | カラー定数（必ずここからインポート） |
| `src/constants/STYLES.ts` | スタイル定数（必ずここからインポート） |
| `src/components/common/` | 共通コンポーネント（SlideTitle, CardWithIcon, StepCard, FAQItem） |

## 2-A. プロジェクト固有ドキュメント

このプロジェクトに既存のドキュメントがある場合、以下を参照すること：

| ドキュメント | パス | 内容 |
|--------------|------|------|
| デザインレギュレーション | `DOCS/REGULATION.md` | カラー・フォント・レイアウトの統一規則 |
| プロジェクト運用ルール | `DOCS/PROJECT_RULES.md` | 開発フロー・命名規則・品質基準 |
| 法的レビュー | `DOCS/LEGAL_REVIEW.md` | フォント・画像の著作権・ライセンス確認 |
| 環境構築手順 | `DOCS/README.md` | セットアップ・開発サーバー起動方法 |

> **注意**: 上記ドキュメントの内容とこのCLAUDE.mdの内容が矛盾する場合、**プロジェクト固有ドキュメントを優先**すること。

## 3. 実行コマンド

| コマンド | 用途 |
|----------|------|
| `npm ci` | 依存関係インストール |
| `npm run lint` | ESLint実行 |
| `npm run dev` | 開発サーバー起動（http://localhost:4004） |
| `npm run build` | プロダクションビルド |
| `npm start` | プロダクションサーバー起動（http://localhost:4004） |

> **ポート番号**: 開発・本番ともに **4004** を使用

## 4. 運用ルール（必読）

以下のファイルのルールに従うこと：

- `AI_PROJECT_KIT/60_禁止事項と安全運用.md` - 禁止事項・安全運用
- `AI_PROJECT_KIT/50_チェックリスト.md` - DoD・レビュー基準
- `AI_PROJECT_KIT/130_Vibe_Codingアンチパターン.md` - 避けるべき失敗例

> **キットの配置場所**: `AI_PROJECT_KIT/`

### デザインレギュレーション（DOCS/REGULATION.md）

**カラーパレット（青色系4段階のみ）**
- レベル1: sky-500/600（アクセント・強調）
- レベル2: blue-500/600（デフォルト・メイン）
- レベル3: indigo-500/600（差別化・強調）
- レベル4: violet-500/600（最終段階・強調）

**禁止事項**
- ❌ 色を直接ハードコード（例: `'from-sky-500'`）
- ❌ フォントサイズを直接指定（例: `'text-lg'`）
- ❌ 青色系以外の色（アプリカラー以外）
- ❌ 統一されていない色階調（-400など）

**必須事項**
- ✅ `COLORS.ts`から色定数をインポート
- ✅ `STYLES.ts`からスタイル定数をインポート
- ✅ `common`コンポーネントを活用

### 禁止事項（抜粋）

- 秘密情報（APIキー/個人情報/社外秘仕様）をプロンプトに貼る
- 破壊的操作（削除、DB破壊、権限変更、本番反映）をAIに実行させる
- mainへの直接コミット
- 仕様が不明確なまま"推測で仕様を確定"して実装する

### 推奨

- 1PR=1目的
- 先に回帰テストを作ってからリファクタ
- PRにはテスト結果とロールバックを書いてから出す
- AIにセルフレビューさせるが、最終判断は人間

## 5. 作業の進め方

### 原則：「計画承認なしに実装しない」

1. **調査**：現状を把握し、影響範囲を洗い出す
2. **計画提示**：実装案を2〜3案出し、比較
3. **ユーザー承認**：承認を待つ
4. **実装**：小刻みに実装→検証
5. **PR作成**：検証が通ったらPR

### 新しいスライド作成時のチェックリスト

- [ ] `DOCS/REGULATION.md` を読んだ
- [ ] `src/constants/COLORS.ts` から色定数をインポート
- [ ] `src/constants/STYLES.ts` からスタイル定数をインポート
- [ ] `src/components/common/` の共通コンポーネントを活用
- [ ] ハードコードされた色・サイズがない

## 6. ガイドライン

- 既存ファイルの編集を新規作成より優先
- フォルダ構成を維持
- 日本語で記述
- ファイル作成は必要最小限
- コンポーネント名はPascalCase、フォルダ名はkebab-case

### プラットフォームサイズ

| プラットフォーム | 幅 | 高さ | 備考 |
|------------------|-----|------|------|
| ココナラ | 1220px | 1240px | 公式推奨サイズ（上下各116px切れる） |
| ランサーズ | 1220px | 1240px | 公式推奨サイズ |
