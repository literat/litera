import React, { ReactNode } from 'react';
import '@local/ui/home.globals.scss';
import { Header } from '@local/ui/Header';
import { Inner } from '@local/ui/Inner';

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <Inner>{children}</Inner>
    </>
  );
}
