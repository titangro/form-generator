import React from 'react';
import classNames from 'classnames';

import styles from './LayoutsError.module.scss';

export const LayoutsError: React.FC<{className?: string}> = ({ children, className }) => {
	return <div className={classNames(styles.layoutsError, className)}>{children}</div>;
};