import classNames from 'classnames';
import { ButtonHTMLAttributes, ReactNode } from 'react';

import styles from './Button.module.css';

export type TAppearance = 'primaryLarge' | 'primaryAction' | 'secondaryAction';
interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  appearance?: TAppearance;
  children: ReactNode;
  squared?: boolean;
}

export const Button = ({
  children,
  appearance = 'primaryAction',
  className,
  ...restProps
}: IButton) => {
  const stringChildren = typeof children === 'string' ? children.trim() : '';
  const defaultTooltip = stringChildren || undefined;
  const title = restProps.title ?? defaultTooltip;
  const ariaLabel = restProps['aria-label'] ?? defaultTooltip;

  return (
    <button
      className={classNames(styles.button, styles[`button_${appearance}`], className)}
      title={title}
      aria-label={ariaLabel}
      {...restProps}
    >
      {children}
    </button>
  );
};
