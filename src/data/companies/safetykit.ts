import { Company } from '../types';

export const safetykit: Company = {
  id: 'safetykit',
  name: 'SafetyKit',
  description: 'AI agent platform for trust and safety operations.',
  website: 'https://www.safetykit.com',
    screenshot: '/screenshots/safetykit-screenshot.png',
  headquarters: 'San Francisco, CA',
  remote: 'No',

    // OG Image
    ogImage: '/og-images/safetykit-og.webp',


  // Multi-dimensional Tags
  aiTypes: ['text-assistant'],
  markets: ['b2b'],
  category: 'productivity' as const,

  industries: ['infrastructure'],

  // Business
  stage: 'Series A',
  valuation: 'Unknown',
  totalFunding: '$27M',
  fundingHistory: [
    {
      stage: 'Series A',
      amount: '$27M',
      date: '2025-04',
      leadInvestors: ['Ribbit Capital', 'First Round Capital', 'Y Combinator'],
    },
  ],
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'Unknown',

  // Competition
  competitors: [
    {
      name: 'Hive',
      description: 'Content moderation and trust & safety platform.',
      whyTheyWin: 'Large moderation dataset and enterprise adoption.',
    },
    {
      name: 'ActiveFence',
      description: 'Trust & safety operations platform for online platforms.',
      whyTheyWin: 'Broad platform coverage and enterprise relationships.',
    },
    {
      name: 'Sift',
      description: 'Fraud prevention and digital trust tooling.',
      whyTheyWin: 'Strong fraud detection and enterprise integrations.',
    },
  ],
  marketPosition: 'AI agents that help trust and safety teams operate more efficiently.',
  moat: [
    'AI-first trust & safety workflows',
    'Operational tooling for platform safety teams',
    'Focus on automation of repetitive review tasks',
  ],
  vsGiants: 'Competes on AI-native automation rather than legacy moderation tools.',

  // AI-Native Level
  aiNativeLevel: 'B',
  aiNativeLevelDescription: 'AI is the core differentiator for trust and safety automation.',
  aiDesignChallenges: [
    'Designing human-in-the-loop review with AI agents',
    'Transparency for model decisions and escalation',
    'Handling edge cases and policy interpretation',
  ],

  // Founders & Vision
  founders: [
    { name: 'David Graunke', role: 'Co-Founder', background: 'Led engineering for risk reviews at Stripe for fraud, credit, content moderation, and financial crimes. YC S23.' },
    { name: 'Steven Guichard', role: 'Co-Founder', background: 'Former first engineer and later CEO at Carbic. YC S23.' },
    { name: 'Alex Rosenblatt', role: 'Co-Founder', background: 'Led Trust & Safety automation at Airbnb and Stripe. Focus on marketplace risk and offline harm.' },
  ],
  whyBuilding: 'Enable trust and safety teams to scale with AI agents.',
  beliefs: [
    'Safety operations need better automation',
    'Human oversight is critical for sensitive decisions',
    'AI agents can remove repetitive work from review teams',
  ],
  designPhilosophy: 'Unknown',
  greenFlags: [
    'Clear pain point for platform safety teams',
    'Series A funding signal',
  ],
  redFlags: [
    'Trust & safety requires high accuracy',
    'Regulatory and policy risk across platforms',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: '11-50 employees (startups.gallery)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Agent decision logic and escalation rules',
        'Policy enforcement workflows',
      ],
    },
    evaluation: {
      level: 'high',
      tasks: [
        'Measuring precision and recall of moderation outcomes',
        'Feedback loops for policy accuracy',
      ],
    },
    interface: {
      level: 'medium',
      tasks: [
        'Review dashboards and queue management',
        'Case details and evidence UIs',
      ],
    },
  },
  productStage: '1→10',

  // Product & User Context
  targetAudiences: {
    primary: 'Trust & safety operations teams',
    secondary: 'Risk and policy teams at marketplaces',
  },
  userProblems: [
    'Content review is costly and slow to scale',
    'Policy enforcement is inconsistent across teams',
    'Manual case review creates backlog and delays',
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
      'AI-driven trust & safety workflows',
      'Mission-critical product impact',
    ],
    whyNot: [
      'High scrutiny and risk for safety tools',
      'Potential policy volatility across platforms',
    ],
    nextActions: [
      'Monitor for product design or design leadership roles',
    ],
  },

  // Meta
  lastUpdated: '2026-01-28T11:45:15',
  sources: [
    { title: 'Source', url: 'https://www.safetykit.com' },
    { title: 'Source', url: 'https://www.safetykit.com/jobs' },
    { title: 'Source', url: 'https://www.safetykit.com/post/seriesa' },
    { title: 'Source', url: 'https://startups.gallery/companies/safetykit' }
  ],
};
