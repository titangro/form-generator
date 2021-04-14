import classNames from 'classnames';
import React from 'react';

import { UiDateFieldProps } from './typings';
import styles from './UiDateField.module.scss';

export const UiDateField: React.FC<UiDateFieldProps> = ({
	name,
	className,
	...otherProps
}) => {
	return (
		<input
			type="date"
			name={name}
			className={classNames(styles.uiDateField, className)}
			{...otherProps}
		/>
	);
};
