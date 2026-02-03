import { Company } from '../types';

export const firefliesAi: Company = {
  id: 'fireflies-ai',
  name: 'Fireflies.ai',
  description: 'Meeting intelligence assistant for transcription, summaries, and team knowledge workflows.',
  website: 'https://fireflies.ai',
  headquarters: 'San Francisco, CA',
  remote: 'Yes',

    // OG Image
    ogImage: '/og-images/fireflies-ai-og.webp',

  aiTypes: ['conversation-ai','text-assistant'],
  markets: ['smb','b2b'],
  industries: ['productivity'],

  stage: 'Growth-stage private',
  valuation: 'Private company; valuation details are not consistently published.',
  totalFunding: 'Public sources indicate venture-backed growth rounds.',
  revenue: 'Commercial traction is visible, but exact revenue is not publicly reported with consistent detail.',
  growth: 'Growth trajectory appears positive based on product expansion and hiring activity.',
  runway: 'Cash runway is not explicitly reported; estimate depends on latest financing and burn assumptions.',
  customers: 'Business and enterprise teams using the platform for core workflows.',

  competitors: [
    {
      name: 'Incumbent platform alternatives',
      description: 'Established software vendors and adjacent AI-native startups in the same workflow category.',
      whyTheyWin: 'Distribution scale, mature integrations, and procurement familiarity.',
    },
    {
      name: 'Vertical AI startups',
      description: 'Category-specific startups solving narrower but deeper workflow problems.',
      whyTheyWin: 'Focused UX and faster iteration in one domain.',
    },
    {
      name: 'In-house tooling',
      description: 'Custom internal workflows built by larger organizations.',
      whyTheyWin: 'Control over stack and data boundaries for internal teams.',
    },
  ],
  marketPosition: 'AI-enabled workflow software with emphasis on operational outcomes and measurable productivity gains.',
  moat: [
    'Workflow-specific data feedback loops',
    'Domain integrations embedded in day-to-day operations',
    'Execution speed on product iteration',
  ],
  vsGiants: 'Competes through workflow depth and faster product iteration rather than broad horizontal suite coverage.',

  aiNativeLevel: 'B',
  aiNativeLevelDescription: 'AI is a core differentiator layered into a production workflow with clear business outcomes.',
  aiDesignChallenges: [
    'Designing trustworthy AI recommendations with clear confidence signals',
    'Balancing automation speed with human approval and controls',
    'Supporting expert and non-expert users in the same workflow surface',
  ],

  founders: [
    {
      name: 'Founding team',
      role: 'Founder(s)',
      background: 'Founders are experienced operators in the product category, with details varying by source.',
    },
  ],
  whyBuilding: 'The company is building to replace fragmented manual workflows with AI-assisted systems that improve speed and quality.',
  beliefs: [
    'Automation should remove repetitive operational work',
    'Human oversight remains critical for high-stakes decisions',
    'Product value should be measurable in workflow outcomes',
  ],
  designPhilosophy: 'Build reliable, explainable workflows where AI assistance is visible, controllable, and outcome-focused.',
  greenFlags: [
    'Clear category pain point and measurable ROI narrative',
    'Sustained product and go-to-market momentum',
    'Active hiring and ecosystem integration signals',
  ],
  redFlags: [
    'Intense competition from incumbents and fast followers',
    'Execution risk around model quality and enterprise reliability requirements',
    'Potential pressure on margins as capabilities commoditize',
  ],

  designTeam: {
    teamSize: 'Design team size not publicly enumerated in a stable source.',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Define automation boundaries and handoff rules',
        'Design confidence, fallback, and recovery states',
        'Instrument policy and permissions for enterprise workflows',
      ],
    },
    evaluation: {
      level: 'medium',
      tasks: [
        'Track task success and quality drift over time',
        'Capture feedback loops for model and UX improvement',
        'Report business impact metrics to operators and admins',
      ],
    },
    interface: {
      level: 'high',
      tasks: [
        'Design dense operational dashboards and activity flows',
        'Improve onboarding for team-based deployment',
        'Support multi-role collaboration in shared workspaces',
      ],
    },
  },
  productStage: '1→10',

  targetAudiences: {
    primary: 'Operational teams adopting AI-assisted workflows in production.',
    secondary: 'Leaders responsible for process quality, compliance, and productivity metrics.',
  },
  userProblems: [
    'Manual workflows are slow and error-prone at scale',
    'Teams lack consistent visibility into quality and operational bottlenecks',
    'Existing software requires excessive handoffs across disconnected tools',
    'Organizations need AI help without sacrificing control and accountability',
  ],

  designerLinks: [],
  openRoles: [],
  cultureInsights: [],

  tracking: {
    status: 'researching',
    fitScore: 6,
    whyJoin: [
      'Meaningful AI workflow design challenges with measurable user impact',
      'Opportunity to shape product foundations during active scaling',
    ],
    whyNot: [
      'Public operating data is incomplete for risk assessment',
      'Competitive pressure can constrain experimentation windows',
    ],
    nextActions: [
      'Re-run Product Design role scrape on official careers/ATS pages',
      'Refresh funding and HQ fields from two-source cross-check in next batch',
    ],
  },

  growthMetrics: {
    stage: 'high-growth',
    revenueGrowth: 'Directional growth is visible, but exact revenue deltas are not disclosed consistently.',
    userGrowth: 'User and customer growth appears positive from market activity and hiring signals.',
    signals: [
      'Continued product expansion across adjacent workflows',
      'Hiring activity across product and go-to-market functions',
      'Sustained category demand for AI-assisted operations software',
    ],
    tam: 'Large multi-billion-dollar software market tied to workflow digitization and AI adoption.',
    marketShare: 'Current share appears small relative to category size, leaving expansion headroom.',
    ceiling: 'Upside depends on enterprise expansion, retention quality, and platform defensibility.',
    tailwinds: [
      'Rising enterprise demand for automation with measurable ROI',
      'Maturing model capabilities for domain-specific workflows',
      'Broader acceptance of AI copilots in production software',
    ],
    headwinds: [
      'Commoditization risk for baseline AI features',
      'Procurement and security cycles can slow enterprise adoption',
      'High reliability expectations in operational use cases',
    ],
    moatType: 'platform-ecosystem',
    moatStrength: 'Moderate; durability depends on integration depth and workflow data loops.',
  },

  lastUpdated: '2026-02-03T12:30:00',
  sources: [
    { title: 'Fireflies.ai website', url: 'https://fireflies.ai' },
    { title: 'Fireflies.ai Wellfound profile', url: 'https://wellfound.com/company/fireflies-ai' },
    { title: 'Fireflies.ai Crunchbase profile', url: 'https://www.crunchbase.com/organization/fireflies-ai' },
  ],
};
