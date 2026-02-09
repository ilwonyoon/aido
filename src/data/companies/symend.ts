import { Company } from '../types';

export const symend: Company = {
  id: 'symend',
  name: 'Symend',
  description:
    'Behavioral engagement platform that uses behavioral science, AI, and analytics to help enterprises personalize delinquency and collections experiences.',
  website: 'https://www.symend.com',
  headquarters: 'Calgary, AB, Canada',
  remote: 'Yes',

  // Multi-dimensional Tags
  aiTypes: ['automation', 'data-analysis'],
  markets: ['enterprise', 'b2b'],
  category: 'vertical-saas' as const,
  industries: ['fintech'],

  // Business
  stage: 'Series B',
  valuation: 'Not publicly disclosed',
  totalFunding: 'US$100M+',
  fundingHistory: [
    {
      stage: 'Series B',
      amount: '$52M',
      date: '2020-05',
      leadInvestors: ['Inovia Capital'],
    },
    {
      stage: 'Series B',
      amount: '$43M',
      date: '2021-02',
      leadInvestors: ['Inovia Capital'],
    },
  ],
  revenue: 'Not publicly disclosed',
  growth: 'Not publicly disclosed',
  runway: 'Not publicly disclosed',
  customers: 'Serving 40M+ consumers annually for large enterprises',

  // Competition
  competitors: [
    {
      name: 'Salesforce Marketing Cloud',
      description: 'Enterprise customer engagement and journey orchestration platform.',
      whyTheyWin: 'Large installed base with deep CRM integration and marketing suite breadth.',
    },
    {
      name: 'Braze',
      description: 'Customer engagement platform for personalized multi-channel messaging.',
      whyTheyWin: 'Best-in-class mobile and lifecycle messaging tooling at scale.',
    },
    {
      name: 'Iterable',
      description: 'Cross-channel customer engagement and personalization platform.',
      whyTheyWin: 'Strong API-driven personalization and experimentation workflows.',
    },
  ],
  marketPosition: 'Behavioral engagement SaaS for enterprises focused on delinquency and collections experiences.',
  moat: [
    'Behavioral science + AI personalization tuned for sensitive financial engagement workflows',
    'Enterprise-grade integrations for telecom, utilities, and financial services',
    'Proven scale of customer interactions across millions of consumers',
  ],
  vsGiants:
    'Competes by specializing in collections-focused engagement rather than broad CRM marketing suites from Salesforce or Adobe.',

  // AI-Native Level
  aiNativeLevel: 'B',
  aiNativeLevelDescription:
    'AI and behavioral analytics are core to Symend’s engagement decisioning, but the product still centers on enterprise workflow adoption.',
  aiDesignChallenges: [
    'Designing trust and empathy in automated delinquency interactions',
    'Explaining AI-driven recommendations to regulated enterprise users',
    'Balancing personalization with compliance and fairness constraints',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Hanif Joshaghani',
      role: 'Co-founder & CEO',
      background: 'Serial entrepreneur leading Symend’s behavioral engagement platform.',
    },
    {
      name: 'Tiffany Kaminsky',
      role: 'Co-founder & Chief Partnership Officer',
      background: 'Consumer engagement leader focused on go-to-market partnerships and growth.',
    },
  ],
  whyBuilding:
    'Founded to transform debt collection by replacing aggressive tactics with behaviorally-informed, empathetic digital engagement.',
  beliefs: [
    'Behavioral science can improve outcomes for both consumers and enterprises',
    'Personalization and empathy drive better repayment and long-term relationships',
    'AI should augment human decisioning with transparent recommendations',
  ],
  greenFlags: ['$100M+ funding and tier-1 investor backing', 'Clear focus on fintech/collections pain points'],
  redFlags: ['Highly regulated space with compliance risk', 'Enterprise sales cycles and procurement friction'],

  // Design Opportunity
  designTeam: {
    teamSize: 'Not publicly disclosed',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Behavioral segmentation and treatment logic for delinquent accounts',
        'Rules for AI-driven message cadence and escalation workflows',
        'Human-in-the-loop review for sensitive customer interactions',
      ],
    },
    evaluation: {
      level: 'high',
      tasks: [
        'Outcome measurement for repayment and customer satisfaction metrics',
        'A/B testing and experimentation of engagement strategies',
        'Bias and fairness auditing for behavioral models',
      ],
    },
    interface: {
      level: 'medium',
      tasks: [
        'Enterprise dashboards for engagement performance and cohort insights',
        'Configuration UI for messaging journeys and policy controls',
        'Customer-facing payment and self-serve experiences',
      ],
    },
  },
  productStage: '10→100',

  // User Context
  targetAudiences: {
    primary: 'Enterprise financial services, telecom, and utilities collections teams',
    secondary: 'Customer success and compliance leaders managing delinquency programs',
  },
  userProblems: [
    'Legacy collections tactics damage customer relationships and brand trust',
    'Enterprises lack real-time behavioral insights to personalize outreach',
    'Compliance and fairness requirements make automation risky without guardrails',
    'Collections teams need measurable improvements in cure and recovery rates',
  ],

  // Designer Links
  designerLinks: [],

  // Open Roles
  openRoles: [],

  // Culture Insights
  cultureInsights: [],

  // My Tracking
  tracking: {
    status: 'researching',
    fitScore: 6,
    whyJoin: ['Fintech + behavioral AI challenges', 'Enterprise-scale impact on customer outcomes'],
    whyNot: ['Long enterprise sales cycles', 'Regulatory and compliance constraints'],
    nextActions: ['Monitor hiring for product design roles', 'Track expansion into new verticals'],
  },

  // Meta
  lastUpdated: '2026-02-07T12:00:00',
  sources: [
    { title: 'Source', url: 'https://www.symend.com/company/about-symend/' },
    { title: 'Source', url: 'https://www.symend.com/news/symend-closes-52-million-usd-round-to-grow-market-presence-for-consumer-focused-platform' },
    { title: 'Source', url: 'https://www.businesswire.com/news/home/20210209005423/en/Symend-to-Accelerate-Global-Expansion-by-Bringing-Total-Funding-to-date-to-Over-US%24100-Million-Following-US%2443-Million-Series-B-Extension' },
    { title: 'Source', url: 'https://www.symend.com/news/symend-infuses-over-40m-in-growth-capital-to-transform-customer-engagement-with-behavioral-science' },
    { title: 'Source', url: 'https://symend.applytojob.com/apply/mjtF0zUts7/People-Partner' },
    { title: 'Source', url: 'https://www.g2.com/products/symend/competitors/alternatives' }
  ],
};
