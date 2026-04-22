import classNames from 'classnames';
import { ScLangText, ScTag } from 'ostis-ui-lib';
import { useMatch } from 'react-router';
import { routes } from '@constants';
import { useScNavigation } from '@hooks/useScNavigation';
import { IRequest } from '@store/requestHistorySlice';

import styles from './HistoryPanel.module.scss';

import { Skeleton } from './Skeleton';

interface IProps {
  isLoading: boolean;
  requests: IRequest[];
}

export const HistoryPanel = (props: IProps) => {
  const match = useMatch(routes.ACTION);

  const { goToActiveFormatAction } = useScNavigation();

  const onBtnClick = (action: string) => () => {
    goToActiveFormatAction(action);
  };

  return (
    <>
      {!props.isLoading && (
        <div className={styles.historyPanelWrap}>
          {props.requests.map(({ action }, ind) => (
            <ScTag
              key={ind}
              as="span"
              className={classNames(styles.historyBtn, {
                [styles.historyBtnActive]: String(action) === match?.params.action,
              })}
              addr={action}
              onClick={onBtnClick(String(action))}
            >
              <ScLangText addrOrSystemId={action} defaultText={String(action)} />
            </ScTag>
          ))}
        </div>
      )}
      {props.isLoading && <Skeleton />}
    </>
  );
};
