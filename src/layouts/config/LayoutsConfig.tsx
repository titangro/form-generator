import React from 'react';
import { UiButton } from '~/components/ui/button/UiButton';
import { UiTextAreaField } from '~/components/ui/text-area-field/UiTextAreaField';
import { LayoutsButtons } from '../buttons/LayoutsButtons';
import styles from './LayoutsConfig.module.scss';
import { LayoutsConfigProps } from './typings';

export const LayoutsConfig: React.FC<LayoutsConfigProps> = ({
  handleSubmit,
}) => {
  return (
    <form className={styles.layoutsConfig} onSubmit={handleSubmit}>
      <UiTextAreaField name="JSON-parser" className="" />
      <LayoutsButtons>
        <UiButton type="submit" onSubmit={handleSubmit}>
          Apply
        </UiButton>
      </LayoutsButtons>
    </form>
  );
};
