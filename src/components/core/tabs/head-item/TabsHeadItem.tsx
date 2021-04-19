import React from 'react';
import { TabsHeadItemProps } from './typings';

import styles from './TabsHeadItem.module.scss';
import { UiButton } from '~/components/ui/button/UiButton';

export const TabsHeadItem: React.FC<TabsHeadItemProps> = (props) => {
	const { name, isActive, handleActiveName } = props;

	const handleClick = () => {
		handleActiveName(name === 'config' ? '' : name);
	};

	return (
		<UiButton
			className={styles.tabsHeadItem}
			isActive={isActive}
			onClick={handleClick}
		>
			{name}
		</UiButton>
	);
};
