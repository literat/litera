import React, { ReactNode } from 'react';
import styles from './Inner.module.scss';

export default function Inner({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className={styles.inner}>
      {children}
    </div>
  );
}
