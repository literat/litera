import { Metadata } from 'next';
import { ReactNode } from 'react';
import { inter } from '@local/ui/fonts';
import { ThemeProvider } from 'next-themes';
import { Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
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
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Theme
            accentColor="gray"
            grayColor="gray"
            radius="medium"
            panelBackground="solid"
          >
            {children}
          </Theme>
        </ThemeProvider>
      </body>
    </html>
  );
}
