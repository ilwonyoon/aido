'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { trackPageView } from '@/lib/firebase/analytics';
import { trackVisit, markInactiveSessions } from '@/lib/firebase/visitors';

export function AnalyticsTracker() {
  const pathname = usePathname();
  const { user } = useAuth();

  useEffect(() => {
    if (!pathname) return;

    // Firebase Analytics
    void trackPageView(pathname);

    // Visitor tracking (Firestore)
    void trackVisit(pathname, user?.uid);
  }, [pathname, user?.uid]);

  // Mark inactive sessions every 2 minutes
  useEffect(() => {
    const interval = setInterval(() => {
      void markInactiveSessions();
    }, 2 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  return null;
}
