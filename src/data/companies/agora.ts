import { Company } from '../types';

export const agora: Company = {
  id: 'agora',
  name: 'Agora',
  description: 'Governance platform for onchain communities and DAOs.',
  website: 'https://www.agora.xyz',
  headquarters: 'San Francisco, CA',
  remote: 'Yes',

  // Visual Assets
  ogImage: 'https://agora.xyz/assets/agora-og-image.jpg',
  screenshot: 'https://iad.microlink.io/kxsJzG7XHb-LGaoL9NLfmAlRgptVmGvDg8mqZ-O1Ik8aGkwG3-7Us-8svD7Fu38MtnXS4tpCdNHXeNWn8oRM_g.png',


  // Multi-dimensional Tags
  aiTypes: ['automation'],
  markets: ['b2b'],
  category: 'enterprise-ops' as const,

  industries: ['other'],

  // Business
  stage: 'Seed',
  valuation: 'Unknown',
  totalFunding: '$5M',
  fundingHistory: [],
  revenue: 'Unknown',
  growth: 'early-growth trajectory (public % not disclosed)',
  runway: 'Unknown',
  customers: 'Onchain organizations and governance communities',

  // Competition
  competitors: [
    {
      name: 'Snapshot',
      description: 'Off-chain governance and voting tooling for DAOs.',
      whyTheyWin: 'Large installed base and ecosystem integrations.',
    },
    {
      name: 'Tally',
      description: 'Governance infrastructure for token-based voting.',
      whyTheyWin: 'Deep integrations with governance frameworks.',
    },
    {
      name: 'Boardroom',
      description: 'Governance analytics and tooling for DAOs.',
      whyTheyWin: 'Analytics focus and multi-DAO support.',
    },
  ],
  marketPosition: 'Governance tooling focused on onchain community operations.',
  moat: [
    'Governance-first product focus',
    'Deep understanding of DAO workflows',
    'Network effects from community adoption',
  ],
  vsGiants: 'Competes on community-first governance UX rather than general-purpose platforms.',

  // AI-native analysis
  aiNativeLevel: 'D',
  aiNativeLevelDescription: 'AI is not core to the product; governance workflows drive value.',
  aiDesignChallenges: [
    'Reducing governance friction for community members',
    'Building trust in voting and proposal systems',
    'Balancing transparency with usability',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Founding team (verification pending)',
      role: 'Founder',
      background: 'Founding team not listed in sources reviewed.',
    },
  ],
  whyBuilding: 'Onchain communities need better tools to coordinate and govern at scale.',
  beliefs: [
    'Governance UX matters for community participation',
    'Transparent onchain systems can scale global coordination',
    'Operational tooling is as important as voting mechanics',
  ],
  greenFlags: [
    'Seed funding announced on startups.gallery',
    'Clear positioning in onchain governance',
  ],
  redFlags: [
    'Web3 market volatility',
    'Fragmented governance tooling landscape',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: '11-50 employees (startups.gallery)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'medium',
      tasks: ['Governance workflow automation', 'Proposal lifecycle logic'],
    },
    evaluation: {
      level: 'medium',
      tasks: ['Participation analytics', 'Proposal outcome tracking'],
    },
    interface: {
      level: 'high',
      tasks: ['Voting and proposal UI', 'Community dashboards'],
    },
  },
  productStage: '1→10',

  // User Context
  targetAudiences: {
    primary: 'DAO operators and governance contributors',
    secondary: 'Token holders participating in community votes',
  },
  userProblems: [
    'Governance workflows are fragmented across tools',
    'Participation drops without clear UX and incentives',
    'Onchain proposals are hard to track end to end',
  ],

  // Open Roles
  openRoles: [],

  // Designer Links
  designerLinks: [],

  // Culture Insights
  cultureInsights: [],

  // My Tracking
  tracking: {
    status: 'researching',
    fitScore: 4,
    whyJoin: ['Community coordination tooling', 'Governance UX challenges'],
    whyNot: ['Web3 market volatility', 'Unclear AI differentiation'],
    nextActions: ['Monitor for design openings'],
  },

  // Growth Metrics
  growthMetrics: {
    stage: 'early-growth',
    revenueGrowth: 'Unknown',
    userGrowth: 'Unknown',
    signals: ['$5M seed round'],
    tam: 'Unknown',
    marketShare: 'Unknown',
    ceiling: 'Onchain governance tooling is still early-stage.',
    tailwinds: ['Growing onchain communities', 'Governance tooling demand'],
    headwinds: ['Market downturns in crypto', 'Regulatory uncertainty'],
    moatType: 'network-effects',
    moatStrength: 'Community adoption creates platform stickiness.',
  },

  // Meta
  lastUpdated: '2026-01-28T17:10:00',
  sources: [
    { title: 'Agora', url: 'https://www.agora.xyz' },
    { title: 'Agora on startups.gallery', url: 'https://startups.gallery/companies/agora' },
  ],
};
