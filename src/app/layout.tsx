'use client';

import './globals.css';
import { ReactNode } from 'react';
import Head from 'next/head';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        <title>Piya Bhalla Portfolio</title>
      </Head>
      <body>{children}</body>
    </html>
  );
}