import { Company } from '../types';

export const trunk: Company = {
  id: 'trunk',
  name: 'Trunk',
  description: 'Redefining writing software at scale.',
  website: 'https://trunk.io',
  screenshot: '/screenshots/trunk-screenshot.png',
  headquarters: 'San Francisco, CA',
  remote: 'Hybrid',

  // Visual Assets
  ogImage: 'https://trunk.io/og.png',

  // Multi-dimensional Tags
  aiTypes: ['automation'],
  markets: ['b2b'],
  category: 'developer-tools' as const,

  industries: ['developer-tools'],

  // Business
  stage: 'Series A',
  valuation: 'Unknown',
  totalFunding: '$25M',
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'Engineering teams managing large codebases.',

  // Competition
  competitors: [
    {
      name: 'GitHub Copilot',
      description: 'AI coding assistant.',
      whyTheyWin: 'Distribution through GitHub and Microsoft.',
    },
    {
      name: 'Sourcegraph Cody',
      description: 'AI coding assistant and code search.',
      whyTheyWin: 'Deep code search and enterprise positioning.',
    },
    {
      name: 'JetBrains IDEs',
      description: 'Integrated developer environments.',
      whyTheyWin: 'Strong developer ecosystem and tooling depth.',
    },
  ],
  marketPosition: 'Developer tooling focused on writing software at scale.',
  moat: [
    'Developer workflow integration',
    'Scale-focused tooling for large codebases',
    'Potential enterprise adoption',
  ],
  vsGiants: 'Competes by focusing on scale and workflow integration for large engineering teams.',

  // AI-native analysis
  aiNativeLevel: 'C',
  aiNativeLevelDescription: 'AI may enhance developer workflows but is not the sole product.',
  aiDesignChallenges: [
    'Integrating AI into complex developer workflows',
    'Maintaining speed and reliability at scale',
    'Building trust in automated code changes',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'David Apirian',
      role: 'Co-founder & Co-CEO',
      background: 'Previously at Uber, most recently as head of autonomy systems and simulation platform at Uber self-driving unit.',
    },
    {
      name: 'Eli Schleifer',
      role: 'Co-founder & Co-CEO',
      background: 'Senior and staff engineer background from Uber and Google. Co-founded Trunk in 2021, backed by a16z.',
    },
  ],
  whyBuilding: 'Large teams struggle to scale software writing and code maintenance.',
  beliefs: [
    'Developer workflows should scale without friction',
    'Automation can reduce repetitive engineering work',
    'Tooling should be integrated into daily dev flows',
  ],
  greenFlags: [
    'Series A stage indicates traction',
    'Clear focus on developer productivity',
  ],
  redFlags: [
    'Competing with large devtool incumbents',
    'High bar for performance and reliability',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: '11-50 employees (startups.gallery)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: ['Automation rules for code workflows', 'Policy and compliance UI'],
    },
    evaluation: {
      level: 'medium',
      tasks: ['Developer productivity metrics', 'Quality dashboards'],
    },
    interface: {
      level: 'medium',
      tasks: ['Workflow configuration', 'Review and approval UI'],
    },
  },
  productStage: '1→10',

  // User Context
  targetAudiences: {
    primary: 'Engineering teams in mid-to-large orgs',
    secondary: 'Platform engineering and DevOps teams',
  },
  userProblems: [
    'Scaling code quality across large teams is hard',
    'Automation pipelines are fragmented',
    'Developer productivity tooling is inconsistent',
  ],

  // Designer Links
  designerLinks: [],

  // Open Roles
  openRoles: [],

  cultureInsights: [],

  // My Tracking
  tracking: {
    status: 'researching',
    fitScore: 6,
    whyJoin: ['Developer tools with workflow complexity', 'Automation UX challenges'],
    whyNot: ['Competitive devtools market'],
    nextActions: ['Monitor for design openings'],
  },

  // Growth Metrics
  growthMetrics: {
    stage: 'high-growth',
    revenueGrowth: 'Unknown',
    userGrowth: 'Unknown',
    signals: ['Series A stage'],
    tam: 'Unknown',
    marketShare: 'Unknown',
    ceiling: 'Developer tooling market continues expanding with AI.',
    tailwinds: ['Dev productivity focus', 'AI-assisted coding adoption'],
    headwinds: ['Incumbent IDE ecosystems', 'Open-source competition'],
    moatType: 'technology',
    moatStrength: 'Focus on scale-first tooling.',
  },

  // Meta
  lastUpdated: '2026-01-30T12:45:00',
  sources: [
    { title: 'Source', url: 'https://trunk.io' },
    { title: 'Source', url: 'https://startups.gallery/companies/trunk' }
  ],
};
