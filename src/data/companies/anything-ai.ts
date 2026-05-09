import { Company } from '../types';

export const anythingAi: Company = {
  id: 'anything-ai',
  name: 'Anything AI',
  description:
    'AI-powered software builder that helps teams create and ship custom products faster.',
  website: 'https://createanything.com/',
  headquarters: 'San Francisco, CA',
  region: 'sf-bay-area' as const,
  remote: 'No',

  // Visual Assets
  screenshot: 'https://iad.microlink.io/0nUeUlnXgIA7Wpj69nvhUHguHSv3lNapWH0m9Y_gDeTJ7Fw6RlTTzKloOp_QAYzFyODnQIM6ibj88ESLSc-1mA.png',

    // OG Image
    ogImage: '/og-images/anything-ai-og.webp',


  // Multi-dimensional Tags
  aiTypes: ['foundation-model'],
  markets: ['b2b'],
  category: 'ai-models' as const,

  industries: ['developer-tools'],

  // Business
  stage: 'Series A',
  normalizedStage: 'series-a' as const,
  valuation: 'Unknown',
  totalFunding: '$11M',
  fundingHistory: [
    { stage: 'Series A', amount: '$11M', date: '2025-09' },
  ],
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'Teams and companies building custom software products.',

  // Growth & Potential
  growthMetrics: {
    stage: 'early-growth',
    revenueGrowth: 'Unknown',
    signals: [
      'Series A stage AI software builder',
      'Onsite team based in San Francisco',
    ],
    tam: 'Unknown',
    marketShare: 'Unknown',
    ceiling: 'AI-assisted software creation is expanding across industries.',
    tailwinds: [
      'Demand for faster software delivery',
      'AI-assisted product development adoption',
      'Rising interest in custom internal tools',
    ],
    headwinds: [
      'Skepticism about AI-generated production software',
      'Strong competition from developer tools and agencies',
      'Integration complexity with existing stacks',
    ],
    moatType: 'technology',
    moatStrength: 'Moderate if Anything builds strong AI-assisted software creation workflows.',
  },

  // Competition
  competitors: [
    {
      name: 'Replit',
      description: 'AI-assisted coding and developer platform.',
      whyTheyWin: 'Large developer community and fast iteration.',
    },
    {
      name: 'Builder.ai',
      description: 'AI-assisted custom software development platform.',
      whyTheyWin: 'Established enterprise partnerships and services.',
    },
    {
      name: 'Cursor',
      description: 'AI-native code editor and developer workflow tool.',
      whyTheyWin: 'Deep AI integration in developer workflows.',
    },
  ],
  marketPosition: 'AI software builder focused on fast, custom product delivery.',
  moat: [
    'End-to-end AI-assisted product build workflow',
    'Product management and delivery tooling',
    'Iteration speed for custom software',
  ],
  vsGiants: 'Competes on speed and workflow focus vs traditional dev agencies and platforms.',

  // AI-Native Level
  aiNativeLevel: 'A',
  aiNativeLevelDescription:
    'AI-Native: Anything AI centers on AI-driven software creation.',
  aiDesignChallenges: [
    'Trust and quality assurance for AI-built products',
    'Collaborative workflows for non-technical stakeholders',
    'Balancing automation with human oversight',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Dhruv Amin',
      role: 'Co-founder & Co-CEO',
      background: 'YouTube TV\'s first product manager; co-founded Anything to help teams build and ship apps faster with AI.',
    },
    {
      name: 'Marcus Lowe',
      role: 'Co-founder & Co-CEO',
      background: 'Ex-Google Maps and MIT Media Lab; co-founded Anything to democratize no-code AI app development.',
    },
  ],
  whyBuilding:
    'Help teams build real software faster with AI-powered workflows.',
  beliefs: [
    'AI can accelerate product delivery without sacrificing quality',
    'Non-technical teams should participate in software creation',
    'Iteration speed is a competitive advantage',
  ],
  designPhilosophy: 'Human-in-the-loop AI workflows with clear delivery milestones.',
  greenFlags: [
    'Strong market demand for faster delivery',
    'AI-native product focus',
  ],
  redFlags: [
    'Customer trust in AI-built software is still forming',
    'High expectations for quality and reliability',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: '11-50 employees (startups.gallery)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'AI-assisted product build workflows',
        'Role-based collaboration and approvals',
        'Automated delivery pipeline logic',
      ],
    },
    evaluation: {
      level: 'high',
      tasks: [
        'Quality evaluation of AI-generated outputs',
        'Feedback loops for iterative builds',
        'Project health and milestone analytics',
      ],
    },
    interface: {
      level: 'medium',
      tasks: [
        'Product briefs and scoping UX',
        'Stakeholder dashboards and updates',
        'Delivery and handoff experiences',
      ],
    },
  },
  productStage: '1→10',

  // Product & User Context
  targetAudiences: {
    primary: 'Product teams needing custom software delivery',
    secondary: 'Founders and operators building internal tools',
  },
  userProblems: [
    'Custom software projects take too long to deliver',
    'Non-technical stakeholders struggle to contribute',
    'Quality and scope drift are hard to control',
    'Handoffs between product and engineering are inefficient',
  ],

  // Designer Links
  designerLinks: [],

  // Open Roles
  openRoles: [],

  // Culture Insights
  cultureInsights: [],

  // My Tracking
  tracking: {
    status: 'watching',
    fitScore: 7,
    whyJoin: [
      'AI-native product building workflows',
      'High leverage product design challenges',
    ],
    whyNot: [
      'Competition from established developer tools',
      'High bar for quality and delivery trust',
    ],
    nextActions: [
      'Track product launches and customer traction',
      'Monitor hiring signals',
    ],
  },

  // Meta
  lastUpdated: '2026-01-27T16:40:00',
  sources: [
    { title: 'Source', url: 'https://createanything.com/' },
    { title: 'Source', url: 'https://jobs.ashbyhq.com/anything' },
    { title: 'Source', url: 'https://startups.gallery/companies/anything-ai' }
  ],
};
