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
    name: 'フリーランスホームページ',
    githubUrl: '',
    image: '../../assets/projects/1.png',
    category: ['react', 'aws'],
  },
  {
    name: '企業ホームページ',
    githubUrl: '',
    image: '../../assets/projects/2.png',
    category: ['react'],
  },
  {
    name: '学生向けホームページ',
    githubUrl: '',
    image: '../../assets/projects/3.png',
    category: ['wordpress'],
    projectUrl: '',
    deployed: true,
  },
  {
    name: '学生向けホームページ',
    githubUrl: '',
    image: '../../assets/projects/3.png',
    category: ['wordpress'],
    projectUrl: '',
    deployed: true,
  },
  {
    name: '学生向けホームページ',
    githubUrl: '',
    image: '../../assets/projects/3.png',
    category: ['aws'],
    projectUrl: '',
    deployed: true,
  },
  {
    name: '学生向けホームページ',
    githubUrl: '',
    image: '../../assets/projects/3.png',
    category: ['wordpress'],
    projectUrl: '',
    deployed: true,
  },
  {
    name: '学生向けホームページ',
    githubUrl: '',
    image: '../../assets/projects/3.png',
    category: ['wordpress'],
    projectUrl: '',
    deployed: true,
  },
  {
    name: '学生向けホームページ',
    githubUrl: '',
    image: '../../assets/projects/3.png',
    category: ['wordpress'],
    projectUrl: '',
    deployed: true,
  },
  {
    name: '学生向けホームページ',
    githubUrl: '',
    image: '../../assets/projects/3.png',
    category: ['wordpress'],
    projectUrl: '',
    deployed: true,
  },
  {
    name: '学生向けホームページ',
    githubUrl: '',
    image: '../../assets/projects/3.png',
    category: ['wordpress'],
    projectUrl: '',
    deployed: true,
  },
  {
    name: '学生向けホームページ',
    githubUrl: '',
    image: '../../assets/projects/3.png',
    category: ['wordpress'],
    projectUrl: '',
    deployed: true,
  },
  {
    name: '学生向けホームページ',
    githubUrl: '',
    image: '../../assets/projects/3.png',
    category: ['wordpress'],
    projectUrl: '',
    deployed: true,
  },
];
