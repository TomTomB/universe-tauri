import create from 'zustand';
import { immer } from './core';

export type Theme = 'light' | 'dark' | 'auto';

interface StoreState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export const useStore = create<StoreState>(
  immer((set) => ({
    theme: 'light',
    setTheme: (theme) =>
      set((state) => {
        state.theme = theme;
      }),
  })),
);
