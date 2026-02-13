import { Company } from '../types';

export const huggingFace: Company = {
  id: 'hugging-face',
  name: 'Hugging Face',
  description:
    'Open-source AI platform democratizing machine learning by hosting models, datasets, and collaborative tools for the global ML community.',
  website: 'https://huggingface.co',
  headquarters: 'New York, NY',
  remote: 'Yes',

    // OG Image
    ogImage: '/og-images/hugging-face-og.webp',

  // Category
  category: 'ai-models' as const,

  // Multi-dimensional Tags
  aiTypes: ['model-platform', 'ai-infrastructure'],
  markets: ['prosumer', 'b2b', 'enterprise'],
  industries: ['infrastructure', 'developer-tools'],

  // Business
  stage: 'Series D',
  valuation: '$4.5B (Aug 2023)',
  totalFunding: '$395M',
  fundingHistory: [
    {
      stage: 'Seed',
      amount: '$1.2M',
      date: '2017-03',
      leadInvestors: ['Betaworks'],
    },
    {
      stage: 'Seed',
      amount: '$4M',
      date: '2018-05',
      leadInvestors: ['Ronny Conway'],
    },
    {
      stage: 'Series A',
      amount: '$15M',
      date: '2019-12',
      leadInvestors: ['Lux Capital'],
    },
    {
      stage: 'Series B',
      amount: '$40M',
      date: '2021-03',
      leadInvestors: ['Addition'],
    },
    {
      stage: 'Series C',
      amount: '$100M',
      date: '2022-05',
      valuation: '$2B',
      leadInvestors: ['Lux Capital', 'Sequoia Capital', 'Coatue'],
    },
    {
      stage: 'Series D',
      amount: '$235M',
      date: '2023-08',
      valuation: '$4.5B',
      leadInvestors: ['Salesforce Ventures', 'Google', 'Amazon', 'Nvidia'],
    },
  ],
  revenue: '~$130M ARR (2024)',
  growth: '~86% YoY ($70M 2023 to $130M 2024)',
  runway: 'Strong — $395M raised, revenue growing rapidly',
  customers: '50,000+ organizations, 2,000+ Enterprise Hub customers, 10,000+ companies using platform',

  // Growth & Potential
  growthMetrics: {
    stage: 'high-growth',
    revenueGrowth: '86% YoY ($70M 2023 to $130M 2024)',
    userGrowth: '5M+ registered users, 18M+ monthly visitors, 10M+ developers',
    signals: [
      '$4.5B valuation with $395M total funding',
      '2.4M+ models hosted, 730K+ datasets, 500K+ Spaces apps',
      'LeRobot robotics platform launched — expanding into physical AI',
      'Acquired Pollen Robotics — entering affordable robotics hardware',
      '~600 employees as of early 2026',
    ],

    tam: '$153B (AI platforms software market by 2028)',
    marketShare: 'Dominant open-source ML hub — 1M+ models, no direct equivalent at scale',
    ceiling:
      'Mid-innings: Platform network effects growing but monetization rate still low vs platform value',
    tailwinds: [
      'Open-source AI movement gaining momentum vs proprietary models',
      'Enterprise adoption of ML accelerating across industries',
      'Expanding into robotics (LeRobot) opens massive new TAM',
      'Model-agnostic position benefits from all foundation model advances',
    ],
    headwinds: [
      'Low monetization rate relative to platform usage',
      'Cloud giants (AWS SageMaker, Google Vertex AI, Azure ML) compete on enterprise',
      'Open-source model quality gap narrowing may reduce platform stickiness',
      'Revenue-to-valuation ratio demands significant growth acceleration',
    ],

    moatType: 'platform-ecosystem',
    moatStrength:
      'Strong: 2.4M+ models and 730K+ datasets create massive network effects. Community contributions compound value daily.',
  },

  // Competition
  competitors: [
    {
      name: 'GitHub (Microsoft)',
      description:
        'GitHub Models and Codespaces offering ML model hosting and development',
      whyTheyWin:
        'Massive existing developer base (100M+), deep Microsoft integration, familiar workflows',
    },
    {
      name: 'Replicate',
      description:
        'Cloud platform for running and deploying ML models via API',
      whyTheyWin:
        'Simpler deployment experience, pay-per-use pricing, faster time to production',
    },
    {
      name: 'AWS SageMaker',
      description:
        'End-to-end ML platform for building, training, and deploying models',
      whyTheyWin:
        'Enterprise infrastructure dominance, integrated with AWS ecosystem, massive compute resources',
    },
    {
      name: 'Weights & Biases',
      description:
        'ML experiment tracking, model versioning, and collaboration platform',
      whyTheyWin:
        'Best-in-class experiment tracking UX, deep integrations with training frameworks',
    },
    {
      name: 'Databricks',
      description:
        'Unified data and AI platform for enterprise data pipelines and model development',
      whyTheyWin:
        'End-to-end data-to-model pipeline, $100B+ valuation, strong enterprise relationships',
    },
  ],
  marketPosition:
    'Dominant open-source ML platform — the "GitHub of machine learning" with 2.4M+ models',
  moat: [
    'Largest open-source model repository (2.4M+ models) with unmatched network effects',
    'Community flywheel: researchers publish models, developers consume them, more researchers join',
    'Model-agnostic positioning benefits from every foundation model advance',
    'Open-source Transformers library is industry standard for NLP/ML development',
    'Expanding into robotics (LeRobot + Pollen Robotics acquisition) creates new ecosystem lock-in',
  ],
  vsGiants:
    'Unlike cloud giants (AWS, Google, Azure) that lock users into proprietary ecosystems, Hugging Face is model-agnostic and open-source. This positions them as the neutral platform where all models can be hosted, shared, and deployed — similar to how GitHub won by being language-agnostic.',

  // AI-Native Level
  aiNativeLevel: 'A',
  aiNativeLevelDescription:
    'AI-Native/Platform: AI IS the product. Hugging Face is the infrastructure layer for the entire open-source AI ecosystem. Without AI/ML, the platform has no reason to exist.',
  aiDesignChallenges: [
    'Model discovery UX: Helping users find the right model among 2.4M+ options',
    'Complex ML workflow design: Training, fine-tuning, deployment pipelines for diverse technical skill levels',
    'Community platform design: Balancing developer tools with social collaboration features',
    'Inference playground design: Interactive model testing and comparison interfaces',
    'Documentation as product: Making technical ML concepts accessible through design',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Clement Delangue',
      role: 'CEO',
      background:
        'Ex-Product & CMO at Mention, ex-Product at Moodstocks (acquired by Google). ESCP Business School, Stanford courses. French entrepreneur.',
    },
    {
      name: 'Julien Chaumond',
      role: 'CTO',
      background:
        'Ex-engineer at French Ministry of Economy. Co-founder of Glose. Ecole Polytechnique background. Elite mathematician.',
    },
    {
      name: 'Thomas Wolf',
      role: 'Chief Science Officer',
      background:
        'Trained scientist turned patent lawyer. Created Hugging Face Transformers and Datasets libraries. Author of "Natural Language Processing with Transformers" (O\'Reilly).',
    },
  ],
  whyBuilding:
    'Started as a teenage chatbot app in 2016, pivoted to open-source ML infrastructure in 2019 after recognizing the need to democratize AI tools. Believes the most advanced AI should be accessible to everyone, not just Big Tech.',
  beliefs: [
    'Open source and open science are essential for AI progress',
    'Democratizing AI means making it accessible to all skill levels and organizations',
    'Community-driven development produces better outcomes than closed research',
    'Model-agnostic platforms create more value than proprietary model providers',
    'Good AI requires transparency, collaboration, and shared resources',
  ],
  designPhilosophy:
    'Developer-first platform design with emphasis on discoverability and collaboration. The Hub interface draws inspiration from GitHub with model cards, discussions, and versioning — treating ML artifacts as first-class collaborative objects.',
  greenFlags: [
    'Dominant market position as the "GitHub of ML" with massive network effects',
    'Strong open-source community (2.4M+ models, 730K+ datasets) creating defensible moat',
    'Revenue growing rapidly ($70M to $130M in one year) with huge untapped monetization potential',
    'Expanding into robotics (LeRobot) shows bold vision and new growth vectors',
    'Remote-first culture with global team and flexible work environment',
  ],
  redFlags: [
    'Low monetization rate — vast majority of users on free tier, revenue/valuation ratio needs improvement',
    'Compensation below market (Glassdoor and Levels.fyi data confirm lower-than-average pay)',
    'Some cultural concerns on Glassdoor (blame culture, communication issues in some teams)',
    'Cloud giants (AWS, Google, Azure) can replicate platform features with bigger budgets',
    'No open Product Design roles — design team appears very small',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: 'Very small (~2-4 designers estimated)',
    notableMembers: [
      { name: 'Chun Te Lee', role: 'Product Designer' },
      { name: 'Amelie Viallet', role: 'Design Engineer' },
    ],
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Model discovery and recommendation system design',
        'ML pipeline workflow orchestration (training, fine-tuning, deployment)',
        'Permission and access control for enterprise model governance',
        'Inference API playground interaction patterns',
      ],
    },
    evaluation: {
      level: 'medium',
      tasks: [
        'Model evaluation and benchmarking dashboard design',
        'Community contribution quality signals (model cards, usage metrics)',
        'User feedback loops for model recommendations',
      ],
    },
    interface: {
      level: 'high',
      tasks: [
        'Hub interface: model/dataset/space browsing and management',
        'Spaces: interactive ML app hosting and showcasing',
        'HuggingChat: conversational AI interface',
        'Enterprise dashboard and team management',
        'Documentation and onboarding experience',
      ],
    },
  },
  productStage: '1→10',

  // Product & User Context
  targetAudiences: {
    primary:
      'ML engineers, data scientists, and AI researchers who need to discover, share, and deploy models',
    secondary:
      'Enterprise teams adopting ML for business applications who need managed infrastructure and governance',
  },
  userProblems: [
    'Finding the right pre-trained model among millions of options is overwhelming and time-consuming',
    'Setting up ML infrastructure for training, fine-tuning, and deployment requires deep DevOps expertise',
    'Collaborating on ML projects across teams lacks standardized tools and workflows',
    'Enterprise ML adoption is blocked by security, compliance, and governance requirements',
    'Transitioning from research prototype to production deployment is a complex, error-prone process',
  ],

  // Designer Links
  designerLinks: [
    {
      name: 'Chun Te Lee',
      role: 'Product Designer',
      platform: 'linkedin',
      url: 'https://www.linkedin.com/in/chuntelee/',
      description: 'Product design at Hugging Face, SF Bay Area',
    },
    {
      name: 'Amelie Viallet',
      role: 'Design Engineer',
      platform: 'linkedin',
      url: 'https://www.linkedin.com/in/amelieviallet/',
      description:
        'Design Engineer at Hugging Face, building AI Sheets and data interaction tools',
    },
  ],

  // Open Roles
  openRoles: [],

  // Culture Insights
  cultureInsights: [
    {
      source: 'glassdoor',
      sentiment: 'positive',
      rating: 4.3,
      content:
        'Strong open-source culture with very transparent communication. Extreme responsibility early on, ability to define your own projects, full remote working, very little hierarchy.',
      url: 'https://www.glassdoor.com/Reviews/Hugging-Face-Reviews-E6487302.htm',
    },
    {
      source: 'glassdoor',
      sentiment: 'negative',
      content:
        'Some teams report blame culture and communication issues. Compensation tends to be lower than market. Equity offerings are modest.',
      url: 'https://www.glassdoor.com/Reviews/Hugging-Face-Reviews-E6487302.htm',
    },
    {
      source: 'blind',
      sentiment: 'positive',
      rating: 4.9,
      content:
        'Company culture rated 4.9/5 on Blind. High freedom for work hours, location, and project selection. Deeply technical work with constant interaction across the AI field.',
      url: 'https://www.teamblind.com/company/Hugging-Face',
    },
    {
      source: 'levels.fyi',
      sentiment: 'neutral',
      content:
        'Product Designer compensation: $73.8K-$105K. Software Engineer: $100K-$228K. Median total comp $92.6K. Below market compared to peers.',
      url: 'https://www.levels.fyi/companies/hugging-face/salaries',
    },
  ],

  // My Tracking
  tracking: {
    status: 'watching',
    fitScore: 5,
    whyJoin: [
      'Dominant open-source AI platform with massive community impact',
      'Level A AI-native: design challenges at the frontier of ML tooling',
      'Remote-first culture with global team and high autonomy',
      'Expanding into robotics (LeRobot) adds exciting new design surface area',
      'Mission-driven: democratizing AI aligns with positive impact goals',
    ],
    whyNot: [
      'No open Product Design roles — design team is fully staffed (0 openings)',
      'Very small design team (~2-4 people) may mean limited design culture and mentorship',
      'Below-market compensation ($73K-$105K for Product Designer per Levels.fyi)',
      'Engineer-heavy culture — designers may have less influence',
      'Platform is highly technical — steep learning curve for ML domain knowledge',
    ],
    nextActions: [
      'Monitor careers page for future Product Design openings',
      'Explore Hugging Face Hub and Spaces to understand product deeply',
      'Follow Hugging Face on Twitter for hiring announcements',
      'Connect with Chun Te Lee on LinkedIn to learn about design team experience',
    ],
    notes:
      'Baseline A/B test measurement (2026-02-12). No design roles open. Design team exists but is very small. Company is highly engineering-focused with strong open-source community.',
  },

  // Meta
  lastUpdated: '2026-02-12',
  sources: [
    {
      title: 'Hugging Face Series C Announcement (Blog)',
      url: 'https://huggingface.co/blog/series-c',
    },
    {
      title: 'Hugging Face Series D - TechCrunch',
      url: 'https://techcrunch.com/2023/08/24/hugging-face-raises-235m-from-investors-including-salesforce-and-nvidia/',
    },
    {
      title: 'Hugging Face Business Breakdown - Contrary Research',
      url: 'https://research.contrary.com/company/hugging-face',
    },
    {
      title: 'Hugging Face Revenue & Valuation - Sacra',
      url: 'https://sacra.com/c/hugging-face/',
    },
    {
      title: 'Hugging Face 2026 Stats - Fueler',
      url: 'https://fueler.io/blog/hugging-face-usage-revenue-valuation-growth-statistics',
    },
    {
      title: 'Hugging Face Glassdoor Reviews',
      url: 'https://www.glassdoor.com/Reviews/Hugging-Face-Reviews-E6487302.htm',
    },
    {
      title: 'Hugging Face Salaries - Levels.fyi',
      url: 'https://www.levels.fyi/companies/hugging-face/salaries',
    },
    {
      title: 'Thomas Wolf - Sequoia Spotlight',
      url: 'https://sequoiacap.com/founder/thomas-wolf/',
    },
    {
      title: 'Clement Delangue - Sequoia Spotlight',
      url: 'https://sequoiacap.com/article/clem-delangue-spotlight/',
    },
    {
      title: 'Hugging Face Blind Reviews',
      url: 'https://www.teamblind.com/company/Hugging-Face',
    },
    {
      title: 'Hugging Face LeRobot Robotics - TechCrunch',
      url: 'https://techcrunch.com/2025/05/29/hugging-face-unveils-two-new-humanoid-robots/',
    },
    {
      title: 'Hugging Face Wikipedia',
      url: 'https://en.wikipedia.org/wiki/Hugging_Face',
    },
    {
      title: 'Hugging Face Careers (Workable)',
      url: 'https://apply.workable.com/huggingface/',
    },
  ],
};
