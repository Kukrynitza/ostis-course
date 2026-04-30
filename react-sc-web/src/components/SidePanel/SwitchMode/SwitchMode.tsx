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
import { FEATURES, routes } from '@constants';
import { useThemeContext } from '@themes/index';
import { ScTag } from 'ostis-ui-lib';
import styles from './SwitchMode.module.css';

/** Подгрузка чанков до клика — переключение вкладок заметно быстрее. */
function prefetchLibraryChunk() {
  void import(/* webpackChunkName: "library" */ '@pages/Library/Library');
}

function prefetchGuideChunk() {
  void import(/* webpackChunkName: "guide" */ '@pages/Guide/Guide');
}

function prefetchAskAiChunks() {
  void import(/* webpackChunkName: "askmain" */ '@pages/AskMain/AskMain');
  void import(/* webpackChunkName: "ask-page" */ '@components/AskPage/AskPage');
  void import(/* webpackChunkName: "ask-answer" */ '@components/AskAnswer/AskAnswer');
}

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
    if (
      location.pathname.startsWith('/q') ||
      location.pathname.startsWith('/c/') ||
      location.pathname === routes.MAIN
    ) {
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

  const AskAiIcon =
    activePage === routes.ASK_AI
      ? isDark
        ? AskAiPageButtonFocusThemed
        : AskAiPageButtonFocus
      : isDark
        ? AskAiPageButtonThemed
        : AskAiPageButton;

  const GuideIcon =
    activePage === routes.GUIDE
      ? isDark
        ? GuidePageButtonFocusThemed
        : GuidePageButtonFocus
      : isDark
        ? GuidePageButtonThemed
        : GuidePageButton;

  const libraryLink = (
    <Link
      to={routes.LIBRARY}
      className={`${styles.switchModeButton} ${isDark ? styles.switchModeButtonDark : ''}`}
      onClick={() => handlePageClick(routes.LIBRARY)}
      onMouseEnter={prefetchLibraryChunk}
      onFocus={prefetchLibraryChunk}
      title="Библиотека компонентов"
      aria-label="Переключить на библиотеку компонентов"
    >
      <LibraryIcon />
    </Link>
  );

  return (
    <div className={styles.switchModeButtonsWrapper}>
      <Link
        to={routes.MAIN}
        className={`${styles.switchModeButton} ${isDark ? styles.switchModeButtonDark : ''}`}
        onClick={() => handlePageClick(routes.ACTION)}
        title="SCn/SCg режим"
        aria-label="Переключить на режим SCn/SCg"
      >
        <ScnIcon />
      </Link>
      {FEATURES.enableContextMenuOnLibraryPageButton && libraryPageAddr ? (
        <ScTag addr={libraryPageAddr} showMenu={true}>
          {libraryLink}
        </ScTag>
      ) : (
        libraryLink
      )}
      <Link
        to={routes.ASK_AI}
        className={`${styles.switchModeButton} ${isDark ? styles.switchModeButtonDark : ''}`}
        onClick={() => handlePageClick(routes.ASK_AI)}
        onMouseEnter={prefetchAskAiChunks}
        onFocus={prefetchAskAiChunks}
        title="Диалоговый помощник AskAI"
        aria-label="Переключить на AskAI"
      >
        <AskAiIcon />
      </Link>
      <Link
        to={routes.GUIDE}
        className={`${styles.switchModeButton} ${isDark ? styles.switchModeButtonDark : ''}`}
        onClick={() => handlePageClick(routes.GUIDE)}
        onMouseEnter={prefetchGuideChunk}
        onFocus={prefetchGuideChunk}
        title="Справка для начинающих"
        aria-label="Открыть справку"
      >
        <GuideIcon />
      </Link>
    </div>
  );
};
