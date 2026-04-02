import { useThemeContext, TTheme } from '@themes/index';

import styles from './ThemeToggle.module.css';

const nextTheme = (current: TTheme): TTheme => {
  if (current === 'light') return 'dark';
  if (current === 'dark') return 'system';

  return 'light';
};

const SunIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
);

const MoonIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

const AutoIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2a10 10 0 0 1 0 20" />
    <line x1="12" y1="2" x2="12" y2="22" />
  </svg>
);

export const ThemeToggle = () => {
  const { theme, setTheme } = useThemeContext();

  const handleClick = () => {
    setTheme(nextTheme(theme));
  };

  const icon = theme === 'light'
    ? <SunIcon />
    : theme === 'dark'
      ? <MoonIcon />
      : <AutoIcon />;

  const label = theme === 'light'
    ? 'Светлая'
    : theme === 'dark'
      ? 'Тёмная'
      : 'Системная';

  return (
    <button className={styles.button} onClick={handleClick} title={label}>
      {icon}
    </button>
  );
};
