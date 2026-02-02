import { Company } from '../types';

export const dubCo: Company = {
  id: 'dub-co',
  name: 'Dub',
  description: 'The modern link attribution platform.',
  website: 'https://dub.co',
  headquarters: 'San Francisco, CA',
  remote: 'Yes',

  // Visual Assets
  ogImage: 'https://assets.dub.co/thumbnail.jpg',
  screenshot: '/screenshots/dub-co-screenshot.png',

  // Multi-dimensional Tags
  aiTypes: ['automation'],
  markets: ['b2b'],
  industries: ['developer-tools', 'sales-marketing'],

  // Business
  stage: 'Seed',
  valuation: 'Unknown',
  totalFunding: '$2M',
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: '1,000+ companies including Twilio, Vercel, Perplexity',

  // Competition
  competitors: [
    { name: 'Bitly', description: 'Most recognized URL shortener with enterprise analytics', whyTheyWin: 'Brand recognition and massive adoption' },
    { name: 'Rebrandly', description: 'Branded link management platform for marketing teams', whyTheyWin: 'Strong branded link focus' },
    { name: 'Short.io', description: 'Cost-effective link management with strong API', whyTheyWin: 'Developer-friendly and affordable' },
  ],
  marketPosition: 'Open-source link attribution platform for modern marketing teams — short links, QR codes, and conversion analytics for 1,000+ companies including Twilio, Vercel, Perplexity',
  moat: ['Open-source with strong community', 'AI-powered analytics', 'Free unlimited custom domains'],
  vsGiants: 'Bitly is expensive ($300/mo for advanced metrics) with terrible free tier; Dub.co is open-source with generous free plan and modern developer experience',

  // AI-native analysis
  aiNativeLevel: 'D',
  aiNativeLevelDescription: 'Unknown',
  aiDesignChallenges: ['Unknown'],

  // Founders & Vision
  founders: [
    { name: 'Steven Tey', role: 'Founder & CEO', background: 'Minerva University CS graduate. Former Senior Developer Advocate at Vercel (2021-2023). Built Dub.co as open source project while at Vercel.' },
  ],
  whyBuilding: 'Link management is overpriced and stuck in 2010. Open-source approach with modern UX and AI analytics democratizes link attribution.',
  beliefs: ['Unknown'],
  greenFlags: ['Unknown'],
  redFlags: ['Unknown'],

  // Design Opportunity
  designTeam: { teamSize: '11-50 employees (startups.gallery)' },
  designWorkType: {
    logicBehavior: { level: 'medium', tasks: ['Unknown'] },
    evaluation: { level: 'low', tasks: ['Unknown'] },
    interface: { level: 'medium', tasks: ['Unknown'] },
  },
  productStage: '1→10',

  // User Context
  targetAudiences: { primary: 'Marketing teams and developers needing link management, attribution, and analytics' },
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
    { title: 'Dub', url: 'https://dub.co' },
    { title: 'Dub on startups.gallery', url: 'https://startups.gallery/companies/dub-co' },
  ],
};
