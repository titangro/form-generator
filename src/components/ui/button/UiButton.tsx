import React from 'react';
import classNames from 'classnames';
import { UiButtonProps } from './typings';

import styles from './UiButton.module.scss';

export const UiButton: React.FC<UiButtonProps> = ({
  children,
  className,
  isActive,
  onClick,
  ...otherProps
}) => {
  return (
    <button
      className={classNames(styles.button, className, {
        [styles.button_active]: isActive,
      })}
      onClick={onClick}
      type="button"
      {...otherProps}
    >
      {children}
    </button>
  );
};
