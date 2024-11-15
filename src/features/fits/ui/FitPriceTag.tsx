import { ReactNode } from 'react';
import styles from './FitPriceTag.module.scss';

interface FitPriceTagProps {
  children: ReactNode;
}

export function FitPriceTag({ children }: FitPriceTagProps) {
  return <span className={styles.FitPriceTag}>{children}</span>;
}
