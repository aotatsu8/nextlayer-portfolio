import { create } from 'zustand';

// ストアの型定義
type useMenuStore = {
  isOpen: boolean;
  openMobileMenu: () => void;
  closeMobileMenu: () => void;
};

export const useMenuStore = create<useMenuStore>((set) => ({
  isOpen: false,
  openMobileMenu: () => set((state) => ({ isOpen: !state.isOpen })),
  closeMobileMenu: () => set({ isOpen: false }),
}));
