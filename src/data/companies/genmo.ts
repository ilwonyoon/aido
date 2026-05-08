import { Company } from '../types';

export const genmo: Company = {
  id: 'genmo',
  name: 'Genmo',
  description:
    'AI video generation research lab building open video generation models and creative tools, including the Mochi text-to-video model.',
  website: 'https://www.genmo.ai/',
  headquarters: 'San Francisco, CA',
  remote: 'No',

  aiTypes: ['video-generation', 'foundation-model'],
  markets: ['prosumer', 'b2b'],
  category: 'creative-media' as const,
  industries: ['creative-media'],

  stage: 'Seed',
  valuation: 'Unknown',
  totalFunding: 'Not publicly disclosed',
  revenue: 'Unknown',
  growth: 'Open-source Mochi video model and active hiring for founding product design.',
  runway: 'Unknown',
  customers: 'AI video creators, developers, researchers, and creative teams',

  competitors: [
    {
      name: 'Runway',
      description: 'AI video generation and creative tools platform.',
      whyTheyWin: 'Strong brand, creator workflow, and model quality.',
    },
    {
      name: 'Pika',
      description: 'AI video generation product for creators.',
      whyTheyWin: 'Consumer-friendly creation UX and social distribution.',
    },
    {
      name: 'Luma AI',
      description: 'AI video and 3D generation company.',
      whyTheyWin: 'High-quality multimodal generation and strong product polish.',
    },
  ],
  marketPosition: 'Open video generation lab and creative AI platform',
  moat: [
    'Open-source model strategy with Mochi',
    'Research focus on video generation as world simulation',
    'Potential developer and creator ecosystem around customizable video models',
  ],
  vsGiants: 'Competes by emphasizing open video generation and research-led creative tooling versus closed model platforms.',

  aiNativeLevel: 'A',
  aiNativeLevelDescription:
    'AI is the product: Genmo builds video generation models and product experiences for creating with those models.',
  aiDesignChallenges: [
    'Designing controls for generative video creation',
    'Representing model capabilities and limitations in creative workflows',
    'Balancing prompt-based generation with precise editing and iteration',
    'Designing evaluation and feedback loops for generated media quality',
  ],

  founders: [
    {
      name: 'Paras Jain',
      role: 'Co-founder & CEO',
      background: 'Co-founder of Genmo, focused on open video generation research and products.',
    },
    {
      name: 'Ajay Jain',
      role: 'Co-founder',
      background: 'Co-founder of Genmo, focused on AI video generation research.',
    },
  ],
  whyBuilding:
    'Genmo aims to unlock the right brain of AGI through state-of-the-art video generation models that act as world simulators.',
  beliefs: [
    'Video generation is a step toward richer world models',
    'Open models can accelerate creative and developer ecosystems',
    'Creative AI tools need both model quality and expressive control',
  ],
  greenFlags: [
    'Founding Senior Product Designer role at a Level A creative AI lab',
    'Open-source Mochi model creates developer and creator ecosystem signals',
    'Rich design surface across creators, developers, model research, and future products',
  ],
  redFlags: [
    'AI video generation is intensely competitive',
    'Funding and revenue details are limited publicly',
    'Creative AI products can face retention and monetization challenges',
  ],

  designTeam: {
    teamSize: 'Unknown (hiring Founding Product Designer)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Prompt-to-video generation workflows',
        'Iteration and editing controls for model outputs',
        'Productizing model research into usable creative tools',
      ],
    },
    evaluation: {
      level: 'high',
      tasks: [
        'Generated video quality feedback loops',
        'Model capability communication',
        'User success metrics for creation and iteration',
      ],
    },
    interface: {
      level: 'high',
      tasks: [
        'Web and mobile creative interfaces',
        'Playground and developer surfaces',
        'Design system for next-generation AI video tools',
      ],
    },
  },
  productStage: '0→1',

  targetAudiences: {
    primary: 'AI video creators and creative professionals',
    secondary: 'Developers and researchers experimenting with open video generation models',
  },
  userProblems: [
    'Video generation tools are hard to control precisely',
    'Creators need faster iteration from idea to usable footage',
    'Model limitations can be opaque without strong product feedback loops',
    'Developers need approachable ways to run and customize open video models',
  ],

  designerLinks: [],
  openRoles: [
    {
      title: 'Founding Product Designer',
      location: 'San Francisco, CA',
      type: 'full-time',
      roleFamily: 'product-design',
      roleSignal: 'founding',
      verificationStatus: 'confirmed',
      sourceType: 'ashby',
      lastVerifiedAt: '2026-05-06',
      url: 'https://jobs.ashbyhq.com/genmo/1eec9a21-b686-498c-8ca5-27fe9c44e2b6',
      aboutRole:
        'Spearhead design of next-generation products and experiences for AI-powered video creation across web and mobile platforms.',
      whyInteresting:
        'Founding product design role at a research-led creative AI company working on one of the richest emerging interaction surfaces.',
    },
  ],

  cultureInsights: [
    {
      source: 'careers',
      sentiment: 'positive',
      content: 'Role listing positions design as pivotal for translating user needs and model research into product direction.',
      url: 'https://jobs.ashbyhq.com/genmo/1eec9a21-b686-498c-8ca5-27fe9c44e2b6',
    },
  ],

  tracking: {
    status: 'interested',
    fitScore: 8,
    whyJoin: [
      'Creative AI role with a broad and novel interaction surface',
      'Founding design ownership at a research lab building open video models',
      'High upside if open video generation becomes a developer and creator platform',
    ],
    whyNot: [
      'Competitive AI video market',
      'Limited public business traction data',
      'Potentially research-led roadmap may shift quickly',
    ],
    nextActions: [
      'Try Genmo / Mochi product surfaces and inspect creator workflow',
      'Compare product UX against Runway, Pika, Luma, and Sora-adjacent tools',
      'Assess whether role is mostly product UI or also model interaction design',
    ],
  },

  growthMetrics: {
    stage: 'early-growth',
    revenueGrowth: 'Unknown',
    userGrowth: 'Unknown',
    signals: [
      'Mochi open-source video generation model',
      'Hiring founding senior product designer for video creation products',
      'Research positioning around video generation as world simulation',
    ],
    tam: 'AI video generation, creative tools, and synthetic media market',
    marketShare: 'Early',
    ceiling: 'High if Genmo converts open model traction into a widely used creative platform.',
    tailwinds: [
      'Rapid improvement in generative video models',
      'Demand from creators and businesses for cheaper video production',
      'Open-source ecosystem can accelerate adoption',
    ],
    headwinds: [
      'Large competitors and foundation-model labs are investing heavily in video',
      'Copyright, safety, and content moderation complexity',
      'Creative workflows require high control, consistency, and reliability',
    ],
    moatType: 'technology',
    moatStrength: 'Medium if open model quality and ecosystem adoption compound.',
  },

  lastUpdated: '2026-05-06',
  sources: [
    { title: 'Genmo Website', url: 'https://www.genmo.ai/' },
    { title: 'Genmo About', url: 'https://www.genmo.ai/about' },
    { title: 'Founding Product Designer at Genmo', url: 'https://jobs.ashbyhq.com/genmo/1eec9a21-b686-498c-8ca5-27fe9c44e2b6' },
  ],
};
