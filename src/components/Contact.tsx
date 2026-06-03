import React from 'react';
import {
  AiFillBulb,
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
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

        <div>
          <p>
            お仕事のご相談・ご依頼は、こちらのフォームよりお気軽にご連絡ください。
            <br />
            内容を確認し次第、可能な限り早くご返信させていただきます。
          </p>
          <Link
            href={CONTACT_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-8 bg-darkblue text-white font-medium py-3 px-6 rounded hover:shadow-lg hover:bg-darkblue/75"
          >
            お問い合わせはこちら
          </Link>
          {/* SNS */}
          <div className="mt-12">
            <div className="flex flex-col gap-2">
              <h5>SNS</h5>
              <div className="flex gap-5">
                <Link
                  href="https://www.instagram.com/ta__eight"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-3xl text-darkblue"
                >
                  <AiFillInstagram />
                </Link>
                <Link
                  href="https://x.com/TatsuyaAok8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-3xl text-darkblue"
                >
                  <AiFillTwitterSquare />
                </Link>
                <Link
                  href="https://www.facebook.com/profile.php?id=61590785090840"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-3xl text-darkblue"
                >
                  <AiFillFacebook />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
