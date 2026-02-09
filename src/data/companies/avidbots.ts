import { Company } from '../types';

export const avidbots: Company = {
  id: 'avidbots',
  name: 'Avidbots',
  description:
    'Autonomous robotics company building AI-powered floor cleaning robots for commercial and industrial facilities.',
  website: 'https://www.avidbots.com',
  headquarters: 'Kitchener, ON, Canada',
  remote: 'No',

  // Multi-dimensional Tags
  aiTypes: ['automation', 'data-analysis'],
  markets: ['b2b', 'enterprise'],
  category: 'enterprise-ops' as const,
  industries: ['other'],

  // Business
  stage: 'Series C',
  valuation: 'Not publicly disclosed',
  totalFunding: '$107M+',
  fundingHistory: [
    {
      stage: 'Series C',
      amount: '$70M',
      date: '2021-11',
      leadInvestors: ['Ontario Teachers’ Pension Plan Board'],
    },
  ],
  revenue: 'Not publicly disclosed',
  growth: 'Not publicly disclosed',
  runway: 'Not publicly disclosed',
  customers: 'Commercial and industrial facilities including retail, warehouses, and airports.',

  // Competition
  competitors: [
    {
      name: 'Brain Corp',
      description: 'Autonomous robotics software for floor-cleaning machines.',
      whyTheyWin: 'Large installed base via OEM partnerships.',
    },
    {
      name: 'SoftBank Robotics (Whiz)',
      description: 'Autonomous vacuum robot for commercial cleaning.',
      whyTheyWin: 'Distribution through SoftBank ecosystem.',
    },
    {
      name: 'Tennant Company (robotic scrubbers)',
      description: 'Industrial cleaning equipment with autonomous options.',
      whyTheyWin: 'Established enterprise customer base.',
    },
  ],
  marketPosition: 'Autonomous floor cleaning robots for commercial operations.',
  moat: [
    'Proprietary autonomy stack for complex facilities',
    'Enterprise-focused deployment and support model',
    'Growing fleet data to improve navigation performance',
  ],
  vsGiants: 'Competes by delivering full-stack autonomy and enterprise-grade service versus hardware-only incumbents.',

  // AI-Native Level
  aiNativeLevel: 'B',
  aiNativeLevelDescription:
    'AI is core to navigation, autonomy, and fleet management of cleaning robots.',
  aiDesignChallenges: [
    'Human-robot interaction in busy facilities',
    'Transparent reporting of robot performance',
    'Fleet management UX for facility teams',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Faizan Sheikh',
      role: 'Co-founder',
      background: 'Co-founded Avidbots to automate commercial floor cleaning with autonomous robots.',
    },
    {
      name: 'Pablo Molina',
      role: 'Co-founder & CTO',
      background: 'Robotics engineer and co-founder leading Avidbots autonomy systems.',
    },
  ],
  whyBuilding:
    'Reduce the cost and labor burden of commercial cleaning through autonomous robotics.',
  beliefs: [
    'Robotics can solve labor shortages in facilities',
    'Autonomy must be safe and dependable in public spaces',
    'Operational analytics improve cleaning outcomes',
  ],
  greenFlags: ['Large market with labor pressure', 'Significant funding for scaling'],
  redFlags: ['Hardware deployment complexity', 'Competition from large robotics vendors'],

  // Design Opportunity
  designTeam: {
    teamSize: 'Not publicly disclosed',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Robot navigation and safety constraints',
        'Autonomy edge-case handling',
        'Workflow setup for facility routes',
      ],
    },
    evaluation: {
      level: 'high',
      tasks: [
        'Fleet performance analytics',
        'Cleaning quality metrics',
        'Incident review and escalation flows',
      ],
    },
    interface: {
      level: 'medium',
      tasks: [
        'Fleet management dashboards',
        'Operator alerts and notifications',
        'Customer reporting tools',
      ],
    },
  },
  productStage: '10→100',

  // User Context
  targetAudiences: {
    primary: 'Facility operations and cleaning teams',
    secondary: 'Enterprise procurement and robotics program managers',
  },
  userProblems: [
    'Cleaning labor is expensive and difficult to staff',
    'Facility teams lack real-time visibility into cleaning performance',
    'Manual cleaning is inconsistent across large facilities',
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
    fitScore: 6,
    whyJoin: ['Robotics autonomy UX challenges', 'Enterprise operations impact'],
    whyNot: ['Hardware-heavy deployments', 'Competitive market'],
    nextActions: ['Track hiring and new product releases'],
  },

  // Meta
  lastUpdated: '2026-02-06T12:00:00',
  sources: [
    { title: 'Source', url: 'https://www.avidbots.com' },
    { title: 'Source', url: 'https://www.avidbots.com/about/' },
    { title: 'Source', url: 'https://uwaterloo.ca/news/avidbots-closes-us70-million-series-c-investment' },
    { title: 'Source', url: 'https://www.forbes.com/profile/avidbots/' }
  ],
};
