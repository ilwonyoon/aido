import { Company } from '../types';

export const delve: Company = {
  id: 'delve',
  name: 'Delve',
  description:
    'AI-native compliance automation platform that uses agentic AI to automate evidence collection, monitoring, and audit readiness for SOC 2, HIPAA, ISO 27001, GDPR, PCI DSS, and custom frameworks.',
  website: 'https://delve.co/',
  screenshot: '/screenshots/delve-screenshot.png',
  headquarters: 'San Francisco, CA',
  remote: 'No',

  // OG Image
  ogImage: '/og-images/delve-og.webp',

  // Multi-dimensional Tags
  aiTypes: ['foundation-model'],
  markets: ['b2b'],
  category: 'vertical-saas' as const,

  industries: ['legal', 'security'],

  // Business
  stage: 'Series A',
  valuation: '$300M (Jul 2025)',
  totalFunding: '$35.3M',
  fundingHistory: [
    { stage: 'Seed', amount: '$3.3M', date: '2024-01' },
    { stage: 'Series A', amount: '$32M', date: '2025-07' },
  ],
  revenue: '~$2.6M ARR (mid-2025, per Latka)',
  growth: 'Doubled revenue last quarter; 100 to 500+ customers in ~6 months',
  runway: 'Profitable (self-reported)',
  customers: '500+ companies including Lovable, Bland, Wispr Flow, HockeyStack, 11x, Remi, Cluely. Helped customers close deals with Walmart, Chase, OpenAI, Microsoft, Hertz.',

  // Growth & Potential
  growthMetrics: {
    stage: 'early-growth',
    revenueGrowth: 'Doubled revenue in most recent quarter',
    signals: [
      '$300M valuation at Series A (10x jump from seed)',
      '500+ customers, up from 100 in Jan 2025',
      'Already profitable',
      'Y Combinator W24 batch',
      'Backed by Insight Partners, General Catalyst, Y Combinator, FundersClub',
      'Notable customers: Lovable, 11x, Bland, Wispr Flow, Cluely',
      'Creative GTM: 10,000 donuts, airplane banners, $6K doormats generating $500K pipeline',
    ],
    tam: 'Global compliance automation market (multi-billion, growing with AI regulation)',
    marketShare: 'Early but fast-growing; positioned as fastest-growing compliance company',
    ceiling: 'Plans to expand beyond compliance into cybersecurity, risk, and internal governance. Vision to automate 1 billion hours of back-office work.',
    tailwinds: [
      'Explosive AI startup growth creating massive compliance demand',
      'Increasing regulatory scrutiny on AI systems (EU AI Act, etc.)',
      'Enterprise buyers requiring SOC 2/HIPAA before vendor deals close',
      'Compliance as revenue-enabler, not cost center',
      'AI-native approach disrupting legacy manual compliance tools',
    ],
    headwinds: [
      'Crowded compliance automation market (Vanta, Drata, Secureframe are well-funded incumbents)',
      'Vanta at $2.5B+ valuation with massive market lead',
      'Product maturity concerns: reviews cite manual cleanup, incomplete workflows',
      'Enterprise sales cycles can be long',
      'High trust bar for compliance tooling (mistakes can be costly)',
    ],
    moatType: 'vertical-specialization',
    moatStrength: 'Moderate. AI-native approach and speed-to-audit differentiate, but incumbents are adding AI too. Strong brand with AI startup community.',
  },

  // Competition
  competitors: [
    {
      name: 'Vanta',
      description: 'Leading compliance automation platform. $2.5B+ valuation, 35+ frameworks, robust integrations. Startup-friendly with clean UI.',
      whyTheyWin: 'Massive market lead, brand recognition, deep integrations, multi-framework cross-mapping at scale.',
    },
    {
      name: 'Drata',
      description: 'Technically advanced compliance platform for engineering-heavy teams. $2B+ valuation, real-time monitoring, tight CI/CD integrations.',
      whyTheyWin: 'Technical depth, engineering-first approach, large customer base.',
    },
    {
      name: 'Secureframe',
      description: 'Compliance platform emphasizing white-glove onboarding and hands-on guidance.',
      whyTheyWin: 'High-touch support model, managed setup for companies wanting help.',
    },
    {
      name: 'Sprinto',
      description: 'Multi-framework compliance platform with deep cloud/identity/HR integrations.',
      whyTheyWin: 'Strong multi-framework scaling and integration depth.',
    },
    {
      name: 'Comp AI',
      description: 'Open-source compliance alternative to Vanta, Drata, and Delve.',
      whyTheyWin: 'Free, self-hosted, open-source appeal for cost-conscious startups.',
    },
  ],
  marketPosition: 'AI-first, speed-focused compliance platform for startups. Differentiates on "compliance in days, not months" with AI agents that autonomously gather evidence. Strongest with AI startups pursuing first SOC 2.',
  moat: [
    'AI-native architecture (agents that understand company context and navigate fragmented systems)',
    'Speed-to-audit positioning (SOC 2 in days, not months)',
    'Strong brand affinity with AI startup community',
    'Bundled auditor model reduces friction',
    'Creative community-driven GTM (donuts, doormats, word-of-mouth)',
  ],
  vsGiants: 'Competes against well-funded incumbents (Vanta $2.5B+, Drata $2B+) by being AI-native rather than AI-augmented. Incumbents built on manual workflows with AI bolted on; Delve built AI-first. Risk is incumbents catching up on AI capabilities.',

  // AI-Native Level
  aiNativeLevel: 'A',
  aiNativeLevelDescription:
    'AI-Native: Core product is built on AI agents that autonomously collect evidence, scan infrastructure/code, auto-fill security questionnaires, and monitor compliance gaps in real-time. AI is not a feature; it IS the compliance workflow.',
  aiDesignChallenges: [
    'Information architecture for 10+ interconnected compliance modules',
    'Multi-step workflow design with edge cases and resumption patterns',
    'Trust and transparency in AI agent actions (what did the agent do and why)',
    'Cross-workflow dependency visualization (helping users understand next steps)',
    'Designing for both task completion and exploratory workflows',
    'Balancing automation speed with human oversight for high-stakes compliance decisions',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Karun Kaushik',
      role: 'Co-founder & CEO',
      background: 'MIT AI researcher (dropped out sophomore year, 2023). Non-traditional path: dropped out of high school, took 25 community college classes. Built AI COVID diagnostic tool (chest X-ray pneumonia detection) that scaled internationally. Age 21 at Series A.',
    },
    {
      name: 'Selin Kocalar',
      role: 'Co-founder & COO',
      background: 'MIT AI researcher (dropped out sophomore year, 2023). Published 8 research papers. Launched experiment to the International Space Station. Completed Navy SEAL bootcamp. Two-time international olympiad winner. Female co-founder.',
    },
  ],
  whyBuilding:
    'Met first week at MIT sharing same academic advisor. Built an AI medical scribe together and hit HIPAA compliance wall - realized compliance was painful manual busywork ripe for AI automation. Left MIT in 2023 to build Delve. Vision: automate 1 billion hours of back-office busywork.',
  beliefs: [
    'Compliance should be a revenue enabler, not a bottleneck',
    'AI agents should act like part of your compliance team, not just a tool',
    'Speed matters: "compliance in days, not months"',
    'Automation should eliminate screenshots, spreadsheets, and manual evidence collection',
    'The best compliance tool understands your company context',
  ],
  designPhilosophy: 'AI-native workflows that make compliance effortless. Focus on information architecture for complex, multi-module platforms with long-running user journeys.',
  greenFlags: [
    '$300M valuation at just Series A - massive investor confidence',
    'Already profitable with revenue doubling quarterly',
    '500+ customers in under a year from 100',
    'Founding Product Designer role = shape design from the ground up',
    'Y Combinator W24 + Insight Partners + General Catalyst backing',
    'Strong founder story (MIT AI researchers, 21 years old)',
    'Clear product-market fit with AI startups',
    'Interesting design challenges (IA for 10+ modules, complex workflows)',
    'Benefits: 100% medical/dental/vision, 401k match, unlimited PTO',
    'Team includes ex-Apple, Netflix, Shopify, OpenAI alumni',
  ],
  redFlags: [
    'No existing design team - would be sole designer (high ownership but also high risk)',
    'Product reviews cite manual cleanup, incomplete workflows, glitchy experiences',
    'Crowded market with much larger competitors (Vanta, Drata)',
    'Compliance domain can feel dry/unsexy',
    'On-site required in San Francisco',
    'Very early stage - 33 employees total, processes may be chaotic',
    'Glassdoor reviews mention lack of career growth opportunities and unclear leadership direction',
    '$2.6M revenue at $300M valuation = very high multiple (115x), high expectations',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: '33 total employees. No dedicated design team yet - hiring Founding Product Designer to own design. Senior Product Designer role also listed (7+ years, IA-focused).',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'AI agent workflow design (evidence collection, code scanning, questionnaire auto-fill)',
        'Multi-step compliance procedures with edge cases and resumption',
        'Cross-workflow dependency logic and surfacing',
        'Automation decision frameworks (when AI acts vs. when human reviews)',
      ],
    },
    evaluation: {
      level: 'high',
      tasks: [
        'Audit readiness dashboards and compliance scoring',
        'Real-time monitoring and gap alerting UX',
        'Evidence completeness tracking across frameworks',
        'Trust indicators for AI agent actions',
      ],
    },
    interface: {
      level: 'high',
      tasks: [
        'Information architecture for 10+ interconnected modules',
        'Navigation design for both task completion and exploratory flows',
        'Policy and evidence management interfaces',
        'Enterprise security questionnaire UX',
        'Reporting and export experiences',
      ],
    },
  },
  productStage: '1→10',

  // Product & User Context
  targetAudiences: {
    primary: 'Fast-growing AI startups pursuing first SOC 2 or HIPAA certification',
    secondary: 'Mid-market companies scaling across multiple compliance frameworks (ISO 27001, GDPR, PCI DSS)',
  },
  userProblems: [
    'Compliance takes months of manual work (screenshots, spreadsheets, evidence gathering)',
    'Evidence is scattered across dozens of tools (GitHub, AWS, Slack, HR systems)',
    'Enterprise sales blocked until compliance certifications are obtained',
    'Security questionnaires from enterprise buyers are time-consuming',
    'Maintaining continuous compliance across multiple frameworks is overwhelming',
    'Compliance gaps discovered late can delay audits and deals',
  ],

  // Designer Links
  designerLinks: [],

  // Open Roles
  openRoles: [
    {
          title: 'Founding Product Designer',
          location: 'San Francisco, CA (on-site)',
          type: 'full-time',
          url: 'https://www.ycombinator.com/companies/delve/jobs',
        },
    {
          title: 'Senior Product Designer',
          location: 'San Francisco, CA (on-site)',
          type: 'full-time',
          url: 'https://jobs.insightpartners.com/companies/delve-yc-w24-2-becfbef0-bbf1-47f4-943d-1b32a2f42d3d/jobs/63414923-senior-product-designer',
        }
  ],

  // Culture Insights
  cultureInsights: [
    { source: 'glassdoor' as const, content: 'Very nice people to work with. Everyone is knowledgeable about their craft.', sentiment: 'positive' as const, rating: 4.1 },
    { source: 'glassdoor' as const, content: 'Office culture was strong -- sense of community that made going into office worthwhile.', sentiment: 'positive' as const },
    { source: 'glassdoor' as const, content: 'No real opportunity for growth and no career support.', sentiment: 'negative' as const },
  ],

  // My Tracking
  tracking: {
    status: 'watching',
    fitScore: 7,
    whyJoin: [
      'Own design from the ground up as founding designer',
      'Complex IA challenges (10+ modules, multi-step workflows)',
      'AI-native product with interesting agent design problems',
      'Rocket-ship growth trajectory ($300M valuation, profitable)',
      'Strong founder story and investor backing',
      'Excellent benefits for a startup',
    ],
    whyNot: [
      'Sole designer = no design mentorship or peers',
      'Product maturity concerns (reviews cite glitchy experience)',
      'Crowded market with much larger competitors',
      'On-site required in SF',
      'Very high valuation multiple relative to revenue',
      'Compliance domain may feel dry',
    ],
    nextActions: [
      'Apply to Founding Product Designer or Senior Product Designer role',
      'Try the product (sign up for demo)',
      'Research who the Senior Product Designer hire will report to',
      'Monitor if they hire a Head of Design (signals design maturity)',
      'Watch for customer reviews improving (product maturity signal)',
    ],
  },

  // Meta
  lastUpdated: '2026-02-18',
  sources: [
    { title: 'Delve website', url: 'https://delve.co/' },
    { title: 'TechCrunch: 21-year-old MIT dropouts raise $32M', url: 'https://techcrunch.com/2025/07/22/21-year-old-mit-dropouts-raise-32m-at-300m-valuation-led-by-insight/' },
    { title: 'Delve Series A blog post', url: 'https://delve.co/blog/series-a' },
    { title: 'Insight Partners announcement', url: 'https://www.insightpartners.com/ideas/delve-raises-32m-series-a-to-build-ai-agents-for-compliance/' },
    { title: 'Y Combinator company profile', url: 'https://www.ycombinator.com/companies/delve' },
    { title: 'SiliconANGLE coverage', url: 'https://siliconangle.com/2025/07/22/delve-gets-32m-delve-world-agentic-ai-compliance/' },
    { title: 'TechFundingNews coverage', url: 'https://techfundingnews.com/female-mit-founders-delve-raises-32m-ai-compliance/' },
    { title: 'Today in AI deep dive', url: 'https://www.todayin-ai.com/p/delve' },
    { title: 'Senior Product Designer job listing (Insight Partners)', url: 'https://jobs.insightpartners.com/companies/delve-yc-w24-2-becfbef0-bbf1-47f4-943d-1b32a2f42d3d/jobs/63414923-senior-product-designer' },
    { title: 'Latka revenue data', url: 'https://getlatka.com/companies/delve.co' },
    { title: 'Delve vs Vanta comparison (Sprinto)', url: 'https://sprinto.com/blog/delve-vs-vanta/' },
    { title: 'Vanta vs Drata vs Delve (Vanta)', url: 'https://www.vanta.com/resources/vanta-vs-drata-vs-delve' },
    { title: 'Glassdoor reviews', url: 'https://www.glassdoor.com/Reviews/Delve-Reviews-E779127.htm' },
    { title: 'Delve careers page', url: 'https://delve.co/careers' },
    { title: 'Y Combinator jobs listing', url: 'https://www.ycombinator.com/companies/delve/jobs' },
    { title: 'PR Newswire Series A announcement', url: 'https://www.prnewswire.com/news-releases/delve-raises-32m-series-a-to-build-ai-agents-for-compliance-302510121.html' },
    { title: 'Delve pricing analysis (ComplyJet)', url: 'https://www.complyjet.com/blog/delve-pricing' },
    { title: 'SF Standard: AI founders starting younger', url: 'https://sfstandard.com/2025/02/13/founders-dropouts-ycombinator-aiboom-startups/' },
  ],
};
