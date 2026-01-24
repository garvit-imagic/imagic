import type { Metadata } from "next";
import { Open_Sans, Manrope } from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { WebVitals } from '@/components/WebVitals';

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-open-sans",
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'sans-serif'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://imagiccreatives.com'),
  title: {
    default: "IMagic Creatives - Where Ideas Take Flight",
    template: "%s | IMagic Creatives"
  },
  description: "Imagic Creatives is an integrated design studio shaping how the world experiences brands through immersive visuals and experiences.",
  keywords: [
    "design studio",
    "brand design",
    "creative agency",
    "visual design",
    "brand experience",
    "immersive design",
    "graphic design",
    "branding agency",
    "creative studio",
    "brand strategy"
  ],
  authors: [{ name: "IMagic Creatives" }],
  creator: "IMagic Creatives",
  publisher: "IMagic Creatives",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://imagiccreatives.com',
    siteName: 'IMagic Creatives',
    title: 'IMagic Creatives - Where Ideas Take Flight',
    description: 'Integrated design studio shaping brand experiences through immersive visuals',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'IMagic Creatives - Design Studio'
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IMagic Creatives - Where Ideas Take Flight',
    description: 'Integrated design studio shaping brand experiences',
    images: ['/twitter-image.jpg'],
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
      <body className={`${openSans.className} ${manrope.variable}`}>
        {children}
        <WebVitals />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
