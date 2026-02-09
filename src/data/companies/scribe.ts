import { Company } from '../types';

export const scribe: Company = {
  id: 'scribe',
  name: 'Scribe',
  description: 'Tool that turns any process into step-by-step guides.',
  website: 'https://scribehow.com',
    screenshot: '/screenshots/scribe-screenshot.png',
  headquarters: 'San Francisco, CA',
  remote: 'Yes',

    // OG Image
    ogImage: '/og-images/scribe-og.webp',


  // Multi-dimensional Tags
  aiTypes: ['code-assistant'],
  markets: ['b2b'],
  category: 'developer-tools' as const,

  industries: ['developer-tools'],

  // Business
  stage: 'Series C',
  valuation: 'Unknown',
  totalFunding: '$55M',
  fundingHistory: [
    {
      stage: 'Series B',
      amount: '$30M',
      date: '2023-12',
    },
  ],
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'Unknown',

  // Competition
  competitors: [
    {
      name: 'Loom',
      description: 'Video-based documentation and async communication.',
      whyTheyWin: 'Large user base and strong virality.',
    },
    {
      name: 'Trainual',
      description: 'Training and SOP documentation platform.',
      whyTheyWin: 'Structured training workflows and SMB adoption.',
    },
    {
      name: 'Notion',
      description: 'All-in-one workspace for docs and wikis.',
      whyTheyWin: 'Flexible docs and widespread adoption.',
    },
  ],
  marketPosition: 'Automated process documentation for teams.',
  moat: [
    'Automatic capture of step-by-step processes',
    'Easy sharing and documentation workflows',
    'Teams-first adoption model',
  ],
  vsGiants: 'Competes on automated documentation rather than generic wiki tools.',

  // AI-Native Level
  aiNativeLevel: 'C',
  aiNativeLevelDescription: 'AI enhances documentation but is not the entire product.',
  aiDesignChallenges: [
    'Automating capture while preserving user control',
    'Designing clarity and readability for guides',
    'Balancing automation with custom editing',
  ],

  // Founders & Vision
  founders: [
    { name: 'Jennifer Smith', role: 'Co-Founder & CEO', background: 'Former McKinsey & Company and Greylock Partners. Built Scribe to $1.3B valuation with 5M+ users.' },
    { name: 'Aaron Podolny', role: 'Co-Founder & CTO', background: 'Former Google engineer (via acquisition of his software automation company).' },
  ],
  whyBuilding: 'Make documenting workflows effortless for teams.',
  beliefs: [
    'Teams need faster ways to document processes',
    'Automation should reduce documentation overhead',
    'Sharing knowledge improves operational efficiency',
  ],
  designPhilosophy: 'Unknown',
  greenFlags: [
    'Clear productivity use case with team adoption',
    'Strong funding and growth signals',
  ],
  redFlags: [
    'Crowded productivity tooling market',
    'AI automation may be easy to replicate',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: '11-50 employees (startups.gallery)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'medium',
      tasks: [
        'Capture logic for step-by-step workflows',
        'Automation triggers and editing flows',
      ],
    },
    evaluation: {
      level: 'low',
      tasks: [
        'Measuring doc quality and completion',
        'User feedback on usability',
      ],
    },
    interface: {
      level: 'high',
      tasks: [
        'Guide creation UI and editing experience',
        'Sharing and collaboration flows',
      ],
    },
  },
  productStage: '10→100',

  // Product & User Context
  targetAudiences: {
    primary: 'Operations and enablement teams',
    secondary: 'Sales and support teams documenting workflows',
  },
  userProblems: [
    'Documenting processes takes too long',
    'Knowledge gets lost across teams',
    'Manual documentation quickly becomes outdated',
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
      'Productivity tooling with broad team adoption',
      'Opportunity to design automation-centric UX',
    ],
    whyNot: [
      'Highly competitive productivity landscape',
      'Automation features may commoditize',
    ],
    nextActions: [
      'Monitor for product design openings',
    ],
  },

  // Meta
  lastUpdated: '2026-01-28T11:57:37',
  sources: [
    { title: 'Source', url: 'https://scribehow.com' },
    { title: 'Source', url: 'https://scribehow.com/jobs' },
    { title: 'Source', url: 'https://startups.gallery/companies/scribe' }
  ],
};
