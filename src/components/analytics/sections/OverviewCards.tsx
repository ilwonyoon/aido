'use client';

import type { DailyStats } from '@/lib/firebase/visitors';
import { computeTotals } from '@/lib/analytics/queries';

interface OverviewCardsProps {
  readonly activeVisitors: number;
  readonly dailyStats: readonly DailyStats[];
  readonly dateRange: string;
}

function formatRange(range: string): string {
  const map: Record<string, string> = {
    '7d': 'Last 7 Days',
    '14d': 'Last 14 Days',
    '30d': 'Last 30 Days',
    '90d': 'Last 90 Days',
  };
  return map[range] || range;
}

export function OverviewCards({ activeVisitors, dailyStats, dateRange }: OverviewCardsProps) {
  const { totalVisitors, totalPageViews, todayStats } = computeTotals([...dailyStats]);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {/* Active Now */}
      <div className="card p-5">
        <div className="flex items-center gap-2 mb-2">
          <span
            className="w-2 h-2 rounded-full"
            style={{
              background: activeVisitors > 0 ? 'var(--success)' : 'var(--muted)',
              boxShadow: activeVisitors > 0 ? '0 0 8px var(--success)' : 'none',
            }}
          />
          <span className="text-xs text-[var(--muted)] uppercase tracking-wide">
            Active Now
          </span>
        </div>
        <div className="text-3xl font-mono font-bold text-[var(--success)]">
          {activeVisitors}
        </div>
      </div>

      {/* Today */}
      <div className="card p-5">
        <div className="text-xs text-[var(--muted)] uppercase tracking-wide mb-2">
          Today
        </div>
        <div className="text-3xl font-mono font-bold">
          {todayStats?.uniqueVisitors || 0}
        </div>
        <div className="text-xs text-[var(--muted)] mt-1">
          {todayStats?.pageViews || 0} page views
        </div>
      </div>

      {/* Period Visitors */}
      <div className="card p-5">
        <div className="text-xs text-[var(--muted)] uppercase tracking-wide mb-2">
          {formatRange(dateRange)} Visitors
        </div>
        <div className="text-3xl font-mono font-bold">{totalVisitors}</div>
      </div>

      {/* Period Page Views */}
      <div className="card p-5">
        <div className="text-xs text-[var(--muted)] uppercase tracking-wide mb-2">
          {formatRange(dateRange)} Views
        </div>
        <div className="text-3xl font-mono font-bold">{totalPageViews}</div>
        {totalVisitors > 0 && (
          <div className="text-xs text-[var(--muted)] mt-1">
            {(totalPageViews / totalVisitors).toFixed(1)} pages/visitor
          </div>
        )}
      </div>
    </div>
  );
}
