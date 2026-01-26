'use client';

import React from 'react';

interface TrackingStatusProps {
  isSyncing?: boolean;
  lastSynced?: Date;
}

export function TrackingStatus({ isSyncing, lastSynced }: TrackingStatusProps) {
  return (
    <div className="flex items-center gap-2 text-xs text-[var(--muted)]">
      {isSyncing ? (
        <>
          <span className="w-1.5 h-1.5 bg-[var(--accent-light)] rounded-full animate-pulse" />
          <span>Syncing...</span>
        </>
      ) : (
        <>
          <span className="w-1.5 h-1.5 bg-[var(--success)] rounded-full" />
          <span>
            Saved {lastSynced ? `at ${lastSynced.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}` : 'locally'}
          </span>
        </>
      )}
    </div>
  );
}
