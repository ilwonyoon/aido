import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { AuthProvider } from "@/contexts/AuthContext";
import { AnalyticsTracker } from "@/components/AnalyticsTracker";
import { Navigation } from "@/components/Navigation";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: 'AIDO - AI Product Designer Jobs | Curated AI Company Listings',
    template: '%s | AIDO',
  },
  description: 'Curated AI companies with product design roles. Filter by AI-native level, funding stage, and location. Updated daily with 120+ open positions at 57 companies.',
  keywords: [
    'AI product designer jobs',
    'AI design jobs',
    'product designer AI companies',
    'AI startup designer jobs',
    'Level A AI company jobs',
    'AI-native product designer',
  ],
  authors: [{ name: 'AIDO' }],
  creator: 'AIDO',
  publisher: 'AIDO',
  metadataBase: new URL('https://aido-d2cc0.web.app'),
  openGraph: {
    title: 'AIDO - AI Product Designer Jobs',
    description: 'Curated AI companies with 120+ product design roles. Updated daily.',
    url: 'https://aido-d2cc0.web.app',
    siteName: 'AIDO',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AIDO - AI Product Designer Jobs',
    description: 'Curated AI companies with 120+ product design roles',
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

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <AuthProvider>
            <AnalyticsTracker />
            <Navigation />
            <main className="max-w-6xl mx-auto px-4 sm:px-6 pt-6 sm:pt-8 pb-12 sm:pb-16">
              {children}
            </main>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
