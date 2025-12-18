# Thumbnail Creator

プラットフォームごとのサムネイル画像を管理・生成するNext.jsアプリケーションです。

## クイックスタート

```bash
npm install
npm run dev
```

http://localhost:4004 でアプリケーションが起動します。

## プロジェクト構造

- `projects/[project-name]/` - プロジェクトごとのフォルダ
- `projects/[project-name]/[platform]/` - プラットフォーム別フォルダ
- `projects/[project-name]/[platform]/slides/` - スライドコンポーネント
- `src/app/` - Next.js App Router
- `docs/` - ドキュメント類

詳細は `docs/PROJECT_RULES.md` を参照してください。

## 現在のプロジェクト

- **Clusterワールド開発サービス** (`cluster-development/`)
- **Unityテキストサポート** (`unity-text-support/`)
- **Unityビデオチャットサポート** (`unity-video-support/`)
- **AI VTuber開発サービス** (`ai-development/`)

## 技術スタック

- Next.js 16 + TypeScript
- Tailwind CSS
- html-to-image (画像生成)
- JSZip (一括ダウンロード)

