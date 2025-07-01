import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "🎨 らーめん太郎 | 遊び心いっぱいのイラストの世界",
  description: "HamCupコミュニティを中心に活動するアーティスト「らーめん太郎」の公式サイト。日々を彩る、遊び心いっぱいのイラスト作品をお楽しみください。",
  keywords: "らーめん太郎, イラスト, アート, HamCup, コミュニティ, 創作, パン愛好家, 音声配信",
  authors: [{ name: "らーめん太郎" }],
  openGraph: {
    title: "🎨 らーめん太郎 | 遊び心いっぱいのイラストの世界",
    description: "HamCupコミュニティを中心に活動するアーティスト「らーめん太郎」の公式サイト。",
    type: "website",
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
    title: "🎨 らーめん太郎 | 遊び心いっぱいのイラストの世界",
    description: "HamCupコミュニティを中心に活動するアーティスト「らーめん太郎」の公式サイト。",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}