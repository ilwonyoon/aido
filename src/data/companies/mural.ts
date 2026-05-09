import { Company } from '../types';

export const mural: Company = {
  id: 'mural',
  name: 'Mural',
  description: 'FigJam for enterprises.',
  website: 'https://www.mural.co',
  headquarters: 'San Francisco, CA',
  region: 'sf-bay-area' as const,
  remote: 'Yes',

  // Visual Assets
  ogImage: 'https://cdn.prod.website-files.com/62e11362da2667ac3d0e6ed5/638f50f56076f389d91406a0_Mural_OG_image_launch.png',
  screenshot: '/screenshots/mural-screenshot.png',

  // Multi-dimensional Tags
  aiTypes: ['automation'],
  markets: ['b2b'],
  category: 'enterprise-ops' as const,

  industries: ['other'],

  // Business
  stage: 'Series C',
  normalizedStage: 'series-c' as const,
  valuation: 'Unknown',
  totalFunding: '$50M',
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'Unknown',

  // Competition
  competitors: [
    { name: 'Unknown', description: 'Unknown', whyTheyWin: 'Unknown' },
  ],
  marketPosition: 'FigJam for enterprises',
  moat: ['Unknown'],
  vsGiants: 'Unknown',

  // AI-native analysis
  aiNativeLevel: 'D',
  aiNativeLevelDescription: 'Unknown',
  aiDesignChallenges: ['Unknown'],

  // Founders & Vision
  founders: [
    { name: 'Mariano Suarez-Battan', role: 'Co-Founder & CEO', background: 'Previously founded a video game company acquired by Disney. EY Entrepreneur of the Year 2021 finalist.' },
    { name: 'Patricio Jutard', role: 'Co-Founder & CTO', background: 'Co-founded Mural in 2011 to enable visual collaboration for distributed teams.' },
    { name: 'Agustin Soler', role: 'Co-Founder', background: 'Co-founded Mural in 2011.' },
  ],
  whyBuilding: 'Unknown',
  beliefs: ['Unknown'],
  greenFlags: ['Unknown'],
  redFlags: ['Unknown'],

  // Design Opportunity
  designTeam: { teamSize: '201-500 employees (startups.gallery)' },
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
  lastUpdated: '2026-02-01T13:35:00',
  sources: [
    { title: 'Source', url: 'https://www.mural.co' },
    { title: 'Source', url: 'https://startups.gallery/companies/mural' }
  ],
};
