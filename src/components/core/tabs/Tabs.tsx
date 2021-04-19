import React from 'react';
import { TabsHeadItem } from './head-item/TabsHeadItem';
import { TabsProps } from './typings';

import { useLocation, useHistory } from 'react-router-dom';

import styles from './Tabs.module.scss';

import { Config } from '~/components/base/config/Config';
import { Result } from '~/components/base/result/Result';

const getSection = (pathname: string) => {
	return pathname.slice(1).split('/')[0];
};

const getActiveTab = (sectionPath: string) => {
	if (sectionPath === 'result') {
		return <Result />;
	}

	return <Config />;
};

const tabs = ['config', 'result'];

export const Tabs: React.FC<TabsProps> = () => {
	const location = useLocation();
	const history = useHistory();
	const sectionPath = getSection(location.pathname) || 'config';

	const handleActiveName = (name: string) => {
		history.push({
			pathname: `/${name}`,
		});
	};

	return (
		<div className={styles.tabs}>
			<div className={styles.tabs__head}>
				{tabs.map((tabName) => (
					<TabsHeadItem
						key={tabName}
						name={tabName}
						isActive={tabName === sectionPath}
						handleActiveName={handleActiveName}
					/>
				))}
			</div>
			<div className={styles.tabs__content}>{getActiveTab(sectionPath)}</div>
		</div>
	);
};
