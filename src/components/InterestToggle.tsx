'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { getUserTracking, setUserTracking, deleteUserTracking } from '@/lib/firebase/tracking';
import { trackEvent } from '@/lib/firebase/analytics';

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
  const { user, loading } = useAuth();
  const [status, setStatus] = useState<InterestStatus>(null);
  const [loaded, setLoaded] = useState(false);
  const [isSyncing, setIsSyncing] = useState(false);
  const [lastSynced, setLastSynced] = useState<Date | undefined>();

  useEffect(() => {
    if (loading) return;
    if (!user) {
      setStatus(null);
      setLoaded(true);
      return;
    }

    let isActive = true;
    const load = async () => {
      const tracking = await getUserTracking(user.uid, companyId);
      if (!isActive) return;
      if (tracking?.status === 'interested' || tracking?.status === 'not_interested') {
        setStatus(tracking.status);
      } else {
        setStatus(null);
      }
      setLoaded(true);
    };

    load();
    return () => {
      isActive = false;
    };
  }, [companyId, user, loading]);

  const updateStatus = async (newStatus: InterestStatus) => {
    if (!user) {
      setStatus(null);
      return;
    }

    setStatus(newStatus);
    setIsSyncing(true);
    
    if (newStatus) {
      await setUserTracking(user.uid, companyId, { status: newStatus });
    } else {
      await deleteUserTracking(user.uid, companyId);
    }

    void trackEvent('interest_toggle', {
      company_id: companyId,
      status: newStatus ?? 'cleared',
    });

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
    <div className="flex flex-col items-start gap-2 relative z-50">
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
