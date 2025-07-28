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
  metadataBase: new URL('https://zaid-naeem-portfolio.vercel.app'),
  alternates: {
    canonical: 'https://zaid-naeem-portfolio.vercel.app',
  },
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
        type: 'image/png',
      },
    ],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zaid Naeem – Full Stack Developer Portfolio',
    description:
      'Explore my projects and tech stack in web and mobile development. Built with React, React Native, Next.js, and more.',
    images: ['/og-banner.png'],
    creator: '@ZaidNx',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
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
