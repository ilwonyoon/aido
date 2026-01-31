'use client';

import { useState, useEffect, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';
import {
  getActiveVisitorsCount,
  getDailyStats,
  getCountryDistribution,
  type DailyStats,
} from '@/lib/firebase/visitors';
import { getEventStats, type EventStats } from '@/lib/firebase/events';
import { companies } from '@/data/companies';

export default function AnalyticsPage() {
  const router = useRouter();
  const { user, loading } = useAuth();
  const [activeVisitors, setActiveVisitors] = useState<number>(0);
  const [dailyStats, setDailyStats] = useState<DailyStats[]>([]);
  const [countries, setCountries] = useState<Record<string, number>>({});
  const [eventStats, setEventStats] = useState<EventStats | null>(null);
  const [dataLoading, setDataLoading] = useState(true);

  // Company name lookup
  const companyNameMap = useMemo(() => {
    const map: Record<string, string> = {};
    companies.forEach((c) => {
      map[c.id] = c.name;
    });
    return map;
  }, []);

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

      const [count, stats, countryDist, events] = await Promise.all([
        getActiveVisitorsCount(),
        getDailyStats(startDate, endDate),
        getCountryDistribution(),
        getEventStats(startDate, endDate),
      ]);

      setActiveVisitors(count);
      setDailyStats(stats);
      setCountries(countryDist);
      setEventStats(events);
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
  const allSessions = new Set<string>();
  dailyStats.forEach(day => {
    if (day.visitorSessions) {
      (day.visitorSessions as string[]).forEach(session => allSessions.add(session));
    }
  });
  const totalVisitors = allSessions.size || dailyStats.reduce((sum, day) => sum + (day.uniqueVisitors || 0), 0);
  const totalPageViews = dailyStats.reduce((sum, day) => sum + (day.pageViews || 0), 0);
  const todayStats = dailyStats.find(d => d.date === new Date().toISOString().split('T')[0]);

  // Sort countries by count
  const sortedCountries = Object.entries(countries)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 10);

  // Merge company clicks + detail views for ranking
  const topCompanies = eventStats
    ? Object.entries(eventStats.companyClicks)
        .map(([id, clicks]) => ({
          id,
          name: companyNameMap[id] || id,
          clicks,
          detailViews: eventStats.companyDetailViews[id] || 0,
          total: clicks + (eventStats.companyDetailViews[id] || 0),
        }))
        .sort((a, b) => b.total - a.total)
        .slice(0, 15)
    : [];

  // Also include companies that only have detail views (no list clicks)
  if (eventStats) {
    for (const [id, views] of Object.entries(eventStats.companyDetailViews)) {
      if (!eventStats.companyClicks[id] && views > 0) {
        topCompanies.push({
          id,
          name: companyNameMap[id] || id,
          clicks: 0,
          detailViews: views,
          total: views,
        });
      }
    }
    topCompanies.sort((a, b) => b.total - a.total);
    topCompanies.splice(15);
  }

  // Article views sorted
  const sortedArticles = eventStats
    ? Object.entries(eventStats.articleViews)
        .sort(([, a], [, b]) => b - a)
    : [];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <Link href="/" className="text-sm text-[var(--muted)] hover:text-[var(--foreground)]">
          &larr; Back to companies
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

          {/* Top Clicked Companies */}
          {topCompanies.length > 0 && (
            <section>
              <h2 className="text-2xl font-semibold mb-4">Top Companies (30 days)</h2>
              <div className="card overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="border-b border-[var(--border)]">
                      <tr>
                        <th className="text-left py-3 px-4 font-medium w-8">#</th>
                        <th className="text-left py-3 px-4 font-medium">Company</th>
                        <th className="text-right py-3 px-4 font-medium">List Clicks</th>
                        <th className="text-right py-3 px-4 font-medium">Detail Views</th>
                        <th className="text-right py-3 px-4 font-medium">Total</th>
                      </tr>
                    </thead>
                    <tbody className="text-[var(--muted)]">
                      {topCompanies.map((company, idx) => (
                        <tr key={company.id} className="border-b border-[var(--border)]">
                          <td className="py-3 px-4 text-xs text-[var(--muted)]">{idx + 1}</td>
                          <td className="py-3 px-4">
                            <Link
                              href={`/company/${company.id}`}
                              className="text-[var(--foreground)] hover:text-[var(--accent-light)]"
                            >
                              {company.name}
                            </Link>
                          </td>
                          <td className="py-3 px-4 text-right font-mono">{company.clicks}</td>
                          <td className="py-3 px-4 text-right font-mono">{company.detailViews}</td>
                          <td className="py-3 px-4 text-right font-mono font-medium text-[var(--foreground)]">
                            {company.total}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
          )}

          {/* Tier Status Activity */}
          {eventStats && (
            <section>
              <h2 className="text-2xl font-semibold mb-4">Tier Activity (30 days)</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="card p-5">
                  <div className="text-xs text-[var(--muted)] uppercase tracking-wide mb-1">
                    Tier 0
                  </div>
                  <div className="text-3xl font-mono font-bold text-[var(--success)]">
                    {eventStats.tierChanges.tier_0 || 0}
                  </div>
                </div>
                <div className="card p-5">
                  <div className="text-xs text-[var(--muted)] uppercase tracking-wide mb-1">
                    Tier 1
                  </div>
                  <div className="text-3xl font-mono font-bold text-[var(--accent-light)]">
                    {eventStats.tierChanges.tier_1 || 0}
                  </div>
                </div>
                <div className="card p-5">
                  <div className="text-xs text-[var(--muted)] uppercase tracking-wide mb-1">
                    Not Interested
                  </div>
                  <div className="text-3xl font-mono font-bold text-[var(--warning)]">
                    {eventStats.tierChanges.not_interested || 0}
                  </div>
                </div>
                <div className="card p-5">
                  <div className="text-xs text-[var(--muted)] uppercase tracking-wide mb-1">
                    Cleared
                  </div>
                  <div className="text-3xl font-mono font-bold text-[var(--muted)]">
                    {eventStats.tierChanges.cleared || 0}
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Article Views */}
          {sortedArticles.length > 0 && (
            <section>
              <h2 className="text-2xl font-semibold mb-4">Article Views (30 days)</h2>
              <div className="card p-6">
                <div className="space-y-3">
                  {sortedArticles.map(([slug, views], idx) => {
                    const maxViews = sortedArticles[0][1];
                    const percentage = (views / maxViews) * 100;

                    return (
                      <div key={slug}>
                        <div className="flex items-center justify-between mb-1 text-sm">
                          <div className="flex items-center gap-3 min-w-0">
                            <span className="text-xs text-[var(--muted)] w-4 flex-shrink-0">
                              #{idx + 1}
                            </span>
                            <Link
                              href={`/insights/${slug}`}
                              className="font-mono text-[var(--foreground)] hover:text-[var(--accent-light)] truncate"
                            >
                              {slug}
                            </Link>
                          </div>
                          <span className="font-mono text-[var(--muted)] flex-shrink-0 ml-4">
                            {views} views
                          </span>
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
              </div>
            </section>
          )}

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
