import React, { useContext } from 'react';

import { UiButton } from '~/components/ui/button/UiButton';
import { UiCheckbox } from '~/components/ui/checkbox/UiCheckbox';
import { UiDateField } from '~/components/ui/date-field/UiDateField';
import { UiNumberField } from '~/components/ui/number-field/UiNumberField';
import { UiRadioButtons } from '~/components/ui/radio-buttons/UiRadioButtons';
import { UiTextAreaField } from '~/components/ui/text-area-field/UiTextAreaField';
import { UiTextField } from '~/components/ui/text-field/UiTextField';
import { ConfigContext } from '~/contexts/ConfigContext';
import {
	GeneratorConfigItem,
	GeneratorButtonTypes,
	GeneratorFormTypes,
} from '~/types/generatorConfig';
import { LayoutsButtons } from '../buttons/LayoutsButtons';
import { LayoutsFieldRow } from '../field-row/LayoutsFieldRow';

import styles from './LayoutsResult.module.scss';
import { LayoutsResultProps } from './typings';

const getFieldByType = ({ type, label, values }: GeneratorConfigItem) => {
	const fileds = {
		[GeneratorFormTypes.Text]: <UiTextField name={label} />,
		[GeneratorFormTypes.TextArea]: <UiTextAreaField name={label} />,
		[GeneratorFormTypes.Date]: <UiDateField name={label} />,
		[GeneratorFormTypes.Number]: <UiNumberField name={label} />,
		[GeneratorFormTypes.RadioButtons]: (
			<UiRadioButtons name={label} values={values} />
		),
		[GeneratorFormTypes.Checkbox]: <UiCheckbox name={label} />,
	};

	return fileds[type] || fileds[GeneratorFormTypes.Text];
};

export const LayoutsResult: React.FC<LayoutsResultProps> = ({
	commonHandleClick,
	clickCancelButton,
	clickOkButton,
	clickSaveButton,
	message,
}) => {
	const { generatorConfig } = useContext(ConfigContext);

	const { items, label, buttons } = generatorConfig;

	const getHandleButtonByType = (configButtonType: GeneratorButtonTypes) => {
		const handles = {
			[GeneratorButtonTypes.Ok]: clickOkButton,
			[GeneratorButtonTypes.Cancel]: clickCancelButton,
			[GeneratorButtonTypes.Save]: clickSaveButton,
			[GeneratorButtonTypes.Apply]: commonHandleClick,
		};

		return handles[configButtonType] || commonHandleClick;
	};

	return (
		<form className={styles.layoutsResult} onSubmit={clickSaveButton}>
			<h1>{label}</h1>

			{items &&
				items.map((field) => {
					return (
						<LayoutsFieldRow key={field.id} label={field.label}>
							{getFieldByType(field)}
						</LayoutsFieldRow>
					);
				})}

			<pre className={styles.layoutsResult__message}>{message}</pre>

			<LayoutsButtons>
				{buttons.map((buttonType) => {
					return (
						<UiButton
							key={buttonType}
							type={
								buttonType === GeneratorButtonTypes.Save ? 'submit' : 'button'
							}
							onClick={getHandleButtonByType(buttonType)}
							className={styles.layoutsResult__button}
						>
							{buttonType}
						</UiButton>
					);
				})}
			</LayoutsButtons>
		</form>
	);
};
