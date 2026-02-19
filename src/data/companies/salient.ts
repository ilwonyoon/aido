import { Company } from '../types';

export const salient: Company = {
  id: 'salient',
  name: 'Salient',
  description: 'AI workflow automation platform for auto lenders, automating collections, payment processing, and loan servicing with compliance-first AI agents.',
  website: 'https://trysalient.com',
  headquarters: 'San Francisco, CA',
  region: 'sf-bay-area' as const,
  remote: 'No',
  ogImage: '/og-images/salient-og.webp',

  aiTypes: ['automation', 'conversation-ai'],
  markets: ['enterprise'],
  category: 'vertical-saas' as const,
  industries: ['fintech'],

  stage: 'Series A',

  normalizedStage: 'series-a' as const,
  valuation: '~$500M (Dec 2025)',
  totalFunding: '~$70M',
  fundingHistory: [
    {
      stage: 'Seed',
      amount: '$500K',
      date: '2023-01',
      leadInvestors: [],
    },
    {
      stage: 'Series A',
      amount: '$60M',
      date: '2025-06',
      valuation: '$350M',
      leadInvestors: ['Andreessen Horowitz'],
    },
  ],
  revenue: '$25M+ ARR (Dec 2025)',
  growth: '~2x in 6 months ($14M → $25M ARR)',
  runway: '24+ months (capital-efficient, $70M raised)',
  customers: '5+ of top 10 US auto lenders',

  competitors: [
    {
      name: 'Informed.IQ',
      description: 'AI document intelligence for auto loan boarding and fraud reduction',
      whyTheyWin: 'Focused on document verification, strong in underwriting automation',
    },
    {
      name: 'TrueAccord',
      description: 'AI-powered debt collection and recovery platform',
      whyTheyWin: 'Established brand in digital-first collections with multi-channel outreach',
    },
    {
      name: 'Ocrolus',
      description: 'AI-powered document capture and analysis for lending decisions',
      whyTheyWin: 'Broader financial document coverage across mortgage, SMB, and consumer lending',
    },
  ],
  marketPosition: 'Leading AI-native loan servicing platform for auto lenders',
  moat: [
    '100% customer retention — zero churn since founding',
    '30x more compliance than human agents (UDAAP monitoring)',
    'Deep auto lending domain expertise (Westlake, Exeter, CPS, ACA)',
    '$1B+ in processed transactions building data flywheel',
  ],
  vsGiants: 'Legacy loan servicers (Black Knight/ICE, Fiserv) rely on manual processes. Salient replaces entire servicing workflows with AI agents that handle voice, text, email, and chat — achieving 50-60% cost reduction while exceeding compliance standards.',

  aiNativeLevel: 'B',
  aiNativeLevelDescription: 'AI-Core: AI agents are the core product differentiator, automating loan servicing workflows that were previously manual. Not a foundation model builder, but AI is central to every customer interaction.',
  aiDesignChallenges: [
    'Compliance UX: surfacing UDAAP risk flags in real-time for regulated workflows',
    'AI agent transparency: showing lenders what AI said to borrowers and why',
    'Multi-channel orchestration: consistent borrower experience across voice, text, email, chat',
  ],

  founders: [
    {
      name: 'Ari Malik',
      role: 'CEO',
      background: 'Ex-Tesla sales finance, ex-DST Global VC, Goldman Sachs, Temasek. Columbia CS + Philosophy.',
    },
    {
      name: 'Mukund Tibrewala',
      role: 'CTO',
      background: 'Ex-Airtable, ex-Dropbox SWE. Carnegie Mellon CS + Robotics.',
    },
  ],
  whyBuilding: 'Malik saw escalating servicing costs at Tesla and realized auto lending was ripe for AI automation. Combined finance domain expertise with Tibrewala\'s engineering background to rebuild loan servicing from scratch.',
  beliefs: [
    'Rabid customer obsession — CEO gives personal cell to every client',
    'Compliance-first AI is a competitive moat in regulated industries',
    'Capital efficiency over hype-driven growth',
    'AI should replace entire workflows, not just augment individual tasks',
  ],
  greenFlags: [
    'Zero customer churn — 100% pilot conversion rate',
    'a16z led Series A at $350M valuation after just 18 months',
    'YC W23 + strong investor syndicate (Matrix, General Catalyst)',
    'Revenue nearly doubled in 6 months ($14M → $25M ARR)',
  ],
  redFlags: [
    'Narrow vertical focus — auto lending only (expanding planned)',
    'No Product Designer on team yet — engineering-heavy culture',
    'Small team (40 people) in heavily regulated industry',
  ],

  designTeam: {
    teamSize: '~0 (no design roles listed; engineering-led product)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'AI agent conversation flow design for collections and payments',
        'Compliance rule logic and UDAAP violation flagging workflows',
        'Multi-channel orchestration (voice, text, email, chat)',
      ],
    },
    evaluation: {
      level: 'medium',
      tasks: [
        'AI agent performance monitoring dashboards',
        'Compliance audit trail and reporting',
        'Customer satisfaction and resolution rate tracking',
      ],
    },
    interface: {
      level: 'medium',
      tasks: [
        'Lender dashboard for AI agent oversight',
        'Borrower-facing payment and servicing interfaces',
        'Analytics and reporting for loan portfolio health',
      ],
    },
  },
  productStage: '1→10',

  targetAudiences: {
    primary: 'Auto lenders and loan servicers managing large borrower portfolios',
    secondary: 'Consumer lending institutions expanding beyond auto (mortgage, personal loans)',
  },
  userProblems: [
    'Loan servicing relies on expensive manual call center labor with high error rates',
    'Compliance monitoring across thousands of borrower interactions is inconsistent',
    'Legacy servicing systems cannot scale without proportional headcount increases',
    'Collections processes are slow, resulting in higher delinquency and charge-off rates',
  ],

  designerLinks: [],
  openRoles: [],
  cultureInsights: [
    {
      source: 'ycombinator',
      sentiment: 'positive',
      content: 'YC W23 batch — founders are high-school friends combining finance + engineering. "Rabid customer obsession" culture with engineers embedded at client sites.',
      url: 'https://www.ycombinator.com/companies/salient',
    },
    {
      source: 'techcrunch',
      sentiment: 'positive',
      content: 'Won JPMorgan Chase Hall of Innovation Award. Capital-efficient approach — focused on sustainable growth over hype-driven expansion.',
      url: 'https://www.trysalient.com/resources/jpmc-hall-of-innovation',
    },
  ],

  growthMetrics: {
    stage: 'hypergrowth',
    revenueGrowth: '~2x in 6 months ($14M → $25M ARR)',
    signals: [
      '$500M valuation in under 2 years from founding',
      '100% pilot-to-paid conversion, zero churn',
      'Expanding beyond auto lending into broader consumer finance',
      'Won JPMorgan Chase Hall of Innovation Award',
    ],
    tam: '$50B+ (US consumer loan servicing market)',
    ceiling: 'Early innings: auto lending first, expanding to mortgage, personal loans, and broader financial services',
    tailwinds: [
      'Rising servicing costs pushing lenders to automation',
      'Regulatory pressure favoring AI compliance monitoring',
      'Consumer lending volume growing with household debt at record levels',
    ],
    headwinds: [
      'Regulatory risk — AI in financial services under increasing scrutiny',
      'Enterprise sales cycles in banking are long',
      'Incumbents (ICE/Black Knight, Fiserv) may build competing AI features',
    ],
    moatType: 'vertical-specialization',
    moatStrength: 'Strong: deep auto lending domain expertise + $1B+ transaction data + 100% retention creates high switching costs',
  },

  tracking: {
    status: 'watching',
    fitScore: 5,
    whyJoin: [
      'Level B AI-Core — AI agents are the entire product',
      'Hypergrowth: $0 → $25M ARR in 2 years, $500M valuation',
      'a16z + YC backing with strong investor syndicate',
      'Greenfield design opportunity — no design team yet',
    ],
    whyNot: [
      'No Product Designer roles open currently',
      'Narrow fintech vertical — less creative design work',
      'Engineering-heavy culture, design may not be prioritized',
    ],
    nextActions: [
      'Monitor for Product Designer job postings on YC/a16z boards',
      'Track expansion beyond auto lending vertical',
    ],
  },

  lastUpdated: '2026-02-14',
  sources: [
    {
      title: 'How Salient grew ARR to $25M in two years — Fortune',
      url: 'https://fortune.com/2025/12/18/salients-quiet-ai-boom-how-this-two-year-old-startup-is-building-a-company-to-survive-the-bubble-burst/',
    },
    {
      title: 'Investing in Salient — a16z',
      url: 'https://a16z.com/announcement/investing-in-salient/',
    },
    {
      title: 'Salient — Y Combinator',
      url: 'https://www.ycombinator.com/companies/salient',
    },
    {
      title: 'Salient YC Jobs — no Product Design roles found',
      url: 'https://www.ycombinator.com/companies/salient/jobs',
    },
    {
      title: 'Salient wins JPMorgan Chase Hall of Innovation',
      url: 'https://www.trysalient.com/resources/jpmc-hall-of-innovation',
    },
  ],
};
