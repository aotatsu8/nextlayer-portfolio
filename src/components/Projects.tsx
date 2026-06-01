'use client';
import React, { useState } from 'react';
import { AiFillBulb } from 'react-icons/ai';
import { projects } from '@/constants/projects';
import { AnimatePresence } from 'framer-motion';
import { ProjectCard } from './ProjectCard';

export function Projects() {
  // 一度に表示する件数。初期は9件、「もっと見る」で6件ずつ増やす
  const [visibleProjects, setVisibleProjects] = useState<number>(9);
  const loadMoreProjects = () => {
    setVisibleProjects((preVisibleProjects) => preVisibleProjects + 6);
  };

  return (
    <section
      className="w-full h-fit px-[40px] py-10 max-xs:px-[20px] relative bg-white"
      id="projects"
    >
      <div className="max-w-7xl mx-auto">
        {/* セクションタイトル */}
        <div className="inline-block">
          <p className="bg-cadetblue text-white text-sm font-medium py-3 px-5 rounded-full flex items-center gap-2">
            <span>
              <AiFillBulb className="w-4 h-4" />
            </span>
            開発実績
          </p>
        </div>
        {/* カード（visibleProjects 件だけ表示。AnimatePresence で増減時にフェード） */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
          <AnimatePresence>
            {projects.slice(0, visibleProjects).map((project, index) => (
              <ProjectCard
                key={index}
                name={project.name}
                githubUrl={project.githubUrl}
                image={project.image}
                projectUrl={project.projectUrl}
                deployed={project.deployed}
              />
            ))}
          </AnimatePresence>
        </div>
        {/* もっと見る：まだ未表示の実績が残っている時だけボタンを出す */}
        {visibleProjects < projects.length && (
          <div className="text-center mt-4">
            <button
              className="bg-darkblue text-white px-2 py-1 rounded-md hover:bg-darkblue/75"
              onClick={loadMoreProjects}
            >
              もっと見る
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
