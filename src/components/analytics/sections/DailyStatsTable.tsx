'use client';

import { useState } from 'react';
import type { DailyStats } from '@/lib/firebase/visitors';

interface DailyStatsTableProps {
  readonly dailyStats: readonly DailyStats[];
}

export function DailyStatsTable({ dailyStats }: DailyStatsTableProps) {
  const [showAll, setShowAll] = useState(false);
  const sorted = [...dailyStats].sort((a, b) => b.date.localeCompare(a.date));
  const displayData = showAll ? sorted : sorted.slice(0, 14);

  if (sorted.length === 0) {
    return (
      <section>
        <h2 className="text-lg font-semibold mb-3">Daily Statistics</h2>
        <div className="card p-5 text-center text-[var(--muted)] text-sm">
          No daily data yet
        </div>
      </section>
    );
  }

  return (
    <section>
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-semibold">Daily Statistics</h2>
        {sorted.length > 14 && (
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="text-xs text-[var(--accent-light)] hover:underline"
          >
            {showAll ? 'Show less' : `Show all ${sorted.length} days`}
          </button>
        )}
      </div>
      <div className="card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="border-b border-[var(--border)]">
              <tr>
                <th className="text-left py-3 px-4 font-medium">Date</th>
                <th className="text-right py-3 px-4 font-medium">Visitors</th>
                <th className="text-right py-3 px-4 font-medium">Views</th>
                <th className="text-left py-3 px-4 font-medium">Top Page</th>
                <th className="text-right py-3 px-4 font-medium hidden md:table-cell">Sources</th>
              </tr>
            </thead>
            <tbody className="text-[var(--muted)]">
              {displayData.map((day) => {
                const topSource = day.trafficSources
                  ? Object.entries(day.trafficSources)
                      .sort(([, a], [, b]) => b - a)[0]?.[0]
                  : null;

                return (
                  <tr key={day.date} className="border-b border-[var(--border)]">
                    <td className="py-2.5 px-4 font-mono text-xs">{day.date}</td>
                    <td className="py-2.5 px-4 text-right font-mono text-xs">
                      {day.uniqueVisitors || 0}
                    </td>
                    <td className="py-2.5 px-4 text-right font-mono text-xs">
                      {day.pageViews || 0}
                    </td>
                    <td className="py-2.5 px-4 text-xs truncate max-w-[200px]">
                      {day.topPages?.[0]?.path || '-'}
                    </td>
                    <td className="py-2.5 px-4 text-right text-xs hidden md:table-cell">
                      {topSource || '-'}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
