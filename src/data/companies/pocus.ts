import { Company } from '../types';

export const pocus: Company = {
  id: 'pocus',
  name: 'Pocus',
  description: 'AI-powered revenue data platform that helps GTM teams prioritize leads and automate sales workflows using product usage signals.',
  website: 'https://www.pocus.com',
  headquarters: 'San Francisco, CA',
  remote: 'Yes',

  ogImage: '/og-images/pocus-og.webp',

  category: 'sales-marketing' as const,
  aiTypes: ['data-analysis', 'automation'],
  markets: ['b2b', 'enterprise'],
  industries: ['sales-marketing'],

  stage: 'Series B',
  valuation: 'Unknown',
  totalFunding: '$43M',
  fundingHistory: [
    { stage: 'Seed', amount: 'Undisclosed', date: '2021-06', leadInvestors: ['First Round Capital'] },
    { stage: 'Series A', amount: '$23M', date: '2022-06', leadInvestors: ['Coatue'] },
    { stage: 'Series B', amount: '$20M', date: '2022-12', leadInvestors: [] },
  ],
  revenue: '~$6M ARR (2024)',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'Miro, Loom, Asana, Canva, ClickUp',

  growthMetrics: {
    stage: 'early-growth',
    revenueGrowth: 'Unknown',
    userGrowth: 'Unknown',
    signals: [
      '$43M total funding across 3 rounds',
      'Marquee PLG customers: Miro, Loom, Asana, Canva',
      'Pivoted from PLS to broader Revenue Data Platform (2023)',
    ],
    tam: '$15B+ (revenue intelligence and sales tech market)',
    marketShare: '<1% of TAM',
    ceiling: 'Mid-innings: PLG sales motion growing but competitive landscape intensifying',
    tailwinds: [
      'PLG adoption accelerating across B2B SaaS',
      'Sales teams demand data-driven prioritization',
      'AI-powered GTM becoming table stakes',
    ],
    headwinds: [
      'Crowded revenue intelligence market (Koala, Warmly, MadKudu)',
      'Low revenue relative to funding raised',
      'Potential team downsizing signals',
    ],
    moatType: 'switching-costs',
    moatStrength: 'Moderate: deep CRM/product data integrations create lock-in once playbooks are built',
  },

  competitors: [
    {
      name: 'Koala',
      description: 'Product usage + intent signal platform for PLG companies.',
      whyTheyWin: 'Simpler UX and broader intent signals beyond product data.',
    },
    {
      name: 'Warmly',
      description: 'Signal-based revenue orchestration with website visitor identification.',
      whyTheyWin: 'Combines website deanonymization with real-time signal capture.',
    },
    {
      name: 'MadKudu',
      description: 'Predictive lead scoring and product-qualified lead identification.',
      whyTheyWin: 'Deeper ML-based scoring models and longer market presence.',
    },
  ],
  marketPosition: 'Category creator of Product-Led Sales, now Revenue Data Platform',
  moat: [
    'Category creation and thought leadership in PLS space',
    'Deep integrations forming Revenue Data Graph across CRM and product analytics',
    'Switching costs from custom playbooks and scoring models',
  ],
  vsGiants: 'Focused PLG-specific signals vs broad CRM giants like Salesforce and HubSpot.',

  aiNativeLevel: 'B',
  aiNativeLevelDescription: 'AI is core differentiator powering lead scoring, playbook recommendations, and predictive signals — but the underlying value is data aggregation and GTM workflow.',
  aiDesignChallenges: [
    'Transparent AI scoring: showing why a lead is prioritized',
    'Workflow automation UX: balancing automation with rep control',
    'Data trust: ensuring reps trust AI-generated recommendations',
  ],

  founders: [
    {
      name: 'Alexa Grabell',
      role: 'CEO & Co-founder',
      background: 'Stanford MBA. Previously at Goldman Sachs, KPMG, and Dataminr (sales ops). Category evangelist for Product-Led Sales.',
    },
    {
      name: 'Isaac Pohl-Zaretsky',
      role: 'CTO & Co-founder',
      background: 'Stanford CS. Serial entrepreneur (Wynncraft, CrowdCall). Built the Revenue Data Graph architecture.',
    },
  ],
  whyBuilding: 'Met at Stanford and saw PLG companies struggling to convert free users into paid customers without engineering-dependent data pipelines.',
  beliefs: [
    'Sales teams should self-serve data without engineering dependency',
    'Product usage signals are the best predictor of buying intent',
    'AI should augment reps, not replace them',
  ],
  greenFlags: [
    'Category creator with strong thought leadership and brand',
    'Marquee customer logos (Miro, Loom, Asana, Canva)',
    'Stanford-pedigreed founding team with relevant domain experience',
  ],
  redFlags: [
    'Low revenue (~$6M) relative to $43M raised — capital efficiency concern',
    'Potential significant team downsizing in late 2025',
    'Crowded competitive landscape with well-funded alternatives',
  ],

  designTeam: {
    teamSize: 'Unknown (no design roles listed; likely product-engineer model)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'PQL scoring model configuration and tuning UX',
        'Workflow automation trigger/action design',
        'Revenue Data Graph visualization and exploration',
      ],
    },
    evaluation: {
      level: 'medium',
      tasks: [
        'Playbook health dashboards and performance metrics',
        'AI recommendation accuracy feedback loops',
        'Lead conversion tracking and attribution',
      ],
    },
    interface: {
      level: 'high',
      tasks: [
        'Data-dense sales rep workspace with prioritized leads',
        'No-code scoring model builder',
        'CRM and Slack integration surfaces',
      ],
    },
  },
  productStage: '1→10',

  targetAudiences: {
    primary: 'B2B SaaS sales teams at PLG companies converting free users to paid',
    secondary: 'Revenue operations and GTM leaders needing pipeline visibility',
  },
  userProblems: [
    'Sales reps waste 10+ hours/week manually researching which free users to prioritize',
    'PQL identification is engineering-dependent and slow to iterate',
    'No unified view of product usage signals alongside CRM data',
    'GTM playbooks are static and cannot adapt to real-time signals',
  ],

  designerLinks: [],
  openRoles: [],

  cultureInsights: [
    {
      source: 'glassdoor',
      sentiment: 'positive',
      rating: 4.4,
      content: 'Collaborative team culture with strong learning opportunities. Leadership supports growth beyond job description.',
      url: 'https://www.glassdoor.com/Overview/Working-at-Pocus-EI_IE7292610.11,16.htm',
    },
    {
      source: 'glassdoor',
      sentiment: 'negative',
      content: 'Early-stage ambiguity with high-pace expectations. Some reviews cite unrealistic goals and inexperienced leadership.',
      url: 'https://www.glassdoor.com/Overview/Working-at-Pocus-EI_IE7292610.11,16.htm',
    },
  ],

  tracking: {
    status: 'watching',
    fitScore: 4,
    whyJoin: [
      'Category-defining product in PLG sales space',
      'Level B AI-native with rich data visualization challenges',
      'Small team = high impact per designer',
    ],
    whyNot: [
      'No design roles currently open',
      'Capital efficiency concerns ($6M revenue on $43M funding)',
      'Possible team downsizing raises sustainability questions',
    ],
    nextActions: [
      'Monitor for design role openings',
      'Track revenue growth and team stability signals',
    ],
  },

  lastUpdated: '2026-02-17',
  sources: [
    { title: 'Pocus Official Website', url: 'https://www.pocus.com' },
    { title: 'Pocus - Crunchbase', url: 'https://www.crunchbase.com/organization/pocus' },
    { title: 'Pocus $23M Series A Announcement', url: 'https://www.pocus.com/blog/pocus-raises-funding-from-coatue-for-product-led-sales-platform' },
    { title: 'Pocus Careers (Ashby) - no Product Design roles found', url: 'https://jobs.ashbyhq.com/pocus' },
    { title: 'Glassdoor - Working at Pocus (4.4/5)', url: 'https://www.glassdoor.com/Overview/Working-at-Pocus-EI_IE7292610.11,16.htm' },
  ],
};
