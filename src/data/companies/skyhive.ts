import { Company } from '../types';

export const skyhive: Company = {
  id: 'skyhive',
  name: 'SkyHive',
  description:
    'Workforce intelligence platform that uses AI to map skills, analyze labor markets, and support strategic workforce planning.',
  website: 'https://www.skyhive.ai',
  headquarters: 'Vancouver, BC, Canada',
  region: 'other-intl' as const,
  remote: 'Yes',

  // Multi-dimensional Tags
  aiTypes: ['data-analysis', 'automation'],
  markets: ['enterprise', 'b2b'],
  category: 'enterprise-ops' as const,
  industries: ['productivity'],

  // Business
  stage: 'Acquired (Cornerstone, 2024)',
  normalizedStage: 'other' as const,
  valuation: 'Not publicly disclosed',
  totalFunding: '$48M',
  fundingHistory: [
    {
      stage: 'Series A',
      amount: '$8M',
      date: '2020-03',
      leadInvestors: ['Accel'],
    },
    {
      stage: 'Series B',
      amount: '$40M',
      date: '2022-06',
      leadInvestors: ['Cornerstone', 'Accel', 'Workday Ventures', 'LMN Ventures'],
    },
  ],
  revenue: 'Not publicly disclosed',
  growth: 'Not publicly disclosed',
  runway: 'Not publicly disclosed',
  customers: 'Not publicly disclosed',

  // Competition
  competitors: [
    {
      name: 'Rippling',
      description: 'Unified HR and IT platform with workforce analytics modules.',
      whyTheyWin: 'Broad HR suite and strong mid-market adoption.',
    },
    {
      name: 'Paylocity',
      description: 'HCM platform with workforce insights and talent management features.',
      whyTheyWin: 'Established payroll footprint and enterprise HR integrations.',
    },
    {
      name: 'ADP Workforce Now',
      description: 'Large-scale HCM suite with workforce data reporting capabilities.',
      whyTheyWin: 'Massive enterprise footprint and payroll lock-in.',
    },
  ],
  marketPosition: 'Enterprise AI skills intelligence platform for workforce planning and talent strategy.',
  moat: [
    'Skills graph and labor market datasets tailored to workforce planning',
    'Scenario modeling for reskilling and hiring decisions',
    'Enterprise-grade integrations with HR and talent systems',
  ],
  vsGiants: 'Competes with large HCM suites by offering deeper AI-driven skills intelligence and labor market analytics.',

  // AI-Native Level
  aiNativeLevel: 'B',
  aiNativeLevelDescription:
    'AI is core to the product’s skills graph, matching, and workforce planning recommendations.',
  aiDesignChallenges: [
    'Explaining AI skill inferences to HR stakeholders',
    'Designing scenario planning for workforce restructuring',
    'Maintaining trust when AI suggests reskilling or hiring actions',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Sean Hinton',
      role: 'Co-founder & CEO',
      background: 'Former senior executive in workforce and talent technology, leading SkyHive’s AI skills platform vision.',
    },
    {
      name: 'Sergiy Osypchuk',
      role: 'Co-founder & CTO',
      background: 'Engineering leader focused on AI-driven labor market analytics and platform architecture.',
    },
  ],
  whyBuilding:
    'SkyHive was built to help enterprises understand skills supply and demand and make better workforce decisions with AI.',
  beliefs: [
    'Skills data should guide workforce strategy, not just job titles',
    'AI can help organizations adapt faster to labor market shifts',
    'Transparency in workforce analytics builds trust and adoption',
  ],
  greenFlags: ['Acquired by Cornerstone to scale globally', 'Strong enterprise focus in HR tech'],
  redFlags: ['Crowded HR analytics market', 'Dependence on enterprise data integrations'],

  // Design Opportunity
  designTeam: {
    teamSize: 'Not publicly disclosed',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'AI skill inference logic explanations',
        'Scenario modeling rules for workforce planning',
        'Recommendation systems for reskilling and hiring',
      ],
    },
    evaluation: {
      level: 'high',
      tasks: [
        'Model performance and bias monitoring',
        'User feedback loops on skill matching accuracy',
        'Reporting for workforce outcomes',
      ],
    },
    interface: {
      level: 'medium',
      tasks: [
        'Executive dashboards for talent strategy',
        'Data visualization for labor market insights',
        'Admin workflows for data ingestion and mapping',
      ],
    },
  },
  productStage: '10→100',

  // User Context
  targetAudiences: {
    primary: 'Enterprise HR and workforce strategy teams',
    secondary: 'Talent acquisition and learning & development leaders',
  },
  userProblems: [
    'Companies lack visibility into current workforce skills',
    'Reskilling and hiring plans are hard to model at scale',
    'Labor market data is fragmented and difficult to interpret',
    'Executives need clear scenarios for workforce change planning',
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
    whyJoin: ['Enterprise AI analytics challenges', 'Impactful workforce planning domain'],
    whyNot: ['Enterprise sales cycles', 'Crowded HR analytics landscape'],
    nextActions: ['Monitor Cornerstone integration updates', 'Track design hiring'],
  },

  // Meta
  lastUpdated: '2026-02-07T12:00:00',
  sources: [
    { title: 'Source', url: 'https://www.skyhive.ai' },
    { title: 'Source', url: 'https://b2c.skyhive.io/contact' },
    { title: 'Source', url: 'https://www.businesswire.com/news/home/20220614005438/en/SkyHive-Raises-40-Million-Series-B-Round-to-Drive-the-Future-of-Workforce-Intelligence' },
    { title: 'Source', url: 'https://en.wikipedia.org/wiki/SkyHive' },
    { title: 'Source', url: 'https://www.cornerstoneondemand.com/company/news/press-releases/cornerstone-announces-ai-powered-workforce-innovations/' },
    { title: 'Source', url: 'https://www.g2.com/products/skyhive/competitors/alternatives' },
    { title: 'Source', url: 'https://allegiscyber.hire.trakstar.com/jobs/fk0vn2r/' }
  ],
};
