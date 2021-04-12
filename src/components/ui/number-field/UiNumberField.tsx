import classNames from 'classnames';
import React from 'react';

import { UiNumberFieldProps } from './typings';
import styles from './UiNumberField.module.scss';

export const UiNumberField: React.FC<UiNumberFieldProps> = ({
  name,
  className,
  ...otherProps
}) => {
  return (
    <input
      type="number"
      name={name}
      className={classNames(styles.uiNumberField, className)}
      {...otherProps}
    />
  );
};
