import { Company } from '../types';

export const sonarly: Company = {
  id: 'sonarly',
  name: 'Sonarly',
  description: 'AI engineer for production: autonomously triages alerts, deduplicates noise, investigates root causes across Sentry/Datadog/Grafana, and opens production-aware fix PRs.',
  website: 'https://sonarly.com',
  screenshot: '/screenshots/sonarly-screenshot.png',
  headquarters: 'San Francisco, CA',
  remote: 'Unknown',

  ogImage: '/og-images/sonarly-og.webp',

  aiTypes: ['automation', 'code-assistant'],
  markets: ['b2b'],
  category: 'developer-tools' as const,
  industries: ['developer-tools'],

  stage: 'Seed',
  valuation: 'Unknown',
  totalFunding: '$500K',
  fundingHistory: [
    { stage: 'Seed', amount: '$500K', date: '2026-01', leadInvestors: ['Y Combinator'] },
  ],
  revenue: 'Unknown (pre-revenue)',
  growth: 'Early — launched Jan 2026, building first customers',
  runway: 'YC-backed seed',
  customers: 'Engineering teams using Sentry, Datadog, Grafana',

  growthMetrics: {
    stage: 'high-growth',
    revenueGrowth: 'Unknown (pre-revenue, early 2026 launch)',
    userGrowth: 'Early access; no public user counts',
    signals: [
      'YC W26 acceptance (Jan 2026)',
      'Launch HN: positive community reception',
      'Powered by Claude Code + Opus 4.6 (Anthropic stack)',
    ],
    tam: '$15B observability platform market by 2033 (CAGR 15.2%)',
    marketShare: '<0.01% of TAM = 1000x+ upside potential',
    ceiling: 'Early innings: autonomous incident remediation just emerging',
    tailwinds: [
      'AI coding explosion making autonomous PR generation viable',
      'On-call fatigue driving demand for alert noise reduction',
      'LLM reasoning quality now sufficient for root-cause analysis',
      'Sentry/Datadog adoption creates large installed base to integrate with',
      'YC network and demo-day momentum',
    ],
    headwinds: [
      'Sentry and Datadog building native AI triage features',
      'Trust barrier: engineers reluctant to merge AI-generated PRs in prod',
      '2-person team; limited bandwidth for enterprise sales',
      'Competitive AI observability space (Dash0, etc.)',
    ],
    moatType: 'technology',
    moatStrength: 'Early; moat comes from living production context map — the more alerts processed, the smarter triage becomes.',
  },

  competitors: [
    {
      name: 'Sentry',
      description: 'Error tracking with built-in AI triage features.',
      whyTheyWin: 'Incumbent with millions of devs; AI features baked into existing workflow.',
    },
    {
      name: 'Datadog',
      description: 'Observability platform with Watchdog AI anomaly detection.',
      whyTheyWin: 'Full-stack observability + strong enterprise contracts.',
    },
    {
      name: 'PagerDuty',
      description: 'Incident management with AI triage layer.',
      whyTheyWin: 'Deep enterprise relationships and alert routing workflows.',
    },
    {
      name: 'Blameless / FireHydrant',
      description: 'Incident response platforms adding AI summaries.',
      whyTheyWin: 'Post-incident workflows and enterprise features.',
    },
  ],
  marketPosition: 'Autonomous AI engineer for production incident response',
  moat: [
    'Living production context map (codebase + logs + metrics + traces)',
    'Claude Code / Opus 4.6 integration for high-quality fix PRs',
    'Network effects: each fixed alert improves future triage',
  ],
  vsGiants: 'Sonarly goes further than triage — it ships the fix. Sentry/Datadog flag; Sonarly resolves.',

  aiNativeLevel: 'A',
  aiNativeLevelDescription: 'AI IS the product. Remove the AI agent and Sonarly is nothing. The entire value is autonomous bug triage + fix via LLM.',
  aiDesignChallenges: [
    'Trust design: how do engineers trust AI-generated PRs going to production?',
    'Alert context UI: surfacing why the AI made a specific triage decision',
    'Human-in-the-loop: when to auto-merge vs. ask for review',
    'Onboarding: connecting to Sentry/Datadog without friction',
  ],

  founders: [
    {
      name: 'Dimittri Choudhury',
      role: 'Co-founder',
      background: 'From a village in France; moved to Paris for CS, met Alexandre. Co-founded Meoria (100K+ French students for Parcoursup). Dropped out to move to SF.',
    },
    {
      name: 'Alexandre Klobb',
      role: 'Co-founder',
      background: 'Started freelancing at 15 (web scraping), became full-stack dev then AI/ML engineer. Co-founded Meoria. Dropped out to build Sonarly.',
    },
  ],
  whyBuilding: 'Ex-student founders who scaled Meoria to 100K users before YC. They moved to SF on a $50/night Tenderloin hotel room to build Sonarly — driven by on-call fatigue and belief that AI agents with full production context can resolve most incidents automatically.',
  beliefs: [
    'Software should be self-healing.',
    'On-call engineers should be exception handlers, not routine debuggers.',
    'Production context (codebase + observability) is sufficient for LLMs to fix most bugs.',
  ],
  designPhilosophy: 'Unknown',
  greenFlags: [
    'YC W26 — strong signal of team quality',
    'Clear, specific pain (on-call fatigue is universal in engineering)',
    'Novel approach: fix, not just triage',
    'Founders scaled Meoria to 100K users — execution proven',
  ],
  redFlags: [
    '2-person team — no dedicated design or product function',
    'Trust in AI-generated production PRs is a major adoption barrier',
    'Incumbents (Sentry, Datadog) have AI roadmaps',
    'Very early (pre-revenue as of launch)',
  ],

  designTeam: {
    teamSize: 'None (2-person founding team, engineering only)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Alert triage logic: when to auto-fix vs. escalate to human',
        'Confidence scoring UI for AI-generated root cause analysis',
        'PR review flow: surfacing AI evidence for engineers to verify',
      ],
    },
    evaluation: {
      level: 'medium',
      tasks: [
        'Triage accuracy metrics (false positive rate, resolution rate)',
        'Human feedback loop: thumbs up/down on AI-generated fixes',
        'Alert noise reduction measurement',
      ],
    },
    interface: {
      level: 'medium',
      tasks: [
        'Onboarding: Sentry/Datadog/Grafana integration wizard',
        'Alert dashboard: real-time triage status',
        'PR review interface with AI evidence panel',
      ],
    },
  },
  productStage: '0→1',

  targetAudiences: {
    primary: 'On-call engineers at engineering-led companies using Sentry/Datadog',
    secondary: 'Engineering managers wanting to reduce incident response time',
  },
  userProblems: [
    'Alert fatigue: too many noisy alerts to distinguish signal from noise',
    'Root cause investigation takes hours of manual log/trace/code spelunking',
    'On-call rotation burns out engineers on routine incidents',
    'Fixes require context spread across monitoring tools, codebase, and history',
  ],

  designerLinks: [],
  openRoles: [],
  cultureInsights: [],

  tracking: {
    status: 'watching',
    fitScore: 4,
    whyJoin: [
      'First designer = massive leverage and ownership',
      'Genuinely novel AI product with hard trust/UX challenges',
      'YC backing gives resources and network',
    ],
    whyNot: [
      '2-person engineering team — no design culture established yet',
      'Developer infra tool = very low visual surface area',
      'Pre-revenue and very early; high risk',
      'Trust design challenge may be solved by engineering, not design',
    ],
    nextActions: [
      'Monitor for Series A announcement',
      'Watch for product designer job posting',
    ],
  },

  lastUpdated: '2026-04-27T00:00:00',
  sources: [
    { title: 'Sonarly YC Profile', url: 'https://www.ycombinator.com/companies/sonarly' },
    { title: 'Launch HN: Sonarly (YC W26)', url: 'https://news.ycombinator.com/item?id=47049776' },
    { title: 'Sonarly Website', url: 'https://sonarly.com/' },
    { title: 'Sonarly Launch YC', url: 'https://www.ycombinator.com/launches/PPa-sonarly-the-ai-engineer-for-production' },
    { title: 'Dimittri Choudhury LinkedIn', url: 'https://www.linkedin.com/in/dimittrichoudhury/' },
    { title: 'Alexandre Klobb LinkedIn', url: 'https://www.linkedin.com/in/alexandre-klobb-09bb40225/' },
    { title: 'Tracxn Sonarly Profile', url: 'https://tracxn.com/d/companies/sonarly/__-n7CAcj6KUx6wCEN8nkTx8u9uGNJGDolRE9H1fh4tdg' },
  ],
};
