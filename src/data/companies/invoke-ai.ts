import { Company } from '../types';

export const invokeAi: Company = {
  id: 'invoke-ai',
  name: 'Invoke',
  description: 'AI image generation platform for controlled creative production, available as open-source software and hosted/enterprise tooling.',
  website: 'https://www.invoke.com/',
  headquarters: 'Unknown',
  remote: 'Unknown',

  category: 'creative-media' as const,
  subcategories: ['creative-media'],
  aiTypes: ['image-generation', 'automation'],
  markets: ['prosumer', 'b2b', 'enterprise'],
  industries: ['creative-media'],

  stage: 'Unknown',
  valuation: 'Unknown',
  totalFunding: 'Not publicly disclosed',
  revenue: 'Unknown',
  growth: 'Unknown',
  customers: 'Creative teams, AI artists, studios, and enterprises using controlled image generation workflows',

  competitors: [
    {
      name: 'Comfy',
      description: 'Node-based open-source creative AI workflow platform.',
      whyTheyWin: 'More extensible and deeper for technical artists building custom model graphs.',
    },
    {
      name: 'Krea',
      description: 'Hosted real-time creative AI suite.',
      whyTheyWin: 'More polished mainstream creator UX and fast hosted workflows.',
    },
    {
      name: 'Adobe Firefly',
      description: 'AI generation built into Adobe Creative Cloud.',
      whyTheyWin: 'Distribution through Photoshop, Illustrator, and enterprise creative teams.',
    },
  ],
  marketPosition: 'Direct Comfy-adjacent player for controlled image generation, especially when teams want a more productized canvas/editor around open models.',
  moat: [
    'Open-source distribution and community familiarity.',
    'Control-oriented image editing workflow that appeals to professional users.',
    'Potential enterprise fit for teams that need hosted or governed creative AI tools.',
  ],
  vsGiants: 'Invoke does not beat Adobe or OpenAI on distribution or model budget, but it can win with control, deployment flexibility, and user trust among technical creative teams.',

  aiNativeLevel: 'A',
  aiNativeLevelDescription: 'Generative AI image creation and editing is the core product surface.',
  aiDesignChallenges: [
    'Turning model controls, canvas editing, and generation history into a coherent workflow.',
    'Helping users preserve identity, style, and composition across iterations.',
    'Balancing beginner usability with expert controls for open model workflows.',
  ],

  founders: [
    {
      name: 'Invoke founding team',
      role: 'Founders',
      background: 'Team behind InvokeAI, an open-source generative image creation project and commercial platform.',
    },
  ],
  whyBuilding: 'Invoke is building a controllable, production-oriented AI image tool for creators and teams that need more than simple prompt generation.',
  beliefs: [
    'Creative AI needs controllability and repeatability, not only output quality.',
    'Open-source model ecosystems create room for specialized professional tools.',
    'Teams will need governance and workflow around image generation.',
  ],
  greenFlags: [
    'Highly relevant direct comparison point for Comfy-style controlled creative workflows.',
    'Open-source roots can support trust and technical adoption.',
    'Clear design problem space around canvas, editing, history, and generation control.',
  ],
  redFlags: [
    'Public funding and growth metrics are limited.',
    'Official website was Cloudflare-protected during research, limiting verification depth.',
    'No current Product Design opening verified.',
  ],

  designTeam: {
    teamSize: 'Unknown',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: ['Canvas-to-generation behavior', 'Image editing workflows', 'Model/control settings'],
    },
    evaluation: {
      level: 'medium',
      tasks: ['Output comparison', 'Revision history', 'Quality and style consistency checks'],
    },
    interface: {
      level: 'high',
      tasks: ['Creative editor UI', 'Prompt and control panels', 'Asset and project organization'],
    },
  },
  productStage: '1→10',

  targetAudiences: {
    primary: 'AI artists, professional creators, and creative teams needing controlled image generation',
    secondary: 'Enterprises that want governed deployment of image generation workflows',
  },
  userProblems: [
    'Prompt-only image tools are hard to control for production work.',
    'Creative teams need repeatable style, identity, and composition across assets.',
    'Open model workflows can be powerful but difficult to package for teams.',
  ],

  designerLinks: [],
  openRoles: [],
  cultureInsights: [],

  tracking: {
    status: 'watching',
    fitScore: 6,
    whyJoin: [
      'Closest product-design comparison to Comfy for controlled creative AI.',
      'Complex creative editor surface could be strong design work.',
    ],
    whyNot: [
      'Company metrics and hiring signal are less transparent than Comfy/Krea/OpenArt.',
      'No product design role verified.',
    ],
    nextActions: ['Re-check official careers and GitHub/community activity before prioritizing.'],
  },

  growthMetrics: {
    stage: 'unknown',
    revenueGrowth: 'Unknown',
    userGrowth: 'Unknown',
    signals: ['Open-source project and commercial platform presence'],
    tam: '$30B+ AI creative tools market',
    marketShare: 'Niche controlled-image-generation segment',
    ceiling: 'Could remain a focused professional tool, or become an enterprise controlled-generation workflow layer.',
    tailwinds: ['Professional creators need more control than prompt-only tools provide'],
    headwinds: ['Crowded creative AI market and limited public growth data'],
    moatType: 'platform-ecosystem',
    moatStrength: 'Potential but unproven from public data.',
  },

  lastUpdated: '2026-04-28T00:00:00',
  sources: [
    { title: 'Invoke official site', url: 'https://www.invoke.com/' },
    { title: 'InvokeAI GitHub', url: 'https://github.com/invoke-ai/InvokeAI' },
  ],
};
