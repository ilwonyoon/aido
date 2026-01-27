'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';
import {
  getActiveVisitorsCount,
  getDailyStats,
  getCountryDistribution,
  type DailyStats,
} from '@/lib/firebase/visitors';

export default function AnalyticsPage() {
  const router = useRouter();
  const { user, loading } = useAuth();
  const [activeVisitors, setActiveVisitors] = useState<number>(0);
  const [dailyStats, setDailyStats] = useState<DailyStats[]>([]);
  const [countries, setCountries] = useState<Record<string, number>>({});
  const [dataLoading, setDataLoading] = useState(true);

  // Check admin access
  useEffect(() => {
    if (loading) return;
    if (!user || user.email !== 'ilwonyoon@gmail.com') {
      router.push('/');
    }
  }, [user, loading, router]);

  // Load analytics data
  useEffect(() => {
    if (!user || user.email !== 'ilwonyoon@gmail.com') return;

    const loadData = async () => {
      setDataLoading(true);

      // Get last 30 days
      const endDate = new Date().toISOString().split('T')[0];
      const startDate = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)
        .toISOString()
        .split('T')[0];

      const [count, stats, countryDist] = await Promise.all([
        getActiveVisitorsCount(),
        getDailyStats(startDate, endDate),
        getCountryDistribution(),
      ]);

      setActiveVisitors(count);
      setDailyStats(stats);
      setCountries(countryDist);
      setDataLoading(false);
    };

    loadData();

    // Refresh every 30 seconds
    const interval = setInterval(async () => {
      const count = await getActiveVisitorsCount();
      setActiveVisitors(count);
    }, 30 * 1000);

    return () => clearInterval(interval);
  }, [user]);

  if (loading || !user || user.email !== 'ilwonyoon@gmail.com') {
    return null;
  }

  // Calculate totals
  const totalVisitors = dailyStats.reduce((sum, day) => sum + (day.uniqueVisitors || 0), 0);
  const totalPageViews = dailyStats.reduce((sum, day) => sum + (day.pageViews || 0), 0);
  const todayStats = dailyStats.find(d => d.date === new Date().toISOString().split('T')[0]);

  // Sort countries by count
  const sortedCountries = Object.entries(countries)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 10);

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <Link href="/" className="text-sm text-[var(--muted)] hover:text-[var(--foreground)]">
          ← Back to companies
        </Link>
      </div>

      <div className="mb-8">
        <h1 className="text-4xl font-semibold mb-2">Analytics</h1>
        <p className="text-[var(--muted)]">Site visitor statistics and insights</p>
      </div>

      {dataLoading ? (
        <div className="flex items-center justify-center py-20">
          <div className="text-[var(--muted)]">Loading analytics...</div>
        </div>
      ) : (
        <div className="space-y-8">
          {/* Real-time Stats */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Real-time</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="card p-6">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">🌍</span>
                  <div className="text-xs text-[var(--muted)] uppercase tracking-wide">
                    Active Now
                  </div>
                </div>
                <div className="text-4xl font-mono font-bold text-[var(--success)]">
                  {activeVisitors}
                </div>
              </div>

              <div className="card p-6">
                <div className="text-xs text-[var(--muted)] uppercase tracking-wide mb-2">
                  Today
                </div>
                <div className="space-y-1">
                  <div className="text-2xl font-mono font-bold">
                    {todayStats?.uniqueVisitors || 0}
                  </div>
                  <div className="text-xs text-[var(--muted)]">
                    {todayStats?.pageViews || 0} page views
                  </div>
                </div>
              </div>

              <div className="card p-6">
                <div className="text-xs text-[var(--muted)] uppercase tracking-wide mb-2">
                  Last 30 Days
                </div>
                <div className="space-y-1">
                  <div className="text-2xl font-mono font-bold">{totalVisitors}</div>
                  <div className="text-xs text-[var(--muted)]">
                    {totalPageViews} page views
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Country Distribution */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Visitors by Country</h2>
            <div className="card p-6">
              {sortedCountries.length === 0 ? (
                <div className="text-center py-8 text-[var(--muted)]">
                  No visitor data yet
                </div>
              ) : (
                <div className="space-y-3">
                  {sortedCountries.map(([countryCode, count]) => {
                    const maxCount = sortedCountries[0][1];
                    const percentage = (count / maxCount) * 100;

                    return (
                      <div key={countryCode}>
                        <div className="flex items-center justify-between mb-1 text-sm">
                          <span className="font-medium">{countryCode}</span>
                          <span className="font-mono text-[var(--muted)]">{count}</span>
                        </div>
                        <div className="h-2 bg-[var(--border)] rounded-full overflow-hidden">
                          <div
                            className="h-full bg-[var(--accent)] transition-all"
                            style={{ width: `${percentage}%` }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </section>

          {/* Daily Stats */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Daily Statistics</h2>
            <div className="card overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="border-b border-[var(--border)]">
                    <tr>
                      <th className="text-left py-3 px-4 font-medium">Date</th>
                      <th className="text-right py-3 px-4 font-medium">Visitors</th>
                      <th className="text-right py-3 px-4 font-medium">Page Views</th>
                      <th className="text-left py-3 px-4 font-medium">Top Page</th>
                    </tr>
                  </thead>
                  <tbody className="text-[var(--muted)]">
                    {dailyStats.length === 0 ? (
                      <tr>
                        <td colSpan={4} className="text-center py-8">
                          No data yet
                        </td>
                      </tr>
                    ) : (
                      dailyStats.slice(0, 14).map((day) => (
                        <tr key={day.date} className="border-b border-[var(--border)]">
                          <td className="py-3 px-4 font-mono">{day.date}</td>
                          <td className="py-3 px-4 text-right font-mono">
                            {day.uniqueVisitors || 0}
                          </td>
                          <td className="py-3 px-4 text-right font-mono">
                            {day.pageViews || 0}
                          </td>
                          <td className="py-3 px-4">
                            {day.topPages?.[0]?.path || '-'}
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Top Pages */}
          {todayStats && todayStats.topPages && todayStats.topPages.length > 0 && (
            <section>
              <h2 className="text-2xl font-semibold mb-4">Top Pages Today</h2>
              <div className="card p-6">
                <div className="space-y-2">
                  {todayStats.topPages.slice(0, 5).map((page, idx) => (
                    <div
                      key={page.path}
                      className="flex items-center justify-between text-sm"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xs text-[var(--muted)] w-4">#{idx + 1}</span>
                        <span className="font-mono">{page.path}</span>
                      </div>
                      <span className="font-mono text-[var(--muted)]">
                        {page.views} views
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}
        </div>
      )}
    </div>
  );
}
