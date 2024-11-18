import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home',
};

export default function Home() {
  return (
    <main>
      <div>
        <p>Litera.me</p>
      </div>
    </main>
  );
}
