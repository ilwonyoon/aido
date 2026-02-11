import { Company } from '../types';

export const piinpoint: Company = {
  id: 'piinpoint',
  name: 'PiinPoint',
  description:
    'Location intelligence and site selection platform that combines analytics, demographics, and retail data to guide expansion decisions.',
  website: 'https://www.piinpoint.com',
  headquarters: 'Kitchener, ON, Canada',
  remote: 'Unknown',

  // Multi-dimensional Tags
  aiTypes: ['data-analysis', 'automation'],
  markets: ['enterprise', 'b2b'],
  category: 'enterprise-ops' as const,
  industries: ['other'],

  // Business
  stage: 'Seed',
  valuation: 'Not publicly disclosed',
  totalFunding: '$1.4M',
  revenue: 'Not publicly disclosed',
  growth: 'Not publicly disclosed',
  runway: 'Not publicly disclosed',
  customers: 'Hundreds of retailers; 55,000 retail locations supported',
  fundingHistory: [],

  // Competition
  competitors: [
    {
      name: 'SiteZeus',
      description: 'AI-driven site selection and real estate analytics platform.',
      whyTheyWin: 'Large dataset breadth and automation across retail workflows.',
    },
    {
      name: 'Placer.ai',
      description: 'Location analytics and foot traffic intelligence for retail.',
      whyTheyWin: 'Strong market visibility and extensive location data coverage.',
    },
    {
      name: 'Near',
      description: 'Location intelligence platform for audience and foot traffic data.',
      whyTheyWin: 'Robust data partnerships and marketing integrations.',
    },
  ],
  marketPosition:
    'Retail site selection and location intelligence platform focused on data-driven expansion decisions.',
  moat: [
    'Integrated analytics that combine demographics, retail, and location signals',
    'Workflow tooling tailored for retail and franchise expansion teams',
    'Strong footprint in Canadian retail analytics market',
  ],
  vsGiants:
    'Competes by focusing on end-to-end site selection workflows rather than generic location datasets.',

  // AI-Native Level
  aiNativeLevel: 'B',
  aiNativeLevelDescription:
    'AI-driven analytics power the core decision-support workflows for site selection.',
  aiDesignChallenges: [
    'Designing multi-source data exploration without overwhelming users',
    'Explaining model-driven recommendations for site selection decisions',
    'Balancing spatial analytics with business KPI reporting',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Jim Robeson',
      role: 'Co-founder & CEO',
      background:
        'Co-founded PiinPoint to help retailers make better expansion decisions using location intelligence.',
    },
    {
      name: 'Adam Saunders',
      role: 'Co-founder & CTO',
      background:
        'Co-founded PiinPoint and led the analytics and data platform for site selection insights.',
    },
  ],
  whyBuilding:
    'PiinPoint was built to bring data-driven clarity to retail site selection and expansion planning.',
  beliefs: [
    'Retail expansion decisions should be grounded in measurable location data',
    'Analytics must translate into clear business actions',
    'Location intelligence should be accessible to non-technical teams',
  ],
  greenFlags: [
    'Accepted into Y Combinator and backed by Canadian investors',
    'Clear traction with hundreds of retail customers',
    'Focus on repeatable workflows in a defined vertical',
  ],
  redFlags: ['Limited public visibility into financial performance'],

  // Design Opportunity
  designTeam: {
    teamSize: 'Not publicly disclosed',
  },
  designWorkType: {
    logicBehavior: {
      level: 'medium',
      tasks: [
        'Decision logic for site recommendation workflows',
        'Retail expansion scenario planning tools',
        'Data filtering and prioritization logic',
      ],
    },
    evaluation: {
      level: 'medium',
      tasks: [
        'Model validation for location scoring',
        'Feedback loops for decision accuracy',
        'Monitoring KPI outcomes post-launch',
      ],
    },
    interface: {
      level: 'high',
      tasks: [
        'Geospatial analytics dashboards',
        'Data visualization for trade areas and demographics',
        'Retail portfolio reporting interfaces',
      ],
    },
  },
  productStage: '1→10',

  // Product & User Context
  targetAudiences: {
    primary: 'Retail expansion and real estate teams',
    secondary: 'Franchise operators and market planning analysts',
  },
  userProblems: [
    'Uncertainty around where to open new retail locations',
    'Fragmented data sources for trade area analysis',
    'Slow, manual site selection workflows that delay expansion',
  ],

  // Designer Links
  designerLinks: [],

  // Open Roles
  openRoles: [],

  // Culture Insights
  cultureInsights: [],

  // My Tracking
  tracking: {
    status: 'researching',
    fitScore: 5,
    whyJoin: ['Vertical focus with clear customer use cases', 'Data-heavy product surface'],
    whyNot: ['Limited public signals on growth and funding'],
    nextActions: ['Track hiring and funding updates'],
  },

  // Meta
  lastUpdated: '2026-02-11T14:20:00',
  sources: [
    { title: 'PiinPoint - About', url: 'https://www.piinpoint.com/about' },
    { title: 'PiinPoint - Funding (Seedtable)', url: 'https://www.seedtable.com/startups-piinpoint' },
    { title: 'BDC Capital Portfolio - PiinPoint', url: 'https://www.bdc.ca/en/bdc-capital/portfolio/piinpoint' },
    { title: 'PiinPoint - Blog', url: 'https://www.piinpoint.com/blog' },
    { title: 'PiinPoint - Company Profile (Crunchbase)', url: 'https://www.crunchbase.com/organization/piinpoint' },
  ],
};
