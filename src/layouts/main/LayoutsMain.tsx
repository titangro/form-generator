import React from 'react';
import styles from './LayoutsMain.module.scss';

export const LayoutsMain: React.FC = ({ children }) => {
  return <main className={styles.layoutsMain}>{children}</main>;
};
