import { Company } from '../types';

export const incidentIo: Company = {
  id: 'incident-io',
  name: 'incident.io',
  description: 'Incident management platform.',
  website: 'https://incident.io',
  headquarters: 'San Francisco, CA',
  remote: 'No',

  // Visual Assets
  ogImage: 'https://incident.io/opengraph-image.png?opengraph-image.bb73b9f4.png',
  screenshot: '/screenshots/incident-io-screenshot.png',

  // Multi-dimensional Tags
  aiTypes: ['automation'],
  markets: ['b2b'],
  category: 'enterprise-ops' as const,

  industries: ['other'],

  // Business
  stage: 'Series B',
  valuation: 'Unknown',
  totalFunding: '$62M',
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'Unknown',

  // Competition
  competitors: [
    { name: 'Unknown', description: 'Unknown', whyTheyWin: 'Unknown' },
  ],
  marketPosition: 'Incident management platform',
  moat: ['Unknown'],
  vsGiants: 'Unknown',

  // AI-native analysis
  aiNativeLevel: 'D',
  aiNativeLevelDescription: 'Unknown',
  aiDesignChallenges: ['Unknown'],

  // Founders & Vision
  founders: [
    { name: 'Stephen Whitworth', role: 'Co-founder & CEO', background: 'Former data scientist at Hailo; co-founded Ravelin (fraud detection); previously at Monzo.' },
    { name: 'Pete Hamilton', role: 'Co-founder & CTO', background: 'Former Senior Staff Engineer at Monzo Bank.' },
    { name: 'Chris Evans', role: 'Co-founder & CPO', background: 'Built open-source incident tooling at Monzo that inspired incident.io.' },
  ],
  whyBuilding: 'Unknown',
  beliefs: ['Unknown'],
  greenFlags: ['Unknown'],
  redFlags: ['Unknown'],

  // Design Opportunity
  designTeam: { teamSize: '51-200 employees (startups.gallery)' },
  designWorkType: {
    logicBehavior: { level: 'medium', tasks: ['Unknown'] },
    evaluation: { level: 'low', tasks: ['Unknown'] },
    interface: { level: 'medium', tasks: ['Unknown'] },
  },
  productStage: '1→10',

  // User Context
  targetAudiences: { primary: 'Unknown' },
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
  lastUpdated: '2026-02-01T14:20:00',
  sources: [
    { title: 'incident.io', url: 'https://incident.io' },
    { title: 'incident.io on startups.gallery', url: 'https://startups.gallery/companies/incident-io' },
  ],
};
