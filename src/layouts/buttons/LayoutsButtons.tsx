import React from 'react';
import styles from './LayoutsButtons.module.scss';

export const LayoutsButtons: React.FC = ({ children }) => {
  return <div className={styles.layoutsButtons}>{children}</div>;
};
