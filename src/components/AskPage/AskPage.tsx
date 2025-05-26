import { useToast, useTranslate } from 'ostis-ui-lib';

import { ChangeEvent, useCallback, useState } from 'react';

import styles from './AskPage.module.scss';

import { useNavigate } from 'react-router-dom';
import { routes } from '@constants';

import { AskInput } from '@components/AskInput';
import { AskHintButtons } from './AskHintButtons';
import { Notification } from '@components/Notification';

interface NavigateState {
  query?: string;
  isHintButton: boolean;
}

export const AskPage = () => {
  const translate = useTranslate();
  const navigate = useNavigate();

  const { addToast } = useToast();

  const [query, setQuery] = useState<string>();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => setQuery(e.target.value);

  const handleButtonClick = (state: NavigateState) => {
    navigate(routes.ASK_AI_ANSWER, { state, replace: true });
  };

  const onEmptySubmit = useCallback(() => {
    addToast(
      <Notification
        type="warning"
        title={{
          ru: 'Вы не можете отправить пустой запрос',
          en: `It's impossible to save an empty fragment`,
        }}
      />,
      {
        position: 'bottomRight',
        duration: 2000,
      },
    );
  }, [addToast]);

  const onSubmit = () => {
    handleButtonClick({ query, isHintButton: false });
  };

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.askMessage}>
        <h1 className={styles.message}>
          {translate({
            ru: 'Спросите что-нибудь и IMS найдет ответ! ',
            en: 'Ask anything and IMS will find the answer!',
          })}
        </h1>
      </div>
      <div className={styles.suggestedQuestion}>
        <AskHintButtons />
      </div>
      <div className={styles.dialogBox}>
        <AskInput onChange={handleInputChange} onEmptySubmit={onEmptySubmit} onSubmit={onSubmit} />
      </div>
    </div>
  );
};
