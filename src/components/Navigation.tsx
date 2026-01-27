'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { getActiveVisitorsCount } from '@/lib/firebase/visitors';
import { ThemeToggle } from './ThemeToggle';
import { AuthButton } from './AuthButton';

export function Navigation() {
  const pathname = usePathname();
  const { user } = useAuth();
  const [activeVisitors, setActiveVisitors] = useState<number>(0);

  const isAdmin = user?.email === 'ilwonyoon@gmail.com';

  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(path);
  };

  // Update active visitors count every 30 seconds (only for admin)
  useEffect(() => {
    if (!isAdmin) return;

    const updateCount = async () => {
      const count = await getActiveVisitorsCount();
      setActiveVisitors(count);
    };

    updateCount();
    const interval = setInterval(updateCount, 30 * 1000);

    return () => clearInterval(interval);
  }, [isAdmin]);

  return (
    <nav className="border-b border-[var(--border)] sticky top-0 bg-[var(--background)] z-50">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight">
          AIDO
        </Link>
        <div className="flex items-center gap-4 text-sm">
          <Link
            href="/"
            className={
              isActive('/')
                ? 'text-[var(--foreground)]'
                : 'text-[var(--muted)] hover:text-[var(--foreground)]'
            }
          >
            Companies
          </Link>
          <Link
            href="/ai-levels"
            className={
              isActive('/ai-levels')
                ? 'text-[var(--foreground)]'
                : 'text-[var(--muted)] hover:text-[var(--foreground)]'
            }
          >
            AI Levels
          </Link>

          {/* Analytics - Admin only */}
          {isAdmin && (
            <>
              <div className="flex items-center gap-1.5 text-[var(--muted)]">
                <span>🌍</span>
                <span className="font-mono text-xs">{activeVisitors}</span>
              </div>
              <Link
                href="/analytics"
                className={
                  isActive('/analytics')
                    ? 'text-[var(--foreground)]'
                    : 'text-[var(--muted)] hover:text-[var(--foreground)]'
                }
              >
                Analytics
              </Link>
            </>
          )}

          <ThemeToggle />
          <AuthButton />
        </div>
      </div>
    </nav>
  );
}
