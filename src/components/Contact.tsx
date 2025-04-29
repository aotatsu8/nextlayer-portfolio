'use client';
import React, { useRef, useState } from 'react';
import {
  AiFillBulb,
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
  AiFillYoutube,
} from 'react-icons/ai';
import emailjs from '@emailjs/browser';
import Link from 'next/link';

export function Contact() {
  const form = useRef<HTMLFormElement>(null);

  // 各入力フィールドの状態を管理
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  // アラートの表示状態を管理
  const [showAlert, setShowAlert] = useState(false);

  // すべてのフィールドが入力されているかをチェック
  const isFormValid =
    name.trim() !== '' && email.trim() !== '' && subject.trim() !== '' && message.trim() !== '';

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // form.current が null の場合は処理を中断
    if (!form.current) return;

    emailjs.sendForm('service_hu8ycwu', 'template_d8wqzrm', form.current, 'FvdSAkMWoZPdhhUnm').then(
      () => {
        if (form.current) {
          form.current.reset();
        }
        setShowAlert(true); // アラートを表示
        setTimeout(() => setShowAlert(false), 3000); // 3秒後にアラートを非表示
        console.log('SUCCESS!');
      },
      (error) => {
        console.log('FAILED...', error.text);
      }
    );
  };

  return (
    <section
      className="w-full h-fit px-[40px] md:py-20 lg:pb-40 lg:pt-10 py-10 max-xs:px-[20px] relative bg-whitesmoke"
      id="contact"
    >
      <div className="max-w-7xl mx-auto">
        {/* アラート */}
        {showAlert && (
          <div className="fixed top-5 right-5 bg-green-500 text-white px-4 py-2 rounded shadow-lg z-50">
            <p>送信が成功しました！</p>
          </div>
        )}

        {/* セクションタイトル */}
        <div className="inline-block">
          <p className="bg-cadetblue text-white text-sm font-medium py-3 px-5 rounded-full flex items-center gap-2 mb-10">
            <span>
              <AiFillBulb />
            </span>
            コンタクト
          </p>
        </div>

        {/* 左 メッセージ部分 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <p>
              お仕事のご相談・ご依頼は、こちらのフォームよりお気軽にご連絡ください。
              <br />
              内容を確認し次第、可能な限り早くご返信させていただきます。
            </p>
            <p className="mt-12">連絡先はこちら</p>
            <h4 className="text-lg font-medium text-darkblue">nextlayer@gmail.com</h4>
            {/* SNS */}
            <div className="mt-12">
              <div className="flex flex-col gap-2">
                <h5>SNS</h5>
                <div className="flex gap-5">
                  <Link href="" className="text-3xl text-darkblue">
                    <AiFillInstagram />
                  </Link>
                  <Link href="" className="text-3xl text-darkblue">
                    <AiFillTwitterSquare />
                  </Link>
                  <Link href="" className="text-3xl text-darkblue">
                    <AiFillFacebook />
                  </Link>
                  <Link href="" className="text-3xl text-darkblue">
                    <AiFillYoutube />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* 右 メールフォーム部分 */}
          <div>
            <form ref={form} onSubmit={sendEmail} className="w-full">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="お名前"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full text-gray-700 border border-slate-200 rounded py-3 px-4 mb-4 leading-tight focus:outline-cadetblue"
              />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="メールアドレス"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full text-gray-700 border border-slate-200 rounded py-3 px-4 mb-4 leading-tight focus:outline-cadetblue"
              />
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="タイトル"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full text-gray-700 border border-slate-200 rounded py-3 px-4 mb-4 leading-tight focus:outline-cadetblue"
              />
              <textarea
                name="message"
                id="message"
                rows={7}
                placeholder="内容"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full text-gray-700 border border-slate-200 rounded py-3 px-4 mb-4 leading-tight focus:outline-cadetblue"
              ></textarea>
              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={!isFormValid} // フォームが無効な場合はボタンを無効化
                  className={`bg-darkblue text-white font-medium py-3 px-6 rounded hover:shadow-lg ${
                    !isFormValid ? 'bg-gray-400 cursor-not-allowed' : ' hover:bg-darkblue/75'
                  }`}
                >
                  送信
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
