// プロジェクトの型定義
export type Project = {
  name: string;
  githubUrl: string;
  image: string;
  category: string[];
  projectUrl?: string; // オプショナルプロパティ
  deployed?: boolean; // オプショナルプロパティ
};

export const projects: Project[] = [
  {
    name: '旅する限界エンジニアのBLOG',
    githubUrl: 'https://github.com/aotatsu8/blog',
    image: '/assets/projects/14.png',
    category: ['react'],
    projectUrl: 'https://blog.aotatsu7.workers.dev/',
    deployed: true,
  },
  {
    name: 'お抱えソムリエサービス Cave Privée',
    githubUrl: 'https://github.com/aotatsu8/cave-privee',
    image: '/assets/projects/13.png',
    category: ['react'],
    projectUrl: 'https://cave-privee-one.vercel.app/',
    deployed: true,
  },
  {
    name: 'フリーランスホームページ',
    githubUrl: 'https://github.com/aotatsu8/nextlayer-portfolio',
    image: '/assets/projects/16.png',
    category: ['react', 'aws'],
    projectUrl: 'https://nextlayer-portfolio.vercel.app/',
    deployed: true,
  },
];
