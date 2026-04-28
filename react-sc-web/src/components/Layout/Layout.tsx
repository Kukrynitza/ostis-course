import { FC, ReactNode } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import Logo from '@assets/images/Logo.svg';
import { Language } from '@components/Language';
import { ScgPage } from '@components/ScgPage';
import { SidePanel } from '@components/SidePanel';
import { SidePanelWrapper } from '@components/SidePanelWrapper';
import { ThemeToggle } from '@components/ThemeToggle';

import { routes } from '@constants';
import { setActiveLink } from '@store/activeLinkSlice';
import styles from './Layout.module.css';

export interface IProps {
  children?: ReactNode;
}

export const Layout: FC<IProps> = ({ children }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const isAskAiPage = location.pathname === routes.ASK_AI;

  const handleLogoOnClick = () => {
    dispatch(setActiveLink({ newActiveLink: routes.MAIN }));
  };

  return (
    <div className={styles.root}>
      <div className={styles.logoWrapper}>
        <Link
          to={routes.MAIN}
          onClick={handleLogoOnClick}
          title="Перейти на главную страницу"
          aria-label="Перейти на главную страницу"
        >
          <Logo />
        </Link>
      </div>
      <header className={styles.header} style={{ marginLeft: isAskAiPage ? '-150px' : '0' }}>
        <div className={styles.headerControls}>
          <ThemeToggle />
          <Language />
        </div>
      </header>
      <SidePanelWrapper>
        <SidePanel className={styles.sideBar} />
      </SidePanelWrapper>
      <main className={styles.main}>
        {!isAskAiPage && <ScgPage />}
        {children}
      </main>
    </div>
  );
};
