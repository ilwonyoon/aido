import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { AuthProvider } from "@/contexts/AuthContext";
import { AnalyticsTracker } from "@/components/AnalyticsTracker";
import { Navigation } from "@/components/Navigation";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { PageBackground } from "@/components/PageBackground";
import { MobileTypographyEditor } from "@/components/MobileTypographyEditor";
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
      <head>
        <style dangerouslySetInnerHTML={{ __html: `
          /* JetBrains Mono Typography Scale (17px base) — inline to bypass CSS cache */
          .text-4xl { font-size: 1.412rem !important; letter-spacing: -0.035em !important; line-height: 1.15 !important; }
          .text-3xl { font-size: 1.294rem !important; letter-spacing: -0.03em !important; line-height: 1.2 !important; }
          .text-2xl { font-size: 1.176rem !important; letter-spacing: -0.025em !important; line-height: 1.25 !important; }
          .text-xl  { font-size: 1.029rem !important; letter-spacing: -0.02em !important; line-height: 1.3 !important; }
          .text-lg  { font-size: 0.882rem !important; letter-spacing: -0.015em !important; line-height: 1.35 !important; }
          .text-base { font-size: 0.882rem !important; line-height: 1.7 !important; }
          .text-sm  { font-size: 0.765rem !important; line-height: 1.65 !important; }
          .text-xs  { font-size: 0.706rem !important; letter-spacing: 0.01em !important; line-height: 1.5 !important; }
          @media (min-width: 640px) {
            .sm\\:text-4xl { font-size: 1.412rem !important; letter-spacing: -0.035em !important; line-height: 1.15 !important; }
            .sm\\:text-3xl { font-size: 1.294rem !important; letter-spacing: -0.03em !important; line-height: 1.2 !important; }
          }
          /* Tablet (768–1023px): body 16px, ×1.067 */
          @media (max-width: 1023px) {
            .text-4xl { font-size: 1.506rem !important; }
            .text-3xl { font-size: 1.380rem !important; }
            .text-2xl { font-size: 1.254rem !important; }
            .text-xl  { font-size: 1.098rem !important; }
            .text-lg  { font-size: 0.941rem !important; }
            .text-base { font-size: 0.941rem !important; }
            .text-sm  { font-size: 0.816rem !important; }
            .text-xs  { font-size: 0.753rem !important; }
            .sm\\:text-4xl { font-size: 1.506rem !important; }
            .sm\\:text-3xl { font-size: 1.380rem !important; }
          }
          /* Mobile (<768px): body 17px, ×1.133 */
          @media (max-width: 767px) {
            .text-4xl { font-size: 1.600rem !important; }
            .text-3xl { font-size: 1.467rem !important; }
            .text-2xl { font-size: 1.333rem !important; }
            .text-xl  { font-size: 1.166rem !important; }
            .text-lg  { font-size: 1.000rem !important; }
            .text-base { font-size: 1.000rem !important; }
            .text-sm  { font-size: 0.867rem !important; }
            .text-xs  { font-size: 0.800rem !important; }
          }
        `}} />
      </head>
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
                <footer className="py-6" />
              </div>
              <MobileTypographyEditor />
            </ErrorBoundary>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
