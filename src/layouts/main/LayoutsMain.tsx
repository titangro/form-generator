import React from 'react';
import styles from './LayoutsMain.module.scss';
console.log(
  '🚀 ~ file: LayoutsMain.tsx ~ line 3 ~ styles',
  styles,
  styles.layoutsMain
);

export const LayoutsMain: React.FC = ({ children }) => {
  return <main className={styles.layoutsMain}>{children}</main>;
};
