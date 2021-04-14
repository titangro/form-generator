import classNames from 'classnames';
import React from 'react';
import { useFormContext } from 'react-hook-form';

import { UiRadioButtonsProps } from './typings';
import styles from './UiRadioButtons.module.scss';

export const UiRadioButtons: React.FC<UiRadioButtonsProps> = ({
	name,
	values,
	className,
	...otherProps
}) => {
	const { register } = useFormContext();

	return (
		<div className={classNames(styles.uiRadioButtons, className)}>
			{values &&
				values.map((fieldValue) => (
					<label key={fieldValue} className={styles.uiRadioButtons__label}>
						<input
							type="radio"
							{...register(name)}
							value={fieldValue}
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
