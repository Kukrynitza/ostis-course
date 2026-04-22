import { FC } from 'react';
import AskAIMessageIcon from '@assets/images/AskAIMessageIcon.svg';
import styles from './AskElement.module.scss';

interface IProps {
  query: string;
  answer: string;
}

export const AskElement: FC<IProps> = ({ query, answer }) => {
  console.log('AskElement: rendering, answer =', answer);
  return (
    <div className={styles.elementWrapper}>
      <div className={styles.elementQuery}>{query}</div>
      <div className={styles.elementAnswer}>
        <div>{<AskAIMessageIcon />}</div>
        <div className={styles.answerText}>{answer}</div>
      </div>
    </div>
  );
};
