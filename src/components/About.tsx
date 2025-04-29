import React from 'react';
import { AiFillBulb } from 'react-icons/ai';

export function About() {
  return (
    <section className="w-full h-fit px-[40px] py-10 max-xs:px-[20px] relative bg-white" id="about">
      <div className="max-w-7xl mx-auto">
        {/* セクションタイトル */}
        <div className="inline-block">
          <p className="bg-cadetblue text-white text-sm font-medium py-3 px-5 rounded-full flex items-center gap-2">
            <span className="">
              <AiFillBulb className="w-4 h-4" />
            </span>
            自己紹介
          </p>
        </div>
        {/* メイン分 */}
        <div className="mt-7">
          <p className="mt-6 text-gray-600 text-lg md:text-xl leading-9">
            はじめまして！フリーランスのWebエンジニア、青木達哉です。
            これまで4年以上、フロントエンドを中心にReactやNext.jsを使った開発に携わってきました。
            使いやすさとデザインのバランスを意識したUI実装を得意としています。 最近はExpress ×
            TypeScriptでのAPI開発にも取り組み、
            ちょっとしたバックエンド対応まで含めたフルスタックな開発にも対応できるようになってきました。
            以前は大手通信グループでのスクラム開発や、認証システムの改修などにも携わり、
            チーム開発の現場でも柔軟に動けることを強みにしています。
            現在はフルリモートで活動中です。
          </p>
        </div>
        {/* 実績 */}
        <div className="mt-10">
          <div className="w-full">
            <ul className="flex justify-between gap-10 flex-col md:flex-row">
              <li className="w-full shadow-sm">
                <div className="w-full text-center py-[30px] md:py-[60px] rounded-md bg-whitesmoke">
                  <h3 className="text-4xl mb-1 font-bold text-darkblue">900+</h3>
                  <span>YOUTUBE</span>
                </div>
              </li>
              <li className="w-full shadow-sm">
                <div className="w-full text-center py-[30px] md:py-[60px] rounded-md bg-whitesmoke">
                  <h3 className="text-4xl mb-1 font-bold text-darkblue">4</h3>
                  <span>PROJECT</span>
                </div>
              </li>
              <li className="w-full shadow-sm">
                <div className="w-full text-center py-[30px] md:py-[60px] rounded-md bg-whitesmoke">
                  <h3 className="text-4xl mb-1 font-bold text-darkblue">4+</h3>
                  <span>YEARS</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
