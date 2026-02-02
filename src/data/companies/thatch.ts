import { Company } from '../types';

export const thatch: Company = {
  id: 'thatch',
  name: 'Thatch',
  description: 'Modern health benefits platform.',
  website: 'https://thatch.ai',
  headquarters: 'San Francisco, CA',
  remote: 'Yes',

  // Visual Assets
  ogImage: 'https://thatch.com/opengraph/thatch-main.png',
  screenshot: '/screenshots/thatch-screenshot.png',

  // Multi-dimensional Tags
  aiTypes: ['llm-app', 'automation'],
  markets: ['b2b'],
  industries: ['healthcare'],

  // Business
  stage: 'Series B',
  valuation: 'Unknown',
  totalFunding: '$84.5M',
  revenue: 'Unknown',
  growth: 'ICHRA market growing 29-34% YoY',
  runway: 'Unknown',
  customers: '1,000+ companies',

  // Competition
  competitors: [
    { name: 'Venteur', description: 'ICHRA-focused health benefits with digital wallet', whyTheyWin: '$27M+ raised, focused on ICHRA' },
    { name: 'Take Command Health', description: 'HRA administration since 2014', whyTheyWin: 'Early mover, advised on ICHRA legislation' },
    { name: 'Justworks / Gusto', description: 'Broader HR/payroll with health benefits', whyTheyWin: 'Bundled HR offering, existing customer base' },
  ],
  marketPosition: 'Product-first ICHRA platform combining Stripe-quality fintech infra with AI-powered health plan recommendations',
  moat: ['Stripe/Ramp/Rippling team pedigree', 'ADP partnership', 'AI plan recommendation engine'],
  vsGiants: 'Traditional benefits brokers lack tech; Gusto/Justworks lack ICHRA depth',

  // AI-native analysis
  aiNativeLevel: 'D',
  aiNativeLevelDescription: 'Unknown',
  aiDesignChallenges: ['Unknown'],

  // Founders & Vision
  founders: [
    { name: 'Chris Ellis', role: 'Co-Founder & CEO', background: 'MIT cancer researcher turned biotech. Lost father to cancer at 6, driving healthcare mission.' },
    { name: 'Adam Stevenson', role: 'Co-Founder & President', background: 'Former engineering leader at Stripe. Also worked at Humana — rare healthcare + fintech dual expertise.' },
  ],
  whyBuilding: 'Health benefits are broken — employers overpay, employees get cookie-cutter plans. ICHRA enables personalized benefits.',
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
  targetAudiences: { primary: 'HR teams and employers managing health benefits' },
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
    { title: 'Thatch', url: 'https://thatch.ai' },
    { title: 'Thatch on startups.gallery', url: 'https://startups.gallery/companies/thatch' },
  ],
};
