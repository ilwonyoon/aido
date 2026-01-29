'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { ThemeToggle } from './ThemeToggle';
import { AuthButton } from './AuthButton';

export function Navigation() {
  const pathname = usePathname();
  const { user } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isAdmin = user?.email === 'ilwonyoon@gmail.com';

  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(path);
  };

  return (
    <nav className="border-b border-[var(--border)] sticky top-0 bg-[var(--background)] z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight">
          AIDO
        </Link>
        <button
          className="lg:hidden p-2"
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="Open menu"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
        <div className="hidden lg:flex items-center gap-4 text-sm">
          <Link
            href="/about"
            className={
              isActive('/about')
                ? 'text-[var(--foreground)] font-medium'
                : 'text-[var(--muted-dim)] hover:text-[var(--foreground)]'
            }
          >
            About
          </Link>
          <Link
            href="/"
            className={
              isActive('/')
                ? 'text-[var(--foreground)] font-medium'
                : 'text-[var(--muted-dim)] hover:text-[var(--foreground)]'
            }
          >
            Companies
          </Link>
          <Link
            href="/jobs"
            className={
              isActive('/jobs')
                ? 'text-[var(--foreground)] font-medium'
                : 'text-[var(--muted-dim)] hover:text-[var(--foreground)]'
            }
          >
            Jobs
          </Link>

          {/* Analytics - Admin only */}
          {isAdmin && (
            <Link
              href="/analytics"
              className={
                isActive('/analytics')
                  ? 'text-[var(--foreground)] font-medium'
                  : 'text-[var(--muted-dim)] hover:text-[var(--foreground)]'
              }
            >
              Analytics
            </Link>
          )}

          <ThemeToggle />
          <AuthButton />
        </div>
      </div>

      {isMobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-40 lg:hidden animate-fadeIn"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="fixed right-0 top-0 bottom-0 w-[68%] bg-[var(--background)] border-l border-[var(--border)] z-50 lg:hidden flex flex-col animate-slideInRight">
            {/* Header: AIDO + Theme Toggle + Close */}
            <div className="flex items-center justify-between p-6 pb-4">
              <div className="font-semibold tracking-tight text-lg">AIDO</div>
              <div className="flex items-center gap-2">
                <ThemeToggle />
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2"
                  aria-label="Close menu"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Navigation Links */}
            <nav className="flex-1 px-6 space-y-1">
              <Link
                href="/about"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block py-3 px-4 rounded-lg ${
                  isActive('/about')
                    ? 'bg-[var(--card)] text-[var(--foreground)] border-l-2 border-[var(--foreground)]'
                    : 'text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--card)] border-l-2 border-transparent'
                }`}
              >
                About
              </Link>
              <Link
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block py-3 px-4 rounded-lg ${
                  isActive('/')
                    ? 'bg-[var(--card)] text-[var(--foreground)] border-l-2 border-[var(--foreground)]'
                    : 'text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--card)] border-l-2 border-transparent'
                }`}
              >
                Companies
              </Link>
              <Link
                href="/jobs"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block py-3 px-4 rounded-lg ${
                  isActive('/jobs')
                    ? 'bg-[var(--card)] text-[var(--foreground)] border-l-2 border-[var(--foreground)]'
                    : 'text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--card)] border-l-2 border-transparent'
                }`}
              >
                Jobs
              </Link>

              {isAdmin && (
                <Link
                  href="/analytics"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block py-3 px-4 rounded-lg ${
                    isActive('/analytics')
                      ? 'bg-[var(--card)] text-[var(--foreground)] border-l-2 border-[var(--foreground)]'
                      : 'text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--card)] border-l-2 border-transparent'
                  }`}
                >
                  Analytics
                </Link>
              )}
            </nav>

            {/* Sign in - Full width at bottom */}
            <div className="p-6 pt-4 border-t border-[var(--border)]">
              <div className="[&>*]:w-full [&_button]:w-full">
                <AuthButton />
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}
