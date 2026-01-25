'use client';

import { useState, useEffect } from 'react';

type InterestStatus = 'interested' | 'not_interested' | null;

export function useInterestStatus(companyId: string) {
  const [status, setStatus] = useState<InterestStatus>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(`interest_${companyId}`);
    if (stored === 'interested' || stored === 'not_interested') {
      setStatus(stored);
    }
    setLoaded(true);
  }, [companyId]);

  const updateStatus = (newStatus: InterestStatus) => {
    setStatus(newStatus);
    if (newStatus) {
      localStorage.setItem(`interest_${companyId}`, newStatus);
    } else {
      localStorage.removeItem(`interest_${companyId}`);
    }
  };

  return { status, updateStatus, loaded };
}

export function InterestToggle({ companyId }: { companyId: string }) {
  const { status, updateStatus, loaded } = useInterestStatus(companyId);

  if (!loaded) {
    return <div className="h-12" />;
  }

  return (
    <div className="flex items-center gap-3">
      <button
        onClick={() => updateStatus(status === 'interested' ? null : 'interested')}
        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
          status === 'interested'
            ? 'bg-[var(--success)] text-black'
            : 'bg-[var(--card)] border border-[var(--border)] text-[var(--muted)] hover:border-[var(--success)] hover:text-[var(--success)]'
        }`}
      >
        Interested
      </button>
      <button
        onClick={() => updateStatus(status === 'not_interested' ? null : 'not_interested')}
        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
          status === 'not_interested'
            ? 'bg-[var(--muted)] text-black'
            : 'bg-[var(--card)] border border-[var(--border)] text-[var(--muted)] hover:border-[var(--muted)] hover:text-[var(--foreground)]'
        }`}
      >
        Not Interested
      </button>
    </div>
  );
}

// Hook to get all interest statuses for sorting
export function getAllInterestStatuses(): Record<string, InterestStatus> {
  if (typeof window === 'undefined') return {};

  const statuses: Record<string, InterestStatus> = {};
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key?.startsWith('interest_')) {
      const companyId = key.replace('interest_', '');
      const value = localStorage.getItem(key);
      if (value === 'interested' || value === 'not_interested') {
        statuses[companyId] = value;
      }
    }
  }
  return statuses;
}
