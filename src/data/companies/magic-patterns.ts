import { Company } from '../types';

export const magicPatterns: Company = {
  id: 'magic-patterns',
  name: 'Magic Patterns',
  description: 'AI design tool that generates production-ready UI prototypes from text prompts, images, or Figma mockups — preserving your existing design system.',
  website: 'https://magicpatterns.com',
  screenshot: '/screenshots/magic-patterns-screenshot.png',
  headquarters: 'San Francisco, CA',
  remote: 'Yes',

  // OG Image
  ogImage: '/og-images/magic-patterns-og.webp',

  // Multi-dimensional Tags
  aiTypes: ['code-assistant'],
  markets: ['b2b', 'prosumer'],
  category: 'developer-tools' as const,
  industries: ['developer-tools', 'creative-media'],

  // Business
  stage: 'Series A',
  valuation: 'Not publicly disclosed',
  totalFunding: '$6.5M',
  fundingHistory: [
    {
      stage: 'Seed',
      amount: '$500K',
      date: '2023-01',
      leadInvestors: ['Y Combinator'],
    },
    {
      stage: 'Series A',
      amount: '$6M',
      date: '2025-11',
      leadInvestors: ['Standard Capital'],
    },
  ],
  revenue: '$1M ARR (pre-Series A, 2 founders only)',
  growth: '$0 → $1M ARR in ~6 months with zero employees',
  runway: '24+ months (profitable pre-fundraise + $6M Series A)',
  customers: '1,500+ product teams (DoorDash, Origami Risk, Lendi Group)',

  // Competition
  competitors: [
    {
      name: 'v0 (Vercel)',
      description: 'AI UI generation tool by Vercel that creates React components from prompts.',
      whyTheyWin: 'Vercel ecosystem integration and brand trust among frontend developers.',
    },
    {
      name: 'Lovable',
      description: 'AI-powered full-stack app builder from a single browser tab.',
      whyTheyWin: 'Full-stack capability — generates both frontend and backend, faster time-to-deploy.',
    },
    {
      name: 'Uizard',
      description: 'AI-powered UI design and prototyping tool for wireframes and mockups.',
      whyTheyWin: 'Non-technical user focus and sketch-to-design conversion.',
    },
  ],
  marketPosition: 'Frontend-only AI prototyping tool that integrates with existing design systems — positioned between pure code generators and full-stack builders.',
  moat: [
    'Design system preservation: imports from Figma, Storybook, any website via Chrome Extension',
    'Frontend-only constraint reduces hallucinations vs full-stack competitors',
    'Enterprise-ready: SOC 2 Type II, ISO 27001, SSO/SCIM',
  ],
  vsGiants: 'Competes by being frontend-only and design-system-aware — Figma AI generates inside Figma but lacks code export; v0 generates code but not integrated with your component library.',

  // AI-Native Level
  aiNativeLevel: 'A',
  aiNativeLevelDescription: 'AI is the core product — every interaction generates UI from prompts, images, or mockups using AI that understands your design system.',
  aiDesignChallenges: [
    'Prompt-to-UI fidelity: ensuring generated components match brand and design system',
    'Iterative editing without breaking existing generated context',
    'Bridging designer intent with production-ready code output',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Alex Danilowicz',
      role: 'Co-founder & CEO',
      background: 'Frontend engineer (Instagram, LiveRamp); CS at Dartmouth; first employee at a YC startup; YC W23 founder.',
    },
    {
      name: 'Teddy Ni',
      role: 'Co-founder',
      background: 'Frontend engineer (Robinhood pre-IPO, Canopy YC W19); CS at Dartmouth; met Alex freshman year.',
    },
  ],
  whyBuilding: 'As frontend engineers who built design systems daily, they wanted to move faster — so they built an AI assistant that uses your existing component library to generate production-ready UI.',
  beliefs: [
    'Frontend-only focus beats full-stack bloat for prototyping',
    'Your design system should be the AI\'s vocabulary, not generic components',
    'Real user feedback > hypothetical feature requests — use your own product daily',
  ],
  greenFlags: [
    'Profitable growth to $1M ARR with zero employees before raising',
    'YC W23 + $6M Series A led by Standard Capital',
    'Enterprise customers (DoorDash, Origami Risk) validate product-market fit',
    'Founders have deep frontend/design-system expertise',
  ],
  redFlags: [
    'Tiny team (5 people) competing against well-funded v0, Lovable, Figma AI',
    'Frontend-only constraint may limit TAM as competitors go full-stack',
    'AI design tooling market is crowded and rapidly commoditizing',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: '~1-2 (5 total employees, no dedicated design roles listed on YC jobs)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Prompt interpretation → UI component generation logic',
        'Design system import and constraint enforcement',
        'Iterative editing without context loss',
      ],
    },
    evaluation: {
      level: 'medium',
      tasks: [
        'Output quality scoring for generated UI fidelity',
        'User feedback loops for design-system compliance',
      ],
    },
    interface: {
      level: 'high',
      tasks: [
        'Multiplayer infinite canvas for real-time collaboration',
        'Design system configuration and preset management',
        'Export flows to React/Vue/Tailwind code and Figma',
      ],
    },
  },
  productStage: '1→10',

  // Product & User Context
  targetAudiences: {
    primary: 'Product teams (5-50 people) with existing design systems who need faster prototyping',
    secondary: 'PMs and engineers who want to prototype without waiting for design resources',
  },
  userProblems: [
    'Design iteration is slow — teams wait days for mockups before getting stakeholder feedback',
    'AI code generators produce generic UI that doesn\'t match the company\'s design system',
    'Non-designers (PMs, engineers) can\'t create production-quality prototypes independently',
  ],

  // Designer Links
  designerLinks: [
    {
      name: 'Alex Danilowicz',
      role: 'Co-founder & CEO',
      platform: 'podcast',
      url: 'https://suprainsider.substack.com/p/96-inside-magic-patterns-why-frontend',
      description: 'Supra Insider interview: explains why frontend-only focus beats full-stack — "large companies can\'t connect production data to prototyping tools anyway"',
    },
    {
      name: 'Alex Danilowicz',
      role: 'Co-founder & CEO',
      platform: 'twitter',
      url: 'https://twitter.com/alexdanilo99',
      description: 'Shares product updates, AI design tooling insights, and founder journey — active engagement with design/dev community',
    },
  ],

  // Open Roles (Product Design only)
  openRoles: [],

  // Culture Insights
  cultureInsights: [
    {
      source: 'linkedin',
      sentiment: 'positive',
      content: 'Hit $1M ARR with just 2 founders, zero employees — exceptional capital efficiency and founder conviction. 8-minute average customer support response time with founders personally responding.',
      url: 'https://michaelgoitein.substack.com/p/how-magic-patterns-hit-1m-arr-by',
    },
    {
      source: 'twitter',
      sentiment: 'positive',
      content: 'HN users report "80-90% less time drawing boxes in Figma" — product is genuinely workflow-changing. Founders actively engage with critical feedback and iterate weekly.',
      url: 'https://news.ycombinator.com/item?id=43752176',
    },
  ],

  // Growth Metrics
  growthMetrics: {
    stage: 'early-growth',
    revenueGrowth: '$0 → $1M ARR in ~6 months (pre-Series A)',
    userGrowth: '50K+ beta users → 1,500+ product teams',
    signals: [
      '$6M Series A led by Standard Capital (Nov 2025)',
      'Profitable before fundraising — $500K ARR per employee',
      'Enterprise customers: DoorDash, Origami Risk, Lendi Group',
    ],
    tailwinds: [
      'AI-native prototyping replacing manual design workflows',
      'Enterprise demand for design-system-compliant AI tools',
      'Product teams expanding beyond dedicated designer bandwidth',
    ],
    headwinds: [
      'v0, Lovable, Bolt racing to add full-stack features',
      'Figma AI entering the prompt-to-design space natively',
      'Risk of commoditization as LLMs improve at code generation',
    ],
  },

  // My Tracking
  tracking: {
    status: 'watching',
    fitScore: 6,
    whyJoin: [
      'Level A AI-native design tool — every interaction is AI-powered',
      'Founders deeply understand design systems from frontend engineering background',
      'Early-stage (5 people) = high impact per person',
    ],
    whyNot: [
      'No dedicated design roles open — team is all-engineering',
      'Tiny team (5) competing against well-funded competitors',
      'Frontend-only constraint may limit long-term growth',
    ],
    nextActions: [
      'Monitor for first Product Designer hire as team scales post-Series A',
    ],
  },

  // Meta
  lastUpdated: '2026-02-17',
  sources: [
    { title: 'Magic Patterns - Official Website', url: 'https://magicpatterns.com' },
    { title: 'Series A and Magic Patterns 2.0 - Company Blog', url: 'https://www.magicpatterns.com/blog/series-a-and-magic-patterns-2-0' },
    { title: 'Magic Patterns - Y Combinator Profile', url: 'https://www.ycombinator.com/companies/magic-patterns' },
    { title: 'How Magic Patterns Hit $1M ARR - Michael Goitein', url: 'https://michaelgoitein.substack.com/p/how-magic-patterns-hit-1m-arr-by' },
    { title: 'Inside Magic Patterns: Frontend Focus - Supra Insider Podcast', url: 'https://suprainsider.substack.com/p/96-inside-magic-patterns-why-frontend' },
    { title: 'Launch HN: Magic Patterns (YC W23) - Hacker News', url: 'https://news.ycombinator.com/item?id=43752176' },
    { title: 'Magic Patterns Careers - no Product Design roles found', url: 'https://www.ycombinator.com/companies/magic-patterns/jobs' },
  ],
};
