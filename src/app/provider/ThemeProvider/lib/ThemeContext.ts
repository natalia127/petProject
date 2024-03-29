import { createContext } from 'react';

export type Theme = 'light' | 'dark'
export interface ThemeContextProps {
  theme?: Theme;
  // eslint-disable-next-line no-unused-vars
  setTheme?: (theme: Theme) => void
}

export const ThemeContext = createContext<ThemeContextProps>({

});

export const LOCAL_STORAGE_THEME_KEY = 'theme';
