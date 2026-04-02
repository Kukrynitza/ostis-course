import { Popup } from 'ostis-ui-lib';

import styles from './Scg.module.css';

export const confirmDeletePopupContent = (
  <div className={styles.popup}>
    Вы уверены, что хотите <b>удалить</b> выделенные элементы из базы знаний?
    <b>Это действие нельзя будет отменить после синхронизации изменений.</b>
  </div>
);

export const confirmClearScenePopupContent = (
  <div className={`${styles.popup} ${styles.popup_clear}`}>
    В результе этого действия из рабочего пространства будут <b>удалены</b> все элементы.
    <br />
    <b>Это действие нельзя отменить.</b>
  </div>
);
