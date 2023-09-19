import { create } from 'zustand';

export const useThemeStore = create((set) => ({
  theme: 'dark',
  toggleTheme: () => set((state) => ({ tema: state.theme === 'light' ? 'light' : 'dark' })),
}));