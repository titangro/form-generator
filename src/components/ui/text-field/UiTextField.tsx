import classNames from 'classnames';
import React from 'react';
import { useFormContext } from 'react-hook-form';

import { UiTextFieldProps } from './typings';
import styles from './UiTextField.module.scss';

export const UiTextField: React.FC<UiTextFieldProps> = ({
	name,
	className,
	...otherProps
}) => {
	const { register } = useFormContext();

	return (
		<input
			type="text"
			{...register(name)}
			name={name}
			className={classNames(styles.uiTextField, className)}
			{...otherProps}
		/>
	);
};
