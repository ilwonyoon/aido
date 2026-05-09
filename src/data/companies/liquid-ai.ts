import { Company } from '../types';

export const liquidAi: Company = {
  id: 'liquid-ai',
  name: 'Liquid AI',
  description: 'MIT CSAIL spinoff building Liquid Foundation Models (LFMs) — a novel AI architecture inspired by the C. elegans worm nervous system, delivering maximum intelligence at minimum compute.',
  website: 'https://www.liquid.ai',
  headquarters: 'Cambridge, MA',
  region: 'boston' as const,
  remote: 'Hybrid',

    // OG Image
    ogImage: '/og-images/liquid-ai-og.webp',

  // Category
  category: 'ai-models',
  aiTypes: ['foundation-model'],
  markets: ['enterprise', 'b2b'],
  industries: ['infrastructure'],

  // Business
  stage: 'Series A',
  normalizedStage: 'series-a' as const,
  valuation: '$2B+ (Dec 2024)',
  totalFunding: '$297M',
  fundingHistory: [
    {
      stage: 'Seed',
      amount: '$37.5M',
      date: '2023-12',
      valuation: '$303M',
      leadInvestors: ['OSS Capital', 'PagsGroup'],
    },
    {
      stage: 'Series A',
      amount: '$250M',
      date: '2024-12',
      valuation: '$2B+',
      leadInvestors: ['AMD Ventures'],
    },
  ],
  revenue: '$13.2M (Nov 2025)',
  growth: 'Rapid — from stealth to unicorn in 12 months',
  runway: 'Strong — $250M Series A with ~88 employees',
  customers: 'Shopify, G42, Capgemini, Brilliant Labs, Alef Education',

  // Growth & Potential
  growthMetrics: {
    stage: 'high-growth',
    revenueGrowth: '$13.2M revenue with 88-person team (emerged from stealth Dec 2023)',
    userGrowth: 'Enterprise partnerships expanding: Shopify, G42, Capgemini',
    signals: [
      '$250M Series A at $2B+ valuation (Dec 2024)',
      'AMD CEO Lisa Su featured Liquid AI at CES 2026 keynote alongside OpenAI',
      'Shopify multi-year partnership for sub-20ms foundation models',
      'G42 partnership opening MENA/Global South enterprise market',
      'LFM2 open-sourced as fastest small foundation models (July 2025)',
      'Team doubled from ~40 to ~88 in 2025',
    ],
    tam: '$150B+ (edge AI + on-device inference + enterprise AI)',
    marketShare: '<1% of TAM — massive upside if novel architecture proves out',
    ceiling: 'Early innings: on-device AI is nascent, most AI still cloud-dependent',
    tailwinds: [
      'Growing demand for on-device/edge AI (privacy, latency)',
      'Enterprise need for efficient AI (compute cost reduction)',
      'AMD partnership signals hardware-level optimization trend',
      'Open-source model release builds developer community',
    ],
    headwinds: [
      'Transformer-based models dominate with massive ecosystem',
      'Competing against well-funded incumbents (OpenAI, Google, Meta)',
      'Novel architecture risk — unproven at scale vs transformers',
      'Small team relative to competitors',
    ],
    moatType: 'technology',
    moatStrength: 'Strong: Proprietary liquid neural network architecture with patent-protected research from MIT CSAIL. 200% faster than Qwen3/Gemma3 on CPU.',
  },

  // Competition
  competitors: [
    {
      name: 'Mistral AI',
      description: 'Open-weight efficient foundation models for enterprise',
      whyTheyWin: 'Larger team, broader model family, stronger European distribution',
    },
    {
      name: 'OpenAI',
      description: 'GPT models, dominant in consumer and enterprise AI',
      whyTheyWin: 'Brand recognition, massive compute, ChatGPT distribution',
    },
    {
      name: 'Qualcomm AI / Apple CoreML',
      description: 'On-device AI inference on mobile and edge hardware',
      whyTheyWin: 'Direct hardware integration, massive device install base',
    },
    {
      name: 'Google DeepMind (Gemma)',
      description: 'Small efficient models for on-device and edge use cases',
      whyTheyWin: 'Unlimited compute, Android distribution, Gemma ecosystem',
    },
  ],
  marketPosition: 'Leading non-transformer foundation model company — pioneering liquid neural networks for efficient on-device AI',
  moat: [
    'Novel architecture: liquid neural networks (not transformer-based) enable orders-of-magnitude efficiency',
    'MIT CSAIL pedigree: spun directly from one of the top AI research labs',
    'AMD strategic partnership: silicon-level optimization for LFMs',
    'Hardware agnosticism: models run on GPUs, CPUs, and NPUs equally well',
    'On-device specialization: sub-20ms response times, models under 1GB',
  ],
  vsGiants: 'While OpenAI/Google/Anthropic compete on transformer scale, Liquid AI bets on a fundamentally different architecture. Their efficiency advantage means models can run on phones and embedded devices where transformers cannot, opening edge AI markets giants ignore.',

  // AI-Native Level
  aiNativeLevel: 'A',
  aiNativeLevelDescription: 'AI-Native/Zero-to-One: AI IS the product. Inventing a new AI architecture (liquid neural networks) from first principles. Building foundation models, developer platform (LEAP), and mobile app (Apollo) — all pure AI.',
  aiDesignChallenges: [
    'Model customization UX: making ML operations accessible to non-technical enterprise users',
    'On-device AI experience: designing for sub-20ms latency and resource constraints',
    'Developer platform design: LEAP Workbench for model deployment and evaluation',
    'Multi-modal interface: text, vision, and audio model interactions in one platform',
    'Trust design: communicating model capabilities and limitations for enterprise adoption',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Ramin Hasani',
      role: 'CEO & Co-founder',
      background: 'PhD CS (TU Wien), MIT CSAIL postdoc. Former Principal AI Scientist at Vanguard Group. Inventor of liquid neural networks.',
    },
    {
      name: 'Mathias Lechner',
      role: 'CTO & Co-founder',
      background: 'PhD from ISTA (supervised by Tom Henzinger), MIT CSAIL postdoc. Published in Nature Machine Intelligence, NeurIPS, ICML.',
    },
    {
      name: 'Alexander Amini',
      role: 'CSO & Co-founder',
      background: 'BS/MS/PhD in CS from MIT. Creator of "MIT Introduction to Deep Learning" course (10M+ views). Research deployed in autonomous vehicles and drug discovery.',
    },
    {
      name: 'Daniela Rus',
      role: 'Co-founder',
      background: 'Director of MIT CSAIL, MacArthur Fellow, member of National Academy of Engineering. One of the most influential robotics researchers in the world.',
    },
  ],
  whyBuilding: 'Observed that transformer AI is extremely compute-hungry and centralized. Went back to biological first principles — studying how a worm brain achieves complex behavior with 302 neurons — to invent a new mathematical framework for efficient intelligence.',
  beliefs: [
    '"Maximum intelligence. Minimum compute." — efficiency is foundational to accessible AI',
    'The transformer is not the only (or best) path to intelligence',
    'AI should be private, local, and efficient — not dependent on cloud infrastructure',
    'Biology offers blueprints for efficient computation (C. elegans inspiration)',
    'Burn the Playbook: first-principles innovation over established practices',
  ],
  designPhilosophy: 'Making sophisticated AI capabilities feel simple and inevitable. Translating complex ML operations into accessible experiences for non-technical users.',
  greenFlags: [
    'World-class founding team — MIT CSAIL director + 3 PhD researchers',
    '$250M Series A led by AMD Ventures at $2B+ valuation (unicorn)',
    'Shopify production deployment validates enterprise readiness',
    'Novel architecture with genuine technical differentiation',
    'AMD CES 2026 keynote alongside OpenAI — rising industry visibility',
    'Strong angel investors: GitHub co-founder, Shopify co-founder, Naval Ravikant',
  ],
  redFlags: [
    'Unproven architecture at large scale — transformers have massive ecosystem advantage',
    'Small team (~88 people) competing against 1000+ person AI labs',
    'Design function appears very early-stage — may lack design culture',
    'Enterprise-heavy focus limits consumer brand building',
    'Cambridge/Boston HQ may limit talent pool vs SF',
  ],

  // Design Opportunity
  designTeam: {
    designHead: 'Unknown (no Head of Design identified)',
    teamSize: 'Very small (estimated 1-3, early-stage design function)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Model customization workflows: defining fine-tuning and specialization logic',
        'Deployment pipeline design: model optimization and deployment flows',
        'Multi-modal interaction patterns: text, vision, and audio model switching',
        'Edge device constraints: designing for sub-20ms latency requirements',
      ],
    },
    evaluation: {
      level: 'medium',
      tasks: [
        'Model evaluation dashboard: comparing performance across deployments',
        'Quality metrics visualization for enterprise customers',
        'A/B testing framework for model variants',
      ],
    },
    interface: {
      level: 'high',
      tasks: [
        'LEAP Workbench: enterprise developer platform for AI deployment',
        'Apollo mobile app: on-device AI assistant experience',
        'Liquid Playground: web-based model testing interface',
        'Design system and component library creation',
      ],
    },
  },
  productStage: '0→1',

  // Product & User Context
  targetAudiences: {
    primary: 'Enterprise ML engineers and developers deploying AI at the edge',
    secondary: 'Device manufacturers and IoT companies needing on-device AI',
  },
  userProblems: [
    'Cloud AI inference is expensive and adds latency — enterprises need local processing',
    'Privacy-sensitive industries cannot send data to cloud AI providers',
    'Edge devices have strict compute and memory constraints that large models cannot meet',
    'Fine-tuning and deploying specialized models requires deep ML expertise',
    'Existing AI models are hardware-locked — enterprises need cross-platform deployment',
  ],

  // Designer Links
  designerLinks: [
    {
      name: 'Jeffrey Li',
      role: 'Head of Product and Business',
      platform: 'twitter',
      url: 'https://x.com/jeffmli',
      description: 'Product leadership insights and Liquid AI updates',
    },
    {
      name: 'Jeffrey Li',
      role: 'Head of Product and Business',
      platform: 'linkedin',
      url: 'https://www.linkedin.com/in/jeffrey-li-7aa67712a/',
      description: 'Liquid AI product direction and strategy',
    },
  ],

  // Open Roles
  openRoles: [],

  // Culture Insights
  cultureInsights: [
    {
      source: 'glassdoor',
      sentiment: 'neutral',
      rating: 3.4,
      content: 'Limited reviews due to small team size. Company still young (founded 2023). Rating based on very few data points.',
      url: 'https://www.glassdoor.com/Reviews/Liquid-AI-Reviews-E10965590.htm',
    },
    {
      source: 'careers',
      sentiment: 'positive',
      content: 'Five core values: No Nonsense Meritocracy, Burn the Playbook (first-principles thinking), Proactive Execution, Be White-Box Explainable (transparency), We Grow Together (employee wellbeing).',
      url: 'https://jobs.ashbyhq.com/liquid-ai',
    },
    {
      source: 'linkedin',
      sentiment: 'positive',
      content: 'Research-heavy culture with MIT CSAIL DNA. Team includes PhDs and published ML researchers. Academic rigor blended with startup speed.',
    },
  ],

  // My Tracking
  tracking: {
    status: 'researching',
    fitScore: 7,
    whyJoin: [
      'Level A AI-native — inventing new AI architecture from scratch',
      'Potential founding designer role — shape design culture from zero',
      'World-class founding team (MIT CSAIL director, MacArthur Fellow)',
      'Unicorn stage ($2B+) with strong AMD/Shopify partnerships',
      'Both enterprise platform + consumer mobile app design scope',
      'Novel technical challenge: making liquid neural networks accessible',
    ],
    whyNot: [
      'Very early design function — may lack design mentorship and culture',
      'Research-heavy culture may undervalue design contributions',
      'Unproven architecture risk — if transformers win, company struggles',
      'Small team (~88) with heavy engineering focus (11 of 17 open roles are R&E)',
      'Cambridge/Boston HQ — not SF-centric',
    ],
    nextActions: [
      'Apply to Member of Technical Staff - Product Designer role',
      'Try Apollo mobile app to understand their product quality',
      'Test models on Liquid Playground',
      'Research Jeffrey Li (Head of Product) to understand product vision',
      'Watch Ramin Hasani talks on liquid neural networks',
    ],
    notes: 'Interesting 0→1 opportunity at a unicorn. The "Member of Technical Staff" title for designers signals technical parity with engineers. Key risk: novel architecture may not win vs transformers. Key upside: founding designer at a well-funded, MIT-backed AI company.',
  },

  // Meta
  lastUpdated: '2026-02-18',
  sources: [
    {
      title: 'Liquid AI Official Website',
      url: 'https://www.liquid.ai/',
    },
    {
      title: 'Liquid AI $250M Series A Announcement',
      url: 'https://www.liquid.ai/blog/we-raised-250m-to-scale-capable-and-efficient-general-purpose-ai',
    },
    {
      title: 'TechCrunch: $250M Funding',
      url: 'https://techcrunch.com/2024/12/13/liquid-ai-just-raised-250m-to-develop-a-more-efficient-type-of-ai-model/',
    },
    {
      title: 'TechCrunch: MIT Spinoff Announcement',
      url: 'https://techcrunch.com/2023/12/06/liquid-ai-a-new-mit-spinoff-wants-to-build-an-entirely-new-type-of-ai-model/',
    },
    {
      title: 'GetLatka: Revenue Data',
      url: 'https://getlatka.com/companies/liquid.ai',
    },
    {
      title: 'Shopify Partnership (Yahoo Finance)',
      url: 'https://finance.yahoo.com/news/liquid-ai-announces-multi-partnership-150000563.html',
    },
    {
      title: 'Product Designer Job Posting (Ashby)',
      url: 'https://jobs.ashbyhq.com/liquid-ai/5ffdf938-a578-4c72-a7bb-f4152b7be45a',
    },
    {
      title: 'McKinsey: Case for Liquid Foundation Models',
      url: 'https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-case-for-liquid-foundation-models',
    },
    {
      title: 'AMD CES 2026 Keynote with Liquid AI',
      url: 'https://www.techtimes.com/articles/313772/20250105/amd-ceo-lisa-su-declares-ai-everyone-ces-2026-guests-openai-luma-ai-liquid-ai-world-labs.htm',
    },
    {
      title: 'Crunchbase: Liquid AI',
      url: 'https://www.crunchbase.com/organization/liquid-ai',
    },
  ],
};
