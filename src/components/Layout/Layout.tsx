import { FC, ReactNode } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Logo from '@assets/images/Logo.svg';
import { Language } from '@components/Language';
import { ScgPage } from '@components/ScgPage';
import { SidePanel } from '@components/SidePanel';
import { SidePanelWrapper } from '@components/SidePanelWrapper';

import { routes } from '@constants';
import { setActiveLink } from '@store/activeLinkSlice';
import styles from './Layout.module.scss';

export interface IProps {
  children?: ReactNode;
}

export const Layout: FC<IProps> = ({ children }) => {
  const dispatch = useDispatch();

  const handleLogoOnClick = () => {
    dispatch(setActiveLink({ newActiveLink: routes.MAIN }));
  };

  return (
    <div className={styles.root}>
      <div className={styles.logoWrapper}>
        <Link to={routes.MAIN} onClick={handleLogoOnClick}>
          <Logo />
        </Link>
      </div>
      <header className={styles.header}>
        <div className={styles.languageWrapper}>
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
