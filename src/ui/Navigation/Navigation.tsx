import React from 'react';
import Link from 'next/link';
import styles from './Navigation.module.scss';
import Logout from '@local/features/auth/ui/Logout';

export default function Navigation() {
  return (
    <ul className={styles.navigation}>
      <Link href="/home">Home</Link>
      <Link href="/home/fits">Fits</Link>
      {/* @see https://github.com/literat/litera/issues/70 */}
      {/* <Link href="/home/energy">Energy</Link> */}
      {/* @see https://github.com/literat/litera/issues/71 */}
      {/* <Link href="/home/weather">Weather</Link> */}
      {/* @see https://github.com/literat/litera/issues/69 */}
      {/* <Link href="/shop">Shop</Link> */}
      <Logout />
    </ul>
  );
}
