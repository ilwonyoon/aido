import { Company } from '../types';

export const leya: Company = {
    id: 'leya',
    name: 'Leya',
    description: 'AI workspace for lawyers. Automates legal research, document review, and drafting.',
    website: 'https://leya.law',
    headquarters: 'Stockholm, Sweden',
    remote: 'Hybrid',

    stage: 'Series A',
    valuation: '~$100M (estimated)',
    totalFunding: '$35.5M',
    fundingHistory: [
      { stage: 'Seed', amount: '$10.5M', date: '2023-10', leadInvestors: ['Y Combinator', 'Benchmark'] },
      { stage: 'Series A', amount: '$25M', date: '2024-07', leadInvestors: ['Benchmark', 'Redpoint'] },
    ],
    revenue: 'N/A (early stage)',
    growth: '70+ law firms in Europe',
    runway: '18+ months',
    customers: '70+ European law firms',

    competitors: [
      {
        name: 'Harvey',
        description: 'Legal AI for law firms, $2B+ valuation, US-focused',
        whyTheyWin: 'Sequoia/OpenAI backing, elite law firm partnerships (A&O, PwC), US market dominance',
      },
      {
        name: 'Casetext (Thomson Reuters)',
        description: 'CoCounsel AI, acquired for $650M',
        whyTheyWin: 'Thomson Reuters distribution, established legal research brand, existing law firm relationships',
      },
      {
        name: 'Ironclad',
        description: 'Contract lifecycle management with AI',
        whyTheyWin: 'Strong enterprise CLM product, $3.2B valuation, 1000+ enterprise customers',
      },
    ],
    marketPosition: 'Leading in European legal AI market',
    moat: [
      'Deep integration with European legal systems',
      'YC + Benchmark + Redpoint backing',
      'First mover in EU legal AI',
    ],
    vsGiants: 'European focus avoids direct US competition with Harvey. Multi-jurisdictional expertise (EU, UK, Nordic law) that US players lack. Not dependent on single LLM provider.',

    aiNativeLevel: 'B',
    aiNativeLevelDescription: 'AI-Core on Proven Workflow: AI is core differentiator for legal work. Building on proven legal workflow with AI enhancement.',
    aiDesignChallenges: [
      'Trust in legal context: lawyers need 100% accuracy',
      'Citation & source verification UX',
      'Complex document workflows',
      'Multi-jurisdictional legal terminology',
    ],

    founders: [
      {
        name: 'Max Junestrand',
        role: 'CEO',
        background: 'Stockholm School of Economics',
      },
      {
        name: 'August Erséus',
        role: 'CTO',
        background: 'Technical co-founder',
      },
      {
        name: 'Sigge Labo',
        role: 'Co-founder',
        background: 'Stockholm School of Economics',
      },
    ],
    whyBuilding:
      'Lawyers spend 60% of time on manual, repetitive tasks. AI can free them to focus on strategic work.',
    beliefs: [
      'AI should augment lawyers, not replace them',
      'Legal work requires extreme precision',
      'European legal market is underserved',
    ],
    greenFlags: [
      'YC W24 batch — strong network',
      'Benchmark + Redpoint investors',
      'Fast growth in enterprise legal',
      'Small team (65) — high impact potential',
    ],
    redFlags: [
      'Europe-focused — may limit US opportunities',
      'Legal AI is crowded space',
      'Rebranded from Legora — strategy shift?',
    ],

    designTeam: {
      teamSize: '~3-5 (estimated)',
    },
    designWorkType: {
      logicBehavior: {
        level: 'high',
        tasks: [
          'Legal accuracy verification workflows',
          'Citation confidence scoring',
          'Document comparison logic',
          'Jurisdiction-specific behavior rules',
        ],
      },
      evaluation: {
        level: 'high',
        tasks: [
          'Legal output accuracy metrics',
          'Lawyer feedback integration',
          'Error rate tracking',
        ],
      },
      interface: {
        level: 'high',
        tasks: [
          'Document review interface',
          'Legal research dashboard',
          'Template/playbook management',
          'Collaboration tools for legal teams',
        ],
      },
    },
    productStage: '0→1',

    // Product & User Context
    targetAudiences: {
        primary: 'European law firms and corporate legal departments',
        secondary: 'Individual lawyers and legal professionals in EU countries',
    },
    userProblems: [
        'Legal research across European jurisdictions requires knowledge of multiple legal systems',
        'US-based legal AI tools lack European case law and regulatory context',
        'GDPR compliance requires keeping legal data within EU borders',
        'Smaller European law firms cannot afford US legal AI pricing',
        'Language barriers limit access to legal AI trained primarily on English text',
    ],

    designerLinks: [],
    openRoles: [],

    cultureInsights: [
      {
        source: 'linkedin',
        sentiment: 'positive',
        content: 'Fast-paced YC startup energy. Small team (~20 people), big ambitions.',
      },
      {
        source: 'glassdoor',
        sentiment: 'neutral',
        content: 'No reviews yet — company too small for sufficient data.',
      },
      {
        source: 'levels.fyi',
        sentiment: 'neutral',
        content: 'No Product Design data. Startup size, not registered on levels.fyi.',
      },
    ],

    growthMetrics: {
      stage: 'high-growth',
      revenueGrowth: "Unknown (early stage, revenue not disclosed)",
      userGrowth: "70+ European law firms",
      signals: [
        "$35.5M funding in 18 months (Seed $10.5M → Series A $25M)",
        "$100M valuation after Series A",
        "YC + Benchmark + Redpoint backing",
        "Leading European legal AI market position",
      ],

      tam: "$50B+ (Global legal services market addressable by AI)",
      marketShare: "~0.1% of European legal AI market",
      ceiling: "Early innings: Most law firms still manual workflows, AI adoption just beginning",
      tailwinds: [
        "European legal AI market underserved vs US",
        "Multi-jurisdictional expertise (EU, UK, Nordic) is barrier to US entrants",
        "Law firms under pressure to improve efficiency",
        "Data privacy regulations favor European providers",
      ],
      headwinds: [
        "Harvey dominates US with $2B+ valuation and elite partnerships",
        "Thomson Reuters acquisition of Casetext signals incumbents entering",
        "Europe-only focus limits TAM vs global competitors",
        "Legal accuracy requirements create high bar for AI",
      ],

      moatType: 'technology',
      moatStrength: "Medium: Deep European legal system integration creates regional moat, but no network effects. First-mover advantage in EU, but model capabilities are table stakes.",
    },

    tracking: {
      status: 'watching',
      fitScore: 7,
      whyJoin: [
        'Early stage — can shape design culture',
        'YC network access',
        'Legal AI is interesting vertical',
        'European base (remote possible?)',
      ],
      whyNot: [
        'Stockholm-based — relocation needed',
        'Legal domain requires learning curve',
        'Smaller market than general AI tools',
      ],
      nextActions: [
        'Research EU legal tech market',
        'Check if remote is possible',
        'Try Leya product demo',
      ],
    },

    lastUpdated: '2025-01-24',
    sources: [
      {
        title: 'Leya Series A Announcement',
        url: 'https://techcrunch.com/2024/07/17/leya-raises-25m-series-a/',
      },
      {
        title: 'YC Company Page',
        url: 'https://www.ycombinator.com/companies/legora',
      },
    ],
  };
