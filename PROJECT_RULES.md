# プロジェクト運用ルール

このドキュメントは、Thumbnail Creatorプロジェクトの運用ルールとベストプラクティスをまとめたものです。

## 🎯 プロジェクトの目的

- **複数のクライアント/プラットフォーム向けのサムネイルを効率的に管理**
- **プラットフォームごとに異なるサイズ要件に対応**
- **過去のプロジェクトをアーカイブとして保持**
- **ローカル環境で動作するWebアプリケーション**

## 📐 ディレクトリ構造のルール

### 必須の構造

```
projects/
└── [project-name]/              # プロジェクト名（kebab-case推奨）
    ├── config.json              # 必須: プロジェクトメタデータ
    └── [platform-name]/         # プラットフォーム名
        ├── config.json          # 必須: プラットフォーム設定
        ├── slides/              # 必須: スライドコンポーネント
        │   ├── index.ts         # 必須: エクスポート定義
        │   └── [Slide].tsx      # スライドコンポーネント
        └── SlideWrapper.tsx     # オプション: カスタムラッパー
```

### 命名規則

#### プロジェクト名
- **形式**: `kebab-case`
- **例**: `ai-development`, `web-design-service`, `ecommerce-2024`
- **ルール**: 
  - 小文字とハイフンのみ
  - 数字は使用可能
  - 日本語は使用不可

#### プラットフォーム名
- **形式**: `kebab-case`
- **例**: `coconala`, `lancers`, `custom-size`
- **ルール**: プロジェクト名と同じ

#### コンポーネント名
- **形式**: `PascalCase`
- **例**: `Cover.tsx`, `Problem.tsx`, `UseCases.tsx`
- **ルール**: Reactコンポーネントの標準規則に従う

## ⚙️ 設定ファイルのルール

### プロジェクト設定 (`projects/[project]/config.json`)

**必須フィールド:**

```json
{
  "name": "プロジェクト名（日本語可）",
  "description": "プロジェクトの説明",
  "createdAt": "YYYY-MM-DD",
  "platforms": ["platform1", "platform2"]
}
```

**オプションフィールド:**

```json
{
  "status": "active" | "archived" | "draft",
  "client": "クライアント名",
  "updatedAt": "YYYY-MM-DD",
  "tags": ["tag1", "tag2"]
}
```

### プラットフォーム設定 (`projects/[project]/[platform]/config.json`)

**必須フィールド:**

```json
{
  "name": "プラットフォーム名（日本語可）",
  "platform": "プラットフォームID",
  "width": 620,
  "height": 620,
  "createdAt": "YYYY-MM-DD",
  "description": "用途の説明"
}
```

**オプションフィールド:**

```json
{
  "aspectRatio": "1:1",
  "safeArea": {
    "top": 40,
    "bottom": 40,
    "left": 0,
    "right": 0
  },
  "format": "png" | "jpg",
  "quality": 90
}
```

### 主要プラットフォームのサイズ

| プラットフォーム | 幅 | 高さ | アスペクト比 | 備考 |
|------------------|-----|------|--------------|------|
| ココナラ | 620px | 620px | 1:1 | 上下40px切れる |
| ランサーズ | 1220px | 686px | 16:9 | 横長 |
| YouTube | 1280px | 720px | 16:9 | サムネイル |
| Twitter | 1200px | 675px | 16:9 | カード |
| Instagram | 1080px | 1080px | 1:1 | 正方形 |

## 🔄 ワークフロー

### 新規プロジェクトの作成フロー

```bash
# 1. プロジェクトフォルダ作成
mkdir -p projects/my-new-project/platform-name/slides

# 2. 設定ファイル作成
# projects/my-new-project/config.json
# projects/my-new-project/platform-name/config.json

# 3. スライドコンポーネント作成
# projects/my-new-project/platform-name/slides/*.tsx

# 4. エクスポート定義
# projects/my-new-project/platform-name/slides/index.ts

# 5. ページファイル作成（必要に応じて）
# src/app/platform-name/page.tsx

# 6. トップページに追加
# src/app/page.tsx
```

### プロジェクトのアーカイブフロー

```bash
# オプション1: ステータスを変更（推奨）
# config.jsonの "status" を "archived" に変更

# オプション2: フォルダ名に日付を追加
mv projects/project-name projects/project-name-2024

# オプション3: archives/フォルダに移動
mkdir -p archives
mv projects/project-name archives/
```

### 開発サイクル

1. **デザイン**: Figmaなどでデザイン作成
2. **実装**: Reactコンポーネントとして実装
3. **プレビュー**: `npm run dev` でブラウザ確認
4. **調整**: セーフエリアなどを考慮して微調整
5. **ダウンロード**: 一括ダウンロード機能で画像生成
6. **納品/公開**: 生成した画像をプラットフォームにアップロード

## 🎨 コーディング規約

### コンポーネントの構造

```tsx
'use client'; // クライアントコンポーネントの場合

import { ComponentName } from 'library';

// タイプ定義（必要に応じて）
interface Props {
  title: string;
}

// サブコンポーネント（内部使用のみ）
function SubComponent() {
  return <div>...</div>;
}

// メインコンポーネント（エクスポート）
export function MainComponent({ title }: Props) {
  return (
    <div className="relative w-full h-full">
      {/* 実装 */}
    </div>
  );
}
```

