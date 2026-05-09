import { Company } from '../types';

export const openart: Company = {
  id: 'openart',
  name: 'OpenArt',
  description: 'AI storytelling and visual creation platform for turning ideas into images, videos, characters, and persistent creative IP.',
  website: 'https://openart.dev/',
  headquarters: 'San Francisco Bay Area, CA',
  remote: 'Hybrid',

  category: 'creative-media' as const,
  subcategories: ['creative-media'],
  aiTypes: ['image-generation', 'video-generation', 'automation'],
  markets: ['prosumer', 'b2b'],
  industries: ['creative-media'],

  stage: 'Series A',
  valuation: 'Unknown',
  totalFunding: '$35M',
  fundingHistory: [
    {
      stage: 'Seed',
      amount: '$5M',
      date: '2023',
      leadInvestors: ['Basis Set Ventures', 'DCM'],
    },
    {
      stage: 'Series A',
      amount: '$30M',
      date: '2026-01',
      leadInvestors: ['Canaan Partners'],
    },
  ],
  revenue: '$70M+ ARR reported by Canaan',
  growth: '8M MAU, 7x revenue growth in 2025 reported by Canaan',
  customers: 'Millions of creators and businesses using AI visual storytelling tools',

  competitors: [
    {
      name: 'Krea',
      description: 'Real-time AI creative suite for images, video, and 3D.',
      whyTheyWin: 'Stronger real-time creative tooling and professional visual design positioning.',
    },
    {
      name: 'Comfy',
      description: 'Node-based open-source workflow tool for controllable AI production.',
      whyTheyWin: 'Far deeper pipeline control for technical artists and production workflows.',
    },
    {
      name: 'Runway',
      description: 'AI-native video and creative platform.',
      whyTheyWin: 'Stronger brand in video generation and professional media workflows.',
    },
  ],
  marketPosition: 'Consumer/prosumer creative AI platform leaning into persistent characters, visual stories, and AI-native IP rather than only single image outputs.',
  moat: [
    'Reported 8M MAU and $70M+ ARR suggest unusual consumer/prosumer traction.',
    'Character and narrative continuity can create retention beyond one-off generation.',
    'Fast-growing creator base gives product feedback and distribution momentum.',
  ],
  vsGiants: 'Adobe and OpenAI have distribution and model power, but OpenArt competes on lightweight creator workflows and character/story continuity.',

  aiNativeLevel: 'A',
  aiNativeLevelDescription: 'The core product is AI-native visual storytelling across image, video, and character creation.',
  aiDesignChallenges: [
    'Designing persistent character/world/story workflows instead of one-off generation.',
    'Making image-to-video and creative app templates approachable for mainstream creators.',
    'Balancing viral content speed with creator trust and IP control.',
  ],

  founders: [
    {
      name: 'Coco Mao',
      role: 'Co-founder & CEO',
      background: 'CEO of OpenArt; Canaan describes her as leading the company through rapid growth in AI-native visual media.',
    },
    {
      name: 'John Qiao',
      role: 'Co-founder',
      background: 'OpenArt co-founder focused on building AI-native storytelling and creative IP tooling.',
    },
  ],
  whyBuilding: 'OpenArt is building a creative platform where users can create persistent characters, worlds, and visual stories from idea to final frame.',
  beliefs: [
    'As AI collapses creation cost, durable characters, worlds, and stories become the scarce asset.',
    'Creators need continuity across images, video, and narrative formats.',
    'AI-native media franchises can start from individual creators, not only studios.',
  ],
  greenFlags: [
    'Senior Product UI/UX Designer role currently open.',
    'Canaan reports 8M MAU, $70M+ ARR, and 7x revenue growth in 2025.',
    '$30M Series A in Jan 2026 led by Canaan.',
  ],
  redFlags: [
    'Consumer creative AI can be trend-sensitive and crowded.',
    'Reported metrics come from investor material, not audited public filings.',
    'Product scope may lean toward viral social content rather than deep professional tooling.',
  ],

  designTeam: {
    teamSize: 'Hiring Senior Product UI/UX Designer',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: ['Character continuity flows', 'Image-to-video workflows', 'Creative app/template logic'],
    },
    evaluation: {
      level: 'medium',
      tasks: ['Output quality review', 'Character consistency', 'Story and asset iteration feedback'],
    },
    interface: {
      level: 'high',
      tasks: ['Visual creation editor', 'Template marketplace/app surfaces', 'Creator onboarding and publishing flows'],
    },
  },
  productStage: '10→100',

  targetAudiences: {
    primary: 'Creators making AI-generated visual stories, characters, social content, and marketing media',
    secondary: 'Businesses and teams producing lightweight visual campaigns and branded content',
  },
  userProblems: [
    'Creators need to move from idea to polished visual story without stitching many tools together.',
    'AI image/video tools often lose character and story continuity.',
    'Small creators and teams need fast production workflows without professional VFX budgets.',
  ],

  designerLinks: [],
  openRoles: [
    {
      title: 'Senior Product UI/UX Designer',
      location: 'San Francisco Bay Area, CA',
      url: 'https://jobs.ashbyhq.com/openart/4cc44d51-f824-4d54-bbfa-25a1937bec2d',
      team: 'Product Design',
      level: 'Senior',
      type: 'full-time',
      compensation: '$150K-$200K + equity + bonus',
      postedDate: '2026-04',
      aboutRole: 'Shape how millions of creators use OpenArt for AI image and video generation, visual storytelling, and creative workflows.',
      responsibilities: [
        'Design AI-native creation flows for image, video, character, and storytelling products.',
        'Partner closely with product and engineering on high-growth creator experiences.',
        'Contribute to OpenArt vision of making AI-powered creativity accessible and empowering.',
      ],
      requirements: [
        'Senior product/UI/UX design experience.',
        'Strong visual and interaction craft for consumer or creator products.',
        'Comfort designing around emerging AI model capabilities.',
      ],
      whyInteresting: 'OpenArt may be one of the fastest-growing Comfy-adjacent creator platforms, and the role is explicitly product/UI/UX design.',
    },
  ],
  cultureInsights: [],

  tracking: {
    status: 'interested',
    fitScore: 8,
    whyJoin: [
      'Current product design opening with strong reported business traction.',
      'AI-native creative tooling is directly aligned with visual/product design interests.',
      'Product problem is easier to explain in interviews than low-level infrastructure.',
    ],
    whyNot: [
      'Could be more consumer-growth/content-trend driven than deep professional tool design.',
      'Metrics are investor-reported and should be cross-checked in interviews.',
    ],
    nextActions: ['Compare OpenArt role against Comfy and Krea based on onsite expectations, craft bar, and depth of design ownership.'],
  },

  growthMetrics: {
    stage: 'hypergrowth',
    revenueGrowth: '7x revenue growth in 2025 reported by Canaan',
    userGrowth: '8M MAU reported by Canaan',
    signals: [
      '$30M Series A led by Canaan in Jan 2026',
      '$70M+ ARR reported by Canaan',
      'Senior Product UI/UX Designer opening',
    ],
    tam: '$30B+ AI creative tools, creator economy, and visual media market',
    marketShare: 'Meaningful consumer/prosumer traction based on reported MAU and ARR',
    ceiling: 'Could become a lightweight AI-native visual storytelling stack for creators and small businesses.',
    tailwinds: [
      'Demand for short-form AI video and character-driven content',
      'Creator economy pressure to produce more media faster',
      'AI model improvements lower production cost',
    ],
    headwinds: [
      'Creative AI consumer retention can be volatile',
      'Competition from Krea, Runway, Adobe, Google, and OpenAI',
      'IP and creator trust questions around AI-generated media',
    ],
    moatType: 'brand',
    moatStrength: 'Promising: user scale and character/story continuity may create retention, but long-term defensibility is still forming.',
  },

  lastUpdated: '2026-04-28T00:00:00',
  sources: [
    { title: 'OpenArt official site', url: 'https://openart.dev/' },
    { title: 'Canaan Series A thesis', url: 'https://www.canaan.com/latest/why-we-led-openart-s-30m-series-a' },
    { title: 'OpenArt Senior Product UI/UX Designer role', url: 'https://jobs.ashbyhq.com/openart/4cc44d51-f824-4d54-bbfa-25a1937bec2d' },
  ],
};
