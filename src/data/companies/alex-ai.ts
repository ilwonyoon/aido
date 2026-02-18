import { Company } from '../types';

export const alexAi: Company = {
  id: 'alex-ai',
  name: 'Alex AI',
  description: 'AI recruiter focused on sourcing and outbound hiring workflows.',
  website: 'https://www.alex.com',
  headquarters: 'San Francisco, CA',
  remote: 'No',

  // Visual Assets
  ogImage: 'https://cdn.prod.website-files.com/68aeb8386df2a4eb63bab7e3/69767c8fa91a4725f8da328c_Alex_2026_web_thumb_01.jpg',
  screenshot: 'https://iad.microlink.io/-vPGJnuZPiYJMakrpdFkRznPjOCVzGtAkpOyW2N6Dh3R1LEIAibV6oRfFPVJ2MzAmgpJDdFkZLg-KqwtWmFb8g.png',

  // Multi-dimensional Tags
  aiTypes: ['automation'],
  markets: ['b2b'],
  category: 'productivity' as const,

  industries: ['productivity'],

  // Business
  stage: 'Series A',
  valuation: 'Unknown',
  totalFunding: '$20M',
  fundingHistory: [
    { stage: 'Series A', amount: '$17M', date: '2025-09' },
  ],
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Estimated 18-24 months post 2025-09 round ($17M); exact runway not publicly disclosed',
  customers: 'Primary audience: Recruiting and talent teams',

  // Competition
  competitors: [
    {
      name: 'Gem',
      description: 'Recruiting CRM and sourcing platform.',
      whyTheyWin: 'Broad adoption among recruiting teams.',
    },
    {
      name: 'HireEZ',
      description: 'AI sourcing and recruiting automation platform.',
      whyTheyWin: 'Large candidate database and automation features.',
    },
    {
      name: 'Ashby',
      description: 'Recruiting platform with analytics and automation.',
      whyTheyWin: 'Full ATS suite and modern UX.',
    },
  ],
  marketPosition: 'AI recruiter focused on automating sourcing and outreach.',
  moat: [
    'Automation of sourcing workflows',
    'AI-driven outreach at scale',
    'Focus on recruiter productivity',
  ],
  vsGiants: 'Competes on automation depth rather than full ATS suites.',

  // AI-Native Level
  aiNativeLevel: 'B',
  aiNativeLevelDescription: 'AI automation is core to the recruiter workflow.',
  aiDesignChallenges: [
    'Designing safe automation for candidate outreach',
    'Balancing personalization with scale',
    'Communicating AI actions to recruiters',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Aaron Wang',
      role: 'Co-founder & CEO',
      background: 'Co-founder listed on the YC profile for Apriora (Alex).',
    },
    {
      name: 'John Rytel',
      role: 'Co-founder & CTO',
      background: 'Co-founder listed on the YC profile for Apriora (Alex).',
    },
  ],
  whyBuilding: 'Automate recruiting workflows so teams can hire faster.',
  beliefs: [
    'Recruiting should be less manual',
    'Automation can improve hiring velocity',
    'Recruiters need transparent AI tools',
  ],
  designPhilosophy: 'Unknown',
  greenFlags: [
    'Clear automation use case in recruiting',
    'Series A stage indicates traction',
  ],
  redFlags: [
    'High risk of automation misuse',
    'Competitive recruiting tooling market',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: '11-50 employees (startups.gallery)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Automation rules for sourcing',
        'Outreach sequencing logic',
      ],
    },
    evaluation: {
      level: 'medium',
      tasks: [
        'Measuring response rates and quality',
        'Feedback loops for outreach performance',
      ],
    },
    interface: {
      level: 'medium',
      tasks: [
        'Recruiter dashboards and workflow UX',
        'Candidate pipeline views',
      ],
    },
  },
  productStage: '1→10',

  // Product & User Context
  targetAudiences: {
    primary: 'Recruiting and talent teams',
    secondary: 'Founders hiring at scale',
  },
  userProblems: [
    'Sourcing candidates is time-consuming',
    'Outreach at scale lacks personalization',
    'Recruiters struggle to manage large pipelines',
  ],

  // Designer Links
  designerLinks: [],

  // Open Roles (Product Design only)
  openRoles: [],

  // Culture Insights
  cultureInsights: [],

  // My Tracking
  tracking: {
    status: 'researching',
    fitScore: 5,
    whyJoin: [
      'AI-first recruiting workflows',
      'Clear automation UX challenges',
    ],
    whyNot: [
      'High competition in HR tech',
      'Automation risk in hiring workflows',
    ],
    nextActions: [
      'Review job description for scope and team fit',
    ],
  },

  // Meta
  lastUpdated: '2026-02-18',
  sources: [
    { title: 'Source', url: 'https://www.alex.com' },
    { title: 'Source', url: 'https://www.ycombinator.com/companies/apriora' },
    { title: 'Source', url: 'https://www.ycombinator.com/companies/apriora/jobs/z1xuDyf-product-designer' },
    { title: 'Source', url: 'https://startups.gallery/companies/alex-ai' }
  ],
};
