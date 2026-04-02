import classNames from 'classnames';
import { FC, ReactNode } from 'react';
import ChevronDown from '@assets/images/chevronDown.svg';
import { IconButton } from '@components/IconButton';
import { Expandable, useBooleanState } from 'ostis-ui-lib';

import styles from './Accordion.module.css';

interface IProps {
  header: ReactNode;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  children: ReactNode;
  className?: string;
  expanded?: boolean;
  isAutoControl?: boolean;
  onRightClick?: () => void;
  onToggle?: (expanded: boolean) => void;
}

export const Accordion: FC<IProps> = ({
  header,
  leftIcon,
  rightIcon,
  children,
  className,
  onToggle,
  expanded: outerExpanded = true,
  isAutoControl = true,
  onRightClick,
}) => {
  const [expanded, , , onToggleExpanded] = useBooleanState(outerExpanded, {
    updateable: true,
  });

  const onHeaderClick = () => {
    if (isAutoControl) {
      onToggle?.(expanded);
      onToggleExpanded();
      return;
    }
    onToggle?.(expanded);
  };

  const onIconBtnClick = () => {
    if (!expanded) onHeaderClick();

    onRightClick?.();
  };

  return (
    <div className={className}>
      <div className={styles.headerWrapper}>
        <div className={styles.leftContent} onClick={onHeaderClick}>
          {leftIcon && <div className={styles.icon}>{leftIcon}</div>}
          {header}
          <div
            className={classNames(styles.chevronDownWrapper, {
              [styles.chevronDownWrapper_expanded]: expanded,
            })}
          >
            <ChevronDown width="24" height="24" />
          </div>
        </div>
        {rightIcon && (
          <IconButton squared={true} onClick={onIconBtnClick}>
            {rightIcon}
          </IconButton>
        )}
      </div>
      <Expandable expanded={expanded}>
        <div
          className={classNames(styles.contentWrapper, {
            [styles.contentWrapper_expanded]: expanded,
          })}
        >
          {children}
        </div>
      </Expandable>
    </div>
  );
};
