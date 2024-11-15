import React from 'react';
import styles from './Error.module.scss';

export default function Error({ error }: { error: string }) {
  if (!error) {
    return null;
  }

  return (
    <div className={styles.Error}>
      <p>
        <strong>Shoot!</strong>
        {error}
      </p>
    </div>
  );
}
