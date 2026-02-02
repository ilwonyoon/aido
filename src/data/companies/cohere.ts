import { Company } from '../types';

export const cohere: Company = {
    id: 'cohere',
    name: 'Cohere',
    description: 'Enterprise AI platform providing secure, customizable language models for businesses to build AI applications.',
    website: 'https://cohere.com',
    headquarters: 'Toronto, Canada',
    remote: 'Hybrid',

    // OG Image
    ogImage: '/og-images/cohere-og.webp',


  // Multi-dimensional Tags
  aiTypes: ['foundation-model'],
  markets: ['b2b', 'enterprise'],
  industries: ['infrastructure'],

    // Business
    stage: 'Series D',
    valuation: '$7B (Sept 2025)',
    totalFunding: '$1.54B',
    fundingHistory: [
      { stage: 'Seed', amount: '$10M', date: '2020-06', leadInvestors: ['Index Ventures'] },
      { stage: 'Series A', amount: '$40M', date: '2021-11', leadInvestors: ['Index Ventures'] },
      { stage: 'Series B', amount: '$125M', date: '2022-02', valuation: '$1.1B', leadInvestors: ['Tiger Global'] },
      { stage: 'Series C', amount: '$270M', date: '2023-06', valuation: '$2.1B', leadInvestors: ['Inovia Capital', 'Index Ventures'] },
      { stage: 'Series D', amount: '$500M', date: '2025-01', valuation: '$5.5B', leadInvestors: ['NVIDIA', 'Oracle'] },
    ],
    revenue: '$150M ARR (Oct 2025), projected $200M+ (2026)',
    growth: 'Doubled ARR in first half of 2025',
    runway: 'Strong — preparing for IPO mid-2026',
    customers: '316+ enterprise customers globally',

    // Competition
    competitors: [
      {
        name: 'OpenAI',
        description: 'GPT-4 models with enterprise API',
        whyTheyWin: 'Brand recognition, best models, massive scale',
      },
      {
        name: 'Anthropic',
        description: 'Claude models for enterprise',
        whyTheyWin: '#1 in enterprise (32% market share), developer favorite',
      },
      {
        name: 'Google Vertex AI',
        description: 'Google\'s enterprise AI platform',
        whyTheyWin: 'Google Cloud distribution, Gemini models',
      },
      {
        name: 'Microsoft Azure OpenAI',
        description: 'OpenAI models via Azure',
        whyTheyWin: 'Microsoft enterprise relationships, Azure integration',
      },
    ],
    marketPosition: 'Top 5 enterprise LLM provider, 0.13% market share',
    moat: [
      'Data sovereignty: on-prem deployment for regulated industries',
      'Customization: fine-tuning for enterprise use cases',
      'Aidan Gomez = Transformer co-author (credibility)',
      'Strategic partnerships: Oracle, NVIDIA',
      'Canadian base: alternative to US AI giants for international customers',
    ],
    vsGiants: 'Cohere focuses on enterprise deployment flexibility (on-prem, private cloud) vs OpenAI/Anthropic\'s API-first approach.',

    // AI-Native Level
    aiNativeLevel: 'A',
    aiNativeLevelDescription: 'AI-Native/Zero-to-One: AI IS the product. Building enterprise LLM platform from scratch with Transformer co-author. Defining enterprise AI deployment standards.',
    aiDesignChallenges: [
      'Enterprise deployment: designing for on-prem, private cloud, multi-cloud',
      'Customization interfaces: fine-tuning workflows for enterprise',
      'Security-first design: building for regulated industries',
      'Developer experience: API design, SDKs, documentation',
      'Agentic AI: designing multi-step workflows with North platform',
    ],

    // Founders & Vision
    founders: [
      {
        name: 'Aidan Gomez',
        role: 'CEO & Co-founder',
        background: 'Co-author of "Attention Is All You Need" (Transformer paper). Former Google Brain researcher at age 20. Built the architecture powering modern AI.',
      },
      {
        name: 'Ivan Zhang',
        role: 'Co-founder',
        background: 'Engineer with deep ML expertise.',
      },
      {
        name: 'Nick Frosst',
        role: 'Co-founder',
        background: 'Former Google Brain researcher.',
      },
    ],
    whyBuilding: 'Gomez co-invented the Transformer at Google but saw enterprises struggling to adopt AI. Cohere was built to give businesses control, security, and customization vs generic API wrappers.',
    beliefs: [
      'Enterprises need data sovereignty: on-prem deployment matters',
      'Customization > one-size-fits-all: every company needs tailored AI',
      'Security-first: regulated industries (finance, healthcare) need control',
      'Agentic AI is the future: North platform for AI workspaces',
      'Canadian AI leadership: alternative to US tech giants',
    ],
    designPhilosophy: 'Enterprise-grade AI with security and customization. Design for developers and enterprise buyers.',
    greenFlags: [
      'Founder credibility: Gomez co-authored Transformer paper',
      'Strong growth: doubled ARR in 2025, heading to $200M+',
      'IPO-ready: planning mid-2026 IPO',
      'Strategic investors: NVIDIA, Oracle',
      'North platform: competing with Microsoft Copilot, Google Vertex AI',
    ],
    redFlags: [
      'Small market share: 0.13% vs OpenAI/Anthropic dominance',
      'Intense competition: OpenAI ($500B), Anthropic ($183B)',
      'Canadian base: US customers may prefer US vendors',
      'Late to agentic AI: North launched Jan 2025',
    ],

    // Design Opportunity
    designTeam: {
      teamSize: '~30-50 (estimated)',
    },
    designWorkType: {
      logicBehavior: {
        level: 'high',
        tasks: [
          'Designing agentic workflows: North platform for multi-step AI tasks',
          'Building fine-tuning interfaces for enterprise customization',
          'Defining deployment workflows: on-prem, private cloud, multi-cloud',
          'Creating developer tools: API design, SDKs',
        ],
      },
      evaluation: {
        level: 'medium',
        tasks: [
          'Designing model performance metrics for enterprises',
          'Building evaluation frameworks for custom models',
          'Creating security and compliance dashboards',
        ],
      },
      interface: {
        level: 'high',
        tasks: [
          'North workspace platform design',
          'Developer documentation and onboarding',
          'Enterprise dashboards and admin tools',
          'API testing and debugging interfaces',
        ],
      },
    },
    productStage: '1→10',

    // Product & User Context
    targetAudiences: {
        primary: 'Enterprise developers and AI engineering teams building custom AI applications',
        secondary: 'Data scientists and ML engineers requiring fine-tunable language models',
    },
    userProblems: [
        'Using public AI APIs exposes sensitive enterprise data to third-party providers',
        'Pre-trained models need customization for industry-specific use cases and terminology',
        'Enterprise compliance requires models deployable on-premises or in private cloud',
        'Retrieval-augmented generation requires deep technical expertise most teams lack',
        'Balancing model quality with cost and latency constraints in production systems',
    ],

    // Designer Links
    designerLinks: [],

    // Open Roles
    openRoles: [
      {
        title: 'Senior Product Designer',
        location: 'Toronto, Canada / San Francisco, CA / New York, NY / Paris, France (Hybrid)',
        url: 'https://jobs.ashbyhq.com/cohere/ca00e74b-e005-48b3-9158-8064148e1d63',
        level: 'Senior',
        type: 'full-time',
        aboutRole: 'Lead the design process for AI-powered user experiences, conducting research, collaborating with teams, and ensuring high-quality design across platforms.',
        responsibilities: [
          'Design AI-powered user experiences',
          'Conduct user research and usability testing',
          'Collaborate with product, engineering, and research teams',
          'Ensure high-quality design across all platforms',
          'Build design systems for enterprise AI products',
        ],
        requirements: [
          'Experience designing enterprise products',
          'Strong portfolio of product design work',
          'Understanding of AI/ML products',
        ],
        whyInteresting: 'Designing with Transformer co-author. Building enterprise AI for regulated industries. IPO-bound company.',
      },
    ],

    // Culture Insights
    cultureInsights: [
      {
        source: 'linkedin',
        sentiment: 'positive',
        content: 'Research-driven culture. Gomez brings deep technical credibility. Toronto HQ offers Canadian tech scene.',
      },
    ],

    growthMetrics: {
      stage: 'high-growth',
      revenueGrowth: "$200M+ ARR (estimated 2025), ~2-3x YoY",
      userGrowth: "1000+ enterprise customers",
      signals: ["$6.8B valuation", "$1B+ raised", "1000+ enterprise customers", "Transformer co-author CEO", "Enterprise-first positioning"],
      tam: "$500B+ (Enterprise AI for all business functions)",
      marketShare: "<0.1%",
      ceiling: "Early-mid innings: Enterprise AI early, Cohere enterprise-first vs ChatGPT, competing against Anthropic/OpenAI.",
      tailwinds: ["Enterprise data privacy concerns", "Canadian company = data sovereignty", "Transformer co-author credibility"],
      headwinds: ["Anthropic's Claude dominant in enterprise", "OpenAI has Microsoft distribution", "Google Workspace AI", "Enterprise sales slow"],
      moatType: 'switching-costs',
      moatStrength: "Medium: Enterprise integrations and compliance create switching costs. Canadian positioning helps. No network effects.",
    },

    // My Tracking
    tracking: {
      status: 'interested',
      fitScore: 8,
      whyJoin: [
        'AI-native Level A: AI is the product',
        'Founder credibility: Aidan Gomez co-authored Transformer paper',
        'Strong growth: $200M+ ARR heading into 2026',
        'IPO-bound: mid-2026 IPO planned',
        'Senior Product Designer role open',
        'Enterprise focus: designing for regulated industries',
      ],
      whyNot: [
        'Toronto HQ: Canadian location (but SF/NY offices available)',
        'Smaller than OpenAI/Anthropic',
        'Market share: 0.13% vs giants',
      ],
      nextActions: [
        'Research Aidan Gomez and Transformer paper',
        'Try Cohere API and North platform',
        'Connect with Cohere designers on LinkedIn',
        'Apply for Senior Product Designer role',
      ],
    },

    // Meta
    lastUpdated: '2026-01-26T12:10:00',
    sources: [
      {
        title: 'Cohere Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Cohere',
      },
      {
        title: 'Aidan Gomez profile',
        url: 'https://en.wikipedia.org/wiki/Aidan_Gomez',
      },
      {
        title: 'Cohere raises $500M at $7B valuation',
        url: 'https://tracxn.com/d/companies/cohere/__o4xfwmr3XwgsGEyH41XvwBm6Xd-SjsMlSld3d4ci6G0',
      },
      {
        title: 'Cohere IPO plans 2026',
        url: 'https://startupwired.com/2025/10/22/cohere-prepares-for-ipo-as-it-redefines-the-global-ai-landscape/',
      },
    ],
  };
