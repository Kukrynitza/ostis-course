import cn from 'classnames';
import {
  ChangeEvent,
  InputHTMLAttributes,
  KeyboardEvent,
  MouseEvent,
  forwardRef,
  useRef,
  useState,
} from 'react';
import AskAIInputButton from '@assets/images/AskAIInputButton.svg';
import AskAIInputButtonThemed from '@assets/images/AskAIInputButtonThemed.svg';

import { useThemeContext } from '@themes/index';
import { refSetter, useTranslate } from 'ostis-ui-lib';

import styles from './AskInput.module.css';

interface IProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'onChange' | 'onFocus' | 'onBlur' | 'value'
> {
  className?: string;
  onEmptySubmit: () => void;
  onSubmit: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLDivElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLDivElement>) => void;
  value?: string;
}

export const AskInput = forwardRef<HTMLInputElement, IProps>(
  (
    {
      className,
      onChange,
      onSubmit,
      onEmptySubmit,
      onFocus: onFocusFromProps,
      onBlur: onBlurFromProps,
      value: valueFromProps,
      ...props
    },
    ref,
  ) => {
    const [searchValue, setSearchValue] = useState('');

    const translate = useTranslate();
    const { resolved } = useThemeContext();
    const isDark = resolved === 'dark';

    const innerRef = useRef<HTMLInputElement>(null);

    const currentValue = valueFromProps !== undefined ? valueFromProps : searchValue;
    const isControlled = valueFromProps !== undefined;

    const onWrapperClick = (e: MouseEvent<HTMLDivElement>) => {
      const target = e.target as HTMLElement;
      if (target.closest('input')) {
        return;
      }
      innerRef?.current?.focus();
    };

    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
      const newValue = e.currentTarget.value;
      if (!isControlled) {
        setSearchValue(newValue);
      }
      onChange(e);
    };

    const handleKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
      const code = e.code;
      switch (code) {
        case 'Enter': {
          handleSubmit();
          break;
        }
      }
    };

    const onInputKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
      const code = e.code;
      const preventKeys = ['Enter'];
      if (preventKeys.includes(code)) {
        e.preventDefault();
      }
    };

    const onFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      onFocusFromProps?.(e);
    };

    const onBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      if (e.currentTarget.contains(e.relatedTarget)) {
        onBlurFromProps?.(e);
      }
    };

    const handleSubmit = () => {
      if (!currentValue.trim()) {
        onEmptySubmit();
        return;
      }
      onSubmit();
      if (!isControlled) {
        resetInput();
      }
    };

    const resetInput = () => {
      setSearchValue('');
    };

    return (
      <div
        className={cn(className, styles.inputWrapper)}
        onKeyUp={handleKeyUp}
        onClick={onWrapperClick}
        onFocus={onFocus}
        onBlur={onBlur}
      >
        <input
          {...props}
          className={styles.dialogInput}
          placeholder={translate({
            ru: '🪄 Спросите AskAI',
            en: '🪄 Ask AskAI a question',
          })}
          title={translate({
            ru: 'Введите вопрос для AskAI',
            en: 'Type a question for AskAI',
          })}
          aria-label={translate({
            ru: 'Поле ввода вопроса',
            en: 'Question input field',
          })}
          ref={refSetter<HTMLInputElement>(ref, innerRef)}
          value={currentValue}
          onKeyDown={onInputKeyDown}
          onChange={onInputChange}
        />
        <button
          className={styles.dialogBoxButton}
          onClick={handleSubmit}
          type="button"
          title={translate({
            ru: 'Отправить вопрос',
            en: 'Send question',
          })}
          aria-label={translate({
            ru: 'Отправить вопрос',
            en: 'Send question',
          })}
        >
          {isDark ? <AskAIInputButtonThemed /> : <AskAIInputButton />}
        </button>
      </div>
    );
  },
);
AskInput.displayName = 'AskInput';
