import classNames from 'classnames';
import React from 'react';

import { UiTextAreaFieldProps } from './typings';
import styles from './UiTextAreaField.module.scss';

export const UiTextAreaField: React.FC<UiTextAreaFieldProps> = ({
  name,
  className,
  ...otherProps
}) => {
  return (
    <textarea
      name={name}
      className={classNames(styles.uiTextAreaField, className)}
      rows={5}
      {...otherProps}
    />
  );
};
