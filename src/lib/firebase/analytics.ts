import { getAnalytics, isSupported, logEvent, type Analytics } from 'firebase/analytics';
import app from './config';

let analyticsPromise: Promise<Analytics | null> | null = null;

async function getAnalyticsInstance(): Promise<Analytics | null> {
  if (typeof window === 'undefined') return null;
  if (!analyticsPromise) {
    analyticsPromise = isSupported().then((supported) => (supported ? getAnalytics(app) : null));
  }
  return analyticsPromise;
}

export async function trackEvent(name: string, params?: Record<string, unknown>): Promise<void> {
  const analytics = await getAnalyticsInstance();
  if (!analytics) return;
  logEvent(analytics, name, params);
}

export async function trackPageView(path: string): Promise<void> {
  await trackEvent('page_view', { page_path: path });
}
