import type { Analytics } from 'firebase/analytics';
import { getFirebaseApp } from './lazy-config';

let analyticsPromise: Promise<Analytics | null> | null = null;

async function getAnalyticsInstance(): Promise<Analytics | null> {
  if (typeof window === 'undefined') return null;
  if (!analyticsPromise) {
    analyticsPromise = (async () => {
      const { getAnalytics, isSupported } = await import('firebase/analytics');
      const supported = await isSupported();
      if (!supported) return null;
      const app = await getFirebaseApp();
      return getAnalytics(app);
    })();
  }
  return analyticsPromise;
}

export async function trackEvent(name: string, params?: Record<string, unknown>): Promise<void> {
  const analytics = await getAnalyticsInstance();
  if (!analytics) return;
  const { logEvent } = await import('firebase/analytics');
  logEvent(analytics, name, params);
}

export async function trackPageView(path: string): Promise<void> {
  await trackEvent('page_view', { page_path: path });
}
