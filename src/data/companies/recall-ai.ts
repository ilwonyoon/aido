import { Company } from '../types';

export const recallAi: Company = {
  id: 'recall-ai',
  name: 'Recall.ai',
  description: 'Universal API for real-time meeting data.',
  website: 'https://www.recall.ai',
  headquarters: 'San Francisco, CA',
  remote: 'No',

  // Visual Assets
  screenshot: '/screenshots/recall-ai-screenshot.png',
    ogImage: '/screenshots/recall-ai-screenshot.png',

  // Multi-dimensional Tags
  aiTypes: ['automation'],
  markets: ['b2b'],
  industries: ['developer-tools'],

  // Business
  stage: 'Series B',
  valuation: '$250M',
  totalFunding: '$50M',
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: '2,000+ companies including HubSpot, ClickUp, Apollo.io',

  // Competition
  competitors: [
    { name: 'MeetingBaaS', description: 'Open meeting bot as a service with pay-as-you-go pricing', whyTheyWin: 'Lower pricing at $0.69/hr' },
    { name: 'Fireflies.ai', description: 'AI meeting assistant with CRM integration', whyTheyWin: 'End-user product with CRM integration' },
    { name: 'Skribby', description: 'Developer-friendly meeting bot API', whyTheyWin: 'Transparent pricing model' },
  ],
  marketPosition: 'Infrastructure API layer for conversation data, processing 3TB/sec of video and 8M+ EC2 instances/month — 2,000+ companies including HubSpot, ClickUp, Apollo.io',
  moat: ['3TB/sec video processing infrastructure', '2,000+ companies on platform', 'Paul Graham + Solomon Hykes (Docker) as angel investors'],
  vsGiants: 'Fireflies and Otter are end-user products; Recall.ai is the infrastructure API enabling other companies to build meeting intelligence',

  // AI-native analysis
  aiNativeLevel: 'D',
  aiNativeLevelDescription: 'Unknown',
  aiDesignChallenges: ['Unknown'],

  // Founders & Vision
  founders: [
    { name: 'David Gu', role: 'Co-Founder & CEO', background: 'University of Waterloo (Software Engineering). Former software engineer at Wish. Did YC at age 19.' },
    { name: 'Amanda Zhu', role: 'Co-Founder & COO', background: 'Previously co-founded Perfect Recall. Operations and business focus.' },
  ],
  whyBuilding: 'Meeting data is trapped in silos. Companies need API-level access to conversation data to build intelligent meeting workflows.',
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
  targetAudiences: { primary: 'SaaS companies building meeting intelligence features into their products' },
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
    { title: 'Recall.ai', url: 'https://www.recall.ai' },
    { title: 'Recall.ai on startups.gallery', url: 'https://startups.gallery/companies/recall-ai' },
  ],
};
