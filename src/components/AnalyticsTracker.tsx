'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { trackPageView } from '@/lib/firebase/analytics';
import { trackVisit, markInactiveSessions } from '@/lib/firebase/visitors';

function isOwnerTraffic(email?: string | null): boolean {
  if (typeof window !== 'undefined' && window.location.hostname === 'localhost') {
    return true;
  }
  return email === 'ilwonyoon@gmail.com';
}

export function AnalyticsTracker() {
  const pathname = usePathname();
  const { user } = useAuth();

  useEffect(() => {
    if (!pathname) return;
    if (isOwnerTraffic(user?.email)) return;

    // Firebase Analytics
    void trackPageView(pathname);

    // Visitor tracking (Firestore)
    void trackVisit(pathname, user?.uid);
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
