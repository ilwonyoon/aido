import { Company } from '../types';

export const certn: Company = {
  id: 'certn',
  name: 'Certn',
  description: 'Background screening and risk monitoring platform for global hiring and contractor checks.',
  website: 'https://certn.co',
  headquarters: 'Victoria, BC, Canada',
  remote: 'Unknown',

  // Multi-dimensional Tags
  aiTypes: ['automation', 'data-analysis'],
  markets: ['b2b', 'enterprise'],
  category: 'vertical-saas' as const,
  industries: ['security'],

  // Business
  stage: 'Private',
  valuation: 'Not publicly disclosed',
  totalFunding: '$115.8M',
  revenue: 'Not publicly disclosed',
  growth: 'Not publicly disclosed',
  runway: 'Not publicly disclosed',
  customers: 'Employers and staffing firms running background checks',

  // Competition
  competitors: [
    {
      name: 'Checkr',
      description: 'Background check platform for hiring and compliance.',
      whyTheyWin: 'Strong US market adoption and automation workflows.',
    },
    {
      name: 'Sterling',
      description: 'Enterprise background screening platform.',
      whyTheyWin: 'Large enterprise customer base.',
    },
    {
      name: 'GoodHire',
      description: 'Background screening for SMBs and mid-market.',
      whyTheyWin: 'SMB-focused workflows and ease of use.',
    },
  ],
  marketPosition: 'Automated global background screening and compliance checks.',
  moat: ['Global screening coverage', 'Automation and compliance workflows'],
  vsGiants: 'Differentiates with faster turnaround and global coverage.',

  // AI-native analysis
  aiNativeLevel: 'C',
  aiNativeLevelDescription: 'AI supports screening automation and risk analysis.',
  aiDesignChallenges: [
    'Designing compliant screening workflows',
    'Building trust in automated risk flags',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Evan Dalton',
      role: 'Co-founder & CEO',
      background: 'Co-founded Certn to modernize background screening with automation.',
    },
    {
      name: 'Andrew McLeod',
      role: 'Co-founder',
      background: 'Co-founded Certn and helped scale global screening operations.',
    },
  ],
  whyBuilding: 'Make background screening faster, fairer, and more efficient.',
  beliefs: ['Hiring workflows need modern automation', 'Risk monitoring should be continuous'],
  greenFlags: ['Large funding base', 'Global screening coverage'],
  redFlags: ['Regulatory and compliance complexity'],

  // Design Opportunity
  designTeam: {
    teamSize: 'Unknown',
  },
  designWorkType: {
    logicBehavior: { level: 'medium', tasks: ['Screening workflow and compliance UX'] },
    evaluation: { level: 'medium', tasks: ['Risk flagging and review workflows'] },
    interface: { level: 'medium', tasks: ['Customer admin and reporting dashboards'] },
  },
  productStage: '10→100',

  // User Context
  targetAudiences: {
    primary: 'HR and talent acquisition teams',
    secondary: 'Staffing firms and compliance teams',
  },
  userProblems: [
    'Background checks are slow and manual',
    'Global compliance requirements are complex',
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
    whyJoin: ['Compliance workflow UX', 'Global hiring infrastructure challenges'],
    whyNot: ['Regulatory complexity'],
    nextActions: ['Track product design roles and hiring signals'],
  },

  // Growth Metrics
  growthMetrics: {
    stage: 'high-growth',
    revenueGrowth: 'Not publicly disclosed',
    userGrowth: 'Not publicly disclosed',
    signals: ['$115.8M total funding (Seedtable)'],
    tam: 'Global background screening and risk monitoring market',
    marketShare: 'Not publicly disclosed',
    ceiling: 'Can expand into continuous risk monitoring platform',
    tailwinds: ['Remote hiring and global compliance needs'],
    headwinds: ['Regulatory complexity and competition'],
    moatType: 'platform-ecosystem',
    moatStrength: 'Moderate',
  },

  // Meta
  lastUpdated: '2026-02-04T21:00:00',
  sources: [
    { title: 'Source', url: 'https://certn.co' },
    { title: 'Source', url: 'https://www.seedtable.com/best-ai-startups-in-north-america' }
  ],
};
