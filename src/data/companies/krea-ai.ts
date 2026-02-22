import { Company } from '../types';

export const kreaAi: Company = {
  id: 'krea-ai',
  name: 'Krea',
  description: 'AI creative suite for real-time image, video, and 3D generation — a one-stop platform for visual creatives.',
  website: 'https://www.krea.ai/',
  headquarters: 'San Francisco, CA',
  region: 'sf-bay-area' as const,
  remote: 'No',

    // OG Image
    ogImage: '/og-images/krea-ai-og.webp',

  // Multi-dimensional Tags
  aiTypes: ['image-generation', 'video-generation'],
  markets: ['prosumer', 'b2b'],
  category: 'creative-media' as const,
  industries: ['creative-media'],

  // Business
  stage: 'Series B',
  normalizedStage: 'series-b' as const,
  valuation: '$500M (Apr 2025)',
  totalFunding: '$83M',
  fundingHistory: [
    {
      stage: 'Pre-seed',
      amount: 'Undisclosed',
      date: '2022-06',
      leadInvestors: [],
    },
    {
      stage: 'Seed',
      amount: '$3M',
      date: '2023-01',
      leadInvestors: ['Pebblebed'],
    },
    {
      stage: 'Series A',
      amount: '$33M',
      date: '2023-06',
      leadInvestors: ['Andreessen Horowitz'],
    },
    {
      stage: 'Series B',
      amount: '$47M',
      date: '2025-04',
      valuation: '$500M',
      leadInvestors: ['Bain Capital Ventures'],
    },
  ],
  revenue: '$8M ARR (Apr 2025)',
  growth: '20x in 14 months',
  customers: '20M+ users; enterprise clients include Pixar, LEGO, Samsung, Perplexity',

  // Competition
  competitors: [
    {
      name: 'Midjourney',
      description: 'Leading AI image generator with strong aesthetic quality',
      whyTheyWin: 'Dominant brand, 21M+ Discord community, $500M+ revenue',
    },
    {
      name: 'Runway',
      description: 'AI-native video and image creative platform',
      whyTheyWin: '$3B+ valuation, strong video generation, established creative workflows',
    },
    {
      name: 'Adobe Firefly',
      description: 'AI generation integrated into Creative Cloud ecosystem',
      whyTheyWin: 'Massive installed base via Photoshop/Illustrator, enterprise trust',
    },
  ],
  marketPosition: 'Real-time AI creative suite unifying image, video, and 3D generation for designers',
  moat: [
    'Real-time generation canvas — draw-to-render UX differentiator',
    'Multi-model aggregation (Flux, Kling, Veo 2, Wan 2.1) in single interface',
    'Custom AI model training for brand personalization',
  ],
  vsGiants: 'Adobe has Creative Cloud lock-in but slow AI integration; Google/OpenAI focus on foundation models, not creator-first UX. Krea wins on speed and unified real-time workflow.',

  // AI-Native Level
  aiNativeLevel: 'A',
  aiNativeLevelDescription: 'AI IS the product. Built from scratch as a generative AI creative suite — every feature is AI-powered, from real-time canvas to custom model training.',
  aiDesignChallenges: [
    'Real-time generation UX: sub-second feedback loops between user intent and AI output',
    'Multi-model orchestration: helping users choose the right model without technical knowledge',
    'Creative control vs automation: balancing AI autonomy with precise artistic direction',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Victor Perez',
      role: 'Co-founder & CEO',
      background: 'Studied audiovisual systems engineering in Barcelona. Graffiti artist and graphic designer turned AI researcher. Declined King of Spain fellowship at Cornell to build Krea.',
    },
    {
      name: 'Diego Rodriguez',
      role: 'Co-founder & CTO',
      background: 'Met Victor as undergrad in Barcelona. Digital art and 3D architectural visualization background. Also declined King of Spain fellowship at Cornell to co-found Krea.',
    },
  ],
  whyBuilding: 'Believed generative AI tools were too fragmented and technical for creatives. Set out to build a unified, real-time creative suite that any designer can use without ML expertise.',
  beliefs: [
    'AI should amplify unique creative identity, not homogenize output',
    'Real-time feedback transforms the creative process',
    'Creatives need unified tools, not a dozen disconnected AI apps',
  ],
  greenFlags: [
    'Level A AI-native with proprietary model (Krea 1)',
    '$500M valuation at Series B with 20x revenue growth in 14 months',
    'Strong investor syndicate: a16z + Bain Capital Ventures',
    'Enterprise traction: Pixar, LEGO, Samsung as customers',
  ],
  redFlags: [
    'Intense competition from Midjourney, Runway, Adobe Firefly',
    'Small team (17 people) vs well-funded competitors',
    'Freemium model — path to sustainable margins unclear',
  ],

  // Design Opportunity
  designTeam: {
    designHead: 'Annie Clark',
    teamSize: '~2-3 (1 Product Designer role open, Head of Design in place)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Real-time generation canvas interaction logic',
        'Multi-model selection and parameter tuning workflows',
        'Custom model training UX for non-technical users',
      ],
    },
    evaluation: {
      level: 'medium',
      tasks: [
        'AI output quality assessment and refinement loops',
        'User satisfaction with generated assets',
        'Model comparison and recommendation accuracy',
      ],
    },
    interface: {
      level: 'high',
      tasks: [
        'Real-time canvas editor with draw-to-render feedback',
        'Text-to-image/video generation workflows',
        'Enterprise collaboration and asset management UI',
      ],
    },
  },
  productStage: '1→10',

  // User Context
  targetAudiences: {
    primary: 'Professional designers, illustrators, and creative directors using AI in daily workflows',
    secondary: 'Enterprise creative teams (marketing, brand, product) needing scalable AI asset generation',
  },
  userProblems: [
    'Managing multiple AI generation tools (Midjourney, DALL-E, Runway) with fragmented workflows',
    'Lack of real-time iteration — most AI tools require waiting for generation results',
    'No way to train custom AI models on brand style without ML expertise',
    'Enterprise teams lack collaborative AI creative tools with proper access control',
  ],

  // Designer Links
  designerLinks: [],

  // Open Roles
  openRoles: [],

  // Culture Insights
  cultureInsights: [
    {
      source: 'linkedin',
      sentiment: 'positive',
      content: 'Founders dropped King of Spain fellowships at Cornell to build Krea — strong conviction and founder-led culture.',
    },
    {
      source: 'glassdoor',
      sentiment: 'positive',
      content: 'Small, tight-knit team of 17 with rapid growth. In-person SF office emphasizes speed and collaboration.',
    },
  ],

  // Growth Metrics
  growthMetrics: {
    stage: 'hypergrowth',
    revenueGrowth: '20x in 14 months ($8M ARR as of Apr 2025)',
    userGrowth: '20M+ users',
    signals: [
      '$47M Series B at $500M valuation (Apr 2025)',
      '20x revenue growth in 14 months',
      'Enterprise clients: Pixar, LEGO, Samsung',
    ],
    tam: '$30B+ (AI-powered creative tools market)',
    ceiling: 'Early innings: massive creative tools market with rapid AI adoption across professional and prosumer segments.',
    tailwinds: [
      'Explosive demand for AI-generated visual content',
      'Enterprises adopting AI creative tools for marketing at scale',
      'Real-time generation becoming table stakes for creative workflows',
    ],
    headwinds: [
      'Midjourney and Adobe dominate mindshare in creative AI',
      'Foundation model commoditization may erode differentiation',
      'Freemium conversion challenges in crowded market',
    ],
    moatType: 'platform-ecosystem',
    moatStrength: 'Growing: multi-model aggregation + custom training creates switching costs, but early-stage moat',
  },

  // Tracking
  tracking: {
    status: 'researching',
    fitScore: 8,
    whyJoin: [
      'Level A AI-native creative tool — pure design-centric product',
      'Small design team = high impact per designer',
      'Hypergrowth phase: 20x revenue, $500M valuation',
      'Founders are designers/artists themselves — design-first culture',
    ],
    whyNot: [
      'Very small team — may lack design infrastructure/mentorship',
      'Heavy competition from well-funded incumbents',
      'In-person only (San Francisco)',
    ],
    nextActions: [
      'Try Krea product hands-on',
      'Research Annie Clark (Head of Design) background',
      'Monitor hiring pipeline for senior design roles',
    ],
  },
  lastUpdated: '2026-02-18',
  sources: [
    { title: 'TechCrunch — Krea raises $83M Series B', url: 'https://techcrunch.com/2025/04/07/kreas-founders-snubbed-postgrad-grants-from-the-king-of-spain-to-build-their-ai-startup-now-its-valued-at-500m/' },
    { title: 'Contrary Research — Krea Business Breakdown', url: 'https://research.contrary.com/company/krea' },
    { title: 'Krea Careers (Ashby)', url: 'https://jobs.ashbyhq.com/krea/' },
    { title: 'Bain Capital Ventures — Krea investment', url: 'https://baincapitalventures.com/insight/a-powerful-new-platform-for-kreatives/' },
    { title: 'Krea official website', url: 'https://www.krea.ai/' },
  ],
};
