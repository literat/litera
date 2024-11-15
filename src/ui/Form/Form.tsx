import React, { ReactNode } from 'react';
import styles from './Form.module.scss';
import Form, { FormProps as NextFormProps } from 'next/form';

interface FormProps extends NextFormProps<any> {
  children: ReactNode;
  [key: string]: unknown;
}

export default function Columns({
  children,
  action,
  ...rest
}: FormProps & { action: (formData: FormData) => void }) {
  return (
    <Form {...rest} action={action} className={styles.Form}>
      {children}
    </Form>
  );
}
