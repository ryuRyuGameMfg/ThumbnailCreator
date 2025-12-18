import type { Metadata } from "next";
import { Noto_Sans_JP, Noto_Serif_JP, Shippori_Mincho, Zen_Old_Mincho } from "next/font/google";
import "./globals.css";

// ゴシック体（既存）
const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-noto-sans-jp",
});

// 明朝体 1: Noto Serif Japanese - Google/Adobe共同開発の高品質明朝体
const notoSerifJP = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  variable: "--font-noto-serif-jp",
});

// 明朝体 2: しっぽり明朝 - 上品で美しいデザイン
const shipporiMincho = Shippori_Mincho({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-shippori-mincho",
});

// 明朝体 3: Zen Old Mincho - かな文字と漢字の調和が美しい
const zenOldMincho = Zen_Old_Mincho({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  variable: "--font-zen-old-mincho",
});

// ========================================
// ローカルフォント（HackGen, Kinkaku, Melete）は
// globals.css の @font-face で定義済み
// ========================================

export const metadata: Metadata = {
  title: "AI VTuber - ココナラ用サムネイル",
  description: "ココナラ出品用サムネイル画像生成ツール",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${notoSansJP.className} ${notoSerifJP.variable} ${shipporiMincho.variable} ${zenOldMincho.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
