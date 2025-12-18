# Thumbnail Creator

Next.jsベースのサムネイル画像生成アプリケーション。プラットフォームごとのサムネイルを管理・生成できます。

## プロジェクト概要

このアプリケーションは、ココナラやランサーズなどのプラットフォーム向けのサムネイル画像を効率的に作成・管理するために開発されました。

### 主な機能

- プラットフォームごとのサムネイル生成（ココナラ: 620×620px、ランサーズ: 1220×686px など）
- プロジェクトベースの管理システム
- スライドコンポーネントによる柔軟なデザイン
- 画像の一括ダウンロード（ZIP形式）
- セーフエリア表示機能

## プロジェクト構成

```
ThumbnailCreator/
├── projects/              # プロジェクトごとのフォルダ
│   ├── cluster-development/
│   ├── unity-text-support/
│   ├── unity-video-support/
│   └── ai-development/
├── src/
│   ├── app/              # Next.js App Router
│   └── components/       # 共通コンポーネント
├── public/
│   └── fonts/           # Webフォント
└── docs/                # ドキュメント
    ├── fonts-source/    # フォントソースファイル
    └── analysis/        # 分析ドキュメント
```

## 技術スタック

- **フレームワーク**: Next.js 15 (App Router)
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS
- **画像生成**: html-to-image
- **アーカイブ**: JSZip
- **アイコン**: lucide-react

## フォント

- **英語タイトル**: Melete
- **日本語本文**: HackGen

## 開発

```bash
# 依存関係のインストール
npm install

# 開発サーバー起動
npm run dev

# ビルド
npm run build

# 本番サーバー起動
npm start
```

## プロジェクトの追加

新しいプロジェクトを追加する場合は、`projects/`ディレクトリに新しいフォルダを作成し、`config.json`とプラットフォームごとのフォルダ（`coconala/`, `lancers/`など）を配置してください。

詳細は`PROJECT_RULES.md`を参照してください。

## ライセンス

プロジェクト固有のライセンス情報は各フォントのライセンスファイルを参照してください。
