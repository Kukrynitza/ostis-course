import classNames from 'classnames';
import { useMatch } from 'react-router';
import {routes} from '@constants';
import {FEATURES} from '@constants/features';
import {useScNavigation} from '@hooks/useScNavigation';
import {IRequest, clearRequests, removeRequest} from '@store/requestHistorySlice';
import {useDispatch} from 'react-redux';
import {ScLangText, ScTag} from 'ostis-ui-lib';

import styles from './HistoryPanel.module.css';

import {Skeleton} from './Skeleton';
import Delete from '@assets/images/delete.svg';

interface IProps {
  isLoading: boolean;
  requests: IRequest[];
}

export const HistoryPanel = (props: IProps) => {
  const match = useMatch(routes.ACTION);
  const dispatch = useDispatch();

  const {goToActiveFormatAction} = useScNavigation();

  const onBtnClick = (action: string) => () => {
    goToActiveFormatAction(action);
  };

  const onDeleteClick = (action: number) => (e: React.MouseEvent) => {
    e.stopPropagation();
    dispatch(removeRequest(action));
  };

  const onClearAll = () => {
    dispatch(clearRequests());
  };

  return (
    <>
      {!props.isLoading && (
        <div className={styles.historyPanelWrap}>
          {props.requests.length > 0 && (
            <button className={styles.clearBtn} onClick={onClearAll}>
              Очистить историю
            </button>
          )}
          {props.requests.map(({action}, ind) => (
            <div key={ind} className={styles.historyItem}>
              <ScTag
                as="span"
                className={classNames(styles.historyBtn, {
                  [styles.historyBtnActive]: String(action) === match?.params.action,
                })}
                addr={action}
                showMenu={FEATURES.enableContextMenuOnHistory}
                onClick={onBtnClick(String(action))}
              >
                <ScLangText addrOrSystemId={action} defaultText={String(action)} />
              </ScTag>
              <button className={styles.deleteBtn} onClick={onDeleteClick(action)} title="Удалить">
                <Delete width="14" height="14" />
              </button>
            </div>
          ))}
        </div>
      )}
      {props.isLoading && <Skeleton />}
    </>
  );
};