import { Company } from '../types';

export const naborly: Company = {
  id: 'naborly',
  name: 'Naborly',
  description:
    'Tenant screening and rental decisioning platform that uses AI-driven verification to help landlords approve tenants faster.',
  website: 'https://www.naborly.com',
  headquarters: 'Toronto, ON, Canada',
  remote: 'No',

  // Multi-dimensional Tags
  aiTypes: ['data-analysis', 'automation'],
  markets: ['b2b', 'smb'],
  category: 'vertical-saas' as const,
  industries: ['other'],

  // Business
  stage: 'Acquired',
  valuation: 'Not publicly disclosed',
  totalFunding: '$7.5M',
  revenue: 'Not publicly disclosed',
  growth: 'Not publicly disclosed',
  runway: 'Not publicly disclosed',
  customers: 'Property managers and landlords screening rental applicants.',

  // Competition
  competitors: [
    {
      name: 'TransUnion SmartMove',
      description: 'Tenant screening and credit reporting for landlords.',
      whyTheyWin: 'Credit bureau data access and brand trust.',
    },
    {
      name: 'TenantCloud',
      description: 'Property management platform with screening tools.',
      whyTheyWin: 'All-in-one property management suite.',
    },
    {
      name: 'RentPrep',
      description: 'Tenant screening services for landlords.',
      whyTheyWin: 'Established screening workflow and compliance coverage.',
    },
  ],
  marketPosition: 'AI-driven tenant screening and decisioning for rental applications.',
  moat: [
    'Automated applicant verification workflows',
    'AI-driven risk scoring for tenant decisions',
    'Property management workflow integrations',
  ],
  vsGiants: 'Competes by combining automation with rental-specific workflows versus generic credit data services.',

  // AI-Native Level
  aiNativeLevel: 'B',
  aiNativeLevelDescription:
    'AI is core to document verification and applicant decisioning workflows.',
  aiDesignChallenges: [
    'Trust and transparency in applicant scoring',
    'Fairness and compliance in automated decisioning',
    'Clear communication of approval outcomes',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Dylan Lenz',
      role: 'Co-founder & CEO',
      background: 'Co-founded Naborly to modernize tenant screening and reduce rental friction.',
    },
  ],
  whyBuilding:
    'Reduce rental application friction and improve decision quality through automated tenant screening.',
  beliefs: [
    'Landlords need faster, more reliable screening',
    'Automation can reduce bias and improve compliance',
    'Better data leads to better rental outcomes',
  ],
  greenFlags: ['Clear property management pain point', 'Process automation with measurable ROI'],
  redFlags: ['Regulatory and fairness scrutiny', 'Competitive screening landscape'],

  // Design Opportunity
  designTeam: {
    teamSize: 'Not publicly disclosed',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Automated verification workflows',
        'Decisioning logic and exception handling',
        'Compliance-driven approval flows',
      ],
    },
    evaluation: {
      level: 'high',
      tasks: [
        'Risk score calibration',
        'Application outcome analytics',
        'Fairness and bias monitoring',
      ],
    },
    interface: {
      level: 'medium',
      tasks: [
        'Applicant review dashboards',
        'Document verification UI',
        'Landlord communication workflows',
      ],
    },
  },
  productStage: '10→100',

  // User Context
  targetAudiences: {
    primary: 'Property managers and landlords',
    secondary: 'Real estate investment and operations teams',
  },
  userProblems: [
    'Tenant screening is slow and manual',
    'Landlords struggle to verify applicant information',
    'Decisioning lacks transparency for applicants',
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
    whyJoin: ['Workflow automation with real estate impact', 'Decisioning UX challenges'],
    whyNot: ['Regulatory risk around screening', 'Competitive market'],
    nextActions: ['Track post-acquisition product direction', 'Monitor hiring signals'],
  },

  // Meta
  lastUpdated: '2026-02-06T12:00:00',
  sources: [
    { title: 'Naborly website', url: 'https://www.naborly.com' },
    { title: 'Naborly seed funding', url: 'https://www.prnewswire.com/news-releases/naborly-raises-7-5-million-in-seed-funding-to-tackle-renters-application-dilemma-300465136.html' },
    { title: 'Naborly YC profile', url: 'https://www.ycombinator.com/companies/naborly' },
  ],
};
