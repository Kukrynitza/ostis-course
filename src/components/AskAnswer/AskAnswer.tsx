import { useToast, useTranslate, Spinner, useLanguage } from 'ostis-ui-lib';
import { ChangeEvent, useEffect, useState, useRef, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getDescriptionById } from '@api/requests/getDescription';
import { TextItem } from '@components/AskAnswer/AskElement/AnswerText';
import { AskInput } from '@components/AskInput';
import { Notification } from '@components/Notification';
import { SPINER_COLOR } from '@constants';
import { addInHistory, selectRequests } from '@store/requestDialogHistorySlice';
import { getHintButtonHandler } from 'src/constants/hintButtons';
import styles from './AskAnswer.module.scss';
import { AskElement } from './AskElement';

interface NavigateState {
  query?: string;
  isHintButton: boolean;
}

export const AskAnswer = () => {
  const locationState = useLocation().state as NavigateState;

  const lang = useLanguage();

  const dispatch = useDispatch();
  const history = useSelector(selectRequests);

  console.log('AskAnswer: render, history.length =', history.length);

  const [isLoading, setIsLoading] = useState(false);
  const [initialQuery] = useState<string | undefined>(locationState?.query);
  const initialIsHintButton = locationState?.isHintButton || false;

  const [inputValue, setInputValue] = useState('');

  const { addToast } = useToast();

  const scrollRef = useRef<HTMLDivElement>(null);
  const queryInProgressRef = useRef(false);
  const initialQueryProcessedRef = useRef(false);
  const langRef = useRef(lang);
  langRef.current = lang;

  const translate = useTranslate();

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value);
  };

  const onInputSubmit = useCallback(async () => {
    const currentQuery = inputValue.trim();
    if (currentQuery && !queryInProgressRef.current) {
      await fetchAnswer(currentQuery);
      setInputValue('');
    } else if (!currentQuery) {
      onEmptySubmit();
    }
  }, [inputValue]);

  const fetchAnswer = async (queryText: string | undefined, isHintButton: boolean = false) => {
    if (!queryText || queryInProgressRef.current) return;
    queryInProgressRef.current = true;

    let answer: string | TextItem[] | null = null;

    setIsLoading(true);
    console.log('AskAI: Fetching answer for:', queryText);

    try {
      if (isHintButton) {
        const handler = getHintButtonHandler(queryText, langRef.current);
        answer = await handler();
      } else {
        answer = await getDescriptionById(queryText, langRef.current);
      }
      console.log('AskAI: Got answer:', answer ? 'YES' : 'NO');

      if (answer) {
        console.log('AskAI: Dispatching addInHistory');
        dispatch(addInHistory({ query: queryText, answer }));
      } else {
        dispatch(
          addInHistory({
            query: queryText,
            answer: translate({
              ru: 'Я не нашёл ответа на ваш вопрос. Попробуйте задать его иначе.',
              en: 'I did not find an answer to your question. Try asking it differently.',
            }),
          }),
        );
      }
    } catch (error) {
      console.error('AskAI: Error:', error);
      dispatch(
        addInHistory({
          query: queryText,
          answer: translate({
            ru: 'Произошла ошибка при получении ответа.',
            en: 'An error occurred while getting the answer.',
          }),
        }),
      );
    } finally {
      setIsLoading(false);
      queryInProgressRef.current = false;
    }
  };

  const handleInitialQuery = () => {
    if (initialQuery && !initialQueryProcessedRef.current) {
      console.log('AskAI: Processing initial query:', initialQuery);
      initialQueryProcessedRef.current = true;
      fetchAnswer(initialQuery, initialIsHintButton);
    }
  };

  useEffect(() => {
    handleInitialQuery();
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [history]);

  const scrollToBottom = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: 'auto', block: 'end' });
    }
  };

  const onEmptySubmit = () => {
    addToast(
      <Notification
        type="warning"
        title={{
          ru: 'Вы не можете отправить пустой запрос',
          en: `It is impossible to save an empty fragment`,
        }}
      />,
      {
        position: 'bottomRight',
        duration: 20000,
      },
    );
  };

  if (!initialQuery && history.length === 0) return null;

  if (isLoading)
    return (
      <div className={styles.spinnerWrapper}>
        <Spinner appearance={SPINER_COLOR} />
      </div>
    );

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
        value={inputValue}
      />
    </div>
  );
};
