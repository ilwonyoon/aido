import { Company } from '../types';

export const c2ro: Company = {
  id: 'c2ro',
  name: 'C2RO',
  description:
    'Privacy-aware AI video analytics platform that helps businesses understand human behavior in physical spaces using existing cameras.',
  website: 'https://www.c2ro.com',
  headquarters: 'Montreal, QC, Canada',
  remote: 'No',

  // Multi-dimensional Tags
  aiTypes: ['data-analysis', 'automation'],
  markets: ['enterprise', 'b2b'],
  category: 'vertical-saas' as const,
  industries: ['security'],

  // Business
  stage: 'Seed',
  valuation: 'Not publicly disclosed',
  totalFunding: '$3.35M',
  fundingHistory: [
    {
      stage: 'Seed',
      amount: '$1.1M',
      date: '2018-05',
      leadInvestors: ['Harbor Street Ventures'],
    },
    {
      stage: 'Seed',
      amount: 'CAD$2.25M',
      date: '2019-06',
      leadInvestors: ['Fonds Innovexport'],
    },
  ],
  revenue: 'Not publicly disclosed',
  growth: 'Not publicly disclosed',
  runway: 'Not publicly disclosed',
  customers: 'Not publicly disclosed',

  // Competition
  competitors: [
    {
      name: 'RetailNext',
      description: 'In-store analytics platform using video and sensor data for retail performance insights.',
      whyTheyWin: 'Large installed base in global retail chains and mature analytics suite.',
    },
    {
      name: 'Density',
      description: 'Occupancy and space utilization analytics using sensors and computer vision.',
      whyTheyWin: 'Strong footprint in workplace analytics with privacy-first positioning.',
    },
    {
      name: 'Scanalytics',
      description: 'Physical space analytics for retail and smart environments.',
      whyTheyWin: 'Established retail analytics product with deep vertical integrations.',
    },
  ],
  marketPosition: 'Enterprise AI video analytics for retail, real estate, and smart environments with privacy-by-design compliance.',
  moat: [
    'Privacy-first, biometric-free analytics aligned with GDPR and PIPEDA',
    'Computer-vision IP for real-time behavioral analytics in physical spaces',
    'Designed to leverage existing camera infrastructure to reduce deployment friction',
  ],
  vsGiants: 'Competes by delivering privacy-compliant analytics without requiring new hardware or large platform lock-in.',

  // AI-Native Level
  aiNativeLevel: 'B',
  aiNativeLevelDescription:
    'AI video analytics and real-time behavioral insights are the core product differentiator for physical space operators.',
  aiDesignChallenges: [
    'Building trust with privacy-by-design messaging for video analytics',
    'Explaining AI-derived behavioral metrics to non-technical operators',
    'Balancing real-time dashboards with operational simplicity for retail teams',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Soodeh Farokhi, PhD',
      role: 'Co-founder & CTO',
      background: 'Cloud robotics researcher who founded C2RO and led early product and AI development.',
    },
    {
      name: 'Brian Moore, PhD',
      role: 'Co-founder',
      background: 'Robotics researcher who co-founded C2RO at TandemLaunch, focused on multi-robot collaboration and AI.',
    },
  ],
  whyBuilding:
    'C2RO was built to help enterprises understand and optimize physical environments with privacy-aware AI analytics.',
  beliefs: [
    'AI analytics for physical spaces must respect privacy regulations',
    'Operational decisions improve when behavioral data is measurable',
    'Existing camera infrastructure should unlock new insights without hardware rebuilds',
  ],
  greenFlags: ['Seed funding from reputable investors', 'Privacy-first positioning in a sensitive market'],
  redFlags: ['Crowded physical analytics market', 'Enterprise deployment cycles in retail and real estate'],

  // Design Opportunity
  designTeam: {
    teamSize: 'Not publicly disclosed',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Behavioral analytics logic for customer journey tracking',
        'Edge/cloud data routing for real-time video inference',
        'Privacy-preserving data processing rules',
      ],
    },
    evaluation: {
      level: 'high',
      tasks: [
        'Accuracy monitoring for traffic and demographic analytics',
        'Calibration workflows for different physical environments',
        'Auditability for GDPR/PIPEDA compliance',
      ],
    },
    interface: {
      level: 'medium',
      tasks: [
        'Dashboards for footfall and engagement insights',
        'Alerts for operational anomalies',
        'Reporting exports for retail and real estate stakeholders',
      ],
    },
  },
  productStage: '10→100',

  // User Context
  targetAudiences: {
    primary: 'Retail, mall, and commercial real estate operators',
    secondary: 'Smart city and enterprise facilities teams',
  },
  userProblems: [
    'Physical spaces lack reliable, privacy-safe behavioral analytics',
    'Operators struggle to measure customer journey patterns and conversion',
    'Deploying new sensor hardware is costly and slow',
    'Teams need real-time insights to optimize staffing and layouts',
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
    whyJoin: ['Computer vision product design challenges', 'Privacy-first analytics positioning'],
    whyNot: ['Enterprise sales cycles', 'Market competition in retail analytics'],
    nextActions: ['Monitor for design hiring signals', 'Track enterprise customer deployments'],
  },

  // Meta
  lastUpdated: '2026-02-07T13:30:00',
  sources: [
    { title: 'C2RO About Us', url: 'https://www.c2ro.com/about-us' },
    { title: 'C2RO Careers', url: 'https://www.c2ro.com/careers' },
    { title: 'C2RO seed financing (GlobeNewswire)', url: 'https://www.globenewswire.com/news-release/2018/05/02/1495128/0/en/C2RO-Raises-1-1-M-Seed-Financing-to-Commercialize-Cloud-Based-Robotics-A-I-SaaS-Platform.html' },
    { title: 'C2RO financing round (PRNewswire)', url: 'https://www.prnewswire.com/news-releases/c2ro-raises-2-25-m-financing-to-commercialize-portfolio-of-enterprise-grade-cloud-ai-services-300875891.html' },
    { title: 'C2RO founders (C2RO news)', url: 'https://www.c2ro.com/post/c2ro-news-indiana-university-s-prof-fox-partners-with-c2ro-to-create-intelligent-robotics' },
  ],
};
