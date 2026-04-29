import { Company } from '../types';

export const runware: Company = {
  id: 'runware',
  name: 'Runware',
  description: 'One API for AI generation across image, video, audio, LLM, 3D, and other multimodal workloads.',
  website: 'https://runware.ai/',
  headquarters: 'Unknown',
  remote: 'Unknown',

  category: 'developer-tools' as const,
  subcategories: ['developer-tools', 'infrastructure'],
  aiTypes: ['model-platform', 'image-generation', 'video-generation'],
  markets: ['b2b', 'enterprise'],
  industries: ['infrastructure', 'developer-tools', 'creative-media'],

  stage: 'Unknown',
  valuation: 'Unknown',
  totalFunding: 'Not publicly disclosed',
  revenue: 'Unknown',
  growth: 'Company site reports 10B+ requests, 300M+ end users, and 200K+ developers.',
  customers: 'Developers and AI product teams building generation features',

  competitors: [
    {
      name: 'fal',
      description: 'Serverless inference platform popular for generative media models.',
      whyTheyWin: 'Strong developer mindshare in creative model deployment and fast inference.',
    },
    {
      name: 'Replicate',
      description: 'Model hosting and API platform for running ML models.',
      whyTheyWin: 'Large model community and very simple API experience.',
    },
    {
      name: 'Together AI',
      description: 'Broad AI inference and training infrastructure platform.',
      whyTheyWin: 'Larger infrastructure footprint and enterprise platform breadth.',
    },
  ],
  marketPosition: 'Cost- and speed-oriented API layer for multimodal generation, adjacent to Comfy because it abstracts model execution rather than workflow editing.',
  moat: [
    'Breadth across image, video, audio, LLM, and 3D workloads.',
    'Pricing and speed positioning for high-volume product builders.',
    'Developer-facing API surface with many model options.',
  ],
  vsGiants: 'Runware competes as an aggregation and execution layer, while giants mostly sell first-party model APIs or cloud infrastructure.',

  aiNativeLevel: 'B',
  aiNativeLevelDescription: 'AI model execution is the core product, but Runware is an infrastructure/API layer rather than a model lab.',
  aiDesignChallenges: [
    'Helping developers compare model cost, speed, and quality across many providers.',
    'Designing usage, billing, logs, and model selection for production teams.',
    'Making multimodal APIs feel simple despite fast-changing model coverage.',
  ],

  founders: [
    {
      name: 'Runware founding team',
      role: 'Founders',
      background: 'Public founder details not verified during this pass.',
    },
  ],
  whyBuilding: 'Runware is reducing the infrastructure burden of adding AI generation features by exposing many models through one API.',
  beliefs: [
    'Developers want to build products, not maintain generation pipelines.',
    'Model choice should be swappable as the market changes.',
    'Cost and latency matter as AI generation moves into production apps.',
  ],
  greenFlags: [
    'Official site reports large usage numbers across requests, developers, and end users.',
    'Clear infrastructure value proposition for AI product teams.',
    'Useful comparison point for fal and Replicate in the Comfy ecosystem.',
  ],
  redFlags: [
    'Funding, founder, and team details are not very transparent publicly.',
    'No Product Design opening found on official site during this pass.',
    'Model aggregation can commoditize if switching costs remain low.',
  ],

  designTeam: {
    teamSize: 'Unknown',
  },
  designWorkType: {
    logicBehavior: {
      level: 'medium',
      tasks: ['Model selection', 'API task configuration', 'Workflow integration patterns'],
    },
    evaluation: {
      level: 'high',
      tasks: ['Cost/speed/quality comparison', 'Usage analytics', 'Error and latency diagnostics'],
    },
    interface: {
      level: 'medium',
      tasks: ['Developer dashboard', 'Model playground', 'Docs and pricing surfaces'],
    },
  },
  productStage: '1→10',

  targetAudiences: {
    primary: 'Developers and product teams adding AI generation into apps',
    secondary: 'Creative AI startups that need fast model access without operating infrastructure',
  },
  userProblems: [
    'Integrating many generation models separately is expensive and brittle.',
    'Teams need predictable cost and latency at scale.',
    'Fast model turnover makes hard-coded provider choices risky.',
  ],

  designerLinks: [],
  openRoles: [],
  cultureInsights: [],

  tracking: {
    status: 'watching',
    fitScore: 5,
    whyJoin: [
      'Good infrastructure lens for understanding Comfy-adjacent creative AI.',
      'Potentially interesting API/dashboard design if design roles open.',
    ],
    whyNot: [
      'No current design opening found.',
      'Less creator-facing than Comfy, Krea, OpenArt, or Scenario.',
    ],
    nextActions: ['Monitor for product/design roles and compare against fal/Replicate.'],
  },

  growthMetrics: {
    stage: 'high-growth',
    revenueGrowth: 'Unknown',
    userGrowth: '10B+ requests, 300M+ end users, 200K+ developers reported on official site',
    signals: [
      'Broad multimodal API coverage',
      'Public pricing and model catalog',
      'Customer quote from OpenArt CEO on official site',
    ],
    tam: '$15B+ AI inference and multimodal generation infrastructure market',
    marketShare: 'Unknown',
    ceiling: 'Could become a cost-efficient multimodal generation API layer if model breadth and reliability hold.',
    tailwinds: ['More apps are embedding image/video/audio generation', 'Developers need cheaper inference options'],
    headwinds: ['Commoditized model aggregation', 'Competition from fal, Replicate, Together AI, and cloud providers'],
    moatType: 'technology',
    moatStrength: 'Unclear: speed/cost advantage matters, but public evidence of durable switching costs is limited.',
  },

  lastUpdated: '2026-04-28T00:00:00',
  sources: [
    { title: 'Runware official site', url: 'https://runware.ai/' },
    { title: 'Runware API docs', url: 'https://runware.ai/docs' },
    { title: 'Runware pricing', url: 'https://runware.ai/pricing' },
  ],
};
