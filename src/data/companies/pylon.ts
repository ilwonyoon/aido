import { Company } from '../types';

export const pylon: Company = {
  id: 'pylon',
  name: 'Pylon',
  description: 'The support platform built for B2B.',
  website: 'https://usepylon.com',
  headquarters: 'San Francisco, CA',
  remote: 'No',

  // Visual Assets
  ogImage: 'https://cdn.prod.website-files.com/689071d222bec6ce3d3d6fbf/68a49db0177e819479abd409_logo.jpg',
  screenshot: '/screenshots/pylon-screenshot.png',

  // Multi-dimensional Tags
  aiTypes: ['agent', 'automation'],
  markets: ['b2b'],
  industries: ['developer-tools'],

  // Business
  stage: 'Series B',
  valuation: 'Unknown',
  totalFunding: '$51M',
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: '750+ companies including Together AI, Cognition, Temporal, AssemblyAI',

  // Competition
  competitors: [
    { name: 'Zendesk', description: 'Legacy enterprise customer support platform', whyTheyWin: 'Market dominance, $115/user/month enterprise pricing' },
    { name: 'Intercom', description: 'In-app messaging and AI-powered support with Fin 2 AI agent', whyTheyWin: 'Strong AI agent and in-app messaging' },
    { name: 'Freshdesk', description: 'Omnichannel support at lower price point', whyTheyWin: 'Lower pricing than Zendesk' },
  ],
  marketPosition: 'Modern B2B-first support platform replacing Zendesk/Intercom with native Slack Connect, Microsoft Teams integration, and AI agents — 750+ customers, 5x+ YoY growth',
  moat: ['B2B-first Slack/Teams native approach', '750+ customers including Together AI, Cognition, Temporal', 'a16z + General Catalyst backing'],
  vsGiants: 'Zendesk is legacy and expensive ($115/user); Pylon is B2B-first with native Slack Connect and AI agents for modern support workflows',

  // AI-native analysis
  aiNativeLevel: 'D',
  aiNativeLevelDescription: 'Unknown',
  aiDesignChallenges: ['Unknown'],

  // Founders & Vision
  founders: [
    { name: 'Marty Kausas', role: 'Co-Founder & CEO', background: 'Former engineer at Airbnb. Met co-founders through a summer engineering fellowship in San Francisco.' },
    { name: 'Advith Chelikani', role: 'Co-Founder', background: 'Caltech graduate. Previously at Samsara. Co-led Hacktech (intercollegiate hackathon) at Caltech.' },
    { name: 'Robert Eng', role: 'Co-Founder', background: 'Caltech dual degree in CS and History. Engineering roles at Facebook, DoorDash, and Affinity.' },
  ],
  whyBuilding: 'B2B customer support is stuck in B2C tools like Zendesk. Modern B2B teams communicate via Slack Connect and Teams, not ticketing portals.',
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
  targetAudiences: { primary: 'B2B SaaS companies managing customer support across Slack, Teams, and email' },
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
    { title: 'Pylon', url: 'https://usepylon.com' },
    { title: 'Pylon on startups.gallery', url: 'https://startups.gallery/companies/pylon' },
  ],
};
