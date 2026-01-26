'use client';

import { useState, useRef, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';

export function AuthButton() {
  const { user, loading, signIn, signOut } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  if (loading) {
    return (
      <div className="w-8 h-8 rounded-full bg-[var(--border)] animate-pulse" />
    );
  }

  if (user) {
    return (
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center focus:outline-none"
        >
          {user.photoURL ? (
            <img
              src={user.photoURL}
              alt={user.displayName || 'User'}
              className="w-8 h-8 rounded-full border-2 border-transparent hover:border-[var(--accent)] transition-colors"
            />
          ) : (
            <div className="w-8 h-8 rounded-full bg-[var(--accent)] flex items-center justify-center text-white text-sm font-medium hover:opacity-90 transition-opacity">
              {user.displayName?.charAt(0) || user.email?.charAt(0) || 'U'}
            </div>
          )}
        </button>

        {isOpen && (
          <div className="absolute right-0 mt-2 w-48 py-1 bg-[var(--card)] border border-[var(--border)] rounded-lg shadow-lg z-50">
            <div className="px-4 py-2 border-b border-[var(--border)]">
              <div className="text-sm font-medium truncate">{user.displayName}</div>
              <div className="text-xs text-[var(--muted)] truncate">{user.email}</div>
            </div>
            <button
              onClick={() => {
                signOut();
                setIsOpen(false);
              }}
              className="w-full px-4 py-2 text-left text-sm text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--background)] transition-colors"
            >
              Sign out
            </button>
          </div>
        )}
      </div>
    );
  }

  return (
    <button
      onClick={signIn}
      className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-[var(--card)] border border-[var(--border)] hover:bg-[var(--card-hover)] transition-colors text-sm"
    >
      <svg className="w-4 h-4" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        />
        <path
          fill="currentColor"
          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        />
        <path
          fill="currentColor"
          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        />
        <path
          fill="currentColor"
          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        />
      </svg>
      Sign in
    </button>
  );
}
