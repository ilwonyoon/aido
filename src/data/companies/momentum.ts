import { Company } from '../types';

export const momentum: Company = {
  id: 'momentum',
  name: 'Momentum',
  description:
    'AI revenue orchestration platform that captures signals from customer interactions, automates CRM updates, and routes insights via Slack.',
  website: 'https://www.momentum.io',
  headquarters: 'San Francisco, CA',
  remote: 'Yes',

    // OG Image
    ogImage: '/og-images/momentum-og.webp',

  // Multi-dimensional Tags
  aiTypes: ['conversation-ai', 'automation'],
  markets: ['b2b', 'enterprise'],
  category: 'sales-marketing' as const,
  industries: ['sales-marketing'],

  // Business
  stage: 'Series A',
  valuation: 'Not publicly disclosed',
  totalFunding: '$18M',
  fundingHistory: [
    {
      stage: 'Seed',
      amount: '$5M',
      date: '2021-01',
      leadInvestors: ['Basis Set Ventures', 'Leadout Capital'],
    },
    {
      stage: 'Series A',
      amount: '$13M',
      date: '2024-07',
      leadInvestors: ['FirstMark Capital', 'Stage 2 Capital'],
    },
  ],
  revenue: 'Not publicly disclosed',
  growth: 'Not publicly disclosed',
  runway: 'Not publicly disclosed',
  customers: '1Password, Ramp, zScaler, Postman, Alation, Demandbase',

  // Growth & Potential
  growthMetrics: {
    stage: 'early-growth',
    revenueGrowth: 'Not publicly disclosed',
    signals: [
      '$13M Series A led by FirstMark Capital (Jul 2024)',
      'Notable customers: Ramp, 1Password, zScaler',
      'Expanding from call intelligence to full revenue orchestration',
    ],
    tam: '$30B+ (revenue intelligence and sales automation)',
    ceiling: 'Early innings: shifting from analytics to agentic execution in revenue workflows.',
    tailwinds: [
      'AI agents replacing manual CRM data entry',
      'Slack-native workflows align with modern GTM teams',
      'Revenue teams demand real-time signal routing',
    ],
    headwinds: [
      'Gong dominates conversation intelligence market',
      'Salesforce building native AI features',
      'Enterprise sales cycles are long',
    ],
    moatType: 'data-flywheel',
    moatStrength: 'Moderate: more customer calls processed = better signal extraction.',
  },

  // Competition
  competitors: [
    {
      name: 'Gong',
      description: 'Revenue intelligence platform with conversation analytics.',
      whyTheyWin: 'Market leader with massive enterprise adoption and data scale.',
    },
    {
      name: 'Clari',
      description: 'Revenue platform focused on forecast accuracy and pipeline management.',
      whyTheyWin: 'Deep Salesforce integration and forecasting focus.',
    },
    {
      name: 'Salesloft',
      description: 'Sales engagement and workflow automation platform.',
      whyTheyWin: 'Broader sales engagement suite with established customer base.',
    },
  ],
  marketPosition: 'AI-native execution layer for revenue teams — goes beyond analytics to automate CRM and Slack workflows.',
  moat: [
    'Slack-native workflow automation (unique in category)',
    'Agentic AI that acts on signals, not just reports them',
    'Deep Salesforce integration for automated field updates',
  ],
  vsGiants: 'Differentiates from Gong/Clari by focusing on execution (auto CRM updates, Slack routing) rather than retrospective analytics.',

  // AI-Native Level
  aiNativeLevel: 'B',
  aiNativeLevelDescription:
    'AI-Core: AI powers the entire value prop — call intelligence, signal extraction, CRM automation, and agentic execution. Revenue workflow category existed before AI, but Momentum reimagines it with AI agents.',
  aiDesignChallenges: [
    'Designing trust in autonomous CRM field updates',
    'Slack-native UX for AI-generated insights and alerts',
    'Agentic workflow configuration for non-technical sales ops',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Santiago Suarez Ordoñez',
      role: 'CEO & Co-founder',
      background: 'Previously founded Blameless (SRE platform). Met co-founders at Sauce Labs.',
    },
    {
      name: 'Moiz Virani',
      role: 'CTO & Co-founder',
      background: 'Founding engineer at Blameless. Previously at Sauce Labs.',
    },
    {
      name: 'Ashley Wilson',
      role: 'COO & Co-founder',
      background: 'Operations leader. Previously at Sauce Labs.',
    },
  ],
  whyBuilding:
    'Revenue teams waste hours on manual CRM updates and context-switching. Momentum automates the busywork so reps focus on selling.',
  beliefs: [
    'AI should execute, not just analyze',
    'Slack is where revenue teams actually work',
    'CRM data quality is solvable with automation',
  ],
  greenFlags: [
    'Strong enterprise customers (Ramp, 1Password, zScaler)',
    'FirstMark Capital backing (investor in Discord, Shopify)',
    'Clear differentiation: execution vs analytics',
  ],
  redFlags: [
    'Gong is a dominant incumbent with 10x+ funding',
    'Salesforce building native AI features could commoditize',
    'Small team competing in enterprise market',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: '~1-2 (small startup, no design roles open)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'AI agent configuration for CRM automation rules',
        'Signal routing logic and Slack workflow design',
        'MEDDIC autopilot qualification frameworks',
      ],
    },
    evaluation: {
      level: 'medium',
      tasks: [
        'AI signal accuracy and confidence scoring',
        'CRM data quality metrics dashboards',
        'Coaching agent effectiveness measurement',
      ],
    },
    interface: {
      level: 'medium',
      tasks: [
        'Slack-native notification and action UX',
        'Deal execution dashboard design',
        'AI insights reporting for RevOps',
      ],
    },
  },
  productStage: '1→10',

  // Product & User Context
  targetAudiences: {
    primary: 'Revenue operations and sales teams using Salesforce + Slack',
    secondary: 'Customer success teams monitoring churn signals',
  },
  userProblems: [
    'Sales reps spend 1+ hour/day on CRM data entry',
    'Critical deal signals get lost across calls, emails, and Slack',
    'Revenue leaders lack real-time pipeline visibility',
    'Coaching happens too late — after deals are lost',
  ],

  // Designer Links
  designerLinks: [],

  // Open Roles
  openRoles: [],

  // Culture Insights
  cultureInsights: [
    {
      source: 'company',
      sentiment: 'positive',
      content: 'Team positioning emphasizes shipping agentic revenue workflows that execute inside existing Salesforce and Slack processes.',
      url: 'https://www.momentum.io/blog/announcing-our-13m-series-a-led-by-firstmark-capital-and-stage-2-capital',
    },
    {
      source: 'careers',
      sentiment: 'neutral',
      content: 'Hiring footprint across GTM and engineering indicates a build-heavy, cross-functional operating culture typical of Series A execution.',
      url: 'https://jobs.ashbyhq.com/momentum.io',
    },
  ],

  // My Tracking
  tracking: {
    status: 'watching',
    fitScore: 5,
    whyJoin: [
      'Level B AI-Core: agentic execution is compelling design space',
      'Slack-native UX is unique and interesting design challenge',
      'Strong enterprise customers for a Series A startup',
    ],
    whyNot: [
      'No open design roles currently',
      'Competing against Gong with much less funding',
      'Sales tooling may not align with personal design interests',
    ],
    nextActions: [
      'Monitor careers page for design openings',
      'Track product evolution toward agentic features',
    ],
  },

  // Meta
  lastUpdated: '2026-02-17T22:00:00',
  sources: [
    { title: 'Momentum - Official Website', url: 'https://www.momentum.io' },
    { title: 'Momentum Series A Announcement', url: 'https://www.momentum.io/blog/announcing-our-13m-series-a-led-by-firstmark-capital-and-stage-2-capital' },
    { title: 'SiliconANGLE - Momentum raises $13M', url: 'https://siliconangle.com/2024/07/23/momentum-raises-13m-enhance-ai-driven-customer-intelligence-platform/' },
    { title: 'Momentum Careers - no Product Design roles found', url: 'https://jobs.ashbyhq.com/momentum.io' },
    { title: 'Momentum Crunchbase Profile', url: 'https://www.crunchbase.com/organization/momentum-io' },
  ],
};
