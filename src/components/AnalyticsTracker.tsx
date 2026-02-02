'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { trackPageView } from '@/lib/firebase/analytics';
import {
  trackVisit,
  markInactiveSessions,
  updateEngagement,
  updateDailyAcquisition,
  updateDailyEngagement,
} from '@/lib/firebase/visitors';
import {
  AnalyticsSessionManager,
  type SessionSnapshot,
} from '@/lib/analytics/session-manager';

function isOwnerTraffic(email?: string | null): boolean {
  if (typeof window !== 'undefined' && window.location.hostname === 'localhost') {
    return true;
  }
  return email === 'ilwonyoon@gmail.com';
}

export function AnalyticsTracker() {
  const pathname = usePathname();
  const { user } = useAuth();
  const managerRef = useRef<AnalyticsSessionManager | null>(null);
  const acquisitionSentRef = useRef(false);

  // Initialize session manager (once)
  useEffect(() => {
    if (isOwnerTraffic(user?.email)) return;

    const handleFlush = async (snapshot: SessionSnapshot): Promise<void> => {
      const maxScroll = Math.max(
        snapshot.currentScrollDepth,
        ...snapshot.pageSequence.map((p) => p.scrollDepth ?? 0)
      );

      await updateEngagement({
        device: snapshot.device,
        referrer: snapshot.referrer,
        utm: snapshot.utm,
        pageSequence: snapshot.pageSequence,
        totalTimeOnSite: snapshot.totalTimeOnSite,
        maxScrollDepth: maxScroll,
        isReturnVisitor: snapshot.isReturnVisitor,
        visitCount: snapshot.visitCount,
      });
    };

    const manager = new AnalyticsSessionManager(handleFlush);
    managerRef.current = manager;

    return () => {
      // Final flush with engagement summary
      const snapshot = manager.getSnapshot();
      const maxScroll = Math.max(
        snapshot.currentScrollDepth,
        ...snapshot.pageSequence.map((p) => p.scrollDepth ?? 0)
      );

      void updateDailyEngagement({
        totalTimeOnSite: snapshot.totalTimeOnSite,
        maxScrollDepth: maxScroll,
        pageCount: snapshot.pageSequence.length,
      });

      void manager.destroy();
      managerRef.current = null;
      acquisitionSentRef.current = false;
    };
  }, [user?.email]);

  // Track page changes
  useEffect(() => {
    if (!pathname) return;
    if (isOwnerTraffic(user?.email)) return;

    // Firebase Analytics
    void trackPageView(pathname);

    // Visitor tracking (Firestore)
    void trackVisit(pathname, user?.uid);

    // Session manager — enter new page
    if (managerRef.current) {
      managerRef.current.enterPage(pathname);

      // Send acquisition data once per session
      if (!acquisitionSentRef.current) {
        acquisitionSentRef.current = true;
        const snapshot = managerRef.current.getSnapshot();
        void updateDailyAcquisition({
          trafficSource: snapshot.referrer.source,
          deviceType: snapshot.device.type,
          browser: snapshot.device.browser,
          isReturnVisitor: snapshot.isReturnVisitor,
        });
      }
    }
  }, [pathname, user?.uid, user?.email]);

  // Mark inactive sessions every 2 minutes
  useEffect(() => {
    const interval = setInterval(() => {
      void markInactiveSessions();
    }, 2 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  return null;
}
