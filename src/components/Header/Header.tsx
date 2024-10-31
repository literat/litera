import React from 'react';
import styles from './Header.module.scss';
import Navigation from '@local/components/Navigation/Navigation';

export default function Header() {
  return (
    <header>
      <div className={styles.bar}>
      <Navigation />
    </div>
    </header>
  )
}
