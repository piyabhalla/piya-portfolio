// src/app/layout.tsx
'use client';

import './globals.css';
import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Piya Bhalla Portfolio</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}