import React from 'react';
import Link from 'next/link';
import styles from './Navigation.module.scss';
import Logout from '@local/features/auth/Logout';

export default function Navigation() {
  return (
    <ul className={styles.navigation}>
      <Link href="/home">Home</Link>
      <Link href="/home/fits">Fits</Link>
      <Link href="/home/energy">Energy</Link>
      <Link href="/home/weather">Weather</Link>
      <Link href="/shop">Shop</Link>
      <Logout />
    </ul>
  );
}
