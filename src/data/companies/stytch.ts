import { Company } from '../types';

export const stytch: Company = {
  id: 'stytch',
  name: 'Stytch',
  description: 'Authentication infrastructure for developers.',
  website: 'https://stytch.com',
  headquarters: 'San Francisco, CA',
  remote: 'Hybrid',

  // Visual Assets
  ogImage: 'https://cdn.sanity.io/images/3jwyzebk/production/ec2290dd0d0880bcfcf705aeb056e6209808b0ef-2400x1260.png',
  screenshot: '/screenshots/stytch-screenshot.png',

  // Multi-dimensional Tags
  aiTypes: ['automation'],
  markets: ['b2b'],
  industries: ['developer-tools', 'security'],

  // Business
  stage: 'Series B',
  valuation: '$1B',
  totalFunding: '$146M',
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'Unknown',

  // Competition
  competitors: [
    { name: 'Clerk', description: 'Developer-first authentication and user management platform', whyTheyWin: 'Simpler developer experience' },
    { name: 'Auth0 (Okta)', description: 'Identity-as-a-service platform acquired by Okta for $6.5B', whyTheyWin: 'Massive market share and brand recognition' },
    { name: 'HYPR', description: 'Passwordless MFA and identity assurance platform', whyTheyWin: 'Passwordless focus' },
  ],
  marketPosition: 'Developer-first identity and access management platform focused on passwordless authentication — unicorn at $1B valuation since 2021',
  moat: ['Passwordless-first approach', '$1B unicorn valuation', 'Coatue + Benchmark + Thrive Capital backing'],
  vsGiants: 'Auth0/Okta is legacy and complex; Stytch is developer-first with passwordless as default and modern fraud prevention',

  // AI-native analysis
  aiNativeLevel: 'D',
  aiNativeLevelDescription: 'Unknown',
  aiDesignChallenges: ['Unknown'],

  // Founders & Vision
  founders: [
    { name: 'Reed McGinley-Stempel', role: 'Co-Founder & CEO', background: 'Former consultant at Bain & Company. Previously worked at Plaid on authentication.' },
    { name: 'Julianna Lamb', role: 'Co-Founder & CTO', background: 'Engineer at Strava then Plaid (backend team, authentication and fraud detection).' },
  ],
  whyBuilding: 'Authentication is broken — passwords are insecure and UX-hostile. Every app needs auth but building it well is incredibly hard.',
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
  targetAudiences: { primary: 'Developers building authentication and identity management for web/mobile apps' },
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
    { title: 'Stytch', url: 'https://stytch.com' },
    { title: 'Stytch on startups.gallery', url: 'https://startups.gallery/companies/stytch' },
  ],
};
