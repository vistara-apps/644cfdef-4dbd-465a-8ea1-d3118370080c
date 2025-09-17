import type { Metadata } from 'next';
import { Providers } from './providers';
import './globals.css';

export const metadata: Metadata = {
  title: 'EngageChain - Monetize your audience with interactive polls',
  description: 'An all-in-one platform for creators and brands to build, distribute, and monetize interactive micro-surveys and polls, fostering deeper audience engagement through tokenized rewards.',
  openGraph: {
    title: 'EngageChain',
    description: 'Monetize your audience with instant, interactive polls and rewards.',
    images: ['/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EngageChain',
    description: 'Monetize your audience with instant, interactive polls and rewards.',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-dark-bg text-dark-text-primary">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
