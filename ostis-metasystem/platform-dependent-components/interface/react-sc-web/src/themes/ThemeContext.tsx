import { createContext, FC, ReactNode, useContext, useEffect, useState } from 'react';
import { useMedia } from '@hooks/useMedia';
import { defaultLightTheme } from 'ostis-ui-lib';
import { defaultDarkTheme } from './defaultDarkTheme';

export type TTheme = 'light' | 'dark' | 'system';

interface IThemeContext {
  theme: TTheme;
  setTheme: (theme: TTheme) => void;
  resolved: 'light' | 'dark';
  styledTheme: typeof defaultLightTheme;
}

const ThemeContext = createContext<IThemeContext>({
  theme: 'system',
  setTheme: () => {},
  resolved: 'light',
  styledTheme: defaultLightTheme,
});

export const useThemeContext = () => useContext(ThemeContext);

export const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const isSystemDark = useMedia('(prefers-color-scheme: dark)');
  const [theme, setTheme] = useState<TTheme>(() => {
    return (localStorage.getItem('theme') as TTheme) || 'system';
  });

  const resolved = theme === 'system' ? (isSystemDark ? 'dark' : 'light') : theme;

  const styledTheme = resolved === 'dark' ? defaultDarkTheme : defaultLightTheme;

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', resolved);
    localStorage.setItem('theme', theme);
  }, [resolved, theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, resolved, styledTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
