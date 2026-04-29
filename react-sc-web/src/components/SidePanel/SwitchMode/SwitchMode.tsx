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
import { FEATURES } from '@constants/features';
import { scUtils } from '@api';
import { routes } from '@constants';
import { useThemeContext } from '@themes/index';
import { ScTag } from 'ostis-ui-lib';
import styles from './SwitchMode.module.css';

export const SwitchMode = () => {
  const [activePage, setActivePage] = useState<string | '/'>();
  const location = useLocation();
  const { resolved } = useThemeContext();
  const isDark = resolved === 'dark';
  const [libraryPageAddr, setLibraryPageAddr] = useState<number | null>(null);

  useEffect(() => {
    if (FEATURES.enableContextMenuOnLibraryPageButton) {
      scUtils.searchKeynodes('ui_section').then(({ uiSection }) => {
        if (uiSection?.value) setLibraryPageAddr(uiSection.value);
      });
    }
  }, []);

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
      {FEATURES.enableContextMenuOnLibraryPageButton && libraryPageAddr ? (
        <ScTag addr={libraryPageAddr} showMenu={true}>
          <Link
            to={routes.LIBRARY}
            className={styles.switchModeButton}
            onClick={() => handlePageClick(routes.LIBRARY)}
          >
            <LibraryIcon />
          </Link>
        </ScTag>
      ) : (
        <Link
          to={routes.LIBRARY}
          className={styles.switchModeButton}
          onClick={() => handlePageClick(routes.LIBRARY)}
        >
          <LibraryIcon />
        </Link>
      )}
    </div>
  );
};
