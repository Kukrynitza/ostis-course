import { FC } from 'react';
import AskAIMessageIcon from '@assets/images/AskAIMessageIcon.svg';
import styles from './AskElement.module.css';

interface IProps {
  query: string;
  answer: string;
}

export const AskElement: FC<IProps> = ({ query, answer }) => {
  return (
    <div className={styles.elementWrapper}>
      <div className={styles.elementQuery} title={query}>
        {query}
      </div>
      <div className={styles.elementAnswer}>
        <div className={styles.iconWrapper} title="Ответ AskAI">
          {<AskAIMessageIcon />}
        </div>
        <div className={styles.answerText} title={answer}>
          {answer}
        </div>
      </div>
    </div>
  );
};
