import { Company } from '../types';

export const workos: Company = {
  id: 'workos',
  name: 'WorkOS',
  description: 'Dev platform to implement enterprise-grade features.',
  website: 'https://workos.com',
  headquarters: 'San Francisco, CA',
  remote: 'Yes',

  // Visual Assets
  ogImage: 'https://cdn.prod.website-files.com/621f54116cab10f6e9215d8b/627321b887917b110d342e2b_homepage.png',
  screenshot: '/screenshots/workos-screenshot.png',

  // Multi-dimensional Tags
  aiTypes: ['automation'],
  markets: ['b2b'],
  industries: ['developer-tools', 'security'],

  // Business
  stage: 'Series B',
  valuation: '~$525M',
  totalFunding: '$99M',
  revenue: '$30M+ ARR',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: '1,000+',

  // Competition
  competitors: [
    { name: 'Auth0 (Okta)', description: 'Auth platform acquired by Okta for $6.5B', whyTheyWin: 'Massive distribution and brand recognition' },
    { name: 'Clerk', description: 'Developer authentication and user management', whyTheyWin: 'Modern DX focus, growing fast' },
    { name: 'Stytch', description: 'Authentication infrastructure for developers', whyTheyWin: 'Developer-first approach' },
  ],
  marketPosition: 'Category-defining Stripe for enterprise features — SSO, directory sync, audit logs, admin portal as APIs',
  moat: ['Category creation', 'API-first architecture', 'Enterprise integrations moat'],
  vsGiants: 'Okta/Auth0 focus on auth only; WorkOS provides full enterprise-readiness stack',

  // AI-native analysis
  aiNativeLevel: 'D',
  aiNativeLevelDescription: 'Unknown',
  aiDesignChallenges: ['Unknown'],

  // Founders & Vision
  founders: [
    { name: 'Michael Grinich', role: 'Founder & CEO', background: 'MIT. Previously founded Nylas. Saw need for enterprise-readiness as a service.' },
  ],
  whyBuilding: 'Every SaaS eventually needs enterprise features — SSO, SCIM, audit logs. WorkOS makes it a one-line integration.',
  beliefs: ['Unknown'],
  greenFlags: ['Unknown'],
  redFlags: ['Unknown'],

  // Design Opportunity
  designTeam: { teamSize: 'Unknown' },
  designWorkType: {
    logicBehavior: { level: 'medium', tasks: ['Unknown'] },
    evaluation: { level: 'low', tasks: ['Unknown'] },
    interface: { level: 'medium', tasks: ['Unknown'] },
  },
  productStage: '1→10',

  // User Context
  targetAudiences: { primary: 'SaaS developers building enterprise features' },
  userProblems: ['Unknown'],

  // Designer Links
  designerLinks: [],

  // Open Roles
  openRoles: [],

  cultureInsights: [],

  // My Tracking
  tracking: {
    status: 'researching',
    fitScore: 5,
    whyJoin: ['Unknown'],
    whyNot: ['Unknown'],
    nextActions: ['Research'],
  },

  // Growth Metrics
  growthMetrics: {
    stage: 'early-growth',
    revenueGrowth: 'Unknown',
    userGrowth: 'Unknown',
    signals: ['Unknown'],
    tam: 'Unknown',
    marketShare: 'Unknown',
    ceiling: 'Unknown',
    tailwinds: ['Unknown'],
    headwinds: ['Unknown'],
    moatType: 'none',
    moatStrength: 'Unknown',
  },

  // Meta
  lastUpdated: '2026-02-02T17:30:00',
  sources: [
    { title: 'WorkOS', url: 'https://workos.com' },
    { title: 'WorkOS on startups.gallery', url: 'https://startups.gallery/companies/workos' },
  ],
};
