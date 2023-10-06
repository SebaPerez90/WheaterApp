import { create } from 'zustand';

export const useStore = create((set) => ({
  //states
  theme: 'dark',
  language: 'eng',

  //actions
  toggleTheme: () =>
    set((state) => ({ theme: state.theme === 'dark' ? 'light' : 'dark' })),
  toggleLanguage: () =>
    set((state) => ({ language: state.language === 'eng' ? 'esp' : 'eng' })),
  count: 22,
}));
