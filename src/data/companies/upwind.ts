import { Company } from '../types';

export const upwind: Company = {
  id: 'upwind',
  name: 'Upwind',
  description: 'Cloud security happens at runtime.',
  website: 'https://www.upwind.io',
  headquarters: 'San Francisco, CA',
  remote: 'Yes',

  // Visual Assets
  ogImage: 'https://www.upwind.io/wp-content/uploads/2026/01/upwind-preview-link-image-1200x630-1.png',
  screenshot: '/screenshots/upwind-screenshot.png',

  // Multi-dimensional Tags
  aiTypes: ['automation'],
  markets: ['b2b'],
  industries: ['security'],

  // Business
  stage: 'Series A',
  valuation: '$1.5B',
  totalFunding: '$430M',
  revenue: 'Unknown',
  growth: '900% YoY revenue growth, 300+ employees',
  runway: 'Unknown',
  customers: 'Siemens, Carvana, Roku, Peloton, Wix, Nubank',

  // Competition
  competitors: [
    { name: 'Wiz', description: 'Dominant CNAPP with agentless scanning and multi-cloud visibility', whyTheyWin: 'Market leader with massive funding' },
    { name: 'Orca Security', description: 'Agentless CNAPP using patented SideScanning', whyTheyWin: 'Agentless approach, no performance impact' },
    { name: 'Sysdig', description: 'Runtime security and monitoring for containers and cloud', whyTheyWin: 'Runtime security pioneer' },
  ],
  marketPosition: 'Runtime-powered CNAPP unicorn at $1.5B valuation — 900% YoY revenue growth, secures Siemens, Carvana, Roku, Peloton, Wix, Nubank',
  moat: ['Runtime-first approach (not just scanning)', '$1.5B unicorn valuation', 'All 60 former Spot.io employees joined'],
  vsGiants: 'Wiz does agentless scanning (point-in-time); Upwind provides real-time runtime protection that catches active threats',

  // AI-native analysis
  aiNativeLevel: 'D',
  aiNativeLevelDescription: 'Unknown',
  aiDesignChallenges: ['Unknown'],

  // Founders & Vision
  founders: [
    { name: 'Amiram Shachar', role: 'Co-Founder & CEO', background: 'Former CEO of Spot.io (sold to NetApp for $450M). 6 years as IDF Mamram officer. VP & GM at NetApp post-acquisition.' },
    { name: 'Liran Polak', role: 'Co-Founder', background: 'IDF Mamram unit (top 1% selection). Co-founded Spot.io.' },
    { name: 'Lavi Ferdman', role: 'Co-Founder', background: 'IDF Mamram unit. Co-founded Spot.io.' },
    { name: 'Tal Zuri', role: 'Co-Founder', background: 'Spot.io alumni. Cloud infrastructure engineering.' },
  ],
  whyBuilding: 'Cloud security needs real-time runtime protection, not just periodic scans. Agentless tools miss active threats.',
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
  targetAudiences: { primary: 'Enterprise security teams protecting cloud-native infrastructure' },
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
    { title: 'Upwind', url: 'https://www.upwind.io' },
    { title: 'Upwind on startups.gallery', url: 'https://startups.gallery/companies/upwind' },
  ],
};
