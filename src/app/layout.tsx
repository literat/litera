import { Metadata } from 'next';
import { ReactNode } from 'react';
import '../styles/globals.scss';
import { inter } from '../ui/fonts';

export const metadata: Metadata = {
  title: {
    template: '%s | Litera.me',
    default: 'Litera.me',
  },
  description: 'Litera Family',
  metadataBase: new URL('https://litera.me'),
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
