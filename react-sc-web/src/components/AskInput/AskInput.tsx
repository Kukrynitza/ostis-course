import cn from 'classnames';
import {
  ChangeEvent,
  InputHTMLAttributes,
  KeyboardEvent,
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

    const onWrapperClick = () => {
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
        onMouseDown={(e) => e.preventDefault()}
        onFocus={onFocus}
        onBlur={onBlur}
      >
        <input
          className={styles.dialogInput}
          placeholder={translate({
            ru: '🪄 Спросите IMS',
            en: '🪄 Ask IMS',
          })}
          ref={refSetter<HTMLInputElement>(ref, innerRef)}
          value={currentValue}
          onKeyDown={onInputKeyDown}
          onChange={onInputChange}
        />
        <button className={styles.dialogBoxButton} onClick={handleSubmit}>
          {isDark ? <AskAIInputButtonThemed /> : <AskAIInputButton />}
        </button>
      </div>
    );
  },
);
