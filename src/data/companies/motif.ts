import { Company } from '../types';

export const motif: Company = {
  id: 'motif',
  name: 'Motif',
  description:
    'Collaboration platform for the AEC industry that brings design, review, and presentation into one shared workspace with AI-assisted rendering.',
  website: 'https://www.motif.io/',
    screenshot: '/screenshots/motif-screenshot.png',
  headquarters: 'San Francisco, CA',
  remote: 'Yes',

    // OG Image
    ogImage: '/og-images/motif-og.webp',


  // Multi-dimensional Tags
  aiTypes: ['text-assistant'],
  markets: ['b2b'],
  industries: ['infrastructure', 'creative-media'],

  // Business
  stage: 'Series A',
  valuation: 'Unknown',
  totalFunding: '$46M',
  fundingHistory: [
    {
      stage: 'Seed',
      amount: 'Undisclosed',
      date: '2025-01',
      leadInvestors: ['Redpoint Ventures'],
    },
    {
      stage: 'Series A',
      amount: 'Undisclosed',
      date: '2025-01',
      leadInvestors: ['CapitalG'],
    },
  ],
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'Architects, engineers, and construction teams using Motif for collaboration.',

  // Growth & Potential
  growthMetrics: {
    stage: 'early-growth',
    revenueGrowth: 'Unknown',
    signals: [
      'Raised $46M in Seed + Series A funding (Jan 2025)',
      'Remote team with San Francisco HQ',
    ],
    tam: 'Unknown',
    marketShare: 'Unknown',
    ceiling: 'Early innings: AEC collaboration and AI rendering still modernizing.',
    tailwinds: [
      'AEC teams shifting to cloud collaboration',
      'Demand for faster design review cycles',
      'AI rendering adoption in architecture workflows',
    ],
    headwinds: [
      'Long procurement cycles in AEC',
      'Entrenched legacy tools and workflows',
      'High expectations for interoperability with existing CAD tools',
    ],
    moatType: 'technology',
    moatStrength: 'Strong if Motif becomes the default collaboration layer for AEC design teams.',
  },

  // Competition
  competitors: [
    {
      name: 'Autodesk (AEC Collaboration)',
      description: 'Legacy AEC design and collaboration tools across the Autodesk ecosystem.',
      whyTheyWin: 'Deep adoption across AEC firms and industry standards.',
    },
    {
      name: 'Procore',
      description: 'Construction management platform with collaboration workflows.',
      whyTheyWin: 'Enterprise penetration and project management suite.',
    },
    {
      name: 'Onshape',
      description: 'Cloud-based CAD and collaboration platform.',
      whyTheyWin: 'Modern cloud-native CAD workflows and ease of sharing.',
    },
  ],
  marketPosition: 'Cloud collaboration and AI rendering workspace for AEC design teams.',
  moat: [
    'AEC-focused collaboration workflows and AI rendering',
    'Live integration with existing CAD tools',
    'Founder expertise in design software',
  ],
  vsGiants: 'Focuses on a collaboration-first, browser-native experience vs legacy desktop suites.',

  // AI-Native Level
  aiNativeLevel: 'B',
  aiNativeLevelDescription:
    'AI-Core: AI-assisted rendering and workflow intelligence are core differentiators for Motif.',
  aiDesignChallenges: [
    'AI rendering controls that preserve architectural intent',
    'Real-time collaboration in complex 3D workspaces',
    'Trust and explainability for AI-generated visuals',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Amar Hanspal',
      role: 'Co-founder & CEO',
      background: 'Former Co-CEO and Chief Product Officer at Autodesk.',
    },
    {
      name: 'Brian Mathews',
      role: 'Co-founder & CTO',
      background: 'Former VP of Platform Engineering at Autodesk.',
    },
  ],
  whyBuilding:
    'Bring modern, collaborative design tools to AEC teams building the world\'s most impactful structures.',
  beliefs: [
    'Design collaboration should be real-time and browser-native',
    'AI should enhance, not replace, architectural intent',
    'Great buildings require better feedback loops',
  ],
  designPhilosophy: 'Collaboration-first design workflows with AI acceleration.',
  greenFlags: [
    'Strong founders with deep AEC software expertise',
    'Significant early funding from top-tier investors',
  ],
  redFlags: [
    'Long enterprise sales cycles in AEC',
    'High integration burden with entrenched toolchains',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: '51-200 employees (startups.gallery)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Real-time collaboration logic and versioning',
        'AI rendering workflows and guardrails',
        'Permissions and review workflows for complex teams',
      ],
    },
    evaluation: {
      level: 'medium',
      tasks: [
        'Quality signals for AI render outputs',
        'Adoption and collaboration metrics',
        'Feedback loops for design reviews',
      ],
    },
    interface: {
      level: 'high',
      tasks: [
        'Infinite canvas and 3D review surfaces',
        'Presentation and storytelling flows',
        'Browser-based collaboration UI',
      ],
    },
  },
  productStage: '1→10',

  // Product & User Context
  targetAudiences: {
    primary: 'Architects, engineers, and construction teams',
    secondary: 'AEC leadership managing design review cycles',
  },
  userProblems: [
    'Design reviews are fragmented across tools and files',
    'Collaboration across AEC teams is slow and asynchronous',
    'Rendering and presentation workflows are time-consuming',
    'Stakeholders struggle to keep designs aligned in real time',
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
      'High-impact collaboration platform for a massive industry',
      'AI-enhanced workflows with strong design leverage',
    ],
    whyNot: [
      'Enterprise sales cycles can be slow',
      'Complex integrations with legacy AEC stacks',
    ],
    nextActions: [
      'Track product updates and customer case studies',
      'Monitor design hiring and team growth',
    ],
  },

  // Meta
  lastUpdated: '2026-01-27T18:05:00',
  sources: [
    { title: 'Motif website', url: 'https://www.motif.io/' },
    { title: 'Motif collaboration', url: 'https://www.motif.io/collaboration' },
    { title: 'Motif careers', url: 'https://www.motif.io/careers' },
    { title: 'Motif funding (CBO)', url: 'https://www.constructionbusinessowner.com/news/motif-raises-46m-modernize-aec-software-industry' },
    { title: 'Motif on startups.gallery', url: 'https://startups.gallery/companies/motif' },
    { title: 'Motif jobs (Lever)', url: 'https://jobs.lever.co/motifsystems' },
  ],
};
