import classNames from 'classnames';
import React from 'react';
import { useFormContext } from 'react-hook-form';

import { UiCheckboxProps } from './typings';
import styles from './UiCheckbox.module.scss';

export const UiCheckbox: React.FC<UiCheckboxProps> = ({
	name,
	className,
	...otherProps
}) => {
	const { register } = useFormContext();

	return (
		<input
			type="checkbox"
			{...register(name)}
			name={name}
			className={classNames(styles.uiCheckbox, className)}
			{...otherProps}
		/>
	);
};
