import { Company } from '../types';

export const huggingFace: Company = {
  id: 'hugging-face',
  name: 'Hugging Face',
  description: 'Open-source AI platform democratizing machine learning by hosting models, datasets, and collaborative tools for the global ML community — the "GitHub of machine learning."',
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
  runway: 'Strong — $395M raised, revenue growing rapidly, enterprise revenue expanding',
  customers: '50,000+ organizations, 2,000+ Enterprise Hub paying customers, 5M+ registered users',

  // Growth & Potential
  growthMetrics: {
    stage: 'high-growth',
    revenueGrowth: '86% YoY ($70M 2023 to $130M 2024)',
    userGrowth: '5M+ registered users, 18M+ monthly visitors, 2.4M+ hosted models',
    signals: [
      '$4.5B valuation with strategic investors (Google, Amazon, Nvidia, Salesforce)',
      '2.4M+ models hosted, 730K+ datasets, 500K+ Spaces apps',
      'LeRobot robotics platform launched — expanding into physical AI',
      'Acquired Pollen Robotics — entering affordable robotics hardware',
      '~600 employees as of early 2026',
    ],
    tam: '$153B (AI platforms software market by 2028)',
    marketShare: 'Dominant open-source ML hub — no direct equivalent at scale',
    ceiling: 'Mid-innings: Platform network effects growing but monetization rate still low relative to platform value',
    tailwinds: [
      'Open-source AI movement gaining momentum vs proprietary models',
      'Enterprise adoption of ML accelerating across all industries',
      'Expanding into robotics (LeRobot) opens massive new TAM',
      'Model-agnostic position benefits from every foundation model advance',
    ],
    headwinds: [
      'Low monetization rate relative to platform usage',
      'Cloud giants (AWS SageMaker, Google Vertex AI, Azure ML) compete on enterprise',
      'Compensation below top-tier tech — may struggle to retain top talent',
      'Revenue-to-valuation ratio demands significant growth acceleration',
    ],
    moatType: 'platform-ecosystem',
    moatStrength: 'Strong: 2.4M+ models and 730K+ datasets create massive network effects. Community contributions compound value daily. Model-agnostic stance makes HF the neutral ground for all AI development.',
  },

  // Competition
  competitors: [
    {
      name: 'GitHub (Microsoft)',
      description: 'GitHub Models and Codespaces offering ML model hosting and development',
      whyTheyWin: 'Massive existing developer base (100M+), deep Microsoft integration, familiar workflows',
    },
    {
      name: 'Replicate',
      description: 'Cloud platform for running and deploying ML models via API',
      whyTheyWin: 'Simpler deployment experience, pay-per-use pricing, faster time to production',
    },
    {
      name: 'AWS SageMaker',
      description: 'End-to-end ML platform for building, training, and deploying models',
      whyTheyWin: 'Enterprise infrastructure dominance, integrated with AWS ecosystem, massive compute resources',
    },
    {
      name: 'Weights & Biases',
      description: 'ML experiment tracking, model versioning, and collaboration platform',
      whyTheyWin: 'Best-in-class experiment tracking UX, deep integrations with training frameworks',
    },
    {
      name: 'Databricks',
      description: 'Unified data and AI platform for enterprise data pipelines and model development',
      whyTheyWin: 'End-to-end data-to-model pipeline, $100B+ valuation, strong enterprise relationships',
    },
  ],
  marketPosition: 'Dominant open-source ML platform — the "GitHub of machine learning" with 2.4M+ models, 730K+ datasets',
  moat: [
    'Largest open-source model repository (2.4M+ models) with unmatched network effects',
    'Community flywheel: researchers publish models, developers consume them, more researchers join',
    'Model-agnostic positioning benefits from every foundation model advance',
    'Open-source Transformers library is industry standard for NLP/ML development',
    'Expanding into robotics (LeRobot + Pollen Robotics acquisition) creates new ecosystem lock-in',
  ],
  vsGiants: 'Unlike cloud giants (AWS, Google, Azure) that lock users into proprietary ecosystems, Hugging Face is model-agnostic and open-source. Positions as the neutral platform where all models can be hosted, shared, and deployed — similar to how GitHub won by being language-agnostic. Strategic investments from Google, Amazon, and Nvidia validate this approach.',

  // AI-Native Level
  aiNativeLevel: 'A',
  aiNativeLevelDescription: 'AI-Native/Platform: AI IS the product. Hugging Face is the infrastructure layer for the entire open-source AI ecosystem. Without AI/ML, the platform has no reason to exist. Every feature revolves around model hosting, training, deployment, and collaboration.',
  aiDesignChallenges: [
    'Model discovery UX: Helping users find the right model among 2.4M+ options with meaningful filters and comparisons',
    'Complex ML workflow design: Training, fine-tuning, deployment pipelines for diverse technical skill levels',
    'Community platform design: Balancing developer tools with social collaboration features (Spaces, discussions)',
    'Inference playground design: Interactive model testing and comparison interfaces across modalities',
    'Documentation as product: Making technical ML concepts accessible through design',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Clement Delangue',
      role: 'CEO',
      background: 'French entrepreneur. Previously Product & CMO at Mention, Product at Moodstocks (acquired by Google). Master in Management from ESCP Business School, studied at Stanford. Named TIME100 AI 2023.',
    },
    {
      name: 'Julien Chaumond',
      role: 'CTO',
      background: 'Computer engineer. Previously advisor at French Ministry of Finance, co-founded Glose (reading app). Background in electrical engineering and CS from Ecole Polytechnique and Stanford.',
    },
    {
      name: 'Thomas Wolf',
      role: 'CSO (Chief Science Officer)',
      background: 'Trained scientist turned patent lawyer. Ph.D. in physics, authored ML research papers. Bandmate of Julien. Leads scientific direction and open-source community strategy.',
    },
  ],
  whyBuilding: 'Started as a chatbot app for teenagers in 2016, pivoted when they realized the NLP models they built were more valuable than the chatbot itself. Believe AI should be open and democratized, not monopolized by a few tech giants.',
  beliefs: [
    'Open source is essential for the future of AI — transparency and accessibility over proprietary lock-in',
    'Thousands of companies will have their own specialized AI models, not just a few foundation model providers',
    'Democratizing AI means empowering individuals, researchers, nonprofits, and enterprises equally',
    'Community-driven development produces better outcomes than closed corporate labs',
    'The work itself matters more than financial returns — building community is self-expression',
  ],
  designPhilosophy: 'Developer-first, community-centric design. Platform UX prioritizes making complex ML workflows accessible to diverse skill levels. Strong emphasis on collaboration features (Spaces, model cards, discussions) that turn a tool into a community.',
  greenFlags: [
    'Strategic investors (Google, Amazon, Nvidia, Salesforce) validate the platform approach',
    'Open-source mission creates genuine community loyalty and network effects',
    'Model-agnostic position means they win regardless of which AI company dominates',
    'Remote-first culture with extreme flexibility and autonomy',
    'Expanding into robotics (LeRobot) shows long-term vision beyond current AI hype',
  ],
  redFlags: [
    'Compensation significantly below top-tier tech (Product Designer $74-105K vs $200K+ at FAANG)',
    'Low monetization rate relative to platform scale — business model still maturing',
    'Engineering-dominant culture — design team is very small, may lack design influence',
    'No current Product Design job openings — unclear investment in design',
    'Decentralized direction can lead to misaligned objectives',
  ],

  // Design Opportunity
  designTeam: {
    designHead: 'Victor Mustar (Head of Product Design, Paris)',
    teamSize: '2-3 designers among ~636 employees (designer:engineer ratio ~1:150-225)',
    notableMembers: [
      { name: 'Victor Mustar', role: 'Head of Product Design' },
      { name: 'Chun Te Lee', role: 'Product Designer' },
      { name: 'Amelie Viallet', role: 'Design Engineer / Product Lead (Argilla)' },
    ],
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Model discovery and recommendation logic across 2.4M+ models',
        'Spaces app deployment and configuration workflows',
        'Dataset versioning and collaboration permissions',
        'Inference API behavior design and error handling',
      ],
    },
    evaluation: {
      level: 'medium',
      tasks: [
        'Model comparison and benchmarking interfaces',
        'Community feedback and model quality signals',
        'Usage analytics for Enterprise Hub customers',
        'Open LLM Leaderboard ranking and evaluation criteria',
      ],
    },
    interface: {
      level: 'high',
      tasks: [
        'Model cards and documentation pages',
        'Spaces (interactive ML app hosting) UI',
        'Hub navigation, search, and filtering across millions of assets',
        'Enterprise Hub dashboard and admin tools',
        'Inference playground and API explorer',
      ],
    },
  },
  productStage: '1→10',

  // Product & User Context
  targetAudiences: {
    primary: 'ML engineers, data scientists, and AI researchers building and deploying machine learning models',
    secondary: 'Enterprise AI teams seeking collaborative ML infrastructure and private model deployment',
  },
  userProblems: [
    'Difficulty sharing and discovering pre-trained models across the fragmented ML community',
    'Complex infrastructure setup required for ML model training, fine-tuning, and deployment',
    'Lack of collaborative tools for ML model development, versioning, and reproducibility',
    'Fragmented ecosystem across different ML frameworks, model formats, and hardware targets',
    'Challenges in deploying and scaling ML inference in production environments cost-effectively',
  ],

  // Designer Links
  designerLinks: [
    {
      name: 'Victor Mustar',
      role: 'Head of Product Design',
      platform: 'linkedin',
      url: 'https://www.linkedin.com/in/victor-mustar-22466951/',
      description: 'Head of Product Design at Hugging Face, Paris — most senior design leader',
    },
    {
      name: 'Chun Te Lee',
      role: 'Product Designer',
      platform: 'linkedin',
      url: 'https://www.linkedin.com/in/chuntelee/',
      description: 'Product Designer at Hugging Face, SF — SVA-trained, 6+ years UI/UX',
    },
    {
      name: 'Amelie Viallet',
      role: 'Design Engineer / Product Lead (Argilla)',
      platform: 'linkedin',
      url: 'https://www.linkedin.com/in/amelieviallet/',
      description: 'Co-founder of Argilla (acquired by HF), hybrid design-engineering role, leads AI Sheets',
    },
    {
      name: 'Victor Mustar',
      role: 'Head of Product Design',
      platform: 'blog',
      url: 'https://gary149.github.io/',
      description: 'Personal portfolio site showcasing design work',
    },
    {
      name: 'Clement Delangue',
      role: 'CEO',
      platform: 'podcast',
      url: 'https://www.acquired.fm/episodes/building-the-open-source-ai-revolution-with-hugging-face-ceo-clem-delangue',
      description: 'Acquired podcast: Building the Open Source AI Revolution — company history and vision',
    },
    {
      name: 'Thomas Wolf',
      role: 'CSO',
      platform: 'podcast',
      url: 'https://sequoiacap.com/podcast/training-data-thomas-wolf/',
      description: 'Sequoia podcast: App Store for Robots — LeRobot vision and open-source robotics strategy',
    },
    {
      name: 'Hugging Face Careers',
      role: 'Design Team',
      platform: 'careers',
      url: 'https://apply.workable.com/huggingface/',
      description: 'Workable ATS — check for future design roles',
    },
  ],

  // Open Roles
  openRoles: [],

  // Culture Insights
  cultureInsights: [
    {
      source: 'glassdoor',
      sentiment: 'positive',
      rating: 4.4,
      content: '4.4/5 overall from 55 reviews. 86% recommend to a friend, 85% positive business outlook. Culture & values 4.3, career opportunities 4.4, work-life balance 4.1. Compensation rated lowest at 3.9/5.',
      url: 'https://www.glassdoor.com/Reviews/Hugging-Face-Reviews-E6487302.htm',
    },
    {
      source: 'blind',
      sentiment: 'positive',
      rating: 4.9,
      content: 'Blind: 4.9/5 Company Culture (highest), 4.5 Career Growth, 4.4 Work-Life Balance, 4.3 Management. Compensation rated 3.6/5. ML Engineer: "Very high freedom: work hours, location, projects, no meetings. Extremely high impact per individual."',
      url: 'https://www.teamblind.com/company/Hugging-Face',
    },
    {
      source: 'glassdoor',
      sentiment: 'neutral',
      content: 'Remote-first with real unlimited PTO, but workload can encourage weekend work. "Autonomy for days" but also "decentralized direction" as double-edged sword. Feb 2026 layoff of 4% (10 GTM team members) signals burn rate pressure.',
      url: 'https://www.glassdoor.com/Reviews/Hugging-Face-Reviews-E6487302.htm',
    },
    {
      source: 'levels.fyi',
      sentiment: 'negative',
      content: 'Product Designer: $74K-$105K total comp (30-50% below market). Median company-wide: $93K. Software Engineer: $120K median USA. Significantly below FAANG ($200K+) and top AI companies ($150-250K).',
      url: 'https://www.levels.fyi/companies/hugging-face/salaries/product-designer',
    },
    {
      source: 'glassdoor',
      sentiment: 'negative',
      content: 'Negative reviews cite "salary is bad compared to top tech companies", and more critically "a well-made facade with a terrible work environment" and "the biggest mirage since Theranos." Design team is 0.5% of workforce with no executive-level advocate.',
      url: 'https://www.glassdoor.com/Reviews/Hugging-Face-Reviews-E6487302.htm',
    },
    {
      source: 'linkedin',
      sentiment: 'positive',
      content: 'Open-source community-driven culture. Cofounders (Delangue, Chaumond, Wolf) highly visible and accessible. Victor Mustar actively shares product milestones. Extreme autonomy — designers self-direct and ship with minimal review.',
      url: 'https://www.linkedin.com/company/huggingface/',
    },
  ],

  // My Tracking
  tracking: {
    status: 'researching',
    fitScore: 7,
    whyJoin: [
      'Level A AI-native — at the center of the open-source AI revolution with 2.4M+ models',
      'Category-defining design problems: model evaluation UX, prompt versioning, ML governance — 50% novel, no precedent exists',
      'Enormous scope: 2-3 designers for 10+ product lines means your work ships to 5M+ users immediately',
      'Mission-driven: CEO testified before Congress on open-source AI, TIME100 AI honoree, genuine community loyalty',
      'Remote-first with extreme autonomy (Blind: 4.9/5 culture score), cofounders highly visible and accessible',
      'Career capital: ML/AI UX expertise is rare, transferable to any top AI company, strong exit network',
    ],
    whyNot: [
      'Compensation 30-50% below market ($74-105K vs $120-250K at peers) — $100-150K foregone over 2-3 years',
      'Ultra-lean design team (1:150-225 designer:engineer ratio) — no design peer learning, no design exec advocate',
      'Feb 2026 4% layoff signals burn rate pressure; small design team is vulnerable to further cuts',
      'Engineering-dominant culture: design may be overridden when conflicting with shipping speed',
      '60x revenue multiple ($7.75B / $130M) creates down-round risk; inference commoditization headwinds',
      'Cloud giants (AWS, Azure, GCP) are both investors AND existential competitive threats',
    ],
    nextActions: [
      'Request conversations with Victor Mustar and Amelie Viallet to understand design team growth plans',
      'Negotiate aggressively on equity (0.02-0.05%) and title (Senior/Staff) given salary discount',
      'Monitor Hugging Face careers page — no current design openings but team is critically understaffed',
    ],
    notes: 'Deep research score: 6.85/10 weighted. Exceptional learning (8/10) and influence (7/10) but business health (6/10) and equity (5/10) are concerns. Best for early-to-mid career designer prioritizing mission and portfolio-defining work. Not for someone needing financial stability or design mentorship. Most likely outcome: acquisition by Amazon or Google at $4-8B (55% probability).',
  },

  // Meta
  lastUpdated: '2026-02-13T21:30:00',
  sources: [
    {
      title: 'Hugging Face Series D - TechCrunch',
      url: 'https://techcrunch.com/2023/08/24/hugging-face-raises-235m-from-investors-including-salesforce-and-nvidia/',
    },
    {
      title: 'Hugging Face Revenue & Valuation - Sacra',
      url: 'https://sacra.com/c/hugging-face/',
    },
    {
      title: 'Hugging Face Business Breakdown - Contrary Research',
      url: 'https://research.contrary.com/company/hugging-face',
    },
    {
      title: 'Hugging Face Revenue - Latka',
      url: 'https://getlatka.com/companies/hugging-face',
    },
    {
      title: 'Hugging Face 2026 Stats - Fueler',
      url: 'https://fueler.io/blog/hugging-face-usage-revenue-valuation-growth-statistics',
    },
    {
      title: 'Clement Delangue - TIME100 AI',
      url: 'https://time.com/collection/time100-ai/6308994/clement-delangue/',
    },
    {
      title: 'Acquired Podcast: Hugging Face CEO Interview',
      url: 'https://www.acquired.fm/episodes/building-the-open-source-ai-revolution-with-hugging-face-ceo-clem-delangue',
    },
    {
      title: 'Sequoia Spotlight: Clem Delangue',
      url: 'https://sequoiacap.com/article/clem-delangue-spotlight/',
    },
    {
      title: 'Hugging Face Glassdoor Reviews (4.4/5, 55 reviews)',
      url: 'https://www.glassdoor.com/Reviews/Hugging-Face-Reviews-E6487302.htm',
    },
    {
      title: 'Hugging Face Salaries - Levels.fyi',
      url: 'https://www.levels.fyi/companies/hugging-face/salaries/product-designer',
    },
    {
      title: 'Hugging Face Blind Reviews (4.9/5 culture)',
      url: 'https://www.teamblind.com/company/Hugging-Face',
    },
    {
      title: 'Victor Mustar - Head of Product Design - LinkedIn',
      url: 'https://www.linkedin.com/in/victor-mustar-22466951/',
    },
    {
      title: 'Amelie Viallet - Design Engineer - LinkedIn',
      url: 'https://www.linkedin.com/in/amelieviallet/',
    },
    {
      title: 'Hugging Face Layoffs (Feb 2026) - The Information',
      url: 'https://www.theinformation.com/briefings/hugging-face-lays-off-4-of-staff',
    },
    {
      title: 'GitHub Models vs Hugging Face - GitHub Discussion',
      url: 'https://github.com/orgs/community/discussions/167169',
    },
    {
      title: 'Cloudflare Acquires Replicate (Nov 2025)',
      url: 'https://www.cloudflare.com/press/press-releases/2025/cloudflare-to-acquire-replicate-to-build-the-most-seamless-ai-cloud-for-developers/',
    },
    {
      title: 'Hugging Face Pre-IPO Valuation - UpMarket',
      url: 'https://www.upmarket.co/private-markets/pre-ipo/hugging-face/',
    },
    {
      title: 'ML Market Size $1.7T by 2035 - Precedence Research',
      url: 'https://www.precedenceresearch.com/machine-learning-market',
    },
    {
      title: 'TED AI: Thomas Wolf on Open-Source AI',
      url: 'https://shows.acast.com/ted-ai/episodes/6758565abd3c99689c123d23',
    },
    {
      title: 'Hugging Face Wikipedia',
      url: 'https://en.wikipedia.org/wiki/Hugging_Face',
    },
  ],
};
