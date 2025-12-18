'use client';

import Link from 'next/link';
import { FileText, Image, FolderOpen, Download } from 'lucide-react';
import { useState } from 'react';

// プロジェクトデータ
const projects = [
  {
    id: 'ai-development',
    name: 'AI開発サービス',
    description: 'AI・Web開発サービスサムネイル',
    platforms: [
      {
        href: '/ai-development-coconala',
        title: 'ココナラ版',
        description: '620×620px 正方形 | 14スライド',
        color: 'from-cyan-400 to-blue-600',
        iconBg: 'bg-cyan-500',
      },
    ],
  },
  {
    id: 'cluster-development',
    name: 'Clusterワールド開発サービス',
    description: 'メタバース・VRワールド制作サムネイル',
    platforms: [
      {
        href: '/cluster-development-coconala',
        title: 'ココナラ版',
        description: '620×620px 正方形 | 9スライド',
        color: 'from-cyan-400 to-blue-600',
        iconBg: 'bg-cyan-500',
      },
    ],
  },
  {
    id: 'unity-text-support',
    name: 'Unityテキストサポート',
    description: '72時間質問し放題サービス',
    platforms: [
      {
        href: '/unity-text-support-coconala',
        title: 'ココナラ版',
        description: '620×620px 正方形 | 9スライド',
        color: 'from-cyan-400 to-blue-600',
        iconBg: 'bg-cyan-500',
      },
    ],
  },
  {
    id: 'unity-video-support',
    name: 'Unityビデオチャットサポート',
    description: '60分間画面共有サポート',
    platforms: [
      {
        href: '/unity-video-support-coconala',
        title: 'ココナラ版',
        description: '620×620px 正方形 | 9スライド',
        color: 'from-cyan-400 to-blue-600',
        iconBg: 'bg-cyan-500',
      },
    ],
  },
];

export default function Home() {
  const [downloadingUrl, setDownloadingUrl] = useState<string | null>(null);

  const handleDownload = (href: string) => {
    // URLに autoDownload パラメータを追加
    const downloadUrl = `${href}?autoDownload=true`;
    // 新しいタブでページを開いてダウンロードを開始
    window.open(downloadUrl, '_blank');
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex flex-col items-center p-8">
      <div className="max-w-6xl w-full">
        {/* ヘッダー */}
        <div className="text-center mb-12 pt-8">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-sky-400 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
              <Image className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-4xl font-black text-white">Thumbnail Creator</h1>
          </div>
          <p className="text-lg text-slate-400">プロジェクトを選択してください</p>
        </div>

        {/* プロジェクト一覧 */}
        {projects.map((project) => (
          <div key={project.id} className="mb-12">
            {/* プロジェクトヘッダー */}
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-700">
              <div className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center">
                <FolderOpen className="w-5 h-5 text-slate-300" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">{project.name}</h2>
                <p className="text-sm text-slate-400">{project.description}</p>
              </div>
            </div>

            {/* プラットフォーム一覧 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {project.platforms.map(({ href, title, description, color, iconBg }) => (
                <div key={href} className="group">
                  <div className="bg-slate-800/50 backdrop-blur rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-200 border border-slate-700 hover:border-slate-600 h-full">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`${iconBg} rounded-xl p-3 shadow-lg group-hover:scale-110 transition-transform`}>
                        <FileText className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white">{title}</h3>
                        <p className="text-sm text-slate-400">{description}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <Link
                        href={href}
                        className={`bg-gradient-to-r ${color} rounded-lg p-3 text-white text-center font-bold hover:scale-105 transition-transform flex items-center justify-center gap-2`}
                      >
                        <FileText className="w-4 h-4" />
                        <span>開く</span>
                      </Link>
                      <button
                        onClick={() => handleDownload(href)}
                        className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg p-3 text-white text-center font-bold hover:scale-105 transition-transform flex items-center justify-center gap-2"
                      >
                        <Download className="w-4 h-4" />
                        <span>DL</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* フッター */}
        <div className="mt-8 pt-8 border-t border-slate-700 text-center">
          <p className="text-sm text-slate-500">
            プロジェクトは <code className="bg-slate-800 px-2 py-1 rounded text-slate-400">projects/</code> フォルダで管理されています
          </p>
        </div>
      </div>
    </main>
  );
}
