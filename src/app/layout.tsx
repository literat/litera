import { Metadata } from 'next';
import { ReactNode } from 'react';
import { inter } from '@local/ui/fonts';
import React from 'react';

export const metadata: Metadata = {
  title: {
    template: '%s | Litera.me',
    default: 'Litera.me',
  },
  description: 'Litera Family',
  metadataBase: new URL('https://litera.me'),
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
