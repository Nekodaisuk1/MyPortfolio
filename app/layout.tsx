import type { Metadata } from "next";
import { Inter, Noto_Serif_JP } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const notoSerifJP = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tanna — Portfolio",
  description:
    "ソフトウェアエンジニア志向。Webに限らず、課題を解決するプロダクトをつくることに関心があります。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${inter.variable} ${notoSerifJP.variable}`}>
        {children}
      </body>
    </html>
  );
}
