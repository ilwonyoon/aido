import {
  collection,
  doc,
  setDoc,
  getDoc,
  getDocs,
  query,
  where,
  orderBy,
  limit,
  serverTimestamp,
  Timestamp,
  increment,
  type QueryDocumentSnapshot,
  type DocumentData,
} from 'firebase/firestore';
import { getFirebaseDb } from './lazy-config';
import type { DeviceInfo, ReferrerInfo, UTMParams } from '@/lib/analytics/collectors';
import type { PageVisit } from '@/lib/analytics/session-manager';

export interface VisitorSession {
  sessionId: string;
  firstVisit: Timestamp;
  lastActivity: Timestamp;
  location?: {
    country?: string;
    city?: string;
    countryCode?: string;
  };
  pages: string[];
  userId?: string;
  isActive: boolean;

  // Acquisition data (set once per session)
  device?: DeviceInfo;
  referrer?: ReferrerInfo;
  utm?: UTMParams | null;

  // Engagement data (updated periodically)
  pageSequence?: PageVisit[];
  totalTimeOnSite?: number; // seconds
  maxScrollDepth?: number; // 0-100
  isReturnVisitor?: boolean;
  visitCount?: number;
}

export interface DailyStats {
  date: string; // YYYY-MM-DD
  uniqueVisitors: number;
  pageViews: number;
  topPages: { path: string; views: number }[];
  countries: Record<string, number>;
  visitorSessions?: string[]; // Session IDs for tracking unique visitors

  // Event tracking fields (populated by events.ts)
  companyClicks?: Record<string, number>;
  companyDetailViews?: Record<string, number>;
  tierChanges?: Record<string, number>;
  articleViews?: Record<string, number>;

  // Aggregated engagement (incremented on write)
  trafficSources?: Record<string, number>;
  deviceTypes?: Record<string, number>;
  browsers?: Record<string, number>;
  returnVisitorCount?: number;
  bounceCount?: number;

  // Engagement averages (computed on read)
  totalTimeOnSiteSum?: number;
  totalTimeOnSiteCount?: number;
  totalScrollDepthSum?: number;
  totalScrollDepthCount?: number;
}

const SESSION_TIMEOUT_MS = 30 * 60 * 1000; // 30 minutes (GA4 standard)
const SESSION_ID_KEY = 'aido_session_id';
const SESSION_TS_KEY = 'aido_session_ts';

/**
 * Get or create session ID from localStorage.
 * Rotates session after 30 min of inactivity (GA4 standard).
 */
export function getSessionId(): string {
  if (typeof window === 'undefined') return '';

  const now = Date.now();
  const existingId = localStorage.getItem(SESSION_ID_KEY);
  const lastActivityStr = localStorage.getItem(SESSION_TS_KEY);
  const lastActivity = lastActivityStr ? parseInt(lastActivityStr, 10) : 0;

  const isExpired = !existingId || (now - lastActivity > SESSION_TIMEOUT_MS);

  const sessionId = isExpired
    ? `session_${now}_${Math.random().toString(36).substring(7)}`
    : existingId;

  localStorage.setItem(SESSION_ID_KEY, sessionId);
  localStorage.setItem(SESSION_TS_KEY, String(now));

  return sessionId;
}

/**
 * Get visitor location from IP (using ipapi.co free tier)
 */
async function getVisitorLocation(): Promise<VisitorSession['location'] | undefined> {
  try {
    const response = await fetch('https://ipapi.co/json/');
    if (!response.ok) return undefined;

    const data = await response.json();
    return {
      country: data.country_name,
      city: data.city,
      countryCode: data.country_code,
    };
  } catch (error) {
    console.error('Failed to get location:', error);
    return undefined;
  }
}

/**
 * Track page visit
 */
export async function trackVisit(
  path: string,
  userId?: string
): Promise<void> {
  try {
    const db = await getFirebaseDb();
    const sessionId = getSessionId();
    if (!sessionId) return;

    const sessionRef = doc(db, 'visitors', 'sessions', 'data', sessionId);
    const sessionSnap = await getDoc(sessionRef);

    const now = Timestamp.now();
    const isActive = true;

    if (sessionSnap.exists()) {
      // Update existing session
      const sessionData = sessionSnap.data() as VisitorSession;
      const pages = sessionData.pages || [];

      const updateData: Record<string, unknown> = {
        lastActivity: now,
        pages: pages.includes(path) ? pages : [...pages, path],
        isActive,
      };

      if (userId) {
        updateData.userId = userId;
      }

      await setDoc(sessionRef, updateData, { merge: true });
    } else {
      // Create new session
      const location = await getVisitorLocation();

      const sessionData: Record<string, unknown> = {
        sessionId,
        firstVisit: now,
        lastActivity: now,
        location,
        pages: [path],
        isActive,
      };

      if (userId) {
        sessionData.userId = userId;
      }

      await setDoc(sessionRef, sessionData);
    }

    // Update daily stats
    await updateDailyStats(path, sessionId, userId);
  } catch (error) {
    console.error('Failed to track visit:', error);
  }
}

