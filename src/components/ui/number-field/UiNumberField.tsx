import classNames from 'classnames';
import React from 'react';
import { useFormContext } from 'react-hook-form';

import { UiNumberFieldProps } from './typings';
import styles from './UiNumberField.module.scss';

export const UiNumberField: React.FC<UiNumberFieldProps> = ({
	name,
	className,
	...otherProps
}) => {
	const { register } = useFormContext();

	return (
		<input
			type="number"
			{...register(name)}
			name={name}
			className={classNames(styles.uiNumberField, className)}
			{...otherProps}
		/>
	);
};
