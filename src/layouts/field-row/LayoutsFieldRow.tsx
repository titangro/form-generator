import React from 'react';
import styles from './LayoutsFieldRow.module.scss';
import { LayoutsFieldRowProps } from './typings';

export const LayoutsFieldRow: React.FC<LayoutsFieldRowProps> = ({
	children,
	label,
}) => {
	return (
		<div className={styles.layoutsFieldRow}>
			<div className={styles.layoutsFieldRow__labelWrap}>
				<span className={styles.layoutsFieldRow__label}>{label}</span>
			</div>
			<div className={styles.layoutsFieldRow__fieldWrap}>{children}</div>
		</div>
	);
};
