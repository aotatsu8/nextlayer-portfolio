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
    githubUrl: '',
    image: '/assets/projects/14.png',
    category: ['react'],
    projectUrl: 'https://myblog-ashy-pi.vercel.app/',
    deployed: true,
  },
  {
    name: 'お抱えソムリエサービス Cave Privée',
    githubUrl: '',
    image: '/assets/projects/13.png',
    category: ['react'],
    projectUrl: 'https://cave-privee-one.vercel.app/',
    deployed: true,
  },
  {
    name: 'フリーランスホームページ',
    githubUrl: '',
    image: '/assets/projects/15.png',
    category: ['react', 'aws'],
    projectUrl: 'https://nextlayer-portfolio.vercel.app/',
    deployed: true,
  },
];
