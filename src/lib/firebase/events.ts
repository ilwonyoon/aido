import {
  doc,
  setDoc,
  getDoc,
  getDocs,
  collection,
  query,
  where,
  orderBy,
} from 'firebase/firestore';
import { getFirebaseDb } from './lazy-config';
import { getSessionId } from './visitors';

// ── Types ──────────────────────────────────────────────────────────────────

export type EventType =
  | 'company_click'
  | 'company_detail_view'
  | 'tier_change'
  | 'article_view';

export interface EventStats {
  companyClicks: Record<string, number>;
  companyDetailViews: Record<string, number>;
  tierChanges: Record<string, number>;
  articleViews: Record<string, number>;
}

// ── Constants ──────────────────────────────────────────────────────────────

const OWNER_EMAIL = 'ilwonyoon@gmail.com';

// ── Write: Track event to Firestore DailyStats ─────────────────────────────

export async function trackFirestoreEvent(
  type: EventType,
  data: Record<string, unknown>,
  userEmail?: string | null
): Promise<void> {
  try {
    if (typeof window === 'undefined') return;
    if (userEmail === OWNER_EMAIL) return;

    const sessionId = getSessionId();
    if (!sessionId) return;

    const db = await getFirebaseDb();
    const today = new Date().toISOString().split('T')[0];
    const dailyRef = doc(db, 'visitors', 'daily', 'stats', today);

    const snap = await getDoc(dailyRef);
    const existing = snap.exists() ? snap.data() : {};

    const update: Record<string, unknown> = {};

    switch (type) {
      case 'company_click': {
        const companyId = data.companyId as string;
        const companyClicks = { ...(existing.companyClicks || {}) };
        companyClicks[companyId] = (companyClicks[companyId] || 0) + 1;
        update.companyClicks = companyClicks;
        break;
      }
      case 'company_detail_view': {
        const companyId = data.companyId as string;
        const companyDetailViews = { ...(existing.companyDetailViews || {}) };
        companyDetailViews[companyId] = (companyDetailViews[companyId] || 0) + 1;
        update.companyDetailViews = companyDetailViews;
        break;
      }
      case 'tier_change': {
        const status = (data.status as string) || 'cleared';
        const tierChanges = {
          tier_0: 0,
          tier_1: 0,
          not_interested: 0,
          cleared: 0,
          ...(existing.tierChanges || {}),
        };
        tierChanges[status] = (tierChanges[status] || 0) + 1;
        update.tierChanges = tierChanges;
        break;
      }
      case 'article_view': {
        const slug = data.articleSlug as string;
        const articleViews = { ...(existing.articleViews || {}) };
        articleViews[slug] = (articleViews[slug] || 0) + 1;
        update.articleViews = articleViews;
        break;
      }
    }

    await setDoc(dailyRef, update, { merge: true });
  } catch (error) {
    console.error('Failed to track Firestore event:', error);
  }
}

// ── Read: Aggregate event stats for dashboard ───────────────────────────────

export async function getEventStats(
  startDate: string,
  endDate: string
): Promise<EventStats> {
  const result: EventStats = {
    companyClicks: {},
    companyDetailViews: {},
    tierChanges: { tier_0: 0, tier_1: 0, not_interested: 0, cleared: 0 },
    articleViews: {},
  };

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

    snapshot.docs.forEach((d) => {
      const data = d.data();

      if (data.companyClicks) {
        for (const [id, count] of Object.entries(data.companyClicks)) {
          result.companyClicks[id] =
            (result.companyClicks[id] || 0) + (count as number);
        }
      }

      if (data.companyDetailViews) {
        for (const [id, count] of Object.entries(data.companyDetailViews)) {
          result.companyDetailViews[id] =
            (result.companyDetailViews[id] || 0) + (count as number);
        }
      }

      if (data.tierChanges) {
        const tc = data.tierChanges as Record<string, number>;
        for (const key of Object.keys(result.tierChanges)) {
          result.tierChanges[key] =
            (result.tierChanges[key] || 0) + (tc[key] || 0);
        }
      }

      if (data.articleViews) {
        for (const [slug, count] of Object.entries(data.articleViews)) {
          result.articleViews[slug] =
            (result.articleViews[slug] || 0) + (count as number);
        }
      }
    });
  } catch (error) {
    console.error('Failed to get event stats:', error);
  }

  return result;
}
