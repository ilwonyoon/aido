/**
 * Client-side data collectors for analytics.
 * Captures device info, referrer, UTM params, scroll depth, and time-on-page.
 */

// ── Types ──────────────────────────────────────────────────────────────────

export interface DeviceInfo {
  type: 'mobile' | 'tablet' | 'desktop';
  browser: string;
  os: string;
  screenWidth: number;
  screenHeight: number;
}

export interface ReferrerInfo {
  referrer: string;
  trafficType: 'organic' | 'direct' | 'social' | 'referral' | 'email' | 'paid';
  source: string;
}

export interface UTMParams {
  source?: string;
  medium?: string;
  campaign?: string;
  term?: string;
  content?: string;
}

export interface ScrollTracker {
  getMaxDepth: () => number;
  destroy: () => void;
}

export interface TimeTracker {
  getElapsedSeconds: () => number;
  destroy: () => void;
}

// ── Device Detection ───────────────────────────────────────────────────────

const MOBILE_REGEX = /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i;
const TABLET_REGEX = /iPad|Android(?!.*Mobile)|Tablet/i;

function detectDeviceType(ua: string): DeviceInfo['type'] {
  if (TABLET_REGEX.test(ua)) return 'tablet';
  if (MOBILE_REGEX.test(ua)) return 'mobile';
  return 'desktop';
}

function detectBrowser(ua: string): string {
  if (ua.includes('Firefox/')) return 'Firefox';
  if (ua.includes('Edg/')) return 'Edge';
  if (ua.includes('OPR/') || ua.includes('Opera/')) return 'Opera';
  if (ua.includes('Chrome/') && !ua.includes('Edg/')) return 'Chrome';
  if (ua.includes('Safari/') && !ua.includes('Chrome/')) return 'Safari';
  return 'Other';
}

function detectOS(ua: string): string {
  if (ua.includes('Windows')) return 'Windows';
  if (ua.includes('Mac OS')) return 'macOS';
  if (ua.includes('Linux') && !ua.includes('Android')) return 'Linux';
  if (ua.includes('Android')) return 'Android';
  if (/iPhone|iPad|iPod/.test(ua)) return 'iOS';
  if (ua.includes('CrOS')) return 'ChromeOS';
  return 'Other';
}

export function getDeviceInfo(): DeviceInfo {
  const ua = navigator.userAgent;
  return {
    type: detectDeviceType(ua),
    browser: detectBrowser(ua),
    os: detectOS(ua),
    screenWidth: window.screen.width,
    screenHeight: window.screen.height,
  };
}

// ── Referrer Parsing ───────────────────────────────────────────────────────

const SEARCH_ENGINES = ['google', 'bing', 'yahoo', 'duckduckgo', 'baidu', 'yandex'];
const SOCIAL_PLATFORMS = [
  'twitter', 'x.com', 'facebook', 'linkedin', 'reddit',
  'instagram', 'youtube', 'tiktok', 'pinterest', 'threads',
];

function classifyTrafficType(
  referrer: string,
  utm?: UTMParams | null
): { trafficType: ReferrerInfo['trafficType']; source: string } {
  // UTM-based classification takes priority
  if (utm?.medium === 'cpc' || utm?.medium === 'paid') {
    return { trafficType: 'paid', source: utm.source || 'paid' };
  }
  if (utm?.medium === 'email') {
    return { trafficType: 'email', source: utm.source || 'email' };
  }
  if (utm?.source) {
    return { trafficType: 'referral', source: utm.source };
  }

  // No referrer = direct
  if (!referrer) {
    return { trafficType: 'direct', source: 'direct' };
  }

  try {
    const hostname = new URL(referrer).hostname.toLowerCase();

    // Search engines
    const searchEngine = SEARCH_ENGINES.find(
      (se) => hostname.includes(se)
    );
    if (searchEngine) {
      return { trafficType: 'organic', source: searchEngine };
    }

    // Social platforms
    const social = SOCIAL_PLATFORMS.find(
      (sp) => hostname.includes(sp)
    );
    if (social) {
      return { trafficType: 'social', source: social };
    }

    // AI search engines
    if (hostname.includes('perplexity') || hostname.includes('chatgpt') || hostname.includes('openai')) {
      return { trafficType: 'organic', source: hostname.split('.')[0] };
    }

    return { trafficType: 'referral', source: hostname };
  } catch {
    return { trafficType: 'direct', source: 'direct' };
  }
}

export function getReferrerInfo(utm?: UTMParams | null): ReferrerInfo {
  const referrer = document.referrer || '';
  const { trafficType, source } = classifyTrafficType(referrer, utm);
  return { referrer, trafficType, source };
}

// ── UTM Parsing ────────────────────────────────────────────────────────────

export function getUTMParams(): UTMParams | null {
  const params = new URLSearchParams(window.location.search);
  const source = params.get('utm_source');
  const medium = params.get('utm_medium');
  const campaign = params.get('utm_campaign');
  const term = params.get('utm_term');
  const content = params.get('utm_content');

  if (!source && !medium && !campaign) return null;

  return {
    ...(source && { source }),
    ...(medium && { medium }),
    ...(campaign && { campaign }),
    ...(term && { term }),
    ...(content && { content }),
  };
}

// ── Scroll Depth Tracker ───────────────────────────────────────────────────

export function createScrollTracker(): ScrollTracker {
  let maxDepth = 0;

  const handler = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (docHeight <= 0) {
      maxDepth = 100;
      return;
    }
    const depth = Math.round((scrollTop / docHeight) * 100);
    if (depth > maxDepth) {
      maxDepth = Math.min(depth, 100);
    }
  };

  window.addEventListener('scroll', handler, { passive: true });

  return {
    getMaxDepth: () => maxDepth,
    destroy: () => window.removeEventListener('scroll', handler),
  };
}

// ── Time on Page Tracker ───────────────────────────────────────────────────

export function createTimeTracker(): TimeTracker {
  const startTime = Date.now();
  let accumulatedMs = 0;
  let lastActiveTime = startTime;
  let isVisible = true;

  const handleVisibility = () => {
    if (document.hidden) {
      // Page became hidden — accumulate active time
      if (isVisible) {
        accumulatedMs += Date.now() - lastActiveTime;
        isVisible = false;
      }
    } else {
      // Page became visible again
      lastActiveTime = Date.now();
      isVisible = true;
    }
  };

  document.addEventListener('visibilitychange', handleVisibility);

  return {
    getElapsedSeconds: () => {
      const current = isVisible ? Date.now() - lastActiveTime : 0;
      return Math.round((accumulatedMs + current) / 1000);
    },
    destroy: () => {
      document.removeEventListener('visibilitychange', handleVisibility);
    },
  };
}
