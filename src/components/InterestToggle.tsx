'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { getUserTracking, setUserTracking, deleteUserTracking } from '@/lib/firebase/tracking';
import { trackEvent } from '@/lib/firebase/analytics';
import { InterestStatus } from '@/data/types';

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
      if (tracking?.status === 'tier_0' || tracking?.status === 'tier_1' || tracking?.status === 'not_interested') {
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
    console.log('[InterestToggle] updateStatus called:', { newStatus, user: !!user });

    if (!user) {
      console.log('[InterestToggle] No user - showing local feedback only');
      // Show visual feedback even without login
      setStatus(newStatus);
      // TODO: Could show a toast: "Sign in to save your preferences"
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
    console.log('[InterestToggle] Status updated successfully');
  };

  return { status, updateStatus, loaded, isSyncing, lastSynced };
}

export function InterestToggle({ companyId }: { companyId: string }) {
  const { status, updateStatus, loaded, isSyncing, lastSynced } = useInterestStatus(companyId);

  if (!loaded) {
    return <div className="h-12" />;
  }

  return (
    <div className="flex flex-col items-start gap-2">
      <div className="flex items-center gap-3">
        <button
          onClick={() => updateStatus(status === 'tier_0' ? null : 'tier_0')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
            status === 'tier_0'
              ? 'bg-[var(--success)] text-black'
              : 'bg-[var(--card)] border border-[var(--border)] text-[var(--muted)] hover:border-[var(--success)] hover:text-[var(--success)]'
          }`}
        >
          🥇 Tier 0
        </button>
        <button
          onClick={() => updateStatus(status === 'tier_1' ? null : 'tier_1')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
            status === 'tier_1'
              ? 'bg-[var(--accent)] text-black'
              : 'bg-[var(--card)] border border-[var(--border)] text-[var(--muted)] hover:border-[var(--accent)] hover:text-[var(--accent)]'
          }`}
        >
          🥈 Tier 1
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
