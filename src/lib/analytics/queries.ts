/**
 * Centralized analytics data fetching + derived computations.
 * All dashboard sections read from this module.
 */

import {
  getActiveVisitorsCount,
  getDailyStats,
  getCountryDistribution,
  type DailyStats,
} from '@/lib/firebase/visitors';
import { getEventStats, type EventStats } from '@/lib/firebase/events';
import type { TrendDataPoint } from '@/components/analytics/charts';
import type { BarDataPoint } from '@/components/analytics/charts';
import type { DonutDataPoint } from '@/components/analytics/charts';
import type { FunnelStep } from '@/components/analytics/charts';

// ── Types ──────────────────────────────────────────────────────────────────

export type DateRange = '7d' | '14d' | '30d' | '90d';

export interface AnalyticsData {
  activeVisitors: number;
  dailyStats: DailyStats[];
  countries: Record<string, number>;
  eventStats: EventStats;
  dateRange: DateRange;
  startDate: string;
  endDate: string;
}

// ── Date Helpers ───────────────────────────────────────────────────────────

const RANGE_DAYS: Record<DateRange, number> = {
  '7d': 7,
  '14d': 14,
  '30d': 30,
  '90d': 90,
};

export function getDateRange(range: DateRange): { startDate: string; endDate: string } {
  const endDate = new Date().toISOString().split('T')[0];
  const startDate = new Date(Date.now() - RANGE_DAYS[range] * 24 * 60 * 60 * 1000)
    .toISOString()
    .split('T')[0];
  return { startDate, endDate };
}

// ── Fetch All ──────────────────────────────────────────────────────────────

export async function fetchAnalyticsData(range: DateRange): Promise<AnalyticsData> {
  const { startDate, endDate } = getDateRange(range);

  const [activeVisitors, dailyStats, countries, eventStats] = await Promise.all([
    getActiveVisitorsCount(),
    getDailyStats(startDate, endDate),
    getCountryDistribution(),
    getEventStats(startDate, endDate),
  ]);

  return {
    activeVisitors,
    dailyStats,
    countries,
    eventStats,
    dateRange: range,
    startDate,
    endDate,
  };
}

// ── Derived Data ───────────────────────────────────────────────────────────

export function computeTotals(dailyStats: DailyStats[]): {
  totalVisitors: number;
  totalPageViews: number;
  todayStats: DailyStats | undefined;
} {
  const allSessions = new Set<string>();
  dailyStats.forEach((day) => {
    if (day.visitorSessions) {
      (day.visitorSessions as string[]).forEach((session) => allSessions.add(session));
    }
  });

  const totalVisitors =
    allSessions.size ||
    dailyStats.reduce((sum, day) => sum + (day.uniqueVisitors || 0), 0);
  const totalPageViews = dailyStats.reduce((sum, day) => sum + (day.pageViews || 0), 0);
  const todayStr = new Date().toISOString().split('T')[0];
  const todayStats = dailyStats.find((d) => d.date === todayStr);

  return { totalVisitors, totalPageViews, todayStats };
}

export function computeVisitorTrend(dailyStats: DailyStats[]): TrendDataPoint[] {
  return [...dailyStats]
    .sort((a, b) => a.date.localeCompare(b.date))
    .map((day) => ({
      date: day.date,
      value: day.uniqueVisitors || 0,
    }));
}

export function computePageViewTrend(dailyStats: DailyStats[]): TrendDataPoint[] {
  return [...dailyStats]
    .sort((a, b) => a.date.localeCompare(b.date))
    .map((day) => ({
      date: day.date,
      value: day.pageViews || 0,
    }));
}

export function computeTrafficSources(dailyStats: DailyStats[]): DonutDataPoint[] {
  const merged: Record<string, number> = {};
  for (const day of dailyStats) {
    if (day.trafficSources) {
      for (const [src, count] of Object.entries(day.trafficSources)) {
        merged[src] = (merged[src] || 0) + count;
      }
    }
  }
  return Object.entries(merged)
    .sort(([, a], [, b]) => b - a)
    .map(([label, value]) => ({ label, value }));
}

