import { Company } from '../types';

export const xai: Company = {
    id: 'xai',
    name: 'xAI',
    description: 'AI company building Grok, a maximally truth-seeking AI assistant with real-time X integration.',
    website: 'https://x.ai',
    headquarters: 'Palo Alto, CA',
    remote: 'No',

    // OG Image
    ogImage: '/og-images/xai-og.webp',


  // Multi-dimensional Tags
  aiTypes: ['automation'],
  markets: ['b2b'],
  industries: ['other'],

    // Business
    stage: 'Series E',
    valuation: '$230B (Jan 2026)',
    totalFunding: '$42.73B',
    fundingHistory: [
      { stage: 'Seed', amount: 'Undisclosed', date: '2023-03', leadInvestors: ['Elon Musk'] },
      { stage: 'Series A', amount: '$134M', date: '2023-05', leadInvestors: ['Sequoia Capital', 'Andreessen Horowitz'] },
      { stage: 'Series B', amount: '$6B', date: '2024-05', valuation: '$24B', leadInvestors: ['Andreessen Horowitz', 'Sequoia Capital'] },
      { stage: 'Series C', amount: '$6B', date: '2024-12', valuation: '$50B', leadInvestors: ['Valor Equity Partners', 'Vy Capital'] },
      { stage: 'Series D', amount: '$15B', date: '2025-06', valuation: '$200B', leadInvestors: ['Qatar Investment Authority', 'Abu Dhabi MGX'] },
      { stage: 'Series E', amount: '$20B', date: '2026-01', valuation: '$230B', leadInvestors: ['Nvidia', 'Cisco', 'Valor Equity Partners'] },
    ],
    revenue: '~$500M ARR (2025) → $2B+ target (2026)',
    growth: 'Hypergrowth: 600M MAU, targeting profitability 2027',
    runway: 'Strong - burning $1B/month, Series E provides 20 months runway',
    customers: '600M monthly active users (via X integration)',

    // Growth & Potential
    growthMetrics: {
      stage: 'hypergrowth',
      revenueGrowth: '$100M (2024) → $500M (2025) → $2B+ (2026 target)',
      userGrowth: '600M MAU through X integration (Jan 2026)',
      signals: [
        '$230B valuation (Jan 2026) - 4.6x from $50B (Dec 2024)',
        '$20B Series E with Nvidia, Cisco backing (Jan 2026)',
        'DoD integration announced (Jan 2026)',
        'Grok Business & Enterprise launched (Dec 2025)',
        'Colossus supercomputer: 1M+ H100 GPU equivalents',
      ],
      tam: '$500B+ (AI for all knowledge work)',
      marketShare: '~0.4% of TAM = 250x+ upside potential',
      ceiling: 'Very early: Grok launched late 2023, enterprise products just starting',
      tailwinds: [
        'X integration provides distribution to 600M users',
        'Real-time data moat through X access',
        'Government adoption (DoD) validates enterprise potential',
        'Nvidia backing provides compute advantage',
        'Musk brand drives adoption',
      ],
      headwinds: [
        'OpenAI/ChatGPT brand dominance in consumer',
        'Anthropic/Claude leads enterprise LLM market',
        'Content moderation controversies damage trust',
        'Regulatory investigations (EU, multiple countries)',
        'High burn rate ($1B/month) requires continued fundraising',
        'No remote work policy limits talent pool',
      ],
      moatType: 'data-flywheel',
      moatStrength: 'Strong: Exclusive real-time X data access + 600M user distribution. However, controversial content policies may limit enterprise adoption.',
    },

    // Competition
    competitors: [
      {
        name: 'OpenAI',
        description: 'ChatGPT, GPT-4/o1 models, $11B+ ARR',
        whyTheyWin: 'First mover advantage, brand dominance, Microsoft partnership, enterprise trust',
      },
      {
        name: 'Anthropic',
        description: 'Claude models, #1 enterprise LLM (32% market share)',
        whyTheyWin: 'Safety-first positioning, developer platform dominance, enterprise trust',
      },
      {
        name: 'Google DeepMind',
        description: 'Gemini models, integrated across Google products',
        whyTheyWin: 'Unlimited compute, distribution through 2B+ Google users',
      },
    ],
    marketPosition: 'Real-time AI with X integration, targeting truth-seeking over political correctness',
    moat: [
      'Exclusive real-time X data access (600M users)',
      'Low-latency voice AI (#1 on Big Bench Audio)',
      'Colossus supercomputer (1M+ H100 GPUs)',
      'Musk network effects across Tesla, SpaceX, X',
      'Government contracts (DoD integration)',
    ],
    vsGiants: 'Differentiation through real-time X data + controversial "truth-seeking" positioning vs OpenAI/Anthropic\'s safety focus. Distribution advantage through X, but content moderation issues limit enterprise trust.',

    // AI-Native Level
    aiNativeLevel: 'A',
    aiNativeLevelDescription: 'AI-Native/Zero-to-One: AI IS the product. Building foundational models (Grok 3, Aurora image model) and defining "maximally truth-seeking" AI category. High risk, high upside.',
    aiDesignChallenges: [
      'Truth-seeking vs safety: Designing AI that prioritizes accuracy over political correctness without enabling harmful content',
      'Real-time data integration: Surfacing X insights without amplifying misinformation',
      'Voice AI latency: Maintaining conversational quality at 600ms response time',
      'Government compliance: Designing secure interfaces for classified environments (Top Secret/SCI clearance)',
      'Multimodal coherence: Coordinating text, image (Aurora), and voice outputs',
      'Trust design: Rebuilding trust after content moderation controversies',
    ],

    // Founders & Vision
    founders: [
      {
        name: 'Elon Musk',
        role: 'Founder & CEO',
        background: 'Tesla CEO, SpaceX CEO, X owner, OpenAI co-founder (left 2018)',
      },
      {
        name: 'Igor Babuschkin',
        role: 'Co-founder & Chief Engineer',
        background: 'Ex-Google DeepMind, AlphaCode',
      },
      {
        name: 'Christian Szegedy',
        role: 'Co-founder',
        background: 'Ex-Google Research',
      },
      {
        name: 'Yuhuai (Tony) Wu',
        role: 'Co-founder',
        background: 'Ex-OpenAI, Google Research',
      },
      {
        name: 'Jimmy Ba',
        role: 'Co-founder',
        background: 'Ex-OpenAI, GPT-3.5/GPT-4 development',
      },
    ],
    whyBuilding:
      'Build maximally truth-seeking AI to "understand the true nature of the universe." Musk believes safe AGI requires curiosity and truth over political correctness.',
    beliefs: [
      'Maximally truth-seeking AI is safest: Prioritize accuracy over political correctness',
      'Curiosity drives safety: AI trying to understand universe will be pro-humanity',
      'Transparency over deception: AI must say what it believes is true',
      'Real-time grounding: X integration provides real-world grounding for AI',
      'Scientific acceleration: AGI should advance collective understanding of physics, biology, universe',
    ],
    designPhilosophy: 'Unknown - early-stage product design team. Job postings emphasize government compliance, security, and usability in regulated environments.',
    greenFlags: [
      'Series E $230B valuation (Jan 2026)',
      'Clear technical differentiation: real-time X data + voice AI leadership',
      'Government adoption (DoD) validates enterprise potential',
      'Backed by Nvidia, Cisco, major investors across 6 rounds',
      'Founder vision: truth-seeking AI aligns with transparency design values',
    ],
    redFlags: [
      'Content moderation controversies damage trust (deepfakes, harmful content)',
      'Regulatory investigations from multiple countries (EU, etc.)',
      'No remote work policy: sleeping pods, overnight culture limits talent pool',
      'High burn rate ($1B/month) creates financial pressure',
      'Minimal onboarding, unclear structure: "receive laptop and badge, no assigned desk"',
      'Low work-life balance: 1.4/5 on Blind reviews',
      'Surveillance controversy: mandatory Hubstaff tracking on personal laptops',
    ],

    // Design Opportunity
    designTeam: {
      teamSize: '1,000-5,000 employees (250+ open roles as of Oct 2025)',
    },
    designWorkType: {
      logicBehavior: {
        level: 'high',
        tasks: [
          'Truth-seeking vs safety balance: Designing AI behavior that prioritizes accuracy without enabling harm',
          'Real-time X integration: When/how to surface trending topics, social context',
          'Voice conversation flow: Low-latency (600ms) conversational AI patterns',
          'Government compliance workflows: Secure, auditable AI for classified environments',
          'Content moderation rules: Balancing free expression with harmful content prevention',
        ],
      },
      evaluation: {
        level: 'high',
        tasks: [
          'Truth measurement: Defining and measuring "maximally truth-seeking" AI',
          'Real-time accuracy: Evaluating X data integration quality',
          'Voice AI performance: Latency, naturalness, reasoning quality (Big Bench Audio)',
          'Government security standards: Meeting DoD, Top Secret/SCI requirements',
          'Harmful content detection: Red teaming for safety failures',
        ],
      },
      interface: {
        level: 'medium',
        tasks: [
          'Grok chat UI: Conversational interface with real-time X context',
          'Voice interface: Mobile app + Tesla integration',
          'Government/enterprise dashboards: Secure, compliant UI for classified use',
          'Grok Business/Enterprise: Team management, SSO, audit logs',
          'Aurora image generation: Text-to-image workflows',
        ],
      },
    },
    productStage: '1→10',

    // Product & User Context
    targetAudiences: {
        primary: 'X Premium users seeking real-time, truth-seeking AI assistant',
        secondary: 'Government agencies (DoD), enterprise teams, prediction markets (Polymarket, Kalshi)',
    },
    userProblems: [
        'Existing AI assistants (ChatGPT, Claude) lack real-time information and are "too politically correct"',
        'Government agencies need AI with provable security and compliance for classified work',
        'Voice AI assistants have high latency and poor reasoning capabilities',
        'Prediction markets and betting platforms need AI that prioritizes accuracy over safety theater',
        'Enterprises need AI that integrates with their social media monitoring and trend analysis',
    ],

    // Designer Links
    designerLinks: [],

    // Open Roles
    openRoles: [
      {
        title: 'Product Designer - Government',
        location: 'Palo Alto, CA',
        type: 'full-time',
        url: 'https://job-boards.greenhouse.io/xai/jobs/4876452007',
        compensation: '$180K-$440K',
        level: 'Senior',
        aboutRole: 'Design mission-critical AI products for federal government and enterprise partners, focusing on secure and compliant interfaces in regulated environments.',
        responsibilities: [
          'Convert user insights and government requirements into product strategies while maintaining compliance',
          'Create and prototype interfaces for secure government platforms with emphasis on usability',
          'Collaborate with research teams to assess and refine AI model performance',
          'Iteratively enhance user experiences through design refinement and prompt optimization',
          'Review user feedback and system logs to support reliable, mission-focused workflows',
          'Develop internal design tools to improve team efficiency in secure environments',
          'Update design guidelines based on stakeholder input from government/enterprise clients',
        ],
        requirements: [
          'Active U.S. security clearance (Top Secret, Top Secret SCI, or equivalent) - MANDATORY',
          '6+ years design experience in high-reliability or security-focused environments',
          'Proven success with government agencies, DoD, or federal contractors',
          'Strong documentation and communication capabilities',
          'Experience implementing AI/ML interfaces with APIs and back-end systems',
          'Deep understanding of secure design principles for regulated contexts',
        ],
        preferred: [
          'Background in Interaction Design, UX Design, or Computer Science',
          'Experience evaluating AI designs in high-stakes, regulated settings',
          'Proficiency with machine learning fundamentals and production deployments',
          'Portfolio demonstrating work in fast-paced, collaborative environments',
          'Experience designing for both web and mobile platforms in regulated industries',
          'Technical design documentation skills for government audiences',
        ],
        teamInfo: 'Reports directly to founding team. Flat structure where leadership is earned through initiative and excellence.',
        whyInteresting: 'On-site 5 days/week. DoD integration just announced. Designing first AI for classified government environments. $230B valuation. Equity + comprehensive benefits. Interview process completes within 1 week.',
      },
    ],

    // Culture Insights
    cultureInsights: [
      {
        source: 'glassdoor',
        sentiment: 'neutral',
        rating: 4.1,
        content: '84% would recommend to a friend. Pros: "Interesting work, remote, great culture" and "Some smart, friendly, helpful people." Cons: "Very little job stability" and "Regular changes to team/project assignments with little-to-no employee input."',
        url: 'https://www.glassdoor.com/Reviews/xAI-Reviews-E10404667.htm',
      },
      {
        source: 'blind',
        sentiment: 'neutral',
        rating: 3.8,
        content: 'Career Growth: 4.8/5 (highest). Work Life Balance: 1.4/5 (lowest). Compensation: 4.3/5. Management: 3.0/5. "Requires you to be self motivated and working all the time."',
        url: 'https://www.teamblind.com/company/xAI/reviews',
      },
      {
        source: 'inc.com',
        sentiment: 'neutral',
        content: 'Limited structure, minimal onboarding. "New employees receive just a laptop and badge on first day without assigned desks or direction." Sleeping pods and bunk beds available for overnight work.',
        url: 'https://www.aol.com/articles/10-quotes-xai-elon-musk-090001302.html',
      },
      {
        source: 'techcrunch',
        sentiment: 'neutral',
        content: 'Musk acts as fixer, works side-by-side with engineers. Offered Cybertruck to engineer who got training run working within 24 hours. Flat structure, leadership earned through initiative.',
        url: 'https://www.aol.com/articles/10-quotes-xai-elon-musk-090001302.html',
      },
    ],

    // My Tracking
    tracking: {
      status: 'watching',
      fitScore: 6,
      whyJoin: [
        'Level A AI-native — frontier of AI design',
        'Unique design challenges: truth-seeking vs safety, real-time X data, government compliance',
        'High compensation: $180K-$440K',
        'Fast-moving: 1 week interview process, decisions made quickly',
        'Direct impact: Small team, flat structure, report to founders',
      ],
      whyNot: [
        'Content moderation controversies damage mission credibility',
        'Security clearance required (Top Secret/SCI) — major barrier',
        'No remote work: On-site 5 days/week in Palo Alto',
        'Poor work-life balance: 1.4/5 on Blind, sleeping pods culture',
        'Surveillance controversy: mandatory tracking software on personal laptops',
        'High burn rate creates financial pressure ($1B/month)',
        'Regulatory investigations create uncertainty',
        'Minimal structure/onboarding may not suit everyone',
      ],
      nextActions: [
        'Use Grok deeply (via X Premium) to understand product',
        'Research government AI compliance requirements',
        'Monitor content moderation policy changes',
        'Track regulatory investigation outcomes',
        'Find xAI designers in network',
        'Evaluate if security clearance is achievable',
      ],
    },

    // Meta
    lastUpdated: '2026-01-27',
    sources: [
      {
        title: 'xAI Series E $20B Funding (CNBC)',
        url: 'https://www.cnbc.com/2026/01/06/elon-musk-xai-raises-20-billion-from-nvidia-cisco-investors.html',
      },
      {
        title: 'xAI Series E Announcement (TechCrunch)',
        url: 'https://techcrunch.com/2026/01/06/xai-says-it-raised-20b-in-series-e-funding/',
      },
      {
        title: 'xAI Revenue & Valuation (Sacra)',
        url: 'https://sacra.com/c/xai/',
      },
      {
        title: 'xAI $230B Valuation Report (The Rundown)',
        url: 'https://www.therundown.ai/p/xais-massive-new-20b-raise',
      },
      {
        title: 'Grok Features Guide 2026 (Robylon)',
        url: 'https://www.robylon.ai/blog/what-is-xai-grok-a-complete-guide-to-the-chatbot',
      },
      {
        title: 'Grok Business & Enterprise Launch',
        url: 'https://x.ai/news/grok-business',
      },
      {
        title: 'xAI Founding Team (Wikipedia)',
        url: 'https://en.wikipedia.org/wiki/XAI_(company)',
      },
      {
        title: 'xAI Mission & Philosophy (CMSWire)',
        url: 'https://www.cmswire.com/digital-experience/elon-musk-launches-xai-to-solve-the-universes-biggest-mysteries/',
      },
      {
        title: 'Grok vs Competitors Comparison',
        url: 'https://www.appypieautomate.ai/blog/comparison/grok-vs-deepseek-vs-openai-vs-claude-vs-qwen-vs-gemini',
      },
      {
        title: 'xAI Glassdoor Reviews',
        url: 'https://www.glassdoor.com/Reviews/xAI-Reviews-E10404667.htm',
      },
      {
        title: 'xAI Blind Reviews',
        url: 'https://www.teamblind.com/company/xAI/reviews',
      },
      {
        title: 'Product Designer - Government Job Posting',
        url: 'https://job-boards.greenhouse.io/xai/jobs/4876452007',
      },
    ],
  };
