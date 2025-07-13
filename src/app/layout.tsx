import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Zaid - Software Developer Portfolio',
  description:
    'Software Developer | Problem Solver | Tech Explorer. Full-stack developer specializing in React, Rails, and modern web technologies.',
  keywords: ['software developer', 'full-stack', 'react', 'rails', 'portfolio'],
  authors: [{ name: 'Zaid' }],
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased ai-style-change-2`}
      >
        {children}
      </body>
    </html>
  );
}