export function computeDeviceBreakdown(dailyStats: DailyStats[]): DonutDataPoint[] {
  const merged: Record<string, number> = {};
  for (const day of dailyStats) {
    if (day.deviceTypes) {
      for (const [type, count] of Object.entries(day.deviceTypes)) {
        merged[type] = (merged[type] || 0) + count;
      }
    }
  }
  return Object.entries(merged)
    .sort(([, a], [, b]) => b - a)
    .map(([label, value]) => ({ label, value }));
}

export function computeBrowserBreakdown(dailyStats: DailyStats[]): DonutDataPoint[] {
  const merged: Record<string, number> = {};
  for (const day of dailyStats) {
    if (day.browsers) {
      for (const [browser, count] of Object.entries(day.browsers)) {
        merged[browser] = (merged[browser] || 0) + count;
      }
    }
  }
  return Object.entries(merged)
    .sort(([, a], [, b]) => b - a)
    .map(([label, value]) => ({ label, value }));
}

export function computeEngagementMetrics(dailyStats: DailyStats[]): {
  avgTimeOnSite: number;
  avgScrollDepth: number;
  bounceRate: number;
  returnRate: number;
} {
  let timeSum = 0;
  let timeCount = 0;
  let scrollSum = 0;
  let scrollCount = 0;
  let bounceTotal = 0;
  let returnTotal = 0;
  let totalVisitors = 0;

  for (const day of dailyStats) {
    if (day.totalTimeOnSiteSum && day.totalTimeOnSiteCount) {
      timeSum += day.totalTimeOnSiteSum;
      timeCount += day.totalTimeOnSiteCount;
    }
    if (day.totalScrollDepthSum && day.totalScrollDepthCount) {
      scrollSum += day.totalScrollDepthSum;
      scrollCount += day.totalScrollDepthCount;
    }
    bounceTotal += day.bounceCount || 0;
    returnTotal += day.returnVisitorCount || 0;
    totalVisitors += day.uniqueVisitors || 0;
  }

  return {
    avgTimeOnSite: timeCount > 0 ? Math.round(timeSum / timeCount) : 0,
    avgScrollDepth: scrollCount > 0 ? Math.round(scrollSum / scrollCount) : 0,
    bounceRate: totalVisitors > 0 ? Math.round((bounceTotal / totalVisitors) * 100) : 0,
    returnRate: totalVisitors > 0 ? Math.round((returnTotal / totalVisitors) * 100) : 0,
  };
}

export function computeTopCompanies(
  eventStats: EventStats,
  companyNameMap: Record<string, string>
): BarDataPoint[] {
  const merged: Record<string, number> = {};

  for (const [id, clicks] of Object.entries(eventStats.companyClicks)) {
    merged[id] = (merged[id] || 0) + clicks;
  }
  for (const [id, views] of Object.entries(eventStats.companyDetailViews)) {
    merged[id] = (merged[id] || 0) + views;
  }

  return Object.entries(merged)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 15)
    .map(([id, value]) => ({
      label: companyNameMap[id] || id,
      value,
    }));
}

export function computeTopArticles(eventStats: EventStats): BarDataPoint[] {
  return Object.entries(eventStats.articleViews)
    .sort(([, a], [, b]) => b - a)
    .map(([slug, value]) => ({
      label: slug,
      value,
    }));
}

export function computeFunnel(
  dailyStats: DailyStats[],
  eventStats: EventStats
): FunnelStep[] {
  const totalPageViews = dailyStats.reduce((sum, d) => sum + (d.pageViews || 0), 0);
  const totalCompanyClicks = Object.values(eventStats.companyClicks).reduce((s, v) => s + v, 0);
  const totalDetailViews = Object.values(eventStats.companyDetailViews).reduce((s, v) => s + v, 0);

  return [
    { label: 'Homepage', value: totalPageViews },
    { label: 'Company Click', value: totalCompanyClicks },
    { label: 'Detail View', value: totalDetailViews },
  ];
}

export function computeCountryData(countries: Record<string, number>): BarDataPoint[] {
  return Object.entries(countries)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 10)
    .map(([label, value]) => ({ label, value }));
}
