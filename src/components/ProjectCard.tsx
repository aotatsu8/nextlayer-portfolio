import React from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

// プロジェクトの型定義
type ProjectCardProps = {
  name: string;
  githubUrl: string;
  image: string;
  projectUrl?: string;
  deployed?: boolean;
};

export function ProjectCard({ name, githubUrl, image, projectUrl, deployed }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="mb-4 p-4 border border-gray-200 rounded-lg bg-whitesmoke shadow-md"
    >
      {/* サムネイル画像（block + mx-auto でカード内中央寄せ） */}
      <Image
        src={image}
        alt={`${name} Image`}
        width={300}
        height={200}
        className="rounded-lg block mx-auto"
      />
      {/* プロジェクト名 */}
      <h3 className="text-center mt-2">{name}</h3>
      {/* GitHub・閲覧アイコン行（中央寄せ） */}
      <div className="flex gap-2 items-center justify-center w-full m-1">
        <Link
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-darkblue p-1 rounded-full text-lg"
        >
          <AiFillGithub />
        </Link>
        {/* 閲覧(目)アイコン：公開済み(deployed)かつURLがある場合のみ表示 */}
        {deployed && projectUrl && (
          <Link
            href={projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-darkblue p-1 rounded-full text-2xl"
          >
            <AiFillEye />
          </Link>
        )}
      </div>
    </motion.div>
  );
}
