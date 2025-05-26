import { useToast, useTranslate } from 'ostis-ui-lib';

import { useLocation } from 'react-router-dom';
import { ChangeEvent, useEffect, useReducer, useState, useRef, useCallback } from 'react';

import { Spinner, useLanguage } from 'ostis-ui-lib';
import { SPINER_COLOR } from '@constants';
import { AskElement } from './AskElement';
import { TextItem } from '@components/AskAnswer/AskElement/AnswerText';

import styles from './AskAnswer.module.scss';
import { AskInput } from '@components/AskInput';

import { getHintButtonHandler } from 'src/constants/hintButtons';
import { getDescriptionById } from '@api/requests/getDescription';
import { useDispatch, useSelector } from 'react-redux';
import { addInHistory, selectRequests } from '@store/requestDialogHistorySlice';
import { Notification } from '@components/Notification';

interface NavigateState {
  query?: string;
  isHintButton: boolean;
}


export const AskAnswer = () => {
  const state = useLocation().state as NavigateState;

  const lang = useLanguage();

  const dispatch = useDispatch();
  const history = useSelector(selectRequests);

  const [isLoading, setIsLoading] = useState(false);

  const [query, setQuery] = useState<string>();

  const { addToast } = useToast();

  const scrollRef = useRef<HTMLDivElement>(null);

  const translate = useTranslate();

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => setQuery(e.currentTarget.value);
  const onInputSubmit = async () => await fetchAnswerByQuery(query);

  const fetchAnswerByQuery = async (query: string | undefined, isHintButton: boolean = false) => {
    if (!query) return;

    let answer: string | TextItem[] | null = null;

    setIsLoading(true);

    if (isHintButton) {
      const handler = getHintButtonHandler(query, lang);
      answer = await handler();
    } else {
      answer = await getDescriptionById(query, lang);
    }

    if (answer) {
      dispatch(addInHistory({ query, answer }));
    } else {
      dispatch(
        addInHistory({
          query,
          answer: translate({
            ru: 'К сожалению, в настоящее время нет информации, соответствующей вашему вопросу в базе знаний. Приносим извинения за неудобства.',
            en: 'Unfortunately, there is currently no information corresponding to your question in the knowledge base. We apologize for the inconvenience.',
          }),
        }),
      );
    }

    setIsLoading(false);
  };

  useEffect(() => {
    if (state.query) {
      fetchAnswerByQuery(state.query, state.isHintButton);
    }
  }, [state]);

  useEffect(() => {
    scrollToBottom();
  }, [history]);

  const scrollToBottom = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: 'auto', block: 'end' });
    }
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

  if (!state) return null;

  if (isLoading) return <Spinner className={styles.spinner} appearance={SPINER_COLOR} />;

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.history}>
        {history.map((entry, idx) => (
          <AskElement key={idx} {...entry} />
        ))}
        <div ref={scrollRef} />
      </div>
      <AskInput
        className={styles.inputQueryBar}
        onChange={onInputChange}
        onSubmit={onInputSubmit}
        onEmptySubmit={onEmptySubmit}
      />
    </div>
  );
};
