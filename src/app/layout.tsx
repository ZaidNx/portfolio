import type { Metadata, Viewport } from 'next';
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
  title: 'Zaid Naeem | Senior Frontend Engineer — React, TypeScript, React Native',
  description:
    'Senior Frontend Engineer with 4+ years of experience building React, TypeScript and React Native applications across enterprise SaaS products, with expertise in state management, frontend modernization, API integration, offline workflows and performance.',
  keywords: [
    'Zaid Naeem',
    'Senior Frontend Engineer',
    'Senior Software Engineer',
    'React',
    'TypeScript',
    'React Native',
    'Redux',
    'Enterprise SaaS',
    'Lahore Pakistan',
  ],
  authors: [{ name: 'Zaid Naeem' }],
  metadataBase: new URL('https://zaid-naeem-portfolio.vercel.app'),
  alternates: {
    canonical: 'https://zaid-naeem-portfolio.vercel.app',
  },
  openGraph: {
    title: 'Zaid Naeem | Senior Frontend Engineer',
    description:
      'React, TypeScript and React Native engineering across production enterprise SaaS products.',
    siteName: 'Zaid Naeem Portfolio',
    url: 'https://zaid-naeem-portfolio.vercel.app',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Zaid Naeem — Senior Frontend Engineer',
        type: 'image/png',
      },
    ],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zaid Naeem | Senior Frontend Engineer',
    description:
      'React, TypeScript and React Native engineering across production enterprise SaaS products.',
    images: ['/og.png'],
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
  other: {
    'og:image:width': '1200',
    'og:image:height': '630',
    'og:image:type': 'image/png',
    'og:image:alt': 'Zaid Naeem — Senior Frontend Engineer',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
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
