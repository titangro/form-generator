import React from 'react';

import { UiButton } from '~/components/ui/button/UiButton';
import { UiCheckbox } from '~/components/ui/checkbox/UiCheckbox';
import { UiDateField } from '~/components/ui/date-field/UiDateField';
import { UiNumberField } from '~/components/ui/number-field/UiNumberField';
import { UiRadioButtons } from '~/components/ui/radio-buttons/UiRadioButtons';
import { UiTextAreaField } from '~/components/ui/text-area-field/UiTextAreaField';
import { UiTextField } from '~/components/ui/text-field/UiTextField';
import { LayoutsButtons } from '../buttons/LayoutsButtons';
import { LayoutsFieldRow } from '../field-row/LayoutsFieldRow';

import styles from './LayoutsResult.module.scss';
import { LayoutsResultProps } from './typings';

export const LayoutsResult: React.FC<LayoutsResultProps> = ({
	// children
	handleSubmit,
}) => {
	return (
		<form className={styles.layoutsResult} onSubmit={handleSubmit}>
			{/* children */}
			<LayoutsFieldRow label="Count">
				<UiNumberField name="count" />
			</LayoutsFieldRow>
			<LayoutsFieldRow label="Is Editable">
				<UiCheckbox name="Is Editable" />
			</LayoutsFieldRow>
			<LayoutsFieldRow label="Caption">
				<UiTextField name="Caption" />
			</LayoutsFieldRow>
			<LayoutsFieldRow label="Description">
				<UiTextAreaField name="Description" />
			</LayoutsFieldRow>
			<LayoutsFieldRow label="Date">
				<UiDateField name="Date" />
			</LayoutsFieldRow>
			<LayoutsFieldRow label="Radio">
				<UiRadioButtons name="Radio" values={['male', 'female']} />
			</LayoutsFieldRow>
			{/* end children */}

			<LayoutsButtons>
				{/* buttons */}
				<UiButton
					type="button"
					onClick={handleSubmit}
					className={styles.layoutsResult__button}
				>
          Cancel
				</UiButton>
				<UiButton
					type="button"
					onClick={handleSubmit}
					className={styles.layoutsResult__button}
				>
          Save
				</UiButton>
				{/* end buttons */}
			</LayoutsButtons>
		</form>
	);
};
