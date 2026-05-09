import { Company } from '../types';

export const scenario: Company = {
  id: 'scenario',
  name: 'Scenario',
  description: 'Creative AI infrastructure for teams to train custom models and build branded workflows across image, video, audio, and 3D.',
  website: 'https://www.scenario.com/',
  headquarters: 'San Francisco, CA',
  remote: 'Unknown',

  category: 'creative-media' as const,
  subcategories: ['creative-media'],
  aiTypes: ['image-generation', 'video-generation', 'automation'],
  markets: ['b2b', 'enterprise', 'prosumer'],
  industries: ['creative-media'],

  stage: 'Seed',
  valuation: 'Unknown',
  totalFunding: '$6M',
  fundingHistory: [
    {
      stage: 'Seed',
      amount: '$6M',
      date: '2023-01',
      leadInvestors: ['Play Ventures'],
    },
  ],
  revenue: 'Unknown',
  growth: 'Official site says trusted by 15,000+ customers and top creative teams.',
  customers: 'Game studios, marketing teams, e-commerce brands, social content teams, and creative production teams',

  competitors: [
    {
      name: 'Comfy',
      description: 'Open-source node workflow platform for creative AI pipelines.',
      whyTheyWin: 'Deeper technical flexibility and massive open-source node ecosystem.',
    },
    {
      name: 'Krea',
      description: 'Real-time AI creative suite.',
      whyTheyWin: 'More creator-friendly real-time interface and stronger consumer/prosumer mindshare.',
    },
    {
      name: 'Runway',
      description: 'AI creative suite focused heavily on video.',
      whyTheyWin: 'Video brand leadership and enterprise creative adoption.',
    },
  ],
  marketPosition: 'Team and enterprise-oriented creative AI workflow platform, especially strong when custom brand/game/style consistency matters.',
  moat: [
    'Custom model training on a team art bible or brand visual library.',
    'Workflow and API approach lets teams operationalize repeated creative generation.',
    'Positioning spans image, video, audio, and 3D instead of a single media type.',
  ],
  vsGiants: 'Scenario differentiates from Adobe/OpenAI by focusing on team-specific creative DNA, custom models, and production workflow infrastructure.',

  aiNativeLevel: 'A',
  aiNativeLevelDescription: 'Scenario is built around AI-native creative workflows, custom model training, and multimodal generation.',
  aiDesignChallenges: [
    'Turning custom model training into a creator-friendly, trustworthy workflow.',
    'Helping teams manage brand/style consistency across many assets and modalities.',
    'Designing visual workflow builders and API-first production tooling for non-ML users.',
  ],

  founders: [
    {
      name: 'Scenario founding team',
      role: 'Founders',
      background: 'Founded Scenario to make generative AI asset production useful for games and creative teams.',
    },
  ],
  whyBuilding: 'Scenario is solving the production problem of AI creative work: teams need assets that match their art direction, brand, and workflows, not generic outputs.',
  beliefs: [
    'Every creative team has a distinct visual DNA that AI tools should preserve.',
    'Custom models and workflows matter more than generic prompting for production teams.',
    'AI generation will be embedded into creative pipelines through APIs and workflow tools.',
  ],
  greenFlags: [
    'Clear enterprise/team positioning and SOC 2/SSO/private-by-design messaging on site.',
    '15,000+ customers claimed on official site.',
    'Directly relevant to Comfy discussion because both use workflow language, but serve different user maturity levels.',
  ],
  redFlags: [
    'No current Product Design opening found during this pass.',
    'Funding/growth data is less recent than Comfy/OpenArt.',
    'Crowded market with pressure from Krea, Runway, Adobe, and model/API platforms.',
  ],

  designTeam: {
    teamSize: 'Unknown',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: ['Custom model training flows', 'Workflow builder logic', 'Team template and API pipeline design'],
    },
    evaluation: {
      level: 'high',
      tasks: ['Brand/style consistency review', 'Model comparison', 'Asset approval and iteration loops'],
    },
    interface: {
      level: 'high',
      tasks: ['Creative workflow editor', 'Model library and provider comparison', 'Enterprise team workspace'],
    },
  },
  productStage: '1→10',

  targetAudiences: {
    primary: 'Creative teams and studios that need consistent branded/game/marketing assets',
    secondary: 'Developers integrating custom creative generation into production pipelines',
  },
  userProblems: [
    'Generic AI outputs do not reliably match an art bible or brand system.',
    'Teams need repeatable generation workflows, not one-off prompts.',
    'Creative production spans many media types and provider models.',
  ],

  designerLinks: [],
  openRoles: [],
  cultureInsights: [],

  tracking: {
    status: 'watching',
    fitScore: 7,
    whyJoin: [
      'Strong design problem around creative workflows, custom models, and enterprise team UX.',
      'Useful contrast to Comfy: more productized and team-oriented, less open-ended.',
    ],
    whyNot: [
      'No current design role verified.',
      'Public traction data is less complete than OpenArt or Comfy.',
    ],
    nextActions: ['Monitor careers and compare product depth against Comfy by trying workflow builder.'],
  },

  growthMetrics: {
    stage: 'early-growth',
    revenueGrowth: 'Unknown',
    userGrowth: '15,000+ customers reported on official site',
    signals: [
      'Seed funding reported in 2023',
      'Enterprise-ready messaging: SSO, SOC 2 Type II, private by design',
      '500+ models and 50+ providers listed on official site',
    ],
    tam: '$30B+ AI creative tools and production workflow market',
    marketShare: 'Niche team/workflow segment',
    ceiling: 'Could become the enterprise creative AI workflow layer for brand and game teams if custom model training becomes standard.',
    tailwinds: ['Creative teams need brand-safe AI generation', 'Model/provider fragmentation creates workflow demand'],
    headwinds: ['Strong competition from Comfy, Krea, Runway, Adobe, and API platforms', 'Custom model training may commoditize'],
    moatType: 'vertical-specialization',
    moatStrength: 'Moderate: custom workflows and team data can create switching costs if embedded in production pipelines.',
  },

  lastUpdated: '2026-04-28T00:00:00',
  sources: [
    { title: 'Scenario official site', url: 'https://www.scenario.com/' },
    { title: 'Scenario seed funding coverage', url: 'https://voicebot.ai/2023/01/19/generative-ai-video-game-art-startup-scenario-raises-6m/' },
  ],
};
