import { Company } from '../types';

export const symend: Company = {
  id: 'symend',
  name: 'Symend',
  description:
    'Behavioral engagement platform that combines behavioral science, AI, and data-driven insights to improve collections and customer engagement for enterprises.',
  website: 'https://www.symend.com',
  headquarters: 'Calgary, AB, Canada',
  remote: 'Yes',

  // Multi-dimensional Tags
  aiTypes: ['data-analysis', 'automation'],
  markets: ['b2b', 'enterprise'],
  category: 'enterprise-ops' as const,
  industries: ['fintech'],

  // Business
  stage: 'Series B',
  valuation: 'Not publicly disclosed',
  totalFunding: '$100M+',
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
  customers: 'Enterprise customers across financial services, telecom, utilities, and media',

  // Competition
  competitors: [
    {
      name: 'TrueAccord',
      description: 'Digital-first collections and recovery platform.',
      whyTheyWin: 'Deep focus on automated collections workflows and compliance.',
    },
    {
      name: 'Pair Finance',
      description: 'Collections software combining automation and customer communication.',
      whyTheyWin: 'Modern digital collections UX with analytics focus.',
    },
    {
      name: 'CollectAI',
      description: 'AI-driven collections and payment engagement platform.',
      whyTheyWin: 'AI-first approach to recovery optimization and personalization.',
    },
  ],
  marketPosition: 'Behavioral-science-driven engagement platform helping large enterprises improve collections outcomes with personalized journeys.',
  moat: [
    'Behavioral science expertise embedded into engagement workflows',
    'Data-driven personalization across large-scale enterprise portfolios',
    'Mission-driven positioning in a sensitive, high-regulation domain',
  ],
  vsGiants:
    'Competes with large collections and CRM suites by offering specialized behavioral-science personalization for delinquency engagement.',

  // AI-Native Level
  aiNativeLevel: 'B',
  aiNativeLevelDescription:
    'AI and behavioral analytics are core to the product’s differentiation in optimizing collections engagement at scale.',
  aiDesignChallenges: [
    'Designing empathetic engagement journeys for sensitive financial situations',
    'Balancing automation with human oversight and compliance requirements',
    'Communicating AI-driven recommendations with trust and transparency',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Hanif Joshaghani',
      role: 'Co-founder & CEO',
      background: 'Serial entrepreneur leading Symend’s mission to modernize collections with behavioral science and AI.',
    },
    {
      name: 'Tiffany Kaminsky',
      role: 'Co-founder & Chief Partnership Officer',
      background: 'Consumer engagement expert focused on partnerships and social impact.',
    },
  ],
  whyBuilding:
    'Symend was founded to transform collections by replacing aggressive tactics with behavioral-science-driven, empathetic engagement.',
  beliefs: [
    'Behavioral science can improve outcomes for both enterprises and consumers',
    'Personalized digital journeys drive higher recovery rates and trust',
    'Empathy and compliance are essential in financial engagement',
  ],
  greenFlags: ['Mission-driven differentiation in collections', 'Scaled enterprise focus with significant funding'],
  redFlags: ['Regulatory sensitivity in financial services', 'Long enterprise sales cycles'],

  // Design Opportunity
  designTeam: {
    teamSize: 'Not publicly disclosed',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Behavioral segmentation logic for outreach sequencing',
        'Rules for multi-channel engagement and repayment flows',
        'Compliance guardrails for collections communication',
      ],
    },
    evaluation: {
      level: 'medium',
      tasks: [
        'Effectiveness scoring of engagement journeys',
        'A/B testing and experimentation on messaging',
        'Outcome tracking for recovery and customer satisfaction',
      ],
    },
    interface: {
      level: 'medium',
      tasks: [
        'Enterprise dashboards for collections performance',
        'Workflow configuration UIs for engagement journeys',
        'Reporting and analytics surfaces for compliance teams',
      ],
    },
  },
  productStage: '10→100',

  // User Context
  targetAudiences: {
    primary: 'Enterprise collections and customer engagement teams',
    secondary: 'Financial services operations leaders',
  },
  userProblems: [
    'Traditional collections tactics damage brand trust and customer relationships',
    'Enterprises struggle to personalize engagement at scale',
    'Compliance requirements make collections workflows complex to manage',
    'Teams lack clear insight into behavioral drivers of repayment',
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
    whyJoin: ['Behavioral-science product challenges', 'Enterprise-scale impact on collections'],
    whyNot: ['Regulated domain with slower iteration cycles', 'Enterprise sales dependency'],
    nextActions: ['Monitor hiring signals', 'Track product releases and customer wins'],
  },

  // Meta
  lastUpdated: '2026-02-07T12:00:00',
  sources: [
    { title: 'Symend About', url: 'https://www.symend.com/company/about-symend/' },
    { title: 'Symend headquarters (Contact)', url: 'https://www.symend.com/company/contact-us' },
    { title: 'Symend Series B funding (Business Wire)', url: 'https://www.businesswire.com/news/home/20200507005202/en/Symend-Closes-%2452-Million-USD-Round-to-Deliver-on-Its-Mission-to-Digitally-Transform-the-Engagement-Experience-for-Financially-At-Risk-Customers' },
    { title: 'Symend Series B extension (Business Wire)', url: 'https://www.businesswire.com/news/home/20210218005472/en/Symend-to-Accelerate-Global-Expansion-by-Bringing-Total-Funding-to-date-to-Over-US100-Million-Following-US43-Million-Series-B-Extension' },
    { title: 'Symend careers (applytojob)', url: 'https://symend.applytojob.com/' },
  ],
};
