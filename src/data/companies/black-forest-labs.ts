import { Company } from '../types';

export const blackForestLabs: Company = {
  id: 'black-forest-labs',
  name: 'Black Forest Labs',
  description: 'Frontier visual intelligence lab behind the FLUX image model family, serving developers, creative platforms, and enterprise partners.',
  website: 'https://blackforestlabs.ai/',
  headquarters: 'Freiburg, Germany / San Francisco, CA',
  remote: 'Hybrid',

  category: 'ai-models' as const,
  subcategories: ['infrastructure'],
  aiTypes: ['foundation-model', 'image-generation', 'model-platform'],
  markets: ['b2b', 'enterprise', 'prosumer'],
  industries: ['infrastructure', 'creative-media'],

  stage: 'Series B',
  valuation: '$3.25B',
  totalFunding: '$450M+',
  fundingHistory: [
    {
      stage: 'Series B',
      amount: '$300M',
      date: '2025-12',
      valuation: '$3.25B',
      leadInvestors: ['Salesforce Ventures', 'Anjney Midha / AMP'],
    },
  ],
  revenue: 'Unknown',
  growth: 'FLUX models widely adopted across platforms including fal, Replicate, Together AI, Adobe, Canva, Meta, and Microsoft.',
  customers: 'Adobe, Canva, Meta, Microsoft, creative AI platforms, developers, and enterprise media teams',

  competitors: [
    {
      name: 'Stability AI',
      description: 'Open and commercial generative media model lab behind Stable Diffusion.',
      whyTheyWin: 'Large historical open-source mindshare and mature ecosystem.',
    },
    {
      name: 'OpenAI / Google / Midjourney',
      description: 'Closed frontier image and multimodal generation systems.',
      whyTheyWin: 'Massive compute, consumer distribution, and model quality perception.',
    },
    {
      name: 'Comfy / fal / Replicate',
      description: 'Workflow and inference layers that distribute image models to creators and developers.',
      whyTheyWin: 'Own the user workflow and developer integration layer even when using third-party models.',
    },
  ],
  marketPosition: 'One of the strongest independent image model labs, positioned upstream of creative tools and model API platforms.',
  moat: [
    'Research team includes pioneers of latent diffusion, Stable Diffusion, and FLUX.',
    'Model distribution through many platforms compounds adoption.',
    'Enterprise partner base creates both revenue and real-world feedback for model development.',
  ],
  vsGiants: 'Competes by specializing in visual intelligence and open/accessible model distribution while hyperscalers split attention across broader multimodal platforms.',

  aiNativeLevel: 'A',
  aiNativeLevelDescription: 'The company builds frontier image and visual intelligence models as its core product.',
  aiDesignChallenges: [
    'Designing APIs, playgrounds, and docs that make powerful model controls understandable.',
    'Helping enterprise users evaluate model quality, safety, licensing, and cost.',
    'Balancing open-weight community adoption with commercial product packaging.',
  ],

  founders: [
    {
      name: 'Black Forest Labs founding team',
      role: 'Founders / Research team',
      background: 'Team of generative AI researchers known for foundational work on Latent Diffusion, Stable Diffusion, and FLUX.',
    },
  ],
  whyBuilding: 'Black Forest Labs is building frontier models for visual generation and editing, with a stated goal of progressing toward visual intelligence.',
  beliefs: [
    'Visual generation is moving from prompt execution toward systems that understand intent.',
    'Open models and enterprise-grade APIs can coexist.',
    'Specialized frontier visual models can power many downstream creative products.',
  ],
  greenFlags: [
    '$300M Series B at $3.25B post-money valuation announced in Dec 2025.',
    'Strong partner list across Adobe, Canva, Meta, Microsoft, fal, Replicate, and Together AI.',
    'Research pedigree is unusually strong for an independent visual model lab.',
  ],
  redFlags: [
    'Model labs face high compute costs and quality competition from hyperscalers.',
    'Product design surface may be more API/docs/enterprise than end-user creative tooling.',
    'No Product Design openings found on the official Greenhouse board as of Apr 2026.',
  ],

  designTeam: {
    teamSize: 'Unknown; no product design role open on official careers board.',
  },
  designWorkType: {
    logicBehavior: {
      level: 'medium',
      tasks: ['Model parameter controls', 'API and self-hosting workflows', 'Enterprise model deployment decisions'],
    },
    evaluation: {
      level: 'high',
      tasks: ['Model quality comparison', 'Safety and licensing review flows', 'Usage and performance analytics'],
    },
    interface: {
      level: 'medium',
      tasks: ['Model playground', 'Developer dashboard', 'Docs and enterprise onboarding'],
    },
  },
  productStage: '1→10',

  targetAudiences: {
    primary: 'Developers, creative platforms, and enterprises building visual AI products',
    secondary: 'Independent creators using FLUX through open weights, hosted APIs, or partner platforms',
  },
  userProblems: [
    'Creative AI platforms need high-quality image models they can integrate and tune.',
    'Enterprises need licensing, safety, and reliability around visual AI model usage.',
    'Developers need model choice without operating model infrastructure themselves.',
  ],

  designerLinks: [],
  openRoles: [],
  cultureInsights: [],

  tracking: {
    status: 'watching',
    fitScore: 6,
    whyJoin: [
      'Very strong upstream position in visual AI.',
      'Enterprise/API product design could be high leverage if design roles open.',
      'Useful company to understand Comfy ecosystem because FLUX is a key model family.',
    ],
    whyNot: [
      'No current Product Design role found.',
      'Design work may be less creator-facing than Comfy, Krea, or OpenArt.',
    ],
    nextActions: ['Monitor official Greenhouse for Product Design or Design Lead roles.'],
  },

  growthMetrics: {
    stage: 'hypergrowth',
    revenueGrowth: 'Unknown',
    userGrowth: 'Millions of FLUX users reported by company',
    signals: [
      '$300M Series B at $3.25B valuation',
      'FLUX models adopted by major creative and enterprise partners',
      'Active hiring across engineering, GTM, operations, and research',
    ],
    tam: '$30B+ generative media and visual AI infrastructure market',
    marketShare: 'High mindshare among open and partner-distributed image models',
    ceiling: 'Could become the independent visual model layer powering many downstream creative applications.',
    tailwinds: [
      'Image and video generation moving into production workflows',
      'Demand for model diversity beyond closed hyperscaler APIs',
      'Open-weight models remain important to developer and creator ecosystems',
    ],
    headwinds: [
      'Compute intensity and model commoditization risk',
      'Hyperscaler competition from Google, OpenAI, Meta, and Adobe',
      'Downstream platforms may capture more workflow value than model providers',
    ],
    moatType: 'technology',
    moatStrength: 'Strong but execution-sensitive: research quality and partner distribution are real, but frontier model advantage must be renewed continuously.',
  },

  lastUpdated: '2026-04-28T00:00:00',
  sources: [
    { title: 'Black Forest Labs official site', url: 'https://blackforestlabs.ai/' },
    { title: 'Black Forest Labs Series B announcement', url: 'https://blackforestlabs.ai/blog/our-300m-series-b' },
    { title: 'Black Forest Labs careers', url: 'https://job-boards.greenhouse.io/blackforestlabs' },
  ],
};
