import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import '../styles/animations.css';

export function Hero() {
  return (
    <section className="w-full lg:h-screen h-fit bg-whitesmoke relative px-[40px] py-10 max-xs:px-[20px]">
      <div className="max-w-7xl flex items-center justify-between h-full mx-auto max-md:flex-col max-md:gap-10 max-md:text-center">
        {/* 左 */}
        <div className="flex flex-col gap-5 z-40 max-md:order-2">
          <div className="text-4xl lg:text-6xl">
            <h1 className="font-medium">Leave system</h1>
            <span className="font-bold text-cadetblue">Development</span>
            <h2>to NextLayer</h2>
            <p className="mt-5 text-xl">
              フロントエンドから簡易的なバックエンドまで、一貫して対応可能です。 ・React /
              Next.jsによるSPA / SSR開発 ・TypeScriptでの堅牢なUIコンポーネント設計
              ・ExpressやFirebaseを使った軽量なAPI構築 ・スクラムでのチーム開発経験あり
              スピード感を保ちながら、読みやすく保守しやすいコードを意識して開発しています。
              コミュニケーションを取りながら進めるのが得意なので、長期的に信頼関係を築ける方とご一緒できたら嬉しいです！
              お気軽にお問い合わせください！
            </p>
          </div>
          <div className="flex gap-4 max-md:justify-center">
            <Link href={'#projects'}>
              <button className="bg-darkblue text-white px-2 rounded-md py-1 hover:bg-darkblue/75 cursor-pointer lg:px-4">
                開発実績
              </button>
            </Link>
            <Link href={'#contact'}>
              <button className="bg-darkblue text-white px-2 rounded-md py-1 hover:bg-darkblue/75 cursor-pointerlg:px-4">
                コンタクト
              </button>
            </Link>
          </div>
        </div>
        {/* 右 */}
        <Image
          src={'/assets/heroimage.png'}
          width={400}
          height={400}
          alt="heroImage"
          className="z-10 rounded-full"
        />
      </div>
      {/* animationcss */}
      <ul className="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </section>
  );
}
