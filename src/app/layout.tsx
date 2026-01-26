import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ThemeToggle } from "@/components/ThemeToggle";
import { AuthProvider } from "@/contexts/AuthContext";
import { AuthButton } from "@/components/AuthButton";
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
  title: "AIDO — AI Design Opportunities",
  description: "Personal intelligence system for navigating the AI tech scene",
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
            <nav className="border-b border-[var(--border)] sticky top-0 bg-[var(--background)] z-50">
              <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
                <Link href="/" className="font-semibold tracking-tight">
                  AIDO
                </Link>
                <div className="flex items-center gap-4 text-sm text-[var(--muted)]">
                  <Link href="/" className="hover:text-[var(--foreground)]">
                    Companies
                  </Link>
                  <ThemeToggle />
                  <AuthButton />
                </div>
              </div>
            </nav>
            <main className="max-w-6xl mx-auto px-6 py-8">
              {children}
            </main>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
