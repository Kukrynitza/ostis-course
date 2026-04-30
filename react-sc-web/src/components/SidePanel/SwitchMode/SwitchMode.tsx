import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { scUtils } from '@api';
import AskAiPageButton from '@assets/images/AskAiPageButton.svg';
import AskAiPageButtonFocus from '@assets/images/AskAiPageButtonFocus.svg';
import AskAiPageButtonFocusThemed from '@assets/images/AskAiPageButtonFocusThemed.svg';
import AskAiPageButtonThemed from '@assets/images/AskAiPageButtonThemed.svg';
import GuidePageButton from '@assets/images/GuidePageButton.svg';
import GuidePageButtonFocus from '@assets/images/GuidePageButtonFocus.svg';
import GuidePageButtonFocusThemed from '@assets/images/GuidePageButtonFocusThemed.svg';
import GuidePageButtonThemed from '@assets/images/GuidePageButtonThemed.svg';
import LibraryPageButton from '@assets/images/LibraryPageButton.svg';
import LibraryPageButtonFocus from '@assets/images/LibraryPageButtonFocus.svg';
import LibraryPageButtonFocusThemed from '@assets/images/LibraryPageButtonFocusThemed.svg';
import LibraryPageButtonThemed from '@assets/images/LibraryPageButtonThemed.svg';
import ScnPageButton from '@assets/images/ScnPageButton.svg';
import ScnPageButtonFocus from '@assets/images/ScnPageButtonFocus.svg';
import ScnPageButtonFocusThemed from '@assets/images/ScnPageButtonFocusThemed.svg';
import ScnPageButtonThemed from '@assets/images/ScnPageButtonThemed.svg';
import { routes } from '@constants';
import { FEATURES } from '@constants/features';
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
    if (location.pathname.substring(0, 2) === '/q') {
      setActivePage(routes.MAIN);
    } else if (location.pathname.startsWith('/ask-ai')) {
      setActivePage(routes.ASK_AI);
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

  const GuideIcon =
    activePage === routes.GUIDE
      ? isDark
        ? GuidePageButtonFocusThemed
        : GuidePageButtonFocus
      : isDark
        ? GuidePageButtonThemed
        : GuidePageButton;
  const AskAiIcon =
    activePage === routes.ASK_AI
      ? isDark
        ? AskAiPageButtonFocusThemed
        : AskAiPageButtonFocus
      : isDark
        ? AskAiPageButtonThemed
        : AskAiPageButton;

  return (
    <div className={styles.switchModeButtonsWrapper}>
      <Link
        to={routes.MAIN}
        className={`${styles.switchModeButton} ${isDark ? styles.switchModeButtonDark : ''}`}
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
      <Link
        to={routes.LIBRARY}
        className={`${styles.switchModeButton} ${isDark ? styles.switchModeButtonDark : ''}`}
        onClick={() => handlePageClick(routes.LIBRARY)}
      >
        <LibraryIcon />
      </Link>
      <Link
        to={routes.GUIDE}
        className={styles.switchModeButton}
        onClick={() => handlePageClick(routes.GUIDE)}
      >
        <GuideIcon />
      </Link>
      <Link
        to={routes.ASK_AI}
        className={`${styles.switchModeButton} ${isDark ? styles.switchModeButtonDark : ''}`}
        onClick={() => handlePageClick(routes.ASK_AI)}
      >
        <AskAiIcon />
      </Link>
    </div>
  );
};
