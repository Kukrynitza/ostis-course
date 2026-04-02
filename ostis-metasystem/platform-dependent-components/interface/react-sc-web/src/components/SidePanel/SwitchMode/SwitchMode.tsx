import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import LibraryPageButton from '@assets/images/LibraryPageButton.svg';
import LibraryPageButtonFocus from '@assets/images/LibraryPageButtonFocus.svg';
import LibraryPageButtonFocusThemed from '@assets/images/LibraryPageButtonFocusThemed.svg';
import LibraryPageButtonThemed from '@assets/images/LibraryPageButtonThemed.svg';
import ScnPageButton from '@assets/images/ScnPageButton.svg';
import ScnPageButtonFocus from '@assets/images/ScnPageButtonFocus.svg';
import ScnPageButtonFocusThemed from '@assets/images/ScnPageButtonFocusThemed.svg';
import ScnPageButtonThemed from '@assets/images/ScnPageButtonThemed.svg';
import { routes } from '@constants';
import { useThemeContext } from '@themes/index';
import styles from './SwitchMode.module.css';

export const SwitchMode = () => {
  const [activePage, setActivePage] = useState<string | '/'>();
  const location = useLocation();
  const { resolved } = useThemeContext();
  const isDark = resolved === 'dark';

  const handlePageClick = (page: string) => {
    setActivePage(page);
  };

  useEffect(() => {
    if (location.pathname.substring(0, 2) === '/q' || location.pathname.substring(0, 2) === '/c') {
      setActivePage(routes.MAIN);
    } else {
      setActivePage(location.pathname);
    }
  }, [location.pathname]);

  const ScnIcon =
    activePage === routes.MAIN || activePage === routes.ACTION || activePage === routes.COMMAND
      ? isDark
        ? ScnPageButtonFocusThemed
        : ScnPageButtonFocus
      : isDark
        ? ScnPageButtonThemed
        : ScnPageButton;

  const LibraryIcon =
    activePage === routes.LIBRARY
      ? isDark
        ? LibraryPageButtonFocusThemed
        : LibraryPageButtonFocus
      : isDark
        ? LibraryPageButtonThemed
        : LibraryPageButton;

  return (
    <div className={styles.switchModeButtonsWrapper}>
      <Link
        to={routes.MAIN}
        className={styles.switchModeButton}
        onClick={() => handlePageClick(routes.ACTION)}
      >
        <ScnIcon />
      </Link>
      <Link
        to={routes.LIBRARY}
        className={styles.switchModeButton}
        onClick={() => handlePageClick(routes.LIBRARY)}
      >
        <LibraryIcon />
      </Link>
    </div>
  );
};
