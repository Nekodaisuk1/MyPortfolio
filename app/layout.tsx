import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
