import { FC, ReactNode, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Logo from '@assets/images/Logo.svg';
import { Language } from '@components/Language';
import { ScgPage } from '@components/ScgPage';
import { SidePanel } from '@components/SidePanel';
import { SidePanelWrapper } from '@components/SidePanelWrapper';
import { ThemeToggle } from '@components/ThemeToggle';
import { FEATURES } from '@constants/features';
import { scUtils } from '@api';

import { routes } from '@constants';
import { setActiveLink } from '@store/activeLinkSlice';
import { ScTag } from 'ostis-ui-lib';
import styles from './Layout.module.css';

export interface IProps {
  children?: ReactNode;
}

export const Layout: FC<IProps> = ({ children }) => {
  const dispatch = useDispatch();
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

  return (
    <div className={styles.root}>
      <div className={styles.logoWrapper}>
        {FEATURES.enableContextMenuOnLogo && logoAddr ? (
          <ScTag addr={logoAddr} showMenu={true}>
            <Link to={routes.MAIN} onClick={handleLogoOnClick}>
              <Logo />
            </Link>
          </ScTag>
        ) : (
          <Link to={routes.MAIN} onClick={handleLogoOnClick}>
            <Logo />
          </Link>
        )}
      </div>
      <header className={styles.header}>
        <div className={styles.headerControls}>
          <ThemeToggle />
          <Language />
        </div>
      </header>
      <SidePanelWrapper>
        <SidePanel className={styles.sideBar} />
      </SidePanelWrapper>
      <main className={styles.main}>
        <ScgPage />
        {children}
      </main>
    </div>
  );
};
