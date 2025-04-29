import type { Metadata } from 'next';
import { M_PLUS_1p } from 'next/font/google';
import '../styles/globals.css';
import { SideMenu } from '@/components/SideMenu';
import { TopMenu } from '@/components/TopMenu';
import { NuqsAdapter } from 'nuqs/adapters/next/app';

const m_PLUS_1p = M_PLUS_1p({
  subsets: ['latin'],
  // フォントの設定regular　midium bold　参考　→ https://fonts.google.com/?lang=ja_Jpan
  weight: ['400', '500', '700'],
});

export const metadata: Metadata = {
  title: 'NextLayer',
  description: 'NextLayerのPORTFOLIO',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${m_PLUS_1p.className}`}>
        <main className="flex flex-row">
          <SideMenu />
          <section className="pl-[300px] max-lg:pl-[146px] max-md:pl-0 w-full min-h-screen overflow-hidden">
            <TopMenu />
            {children}
          </section>
        </main>
      </body>
    </html>
  );
}
