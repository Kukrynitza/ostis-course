import { FC } from 'react';
import { Spinner } from 'ostis-ui-lib';
import { SPINER_COLOR } from '@constants';

import styles from './CenteredSpinner.module.css';

/** Единое положение и цвет спиннера для основных экранов загрузки. */
export const CenteredSpinner: FC = () => (
  <div className={styles.wrap}>
    <Spinner appearance={SPINER_COLOR} />
  </div>
);
