import classNames from 'classnames';
import React from 'react';
import { useFormContext } from 'react-hook-form';

import { UiDateFieldProps } from './typings';
import styles from './UiDateField.module.scss';

export const UiDateField: React.FC<UiDateFieldProps> = ({
	name,
	className,
	...otherProps
}) => {
	const { register } = useFormContext();

	return (
		<input
			type="date"
			{...register(name)}
			name={name}
			className={classNames(styles.uiDateField, className)}
			{...otherProps}
		/>
	);
};
