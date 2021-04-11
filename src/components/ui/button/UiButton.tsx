import React from 'react';
import classNames from 'classnames';
import { UiButtonProps } from './typings';

import styles from './UiButton.module.scss';

export const UiButton: React.FC<UiButtonProps> = ({ children, className }) => {
  return (
    <button className={classNames(styles.button, className)}>{children}</button>
  );
};
