import { Company } from '../types';

export const scaleAi: Company = {
    id: 'scale-ai',
    name: 'Scale AI',
    description: 'AI data platform powering the most advanced LLMs and AI models with high-quality training data.',
    website: 'https://scale.com',
    headquarters: 'San Francisco, CA',
    remote: 'Hybrid',

    // Business
    stage: 'Meta Partnership (49% stake)',
    valuation: '$29B (Jun 2025, after Meta deal)',
    totalFunding: '$1B+ (pre-Meta)',
    fundingHistory: [
      { stage: 'Seed', amount: '$4.5M', date: '2016-08', leadInvestors: ['Y Combinator'] },
      { stage: 'Series A', amount: '$18M', date: '2018-08', leadInvestors: ['Index Ventures'] },
      { stage: 'Series B', amount: '$100M', date: '2019-08', valuation: '$1B', leadInvestors: ['Founders Fund'] },
      { stage: 'Series C', amount: '$155M', date: '2021-04', valuation: '$3.5B', leadInvestors: ['Tiger Global'] },
      { stage: 'Series D', amount: '$325M', date: '2021-07', valuation: '$7B', leadInvestors: ['Greenoaks Capital'] },
      { stage: 'Series E', amount: '$580M', date: '2024-03', valuation: '$13B', leadInvestors: ['Accel'] },
      { stage: 'Series F', amount: '$1B', date: '2024-05', valuation: '$14B', leadInvestors: ['Accel'] },
    ],
    revenue: 'Not disclosed (enterprise contracts)',
    growth: 'Meta invested $14.3B for 49% stake (Jun 2025)',
    runway: 'Meta partnership — essentially unlimited',
    customers: 'OpenAI, Google, Anthropic, Meta, Microsoft, U.S. Government',

    // Competition
    competitors: [
      {
        name: 'Label Your Data',
        description: 'Data labeling platform for ML teams',
        whyTheyWin: 'Secure, high-quality, domain-specific annotation without Scale\'s Meta baggage',
      },
      {
        name: 'Labelbox',
        description: 'Unified annotation platform with managed services',
        whyTheyWin: 'Better tooling, not tied to Meta, more neutral vendor',
      },
      {
        name: 'V7 Labs',
        description: 'AI-powered data annotation platform',
        whyTheyWin: 'Significantly cheaper ($150/mo vs Scale\'s enterprise pricing)',
      },
      {
        name: 'SuperAnnotate',
        description: 'Annotation tool with AI-assisted labeling',
        whyTheyWin: 'Strong 2D/3D support, not tied to Meta',
      },
      {
        name: 'Surge AI',
        description: 'High-quality data labeling with elite annotators',
        whyTheyWin: 'Elite labelers (mathematicians, etc), customers include Anthropic, Google',
      },
    ],
    marketPosition: 'Was leader, now losing share due to Meta deal',
    moat: [
      'Meta partnership: $14B investment, 49% stake',
      'Government contracts: U.S. military, intelligence',
      'Proprietary Data Engine for LLM training',
      'Scale at scale: massive labeling infrastructure',
      'Founded by Alexandr Wang at age 19 → now world\'s youngest billionaire',
    ],
    vsGiants: 'Scale was the data infrastructure for AI leaders. Meta deal changed everything — OpenAI, Google pulled out due to conflict of interest.',

    // AI-Native Level
    aiNativeLevel: 3,
    aiNativeLevelDescription: 'AI is core differentiator. Scale\'s entire value is enabling AI model training. But it\'s infrastructure, not AI product itself.',
    aiDesignChallenges: [
      'Data quality at scale: ensuring high-quality labels across millions of examples',
      'Tooling for labelers: designing annotation interfaces for complex data types',
      'Workflow orchestration: managing thousands of labelers',
      'Quality control: designing review and verification systems',
      'GenAI integration: how AI assists human labelers',
    ],

    // Founders & Vision
    founders: [
      {
        name: 'Alexandr Wang',
        role: 'Co-founder (now at Meta)',
        background: 'Founded Scale at age 19. Dropped out of MIT. Youngest self-made billionaire ($3.6B net worth at age 28). Now at Meta after June 2025 deal.',
      },
      {
        name: 'Lucy Guo',
        role: 'Co-founder (fired 2018)',
        background: 'Co-founded Scale through Y Combinator. Fired two years later.',
      },
    ],
    whyBuilding: 'Wang realized AI models are only as good as their training data. He saw data labeling as the bottleneck for AI progress and built Scale to solve it.',
    beliefs: [
      'Data quality > data quantity',
      'Human-AI collaboration: AI assists, humans verify',
      'Infrastructure-first: enable AI leaders, not build consumer apps',
      'Scale matters: winner-take-most in data infrastructure',
      'Government partnerships: national security applications',
    ],
    designPhilosophy: 'Enterprise-grade data tools. Design for labelers, reviewers, and ML engineers.',
    greenFlags: [
      'Meta partnership: $14B investment',
      'Elite customers: OpenAI, Google, Anthropic (historically)',
      'Government contracts: stable revenue',
      'Founder track record: Wang built to $29B by age 28',
    ],
    redFlags: [
      'Meta deal backlash: OpenAI, Google pulled out',
      'Neutrality concerns: Meta owning 49% = conflict of interest',
      'Founder left: Wang now at Meta, Jason Droege is CEO',
      'Competitive pressure: customers moving to Label Your Data, Labelbox',
      'Unclear product direction post-Meta deal',
    ],

    // Design Opportunity
    designTeam: {
      teamSize: '~50-100 (estimated)',
    },
    designWorkType: {
      logicBehavior: {
        level: 'medium',
        tasks: [
          'Designing labeler workflows: how humans annotate complex data',
          'Building quality control systems',
          'Defining AI-assisted labeling behaviors',
          'Creating feedback loops for labeler improvement',
        ],
      },
      evaluation: {
        level: 'high',
        tasks: [
          'Designing quality metrics for labeled data',
          'Building review and verification workflows',
          'Creating inter-rater agreement systems',
          'Defining gold standard datasets',
        ],
      },
      interface: {
        level: 'high',
        tasks: [
          'Annotation tools for images, video, text, 3D, audio',
          'Labeler dashboards and task management',
          'ML engineer interfaces for dataset management',
          'Quality control interfaces for reviewers',
        ],
      },
    },
    productStage: '10→100',

    // Product & User Context
    targetAudiences: {
        primary: 'AI companies and researchers training foundation models',
        secondary: 'Enterprises fine-tuning AI for industry-specific applications',
    },
    userProblems: [
        'Training high-quality AI models requires massive labeled datasets costing millions',
        'Hiring and managing data labeling teams at scale is complex and expensive',
        'RLHF (reinforcement learning from human feedback) requires domain expertise at scale',
        'Evaluating AI model quality requires systematic testing most teams cannot build',
        'Data quality directly impacts model performance but quality control is manual and slow',
    ],

    // Designer Links
    designerLinks: [],

    // Open Roles
    openRoles: [
      {
        title: 'Product Designer, Enterprise',
        location: 'San Francisco, CA (Hybrid)',
        url: 'https://scale.com/careers/4623277005',
        type: 'full-time',
        aboutRole: 'Build AI-powered applications that redefine enterprise workflows, working on cutting-edge customer-facing AI and internal SaaS products.',
        responsibilities: [
          'Design enterprise applications for AI data workflows',
          'Work on mix of customer-facing AI and internal tools',
          'Collaborate with ML engineers and product teams',
          'Build zero-to-one products in fast-paced environment',
        ],
        requirements: [
          'Experience building complex, technical products from zero to one',
          'Thrives in fast-paced environments',
          'Strong portfolio of enterprise product design',
        ],
        whyInteresting: 'Designing the data infrastructure powering GPT-4, Claude, Gemini. Working on AI training at scale.',
      },
      {
        title: 'Senior Product Designer, GenAI Marketplace',
        location: 'San Francisco, CA (Hybrid)',
        url: 'https://scale.com/careers/4490106005',
        level: 'Senior',
        type: 'full-time',
        aboutRole: 'Develop a first-class experience for vetted high-quality GenAI contributors, attracting the best experts across all relevant fields.',
        responsibilities: [
          'Design marketplace for AI contributors',
          'Build contributor onboarding and workflows',
          'Create quality vetting systems',
        ],
        whyInteresting: 'Building a marketplace for AI expertise. Two-sided marketplace design challenge.',
      },
      {
        title: 'Product Designer, Generative AI',
        location: 'San Francisco, CA (Hybrid)',
        url: 'https://scale.com/careers/4404072005',
        type: 'full-time',
        aboutRole: 'Design generative AI products and features for Scale\'s platform.',
        whyInteresting: 'Working on Scale\'s GenAI products.',
      },
    ],

    // Culture Insights
    cultureInsights: [
      {
        source: 'glassdoor',
        sentiment: 'neutral',
        rating: 3.5,
        content: 'Fast-paced, demanding culture. Meta deal caused uncertainty. Founder left for Meta.',
      },
      {
        source: 'blind',
        sentiment: 'negative',
        content: 'Meta deal controversial internally. Some customers leaving due to conflict of interest.',
      },
    ],

    growthMetrics: {
      stage: 'high-growth',
      revenueGrowth: "$1B+ ARR (2025), ~2x YoY",
      userGrowth: "1000+ customers historically, losing some after Meta deal",
      signals: [
        "$29B valuation at Series F (10x from $2.7B in 3 years)",
        "$14B Meta investment (49% ownership)",
        "$1B+ ARR from data labeling and AI infrastructure",
        "Powers GPT-4, Claude, Gemini training data",
        "Government contracts (DoD, intelligence agencies)",
      ],

      tam: "$50B+ (AI training data, evaluation, and infrastructure)",
      marketShare: "~2% = 25x upside potential",
      ceiling: "Mid innings: AI training data market growing rapidly, but Meta deal created headwinds. Ceiling depends on retaining neutrality perception.",
      tailwinds: [
        "Every AI model requires massive human-labeled data",
        "Government AI spending increasing (defense, intelligence)",
        "RLHF (human feedback) becoming critical for AI quality",
        "Meta partnership = $14B capital + strategic value",
      ],
      headwinds: [
        "OpenAI, Google pulled out after Meta deal (neutrality concerns)",
        "Meta owning 49% creates conflict of interest perception",
        "Founder Alexandr Wang left for Meta (leadership transition)",
        "Labelbox, Label Your Data competing for enterprise",
        "Open-source labeling tools reducing TAM",
      ],

      moatType: 'switching-costs',
      moatStrength: "Medium: Data pipelines and integrations create switching costs. Government relationships are valuable. But Meta deal damaged neutrality moat. Commoditization pressure increasing.",
    },

    // My Tracking
    tracking: {
      status: 'watching',
      fitScore: 6,
      whyJoin: [
        'AI-native Level 3: enabling AI infrastructure',
        'Multiple Product Designer roles open',
        'Elite customers (historically): OpenAI, Anthropic, Google',
        'Massive scale: powering the best AI models',
      ],
      whyNot: [
        'Meta deal baggage: customers leaving, neutrality concerns',
        'Founder left: Wang now at Meta',
        'Infrastructure product: less consumer-facing',
        'Unclear direction post-Meta deal',
      ],
      nextActions: [
        'Research Scale\'s product offerings',
        'Understand Meta deal implications',
        'Connect with Scale designers on LinkedIn',
      ],
    },

    // Meta
    lastUpdated: '2026-01-26T11:20:00',
    sources: [
      {
        title: 'Scale AI Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Scale_AI',
      },
      {
        title: 'Meta invests $14.3B in Scale AI',
        url: 'https://www.entrepreneur.com/business-news/who-is-alexandr-wang-the-founder-of-scale-ai-joining-meta/493281',
      },
      {
        title: 'Scale AI competitors after Meta deal',
        url: 'https://labelyourdata.com/articles/scale-ai-competitors',
      },
      {
        title: 'Alexandr Wang profile',
        url: 'https://en.wikipedia.org/wiki/Alexandr_Wang',
      },
    ],
  };
