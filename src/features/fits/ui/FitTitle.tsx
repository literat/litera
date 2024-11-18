import { ReactNode } from 'react';
import styles from './FitTitle.module.scss';

interface FitTitleProps {
  children: ReactNode;
}

export function FitTitle({ children }: FitTitleProps) {
  return <h3 className={styles.FitTitle}>{children}</h3>;
}
