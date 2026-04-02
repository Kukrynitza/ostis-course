import { SwitchScgScn, TScLanguageTab } from 'ostis-ui-lib';
import { generatePath, Outlet, useLocation, useMatch, useNavigate } from 'react-router';
import { routes } from '@constants';
import { useDispatch } from '@hooks/redux';
import { setFormat } from '@store/commonSlice';

import styles from './Main.module.css';

const Main = () => {
  const commandMatch = useMatch(routes.COMMAND);
  const actionMatch = useMatch(routes.ACTION);

  const location = useLocation();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const activeTab = location.pathname.includes('scg') ? 'scg' : 'scn';

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
      <div className={styles.switch}>
        <SwitchScgScn tab={activeTab} onTabClick={onChange} />
      </div>
      <Outlet />
    </div>
  );
};

export default Main;