/**
 * Update daily statistics
 */
async function updateDailyStats(
  path: string,
  sessionId: string,
  userId?: string
): Promise<void> {
  const db = await getFirebaseDb();
  const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
  const dailyRef = doc(db, 'visitors', 'daily', 'stats', today);

  try {
    const dailySnap = await getDoc(dailyRef);

    if (dailySnap.exists()) {
      const data = dailySnap.data();
      const topPages = data.topPages || [];
      const visitorSessions = data.visitorSessions || [];
      const existingPage = topPages.find((p: { path: string }) => p.path === path);

      const updatedPages = existingPage
        ? topPages.map((p: { path: string; views: number }) =>
            p.path === path ? { ...p, views: p.views + 1 } : p
          )
        : [...topPages, { path, views: 1 }];

      // Track unique visitors by session ID
      const isNewVisitor = !visitorSessions.includes(sessionId);
      const updatedSessions = isNewVisitor ? [...visitorSessions, sessionId] : visitorSessions;

      await setDoc(
        dailyRef,
        {
          uniqueVisitors: updatedSessions.length,
          pageViews: increment(1),
          topPages: updatedPages.sort((a: { views: number }, b: { views: number }) => b.views - a.views).slice(0, 10),
          visitorSessions: updatedSessions,
        },
        { merge: true }
      );
    } else {
      await setDoc(dailyRef, {
        date: today,
        uniqueVisitors: 1,
        pageViews: 1,
        topPages: [{ path, views: 1 }],
        countries: {},
        visitorSessions: [sessionId],
      });
    }
  } catch (error) {
    console.error('Failed to update daily stats:', error);
  }
}

/**
 * Mark inactive sessions (called periodically).
 * Includes fallback for missing composite index.
 */
export async function markInactiveSessions(): Promise<void> {
  try {
    const db = await getFirebaseDb();
    const fiveMinutesAgo = Timestamp.fromMillis(Date.now() - 5 * 60 * 1000);
    const sessionsRef = collection(db, 'visitors', 'sessions', 'data');

    let staleDocs: QueryDocumentSnapshot<DocumentData>[] = [];

    try {
      // Try compound query first (requires composite index)
      const q = query(
        sessionsRef,
        where('isActive', '==', true),
        where('lastActivity', '<', fiveMinutesAgo)
      );
      const snapshot = await getDocs(q);
      staleDocs = snapshot.docs;
    } catch {
      // Fallback: fetch all active, filter client-side
      const fallbackQ = query(sessionsRef, where('isActive', '==', true));
      const fallbackSnap = await getDocs(fallbackQ);
      const cutoff = fiveMinutesAgo.toMillis();
      staleDocs = fallbackSnap.docs.filter((d) => {
        const data = d.data() as VisitorSession;
        return data.lastActivity && data.lastActivity.toMillis() < cutoff;
      });
    }

    const updates = staleDocs.map((d) =>
      setDoc(d.ref, { isActive: false }, { merge: true })
    );

    await Promise.all(updates);
  } catch (error) {
    console.error('Failed to mark inactive sessions:', error);
  }
}

/**
 * Get active visitors count.
 * Uses time-based filter as primary check (not just isActive flag)
 * to avoid counting zombie sessions from days when cleanup didn't run.
 */
export async function getActiveVisitorsCount(): Promise<number> {
  try {
    const db = await getFirebaseDb();
    const sessionsRef = collection(db, 'visitors', 'sessions', 'data');
    const fiveMinutesAgo = Timestamp.fromMillis(Date.now() - 5 * 60 * 1000);

    // Primary: time-based — sessions active in last 5 minutes
    const q = query(
      sessionsRef,
      where('isActive', '==', true),
      where('lastActivity', '>', fiveMinutesAgo)
    );

    try {
      const snapshot = await getDocs(q);
      return snapshot.size;
    } catch {
      // Fallback if composite index doesn't exist:
      // fetch all active and filter client-side
      const fallbackQ = query(sessionsRef, where('isActive', '==', true));
      const fallbackSnap = await getDocs(fallbackQ);
      const cutoff = Date.now() - 5 * 60 * 1000;
      return fallbackSnap.docs.filter((d) => {
        const data = d.data() as VisitorSession;
        return data.lastActivity && data.lastActivity.toMillis() > cutoff;
      }).length;
    }
  } catch (error) {
    console.error('Failed to get active visitors:', error);
    return 0;
  }
}

/**
 * Get daily stats for a date range
 */
export async function getDailyStats(startDate: string, endDate: string): Promise<DailyStats[]> {
  try {
    const db = await getFirebaseDb();
    const statsRef = collection(db, 'visitors', 'daily', 'stats');
    const q = query(
      statsRef,
      where('date', '>=', startDate),
      where('date', '<=', endDate),
      orderBy('date', 'desc')
    );

    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({
      date: doc.id,
      ...doc.data(),
    })) as DailyStats[];
  } catch (error) {
    console.error('Failed to get daily stats:', error);
    return [];
  }
}

