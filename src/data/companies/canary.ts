import { Company } from '../types';

export const canary: Company = {
  id: 'canary',
  name: 'Canary',
  description: 'AI QA engineer that understands your codebase — reads PR diffs, infers developer intent, auto-generates Playwright tests for affected user flows, runs them against preview environments, and posts results with video recordings directly to PRs.',
  website: 'https://www.runcanary.ai',
  headquarters: 'Unknown',
  remote: 'Unknown',

  // Business
  stage: 'Seed',
  valuation: 'Unknown',
  totalFunding: '$500K (estimated YC Seed)',
  fundingHistory: [
    {
      stage: 'Seed',
      amount: '$500K (estimated)',
      date: '2026-01',
      leadInvestors: ['Y Combinator'],
    },
  ],
  revenue: 'Unknown (early customers in production)',
  growth: 'Published QA-Bench v0 benchmark; construction tech customer in production catching regressions',
  runway: 'YC-backed — typical 18-24 month runway',
  customers: 'Web application development teams shipping AI-generated code; construction tech, SaaS companies',

  // Growth & Potential
  growthMetrics: {
    stage: 'early-growth',
    revenueGrowth: 'Unknown — early stage',
    userGrowth: 'Early customers in production; benchmark published against Grafana, Mattermost, Cal.com, Apache Superset',
    signals: [
      'YC W26 backing',
      'Published QA-Bench v0: open benchmark across 35 real PRs from major OSS projects',
      'Customer caught $1,600 invoice flow regression in production — concrete ROI story',
      'AI coding tools increasing dev velocity 100x but incidents up 43% YoY — market pull',
      '"Validation layer for AI-generated code" is a new category with structural tailwind',
    ],
    tam: '$10B+ software testing and QA market; growing with AI coding adoption',
    marketShare: '<0.1% of TAM = 500x+ upside potential',
    ceiling: 'Early innings: AI coding tools creating structural demand for AI QA; this market scales with GitHub Copilot and Cursor adoption',
    tailwinds: [
      'AI coding tools (Cursor, GitHub Copilot, Windsurf) accelerating code output faster than QA can keep up',
      'Customer-facing incidents up 43% YoY — engineering teams need automated regression testing',
      '"Vibe coding" trend creating entire codebases by non-engineers who cannot write tests',
      'Playwright adoption as de facto E2E testing standard reduces integration complexity',
      'Preview environments (Vercel, Railway) are ubiquitous — Canary can test before merge',
    ],
    headwinds: [
      'Large incumbents (Playwright, Cypress, Selenium) are entrenched in testing workflows',
      'GitHub Copilot and Google Gemini Code Assist are adding test generation features natively',
      'AI-generated tests can be brittle — developer trust requires high reliability bar',
      'Two-person founding team building a highly complex code understanding system',
    ],
    moatType: 'technology',
    moatStrength: 'Technical moat if codebase-understanding accuracy and test quality exceed AI-native competitors. Published QA-Bench establishes credibility.',
  },

  // Competition
  competitors: [
    {
      name: 'GitHub Copilot',
      description: 'AI code assistant with test generation capabilities.',
      whyTheyWin: 'Deep GitHub integration, massive developer mindshare, Microsoft distribution.',
    },
    {
      name: 'Cubic.dev',
      description: 'YC company doing AI-powered PR code review.',
      whyTheyWin: 'Similar YC pedigree, PR-integrated workflow, code review focus.',
    },
    {
      name: 'Playwright (Microsoft)',
      description: 'Open-source E2E testing framework.',
      whyTheyWin: 'Free, widely adopted, de facto standard for web E2E testing.',
    },
  ],
  marketPosition: 'The only AI QA engineer that reads your codebase to generate intent-aware E2E tests from PR diffs — not DOM-scraping or screenshots',
  moat: [
    'Codebase comprehension (reads routes, controllers, validation logic) vs surface-level DOM testing',
    'QA-Bench v0: open benchmark establishes credibility and creates competitive differentiation',
    'Windsurf + Cognition + Google founders — deep AI coding agent experience',
  ],
  vsGiants: 'Codebase-aware intent inference vs generic test generation from GitHub Copilot',

  // AI-Native Level
  aiNativeLevel: 'B',
  aiNativeLevelDescription: 'AI-Core: Without AI understanding the codebase and inferring PR intent, Canary is just a Playwright test runner. The value is entirely in AI reading code context to generate tests that match developer intent.',
  aiDesignChallenges: [
    'Test result communication: how do developers understand what Canary tested and why in a PR comment?',
    'Confidence and coverage UI: how do teams trust that 90%+ of user flows are covered?',
    'Failure analysis UX: when a test fails, how do developers debug with video recordings?',
    'Intent mapping display: showing how Canary connected a PR diff to affected user flows',
    'False positive management: how do devs mark a test failure as expected behavior change?',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Aakash Mahalingam',
      role: 'Co-founder',
      background: 'Previously built AI coding agents at Windsurf and Cognition (ex-Google). Deep experience with agentic code understanding.',
    },
    {
      name: 'Viswesh N G',
      role: 'Co-founder',
      background: 'Previously built AI coding tools at Windsurf and Google. Co-built the technical foundation for Canary\'s codebase comprehension.',
    },
  ],
  whyBuilding: '"AI coding tools have made developers 100x faster but customer-facing incidents are up 43% YoY. QA hasn\'t kept up." Aakash and Viswesh built Canary as the validation layer for the agentic coding era — treating QA as a first-class AI problem, not a manual afterthought.',
  beliefs: [
    'AI coding acceleration without AI QA creates a structural reliability crisis',
    'QA that understands code intent is categorically different from DOM-scraping test runners',
    'The validation layer for AI-generated code is one of the highest-leverage infrastructure plays in 2026',
  ],
  designPhilosophy: 'Unknown',
  greenFlags: [
    'Ex-Windsurf and Cognition — deep expertise in agentic code understanding',
    'QA-Bench v0: credibility-building benchmark against real OSS projects',
    'Structural market tailwind: AI coding tools creating the exact problem Canary solves',
    'YC W26 backing',
  ],
  redFlags: [
    'Two-person team building a highly complex code comprehension system',
    'GitHub Copilot and Google Gemini adding test generation natively — large incumbent threat',
    'Developer tool: high trust bar, slow enterprise sales cycles',
    'AI-generated tests still face reliability questions in engineering culture',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: 'Unknown (estimated 0, 2-person technical founding team)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'medium',
      tasks: [
        'PR diff analysis workflow: how Canary decides which user flows to test',
        'Test retry and flakiness logic design',
        'False positive handling and feedback loop to improve test generation',
      ],
    },
    evaluation: {
      level: 'high',
      tasks: [
        'PR comment format: communicating test results, coverage, and video recordings clearly',
        'Failure analysis: showing which user flow broke and why, with video evidence',
        'QA coverage dashboard: how much of the codebase has been validated',
      ],
    },
    interface: {
      level: 'low',
      tasks: [
        'Canary dashboard: test history, coverage trends, PR pass/fail rates',
        'Codebase connection setup and repo configuration',
        'Test suite management and manual test override',
      ],
    },
  },
  productStage: '0→1',

  // Designer Links
  designerLinks: [],

  // Open Roles
  openRoles: [],

  // Culture Insights
  cultureInsights: [],

  // My Tracking
  tracking: {
    status: 'watching',
    fitScore: 4,
    whyJoin: [
      'Structural tailwind is real: AI coding + no AI QA = growing reliability crisis',
      'QA-Bench v0 shows technical credibility and research-forward culture',
      'Windsurf/Cognition experience = high technical bar',
    ],
    whyNot: [
      'Developer tool — design is extremely low priority vs AI accuracy at this stage',
      'Two-person team unlikely to hire designer before Series A',
      'GitHub Copilot + Google Gemini are direct feature threats from platforms',
      'Low design leverage: product surface is mostly PR comments and a simple dashboard',
    ],
    nextActions: [
      'Monitor for Series A and enterprise customer traction',
      'Watch for expansion beyond Playwright to broader test ecosystem',
    ],
  },

  // Meta
  lastUpdated: '2026-04-22T00:00:00',
  sources: [
    { title: 'Canary YC Profile', url: 'https://www.ycombinator.com/companies/canary' },
    { title: 'Launch HN: Canary (YC W26)', url: 'https://news.ycombinator.com/item?id=47441629' },
    { title: 'Canary Website', url: 'https://www.runcanary.ai' },
    { title: 'Canary YC Launch Post', url: 'https://www.ycombinator.com/launches/PSs-canary-the-first-ai-qa-engineer-that-understands-your-codebase' },
  ],
};
