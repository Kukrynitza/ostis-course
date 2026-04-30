import classNames from 'classnames';
import { FC, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { scUtils } from '@api';
import Logo from '@assets/images/Logo.svg';
import { Language } from '@components/Language';
import { ScgPage } from '@components/ScgPage';
import { SidePanel } from '@components/SidePanel';
import { SidePanelWrapper } from '@components/SidePanelWrapper';
import { ThemeToggle } from '@components/ThemeToggle';
import { UserAccountMenu } from '@components/UserAccountMenu';
import { FEATURES, routes } from '@constants';
import { setActiveLink } from '@store/activeLinkSlice';
import { ScTag } from 'ostis-ui-lib';
import styles from './Layout.module.css';

export const Layout: FC = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const isAskAiPage = location.pathname.startsWith('/ask-ai');
  const [logoAddr, setLogoAddr] = useState<number | null>(null);

  useEffect(() => {
    if (FEATURES.enableContextMenuOnLogo) {
      scUtils.searchKeynodes('ui_logo').then(({ uiLogo }) => {
        if (uiLogo?.value) setLogoAddr(uiLogo.value);
      });
    }
  }, []);

  const handleLogoOnClick = () => {
    dispatch(setActiveLink({ newActiveLink: routes.MAIN }));
  };

  const logoLink = (
    <Link
      to={routes.MAIN}
      onClick={handleLogoOnClick}
      title="Перейти на главную страницу"
      aria-label="Перейти на главную страницу"
    >
      <Logo />
    </Link>
  );

  return (
    <div className={styles.root}>
      <div className={styles.logoWrapper}>
        {FEATURES.enableContextMenuOnLogo && logoAddr ? (
          <ScTag addr={logoAddr} showMenu={true}>
            {logoLink}
          </ScTag>
        ) : (
          logoLink
        )}
      </div>
      <header
        className={classNames(
          styles.header,
          isAskAiPage && styles.headerAskAiSticky,
        )}
      >
        <div className={styles.headerControls}>
          <UserAccountMenu />
          <ThemeToggle />
          <Language />
        </div>
      </header>
      <SidePanelWrapper>
        <SidePanel className={styles.sideBar} />
      </SidePanelWrapper>
      <main className={styles.main}>
        {!isAskAiPage && <ScgPage />}
        <Outlet />
      </main>
    </div>
  );
};
