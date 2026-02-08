'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { ThemeToggle } from './ThemeToggle';
import { AuthButton } from './AuthButton';

export function Navigation() {
  const pathname = usePathname();
  const { user } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isAdmin = user?.email === 'ilwonyoon@gmail.com';

  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(path);
  };

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 8);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <nav
      className="sticky top-0 z-[60] transition-[background-color,backdrop-filter] duration-500 ease-out"
      style={scrolled ? {
        backgroundColor: 'color-mix(in srgb, var(--background) 60%, transparent)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
      } : {
        backgroundColor: 'transparent',
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight">
          AIDO
        </Link>
        <button
          className="lg:hidden p-2"
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="Open menu"
          data-tour="nav-menu-mobile"
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
            data-tour="nav-about"
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
            Jobs
          </Link>
          <Link
            href="/insights"
            data-tour="nav-insights"
            className={
              isActive('/insights')
                ? 'text-[var(--foreground)] font-medium'
                : 'text-[var(--muted-dim)] hover:text-[var(--foreground)]'
            }
          >
            Insights
          </Link>

          {/* Admin only */}
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
          {isAdmin && (
            <Link
              href="/requests"
              className={
                isActive('/requests')
                  ? 'text-[var(--foreground)] font-medium'
                  : 'text-[var(--muted-dim)] hover:text-[var(--foreground)]'
              }
            >
              Requests
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
                Jobs
              </Link>
              <Link
                href="/insights"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block py-3 px-4 rounded-lg ${
                  isActive('/insights')
                    ? 'bg-[var(--card)] text-[var(--foreground)] border-l-2 border-[var(--foreground)]'
                    : 'text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--card)] border-l-2 border-transparent'
                }`}
              >
                Insights
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
              {isAdmin && (
                <Link
                  href="/requests"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block py-3 px-4 rounded-lg ${
                    isActive('/requests')
                      ? 'bg-[var(--card)] text-[var(--foreground)] border-l-2 border-[var(--foreground)]'
                      : 'text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--card)] border-l-2 border-transparent'
                  }`}
                >
                  Requests
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
