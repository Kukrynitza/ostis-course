import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import { useMatch } from 'react-router';
import Delete from '@assets/images/delete.svg';
import { FEATURES, routes } from '@constants';
import { useScNavigation } from '@hooks/useScNavigation';
import { IRequest, clearRequests, removeRequest } from '@store/requestHistorySlice';
import { ScLangText, ScTag, useTranslate } from 'ostis-ui-lib';

import styles from './HistoryPanel.module.css';

import { Skeleton } from './Skeleton';

interface IProps {
  isLoading: boolean;
  requests: IRequest[];
}

export const HistoryPanel = (props: IProps) => {
  const match = useMatch(routes.ACTION);
  const dispatch = useDispatch();
  const translate = useTranslate();

  const { goToActiveFormatAction } = useScNavigation();

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
            <button type="button" className={styles.clearBtn} onClick={onClearAll}>
              {translate({ ru: 'Очистить историю', en: 'Clear history' })}
            </button>
          )}
          {props.requests.map(({ action }, ind) => (
            <div key={ind} className={styles.historyItem}>
              <ScTag
                as="span"
                className={classNames(styles.historyBtn, {
                  [styles.historyBtnActive]: String(action) === match?.params.action,
                })}
                addr={action}
                showMenu={FEATURES.enableContextMenuOnHistory}
                onClick={onBtnClick(String(action))}
                title="Открыть команду из истории"
              >
                <ScLangText addrOrSystemId={action} defaultText={String(action)} />
              </ScTag>
              <button
                type="button"
                className={styles.deleteBtn}
                onClick={onDeleteClick(action)}
                title="Удалить"
                aria-label="Удалить из истории"
              >
                <Delete />
              </button>
            </div>
          ))}
        </div>
      )}
      {props.isLoading && <Skeleton />}
    </>
  );
};
