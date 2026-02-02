'use client';

import type { DailyStats } from '@/lib/firebase/visitors';
import { computeEngagementMetrics } from '@/lib/analytics/queries';

interface EngagementMetricsProps {
  readonly dailyStats: readonly DailyStats[];
}

function formatTime(seconds: number): string {
  if (seconds < 60) return `${seconds}s`;
  const min = Math.floor(seconds / 60);
  const sec = seconds % 60;
  return sec > 0 ? `${min}m ${sec}s` : `${min}m`;
}

export function EngagementMetrics({ dailyStats }: EngagementMetricsProps) {
  const { avgTimeOnSite, avgScrollDepth, bounceRate, returnRate } =
    computeEngagementMetrics([...dailyStats]);

  const hasData = avgTimeOnSite > 0 || avgScrollDepth > 0 || bounceRate > 0 || returnRate > 0;

  return (
    <section>
      <h2 className="text-lg font-semibold mb-3">Engagement</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {/* Avg Time on Site */}
        <div className="card p-5">
          <div className="text-xs text-[var(--muted)] uppercase tracking-wide mb-2">
            Avg. Time on Site
          </div>
          <div className="text-2xl font-mono font-bold">
            {hasData ? formatTime(avgTimeOnSite) : '--'}
          </div>
        </div>

        {/* Avg Scroll Depth */}
        <div className="card p-5">
          <div className="text-xs text-[var(--muted)] uppercase tracking-wide mb-2">
            Avg. Scroll Depth
          </div>
          <div className="text-2xl font-mono font-bold">
            {hasData ? `${avgScrollDepth}%` : '--'}
          </div>
          {hasData && avgScrollDepth > 0 && (
            <div className="mt-2 h-1.5 bg-[var(--border)] rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all"
                style={{
                  width: `${avgScrollDepth}%`,
                  background: avgScrollDepth >= 60 ? 'var(--success)' : 'var(--warning)',
                }}
              />
            </div>
          )}
        </div>

        {/* Bounce Rate */}
        <div className="card p-5">
          <div className="text-xs text-[var(--muted)] uppercase tracking-wide mb-2">
            Bounce Rate
          </div>
          <div
            className="text-2xl font-mono font-bold"
            style={{ color: bounceRate > 60 ? 'var(--warning)' : 'var(--success)' }}
          >
            {hasData ? `${bounceRate}%` : '--'}
          </div>
        </div>

        {/* Return Visitors */}
        <div className="card p-5">
          <div className="text-xs text-[var(--muted)] uppercase tracking-wide mb-2">
            Return Visitors
          </div>
          <div className="text-2xl font-mono font-bold" style={{ color: 'var(--accent-light)' }}>
            {hasData ? `${returnRate}%` : '--'}
          </div>
        </div>
      </div>
    </section>
  );
}
