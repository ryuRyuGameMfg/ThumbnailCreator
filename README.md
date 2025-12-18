# Thumbnail Creator

プロジェクトごとにサムネイル画像を管理・生成するNext.jsアプリケーション

## 📁 プロジェクト構成

```
ThumbnailCreator/
├── projects/                      # プロジェクト管理フォルダ
│   └── [project-name]/           # プロジェクトごとのフォルダ
│       ├── config.json           # プロジェクト設定
│       └── [platform]/           # プラットフォームごとのフォルダ
│           ├── config.json       # プラットフォーム設定（サイズなど）
│           ├── slides/           # スライドコンポーネント
│           └── SlideWrapper.tsx  # スライドラッパー
├── src/
│   ├── app/
│   │   ├── page.tsx             # プロジェクト選択画面
│   │   └── [page]/page.tsx      # 各プラットフォームページ
│   └── components/              # 共有コンポーネント
├── public/                      # 静的ファイル（フォント、画像など）
└── tsconfig.json               # TypeScript設定（@projects/* パスを含む）
```

## 🚀 セットアップ

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev

# ビルド
npm run build
```

開発サーバー: http://localhost:3000

## 📋 運用ルール

### 1. 新しいプロジェクトの追加

新しいクライアントやコンセプトのサムネイルを作成する場合：

#### Step 1: プロジェクトフォルダを作成

```bash
mkdir -p projects/[project-name]
```

例: `projects/web-design-service/`

#### Step 2: プロジェクト設定ファイルを作成

`projects/[project-name]/config.json`

```json
{
  "name": "プロジェクト名",
  "description": "プロジェクトの説明",
  "createdAt": "2024-12-18",
  "platforms": ["coconala", "lancers", "custom"]
}
```

#### Step 3: プラットフォームフォルダを作成

```bash
mkdir -p projects/[project-name]/[platform]/slides
```

#### Step 4: プラットフォーム設定ファイルを作成

`projects/[project-name]/[platform]/config.json`

```json
{
  "name": "プラットフォーム名",
  "platform": "coconala",
  "width": 620,
  "height": 620,
  "createdAt": "2024-12-18",
  "description": "用途の説明"
}
```

**主要なプラットフォームのサイズ:**
- **ココナラ**: 620×620px（正方形）
- **ランサーズ**: 1220×686px（16:9横長）
- **カスタム**: 任意のサイズ

#### Step 5: スライドコンポーネントを作成

`projects/[project-name]/[platform]/slides/`

```tsx
// Example: Cover.tsx
export function Cover() {
  return (
    <div className="w-full h-full">
      {/* スライドの内容 */}
    </div>
  );
}
```

`projects/[project-name]/[platform]/slides/index.ts`

```tsx
export { Cover } from './Cover';
export { Problem } from './Problem';
// ... 他のスライドをエクスポート
```

#### Step 6: ページファイルを作成

`src/app/[platform]/page.tsx`

```tsx
'use client';

import { Cover, Problem } from '@projects/[project-name]/[platform]/slides';
// ... ページの実装
```

#### Step 7: トップページに追加

`src/app/page.tsx` の `projects` 配列に新しいプロジェクトを追加：

```tsx
const projects = [
  // ... 既存のプロジェクト
  {
    id: 'new-project',
    name: 'プロジェクト名',
    description: '説明',
    platforms: [
      {
        href: '/platform-page',
        title: 'プラットフォーム名',
        description: 'サイズ情報',
        color: 'from-green-500 to-emerald-600',
        iconBg: 'bg-green-500',
      },
    ],
  },
];
```

### 2. 既存プロジェクトの管理

#### プロジェクトの確認

```bash
# プロジェクト一覧
ls -la projects/

# 特定プロジェクトの設定確認
cat projects/[project-name]/config.json
```

#### プロジェクトのアーカイブ

完成したプロジェクトは `projects/` フォルダにそのまま保持します。
必要に応じてフォルダ名に日付を追加：

```bash
mv projects/ai-development projects/ai-development-2024
```

### 3. TypeScriptパスエイリアス

`tsconfig.json` で設定済み：

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"],
      "@projects/*": ["./projects/*"]
    }
  }
}
```

**使用例:**
```tsx
import { Cover } from '@projects/ai-development/coconala/slides';
```

### 4. スライドの一括ダウンロード

各プラットフォームページには一括ダウンロード機能があります：
- PNG形式（2x解像度）
- ZIPファイルとしてダウンロード
- ファイル名: `[番号]_[名前].png`

## 📦 現在のプロジェクト

### AI開発サービス（ai-development）

完成済みのサムネイル集

**プラットフォーム:**
- **ココナラ**: 620×620px、15スライド
- **ランサーズ**: 1220×686px、12スライド
- **カバー画像**: 18バリエーション

## 🎨 デザインガイドライン

### フォント

プロジェクトには以下のフォントが含まれています：
- **HackGen**: プログラミング用フォント（Regular, Bold）
- **Kinkakuji**: 日本語フォント
- **Melete**: 英語フォント（Light, Regular, Medium, Bold）

フォントは `public/fonts/` に配置されています。

### カラースキーム

プラットフォームごとの推奨カラー：
- **ココナラ**: グリーン系 (`from-green-500 to-emerald-600`)
- **ランサーズ**: ブルー系 (`from-blue-500 to-indigo-600`)
- **カスタム**: パープル系 (`from-purple-500 to-pink-600`)

### セーフエリア（ココナラのみ）

ココナラは上下が切れるため、重要な要素は中央に配置：
- 上部危険エリア: 上から指定px
- 下部危険エリア: 下から指定px
- セーフエリア表示ボタンで確認可能

## 🔧 技術スタック

- **Next.js 16** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS**
- **html-to-image**: スライドをPNG化
- **JSZip**: 一括ダウンロード用

## 📝 開発のヒント

### スライドコンポーネントの作成

```tsx
// 基本構造
export function MySlide() {
  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* 背景 */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800" />
      
      {/* コンテンツ */}
      <div className="relative z-10 p-8">
        <h1 className="text-4xl font-bold text-white">タイトル</h1>
        <p className="text-lg text-gray-300">説明文</p>
      </div>
    </div>
  );
}
```

### 画像の使用

```tsx
import Image from 'next/image';

<Image
  src="/path/to/image.png"
  alt="説明"
  width={400}
  height={400}
  priority  // 重要な画像の場合
/>
```

### レスポンシブデザイン

プラットフォームごとに異なるサイズに対応：

```tsx
// config.jsonからサイズを読み込む
const SLIDE_WIDTH = 620;
const SLIDE_HEIGHT = 620;

// スタイルで直接指定
<div style={{ width: SLIDE_WIDTH, height: SLIDE_HEIGHT }}>
```

## 🐛 トラブルシューティング

### インポートエラー

```bash
# TypeScript設定を再読み込み
npm run dev を再起動
```

### 画像が表示されない

- `public/` フォルダに画像があることを確認
- パスは `/` から始める（例: `/character-1.png`）

### フォントが適用されない

- `public/fonts/` にフォントファイルがあることを確認
- `globals.css` にフォントが定義されているか確認

## 📄 ライセンス

このプロジェクトはプライベート使用のみを想定しています。
フォントライセンスについては各フォントのライセンスファイルを参照してください。

---

**Last Updated**: 2024-12-18
