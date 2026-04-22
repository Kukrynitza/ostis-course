import { FC, ReactNode } from 'react';
import { Button } from '@components/Button';
import styles from './ConfirmAction.module.scss';

interface IProps {
  onComplete: () => void;
  onClose: () => void;
  title: string;
  content: ReactNode | string;
  completeBtnText: string;
  className?: string;
}

export const ConfirmAction: FC<IProps> = ({
  onComplete,
  onClose,
  title,
  content,
  completeBtnText = 'Подтвердить',
}) => {
  const onCompleteFunc = () => {
    onComplete();
    onClose();
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>{title}</div>
      <div className={styles.content}>{content}</div>
      <div className={styles.buttons}>
        <Button className={styles.button} appearance="secondaryAction" onClick={onClose}>
          Отмена
        </Button>
        <Button className={styles.button} onClick={onCompleteFunc}>
          {completeBtnText}
        </Button>
      </div>
    </div>
  );
};
