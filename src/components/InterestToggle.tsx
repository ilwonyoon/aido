'use client';

import { useState, useEffect } from 'react';

type InterestStatus = 'interested' | 'not_interested' | null;

function SyncIndicator({ isSyncing, lastSynced }: { isSyncing: boolean; lastSynced?: Date }) {
  if (isSyncing) {
    return (
      <span className="text-xs text-[var(--muted)] flex items-center gap-1">
        <span className="w-2 h-2 bg-[var(--accent)] rounded-full animate-pulse" />
        Saving...
      </span>
    );
  }
  if (lastSynced) {
    return (
      <span className="text-xs text-[var(--muted)] flex items-center gap-1">
        <span className="w-2 h-2 bg-[var(--success)] rounded-full" />
        Saved
      </span>
    );
  }
  return null;
}

export function useInterestStatus(companyId: string) {
  const [status, setStatus] = useState<InterestStatus>(null);
  const [loaded, setLoaded] = useState(false);
  const [isSyncing, setIsSyncing] = useState(false);
  const [lastSynced, setLastSynced] = useState<Date | undefined>();

  useEffect(() => {
    const stored = localStorage.getItem(`interest_${companyId}`);
    if (stored === 'interested' || stored === 'not_interested') {
      setStatus(stored);
    }
    setLoaded(true);
  }, [companyId]);

  const updateStatus = async (newStatus: InterestStatus) => {
    setStatus(newStatus);
    setIsSyncing(true);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    if (newStatus) {
      localStorage.setItem(`interest_${companyId}`, newStatus);
    } else {
      localStorage.removeItem(`interest_${companyId}`);
    }
    
    setIsSyncing(false);
    setLastSynced(new Date());
  };

  return { status, updateStatus, loaded, isSyncing, lastSynced };
}

export function InterestToggle({ companyId }: { companyId: string }) {
  const { status, updateStatus, loaded, isSyncing, lastSynced } = useInterestStatus(companyId);

  if (!loaded) {
    return <div className="h-12" />;
  }

  return (
    <div className="flex flex-col items-end gap-2">
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
      <SyncIndicator isSyncing={isSyncing} lastSynced={lastSynced} />
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
