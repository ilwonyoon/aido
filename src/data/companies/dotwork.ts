import { Company } from '../types';

export const dotwork: Company = {
  id: 'dotwork',
  name: 'Dotwork',
  description: 'AI-native strategy and portfolio platform that connects goals, work, finance, and outcomes so leaders can align and steer with confidence across product-led enterprises.',
  website: 'https://dotwork.com',
  headquarters: 'Georgetown, TX',
  region: 'other-us' as const,
  remote: 'Hybrid',

    // OG Image
    ogImage: '/og-images/dotwork-og.webp',
  aiTypes: ['data-analysis', 'automation'],
  markets: ['enterprise', 'b2b'],
  category: 'enterprise-ops' as const,
  industries: ['productivity'],
  stage: 'Series A',
  normalizedStage: 'series-a' as const,
  valuation: 'Not publicly disclosed',
  totalFunding: '$12M',
  fundingHistory: [
    {
      stage: 'Series A',
      amount: '$12M',
      date: '2023-11',
      leadInvestors: [],
    },
  ],
  revenue: '~$990K (2025)',
  growth: 'Early-stage',
  customers: 'Fortune 500 enterprises',
  competitors: [
    {
      name: 'Jira Align (Atlassian)',
      description: 'Enterprise agile planning tool connecting strategy to execution',
      whyTheyWin: 'Massive installed base within Atlassian ecosystem and deep Jira integration',
    },
    {
      name: 'Planview',
      description: 'Strategic portfolio management and work management platform',
      whyTheyWin: 'Decades of enterprise SPM experience and broad product suite',
    },
    {
      name: 'ServiceNow SPM',
      description: 'Strategic portfolio management on the ServiceNow AI Platform',
      whyTheyWin: 'Built into existing ServiceNow enterprise workflows with native AI',
    },
  ],
  marketPosition: 'AI-native challenger in strategic portfolio management for product-led orgs',
  moat: [
    'Founder sold AgileCraft (now Jira Align) to Atlassian for $166M — deep domain expertise',
    'AI-native architecture: RAG querying, generative UI, automated relationships',
    'SOC 2 + AICPA certified — enterprise trust from day one',
  ],
  vsGiants: 'Unlike Atlassian Jira Align (which Dotwork founder created), Dotwork is built AI-native from scratch rather than bolting AI onto legacy architecture.',
  aiNativeLevel: 'B',
  aiNativeLevelDescription: 'AI is the core differentiator: native RAG querying, generative UI, decision intelligence, and organizational memory power the platform. The product could function without AI but would lose its primary value proposition.',
  aiDesignChallenges: [
    'Decision intelligence UX: surfacing actionable insights from noisy cross-tool data',
    'Generative UI: designing AI-composed interfaces that feel coherent and trustworthy',
    'Organizational memory: visualizing historical trends and AI-derived pattern recognition',
  ],
  founders: [
    {
      name: 'Steve Elliott',
      role: 'Founder & CEO',
      background: 'Founded AgileCraft, sold to Atlassian for $166M in 2019. Former Head of Product at Atlassian.',
    },
    {
      name: 'Kyle Byrd',
      role: 'Co-Founder, Head of Platform & Design',
      background: 'Former AgileCraft leader who helped lead the platform through its Atlassian acquisition.',
    },
  ],
  whyBuilding: 'After selling AgileCraft to Atlassian, Steve Elliott saw that strategy-to-execution alignment remained broken — legacy tools lacked AI-native intelligence to connect the dots.',
  beliefs: [
    'Strategy and execution must be connected in real-time, not quarterly reviews',
    'AI should surface signals and context, not just automate tasks',
    'Enterprise tools should be programmable and extensible',
  ],
  greenFlags: [
    'Founder has proven exit ($166M acquisition by Atlassian)',
    'Deep domain expertise — literally built Jira Align',
    'SOC 2 certified early = serious enterprise focus',
    'Jim Crane (Astros owner, Crane Capital) as investor',
  ],
  redFlags: [
    'Small team (~9 people) competing against Atlassian, Planview, ServiceNow',
    'Low revenue (~$990K) for a Series A company',
    'Georgetown, TX HQ may limit design talent pool',
  ],
  designTeam: {
    designHead: 'Kyle Byrd (Co-Founder, Head of Platform & Design)',
    teamSize: '~1-2 (small team of 9 total, co-founder leads design)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Decision intelligence workflows — structuring unstructured data for leaders',
        'Automated relationship mapping between strategy, work, and outcomes',
        'AI-driven portfolio prioritization and trade-off logic',
      ],
    },
    evaluation: {
      level: 'medium',
      tasks: [
        'Quality metrics for AI-surfaced insights and recommendations',
        'Organizational memory accuracy and relevance scoring',
      ],
    },
    interface: {
      level: 'high',
      tasks: [
        'Generative UI — AI-composed dashboards and views',
        'Strategy-to-execution visualization across OKRs, portfolios, and work',
        'No-code/low-code configuration interfaces',
      ],
    },
  },
  productStage: '1→10',
  targetAudiences: {
    primary: 'Enterprise product and strategy leaders managing portfolio alignment',
    secondary: 'Agile coaches and PMO teams coordinating cross-team execution',
  },
  userProblems: [
    'Strategy disconnected from execution — quarterly reviews miss real-time shifts',
    'Data siloed across Jira, Slack, docs — no unified signal for decision-making',
    'Portfolio prioritization relies on gut feel, not AI-driven intelligence',
    'Legacy SPM tools are rigid and not built for product-led organizations',
  ],
  designerLinks: [],
  openRoles: [],
  cultureInsights: [
    {
      source: 'linkedin',
      sentiment: 'positive',
      content: 'Small, tight-knit team of 9 with deep enterprise SaaS experience from AgileCraft/Atlassian era. Founder-led with strong product vision.',
      url: 'https://www.linkedin.com/company/dotwork/',
    },
    {
      source: 'careers',
      sentiment: 'neutral',
      content: 'Early-stage operating cadence centers on partner/channel expansion alongside AI-native product delivery.',
      url: 'https://www.dotwork.com/post/introducing-dotwork-partners',
    },
  ],
  growthMetrics: {
    stage: 'early-growth',
    revenueGrowth: '~$990K ARR (2025)',
    signals: [
      '$12M Series A from Crane Capital Group',
      'SOC 2 + AICPA certifications achieved early',
      'Official partner program launched Sep 2025',
    ],
    tam: '$15B+ (strategic portfolio management market)',
    ceiling: 'Early innings: AI-native SPM replacing legacy tools like Planview, Jira Align',
    tailwinds: [
      'Enterprise AI adoption accelerating',
      'Product-led orgs need modern strategy tools',
      'Legacy SPM tools failing to keep pace with agile workflows',
    ],
    headwinds: [
      'Atlassian (Jira Align) has massive distribution advantage',
      'Low revenue for Series A — needs to prove product-market fit',
      'Small team limits go-to-market speed',
    ],
    moatType: 'switching-costs',
    moatStrength: 'Moderate: once enterprise connects strategy/work data, switching cost is high',
  },
  tracking: {
    status: 'watching',
    fitScore: 4,
    whyJoin: [
      'Co-founder leads design — design has a seat at the table',
      'Level B AI-native with interesting generative UI challenges',
      'Small team = high impact and ownership',
    ],
    whyNot: [
      'Very small team (~9) with low revenue — high risk',
      'Georgetown, TX HQ limits local design community',
      'No open Product Design roles currently',
    ],
    nextActions: [
      'Monitor for Product Designer openings',
      'Track revenue growth and enterprise traction',
    ],
  },
  lastUpdated: '2026-02-17',
  sources: [
    { title: 'Dotwork Official Website', url: 'https://dotwork.com' },
    { title: 'Dotwork About Page', url: 'https://www.dotwork.com/about' },
    { title: 'Dotwork Series A Announcement', url: 'https://www.dotwork.com/post/dotwork-raises-12m-series-a-launches-early-access-to-strategic-alignment-platform' },
    { title: 'Dotwork Careers — no Product Design roles found', url: 'https://www.dotwork.com/apply' },
    { title: 'Dotwork — Crunchbase', url: 'https://www.crunchbase.com/organization/dotwork' },
    { title: 'Dotwork LinkedIn Company Profile', url: 'https://www.linkedin.com/company/dotwork/' },
  ],
};
