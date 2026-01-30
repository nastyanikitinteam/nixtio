import type { Metadata } from 'next';

const siteName = 'Nixtio';
const siteUrl = 'https://nixtio.com'; // Замініть на ваш домен
const defaultDescription = 'Nixtio Digital Agency - Creative solutions for your business';

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description: defaultDescription,
  keywords: ['digital agency', 'web design', 'development', 'creative agency'],
  authors: [{ name: siteName }],
  creator: siteName,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName,
    title: siteName,
    description: defaultDescription,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteName,
    description: defaultDescription,
  },
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export const pagesMetadata: Record<string, Metadata> = {
  home: {
    title: 'Home',
    description: 'Welcome to Nixtio Digital Agency. We create innovative digital solutions for your business.',
    openGraph: {
      title: 'Home | Nixtio',
      description: 'Welcome to Nixtio Digital Agency. We create innovative digital solutions for your business.',
    },
  },
  contact: {
    title: 'Contact',
    description: 'Get in touch with Nixtio Digital Agency. Contact our team for project estimates and inquiries.',
    openGraph: {
      title: 'Contact | Nixtio',
      description: 'Get in touch with Nixtio Digital Agency. Contact our team for project estimates and inquiries.',
    },
  },
};
