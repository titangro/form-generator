import React from 'react';
import { TabsHeadItem } from './head-item/TabsHeadItem';
import { TabsProps } from './typings';

import styles from './Tabs.module.scss';

export const Tabs: React.FC<TabsProps> = (props) => {
  const { components, activeName, handleActiveName } = props;

  const names = Object.keys(components);

  const getContent = (name?: string) => {
    return (name && components[activeName]) || <>empty tab</>;
  };

  return (
    <div className={styles.tabs}>
      <div className={styles.tabs__head}>
        {names.map((tabName) => (
          <TabsHeadItem
            name={tabName}
            isActive={tabName === activeName}
            handleActiveName={handleActiveName}
          />
        ))}
      </div>
      <div className={styles.tabs__content}>{getContent(activeName)}</div>
    </div>
  );
};
