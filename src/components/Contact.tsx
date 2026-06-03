import React from 'react';
import {
  AiFillBulb,
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
  AiOutlineMail,
  AiOutlineArrowRight,
} from 'react-icons/ai';
import Link from 'next/link';

// お問い合わせ用 Google フォームのURL
const CONTACT_FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSe8wJim1jQZerabSgHWnonoN-nEfYoF_as5PBrLpUS8dbiSYw/viewform';

export function Contact() {
  return (
    <section
      className="w-full h-fit px-[40px] md:py-20 lg:pb-40 lg:pt-10 py-10 max-xs:px-[20px] relative bg-whitesmoke"
      id="contact"
    >
      <div className="max-w-7xl mx-auto">
        {/* セクションタイトル */}
        <div className="inline-block">
          <p className="bg-cadetblue text-white text-sm font-medium py-3 px-5 rounded-full flex items-center gap-2 mb-10">
            <span>
              <AiFillBulb />
            </span>
            コンタクト
          </p>
        </div>

        {/* 2カラムレイアウト */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-4 items-stretch">
          {/* 左：メッセージ + SNS */}
          <div className="flex flex-col gap-8">
            <p className="text-gray-700 leading-8">
              フロントエンド開発や既存サービスの改修など、Webまわりのお仕事全般についてご相談いただけます。
              規模やスケジュールが未定の段階でも、お気軽にお声がけください。
            </p>

            <div>
              <h4 className="text-base font-medium text-darkblue mb-4">こんなご相談を歓迎しています</h4>
              <ul className="flex flex-col gap-3 text-gray-700 leading-8">
                <li>新規サイト・Webアプリの開発</li>
                <li>React / Next.js を用いた機能追加・改修</li>
                <li>UI / UX の見直しや改善</li>
              </ul>
            </div>

            <p className="text-gray-700 leading-8">
              まずはお話を伺い、目的やご予算感を整理したうえで、進め方をご提案します。
              リモートでの打ち合わせにも対応しています。
            </p>

            {/* SNS */}
            <div className="mt-auto pt-10">
              <h5 className="mb-2">SNS</h5>
              <div className="flex gap-5">
                <Link
                  href="https://www.instagram.com/ta__eight"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-3xl text-darkblue transition-transform hover:scale-110"
                >
                  <AiFillInstagram />
                </Link>
                <Link
                  href="https://x.com/TatsuyaAok8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-3xl text-darkblue transition-transform hover:scale-110"
                >
                  <AiFillTwitterSquare />
                </Link>
                <Link
                  href="https://www.facebook.com/profile.php?id=61590785090840"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-3xl text-darkblue transition-transform hover:scale-110"
                >
                  <AiFillFacebook />
                </Link>
              </div>
            </div>
          </div>

          {/* 右：CTAカード */}
          <div className="flex flex-col items-center justify-center text-center bg-white rounded-2xl shadow-sm p-10 md:p-12">
            <span className="flex items-center justify-center w-16 h-16 rounded-full bg-cadetblue/10 text-cadetblue text-3xl mb-6">
              <AiOutlineMail />
            </span>
            <h3 className="text-xl font-bold text-darkblue mb-3">お気軽にご連絡ください</h3>
            <div className="mb-8 max-w-xs mx-auto space-y-4 text-gray-600">
              <p className="leading-8">
                お仕事のご相談・ご依頼は、
                <br />
                こちらのフォームよりお気軽にご連絡ください。
              </p>
              <p className="text-sm leading-7 text-gray-500 border-t border-gray-200 pt-4">
                内容を確認し次第、
                <br />
                可能な限り早くご返信させていただきます。
              </p>
            </div>
            <Link
              href={CONTACT_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-darkblue text-white font-medium py-4 px-10 rounded-full text-lg shadow-md transition-all hover:shadow-lg hover:bg-darkblue/85 hover:gap-3"
            >
              お問い合わせはこちら
              <AiOutlineArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
