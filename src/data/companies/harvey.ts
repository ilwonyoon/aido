import { Company } from '../types';

export const harvey: Company = {
    id: 'harvey',
    name: 'Harvey',
    description: 'AI copilot for elite law firms, transforming how legal professionals work with AI-powered research, drafting, and analysis.',
    website: 'https://harvey.ai',
    headquarters: 'San Francisco, CA',
    remote: 'Hybrid',


  // Multi-dimensional Tags
  aiTypes: ['search-retrieval'],
  markets: ['prosumer'],
  industries: ['legal'],

    // Business
    stage: 'Series E',
    valuation: '$8B (Oct 2025)',
    totalFunding: '$1.02B',
    fundingHistory: [
      { stage: 'Seed', amount: '$5M', date: '2022-11', leadInvestors: ['Sequoia Capital'] },
      { stage: 'Series A', amount: '$21M', date: '2023-03', valuation: '$150M', leadInvestors: ['Sequoia Capital'] },
      { stage: 'Series B', amount: '$80M', date: '2023-12', valuation: '$715M', leadInvestors: ['Kleiner Perkins'] },
      { stage: 'Series C', amount: '$100M', date: '2024-05', valuation: '$1.5B', leadInvestors: ['Kleiner Perkins'] },
      { stage: 'Series D', amount: '$140M', date: '2024-07', valuation: '$1.5B', leadInvestors: ['Sequoia Capital'] },
      { stage: 'Series E', amount: '$300M', date: '2025-06', valuation: '$5B', leadInvestors: ['Sequoia Capital'] },
    ],
    revenue: '$100M ARR (Aug 2025)',
    growth: 'Reached $100M ARR in 3 years',
    runway: 'Strong — highly capitalized',
    customers: '1,000+ law firms and corporate legal departments, 42% of AmLaw 100 firms',

    // Competition
    competitors: [
      {
        name: 'Thomson Reuters CoCounsel',
        description: 'Legal AI by Thomson Reuters, integrated with Westlaw',
        whyTheyWin: 'Deep legal content integration, trusted brand, existing customer base',
      },
      {
        name: 'Casetext',
        description: 'Legal research platform acquired by Thomson Reuters',
        whyTheyWin: 'Established legal research reputation, now part of Thomson Reuters ecosystem',
      },
      {
        name: 'Lex Machina',
        description: 'Legal analytics platform by LexisNexis',
        whyTheyWin: 'Data advantage from LexisNexis, strong analytics focus',
      },
      {
        name: 'Spellbook',
        description: 'AI contract drafting and review',
        whyTheyWin: 'Focused product, easier to adopt for mid-market firms',
      },
    ],
    marketPosition: 'Leader in enterprise legal AI, dominant in AmLaw 100',
    moat: [
      'Elite firm partnerships: 42% of AmLaw 100 using Harvey',
      'Custom legal LLM trained on proprietary legal data',
      'Deep integration into existing legal workflows',
      'Strong network effects: more usage = better legal AI',
      'Sequoia-backed with $1B+ war chest',
    ],
    vsGiants: 'Harvey built legal-specific AI vs generic ChatGPT/Claude. Vertical focus = higher quality, compliance, integration.',

    // AI-Native Level
    aiNativeLevel: 'B',
    aiNativeLevelDescription: 'AI-Core on Proven Workflow: AI is core differentiator applied to established legal research market. Balances risk and reward on proven workflow.',
    aiDesignChallenges: [
      'Trust & verification: lawyers need to verify AI outputs, how to design for confidence?',
      'Complex legal reasoning: designing interfaces for multi-step legal analysis',
      'Citation & sources: surfacing sources for AI-generated legal arguments',
      'Workflow integration: embedding AI into existing legal processes',
      'Role-based AI: different AI behaviors for partners vs associates',
    ],

    // Founders & Vision
    founders: [
      {
        name: 'Gabriel Pereyra',
        role: 'Co-founder & President',
        background: 'Research Scientist at Google DeepMind. PhD in ML. Built language models before founding Harvey.',
      },
      {
        name: 'Winston Weinberg',
        role: 'Co-founder & CEO',
        background: 'Securities and antitrust litigator at O\'Melveny & Myers. Stanford Law. First-hand legal pain points.',
      },
    ],
    whyBuilding: 'Weinberg experienced legal work inefficiency firsthand as a litigator. Pereyra had the AI expertise. Together they saw legal as the perfect vertical for AI: high-value, knowledge-intensive, massive market ($1T+ legal industry).',
    beliefs: [
      'AI will augment lawyers, not replace them (at least for the next decade)',
      'Legal AI needs to be vertical-specific, not generic',
      'Trust is everything: lawyers need explainable, verifiable AI',
      'Enterprise-first: serve elite firms, not consumers',
      'Build deep partnerships with law firms to understand real workflows',
    ],
    designPhilosophy: 'Professional-grade AI for high-stakes work. Design for trust, verification, and integration into existing legal workflows.',
    greenFlags: [
      'Founders are roommates turned billionaires — strong partnership',
      'Elite firm adoption: 42% of AmLaw 100 using Harvey',
      'Vertical focus: deep understanding of legal workflows',
      'Strong investor backing: Sequoia, Kleiner Perkins, a16z',
      'Fast growth: $100M ARR in 3 years',
    ],
    redFlags: [
      'Enterprise-only: might miss mid-market/SMB opportunity',
      'Legal market slowness: law firms are slow to change',
      'Liability concerns: AI errors in legal work could be catastrophic',
      'Competition from incumbents: Thomson Reuters, LexisNexis have distribution',
    ],

    // Design Opportunity
    designTeam: {
      teamSize: '~20-30 (estimated)',
      notableMembers: [
        { name: 'Ryan Samii', role: 'Product Lead (joined Dec 2025 from Hebbia)' },
      ],
    },
    designWorkType: {
      logicBehavior: {
        level: 'high',
        tasks: [
          'Designing multi-step legal reasoning flows',
          'Building AI behavior for different legal tasks (research vs drafting vs review)',
          'Defining role-based AI: different behaviors for partners vs associates',
          'Creating feedback loops for lawyers to improve AI accuracy',
        ],
      },
      evaluation: {
        level: 'high',
        tasks: [
          'Designing confidence scores for AI-generated legal arguments',
          'Building verification workflows: how lawyers check AI outputs',
          'Creating citation/source tracking systems',
          'Defining quality metrics for legal AI (accuracy, relevance, completeness)',
        ],
      },
      interface: {
        level: 'medium',
        tasks: [
          'Chat interface for legal Q&A',
          'Document drafting & review interfaces',
          'Integration with legal software (Westlaw, LexisNexis, practice management)',
          'Professional UI for high-stakes legal work',
        ],
      },
    },
    productStage: '1→10',

    // Product & User Context
    targetAudiences: {
        primary: 'Lawyers and legal professionals at elite law firms and corporate legal departments',
        secondary: 'Compliance teams, contract managers, and legal operations professionals',
    },
    userProblems: [
        'Legal research requires hours of manual search through case law and statutes',
        'Drafting legal documents from scratch or templates is time-consuming and repetitive',
        'Junior associates spend billable hours on routine tasks that could be automated',
        'Reviewing contracts and legal documents for issues requires meticulous manual reading',
        'Law firms face pressure to reduce costs while maintaining quality and accuracy',
    ],

    // Designer Links
    designerLinks: [],

    // Open Roles
    openRoles: [
      {
        title: 'Staff Product Designer',
        location: 'San Francisco, CA (Hybrid)',
        url: 'https://www.harvey.ai/brand/company/careers/24616c39-e293-4bcc-a3dd-e6f33a71c8ee',
        level: 'Staff',
        type: 'full-time',
        aboutRole: 'Lead the design of end-to-end product experiences for Harvey\'s AI-powered legal tools, from concept to polished execution.',
        responsibilities: [
          'Manage multiple projects from ideation to launch',
          'Create high-quality designs, interactions, and prototypes that transform complex problems into intuitive solutions',
          'Collaborate with engineers, AI researchers, product managers, and lawyers',
          'Design interfaces that help users understand, trust, and guide AI outputs',
          'Promote and develop best practices in designing with AI',
        ],
        requirements: [
          '8+ years of experience designing products in a fast-paced environment',
          'Portfolio demonstrating best work',
          'Ability to tackle complex challenges and transform them into simple, intuitive experiences',
          'Deep understanding of design systems and strong sense of visual/interaction design',
          'Experience conducting user research and applying insights to design decisions',
        ],
        whyInteresting: 'Designing AI for high-stakes legal work. Extremely complex problem space with massive impact. Working with elite law firms.',
      },
    ],

    // Culture Insights
    cultureInsights: [
      {
        source: 'linkedin',
        sentiment: 'positive',
        content: 'Fast-paced, mission-driven culture. Founders still share an apartment while building an $8B company.',
        url: 'https://www.linkedin.com/company/harvey-ai',
      },
    ],

    growthMetrics: {
      stage: 'high-growth',
      revenueGrowth: "$200M+ ARR (estimated 2025), ~3x YoY",
      userGrowth: "500+ law firms including Allen & Overy, PwC, KKR",
      signals: [
        "$8B valuation at Series E (8x from $1B in 18 months)",
        "$1B+ total raised (Sequoia, Elad Gil, OpenAI Startup Fund)",
        "500+ top law firms as customers",
        "Allen & Overy 3,500-lawyer rollout",
        "DeepMind + elite law firm co-founders",
      ],

      tam: "$300B+ (Global legal services market addressable by AI)",
      marketShare: "<0.1% (early market, elite law firm focus)",
      ceiling: "Early innings: Legal AI adoption just starting. Most law firms still manual. Harvey targeting top 1% of legal market first, then expanding down-market.",
      tailwinds: [
        "Law firms under pressure to improve efficiency and reduce costs",
        "Precedent work (research, drafting) is highly automatable",
        "Elite law firm adoption creates credibility cascade",
        "Partnership model (DeepMind researcher + lawyer) bridges technical and domain gap",
        "High willingness to pay in legal market ($500+ per lawyer per month)",
      ],
      headwinds: [
        "Thomson Reuters (Casetext acquisition) has distribution to 1M+ lawyers",
        "LexisNexis and Westlaw have incumbent relationships",
        "Leya targeting Europe (regional competition)",
        "Legal accuracy requirements are extremely high (liability risk)",
        "Conservative legal industry = slow adoption cycles",
      ],

      moatType: 'switching-costs',
      moatStrength: "Medium: Workflow integration and training data from elite firms create switching costs. Brand with top law firms is valuable. But no network effects, legal expertise is moat.",
    },

    // My Tracking
    tracking: {
      status: 'watching',
      fitScore: 8,
      whyJoin: [
        'AI-native Level 4: AI is the product',
        'Massive design challenge: high-stakes legal AI',
        'Elite customers: working with top law firms',
        'Strong founders: Pereyra (DeepMind) + Weinberg (O\'Melveny)',
        'Well-funded: $1B+ raised, $8B valuation',
      ],
      whyNot: [
        'Enterprise-only: might be less consumer-facing innovation',
        'Legal domain: need to learn legal workflows',
        'Liability pressure: errors in legal AI are high-stakes',
      ],
      nextActions: [
        'Research Harvey\'s product in detail',
        'Follow Gabriel Pereyra and Winston Weinberg on Twitter',
        'Connect with Harvey designers on LinkedIn',
        'Apply for Staff Product Designer role',
      ],
    },

    // Meta
    lastUpdated: '2026-01-26T10:30:00',
    sources: [
      {
        title: 'Harvey AI Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Harvey_(software)',
      },
      {
        title: 'Harvey raises $300M Series E at $5B valuation',
        url: 'https://techfundingnews.com/legal-ai-startup-harvey-300m-series-e-funding-5b-valuation/',
      },
      {
        title: 'Harvey founders podcast on LawNext',
        url: 'https://www.lawnext.com/2026/01/lawnext-from-roommates-to-billionaires-harveys-founders-gabriel-pereyra-and-winston-weinberg-on-building-ai-infrastructure-for-law.html',
      },
      {
        title: 'Inside Harvey: TechCrunch profile',
        url: 'https://techcrunch.com/2025/11/14/inside-harvey-how-a-first-year-legal-associate-built-one-of-silicon-valleys-hottest-startups/',
      },
    ],
  };