### スタイリングのルール

1. **Tailwind CSSを使用**: インラインスタイルは最小限に
2. **レスポンシブ不要**: 固定サイズのため
3. **絶対配置を活用**: `absolute`, `relative`, `z-index`
4. **グラデーション推奨**: `bg-gradient-to-br` など

```tsx
// 良い例
<div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-blue-900" />

// 避ける例
<div style={{ background: 'linear-gradient(...)' }} />
```

### パフォーマンスの考慮

1. **画像の最適化**: Next.jsの `Image` コンポーネントを使用
2. **重い計算は避ける**: レンダリング時に毎回計算しない
3. **メモ化**: 必要に応じて `useMemo`, `useCallback` を使用

```tsx
import Image from 'next/image';

<Image
  src="/character.png"
  alt="キャラクター"
  width={400}
  height={400}
  priority  // 重要な画像
/>
```

## 📦 依存関係の管理

### 新しいパッケージの追加

```bash
# 追加前に必要性を確認
npm install package-name

# 開発用の依存関係
npm install -D package-name
```

### 推奨パッケージ

- **UI**: Tailwind CSS（標準）
- **アイコン**: lucide-react（標準）
- **画像変換**: html-to-image（標準）
- **ファイル圧縮**: jszip（標準）

### 避けるべきパッケージ

- 大きなUIライブラリ（Material-UI, Ant Design など）
- 不要なアニメーションライブラリ
- サーバー依存のライブラリ

## 🔒 セキュリティとプライバシー

### 機密情報の管理

1. **APIキーは環境変数**: `.env.local` に保存
2. **Gitにコミットしない**: `.gitignore` で除外
3. **クライアント情報**: config.jsonには最小限の情報のみ

```bash
# .env.local
NEXT_PUBLIC_API_KEY=your-key-here
```

### バージョン管理

```bash
# 機密ファイルを除外
echo ".env.local" >> .gitignore
echo "*.zip" >> .gitignore
echo "*.png" >> .gitignore  # 生成画像は除外
```

## 🧪 テストとデバッグ

### ブラウザでの確認

1. `npm run dev` でサーバー起動
2. http://localhost:3000 でプレビュー
3. 各プラットフォームページで個別確認
4. セーフエリア表示で切れる範囲を確認

### 画像生成のテスト

1. 一括ダウンロード機能で画像生成
2. ダウンロードしたZIPファイルを解凍
3. 各画像をプラットフォームにアップロードしてテスト

### よくある問題と解決法

| 問題 | 原因 | 解決法 |
|------|------|--------|
| インポートエラー | パスが正しくない | `@projects/*` を使用 |
| 画像が表示されない | public/配下にない | `/` から始まるパスを使用 |
| サイズがずれる | CSS指定が不正確 | `style={{ width, height }}` を使用 |
| フォントが適用されない | フォントが読み込まれていない | `globals.css` を確認 |

## 📊 プロジェクト管理

### プロジェクトのステータス

- **draft**: 作成中
- **active**: 進行中
- **completed**: 完成
- **archived**: アーカイブ済み

### タスク管理

プロジェクトごとにTODOを `config.json` に記載（オプション）:

```json
{
  "name": "プロジェクト名",
  "status": "active",
  "todos": [
    "表紙デザイン作成",
    "FAQ追加",
    "最終確認"
  ]
}
```

## 🚀 デプロイとバックアップ

### ローカル実行（推奨）

このプロジェクトはローカルでの使用を想定しています：

```bash
npm run dev  # 開発用
npm run build && npm start  # 本番モード
```

### バックアップ

定期的にプロジェクトフォルダをバックアップ：

```bash
# 特定プロジェクトをバックアップ
tar -czf backups/ai-development-2024-12-18.tar.gz projects/ai-development/

# 全体をバックアップ
tar -czf backups/thumbnail-creator-full-2024-12-18.tar.gz \
  projects/ src/ public/ package.json
```

## 📞 サポートとドキュメント

### ドキュメントの場所

- **README.md**: プロジェクト概要とセットアップ
- **PROJECT_RULES.md**: 運用ルール（このファイル）
- **LEGAL_REVIEW.md**: 法的レビュー
- **SLIDE_ANALYSIS.md**: スライド分析

### Claudeとの作業時の引き継ぎ

このドキュメントをClaudeに共有する際：

```
プロジェクト: Thumbnail Creator
目的: プラットフォームごとのサムネイル生成
構成: projects/ フォルダでプロジェクト管理
ルール: PROJECT_RULES.md を参照
```

## 🔄 定期的なメンテナンス

### 月次タスク

- [ ] 未使用のプロジェクトをアーカイブ
- [ ] 依存関係のアップデート確認
- [ ] バックアップの実施

### 依存関係の更新

```bash
# パッケージの更新確認
npm outdated

# 安全な更新
npm update

# メジャーバージョン更新（慎重に）
npm install package@latest
```

## 📝 変更履歴

### 2024-12-18
- プロジェクト構成を `projects/` フォルダベースに変更
- `@projects/*` パスエイリアスを追加
- AI開発サービスプロジェクトを移行
- 運用ルールドキュメント作成

---

**このドキュメントは定期的に更新してください**

