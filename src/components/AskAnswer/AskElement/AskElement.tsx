import { FC } from 'react';
import styles from './AskElement.module.scss';
//import { AnswerText } from '@components/AskAnswer/AskElement/AnswerText';

import AskAIMessageIcon from '@assets/images/AskAIMessageIcon.svg';

interface IProps {
  query: string;
  answer: any;
}

export const AskElement: FC<IProps> = ({ query, answer }) => {
  return (
    <div className={styles.elementWrapper}>
      <div className={styles.elementQuery}>{query}</div>
      <div className={styles.elementAnswer}>
        <div>{<AskAIMessageIcon />}</div>
        {/* <div><AnswerText items={answer} /></div> */}
      </div>
    </div>
  );
};
