import { Company } from '../types';

export const invisionAi: Company = {
  id: 'invision-ai',
  name: 'Invision AI',
  description: 'Computer vision company focused on image recognition and monitoring for industrial and security use cases.',
  website: 'https://invision.ai',
  headquarters: 'Toronto, ON, Canada',
  remote: 'Unknown',

  // Multi-dimensional Tags
  aiTypes: ['automation'],
  markets: ['b2b'],
  category: 'vertical-saas' as const,
  industries: ['security'],

  // Business
  stage: 'Seed',
  valuation: 'Not publicly disclosed',
  totalFunding: '$1.1M',
  revenue: 'Not publicly disclosed',
  growth: 'Not publicly disclosed',
  runway: 'Not publicly disclosed',
  customers: 'Industrial and security teams deploying vision monitoring systems',

  // Competition
  competitors: [
    {
      name: 'AnyVision',
      description: 'Computer vision platform for security and surveillance.',
      whyTheyWin: 'Enterprise surveillance deployments.',
    },
    {
      name: 'Verkada',
      description: 'Cloud-based video security and monitoring.',
      whyTheyWin: 'Strong cloud security distribution.',
    },
    {
      name: 'Viisight',
      description: 'AI video analytics for safety and security.',
      whyTheyWin: 'Focused AI safety analytics.',
    },
  ],
  marketPosition: 'AI-powered vision monitoring for security and industrial operations.',
  moat: ['Vision analytics focus for monitoring and detection'],
  vsGiants: 'Differentiates with focused monitoring use cases over general analytics platforms.',

  // AI-native analysis
  aiNativeLevel: 'C',
  aiNativeLevelDescription: 'AI vision models power core detection and monitoring workflows.',
  aiDesignChallenges: [
    'Designing alert workflows with low false positives',
    'Communicating visual evidence clearly to operators',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Alyssa Randall',
      role: 'Founder',
      background: 'Founded Invision AI to bring computer vision to industrial monitoring.',
    },
    {
      name: 'Karim Ali',
      role: 'Co-founder',
      background: 'Co-founded Invision AI and led product development.',
    },
  ],
  whyBuilding: 'Improve safety and operational efficiency with AI vision monitoring.',
  beliefs: ['AI vision can reduce manual monitoring overhead', 'Operational safety benefits from real-time detection'],
  greenFlags: ['Clear CV use case', 'Early funding traction'],
  redFlags: ['Security market procurement complexity'],

  // Design Opportunity
  designTeam: {
    teamSize: 'Unknown',
  },
  designWorkType: {
    logicBehavior: { level: 'medium', tasks: ['Alert threshold logic and monitoring rules'] },
    evaluation: { level: 'medium', tasks: ['False positive/negative monitoring UX'] },
    interface: { level: 'medium', tasks: ['Camera monitoring dashboards'] },
  },
  productStage: '1→10',

  // User Context
  targetAudiences: {
    primary: 'Security and operations teams',
    secondary: 'Industrial facility managers',
  },
  userProblems: [
    'Manual monitoring is costly and prone to missed events',
    'Operators need fast, reliable detection signals',
  ],

  // Designer Links
  designerLinks: [],

  // Open Roles
  openRoles: [],

  cultureInsights: [],

  // My Tracking
  tracking: {
    status: 'researching',
    fitScore: 4,
    whyJoin: ['Applied CV monitoring UX'],
    whyNot: ['Small early-stage footprint'],
    nextActions: ['Confirm product scope and team scale'],
  },

  // Growth Metrics
  growthMetrics: {
    stage: 'early-growth',
    revenueGrowth: 'Not publicly disclosed',
    userGrowth: 'Not publicly disclosed',
    signals: ['$1.1M total funding (Seedtable)'],
    tam: 'Security and industrial computer vision market',
    marketShare: 'Not publicly disclosed',
    ceiling: 'Could expand into broader industrial monitoring suites',
    tailwinds: ['Rising adoption of AI video analytics'],
    headwinds: ['Crowded CV and surveillance market'],
    moatType: 'technology',
    moatStrength: 'Unknown',
  },

  // Meta
  lastUpdated: '2026-02-04T20:10:00',
  sources: [
    { title: 'Source', url: 'https://invision.ai' },
    { title: 'Source', url: 'https://www.seedtable.com/best-ai-startups-in-north-america' }
  ],
};
