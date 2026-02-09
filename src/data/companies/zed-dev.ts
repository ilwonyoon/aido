import { Company } from '../types';

export const zedDev: Company = {
  id: 'zed-dev',
  name: 'Zed',
  description: 'Multiplayer code editor.',
  website: 'https://zed.dev',
  screenshot: '/screenshots/zed-dev-screenshot.png',
  headquarters: 'San Francisco, CA',
  remote: 'Yes',

  // Visual Assets
  ogImage: 'https://zed.dev/img/home/og.webp',

  // Multi-dimensional Tags
  aiTypes: ['code-assistant'],
  markets: ['prosumer', 'b2b'],
  category: 'developer-tools' as const,

  industries: ['developer-tools'],

  // Business
  stage: 'Series B',
  valuation: 'Unknown',
  totalFunding: '$32M',
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'Developers and engineering teams.',

  // Competition
  competitors: [
    {
      name: 'VS Code',
      description: 'Popular open-source code editor by Microsoft.',
      whyTheyWin: 'Large ecosystem and extension marketplace.',
    },
    {
      name: 'Cursor',
      description: 'AI-first code editor.',
      whyTheyWin: 'Strong AI-native workflows and adoption.',
    },
    {
      name: 'JetBrains Fleet',
      description: 'Collaborative code editor by JetBrains.',
      whyTheyWin: 'Deep IDE expertise and ecosystem trust.',
    },
  ],
  marketPosition: 'Real-time multiplayer code editor with performance focus.',
  moat: [
    'Low-latency collaboration',
    'Developer-first performance and UX',
    'Modern code editor architecture',
  ],
  vsGiants: 'Competes by shipping a faster, multiplayer-native editing experience.',

  // AI-native analysis
  aiNativeLevel: 'B',
  aiNativeLevelDescription: 'AI-enhanced developer tooling with collaboration as core.',
  aiDesignChallenges: [
    'Blending AI assistance with collaborative editing',
    'Maintaining editor performance with AI features',
    'Designing trust in AI-generated edits',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Nathan Sobo',
      role: 'Co-founder & CEO',
      background: 'Previously created Atom text editor and Electron at GitHub. Describes Zed as "a collaborative platform disguised as a world-class code editor."',
    },
    {
      name: 'Max Brunsfeld',
      role: 'Co-founder',
      background: 'Co-created Atom and Tree-sitter. Building the high-performance multiplayer editing experience at Zed.',
    },
    {
      name: 'Antonio Scandurra',
      role: 'Co-founder',
      background: 'Co-created Atom at GitHub. Building the core editor architecture for Zed.',
    },
  ],
  whyBuilding: 'Developers need a fast, multiplayer editor with modern collaboration.',
  beliefs: [
    'Collaboration should be native to code editors',
    'Performance matters for developer focus',
    'AI can augment, not replace, developer workflows',
  ],
  greenFlags: [
    'Series B stage suggests strong adoption',
    'Clear developer-focused differentiation',
  ],
  redFlags: [
    'Highly competitive editor market',
    'Competing against platform incumbents',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: '11-50 employees (startups.gallery)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'medium',
      tasks: ['Collaboration logic and presence', 'Conflict resolution UX'],
    },
    evaluation: {
      level: 'medium',
      tasks: ['AI assistance evaluation', 'Usage analytics and feedback'],
    },
    interface: {
      level: 'high',
      tasks: ['Editor UI', 'Collaboration surfaces', 'Command palette workflows'],
    },
  },
  productStage: '10→100',

  // User Context
  targetAudiences: {
    primary: 'Developers collaborating on codebases',
    secondary: 'Engineering teams adopting AI tooling',
  },
  userProblems: [
    'Real-time collaboration is clunky in legacy editors',
    'AI coding help lacks context and trust',
    'Editor performance degrades with heavy tooling',
  ],

  // Designer Links
  designerLinks: [],

  // Open Roles
  openRoles: [
    {
      title: 'Product Designer',
      location: 'Remote (US/EU time zones) or Boulder, CO',
      type: 'full-time',
      url: 'https://zed.dev/jobs/designer-who-codes',
      aboutRole: 'Design the next-generation developer experience and editor UI.',
      responsibilities: [
        'Own product design across core editor experiences',
        'Collaborate closely with engineering and product',
        'Prototype and iterate on interaction details',
      ],
      requirements: [
        'Strong product design craft and attention to detail',
        'Comfort working in a highly technical product',
        'Ability to collaborate deeply with engineers',
      ],
      preferred: [
        'Experience with developer tools',
        'Ability to read or write code',
      ],
      whyInteresting: 'Core design role at a fast-moving developer tools company.',
    },
  ],

  cultureInsights: [],

  // My Tracking
  tracking: {
    status: 'researching',
    fitScore: 7,
    whyJoin: ['High-leverage design impact in devtools', 'AI + collaboration challenge'],
    whyNot: ['Competing in a crowded editor market'],
    nextActions: ['Evaluate product to understand design maturity'],
  },

  // Growth Metrics
  growthMetrics: {
    stage: 'high-growth',
    revenueGrowth: 'Unknown',
    userGrowth: 'Unknown',
    signals: ['Series B stage', 'Hiring design role'],
    tam: 'Unknown',
    marketShare: 'Unknown',
    ceiling: 'Developer tools adoption continues to grow with AI workflows.',
    tailwinds: ['Developer productivity focus', 'AI coding adoption'],
    headwinds: ['Incumbent platforms and ecosystems'],
    moatType: 'technology',
    moatStrength: 'Performance + multiplayer focus.',
  },

  // Meta
  lastUpdated: '2026-01-30T12:25:00',
  sources: [
    { title: 'Source', url: 'https://zed.dev' },
    { title: 'Source', url: 'https://zed.dev/jobs/designer-who-codes' },
    { title: 'Source', url: 'https://startups.gallery/companies/zed-dev' }
  ],
};
