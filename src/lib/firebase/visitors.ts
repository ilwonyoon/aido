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
} from 'firebase/firestore';
import { getFirebaseDb } from './lazy-config';

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
}

export interface DailyStats {
  date: string; // YYYY-MM-DD
  uniqueVisitors: number;
  pageViews: number;
  topPages: { path: string; views: number }[];
  countries: Record<string, number>;
  visitorSessions?: string[]; // Session IDs for tracking unique visitors
}

/**
 * Get or create session ID from localStorage
 */
export function getSessionId(): string {
  if (typeof window === 'undefined') return '';

  let sessionId = localStorage.getItem('aido_session_id');
  if (!sessionId) {
    sessionId = `session_${Date.now()}_${Math.random().toString(36).substring(7)}`;
    localStorage.setItem('aido_session_id', sessionId);
  }
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
 * Mark inactive sessions (called periodically)
 */
export async function markInactiveSessions(): Promise<void> {
  const db = await getFirebaseDb();
  const fiveMinutesAgo = Timestamp.fromMillis(Date.now() - 5 * 60 * 1000);

  try {
    const sessionsRef = collection(db, 'visitors', 'sessions', 'data');
    const q = query(
      sessionsRef,
      where('isActive', '==', true),
      where('lastActivity', '<', fiveMinutesAgo)
    );

    const snapshot = await getDocs(q);
    const updates = snapshot.docs.map(doc =>
      setDoc(doc.ref, { isActive: false }, { merge: true })
    );

    await Promise.all(updates);
  } catch (error) {
    console.error('Failed to mark inactive sessions:', error);
  }
}

/**
 * Get active visitors count
 */
export async function getActiveVisitorsCount(): Promise<number> {
  try {
    const db = await getFirebaseDb();
    const sessionsRef = collection(db, 'visitors', 'sessions', 'data');
    const q = query(sessionsRef, where('isActive', '==', true));
    const snapshot = await getDocs(q);
    return snapshot.size;
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
