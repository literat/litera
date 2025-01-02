import React, { ReactNode } from 'react';
import styles from './SegmentedControl.module.scss';

export default function SegmentedControl({
  children,
}: {
  children: ReactNode;
}) {
  return <div className={styles.SegmentedControl}>{children}</div>;
}
