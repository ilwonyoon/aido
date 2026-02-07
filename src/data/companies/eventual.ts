import { Company } from '../types';

export const eventual: Company = {
  id: 'eventual',
  name: 'Eventual',
  description: 'Creators of Daft, focused on building tools for developers.',
  website: 'https://www.eventual.ai',
    screenshot: '/screenshots/eventual-screenshot.png',
  headquarters: 'San Francisco, CA',
  remote: 'No',

    // OG Image
    ogImage: '/og-images/eventual-og.webp',


  // Multi-dimensional Tags
  aiTypes: ['code-assistant'],
  markets: ['prosumer'],
  category: 'developer-tools' as const,

  industries: ['developer-tools'],

  // Business
  stage: 'Series A',
  valuation: 'Unknown',
  totalFunding: '$27.5M',
  fundingHistory: [
    {
      stage: 'Series A',
      amount: '$27.5M',
      date: '2025-04',
    },
  ],
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'Unknown',

  // Competition
  competitors: [
    {
      name: 'Temporal',
      description: 'Workflow orchestration platform for developers.',
      whyTheyWin: 'Strong developer adoption and mature product.',
    },
    {
      name: 'Prefect',
      description: 'Data workflow orchestration and automation.',
      whyTheyWin: 'Broad data engineering community and tooling.',
    },
    {
      name: 'Dagster',
      description: 'Data orchestration platform for data teams.',
      whyTheyWin: 'Strong ecosystem and modular data workflows.',
    },
  ],
  marketPosition: 'Developer tooling company behind Daft.',
  moat: [
    'Developer-first product focus',
    'Open-source community leverage via Daft',
    'Workflow tooling specialization',
  ],
  vsGiants: 'Competes on developer experience and open tooling rather than enterprise suites.',

  // AI-Native Level
  aiNativeLevel: 'C',
  aiNativeLevelDescription: 'AI may enhance workflows but is not the only product focus.',
  aiDesignChallenges: [
    'Designing developer workflows for data and AI pipelines',
    'Balancing flexibility with usability',
    'Communicating system behavior and failures clearly',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Sammy Sidhu',
      role: 'Co-founder & CEO',
      background: 'Background in HPC and deep learning; previously worked on high-frequency trading, medical AI at Berkeley, and self-driving at DeepScale (acquired by Tesla) and Lyft Level 5 (acquired by Toyota).',
    },
    {
      name: 'Jay Chia',
      role: 'Co-founder',
      background: 'Cornell graduate; worked in ML infrastructure at Freenome (biotech) and Lyft L5 (autonomous driving).',
    },
  ],
  whyBuilding: 'Build developer tools that make complex workflows easier to manage.',
  beliefs: [
    'Developers need better tools for data workflows',
    'Open-source ecosystems accelerate adoption',
    'Great DX drives long-term product loyalty',
  ],
  designPhilosophy: 'Unknown',
  greenFlags: [
    'Open-source community momentum',
    'Series A funding suggests early traction',
  ],
  redFlags: [
    'Competitive developer tooling market',
    'Adoption depends on deep technical differentiation',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: '11-50 employees (startups.gallery)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'medium',
      tasks: [
        'Workflow building and configuration logic',
        'Developer experience for orchestration flows',
      ],
    },
    evaluation: {
      level: 'low',
      tasks: [
        'Telemetry for workflow success and failure',
        'Feedback loops on developer usability',
      ],
    },
    interface: {
      level: 'medium',
      tasks: [
        'Developer dashboards and CLI UX',
        'Documentation and onboarding flows',
      ],
    },
  },
  productStage: '1→10',

  // Product & User Context
  targetAudiences: {
    primary: 'Developers building data workflows',
    secondary: 'Data engineers and ML engineers',
  },
  userProblems: [
    'Complex workflows are hard to orchestrate reliably',
    'Tooling lacks clear visibility into pipeline status',
    'Developer onboarding for workflow tools is slow',
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
    fitScore: 4,
    whyJoin: [
      'Developer tooling with open-source roots',
      'Opportunity to design complex technical UX',
    ],
    whyNot: [
      'Highly competitive infra tooling market',
      'Adoption depends on technical differentiation',
    ],
    nextActions: [
      'Monitor for product design roles and OSS traction',
    ],
  },

  // Meta
  lastUpdated: '2026-01-28T11:45:15',
  sources: [
    { title: 'Eventual', url: 'https://www.eventual.ai' },
    { title: 'Eventual YC profile', url: 'https://www.ycombinator.com/companies/eventual' },
    { title: 'Eventual on startups.gallery', url: 'https://startups.gallery/companies/eventual' },
  ],
};
