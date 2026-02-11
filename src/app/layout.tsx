import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { AuthProvider } from "@/contexts/AuthContext";
import { AnalyticsTracker } from "@/components/AnalyticsTracker";
import { Navigation } from "@/components/Navigation";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { PageBackground } from "@/components/PageBackground";
import { MobileTypographyEditor } from "@/components/MobileTypographyEditor";
import { NewsletterSignup } from "@/components/newsletter/NewsletterSignup";
import { Text } from "@/components/ui/Text";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jb-mono",
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
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'AIDO — AI Design Opportunities',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AIDO - AI Product Designer Jobs',
    description: 'Curated AI companies with 120+ product design roles',
    images: ['/og-image.png'],
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
        className={`${geistSans.variable} ${geistMono.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <ThemeProvider>
          <AuthProvider>
            <ErrorBoundary>
              <PageBackground />
              <AnalyticsTracker />
              <div className="relative z-[1] overflow-x-hidden">
                <Navigation />
                <main className="max-w-6xl mx-auto px-4 sm:px-6 pt-6 sm:pt-8 pb-12 sm:pb-16">
                  {children}
                </main>
                <footer className="max-w-6xl mx-auto px-4 sm:px-6 py-12 border-t border-[var(--border)]">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                    <div className="flex-1 max-w-md">
                      <Text variant="title" className="mb-1">Stay updated</Text>
                      <Text variant="body" color="muted">
                        Get notified about new AI design jobs and insights.
                      </Text>
                    </div>
                    <NewsletterSignup source="footer" />
                  </div>
                </footer>
              </div>
              {/* <MobileTypographyEditor /> */}
            </ErrorBoundary>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
