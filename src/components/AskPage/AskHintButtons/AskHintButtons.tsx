import { useTranslate } from 'ostis-ui-lib';

import styles from './AskHintButtons.module.scss';

import { useNavigate } from 'react-router-dom';
import { routes } from '@constants';
import { hintButtons } from 'src/constants/hintButtons';

interface NavigateState {
  query?: string;
  isHintButton: boolean;
}

export const AskHintButtons = () => {
  const translate = useTranslate();
  const navigate = useNavigate();

  const handleButtonClick = (state: NavigateState) => {
    navigate(routes.ASK_AI_ANSWER, { state, replace: true });
  };

  return (
    <>
      {hintButtons.map((button, index) => {
        const translatedText = translate(button.text);
        return (
          <button
            key={index}
            className={styles.hintAskButton}
            onClick={() => {
              handleButtonClick({ query: translatedText, isHintButton: true });
            }}
          >
            {translatedText}
          </button>
        );
      })}
    </>
  );
};
