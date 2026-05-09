import { Company } from '../types';

export const seriesai: Company = {
  id: 'seriesai',
  name: 'Series Entertainment',
  description: 'AI-native game development platform building the Rho Engine — a multimodal full-stack game creation suite powered by generative AI.',
  website: 'https://series.inc',
  headquarters: 'Rocklin, CA',
  region: 'other-us' as const,
  remote: 'Yes',

    // OG Image
    ogImage: '/og-images/seriesai-og.webp',
  aiTypes: ['image-generation', 'automation'],
  markets: ['b2b', 'prosumer'],
  category: 'creative-media' as const,
  industries: ['creative-media'],
  stage: 'Series A',
  normalizedStage: 'series-a' as const,
  valuation: '$190M (post-money, 2024)',
  totalFunding: '$35.9M',
  fundingHistory: [
    {
      stage: 'Seed',
      amount: '$7.9M',
      date: '2023-06',
      leadInvestors: ['a16z Games'],
    },
    {
      stage: 'Series A',
      amount: '$28M',
      date: '2024-08',
      leadInvestors: [],
    },
  ],
  revenue: 'Unknown',
  growth: 'Unknown',
  customers: 'Game developers and studios',
  competitors: [
    {
      name: 'Unity (Muse)',
      description: 'Industry-standard game engine with AI assistant features',
      whyTheyWin: 'Massive installed base and ecosystem lock-in',
    },
    {
      name: 'Modl.ai',
      description: 'AI-powered game testing and QA automation',
      whyTheyWin: 'Focused on QA/testing niche with proven enterprise adoption',
    },
    {
      name: 'Scenario',
      description: 'AI-generated game art and asset creation platform',
      whyTheyWin: 'Specialized in visual asset generation with fine-tuned models',
    },
  ],
  marketPosition: 'First mover in AI-native full-stack game development',
  moat: [
    'First AI-native game engine (Rho) covering visuals, audio, and scripting',
    'a16z Games + Netflix + Dell strategic investor backing',
    'Acquired Pixelberry (Choices) for IP and narrative game expertise',
  ],
  vsGiants: 'Unity and Unreal are general-purpose engines with AI bolt-ons; Series is purpose-built around generative AI from the ground up, targeting faster dev cycles for smaller teams.',
  aiNativeLevel: 'A',
  aiNativeLevelDescription: 'AI IS the product. The Rho Engine is a generative AI-native game creation platform — every layer (visuals, audio, scripting, characters) is powered by AI models.',
  aiDesignChallenges: [
    'Designing creative tools that augment (not replace) game developer intent',
    'Multimodal output coherence — visuals, audio, and narrative must feel unified',
    'Authoring UX for non-linear generative workflows in game creation',
  ],
  founders: [
    {
      name: 'Pany Haritatos',
      role: 'CEO & Co-founder',
      background: 'Serial gaming entrepreneur; founded studios sold to Zynga and Kongregate, was CEO of Kongregate, led Snap Games division.',
    },
  ],
  whyBuilding: 'Recognized generative AI could collapse game development costs and timelines, enabling small teams to create experiences previously requiring hundreds of developers.',
  beliefs: [
    'Generative AI will unlock entirely new categories of games',
    'Small teams should have the tools to compete with AAA studios',
    'AI should empower human creativity, not replace it',
  ],
  greenFlags: [
    'a16z Games led seed; Netflix and Dell joined Series A',
    'Acquired Pixelberry (Choices franchise) — real IP and revenue',
    'Founder has 3 successful exits (Zynga, Kongregate, Snap)',
  ],
  redFlags: [
    'Game development tools market is notoriously hard to monetize',
    'Unity and Unreal have massive ecosystem advantages',
    'No publicly known revenue metrics yet',
  ],
  designTeam: {
    teamSize: 'Unknown',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Designing AI-assisted game authoring workflows',
        'Defining how generative models interpret creative intent',
        'Character behavior and narrative branching systems',
      ],
    },
    evaluation: {
      level: 'medium',
      tasks: [
        'Quality assessment of AI-generated game assets',
        'Playtesting feedback loops for AI-created content',
        'Coherence evaluation across multimodal outputs',
      ],
    },
    interface: {
      level: 'high',
      tasks: [
        'Game editor and authoring tool UX (Rho Engine)',
        'Multimodal creation canvas for visuals, audio, and scripting',
        'Developer-facing dashboard and asset management',
      ],
    },
  },
  productStage: '1→10',
  targetAudiences: {
    primary: 'Game development studios seeking AI-powered creation tools',
    secondary: 'Indie developers and small teams building narrative games',
  },
  userProblems: [
    'Game development is prohibitively expensive and slow for small studios',
    'Creating cohesive visuals, audio, and narrative requires large specialized teams',
    'Existing engines bolt on AI as afterthoughts rather than core capabilities',
    'Iterating on game content requires manual rework across multiple tools',
  ],
  designerLinks: [],
  openRoles: [],
  cultureInsights: [
    {
      source: 'linkedin',
      sentiment: 'positive',
      content: 'Fully remote, multi-timezone company with team from Riot, Epic, Blizzard, Pocket Gems, and Telltale Games.',
    },
  ],
  growthMetrics: {
    stage: 'early-growth',
    signals: [
      'Oversubscribed $28M Series A (Aug 2024)',
      'Acquired Pixelberry (Choices franchise)',
      'Netflix as strategic investor and game partner',
    ],
    tam: '$200B+ (global gaming industry)',
    ceiling: 'Early innings: AI game development tools are nascent',
    tailwinds: [
      'Rising game dev costs pushing studios toward AI tools',
      'Generative AI quality improvements accelerating',
      'Indie game market growing rapidly',
    ],
    headwinds: [
      'Unity/Unreal ecosystem dominance',
      'Game developer skepticism toward AI-generated content',
      'Monetization model for AI game engines unproven',
    ],
    moatType: 'technology',
    moatStrength: 'Moderate: first-mover in AI-native full-stack game engine, but technology moats erode quickly',
  },
  tracking: {
    status: 'watching',
    fitScore: 5,
    whyJoin: [
      'Level A AI-native company — designing entirely new creative tools',
      'Remote-first culture with gaming industry veterans',
      'High-design-impact role: shaping how games are created with AI',
    ],
    whyNot: [
      'No Product Designer roles currently open',
      'Gaming tools niche — may limit career portability',
      'Early revenue stage with unproven business model',
    ],
    nextActions: [
      'Monitor careers page for Product Designer openings',
      'Track Rho Engine public launch and developer reception',
    ],
  },
  lastUpdated: '2026-02-17',
  sources: [
    { title: 'Investing in Series AI — a16z', url: 'https://a16z.com/announcement/investing-in-series-ai/' },
    { title: 'Series raises $28M — TechCrunch', url: 'https://techcrunch.com/2024/09/30/series-the-genai-startup-reinventing-game-development-has-quietly-raised-28m-from-netflix-dell-a16z-others/' },
    { title: 'BITKRAFT Founder Spotlight: Series Entertainment', url: 'https://www.bitkraft.vc/insights/bitkraft-founder-spotlight-series-entertainment/' },
    { title: 'Dell Technologies Capital — Series AI', url: 'https://www.delltechnologiescapital.com/resources/series-ai-games-development' },
    { title: 'Series Entertainment Careers — no Product Design roles found', url: 'https://jobs.ashbyhq.com/seriesai' },
  ],
};
