import React from 'react';
import { TabsHeadItemProps } from './typings';
import classNamesBind from 'classnames/bind';

import styles from './TabsHeadItem.module.scss';
import { UiButton } from '~/components/ui/button/UiButton';

const cx = classNamesBind.bind(styles);

export const TabsHeadItem: React.FC<TabsHeadItemProps> = (props) => {
  const { name, isActive } = props;

  return (
    <UiButton
      className={cx('tabs-head-item', {
        tabsHeadItemActive: isActive,
      })}
    >
      {name}
    </UiButton>
  );
};
