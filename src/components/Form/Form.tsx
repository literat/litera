import React, { ReactNode } from 'react';
import styles from './Form.module.scss';

interface FormProps {
  children: ReactNode;
  rest: any;
}

export default function Form({ children, ...rest }: FormProps) {
  return (
    <form className={styles.Form} {...rest}>
      {children}
    </form>
  );
}
