import { projects, Project } from '@/constants/projects';
import { useQueryState } from 'nuqs';
import React, { useEffect, useState } from 'react';

type ProjectFilterProps = {
  setFiltered: (filtered: Project[]) => void;
};

export function ProjectFilter({ setFiltered }: ProjectFilterProps) {
  const [activeCategory, setActiveCategory] = useQueryState<string>('all', {
    parse: (v) => v,
    serialize: (v) => v,
    defaultValue: 'all',
    // URLだけ変えてリロードさせたくないならreplace
    history: 'replace',
  });
  useEffect(() => {
    if (activeCategory === 'all') {
      setFiltered(projects);
      return;
    }

    const filtered = projects.filter((projects) => projects.category.includes(activeCategory));
    setFiltered(filtered);
  }, [activeCategory, setFiltered]);

  return (
    <div className="flex gap-5 my-10">
      <button
        className={activeCategory === 'all' ? 'bg-darkblue py-1 px-3 text-white rounded-lg' : ''}
        onClick={() => setActiveCategory('all')}
      >
        全て
      </button>
      <button
        className={activeCategory === 'react' ? 'bg-darkblue py-1 px-3 text-white rounded-lg' : ''}
        onClick={() => setActiveCategory('react')}
      >
        React
      </button>
      <button
        className={activeCategory === 'aws' ? 'bg-darkblue py-1 px-3 text-white rounded-lg' : ''}
        onClick={() => setActiveCategory('aws')}
      >
        AWS
      </button>
      <button
        className={
          activeCategory === 'wordpress' ? 'bg-darkblue py-1 px-3 text-white rounded-lg' : ''
        }
        onClick={() => setActiveCategory('wordpress')}
      >
        WordPress
      </button>
    </div>
  );
}
