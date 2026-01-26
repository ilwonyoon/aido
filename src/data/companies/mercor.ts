import { Company } from '../types';

export const mercor: Company = {
    id: 'mercor',
    name: 'Mercor',
    description: 'AI-powered hiring platform. Matches talent with opportunities using AI interviews.',
    website: 'https://mercor.com',
    headquarters: 'San Francisco, CA',
    remote: 'No',

    stage: 'Series A → C (rapid growth)',
    valuation: '$10B (Oct 2025)',
    totalFunding: '$480M+',
    fundingHistory: [
      { stage: 'Pre-seed', amount: '$1.5M', date: '2023-03', leadInvestors: ['Y Combinator'] },
      { stage: 'Seed', amount: '$3M', date: '2023-06', leadInvestors: ['General Catalyst'] },
      { stage: 'Series A', amount: '$30M', date: '2024-03', valuation: '$250M', leadInvestors: ['Benchmark'] },
      { stage: 'Series B', amount: '$100M', date: '2024-08', valuation: '$2B', leadInvestors: ['Benchmark'] },
      { stage: 'Series C', amount: '$350M', date: '2025-10', valuation: '$10B', leadInvestors: ['General Catalyst'] },
    ],
    revenue: 'Growing rapidly',
    growth: '$250M → $2B → $10B valuation in 1 year',
    runway: 'Strong',
    customers: 'OpenAI, Anthropic, tech companies',

    competitors: [
      {
        name: 'LinkedIn',
        description: 'Professional network, 1B+ members',
        whyTheyWin: 'Dominant professional network, Microsoft integration, recruiter standard tool',
      },
      {
        name: 'Hired',
        description: 'Tech talent marketplace',
        whyTheyWin: 'Curated tech talent pool, salary transparency, established enterprise relationships',
      },
      {
        name: 'Triplebyte (Karat)',
        description: 'Technical interview platform',
        whyTheyWin: 'Technical assessment expertise, interview-as-a-service model',
      },
    ],
    marketPosition: 'AI-first hiring platform',
    moat: [
      'AI interview technology',
      'Network effects from talent pool',
      'Customers include OpenAI, Anthropic',
      'Benchmark + General Catalyst backing',
    ],
    vsGiants: 'AI-native from day one vs LinkedIn\'s AI add-ons. Focused on talent quality over quantity. OpenAI/Anthropic as customers validates approach. Skills-based vs credential-based matching.',

    aiNativeLevel: 3,
    aiNativeLevelDescription: 'AI is core differentiator. AI conducts interviews and matching.',
    aiDesignChallenges: [
      'AI interview experience design',
      'Candidate fairness and bias',
      'Matching algorithm transparency',
      'Employer/candidate dual experience',
    ],

    founders: [
      {
        name: 'Brendan Foody',
        role: 'CEO',
        background: 'Georgetown dropout, Thiel Fellow, 21 years old at founding',
      },
      {
        name: 'Adarsh Hiremath',
        role: 'CTO',
        background: 'Harvard dropout, Thiel Fellow',
      },
      {
        name: 'Surya Midha',
        role: 'COO',
        background: 'Thiel Fellow, high school friends with co-founders',
      },
    ],
    whyBuilding:
      'Traditional hiring is broken. AI can match talent with opportunity faster and more fairly.',
    beliefs: [
      'AI can remove human bias in hiring',
      'Skills matter more than credentials',
      'Global talent pool is underutilized',
    ],
    greenFlags: [
      'Hypergrowth — fastest rising valuation',
      'OpenAI & Anthropic as customers',
      'Young founders with big vision',
      'Benchmark + General Catalyst investors',
      'Thiel Fellows — unconventional path',
    ],
    redFlags: [
      'Very young founders — execution risk?',
      'Hiring space is notoriously difficult',
      'AI interview ethics concerns',
      'Rapid growth may outpace culture',
    ],

    designTeam: {
      teamSize: 'Unknown (likely small)',
    },
    designWorkType: {
      logicBehavior: {
        level: 'high',
        tasks: [
          'Interview fairness algorithms',
          'Matching criteria design',
          'Bias detection and mitigation',
          'Candidate scoring logic',
        ],
      },
      evaluation: {
        level: 'high',
        tasks: [
          'Hire success metrics',
          'Candidate satisfaction',
          'Employer satisfaction',
          'Interview quality assessment',
        ],
      },
      interface: {
        level: 'medium',
        tasks: [
          'AI interview experience',
          'Employer dashboard',
          'Candidate profile and matching',
          'Communication tools',
        ],
      },
    },
    productStage: '1→10',

    designerLinks: [],
    openRoles: [
      {
        title: 'Product Designer',
        location: 'San Francisco (Onsite)',
        url: 'https://mercor.com/careers',
        team: 'Core Product',
        level: 'Mid-Senior',
        type: 'full-time',
        compensation: '$150K-$250K + Equity',
        postedDate: '2025-01',
        aboutRole: 'Design the AI-powered hiring experience that companies like OpenAI and Anthropic use to find talent. Shape how AI transforms recruiting.',
        responsibilities: [
          'Design the AI interview experience for candidates',
          'Create employer dashboards for talent discovery and matching',
          'Build trust systems that make AI hiring feel fair and transparent',
          'Design two-sided marketplace experiences (candidates + employers)',
          'Own mobile and web experiences end-to-end',
        ],
        requirements: [
          '3+ years of product design experience',
          'Portfolio showing complex product work',
          'Ability to work onsite in San Francisco full-time',
          'Experience with marketplaces or two-sided platforms preferred',
          'Strong visual and interaction design skills',
        ],
        preferred: [
          'Experience with AI/ML products',
          'Background in HR tech or recruiting',
          'Worked at a hypergrowth startup',
          'Understanding of algorithmic fairness',
        ],
        teamInfo: 'Small design team at a $10B company. Direct access to young founders (Thiel Fellows). Move fast culture.',
        whyInteresting: 'Hypergrowth rocket ship ($250M → $10B in 1 year). AI hiring is ethically complex — interesting design challenges around fairness and transparency.',
      },
    ],

    cultureInsights: [
      {
        source: 'linkedin',
        sentiment: 'positive',
        content: 'Young, ambitious team (~50 people). Harvard dropout founder. Move fast culture.',
      },
      {
        source: 'twitter',
        sentiment: 'positive',
        content: 'Hypergrowth mode. Validated product with OpenAI/Anthropic as customers.',
      },
      {
        source: 'glassdoor',
        sentiment: 'neutral',
        content: 'Few reviews — growing rapidly but limited data available.',
      },
      {
        source: 'levels.fyi',
        sentiment: 'neutral',
        content: 'Product Design: $150K-250K + Equity (per job postings). No levels.fyi data.',
      },
    ],

    growthMetrics: {
      stage: 'hypergrowth',
      revenueGrowth: "$30M ARR (estimated, growing rapidly)",
      userGrowth: "300K+ candidates, 3000+ companies hiring",
      signals: [
        "$250M valuation at Series B (10x from $25M in 8 months)",
        "$32M raised (Benchmark + Peter Thiel)",
        "Used by OpenAI, Anthropic, Ramp for hiring",
        "300K+ candidates, 3000+ companies",
        "Youngest YC founders (19, 22 at start)",
      ],

      tam: "$200B+ (Global recruiting and staffing market)",
      marketShare: "<0.1% (very early, niche positioning in tech hiring)",
      ceiling: "Early innings: AI interviewing is controversial and unproven at scale. Market forming, but regulatory/ethical headwinds may limit ceiling.",
      tailwinds: [
        "Tech hiring remains inefficient and expensive",
        "Remote work increases global talent pool",
        "Companies desperate for quality engineers",
        "AI can reduce hiring bias if done right",
      ],
      headwinds: [
        "LinkedIn dominates professional recruiting ($15B revenue)",
        "AI interviewing has ethical concerns (fairness, transparency)",
        "Candidates may resist AI-only interviews",
        "Regulation risk (EU AI Act covers hiring algorithms)",
        "Two-sided marketplace is hard to scale (chicken-egg problem)",
      ],

      moatType: 'network-effects',
      moatStrength: "Medium: Two-sided marketplace creates network effects (more candidates → better matches → more employers), but LinkedIn has massive existing network. Brand with top AI companies (OpenAI, Anthropic) is valuable but early.",
    },

    tracking: {
      status: 'watching',
      fitScore: 6,
      whyJoin: [
        'Hypergrowth opportunity',
        'AI-first platform design',
        'Interesting two-sided marketplace',
        'Top-tier customers (OpenAI, Anthropic)',
      ],
      whyNot: [
        'Very young founders — cultural fit?',
        'Hiring space is tough',
        'Ethics concerns with AI interviews',
        'May be chaotic growth',
      ],
      nextActions: [
        'Research AI hiring ethics',
        'Look at competitor UX (Hired, etc)',
        'See if any designers in network',
      ],
    },

    lastUpdated: '2025-01-24',
    sources: [
      {
        title: 'Mercor Series C - TechCrunch',
        url: 'https://techcrunch.com/2025/10/27/mercor-quintuples-valuation-to-10b/',
      },
      {
        title: 'Sacra Profile',
        url: 'https://sacra.com/c/mercor/',
      },
    ],
  };
