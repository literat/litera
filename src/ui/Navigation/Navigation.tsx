import React from 'react';
import Link from 'next/link';
import { Button, Flex } from '@radix-ui/themes';
import styles from './Navigation.module.scss';
import Logout from '@local/features/auth/ui/Logout';

export default function Navigation() {
  return (
    <Flex asChild gap="2" wrap="wrap" className={styles.navigation}>
      <nav>
        <Button asChild variant="ghost" size="3">
          <Link href="/home">Home</Link>
        </Button>
        <Button asChild variant="ghost" size="3">
          <Link href="/home/fits">Fits</Link>
        </Button>
        {/* @see https://github.com/literat/litera/issues/70 */}
        {/* <Link href="/home/energy">Energy</Link> */}
        {/* @see https://github.com/literat/litera/issues/71 */}
        {/* <Link href="/home/weather">Weather</Link> */}
        {/* @see https://github.com/literat/litera/issues/69 */}
        {/* <Link href="/shop">Shop</Link> */}
        <Logout />
      </nav>
    </Flex>
  );
}
