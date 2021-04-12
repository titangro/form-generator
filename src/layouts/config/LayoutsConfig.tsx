import React from 'react';
import { UiButton } from '~/components/ui/button/UiButton';
import { UiTextAreaField } from '~/components/ui/text-area-field/UiTextAreaField';
import { LayoutsButtons } from '../buttons/LayoutsButtons';
import styles from './LayoutsConfig.module.scss';
console.log('🚀 ~ file: LayoutsConfig.tsx ~ line 6 ~ styles', styles);
import { LayoutsConfigProps } from './typings';

export const LayoutsConfig: React.FC<LayoutsConfigProps> = ({
  handleSubmit,
}) => {
  return (
    <form className={styles.layoutsConfig} onSubmit={handleSubmit}>
      <UiTextAreaField
        name="JSON-parser"
        className={styles.layoutsConfig__jsonField}
        rows={20}
      />
      <LayoutsButtons>
        <UiButton
          type="submit"
          onSubmit={handleSubmit}
          className={styles.layoutsConfig__button}
        >
          Apply
        </UiButton>
      </LayoutsButtons>
    </form>
  );
};
