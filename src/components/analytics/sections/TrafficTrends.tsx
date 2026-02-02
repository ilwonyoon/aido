'use client';

import type { DailyStats } from '@/lib/firebase/visitors';
import { computeVisitorTrend, computePageViewTrend } from '@/lib/analytics/queries';
import { TrendLineChart } from '@/components/analytics/charts';

interface TrafficTrendsProps {
  readonly dailyStats: readonly DailyStats[];
}

export function TrafficTrends({ dailyStats }: TrafficTrendsProps) {
  const visitorTrend = computeVisitorTrend([...dailyStats]);
  const pageViewTrend = computePageViewTrend([...dailyStats]);

  if (visitorTrend.length === 0) {
    return (
      <section>
        <h2 className="text-lg font-semibold mb-3">Traffic Trends</h2>
        <div className="card p-5 text-center text-[var(--muted)] text-sm">
          Not enough data yet
        </div>
      </section>
    );
  }

  return (
    <section>
      <h2 className="text-lg font-semibold mb-3">Traffic Trends</h2>
      <div className="card p-5">
        <TrendLineChart
          data={visitorTrend}
          secondaryData={pageViewTrend}
          label="Visitors"
          secondaryLabel="Page Views"
          color="var(--accent)"
          secondaryColor="var(--success)"
          height={280}
        />
        <div className="flex items-center gap-4 mt-3 text-xs text-[var(--muted)]">
          <span className="flex items-center gap-1.5">
            <span className="w-3 h-0.5 rounded" style={{ background: 'var(--accent)' }} />
            Unique Visitors
          </span>
          <span className="flex items-center gap-1.5">
            <span
              className="w-3 h-0.5 rounded"
              style={{ background: 'var(--success)', borderTop: '1px dashed var(--success)' }}
            />
            Page Views
          </span>
        </div>
      </div>
    </section>
  );
}
