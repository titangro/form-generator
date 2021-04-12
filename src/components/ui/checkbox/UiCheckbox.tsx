import classNames from 'classnames';
import React from 'react';

import { UiCheckboxProps } from './typings';
import styles from './UiCheckbox.module.scss';

export const UiCheckbox: React.FC<UiCheckboxProps> = ({
  name,
  className,
  ...otherProps
}) => {
  return (
    <input
      type="checkbox"
      name={name}
      className={classNames(styles.uiCheckbox, className)}
      {...otherProps}
    />
  );
};
