'use client';

import { useState, useEffect, useCallback } from 'react';

const STORAGE_KEY = 'aido_onboarding_list_seen';

interface OnboardingHintProps {
  onDismiss: () => void;
}

export function OnboardingHint({ onDismiss }: OnboardingHintProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const seen = localStorage.getItem(STORAGE_KEY);
      if (!seen) {
        setVisible(true);
      }
    } catch {
      // localStorage unavailable
    }
  }, []);

  // Auto-dismiss after 30s
  useEffect(() => {
    if (!visible) return;
    const timer = setTimeout(() => {
      handleDismiss();
    }, 30000);
    return () => clearTimeout(timer);
  }, [visible]);

  const handleDismiss = useCallback(() => {
    setVisible(false);
    try {
      localStorage.setItem(STORAGE_KEY, 'true');
    } catch {
      // localStorage unavailable
    }
    onDismiss();
  }, [onDismiss]);

  if (!visible) return null;

  return (
    <div className="card p-4 border-l-4 border-[var(--accent)] mb-6 animate-fadeIn relative">
      <button
        onClick={handleDismiss}
        className="absolute top-3 right-3 text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
        aria-label="Dismiss"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
      <p className="text-sm text-[var(--muted)] pr-6">
        <span className="text-[var(--accent-light)] font-medium">Click any company</span> to see detailed analysis — founders, design work, open roles, and more.
      </p>
    </div>
  );
}

export function isFirstVisit(): boolean {
  try {
    return !localStorage.getItem(STORAGE_KEY);
  } catch {
    return false;
  }
}
