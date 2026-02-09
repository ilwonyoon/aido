import { Company } from '../types';

export const unbounce: Company = {
  id: 'unbounce',
  name: 'Unbounce',
  description: 'Landing page builder and conversion platform for marketers with AI-assisted optimization.',
  website: 'https://unbounce.com',
  headquarters: 'Vancouver, BC, Canada',
  remote: 'Unknown',

  // Multi-dimensional Tags
  aiTypes: ['automation', 'text-assistant'],
  markets: ['smb', 'b2b'],
  category: 'sales-marketing' as const,
  industries: ['sales-marketing'],

  // Business
  stage: 'Private',
  valuation: 'Not publicly disclosed',
  totalFunding: '$39.3M',
  revenue: 'Not publicly disclosed',
  growth: 'Not publicly disclosed',
  runway: 'Not publicly disclosed',
  customers: 'Marketing teams and SMBs building conversion-focused landing pages',

  // Competition
  competitors: [
    {
      name: 'Instapage',
      description: 'Landing page and conversion optimization platform.',
      whyTheyWin: 'Strong enterprise marketing adoption.',
    },
    {
      name: 'Webflow',
      description: 'Web design and hosting platform with marketing site tooling.',
      whyTheyWin: 'Broader site-building ecosystem and designer community.',
    },
    {
      name: 'Leadpages',
      description: 'Landing page builder for SMBs and marketers.',
      whyTheyWin: 'SMB-friendly pricing and templates.',
    },
  ],
  marketPosition: 'Conversion-focused landing page platform with AI optimization features.',
  moat: ['Conversion optimization focus', 'Marketing workflow integrations'],
  vsGiants: 'Differentiates with conversion-specific tooling vs general web builders.',

  // AI-native analysis
  aiNativeLevel: 'C',
  aiNativeLevelDescription: 'AI augments copy and conversion optimization workflows.',
  aiDesignChallenges: [
    'Designing AI suggestions that improve conversion outcomes',
    'Balancing speed of creation with brand fidelity',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Rick Perreault',
      role: 'Co-founder & CEO',
      background: 'Co-founded Unbounce and led growth of the landing page platform.',
    },
    {
      name: 'Carter Gilchrist',
      role: 'Co-founder',
      background: 'Co-founded Unbounce and helped shape product strategy.',
    },
    {
      name: 'Carl Schmidt',
      role: 'Co-founder',
      background: 'Co-founded Unbounce and contributed to early product development.',
    },
  ],
  whyBuilding: 'Help marketers create high-converting pages without engineering bottlenecks.',
  beliefs: ['Conversion optimization should be accessible to marketers', 'AI can accelerate iteration'],
  greenFlags: ['Established marketing product with AI tailwinds'],
  redFlags: ['Highly competitive marketing tooling space'],

  // Design Opportunity
  designTeam: {
    teamSize: 'Unknown',
  },
  designWorkType: {
    logicBehavior: { level: 'medium', tasks: ['AI copy suggestions and experiment UX'] },
    evaluation: { level: 'medium', tasks: ['A/B testing and conversion analytics UX'] },
    interface: { level: 'high', tasks: ['Landing page builder UI and template UX'] },
  },
  productStage: '10→100',

  // User Context
  targetAudiences: {
    primary: 'Marketing teams and growth marketers',
    secondary: 'SMBs building landing pages without developers',
  },
  userProblems: [
    'Landing page creation is slow without engineering support',
    'Conversion optimization requires repeated experimentation',
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
    whyJoin: ['Design-heavy builder product', 'A/B testing UX challenges'],
    whyNot: ['Competitive marketing SaaS category'],
    nextActions: ['Track current design team growth and roles'],
  },

  // Growth Metrics
  growthMetrics: {
    stage: 'mature-growth',
    revenueGrowth: 'Not publicly disclosed',
    userGrowth: 'Not publicly disclosed',
    signals: ['$39.3M total funding (Seedtable)'],
    tam: 'Landing page and conversion optimization market',
    marketShare: 'Not publicly disclosed',
    ceiling: 'Can expand into broader marketing workflow automation',
    tailwinds: ['Demand for self-serve marketing tools'],
    headwinds: ['Platform consolidation in marketing SaaS'],
    moatType: 'brand',
    moatStrength: 'Moderate',
  },

  // Meta
  lastUpdated: '2026-02-04T20:30:00',
  sources: [
    { title: 'Source', url: 'https://unbounce.com' },
    { title: 'Source', url: 'https://www.seedtable.com/best-ai-startups-in-north-america' }
  ],
};
