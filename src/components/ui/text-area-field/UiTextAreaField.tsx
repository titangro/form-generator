import classNames from 'classnames';
import React from 'react';
import { useFormContext, useController } from 'react-hook-form';
import { LayoutsError } from '~/layouts/error/LayoutsError';

import { UiTextAreaFieldProps } from './typings';
import styles from './UiTextAreaField.module.scss';

export const UiTextAreaField: React.FC<UiTextAreaFieldProps> = ({
  name,
  className,
  ...otherProps
}) => {

  const { formState: { errors } } = useFormContext();
  
  const filedError = errors[name]?.message;

  const { field: { ref, ...fieldProps} } = useController({ name })

  return (
    <div className={classNames(styles.uiTextAreaField, className)}>
      <textarea
        {...fieldProps}
        ref={ref}
        className={classNames(styles.uiTextAreaField__textarea)}
        rows={5}
        {...otherProps}
      />
      {filedError && <LayoutsError>{filedError}</LayoutsError>}
    </div>
  );
};
