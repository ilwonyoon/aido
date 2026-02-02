'use client';

import Link from 'next/link';
import type { EventStats } from '@/lib/firebase/events';
import { BarChart } from '@/components/analytics/charts';
import { computeTopCompanies } from '@/lib/analytics/queries';

interface TopCompaniesProps {
  readonly eventStats: EventStats;
  readonly companyNameMap: Record<string, string>;
}

export function TopCompanies({ eventStats, companyNameMap }: TopCompaniesProps) {
  const topCompaniesData = computeTopCompanies(eventStats, companyNameMap);

  if (topCompaniesData.length === 0) {
    return null;
  }

  // Build detailed data for table
  const detailedData = Object.entries(eventStats.companyClicks)
    .map(([id, clicks]) => ({
      id,
      name: companyNameMap[id] || id,
      clicks,
      detailViews: eventStats.companyDetailViews[id] || 0,
      total: clicks + (eventStats.companyDetailViews[id] || 0),
    }));

  // Also include companies that only have detail views
  for (const [id, views] of Object.entries(eventStats.companyDetailViews)) {
    if (!eventStats.companyClicks[id] && views > 0) {
      detailedData.push({
        id,
        name: companyNameMap[id] || id,
        clicks: 0,
        detailViews: views,
        total: views,
      });
    }
  }

  const sorted = detailedData.sort((a, b) => b.total - a.total).slice(0, 15);

  return (
    <section>
      <h2 className="text-lg font-semibold mb-3">Top Companies</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Chart */}
        <div className="card p-5">
          <BarChart data={topCompaniesData.slice(0, 10)} height={320} horizontal barColor="var(--accent)" />
        </div>

        {/* Table */}
        <div className="card overflow-hidden">
          <table className="w-full text-sm">
            <thead className="border-b border-[var(--border)]">
              <tr>
                <th className="text-left py-3 px-4 font-medium w-8">#</th>
                <th className="text-left py-3 px-4 font-medium">Company</th>
                <th className="text-right py-3 px-4 font-medium">Clicks</th>
                <th className="text-right py-3 px-4 font-medium">Views</th>
                <th className="text-right py-3 px-4 font-medium">Total</th>
              </tr>
            </thead>
            <tbody className="text-[var(--muted)]">
              {sorted.map((company, idx) => (
                <tr key={company.id} className="border-b border-[var(--border)]">
                  <td className="py-2.5 px-4 text-xs">{idx + 1}</td>
                  <td className="py-2.5 px-4">
                    <Link
                      href={`/company/${company.id}`}
                      className="text-[var(--foreground)] hover:text-[var(--accent-light)] text-xs"
                    >
                      {company.name}
                    </Link>
                  </td>
                  <td className="py-2.5 px-4 text-right font-mono text-xs">{company.clicks}</td>
                  <td className="py-2.5 px-4 text-right font-mono text-xs">{company.detailViews}</td>
                  <td className="py-2.5 px-4 text-right font-mono text-xs font-medium text-[var(--foreground)]">
                    {company.total}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
