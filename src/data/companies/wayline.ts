import { Company } from '../types';

export const wayline: Company = {
  id: 'wayline',
  name: 'Wayline',
  description:
    'AI voice and text operator for property managers, automating leasing, maintenance, and tenant communication across rental property workflows.',
  website: 'https://wayline.com',
  headquarters: 'San Francisco, CA',
  remote: 'No',

  aiTypes: ['conversation-ai', 'automation'],
  markets: ['b2b', 'enterprise'],
  category: 'vertical-saas' as const,
  subcategories: ['real-estate', 'voice-ai'],
  industries: ['other'],

  stage: 'Seed',
  valuation: 'Unknown',
  totalFunding: '$500K seed round publicly cited by YC/YesPress',
  revenue: 'Unknown',
  growth: 'YC S25 company with live Founding Product Designer role.',
  runway: 'Unknown',
  customers: 'Property managers and rental operators.',

  competitors: [
    {
      name: 'Zuma',
      description: 'AI leasing assistant for multifamily and property management.',
      whyTheyWin: 'Category familiarity and existing property management integrations.',
    },
    {
      name: 'AppFolio / Yardi ecosystem tools',
      description: 'Property management systems and workflow platforms.',
      whyTheyWin: 'Entrenched systems of record and customer relationships.',
    },
    {
      name: 'Generic voice AI platforms',
      description: 'Horizontal AI call handling and support automation tools.',
      whyTheyWin: 'Broad platform flexibility and faster deployment across verticals.',
    },
  ],
  marketPosition: 'AI front desk for property management',
  moat: [
    'Property-specific AI knowledge base and workflows',
    'Repeat founders with real estate operations and enterprise software experience',
    'YC-backed early wedge in a fragmented operations-heavy vertical',
  ],
  vsGiants:
    'Competes by specializing in property management communication and operations rather than offering generic voice AI.',

  aiNativeLevel: 'A',
  aiNativeLevelDescription:
    'AI is the core product: Wayline is an always-on voice and text operator for property managers.',
  aiDesignChallenges: [
    'Voice and text AI interaction design for operational workflows',
    'Human supervision and escalation for property management issues',
    'Trust and status visibility for leasing and maintenance automations',
  ],

  founders: [
    {
      name: 'Jason Okra',
      role: 'Founder',
      background:
        'YC lists Jason Okra as Wayline founder with prior WeWork, Jupe, Kopa, Cribspot, and property management experience.',
    },
    {
      name: 'Eric Rowell',
      role: 'Founder',
      background:
        'YC lists Eric Rowell as Wayline founder; previously founder/CEO of Second and co-founder/CTO of Uiflow.',
    },
  ],
  whyBuilding:
    'Wayline is automating repetitive property management communication and back-office coordination with AI voice and text operators.',
  beliefs: [
    'Property management administrative work can be largely automated by AI',
    'Voice and text should become the operational interface for tenants and prospects',
    'Vertical-specific knowledge is required for reliable property workflows',
  ],
  greenFlags: [
    'Live YC Founding Product Designer role in San Francisco',
    'Large vertical with clear workflow pain and fragmented tooling',
    'Repeat founders with relevant property and software background',
  ],
  redFlags: [
    'Very early team and product',
    'Voice AI reliability and escalation design are hard operational problems',
    'Real estate software sales can involve slow integrations and fragmented buyers',
  ],

  designTeam: {
    teamSize: 'First design hire',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Voice and text workflow design',
        'Human-agent interaction patterns',
        'Escalation, status, and operational control flows',
      ],
    },
    evaluation: {
      level: 'high',
      tasks: ['Automation reliability', 'Conversion lift', 'After-hours handling quality'],
    },
    interface: {
      level: 'high',
      tasks: ['Operator dashboards', 'Property management workflows', 'Design system foundations'],
    },
  },
  productStage: '0→1',

  targetAudiences: {
    primary: 'Property managers and rental operators',
    secondary: 'Tenants, prospects, leasing teams, and maintenance coordinators',
  },
  userProblems: [
    'Property teams miss calls and messages after hours',
    'Leasing and maintenance workflows require constant repetitive coordination',
    'Existing property systems are fragmented and hard to operate in real time',
  ],

  designerLinks: [],
  openRoles: [
    {
      title: 'Founding Product Designer',
      location: 'San Francisco, CA',
      type: 'full-time',
      roleFamily: 'product-design',
      roleSignal: 'founding',
      verificationStatus: 'confirmed',
      sourceType: 'yc',
      lastVerifiedAt: '2026-05-06',
      url: 'https://www.ycombinator.com/companies/wayline/jobs/d6ugYvj-founding-product-designer',
      compensation: '$150K-$250K + 1.00%-3.00%',
      aboutRole:
        'Own the end-to-end product experience across voice, UI, workflows, and AI-native human-agent interfaces.',
      whyInteresting:
        'A high-ownership founding product design role at the intersection of voice AI, vertical SaaS, and property operations.',
    },
  ],

  cultureInsights: [
    {
      source: 'ycombinator',
      sentiment: 'positive',
      content:
        'YC role emphasizes that the designer owns product experience, works directly with founders and customers, and ships constantly.',
      url: 'https://www.ycombinator.com/companies/wayline/jobs/d6ugYvj-founding-product-designer',
    },
  ],

  tracking: {
    status: 'researching',
    fitScore: 7,
    whyJoin: [
      'Confirmed SF founding product design role',
      'AI voice operator UX has strong frontier design problems',
      'Founders have relevant real estate and product/company-building background',
    ],
    whyNot: [
      'Very early team of three',
      'Operational reliability burden could be high',
      'Property management is a fragmented vertical',
    ],
    nextActions: [
      'Ask for product demo focused on escalation and human supervision',
      'Clarify expected coding/prototyping depth',
      'Prepare examples of workflow, voice, or agent UX design',
    ],
  },

  growthMetrics: {
    stage: 'early-growth',
    revenueGrowth: 'Unknown',
    userGrowth: 'Unknown',
    signals: ['YC S25', 'Live YC role', 'YesPress cites active hiring and launch metrics'],
    tam: 'Property management operations and voice AI automation',
    marketShare: 'Early',
    ceiling: 'High if Wayline becomes the default AI front desk for multifamily operators.',
    tailwinds: [
      'Property management has repetitive communication-heavy workflows',
      'Voice AI is improving rapidly',
      'Operators are motivated to reduce missed calls and staffing costs',
    ],
    headwinds: [
      'Vertical integrations can slow deployment',
      'Reliability expectations are high for tenant and maintenance issues',
      'Competitive pressure from property software incumbents and horizontal voice AI',
    ],
    moatType: 'vertical-specialization',
    moatStrength: 'Early; depends on workflow depth, integrations, and reliability.',
  },

  lastUpdated: '2026-05-06',
  sources: [
    { title: 'Wayline website', url: 'https://wayline.com' },
    { title: 'Wayline YC profile', url: 'https://www.ycombinator.com/companies/wayline' },
    { title: 'Founding Product Designer at Wayline', url: 'https://www.ycombinator.com/companies/wayline/jobs/d6ugYvj-founding-product-designer' },
    { title: 'Wayline YesPress profile', url: 'https://yespress.io/wayline' },
  ],
};
