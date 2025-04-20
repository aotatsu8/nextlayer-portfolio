import React from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';
import Image from 'next/image';

// プロジェクトの型定義
type ProjectCardProps = {
  name: string;
  githubUrl: string;
  image: string;
  projectUrl?: string;
  deployed?: boolean;
};

function ProjectCard({ name, githubUrl, image, projectUrl, deployed }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="mb-4 p-4 border border-gray-200 rounded-lg bg-whitesmoke shadow-md"
    >
      <Image src={image} alt={`${name} Image`} width={300} height={200} className="rounded-lg" />
      <h3 className="ml-2">{name}</h3>
      <div className="flex gap-2 items-center w-full m-1">
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-darkblue p-1 rounded-full text-lg"
        >
          <AiFillGithub />
        </a>
        {deployed && (
          <a
            href={projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-darkblue p-1 rounded-full text-2xl"
          >
            <AiFillEye />
          </a>
        )}
      </div>
    </motion.div>
  );
}

export default ProjectCard;
