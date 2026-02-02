import { Company } from '../types';

export const onyx: Company = {
  id: 'onyx',
  name: 'Onyx',
  description: 'Open source AI connected to your work.',
  website: 'https://www.onyx.app',
  headquarters: 'San Francisco, CA',
  remote: 'No',

  // Visual Assets
  ogImage: 'https://www.onyx.app/onyx-thumbnail.png',
  screenshot: '/screenshots/onyx-screenshot.png',

  // Multi-dimensional Tags
  aiTypes: ['search-retrieval', 'agent'],
  markets: ['b2b'],
  industries: ['developer-tools'],

  // Business
  stage: 'Seed',
  valuation: 'Unknown',
  totalFunding: '$10M',
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'Unknown',

  // Competition
  competitors: [
    { name: 'Elastic', description: 'Enterprise search and observability platform', whyTheyWin: 'Massive adoption and brand recognition' },
    { name: 'Glean', description: 'AI-powered enterprise search at $4.6B valuation', whyTheyWin: 'Massive funding and enterprise sales force' },
    { name: 'Coveo', description: 'AI-powered relevance platform for enterprise search', whyTheyWin: 'Established enterprise relationships' },
  ],
  marketPosition: 'Open-source AI enterprise search and assistant platform that connects to company documents and apps, with on-prem/VPC deployment options',
  moat: ['Open-source with self-hosting', 'On-prem/VPC deployment for security-conscious enterprises', 'YC backing'],
  vsGiants: 'Glean is closed-source and expensive; Onyx is open-source with self-hosting capability for enterprises that need data sovereignty',

  // AI-native analysis
  aiNativeLevel: 'D',
  aiNativeLevelDescription: 'Unknown',
  aiDesignChallenges: ['Unknown'],

  // Founders & Vision
  founders: [
    { name: 'Yuhong Sun', role: 'Co-Founder & Co-CEO', background: 'ML/NLP specialist. Previously worked on deep learning for NL-to-SQL and semantic search at Alation.' },
    { name: 'Chris Weaver', role: 'Co-Founder & Co-CEO', background: 'Former team lead on anti-fraud engine team at Robinhood.' },
  ],
  whyBuilding: 'Enterprise knowledge is scattered across dozens of tools. Teams need AI-powered search that connects everything while keeping data secure.',
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
  targetAudiences: { primary: 'Enterprises needing secure, self-hosted AI search across internal tools and documents' },
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
    { title: 'Onyx', url: 'https://www.onyx.app' },
    { title: 'Onyx on startups.gallery', url: 'https://startups.gallery/companies/onyx' },
  ],
};
