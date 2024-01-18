import type {Metadata} from 'next';
import {Numans} from 'next/font/google';
import './globals.css';

export const metadata: Metadata = {
  title: 'Professional Portfolio: Frontend Developer',
  description:
    'I`m Natallia. Explore my works to see how design seamlessly integrates with functionality. Highlight your online appeal by leveraging advanced frontend expertise.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' href='/favicon.ico' sizes='any' />
      </head>

      <body>{children}</body>
    </html>
  );
}
