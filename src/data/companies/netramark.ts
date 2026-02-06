import { Company } from '../types';

export const netramark: Company = {
  id: 'netramark',
  name: 'NetraMark',
  description: 'AI platform for drug development and precision medicine insights from clinical data.',
  website: 'https://netramark.com',
  headquarters: 'Toronto, ON, Canada',
  remote: 'Unknown',

  // Multi-dimensional Tags
  aiTypes: ['data-analysis'],
  markets: ['enterprise', 'b2b'],
  category: 'vertical-saas' as const,
  industries: ['healthcare'],

  // Business
  stage: 'Private',
  valuation: 'Not publicly disclosed',
  totalFunding: 'Not publicly disclosed',
  revenue: 'Not publicly disclosed',
  growth: 'Not publicly disclosed',
  runway: 'Not publicly disclosed',
  customers: 'Biopharma and clinical research teams',

  // Competition
  competitors: [
    {
      name: 'Insilico Medicine',
      description: 'AI-driven drug discovery platform.',
      whyTheyWin: 'Large funding and integrated wet-lab programs.',
    },
    {
      name: 'BenevolentAI',
      description: 'AI platform for drug discovery and clinical research.',
      whyTheyWin: 'Public-market scale and pharma partnerships.',
    },
    {
      name: 'Recursion',
      description: 'AI + wet-lab drug discovery company.',
      whyTheyWin: 'Large proprietary datasets and automation stack.',
    },
  ],
  marketPosition: 'AI-driven clinical data intelligence for drug development and precision medicine.',
  moat: ['Clinical data modeling and stratification focus'],
  vsGiants: 'Differentiates with clinical trial and precision medicine analytics focus.',

  // AI-native analysis
  aiNativeLevel: 'B',
  aiNativeLevelDescription: 'AI is core to extracting insights from complex clinical datasets.',
  aiDesignChallenges: [
    'Designing trustworthy clinical decision insights',
    'Communicating statistical evidence clearly to researchers',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Joseph Geraci',
      role: 'Founder',
      background: 'Founded NetraMark to apply AI to clinical trial and precision medicine data.',
    },
  ],
  whyBuilding: 'Speed up drug development with AI-driven clinical insight.',
  beliefs: ['Clinical data should drive faster trial decisions', 'AI can reveal hidden patient subgroups'],
  greenFlags: ['Clear healthcare data niche'],
  redFlags: ['Healthcare procurement and regulatory complexity'],

  // Design Opportunity
  designTeam: {
    teamSize: 'Unknown',
  },
  designWorkType: {
    logicBehavior: { level: 'high', tasks: ['Clinical data modeling UX', 'Cohort stratification workflows'] },
    evaluation: { level: 'medium', tasks: ['Evidence validation and audit trails'] },
    interface: { level: 'medium', tasks: ['Clinical insights dashboards'] },
  },
  productStage: '1→10',

  // User Context
  targetAudiences: {
    primary: 'Clinical research and biopharma teams',
    secondary: 'Precision medicine researchers',
  },
  userProblems: [
    'Clinical trial data is hard to interpret quickly',
    'Identifying patient subgroups is time-consuming and error-prone',
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
    whyJoin: ['Clinical data UX and evidence design challenges'],
    whyNot: ['Regulated market with long sales cycles'],
    nextActions: ['Verify current product traction and hiring'],
  },

  // Growth Metrics
  growthMetrics: {
    stage: 'early-growth',
    revenueGrowth: 'Not publicly disclosed',
    userGrowth: 'Not publicly disclosed',
    signals: ['Seedtable listing'],
    tam: 'AI-enabled clinical trial analytics market',
    marketShare: 'Not publicly disclosed',
    ceiling: 'Could expand into broader precision medicine analytics',
    tailwinds: ['Rising AI adoption in biotech'],
    headwinds: ['Regulatory and procurement barriers'],
    moatType: 'vertical-specialization',
    moatStrength: 'Unknown',
  },

  // Meta
  lastUpdated: '2026-02-04T21:00:00',
  sources: [
    { title: 'NetraMark', url: 'https://netramark.com' },
    { title: 'Seedtable - Best AI Startups in North America (2026)', url: 'https://www.seedtable.com/best-ai-startups-in-north-america' },
  ],
};
