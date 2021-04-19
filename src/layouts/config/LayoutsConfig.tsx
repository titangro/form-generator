import React from 'react';
// import { useFormContext } from 'react-hook-form';
import { ConfigFormDataField } from '~/components/base/config/typings';
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
			<UiTextAreaField
				name={ConfigFormDataField.JSON}
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
