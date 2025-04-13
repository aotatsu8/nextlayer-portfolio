import type { Metadata } from "next";
import { M_PLUS_1p } from "next/font/google";
import "../styles/globals.css";

const m_PLUS_1p = M_PLUS_1p({
  subsets: ["latin"],
  // フォントの設定regular　midium bold　参考　→ https://fonts.google.com/?lang=ja_Jpan
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "ORIGIN.Doc",
  description: "ORIGIN.DocのPORTFOLIO",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${m_PLUS_1p.className}`}>{children}</body>
    </html>
  );
}
