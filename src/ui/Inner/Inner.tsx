import React, { ReactNode } from 'react';
import { Container } from '@radix-ui/themes';

export default function Inner({ children }: { children: ReactNode }) {
  return (
    <Container size="3" py="6">
      {children}
    </Container>
  );
}
