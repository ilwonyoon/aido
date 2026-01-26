'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

type ThemeOption = {
  value: string;
  label: string;
  icon: string;
};

const themeOptions: ThemeOption[] = [
  { value: 'light', label: 'Light', icon: '☀️' },
  { value: 'dark', label: 'Dark', icon: '🌙' },
  { value: 'system', label: 'System', icon: '💻' },
];

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button className="theme-toggle" aria-label="Toggle theme">
        <span className="w-4 h-4" />
        <span className="text-sm">Theme</span>
      </button>
    );
  }

  const currentTheme = themeOptions.find(opt => opt.value === theme) || themeOptions[2];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-[var(--card)] border border-[var(--border)] rounded-full px-4 py-2 text-sm cursor-pointer transition-colors hover:border-[var(--muted)]"
        aria-label={`Current theme: ${currentTheme.label}`}
      >
        <span>{currentTheme.icon}</span>
        <span>{currentTheme.label}</span>
        <svg 
          width="10" 
          height="10" 
          viewBox="0 0 12 12" 
          fill="none" 
          className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}
        >
          <path 
            d="M3 4.5L6 7.5L9 4.5" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
          <div className="absolute right-0 top-full mt-2 min-w-[140px] bg-[var(--card)] border border-[var(--border)] rounded-lg shadow-lg z-50 py-1 overflow-hidden">
            {themeOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => {
                  setTheme(option.value);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-4 py-2.5 text-sm hover:bg-[var(--card-hover)] transition-colors flex items-center gap-2 ${
                  theme === option.value ? 'text-[var(--accent-light)]' : 'text-[var(--foreground)]'
                }`}
              >
                <span>{option.icon}</span>
                <span>{option.label}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
