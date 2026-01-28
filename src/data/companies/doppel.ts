import { Company } from '../types';

export const doppel: Company = {
  id: 'doppel',
  name: 'Doppel',
  description: 'AI-native digital risk protection for identifying and stopping threats.',
  website: 'https://www.doppel.com',
  headquarters: 'San Francisco, CA',
  remote: 'Hybrid',

  // Business
  stage: 'Series C',
  valuation: 'Unknown',
  totalFunding: 'Unknown',
  fundingHistory: [],
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'Unknown',

  // Competition
  competitors: [
    {
      name: 'ZeroFox',
      description: 'External attack surface and digital risk protection platform.',
      whyTheyWin: 'Enterprise footprint and brand protection focus.',
    },
    {
      name: 'Recorded Future',
      description: 'Threat intelligence platform for enterprise security teams.',
      whyTheyWin: 'Large data network and intelligence coverage.',
    },
    {
      name: 'Darktrace',
      description: 'AI-driven cybersecurity detection and response.',
      whyTheyWin: 'Broad security suite and installed base.',
    },
  ],
  marketPosition: 'AI-native platform focused on external digital risk and brand protection.',
  moat: [
    'AI-driven detection of impersonation and phishing risks',
    'Rapid response workflows for external threat mitigation',
    'Security team workflows optimized for brand risk',
  ],
  vsGiants: 'Competes with specialized AI threat detection rather than broad security suites.',

  // AI-Native Level
  aiNativeLevel: 'B',
  aiNativeLevelDescription: 'AI is the core differentiator for risk detection and response.',
  aiDesignChallenges: [
    'Balancing alert volume with actionable prioritization',
    'Designing workflows for rapid takedown and response',
    'Communicating model confidence and evidence trails',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Unknown',
      role: 'Founder',
      background: 'Unknown.',
    },
  ],
  whyBuilding: 'Help security teams identify and stop digital risk faster.',
  beliefs: [
    'External threats need continuous monitoring',
    'AI can surface the highest-risk incidents quickly',
    'Security teams need clear evidence and action paths',
  ],
  designPhilosophy: 'Unknown',
  greenFlags: [
    'Clear cybersecurity pain point with AI focus',
    'Series C stage indicates enterprise traction',
  ],
  redFlags: [
    'Crowded cybersecurity market',
    'High bar for accuracy and false-positive reduction',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: 'Unknown',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Threat detection logic and alert routing',
        'Case management and incident workflows',
      ],
    },
    evaluation: {
      level: 'medium',
      tasks: [
        'Tuning alert precision and recall',
        'Measuring response effectiveness',
      ],
    },
    interface: {
      level: 'medium',
      tasks: [
        'Security dashboards and alert triage UI',
        'Evidence and timeline visualization',
      ],
    },
  },
  productStage: '1→10',

  // Product & User Context
  targetAudiences: {
    primary: 'Security and brand protection teams',
    secondary: 'Fraud and risk management teams',
  },
  userProblems: [
    'External threats are difficult to monitor continuously',
    'Security teams receive too many low-signal alerts',
    'Takedown and response workflows are fragmented',
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
      'AI-first cybersecurity workflows',
      'Opportunity to design threat response UX',
    ],
    whyNot: [
      'High-risk domain with strict accuracy demands',
      'Competitive enterprise security market',
    ],
    nextActions: [
      'Monitor careers for product design leadership roles',
    ],
  },

  // Meta
  lastUpdated: '2026-01-28T11:33:21',
  sources: [
    { title: 'Doppel', url: 'https://www.doppel.com' },
    { title: 'Doppel Careers', url: 'https://www.doppel.com/careers' },
    { title: 'Doppel on startups.gallery', url: 'https://startups.gallery/companies/doppel' },
  ],
};
