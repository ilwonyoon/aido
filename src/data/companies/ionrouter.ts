import { Company } from '../types';

export const ionrouter: Company = {
    id: 'ionrouter',
    name: 'IonRouter',
    description: 'High-throughput, low-cost AI inference API built on a custom engine (IonAttention) optimized for NVIDIA Grace Hopper GPUs. Drop-in OpenAI-compatible API for open-source LLMs, vision, video, and TTS at ~2x below market rate.',
    website: 'https://ionrouter.io',
    screenshot: '/screenshots/ionrouter-screenshot.png',
    headquarters: 'San Francisco, CA',
    remote: 'Unknown',

    // OG Image
    ogImage: '/og-images/ionrouter-og.webp',

    // Multi-dimensional Tags
    aiTypes: ['text-assistant'],
    markets: ['b2b'],
    category: 'developer-tools' as const,

    industries: ['infrastructure'],

    // Business
    stage: 'Pre-seed',
    valuation: 'Unknown',
    totalFunding: 'YC W26 ($500K standard)',
    fundingHistory: [
      { stage: 'Pre-seed', amount: '~$500K', date: '2026-01', leadInvestors: ['Y Combinator'] },
    ],
    revenue: 'Unknown (early revenue, launched early 2026)',
    growth: 'Newly launched; YC W26 batch',
    runway: 'Unknown',
    customers: 'AI teams, developers running open-source LLMs',

    // Growth & Potential
    growthMetrics: {
      stage: 'high-growth',
      revenueGrowth: 'Unknown (pre-revenue or very early)',
      userGrowth: 'Early launch; Product Hunt listed; HN Launch post',
      signals: [
        'YC W26 batch acceptance (Winter 2026)',
        'Launch HN post with community traction',
        '7,167 tok/s on single GH200 — fastest published Grace Hopper inference benchmark',
        'Drop-in OpenAI-compatible API reducing friction to adopt',
      ],
      tam: '$103B AI inference market (2025), projected $255B by 2030 (MarketsandMarkets)',
      marketShare: '<0.01% of TAM = massive upside if they can scale',
      ceiling: 'Early innings — inference market growing 19%+ CAGR; GPU cost is biggest blocker for AI adoption',
      tailwinds: [
        'Exploding demand for open-source model inference (Llama, Mistral, Qwen)',
        'Enterprises seeking to avoid OpenAI/Anthropic vendor lock-in',
        'NVIDIA Grace Hopper (GH200) adoption driving new efficiency gains',
        'AI agent workloads require sustained high-throughput, low-latency inference',
        'Cost pressure on AI applications pushing teams to optimize spend',
      ],
      headwinds: [
        'Competing against well-funded incumbents (Together AI, Fireworks, Groq)',
        'Two-person team limits sales and support capacity',
        'GPU infrastructure requires significant capex or long-term cloud commitments',
        'Model proliferation means constant engineering to add new models',
        'Big cloud providers (AWS, GCP, Azure) expanding managed inference offerings',
      ],
      moatType: 'technology',
      moatStrength: 'Early moat via IonAttention engine and GH200 optimization; defensibility unclear long-term without scale.',
    },

    // Competition
    competitors: [
      {
        name: 'Together AI',
        description: 'Serverless inference on own GPU clusters (H100, H200, B200). OpenAI-compatible API.',
        whyTheyWin: 'Scale, brand, diverse model catalog, fine-tuning support, strong enterprise relationships.',
      },
      {
        name: 'Fireworks AI',
        description: 'High-speed inference provider focused on low-latency with proprietary FireAttention kernel.',
        whyTheyWin: 'Speed track record, developer trust, broader model support, enterprise contracts.',
      },
      {
        name: 'Groq',
        description: 'Custom LPU chips delivering extreme token throughput for specific models.',
        whyTheyWin: 'Unmatched raw speed on supported models, strong brand in developer community.',
      },
      {
        name: 'Modal',
        description: 'Serverless GPU cloud for custom model deployment and ML workloads.',
        whyTheyWin: 'Flexible custom deployments, strong Python developer experience, large community.',
      },
    ],
    marketPosition: 'Fastest Grace Hopper–optimized inference at lowest cost for open-source models',
    moat: [
      'IonAttention: custom inference kernel built from scratch for NVIDIA GH200',
      'GPU multiplexing with <100ms model switch time = high utilization, lower cost',
    ],
    vsGiants: 'Targeting GH200 hardware efficiency where incumbents under-index; drop-in API means zero switching cost.',

    // AI-Native Level
    aiNativeLevel: 'A',
    aiNativeLevelDescription: 'AI-Native/Zero-to-One: AI inference IS the product. Building low-level GPU infrastructure and custom kernels to power AI applications globally.',
    aiDesignChallenges: [
      'Developer console and API key management UX for infrastructure product',
      'Real-time token throughput and latency dashboards for engineers',
      'Model selection and routing transparency for multi-modal workloads',
      'Pricing calculator and usage analytics for cost-sensitive teams',
    ],

    // Founders & Vision
    founders: [
      {
        name: 'Suryaa Rajinikanth',
        role: 'Co-founder & CEO',
        background: 'Georgia Tech CS. Lead Engineer at TensorDock (built first distributed GPU marketplace). ML infrastructure and production systems at Palantir.',
      },
      {
        name: 'Veer Shah',
        role: 'Co-founder',
        background: 'UW-Madison CS (graduated Dec 2025). Aerospace startup: led Space Force SBIR contract for military satellite comms, contributed to NASA SBIR programs.',
      },
    ],
    whyBuilding:
      'Every inference provider is either fast-but-expensive (Together, Fireworks) or cheap-but-DIY (Modal, RunPod with slow cold starts). IonRouter eliminates that tradeoff with a custom stack that multiplexes models on one GPU with <100ms switch time.',
    beliefs: [
      'GPU utilization is the key lever to reduce inference cost',
      'Open-source models will dominate most enterprise AI workloads',
      'NVIDIA Grace Hopper is underutilized and underoptimized by incumbents',
      'Infrastructure should be invisible — drop-in replacement, not migration project',
    ],
    designPhilosophy: 'Unknown',
    greenFlags: [
      'YC W26 acceptance — strong signal on founder capability',
      '7,167 tok/s on single GH200 is a real technical benchmark, not marketing',
      'Both founders have deep infra credentials (Palantir, TensorDock, Space Force)',
      'OpenAI-compatible API = zero switching cost for developers',
      'Grace Hopper specialization is a smart underdog bet vs H100/H200 incumbents',
    ],
    redFlags: [
      'Two-person team — no design, sales, or support capacity',
      'Inference infra is brutal: margins thin, capex high, competition well-funded',
      'No reported ARR, customer counts, or traction metrics post-launch',
      'Long-term moat unclear if Together/Fireworks also optimize for GH200',
    ],

    // Design Opportunity
    designTeam: {
      teamSize: 'None (2-person founding team, engineering only)',
    },
    designWorkType: {
      logicBehavior: {
        level: 'low',
        tasks: [
          'API routing logic and model selection flows',
        ],
      },
      evaluation: {
        level: 'low',
        tasks: [
          'Performance benchmark dashboards',
          'Latency and throughput monitoring UI',
        ],
      },
      interface: {
        level: 'medium',
        tasks: [
          'Developer console (API keys, usage, billing)',
          'Model catalog and deployment UI',
          'Documentation and onboarding experience',
        ],
      },
    },
    productStage: '0→1',

    // Product & User Context
    targetAudiences: {
        primary: 'AI engineers and developers needing fast, cheap open-source model inference',
        secondary: 'Startups building LLM-powered products who are cost-sensitive',
    },
    userProblems: [
        'High inference costs eating into margins for AI-powered products',
        'Slow cold starts on DIY serverless GPU setups disrupting UX',
        'Complexity of managing vLLM and GPU infrastructure at scale',
        'No single provider combining low cost + high throughput + easy API',
    ],

    // Designer Links
    designerLinks: [],

    // Open Roles
    openRoles: [],

    // Culture Insights
    cultureInsights: [],

    // My Tracking
    tracking: {
      status: 'watching',
      fitScore: 3,
      whyJoin: [
        'Ground-floor YC startup with real technical differentiation',
        'Infrastructure product that could grow into a large design surface',
      ],
      whyNot: [
        '2-person engineering-only team — no design role exists or is planned near-term',
        'Infrastructure/API product has minimal design surface vs consumer or SaaS tools',
        'Very early and high-risk with no public traction data',
        'Competitive market dominated by well-funded players',
      ],
      nextActions: [
        'Monitor for Series A or team expansion announcement',
        'Watch if they build a developer console that warrants a designer',
      ],
    },

    // Meta
    lastUpdated: '2026-05-01T00:00:00',
    sources: [
      { title: 'Launch HN: IonRouter (YC W26) – High-throughput, low-cost inference', url: 'https://news.ycombinator.com/item?id=47355410' },
      { title: 'IonRouter – Serve Any AI Model, Faster & Cheaper | Product Hunt', url: 'https://www.producthunt.com/products/ionrouter-by-cumulus-labs' },
      { title: 'Cumulus Labs | Y Combinator', url: 'https://www.ycombinator.com/companies/cumulus-labs' },
      { title: 'Suryaa Rajinikanth – LinkedIn', url: 'https://www.linkedin.com/in/suryaa-rajinikanth/' },
      { title: 'Veer Shah – LinkedIn', url: 'https://www.linkedin.com/in/veer-shah-62aa8526a/' },
      { title: 'Ionattention: Grace Hopper–Native Inference | Cumulus Labs Blog', url: 'https://cumulus.blog/ionattention' },
      { title: 'AI Inference Market Size, Share & Growth 2025–2030 | MarketsandMarkets', url: 'https://www.marketsandmarkets.com/Market-Reports/ai-inference-market-189921964.html' },
    ],
};
