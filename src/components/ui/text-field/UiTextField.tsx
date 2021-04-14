import classNames from 'classnames';
import React from 'react';

import { UiTextFieldProps } from './typings';
import styles from './UiTextField.module.scss';

export const UiTextField: React.FC<UiTextFieldProps> = ({
	name,
	className,
	...otherProps
}) => {
	return (
		<input
			type="text"
			name={name}
			className={classNames(styles.uiTextField, className)}
			{...otherProps}
		/>
	);
};