/**
 * Get country distribution
 */
export async function getCountryDistribution(): Promise<Record<string, number>> {
  try {
    const db = await getFirebaseDb();
    const sessionsRef = collection(db, 'visitors', 'sessions', 'data');
    const snapshot = await getDocs(sessionsRef);

    const countries: Record<string, number> = {};
    snapshot.docs.forEach(doc => {
      const data = doc.data() as VisitorSession;
      if (data.location?.countryCode) {
        countries[data.location.countryCode] = (countries[data.location.countryCode] || 0) + 1;
      }
    });

    return countries;
  } catch (error) {
    console.error('Failed to get country distribution:', error);
    return {};
  }
}

// ── Engagement Updates ─────────────────────────────────────────────────────

/**
 * Update session with engagement + acquisition data.
 * Called periodically (every 30s) by the session manager.
 */
export async function updateEngagement(
  sessionData: {
    device?: DeviceInfo;
    referrer?: ReferrerInfo;
    utm?: UTMParams | null;
    pageSequence?: PageVisit[];
    totalTimeOnSite?: number;
    maxScrollDepth?: number;
    isReturnVisitor?: boolean;
    visitCount?: number;
  }
): Promise<void> {
  try {
    const db = await getFirebaseDb();
    const sessionId = getSessionId();
    if (!sessionId) return;

    const sessionRef = doc(db, 'visitors', 'sessions', 'data', sessionId);

    // Only write non-undefined fields
    const update: Record<string, unknown> = {
      lastActivity: Timestamp.now(),
      isActive: true,
    };

    if (sessionData.device) update.device = sessionData.device;
    if (sessionData.referrer) update.referrer = sessionData.referrer;
    if (sessionData.utm !== undefined) update.utm = sessionData.utm;
    if (sessionData.pageSequence) update.pageSequence = sessionData.pageSequence;
    if (sessionData.totalTimeOnSite !== undefined) update.totalTimeOnSite = sessionData.totalTimeOnSite;
    if (sessionData.maxScrollDepth !== undefined) update.maxScrollDepth = sessionData.maxScrollDepth;
    if (sessionData.isReturnVisitor !== undefined) update.isReturnVisitor = sessionData.isReturnVisitor;
    if (sessionData.visitCount !== undefined) update.visitCount = sessionData.visitCount;

    await setDoc(sessionRef, update, { merge: true });
  } catch (error) {
    console.error('Failed to update engagement:', error);
  }
}

/**
 * Update daily stats with acquisition counters.
 * Called once per session start (not on every flush).
 */
export async function updateDailyAcquisition(
  data: {
    trafficSource: string;
    deviceType: string;
    browser: string;
    isReturnVisitor: boolean;
  }
): Promise<void> {
  try {
    const db = await getFirebaseDb();
    const today = new Date().toISOString().split('T')[0];
    const dailyRef = doc(db, 'visitors', 'daily', 'stats', today);

    const snap = await getDoc(dailyRef);
    const existing = snap.exists() ? snap.data() : {};

    const trafficSources = { ...(existing.trafficSources || {}) };
    trafficSources[data.trafficSource] = (trafficSources[data.trafficSource] || 0) + 1;

    const deviceTypes = { ...(existing.deviceTypes || {}) };
    deviceTypes[data.deviceType] = (deviceTypes[data.deviceType] || 0) + 1;

    const browsers = { ...(existing.browsers || {}) };
    browsers[data.browser] = (browsers[data.browser] || 0) + 1;

    const update: Record<string, unknown> = {
      trafficSources,
      deviceTypes,
      browsers,
    };

    if (data.isReturnVisitor) {
      update.returnVisitorCount = (existing.returnVisitorCount || 0) + 1;
    }

    await setDoc(dailyRef, update, { merge: true });
  } catch (error) {
    console.error('Failed to update daily acquisition:', error);
  }
}

/**
 * Update daily engagement averages.
 * Called on session end or final flush.
 */
export async function updateDailyEngagement(
  data: {
    totalTimeOnSite: number;
    maxScrollDepth: number;
    pageCount: number;
  }
): Promise<void> {
  try {
    const db = await getFirebaseDb();
    const today = new Date().toISOString().split('T')[0];
    const dailyRef = doc(db, 'visitors', 'daily', 'stats', today);

    const update: Record<string, unknown> = {
      totalTimeOnSiteSum: increment(data.totalTimeOnSite),
      totalTimeOnSiteCount: increment(1),
      totalScrollDepthSum: increment(data.maxScrollDepth),
      totalScrollDepthCount: increment(1),
    };

    // Single-page session = bounce
    if (data.pageCount <= 1) {
      update.bounceCount = increment(1);
    }

    await setDoc(dailyRef, update, { merge: true });
  } catch (error) {
    console.error('Failed to update daily engagement:', error);
  }
}
