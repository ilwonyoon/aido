'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from './ThemeToggle';
import { AuthButton } from './AuthButton';

export function Navigation() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(path);
  };

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
          {/* <Link href="/macro" className="hover:text-[var(--foreground)]">
            Macro
          </Link> */}
          <ThemeToggle />
          <AuthButton />
        </div>
      </div>
    </nav>
  );
}
