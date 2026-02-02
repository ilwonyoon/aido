import { Company } from '../types';

export const hebbia: Company = {
    id: 'hebbia',
    name: 'Hebbia',
    description: 'AI platform for knowledge work. Enables professionals to search, analyze, and synthesize information across unlimited documents.',
    website: 'https://www.hebbia.ai',
    screenshot: '/screenshots/hebbia-screenshot.png',

    // Location
    headquarters: 'New York, NY',
    remote: 'Hybrid',

    // OG Image
    ogImage: '/og-images/hebbia-og.webp',


  // Multi-dimensional Tags
  aiTypes: ['text-assistant', 'search-retrieval'],
  markets: ['prosumer'],
  industries: ['infrastructure', 'productivity'],

    // Business
    stage: 'Series B',
    valuation: '$700M',
    totalFunding: '$130M',
    fundingHistory: [
      {
        stage: 'Series B',
        amount: '$130M',
        date: '2024-07',
        valuation: '$700M',
        leadInvestors: ['Andreessen Horowitz', 'Index Ventures', 'GV', 'Peter Thiel'],
      },
    ],
    revenue: '$13M ARR (at Series B, profitable)',
    growth: 'Profitable. 30% of top 50 asset managers use Hebbia',
    runway: 'Strong (just raised $130M)',
    customers: 'BlackRock, KKR, Carlyle, Centerview, 40% of world\'s largest asset managers',

    // Competition
    competitors: [
      {
        name: 'Glean',
        description: 'AI workplace search',
        whyTheyWin: 'Broader enterprise use case, $7.2B valuation',
      },
      {
        name: 'Perplexity',
        description: 'AI search engine',
        whyTheyWin: 'Consumer-friendly, web-scale search',
      },
      {
        name: 'ChatGPT Enterprise',
        description: 'OpenAI for business',
        whyTheyWin: 'Brand, GPT-4, broader use cases',
      },
    ],
    marketPosition: 'Leader in AI for finance and legal research. Deep penetration in asset management.',
    moat: [
      'Financial services expertise and relationships',
      'Can process unlimited document length',
      'Tabular output format (spreadsheet-like)',
      'Profitable at $13M ARR (54x valuation multiple)',
      'Backed by a16z, Peter Thiel, Index',
    ],
    vsGiants: 'Domain-specific vs generic ChatGPT. Structured output vs freeform. Built for finance/legal.',

    // AI-Native Level
    aiNativeLevel: 'B',
    aiNativeLevelDescription: 'AI-Core on Proven Workflow: AI is core differentiator for knowledge work and research. Proven enterprise research workflow enhanced by AI.',
    aiDesignChallenges: [
      'Designing for unlimited document length',
      'Tabular/spreadsheet output for complex queries',
      'Financial analyst workflows',
      'Multi-document comparison and synthesis',
      'Enterprise security and compliance UX',
    ],

    // Founders & Vision
    founders: [
      {
        name: 'George Sivulka',
        role: 'CEO & Founder',
        background: 'Stanford PhD (electrical engineering). Worked at NASA as teenager. Graduated Stanford BS in math in 2.5 years. Wunderkind.',
      },
    ],
    whyBuilding: 'Knowledge work is broken. Professionals waste hours searching documents. AI can make them 10x faster.',
    beliefs: [
      'AI should handle unlimited document length',
      'Structured output > freeform chat',
      'Vertical AI > horizontal AI',
      'Finance and legal are killer use cases',
      'Profitability matters (profitable at $13M ARR)',
    ],
    designPhilosophy: 'Not a chatbot. Design for structured analysis. Spreadsheet-like outputs for finance professionals.',
    greenFlags: [
      'George Sivulka is brilliant (NASA, Stanford PhD)',
      'Profitable at $13M ARR',
      '30% of top 50 asset managers as customers',
      'Strong investors (a16z, Peter Thiel)',
      'Acquired FlashDocs (slide deck AI) in 2025',
    ],
    redFlags: [
      'New York location (hybrid, not remote)',
      'Finance-heavy (might not fit design interests)',
      'Young company (founded 2020)',
      'Limited public info on design team',
    ],

    // Design Opportunity
    designTeam: {
      designHead: 'Unknown',
      teamSize: '51-200 employees (startups.gallery)',
    },
    designWorkType: {
      logicBehavior: {
        level: 'high',
        tasks: [
          'Design AI behaviors for document analysis',
          'Define query → table output logic',
          'Multi-document synthesis workflows',
        ],
      },
      evaluation: {
        level: 'high',
        tasks: [
          'Quality metrics for AI analysis',
          'Accuracy evaluation for financial data',
          'User research with asset managers',
        ],
      },
      interface: {
        level: 'high',
        tasks: [
          'Spreadsheet-like interfaces for AI output',
          'Document upload and management',
          'Enterprise security dashboards',
        ],
      },
    },
    productStage: '1→10',

    // Product & User Context
    targetAudiences: {
        primary: 'Investment bankers, consultants, and analysts conducting research and due diligence',
        secondary: 'Legal teams and compliance professionals reviewing massive document sets',
    },
    userProblems: [
        'Analyzing hundreds of PDFs for due diligence requires weeks of manual review',
        'Finding specific clauses or data points across thousands of pages is tedious',
        'Creating investment memos requires synthesizing insights from dozens of sources',
        'Research teams duplicate effort searching documents colleagues already reviewed',
        'Complex financial documents require domain expertise AI currently lacks',
    ],

    // Designer Links
    designerLinks: [],

    // Open Roles
    openRoles: [],

    // Culture Insights
    cultureInsights: [],

    growthMetrics: {
      stage: 'high-growth',
      revenueGrowth: "$13M ARR (2024), profitable, ~3x YoY",
      userGrowth: "Elite financial institutions (BlackRock, KKR, Apollo)",
      signals: ["$700M valuation at Series B", "$143M raised (Index, a16z, Thiel)", "Profitable on $13M ARR", "George Sivulka (Stanford)", "BlackRock, KKR as customers"],
      tam: "$50B+ (Financial services research)",
      marketShare: "<0.1%",
      ceiling: "Early innings: Financial analyst workflows huge TAM, targeting elite buy-side first.",
      tailwinds: ["Finance pays premium", "Structured data extraction defensible", "Elite customer logos"],
      headwinds: ["Finance vertical limits TAM", "Bloomberg entrenched", "AlphaSense competing"],
      moatType: 'technology',
      moatStrength: "Medium: Structured data extraction and financial domain expertise. Elite customer relationships.",
    },

    // My Tracking
    tracking: {
      status: 'watching',
      fitScore: 7,
      whyJoin: [
        'AI-native Level A: AI is the product',
        'George Sivulka is brilliant founder',
        'Profitable and well-funded',
        'Elite customers (BlackRock, KKR)',
        'Unique design challenge (structured AI output)',
      ],
      whyNot: [
        'New York location (hybrid, not remote)',
        'Finance-heavy domain (might be dry)',
        'Small team, early stage',
        'Unknown design culture',
      ],
      nextActions: [
        'Try Hebbia demo',
        'Research George Sivulka',
        'Understand finance analyst workflows',
      ],
    },

    // Meta
    lastUpdated: '2026-01-26T14:20:00',
    sources: [
      {
        title: 'Hebbia Series B $130M at $700M valuation',
        url: 'https://techcrunch.com/2024/07/09/ai-startup-hebbia-rased-130m-at-a-700m-valuation-on-13-million-of-profitable-revenue/',
      },
      {
        title: 'Hebbia Product Designer job',
        url: 'https://boards.greenhouse.io/hebbia/jobs/4150321005',
      },
    ],
  };
