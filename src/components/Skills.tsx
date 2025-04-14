import Image from 'next/image';
import React from 'react';
import { AiFillBulb } from 'react-icons/ai';

function Skills() {
  return (
    <section
      className="w-full h-fit px-[40px] py-10 max-xs:px-[20px] relative bg-white"
      id="skills"
    >
      {/* 使用言語 • 技術*/}
      <div className="max-w-7xl mx-auto">
        {/* セクションタイトル */}
        <div className="inline-block">
          <p className="bg-cadetblue text-white text-sm font-medium py-3 px-5 rounded-full flex items-center gap-2">
            <span>
              <AiFillBulb className="w-4 h-4" />
            </span>
            使用言語 • 技術
          </p>
        </div>

        {/* グリッドレイアウト */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-5 max-xs:grid-cols-2 mt-10">
          <div className="flex flex-col items-center bg-whitesmoke p-8 rounded-md text-center shadow-sm justify-center">
            <Image
              src={
                'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg'
              }
              width={100}
              height={100}
              alt="html"
              className="mb-2"
            />
            <span>HTML</span>
          </div>
          <div className="flex flex-col items-center bg-whitesmoke p-8 rounded-md text-center shadow-sm justify-center">
            <Image
              src={
                'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg'
              }
              width={100}
              height={100}
              alt="CSS"
              className="mb-2"
            />
            <span>CSS</span>
          </div>
          <div className="flex flex-col items-center bg-whitesmoke p-8 rounded-md text-center shadow-sm justify-center">
            <Image
              src={
                'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg'
              }
              width={100}
              height={100}
              alt="JavaScript"
              className="mb-2"
            />
            <span>JavaScript</span>
          </div>
          <div className="flex flex-col items-center bg-whitesmoke p-8 rounded-md text-center shadow-sm justify-center">
            <Image
              src={
                'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg'
              }
              width={100}
              height={100}
              alt="TypeScript"
              className="mb-2"
            />
            <span>TypeScript</span>
          </div>
          <div className="flex flex-col items-center bg-whitesmoke p-8 rounded-md text-center shadow-sm justify-center">
            <Image
              src={
                'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg'
              }
              width={100}
              height={100}
              alt="tailwind"
              className="mb-2"
            />
            <span>tailwind</span>
          </div>
          <div className="flex flex-col items-center bg-whitesmoke p-8 rounded-md text-center shadow-sm justify-center">
            <Image
              src={
                'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg'
              }
              width={100}
              height={100}
              alt="materialui"
              className="mb-2"
            />
            <span>materialui</span>
          </div>
          <div className="flex flex-col items-center bg-whitesmoke p-8 rounded-md text-center shadow-sm justify-center">
            <Image
              src={
                'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg'
              }
              width={100}
              height={100}
              alt="MYSQL"
              className="mb-2"
            />
            <span>MYSQL</span>
          </div>
          <div className="flex flex-col items-center bg-whitesmoke p-8 rounded-md text-center shadow-sm justify-center">
            <Image
              src={
                'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg'
              }
              width={100}
              height={100}
              alt="React"
              className="mb-2"
            />
            <span>React</span>
          </div>
          <div className="flex flex-col items-center bg-whitesmoke p-8 rounded-md text-center shadow-sm justify-center">
            <Image
              src={
                'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg'
              }
              width={100}
              height={100}
              alt="Redux"
              className="mb-2"
            />
            <span>Redux</span>
          </div>
          <div className="flex flex-col items-center bg-whitesmoke p-8 rounded-md text-center shadow-sm justify-center">
            <Image
              src={
                'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg'
              }
              width={100}
              height={100}
              alt="Next"
              className="mb-2"
            />
            <span>Next</span>
          </div>
        </div>
      </div>

      {/* 使用TOOL */}
      <div className="max-w-7xl mx-auto mt-20">
        {/* セクションタイトル */}
        <div className="inline-block">
          <p className="bg-cadetblue text-white text-sm font-medium py-3 px-5 rounded-full flex items-center gap-2">
            <span>
              <AiFillBulb className="w-4 h-4" />
            </span>
            使用TOOL
          </p>
        </div>

        {/* グリッドレイアウト */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-5 max-xs:grid-cols-2 mt-10">
          <div className="flex flex-col items-center bg-whitesmoke p-8 rounded-md text-center shadow-sm justify-center">
            <Image
              src={
                'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/slack/slack-original.svg'
              }
              width={100}
              height={100}
              alt="Slak"
              className="mb-2"
            />
            <span>Slak</span>
          </div>
          <div className="flex flex-col items-center bg-whitesmoke p-8 rounded-md text-center shadow-sm justify-center">
            <Image
              src={
                'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg'
              }
              width={100}
              height={100}
              alt="GitHub"
              className="mb-2"
            />
            <span>GitHub</span>
          </div>
          <div className="flex flex-col items-center bg-whitesmoke p-8 rounded-md text-center shadow-sm justify-center">
            <Image
              src={
                'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-original.svg'
              }
              width={100}
              height={100}
              alt="GitLab"
              className="mb-2"
            />
            <span>GitLab</span>
          </div>
          <div className="flex flex-col items-center bg-whitesmoke p-8 rounded-md text-center shadow-sm justify-center">
            <Image
              src={
                'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg'
              }
              width={100}
              height={100}
              alt="aws"
              className="mb-2"
            />
            <span>aws</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
