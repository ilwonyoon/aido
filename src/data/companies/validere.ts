import { Company } from '../types';

export const validere: Company = {
  id: 'validere',
  name: 'Validere',
  description: 'AI platform for energy commodity data, emissions tracking, and quality verification.',
  website: 'https://validere.com',
  headquarters: 'Toronto, ON, Canada',
  region: 'toronto' as const,
  remote: 'Unknown',

  // Multi-dimensional Tags
  aiTypes: ['data-analysis'],
  markets: ['enterprise', 'b2b'],
  category: 'vertical-saas' as const,
  industries: ['other'],

  // Business
  stage: 'Private',
  normalizedStage: 'growth' as const,
  valuation: 'Not publicly disclosed',
  totalFunding: '$65.0M',
  revenue: 'Not publicly disclosed',
  growth: 'Not publicly disclosed',
  runway: 'Not publicly disclosed',
  customers: 'Energy producers and midstream operators tracking quality and emissions data',

  // Competition
  competitors: [
    {
      name: 'Kairos',
      description: 'Industrial emissions monitoring and risk analytics platforms.',
      whyTheyWin: 'Deep climate analytics specialization.',
    },
    {
      name: 'GHGSat',
      description: 'Satellite-based emissions monitoring company.',
      whyTheyWin: 'Proprietary sensing data and monitoring stack.',
    },
    {
      name: 'Enverus',
      description: 'Energy analytics and operational intelligence platform.',
      whyTheyWin: 'Large dataset and established energy customer base.',
    },
  ],
  marketPosition: 'Data and analytics platform for energy commodities and emissions transparency.',
  moat: ['Energy data normalization and emissions tracking', 'Deep commodity domain focus'],
  vsGiants: 'Differentiates with commodity-specific AI analytics for energy operations.',

  // AI-native analysis
  aiNativeLevel: 'C',
  aiNativeLevelDescription: 'AI supports data quality, emissions analytics, and operational intelligence.',
  aiDesignChallenges: [
    'Designing trust in emissions measurement and verification',
    'Making complex commodity data actionable for operations teams',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Nouman Ahmad',
      role: 'Founder',
      background: 'Founded Validere to bring AI-driven transparency to energy commodities.',
    },
  ],
  whyBuilding: 'Provide trustworthy data and emissions intelligence for energy markets.',
  beliefs: ['Energy markets need transparent, verified data', 'AI can improve commodity quality and emissions reporting'],
  greenFlags: ['Clear climate/energy data niche', 'Meaningful funding base'],
  redFlags: ['Dependent on energy market cycles'],

  // Design Opportunity
  designTeam: {
    teamSize: 'Unknown',
  },
  designWorkType: {
    logicBehavior: { level: 'high', tasks: ['Data validation and verification UX', 'Emissions workflows'] },
    evaluation: { level: 'medium', tasks: ['Data quality monitoring and alerting'] },
    interface: { level: 'medium', tasks: ['Energy analytics dashboards'] },
  },
  productStage: '10→100',

  // User Context
  targetAudiences: {
    primary: 'Energy operations and sustainability teams',
    secondary: 'Commodity trading and compliance teams',
  },
  userProblems: [
    'Commodity data is fragmented and hard to verify',
    'Emissions reporting lacks real-time transparency',
  ],

  // Designer Links
  designerLinks: [],

  // Open Roles
  openRoles: [],

  cultureInsights: [],

  // My Tracking
  tracking: {
    status: 'researching',
    fitScore: 5,
    whyJoin: ['Data transparency and sustainability UX challenges'],
    whyNot: ['Energy domain requires deep subject expertise'],
    nextActions: ['Track sustainability analytics and design roles'],
  },

  // Growth Metrics
  growthMetrics: {
    stage: 'high-growth',
    revenueGrowth: 'Not publicly disclosed',
    userGrowth: 'Not publicly disclosed',
    signals: ['$65.0M total funding (Seedtable)'],
    tam: 'Energy commodities data and emissions analytics market',
    marketShare: 'Not publicly disclosed',
    ceiling: 'Potential to become core data layer for energy transparency',
    tailwinds: ['Regulatory pressure on emissions reporting'],
    headwinds: ['Energy price volatility'],
    moatType: 'vertical-specialization',
    moatStrength: 'Moderate',
  },

  // Meta
  lastUpdated: '2026-02-04T19:55:00',
  sources: [
    { title: 'Source', url: 'https://validere.com' },
    { title: 'Source', url: 'https://www.seedtable.com/best-ai-startups-in-north-america' }
  ],
};
