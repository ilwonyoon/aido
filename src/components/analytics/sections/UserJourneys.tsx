'use client';

import type { DailyStats } from '@/lib/firebase/visitors';
import type { EventStats } from '@/lib/firebase/events';
import { computeFunnel } from '@/lib/analytics/queries';
import { FunnelChart } from '@/components/analytics/charts';

interface UserJourneysProps {
  readonly dailyStats: readonly DailyStats[];
  readonly eventStats: EventStats;
}

export function UserJourneys({ dailyStats, eventStats }: UserJourneysProps) {
  const funnelSteps = computeFunnel([...dailyStats], eventStats);
  const hasData = funnelSteps.some((s) => s.value > 0);

  return (
    <section>
      <h2 className="text-lg font-semibold mb-3">Conversion Funnel</h2>
      <div className="card p-5">
        {hasData ? (
          <FunnelChart steps={funnelSteps} height={200} />
        ) : (
          <div className="text-center py-8 text-[var(--muted)] text-sm">
            Not enough funnel data yet
          </div>
        )}
      </div>
    </section>
  );
}
