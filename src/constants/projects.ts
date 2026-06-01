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
    image: '/assets/projects/1.png',
    category: ['react', 'aws'],
    projectUrl: 'https://nextlayer-portfolio.vercel.app/',
    deployed: true,
  },
  {
    name: '企業ホームページ',
    githubUrl: '',
    image: '/assets/projects/2.png',
    category: ['react'],
  },
  {
    name: '学生向けホームページ',
    githubUrl: '',
    image: '/assets/projects/3.png',
    category: ['wordpress'],
    projectUrl: '',
    deployed: true,
  },
  {
    name: '学生向けホームページ',
    githubUrl: '',
    image: '/assets/projects/3.png',
    category: ['wordpress'],
    projectUrl: '',
    deployed: true,
  },
  {
    name: '学生向けホームページ',
    githubUrl: '',
    image: '/assets/projects/3.png',
    category: ['aws'],
    projectUrl: '',
    deployed: true,
  },
  {
    name: '学生向けホームページ',
    githubUrl: '',
    image: '/assets/projects/3.png',
    category: ['wordpress'],
    projectUrl: '',
    deployed: true,
  },
  {
    name: '学生向けホームページ',
    githubUrl: '',
    image: '/assets/projects/3.png',
    category: ['wordpress'],
    projectUrl: '',
    deployed: true,
  },
  {
    name: '学生向けホームページ',
    githubUrl: '',
    image: '/assets/projects/3.png',
    category: ['wordpress'],
    projectUrl: '',
    deployed: true,
  },
  {
    name: '学生向けホームページ',
    githubUrl: '',
    image: '/assets/projects/3.png',
    category: ['wordpress'],
    projectUrl: '',
    deployed: true,
  },
  {
    name: '学生向けホームページ',
    githubUrl: '',
    image: '/assets/projects/3.png',
    category: ['wordpress'],
    projectUrl: '',
    deployed: true,
  },
  {
    name: '学生向けホームページ',
    githubUrl: '',
    image: '/assets/projects/3.png',
    category: ['wordpress'],
    projectUrl: '',
    deployed: true,
  },
  {
    name: '学生向けホームページ',
    githubUrl: '',
    image: '/assets/projects/3.png',
    category: ['wordpress'],
    projectUrl: '',
    deployed: true,
  },
];
