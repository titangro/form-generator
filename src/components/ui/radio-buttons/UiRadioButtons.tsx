import classNames from 'classnames';
import React from 'react';

import { UiRadioButtonsProps } from './typings';
import styles from './UiRadioButtons.module.scss';

export const UiRadioButtons: React.FC<UiRadioButtonsProps> = ({
  name,
  values,
  className,
  ...otherProps
}) => {
  return (
    <div className={classNames(styles.uiRadioButtons, className)}>
      {values.map((fieldValue) => (
        <label key={fieldValue} className={styles.uiRadioButtons__label}>
          <input
            type="radio"
            name={name}
            className={styles.uiRadioButtons__input}
            {...otherProps}
          />
          <span className={styles.uiRadioButtons__title}>{fieldValue}</span>
        </label>
      ))}
    </div>
  );
};
