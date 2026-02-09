import { Company } from '../types';

export const canvassAi: Company = {
  id: 'canvass-ai',
  name: 'Canvass AI',
  description:
    'Industrial AI software platform that helps asset-intensive enterprises improve reliability, yield, and energy efficiency with predictive analytics.',
  website: 'https://www.canvass.io',
  headquarters: 'Toronto, ON, Canada',
  remote: 'Yes',

  // Multi-dimensional Tags
  aiTypes: ['data-analysis', 'automation'],
  markets: ['enterprise', 'b2b'],
  category: 'enterprise-ops' as const,
  industries: ['infrastructure'],

  // Business
  stage: 'Series A',
  valuation: 'Not publicly disclosed',
  totalFunding: 'Not publicly disclosed',
  fundingHistory: [
    {
      stage: 'Seed',
      amount: '$5M',
      date: '2018-08',
      leadInvestors: ['Gradient Ventures'],
    },
    {
      stage: 'Series A',
      amount: '$6.5M',
      date: '2020-10',
      leadInvestors: ['Export Development Canada'],
    },
    {
      stage: 'Series A',
      amount: '$7.73M',
      date: '2022-08',
      leadInvestors: ['Yamaha Motor Ventures'],
    },
  ],
  revenue: 'Not publicly disclosed',
  growth: 'Not publicly disclosed',
  runway: 'Not publicly disclosed',
  customers: 'Fortune 500 and Global 2000 industrial companies',

  // Competition
  competitors: [
    {
      name: 'Falkonry',
      description: 'Industrial AI platform for predictive maintenance and operational analytics.',
      whyTheyWin: 'Deep anomaly detection tooling for industrial IoT deployments.',
    },
    {
      name: 'Seeq',
      description: 'Advanced analytics platform focused on industrial process data.',
      whyTheyWin: 'Strong process analytics and visualization capabilities for engineers.',
    },
    {
      name: 'Intelecy',
      description: 'Manufacturing analytics platform for performance monitoring and optimization.',
      whyTheyWin: 'Specialized manufacturing KPI monitoring and reporting.',
    },
  ],
  marketPosition: 'Industrial AI platform targeting reliability and efficiency for asset-heavy operations.',
  moat: [
    'Domain-specific AI workflows tailored to industrial operations and maintenance',
    'Enterprise integrations with process control and historian data systems',
    'Focus on measurable outcomes like yield, throughput, and energy savings',
  ],
  vsGiants:
    'Competes by specializing in industrial AI workflows rather than horizontal analytics suites from large cloud providers.',

  // AI-Native Level
  aiNativeLevel: 'B',
  aiNativeLevelDescription:
    'AI analytics are the core value proposition for improving industrial reliability and performance.',
  aiDesignChallenges: [
    'Translating complex industrial data into actionable alerts',
    'Building trust in AI recommendations for plant operators',
    'Integrating AI insights into existing control room workflows',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Humera Malik',
      role: 'Co-founder & CEO',
      background: 'Engineer and entrepreneur leading Canvass AI’s industrial analytics platform.',
    },
    {
      name: 'Shahzad Mojarad',
      role: 'Co-founder & CTO',
      background: 'Technical co-founder with experience in industrial AI and machine learning systems.',
    },
  ],
  whyBuilding:
    'Founded to help industrial enterprises use AI to improve reliability, yield, and energy performance in asset-heavy operations.',
  beliefs: [
    'Industrial operations need AI insights that translate into measurable outcomes',
    'Reliability and efficiency gains come from continuous data-driven optimization',
    'AI adoption requires trustworthy, explainable analytics for operators',
  ],
  greenFlags: ['Multiple funding rounds with strategic industrial investors', 'Clear focus on industrial reliability outcomes'],
  redFlags: ['Long enterprise sales cycles', 'Industrial AI market crowded with established incumbents'],

  // Design Opportunity
  designTeam: {
    teamSize: 'Not publicly disclosed',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Industrial alert logic and anomaly detection workflows',
        'Decision support rules for maintenance recommendations',
        'Data integration and model deployment configurations',
      ],
    },
    evaluation: {
      level: 'high',
      tasks: [
        'Model performance monitoring and drift detection',
        'Outcome measurement for reliability and energy savings',
        'Feedback loops for operator trust and adoption',
      ],
    },
    interface: {
      level: 'medium',
      tasks: [
        'Operations dashboards for plant managers and engineers',
        'Alert and incident triage UI',
        'Reporting tools for executive stakeholders',
      ],
    },
  },
  productStage: '1→10',

  // User Context
  targetAudiences: {
    primary: 'Industrial operations and reliability engineering teams',
    secondary: 'Plant managers and executive operations leaders',
  },
  userProblems: [
    'Equipment failures and downtime are costly and hard to predict',
    'Industrial data is siloed and difficult to operationalize',
    'Operators lack trusted AI insights integrated into daily workflows',
    'Energy and throughput optimization require continuous analytics',
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
    fitScore: 5,
    whyJoin: ['Industrial AI with measurable impact', 'Opportunity to shape operator-facing analytics'],
    whyNot: ['Highly specialized industrial domain knowledge required', 'Long sales and deployment cycles'],
    nextActions: ['Monitor for design or product openings', 'Track new customer case studies'],
  },

  // Meta
  lastUpdated: '2026-02-07T12:00:00',
  sources: [
    { title: 'Source', url: 'https://www.canvass.io/about-us' },
    { title: 'Source', url: 'https://www.prnewswire.com/news-releases/canvass-ai-accelerates-expansion-with-completion-of-us-14-23-million-series-a-funding-301602356.html' },
    { title: 'Source', url: 'https://www.businesswire.com/news/home/20201027005122/en/Canvass-Analytics-Raises-US6.5M-Series-A-to-Deliver-Industrial-AI-Solutions' },
    { title: 'Source', url: 'https://www.prnewswire.com/news-releases/canvass-analytics-raises-usd-5-million-led-by-googles-gradient-ventures-300699962.html' },
    { title: 'Source', url: 'https://www.canvass.io/career/devops-cloud-engineering' },
    { title: 'Source', url: 'https://www.cbinsights.com/company/canvass/alternatives-competitors' }
  ],
};
