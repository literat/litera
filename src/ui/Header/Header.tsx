import React from 'react';
import { Flex, Separator } from '@radix-ui/themes';
import { Navigation } from '@local/ui/Navigation';

export default function Header() {
  return (
    <header>
      <Flex justify="end" align="stretch" wrap="wrap" py="4" px="5">
        <Navigation />
      </Flex>
      <Separator size="4" />
    </header>
  );
}
