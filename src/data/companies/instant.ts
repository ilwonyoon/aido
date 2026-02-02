import { Company } from '../types';

export const instant: Company = {
  id: 'instant',
  name: 'Instant',
  description: 'A modern Firebase.',
  website: 'https://www.instantdb.com',
  headquarters: 'San Francisco, CA',
  remote: 'No',

  // Visual Assets
  ogImage: 'https://www.instantdb.com/img/og_preview.png',
  screenshot: '/screenshots/instant-screenshot.png',

  // Multi-dimensional Tags
  aiTypes: ['automation'],
  markets: ['b2b'],
  industries: ['developer-tools'],

  // Business
  stage: 'Seed',
  valuation: 'Unknown',
  totalFunding: '$3.4M',
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'Unknown',

  // Competition
  competitors: [
    { name: 'Firebase', description: 'Google mobile/web app platform with Realtime Database and Firestore', whyTheyWin: 'Google ecosystem and massive adoption' },
    { name: 'Supabase', description: 'Open-source Firebase alternative built on PostgreSQL', whyTheyWin: 'PostgreSQL compatibility and open-source community' },
    { name: 'Convex', description: 'Open-source reactive database with TypeScript-native APIs', whyTheyWin: 'TypeScript-native with built-in reactivity' },
  ],
  marketPosition: 'Modern Firebase alternative with graph-based real-time database, relational query support, offline mode, and optimistic updates — YC S22',
  moat: ['Graph-based real-time database (novel approach)', 'Offline-first with optimistic updates', 'YC S22 backing'],
  vsGiants: 'Firebase locks you into Google with limited query support; Instant is open-source with relational queries and graph-based data model',

  // AI-native analysis
  aiNativeLevel: 'D',
  aiNativeLevelDescription: 'Unknown',
  aiDesignChallenges: ['Unknown'],

  // Founders & Vision
  founders: [
    { name: 'Joe Averbukh', role: 'Co-Founder & CEO', background: 'UCLA graduate. Former senior engineer at Facebook.' },
    { name: 'Stepan Parunashvili', role: 'Co-Founder & CTO', background: 'Former Staff Software Engineer at Airbnb. Deep expertise in real-time systems.' },
  ],
  whyBuilding: 'Real-time databases should not require you to sacrifice querying power or lock into a vendor. Instant combines Firebase-like reactivity with relational power.',
  beliefs: ['Unknown'],
  greenFlags: ['Unknown'],
  redFlags: ['Unknown'],

  // Design Opportunity
  designTeam: { teamSize: '1-10 employees (startups.gallery)' },
  designWorkType: {
    logicBehavior: { level: 'medium', tasks: ['Unknown'] },
    evaluation: { level: 'low', tasks: ['Unknown'] },
    interface: { level: 'medium', tasks: ['Unknown'] },
  },
  productStage: '1→10',

  // User Context
  targetAudiences: { primary: 'Frontend developers building real-time, collaborative web applications' },
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
  lastUpdated: '2026-02-02T18:00:00',
  sources: [
    { title: 'Instant', url: 'https://www.instantdb.com' },
    { title: 'Instant on startups.gallery', url: 'https://startups.gallery/companies/instant' },
  ],
};
