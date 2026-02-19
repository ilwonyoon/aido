import { Company } from '../types';

export const tealbook: Company = {
  id: 'tealbook',
  name: 'TealBook',
  description: 'Supplier data platform for procurement teams with AI-powered supplier discovery and data enrichment.',
  website: 'https://www.tealbook.com',
  headquarters: 'Toronto, ON, Canada',
  region: 'toronto' as const,
  remote: 'Unknown',

  // Multi-dimensional Tags
  aiTypes: ['data-analysis', 'automation'],
  markets: ['enterprise', 'b2b'],
  category: 'enterprise-ops' as const,
  industries: ['other'],

  // Business
  stage: 'Private',
  normalizedStage: 'growth' as const,
  valuation: 'Not publicly disclosed',
  totalFunding: '$64.5M',
  revenue: 'Not publicly disclosed',
  growth: 'Not publicly disclosed',
  runway: 'Not publicly disclosed',
  customers: 'Enterprise procurement and supply chain teams',

  // Competition
  competitors: [
    {
      name: 'SAP Ariba',
      description: 'Procurement and supplier management platform.',
      whyTheyWin: 'Large enterprise procurement footprint.',
    },
    {
      name: 'Coupa',
      description: 'Spend management and procurement software.',
      whyTheyWin: 'Broad spend management suite and enterprise distribution.',
    },
    {
      name: 'GEP',
      description: 'Procurement and supply chain software platform.',
      whyTheyWin: 'Integrated procurement and supply chain capabilities.',
    },
  ],
  marketPosition: 'AI-enabled supplier data platform that improves procurement data quality and discovery.',
  moat: ['Supplier data enrichment and entity resolution', 'Procurement-focused AI data workflows'],
  vsGiants: 'Differentiates with supplier data enrichment layer rather than full procurement suite.',

  // AI-native analysis
  aiNativeLevel: 'C',
  aiNativeLevelDescription: 'AI supports supplier data enrichment and recommendation workflows.',
  aiDesignChallenges: [
    'Designing trust in supplier data accuracy',
    'Surfacing supplier insights without overwhelming procurement teams',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Stephany Lapierre',
      role: 'Founder & CEO',
      background: 'Founded TealBook to modernize procurement data with AI-driven supplier intelligence.',
    },
  ],
  whyBuilding: 'Make procurement decisions faster and more reliable with trusted supplier data.',
  beliefs: ['Procurement depends on accurate supplier data', 'AI can eliminate manual supplier data maintenance'],
  greenFlags: ['Clear procurement data niche'],
  redFlags: ['Procurement platforms can be slow to switch'],

  // Design Opportunity
  designTeam: {
    teamSize: 'Unknown',
  },
  designWorkType: {
    logicBehavior: { level: 'medium', tasks: ['Supplier data validation workflows', 'Recommendation relevance logic'] },
    evaluation: { level: 'medium', tasks: ['Data quality monitoring and audit UX'] },
    interface: { level: 'medium', tasks: ['Supplier profiles and procurement dashboards'] },
  },
  productStage: '10→100',

  // User Context
  targetAudiences: {
    primary: 'Procurement and supply chain leaders',
    secondary: 'Category managers and sourcing teams',
  },
  userProblems: [
    'Supplier data is fragmented and outdated',
    'Procurement teams waste time cleaning and reconciling vendor records',
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
    whyJoin: ['Enterprise data quality UX challenges'],
    whyNot: ['Long procurement sales cycles'],
    nextActions: ['Check for product design hiring and enterprise adoption signals'],
  },

  // Growth Metrics
  growthMetrics: {
    stage: 'high-growth',
    revenueGrowth: 'Not publicly disclosed',
    userGrowth: 'Not publicly disclosed',
    signals: ['$64.5M total funding (Seedtable)'],
    tam: 'Enterprise procurement and supplier data market',
    marketShare: 'Not publicly disclosed',
    ceiling: 'Potential to become core supplier data layer for procurement stacks',
    tailwinds: ['Digital transformation in procurement'],
    headwinds: ['Incumbent procurement platforms'],
    moatType: 'vertical-specialization',
    moatStrength: 'Moderate',
  },

  // Meta
  lastUpdated: '2026-02-04T20:45:00',
  sources: [
    { title: 'Source', url: 'https://www.tealbook.com' },
    { title: 'Source', url: 'https://www.seedtable.com/best-ai-startups-in-north-america' }
  ],
};
