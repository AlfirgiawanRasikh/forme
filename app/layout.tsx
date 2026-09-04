import type { Metadata } from 'next';
import { Inter, Newsreader } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageTransition from '@/components/motion/PageTransition';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const newsreader = Newsreader({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'FORME - Independent Digital Studio',
    template: '%s - FORME',
  },
  description: 'Independent digital studio for brand, culture and technology.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'FORME',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${newsreader.variable}`}>
      <body className="font-sans">
        <Header />
        <PageTransition>
          <main>{children}</main>
        </PageTransition>
        <Footer />
      </body>
    </html>
  );
}
