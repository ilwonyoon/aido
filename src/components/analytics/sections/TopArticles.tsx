'use client';

import Link from 'next/link';
import type { EventStats } from '@/lib/firebase/events';
import { BarChart } from '@/components/analytics/charts';
import { computeTopArticles } from '@/lib/analytics/queries';

interface TopArticlesProps {
  readonly eventStats: EventStats;
}

export function TopArticles({ eventStats }: TopArticlesProps) {
  const articlesData = computeTopArticles(eventStats);

  if (articlesData.length === 0) {
    return null;
  }

  return (
    <section>
      <h2 className="text-lg font-semibold mb-3">Top Articles</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Chart */}
        <div className="card p-5">
          <BarChart
            data={articlesData.slice(0, 8)}
            height={260}
            horizontal
            barColor="var(--accent-light)"
          />
        </div>

        {/* List */}
        <div className="card p-5">
          <div className="space-y-3">
            {articlesData.map((article, idx) => {
              const maxViews = articlesData[0]?.value ?? 1;
              const percentage = (article.value / maxViews) * 100;

              return (
                <div key={article.label}>
                  <div className="flex items-center justify-between mb-1 text-sm">
                    <div className="flex items-center gap-3 min-w-0">
                      <span className="text-xs text-[var(--muted)] w-4 flex-shrink-0">
                        #{idx + 1}
                      </span>
                      <Link
                        href={`/insights/${article.label}`}
                        className="font-mono text-xs text-[var(--foreground)] hover:text-[var(--accent-light)] truncate"
                      >
                        {article.label}
                      </Link>
                    </div>
                    <span className="font-mono text-xs text-[var(--muted)] flex-shrink-0 ml-4">
                      {article.value}
                    </span>
                  </div>
                  <div className="h-1.5 bg-[var(--border)] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[var(--accent)] rounded-full transition-all"
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
