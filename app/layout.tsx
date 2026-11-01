import type { Metadata, Viewport } from 'next';
import './globals.css';
import { PRAVEEN_IDENTITY } from '@/lib/identity-data';

export const viewport: Viewport = {
  themeColor: '#D4A373',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(PRAVEEN_IDENTITY.websites.personal),
  title: {
    default: 'Praveen Sahani | Official Personal Website',
    template: '%s | Praveen Sahani',
  },
  description:
    'Welcome to the official personal website of Praveen Sahani. Explore social media profiles, personal information and online connections.',
  keywords: [
    'Praveen Sahani',
    'Praveen Sahani Gorakhpur',
    'Praveen Sahani Official',
    'Praveen Sahani Uttar Pradesh',
    'Personal Digital Identity',
    'Praveen Sahani Netlify',
    'Praveen Sahani Shahajanwa',
  ],
  authors: [{ name: 'Praveen Sahani', url: PRAVEEN_IDENTITY.websites.personal }],
  creator: 'Praveen Sahani',
  publisher: 'Praveen Sahani',
  applicationName: 'Praveen Sahani Digital Identity',
  alternates: {
    canonical: PRAVEEN_IDENTITY.websites.personal,
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
  openGraph: {
    type: 'profile',
    firstName: 'Praveen',
    lastName: 'Sahani',
    username: 'praveensahani',
    gender: 'male',
    title: 'Praveen Sahani | Official Website',
    description: 'Explore the personal digital identity of Praveen Sahani.',
    url: PRAVEEN_IDENTITY.websites.personal,
    siteName: 'Praveen Sahani',
    locale: 'en_IN',
    images: [
      {
        url: 'https://praveensahani.netlify.app/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Praveen Sahani | Personal Digital Identity Official Preview',
        type: 'image/jpeg',
      },
      {
        url: 'https://praveensahani.netlify.app/images/profile-photo.jpg',
        width: 800,
        height: 800,
        alt: 'Praveen Sahani Profile Photo',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Praveen Sahani | Official Website',
    description: 'Explore the personal digital identity of Praveen Sahani.',
    images: ['https://praveensahani.netlify.app/images/og-image.jpg'],
    creator: '@praveensahani',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
    ],
  },
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: PRAVEEN_IDENTITY.fullName,
    alternateName: 'Praveen',
    jobTitle: PRAVEEN_IDENTITY.roleSubtitle,
    url: PRAVEEN_IDENTITY.websites.personal,
    image: 'https://praveensahani.netlify.app/images/profile-photo.jpg',
    email: `mailto:${PRAVEEN_IDENTITY.email}`,
    description: PRAVEEN_IDENTITY.shortBio,
    address: {
      '@type': 'PostalAddress',
      addressLocality: PRAVEEN_IDENTITY.locationDetails.city,
      addressRegion: PRAVEEN_IDENTITY.locationDetails.state,
      postalCode: PRAVEEN_IDENTITY.locationDetails.pinCode,
      addressCountry: PRAVEEN_IDENTITY.locationDetails.countryCode,
    },
    sameAs: [
      PRAVEEN_IDENTITY.websites.business,
    ],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#F8F4EE] text-[#2D241E] antialiased selection:bg-amber-500/20 selection:text-amber-900">
        {children}
      </body>
    </html>
  );
}
