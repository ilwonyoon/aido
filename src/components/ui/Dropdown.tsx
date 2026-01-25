'use client';

import React, { useState } from 'react';

export interface DropdownOption {
  value: string;
  label: string;
}

export interface SortDropdownProps {
  value: string;
  options: DropdownOption[];
  onChange: (value: string) => void;
}

export function SortDropdown({ value, options, onChange }: SortDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const selectedOption = options.find(opt => opt.value === value);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 text-sm text-[var(--foreground)] cursor-pointer"
      >
        <span>{selectedOption?.label}</span>
        <svg width="10" height="10" viewBox="0 0 12 12" fill="none" className={`transition-transform text-[var(--muted)] ${isOpen ? 'rotate-180' : ''}`}>
          <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
          <div className="absolute right-0 top-full mt-1 min-w-[120px] bg-[var(--card)] border border-[var(--border)] rounded-lg shadow-lg z-50 py-1 overflow-hidden">
            {options.map((opt) => (
              <button
                key={opt.value}
                onClick={() => { onChange(opt.value); setIsOpen(false); }}
                className={`w-full text-left px-4 py-2 text-sm hover:bg-[var(--card-hover)] transition-colors whitespace-nowrap ${
                  value === opt.value ? 'text-[var(--accent-light)]' : 'text-[var(--foreground)]'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export interface DropdownFilterProps {
  label: string;
  value: string;
  options: DropdownOption[];
  onChange: (value: string) => void;
  infoTooltip?: React.ReactNode;
}

export function DropdownFilter({
  label,
  value,
  options,
  onChange,
  infoTooltip,
}: DropdownFilterProps) {
  const [isOpen, setIsOpen] = useState(false);
  const selectedOption = options.find(opt => opt.value === value);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 bg-[var(--card)] border rounded-full px-4 py-1.5 text-sm cursor-pointer transition-colors ${
          value
            ? 'border-[var(--accent)] text-[var(--foreground)]'
            : 'border-[var(--border)] text-[var(--muted)] hover:border-[var(--muted)]'
        }`}
      >
        <span>{selectedOption?.label || label}</span>
        {infoTooltip && (
          <div className="relative group/info">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" className="text-[var(--muted)]">
              <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm1 12H7V7h2v5zm0-6H7V4h2v2z"/>
            </svg>
            <div className="absolute left-0 top-full mt-2 w-72 p-3 bg-[var(--card)] border border-[var(--border)] rounded-lg shadow-lg opacity-0 invisible group-hover/info:opacity-100 group-hover/info:visible transition-all z-[60] text-left">
              {infoTooltip}
            </div>
          </div>
        )}
        <svg width="10" height="10" viewBox="0 0 12 12" fill="none" className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}>
          <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
          <div className="absolute left-0 top-full mt-1 min-w-full bg-[var(--card)] border border-[var(--border)] rounded-lg shadow-lg z-50 py-1 overflow-hidden">
            <button
              onClick={() => { onChange(''); setIsOpen(false); }}
              className={`w-full text-left px-4 py-2 text-sm hover:bg-[var(--card-hover)] transition-colors ${
                !value ? 'text-[var(--accent-light)]' : 'text-[var(--muted)]'
              }`}
            >
              {label}
            </button>
            {options.map((opt) => (
              <button
                key={opt.value}
                onClick={() => { onChange(opt.value); setIsOpen(false); }}
                className={`w-full text-left px-4 py-2 text-sm hover:bg-[var(--card-hover)] transition-colors whitespace-nowrap ${
                  value === opt.value ? 'text-[var(--accent-light)]' : 'text-[var(--foreground)]'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
