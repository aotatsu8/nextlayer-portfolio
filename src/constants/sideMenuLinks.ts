export type SideMenuLink = {
  route: string;
  label: string;
  sectionId: string;
};

export const sideMenuLinks: SideMenuLink[] = [
  {
    route: '/',
    label: 'ホーム',
    sectionId: 'home',
  },
  {
    route: '#about',
    label: '自己紹介',
    sectionId: 'about',
  },
  {
    route: '#skills',
    label: '使用言語 • 技術',
    sectionId: 'skills',
  },
  {
    route: '#projects',
    label: '開発実績',
    sectionId: 'projects',
  },
  {
    route: '#contact',
    label: 'コンタクト',
    sectionId: 'contact',
  },
];
