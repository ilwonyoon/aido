/**
 * Client-side session state manager.
 * Accumulates engagement data in memory and flushes to Firestore periodically.
 */

import {
  type DeviceInfo,
  type ReferrerInfo,
  type UTMParams,
  type ScrollTracker,
  type TimeTracker,
  getDeviceInfo,
  getReferrerInfo,
  getUTMParams,
  createScrollTracker,
  createTimeTracker,
} from './collectors';

// ── Types ──────────────────────────────────────────────────────────────────

export interface PageVisit {
  path: string;
  enteredAt: number; // timestamp ms
  scrollDepth?: number;
  timeOnPage?: number; // seconds
}

export interface SessionSnapshot {
  device: DeviceInfo;
  referrer: ReferrerInfo;
  utm: UTMParams | null;
  isReturnVisitor: boolean;
  visitCount: number;
  pageSequence: PageVisit[];
  currentScrollDepth: number;
  currentTimeOnPage: number;
  totalTimeOnSite: number;
}

// ── Constants ──────────────────────────────────────────────────────────────

const FLUSH_INTERVAL_MS = 30_000; // 30 seconds
const VISIT_COUNT_KEY = 'aido_visit_count';
const LAST_VISIT_KEY = 'aido_last_visit';
const RETURN_THRESHOLD_MS = 30 * 60 * 1000; // 30 minutes

// ── Session Manager ────────────────────────────────────────────────────────

type FlushCallback = (snapshot: SessionSnapshot) => Promise<void>;

export class AnalyticsSessionManager {
  private device: DeviceInfo;
  private referrer: ReferrerInfo;
  private utm: UTMParams | null;
  private isReturnVisitor: boolean;
  private visitCount: number;

  private pageSequence: PageVisit[] = [];
  private scrollTracker: ScrollTracker | null = null;
  private timeTracker: TimeTracker | null = null;
  private currentPath: string | null = null;

  private flushTimer: ReturnType<typeof setInterval> | null = null;
  private onFlush: FlushCallback;
  private destroyed = false;

  constructor(onFlush: FlushCallback) {
    this.onFlush = onFlush;

    // Collect one-time data
    this.utm = getUTMParams();
    this.device = getDeviceInfo();
    this.referrer = getReferrerInfo(this.utm);

    // Return visitor detection
    const { isReturn, count } = this.detectReturnVisitor();
    this.isReturnVisitor = isReturn;
    this.visitCount = count;

    // Start periodic flush
    this.flushTimer = setInterval(() => {
      void this.flush();
    }, FLUSH_INTERVAL_MS);

    // Flush on page unload
    if (typeof window !== 'undefined') {
      window.addEventListener('beforeunload', this.handleUnload);
    }
  }

  /**
   * Call when navigating to a new page path.
   */
  enterPage(path: string): void {
    if (this.destroyed) return;

    // Finalize previous page
    this.finalizeCurrentPage();

    // Start tracking new page
    this.currentPath = path;
    this.scrollTracker = createScrollTracker();
    this.timeTracker = createTimeTracker();

    this.pageSequence = [
      ...this.pageSequence,
      { path, enteredAt: Date.now() },
    ];
  }

  /**
   * Get current snapshot of all collected data.
   */
  getSnapshot(): SessionSnapshot {
    const totalTime = this.pageSequence.reduce(
      (sum, p) => sum + (p.timeOnPage || 0),
      0
    );
    const currentTime = this.timeTracker?.getElapsedSeconds() ?? 0;
    const currentScroll = this.scrollTracker?.getMaxDepth() ?? 0;

    return {
      device: this.device,
      referrer: this.referrer,
      utm: this.utm,
      isReturnVisitor: this.isReturnVisitor,
      visitCount: this.visitCount,
      pageSequence: this.pageSequence,
      currentScrollDepth: currentScroll,
      currentTimeOnPage: currentTime,
      totalTimeOnSite: totalTime + currentTime,
    };
  }

  /**
   * Flush current engagement data to Firestore via callback.
   */
  async flush(): Promise<void> {
    if (this.destroyed) return;

    // Update current page's engagement in-place before flushing
    this.updateCurrentPageEngagement();

    try {
      await this.onFlush(this.getSnapshot());
    } catch (error) {
      console.error('Analytics flush failed:', error);
    }
  }

  /**
   * Destroy the session manager — final flush + cleanup.
   */
  async destroy(): Promise<void> {
    if (this.destroyed) return;
    this.destroyed = true;

    this.finalizeCurrentPage();

    if (this.flushTimer) {
      clearInterval(this.flushTimer);
      this.flushTimer = null;
    }

    if (typeof window !== 'undefined') {
      window.removeEventListener('beforeunload', this.handleUnload);
    }

    try {
      await this.onFlush(this.getSnapshot());
    } catch {
      // Swallow — we're tearing down
    }
  }

  // ── Private ────────────────────────────────────────────────────────────

  private handleUnload = (): void => {
    this.finalizeCurrentPage();
    // Use sendBeacon pattern via navigator.sendBeacon if needed
    // For now, the flush interval + finalize covers most cases
  };

  private finalizeCurrentPage(): void {
    if (!this.currentPath) return;

    this.updateCurrentPageEngagement();

    this.scrollTracker?.destroy();
    this.scrollTracker = null;
    this.timeTracker?.destroy();
    this.timeTracker = null;
    this.currentPath = null;
  }

  private updateCurrentPageEngagement(): void {
    if (this.pageSequence.length === 0 || !this.currentPath) return;

    const lastIdx = this.pageSequence.length - 1;
    const current = this.pageSequence[lastIdx];

    // Immutable update of the last page entry
    this.pageSequence = this.pageSequence.map((p, i) =>
      i === lastIdx
        ? {
            ...current,
            scrollDepth: this.scrollTracker?.getMaxDepth() ?? current.scrollDepth,
            timeOnPage: this.timeTracker?.getElapsedSeconds() ?? current.timeOnPage,
          }
        : p
    );
  }

  private detectReturnVisitor(): { isReturn: boolean; count: number } {
    try {
      const lastVisitStr = localStorage.getItem(LAST_VISIT_KEY);
      const countStr = localStorage.getItem(VISIT_COUNT_KEY);
      const prevCount = countStr ? parseInt(countStr, 10) : 0;

      const now = Date.now();
      const isReturn = lastVisitStr
        ? now - parseInt(lastVisitStr, 10) > RETURN_THRESHOLD_MS
        : false;

      const newCount = isReturn ? prevCount + 1 : Math.max(prevCount, 1);

      localStorage.setItem(LAST_VISIT_KEY, String(now));
      localStorage.setItem(VISIT_COUNT_KEY, String(newCount));

      return { isReturn: prevCount > 0, count: newCount };
    } catch {
      return { isReturn: false, count: 1 };
    }
  }
}
