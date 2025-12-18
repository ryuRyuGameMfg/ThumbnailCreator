'use client';

import Link from 'next/link';
import { FileText, Image, FolderOpen, Settings } from 'lucide-react';

// プロジェクトデータ
const projects = [
  {
    id: 'ai-development',
    name: 'AI開発サービス',
    description: 'ココナラ・ランサーズ出品用サムネイル',
    platforms: [
      {
        href: '/coconala',
        title: 'ココナラ版',
        description: '620×620px 正方形',
        color: 'from-green-500 to-emerald-600',
        iconBg: 'bg-green-500',
      },
      {
        href: '/lancers',
        title: 'ランサーズ版',
        description: '1220×686px 16:9横長',
        color: 'from-blue-500 to-indigo-600',
        iconBg: 'bg-blue-500',
      },
    ],
  },
  {
    id: 'cluster-development',
    name: 'Clusterワールド開発サービス',
    description: 'メタバース・VRワールド制作サムネイル',
    platforms: [
      {
        href: '/cluster-coconala',
        title: 'ココナラ版（オリジナル）',
        description: '620×620px 正方形 | 9スライド',
        color: 'from-sky-400 to-blue-500',
        iconBg: 'bg-sky-500',
      },
      {
        href: '/cluster-v2-coconala',
        title: 'ココナラ版 v2 (新背景)',
        description: '620×620px | サイバー背景',
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
        href: '/unity-text-coconala',
        title: 'ココナラ版（オリジナル）',
        description: '620×620px 正方形 | 9スライド',
        color: 'from-orange-400 to-red-500',
        iconBg: 'bg-orange-500',
      },
      {
        href: '/unity-text-v2-coconala',
        title: 'ココナラ版 v2 (新背景)',
        description: '620×620px | サイバー背景',
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
        href: '/unity-video-coconala',
        title: 'ココナラ版（オリジナル）',
        description: '620×620px 正方形 | 9スライド',
        color: 'from-purple-400 to-pink-500',
        iconBg: 'bg-purple-500',
      },
      {
        href: '/unity-video-v2-coconala',
        title: 'ココナラ版 v2 (新背景)',
        description: '620×620px | サイバー背景',
        color: 'from-cyan-400 to-blue-600',
        iconBg: 'bg-cyan-500',
      },
    ],
  },
];

export default function Home() {
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
                <Link
                  key={href}
                  href={href}
                  className="group"
                >
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
                    <div className={`bg-gradient-to-r ${color} rounded-lg p-3 text-white text-center font-bold group-hover:scale-105 transition-transform`}>
                      開く →
                    </div>
                  </div>
                </Link>
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
