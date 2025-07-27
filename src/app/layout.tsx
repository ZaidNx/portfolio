import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import VisitNotifier from '../components/VisitNotifier';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Zaid Naeem – Full Stack Developer Portfolio',
  description:
    'Explore my projects and tech stack in web and mobile development. Built with React, React Native, Next.js, and more.',
  keywords: [
    'Zaid Naeem',
    'full stack developer',
    'portfolio',
    'react',
    'react native',
    'next.js',
    'web development',
    'mobile development',
  ],
  authors: [{ name: 'Zaid Naeem' }],
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    title: 'Zaid Naeem – Full Stack Developer Portfolio',
    description:
      'Explore my projects and tech stack in web and mobile development. Built with React, React Native, Next.js, and more.',
    siteName: 'Zaid Naeem Portfolio',
    url: 'https://zaid-naeem-portfolio.vercel.app',
    images: [
      {
        url: '/og-banner.png',
        width: 1200,
        height: 630,
        alt: 'Zaid Naeem Portfolio Banner',
      },
    ],
    type: 'website',
  },
  metadataBase: new URL('https://zaid-naeem-portfolio.vercel.app'),
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
        <VisitNotifier />
        {children}
      </body>
    </html>
  );
}
