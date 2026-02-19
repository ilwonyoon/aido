import { Company } from '../types';

export const contra: Company = {
  id: 'contra',
  name: 'Contra',
  description: 'Commission-free creative network for freelancers and teams.',
  website: 'https://contra.com',
    screenshot: '/screenshots/contra-screenshot.png',
  headquarters: 'San Francisco, CA',
  region: 'sf-bay-area' as const,
  remote: 'No',

  // Visual Assets
  ogImage: 'https://contra.com/static/opengraph-assets/v2/fallbacks/contra-fallback-open-graph-image.png',

  // Multi-dimensional Tags
  aiTypes: ['automation'],
  markets: ['prosumer', 'smb'],
  category: 'creative-media' as const,

  industries: ['creative-media'],

  // Business
  stage: 'Series B',
  normalizedStage: 'series-b' as const,
  valuation: 'Unknown',
  totalFunding: '$44.5M',
  fundingHistory: [
    {
      stage: 'Series B',
      amount: '$30M',
      date: '2021-11',
    },
    {
      stage: 'Series A',
      amount: '$14.5M',
      date: '2021-02',
    },
  ],
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'Unknown',

  // Competition
  competitors: [
    {
      name: 'Upwork',
      description: 'Freelancer marketplace with commissions and fees.',
      whyTheyWin: 'Large marketplace liquidity and enterprise reach.',
    },
    {
      name: 'Fiverr',
      description: 'Freelance services marketplace.',
      whyTheyWin: 'High brand awareness and marketplace scale.',
    },
    {
      name: 'Behance',
      description: 'Creative portfolio platform and community.',
      whyTheyWin: 'Strong creative community and portfolio visibility.',
    },
  ],
  marketPosition: 'Commission-free creative network with portfolio and hiring workflows.',
  moat: [
    'Commission-free model for creators',
    'Portfolio-first network for creatives',
    'Workflow tools for hiring and collaboration',
  ],
  vsGiants: 'Competes on zero-commission and creator-first UX rather than marketplace fees.',

  // AI-Native Level
  aiNativeLevel: 'D',
  aiNativeLevelDescription: 'Creative network is not an AI-first product.',
  aiDesignChallenges: [
    'Designing trust and reputation signals',
    'Balancing creator discovery with hiring workflows',
    'Reducing friction in collaboration and payments',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Ben Huffman',
      role: 'Co-founder & CEO',
      background: 'Former music producer and freelancer; previously co-founded Ripe (acquired by Hungry in 2020).',
    },
    {
      name: 'Gajus Kuizinas',
      role: 'Co-founder & CTO',
      background: 'Technical co-founder of Contra since 2019.',
    },
  ],
  whyBuilding: 'Give creatives a commission-free way to showcase work and get hired.',
  beliefs: [
    'Creators deserve better economics',
    'Portfolios should lead hiring decisions',
    'Great UX can grow creative networks',
  ],
  designPhilosophy: 'Unknown',
  greenFlags: [
    'Clear differentiation with commission-free model',
    'Series B funding signal',
  ],
  redFlags: [
    'Marketplace dynamics are hard to balance',
    'Strong incumbent competition',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: '51-200 employees (startups.gallery)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'medium',
      tasks: [
        'Marketplace matching and discovery logic',
        'Workflow design for hiring and collaboration',
      ],
    },
    evaluation: {
      level: 'low',
      tasks: [
        'Measuring marketplace conversion and retention',
        'Feedback loops for creator success',
      ],
    },
    interface: {
      level: 'high',
      tasks: [
        'Portfolio and profile UI',
        'Project and collaboration workflows',
      ],
    },
  },
  productStage: '1→10',

  // Product & User Context
  targetAudiences: {
    primary: 'Freelance creatives and designers',
    secondary: 'Teams hiring creative talent',
  },
  userProblems: [
    'Marketplace fees reduce creator earnings',
    'Finding the right creative talent is time-consuming',
    'Portfolio presentation tools are limited',
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
      'Creator-first marketplace with design-heavy UX',
      'Opportunity to improve creative discovery',
    ],
    whyNot: [
      'Marketplace competition is intense',
      'Retention dynamics can be volatile',
    ],
    nextActions: [
      'Monitor for product design roles',
    ],
  },

  // Meta
  lastUpdated: '2026-01-28T16:20:00',
  sources: [
    { title: 'Source', url: 'https://contra.com' },
    { title: 'Source', url: 'https://www.seedtable.com/startups-contra' },
    { title: 'Source', url: 'https://startups.gallery/companies/contra' }
  ],
};
