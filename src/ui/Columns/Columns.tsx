import React, { ReactNode } from 'react';
import styles from './Columns.module.scss';

export default function Columns({ children }: { children: ReactNode }) {
  return <div className={styles.Columns}>{children}</div>;
}
