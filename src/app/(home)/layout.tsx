import { Metadata } from 'next';
import React, { ReactNode } from 'react';
import { inter } from '@local/ui/fonts';
import '@local/styles/home-globals.scss';
import { Header } from '@local/ui/Header';
import { Inner } from '@local/ui/Inner';

export const metadata: Metadata = {
  title: {
    template: '%s | Home | Litera.me',
    default: 'Litera.me',
  },
  description: 'Home of the Litera Family',
  metadataBase: new URL('https://litera.me'),
};

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Header />
        <Inner>{children}</Inner>
      </body>
    </html>
  );
}
