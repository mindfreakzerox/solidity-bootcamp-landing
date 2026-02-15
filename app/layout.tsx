import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Solidity Bootcamp — Beginner to Expert',
  description: 'Landing page for the Solidity bootcamp program'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
