'use client';

import { useState, useEffect, useMemo, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';
import { getActiveVisitorsCount } from '@/lib/firebase/visitors';
import {
  fetchAnalyticsData,
  type AnalyticsData,
  type DateRange,
} from '@/lib/analytics/queries';
import { companies } from '@/data/companies';

import {
  OverviewCards,
  TrafficTrends,
  EngagementMetrics,
  AcquisitionBreakdown,
  UserJourneys,
  TopCompanies,
  TopArticles,
  GeographySection,
  DailyStatsTable,
} from '@/components/analytics/sections';

const DATE_RANGES: { value: DateRange; label: string }[] = [
  { value: '7d', label: '7D' },
  { value: '14d', label: '14D' },
  { value: '30d', label: '30D' },
  { value: '90d', label: '90D' },
];

export default function AnalyticsPage() {
  const router = useRouter();
  const { user, loading } = useAuth();
  const [dateRange, setDateRange] = useState<DateRange>('30d');
  const [data, setData] = useState<AnalyticsData | null>(null);
  const [dataLoading, setDataLoading] = useState(true);

  const companyNameMap = useMemo(() => {
    const map: Record<string, string> = {};
    companies.forEach((c) => {
      map[c.id] = c.name;
    });
    return map;
  }, []);

  // Auth check
  useEffect(() => {
    if (loading) return;
    if (!user || user.email !== 'ilwonyoon@gmail.com') {
      router.push('/');
    }
  }, [user, loading, router]);

  // Fetch data
  const loadData = useCallback(async (range: DateRange) => {
    setDataLoading(true);
    try {
      const result = await fetchAnalyticsData(range);
      setData(result);
    } catch (error) {
      console.error('Failed to load analytics:', error);
    } finally {
      setDataLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!user || user.email !== 'ilwonyoon@gmail.com') return;
    void loadData(dateRange);
  }, [user, dateRange, loadData]);

  // Refresh active count every 30s
  useEffect(() => {
    if (!data) return;

    const interval = setInterval(async () => {
      const count = await getActiveVisitorsCount();
      setData((prev) =>
        prev ? { ...prev, activeVisitors: count } : prev
      );
    }, 30 * 1000);

    return () => clearInterval(interval);
  }, [data]);

  if (loading || !user || user.email !== 'ilwonyoon@gmail.com') {
    return null;
  }

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-6">
        <Link
          href="/"
          className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] mb-4 inline-block"
        >
          &larr; Back
        </Link>
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <h1 className="text-3xl font-semibold">Analytics</h1>
            <p className="text-sm text-[var(--muted)] mt-1">
              Visitor insights & engagement metrics
            </p>
          </div>

          {/* Date Range Selector */}
          <div className="flex items-center gap-1 p-1 rounded-lg" style={{ background: 'var(--card)' }}>
            {DATE_RANGES.map((range) => (
              <button
                key={range.value}
                onClick={() => setDateRange(range.value)}
                className="px-3 py-1.5 text-xs font-mono rounded-md transition-colors"
                style={{
                  background:
                    dateRange === range.value ? 'var(--accent)' : 'transparent',
                  color:
                    dateRange === range.value
                      ? 'var(--background)'
                      : 'var(--muted)',
                }}
              >
                {range.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {dataLoading || !data ? (
        <div className="flex items-center justify-center py-20">
          <div className="text-[var(--muted)] text-sm">Loading analytics...</div>
        </div>
      ) : (
        <div className="space-y-8">
          <OverviewCards
            activeVisitors={data.activeVisitors}
            dailyStats={data.dailyStats}
            dateRange={dateRange}
          />

          <TrafficTrends dailyStats={data.dailyStats} />

          <EngagementMetrics dailyStats={data.dailyStats} />

          <AcquisitionBreakdown dailyStats={data.dailyStats} />

          <UserJourneys
            dailyStats={data.dailyStats}
            eventStats={data.eventStats}
          />

          <TopCompanies
            eventStats={data.eventStats}
            companyNameMap={companyNameMap}
          />

          <TopArticles eventStats={data.eventStats} />

          <GeographySection countries={data.countries} />

          <DailyStatsTable dailyStats={data.dailyStats} />
        </div>
      )}
    </div>
  );
}
