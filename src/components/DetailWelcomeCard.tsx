'use client';

import { useState, useEffect, useCallback } from 'react';

const STORAGE_KEY = 'aido_onboarding_detail_seen';

interface DetailWelcomeCardProps {
  onDismiss: () => void;
}

export function DetailWelcomeCard({ onDismiss }: DetailWelcomeCardProps) {
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

  // Auto-dismiss after 20s
  useEffect(() => {
    if (!visible) return;
    const timer = setTimeout(() => {
      handleDismiss();
    }, 20000);
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

  const sections = [
    { icon: '\u26A1', label: 'Quick Info', desc: 'Stage, valuation, funding, open roles at a glance' },
    { icon: '\uD83C\uDFE2', label: 'Company', desc: 'Funding history, competition, growth metrics, AI level' },
    { icon: '\uD83D\uDC64', label: 'Founders', desc: 'Background, vision, beliefs, green & red flags' },
    { icon: '\uD83C\uDFA8', label: 'Design', desc: 'Team structure, work types, culture insights, fit score' },
    { icon: '\uD83D\uDCBC', label: 'Open Roles', desc: 'Full job details with compensation & requirements' },
  ];

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
      <p className="text-xs font-medium text-[var(--accent-light)] uppercase tracking-wide mb-3">
        What you&apos;ll find here
      </p>
      <ul className="space-y-1.5">
        {sections.map((s) => (
          <li key={s.label} className="text-sm text-[var(--muted)] flex items-start gap-2">
            <span className="flex-shrink-0 w-5 text-center">{s.icon}</span>
            <span>
              <span className="text-[var(--foreground)] font-medium">{s.label}</span>
              {' \u2014 '}{s.desc}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
