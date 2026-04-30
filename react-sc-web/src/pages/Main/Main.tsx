import { useEffect } from 'react';
import { generatePath, Outlet, useLocation, useMatch, useNavigate } from 'react-router';
import { routes } from '@constants';
import { useDispatch, useSelector } from '@hooks/redux';
import { selectFormat, setFormat } from '@store/commonSlice';
import { SwitchScgScn, TScLanguageTab } from 'ostis-ui-lib';

import styles from './Main.module.css';

const Main = () => {
  const commandMatch = useMatch(routes.COMMAND);
  const actionMatch = useMatch(routes.ACTION);

  const location = useLocation();
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const formatInStore = useSelector(selectFormat);

  const urlFormat = actionMatch?.params.format ?? commandMatch?.params.format;

  useEffect(() => {
    if (urlFormat === 'scg' || urlFormat === 'scn') {
      if (urlFormat !== formatInStore) {
        dispatch(setFormat(urlFormat));
      }
    }
  }, [urlFormat, formatInStore, dispatch]);

  const activeTab = location.pathname.includes('scg') ? 'scg' : 'scn';
  const switchTooltip =
    activeTab === 'scg'
      ? 'Текущий режим SCg-код. Нажмите, чтобы переключиться на SCn-код'
      : 'Текущий режим SCn-код. Нажмите, чтобы переключиться на SCg-код';
  const libraryPath = routes.LIBRARY.endsWith('/') ? routes.LIBRARY.slice(0, -1) : routes.LIBRARY;
  const isLibraryRoute =
    location.pathname === routes.LIBRARY ||
    location.pathname === libraryPath ||
    location.pathname.startsWith(`${libraryPath}/`);

  const guidePath = routes.GUIDE.endsWith('/') ? routes.GUIDE.slice(0, -1) : routes.GUIDE;
  const isGuideRoute =
    location.pathname === routes.GUIDE ||
    location.pathname === guidePath ||
    location.pathname.startsWith(`${guidePath}/`);

  const onChange = (newActiveTab: TScLanguageTab) => {
    dispatch(setFormat(newActiveTab));

    if (commandMatch) {
      const { commandAddr, addr } = commandMatch.params;
      if (!commandAddr || !addr) {
        return;
      }
      return navigate(generatePath(routes.COMMAND, { commandAddr, addr, format: newActiveTab }));
    }

    if (!actionMatch) {
      return;
    }

    const { action } = actionMatch.params;

    if (!action) {
      return;
    }
    navigate(generatePath(routes.ACTION, { action, format: newActiveTab }));
  };

  return (
    <div className={styles.wrapper}>
      {!isLibraryRoute && !isGuideRoute && (
        <div className={styles.switch} title={switchTooltip} aria-label={switchTooltip}>
          <SwitchScgScn tab={activeTab} onTabClick={onChange} />
        </div>
      )}
      <Outlet />
    </div>
  );
};

export default Main;
