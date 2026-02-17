import { Company } from '../types';

export const density: Company = {
  id: 'density',
  name: 'Density',
  description: 'Privacy-first occupancy sensors and analytics platform that measures how people use physical spaces, enabling enterprises to optimize real estate and workplace design.',
  website: 'https://density.io',
  headquarters: 'San Francisco, CA',
  remote: 'Hybrid',
  ogImage: '/og-images/density-og.webp',
  aiTypes: ['data-analysis'],
  markets: ['enterprise', 'b2b'],
  category: 'enterprise-ops' as const,
  industries: ['other'],
  stage: 'Series D',
  valuation: '$1.05B (Nov 2021)',
  totalFunding: '$225M+',
  fundingHistory: [
    {
      stage: 'Seed',
      amount: '$200K',
      date: '2015-05',
      leadInvestors: [],
    },
    {
      stage: 'Series A',
      amount: '$3.4M',
      date: '2016-07',
      leadInvestors: ['Upfront Ventures'],
    },
    {
      stage: 'Series B',
      amount: '$25M',
      date: '2018-06',
      leadInvestors: ['Founders Fund'],
    },
    {
      stage: 'Series C',
      amount: '$51M',
      date: '2020-07',
      leadInvestors: ['Kleiner Perkins'],
    },
    {
      stage: 'Series D',
      amount: '$125M',
      date: '2021-11',
      valuation: '$1.05B',
      leadInvestors: ['Kleiner Perkins'],
    },
  ],
  revenue: '~$37M ARR (estimated)',
  growth: '500%+ since March 2020',
  customers: 'Fortune 500 companies across 32 countries',
  competitors: [
    {
      name: 'VergeSense',
      description: 'AI-powered spatial intelligence platform for workplace analytics',
      whyTheyWin: 'Camera-based AI vision offers richer behavioral insights beyond headcount',
    },
    {
      name: 'Envoy',
      description: 'Visitor management and workplace platform with occupancy features',
      whyTheyWin: 'Broader workplace management suite including visitor check-in and desk booking',
    },
    {
      name: 'XY Sense',
      description: 'Occupancy sensors for real-time space utilization analytics',
      whyTheyWin: 'Heat-map level granularity with ceiling-mounted sensors',
    },
  ],
  marketPosition: 'Leading privacy-first occupancy analytics platform for enterprise',
  moat: [
    'Proprietary depth sensor hardware + deep learning algorithms',
    'Privacy-first architecture (no cameras, no PII) — regulatory advantage',
    'Fortune 500 customer base across 32 countries',
  ],
  vsGiants: 'Google/Microsoft offer building management features but lack dedicated sensor hardware and privacy-first occupancy analytics depth',
  aiNativeLevel: 'B',
  aiNativeLevelDescription: 'AI/ML is the core differentiator — deep learning classifiers process sensor data to anonymously count people with high accuracy, and ML-driven analytics surface actionable space utilization insights.',
  aiDesignChallenges: [
    'Translating raw sensor data into intuitive spatial visualizations',
    'Designing real-time occupancy dashboards for facility managers',
    'Balancing data density with simplicity for executive-level reporting',
  ],
  founders: [
    {
      name: 'Andrew Farah',
      role: 'CEO & Co-founder',
      background: 'Product management background at Belkin; founded Density in 2014 to measure how physical spaces are used.',
    },
    {
      name: 'Ben Redfield',
      role: 'Co-founder',
      background: 'Technical co-founder focused on sensor hardware and signal processing.',
    },
  ],
  whyBuilding: 'Founded on the question of how to measure the utilization of physical spaces — enabling data-driven decisions about real estate and workplace design.',
  beliefs: [
    'Privacy and measurement can coexist without cameras',
    'Physical spaces should be as measurable as digital products',
    'Data-driven workplace design improves both efficiency and employee experience',
  ],
  greenFlags: [
    'Unicorn valuation ($1.05B) with strong institutional backing (Kleiner Perkins, Founders Fund)',
    'Privacy-first approach creates regulatory moat as data laws tighten',
    'Massive TAM in commercial real estate optimization post-COVID',
  ],
  redFlags: [
    'Hardware-dependent model creates longer sales cycles and deployment friction',
    'Post-COVID remote work trend may reduce demand for office analytics',
    'No funding rounds reported since 2021 — growth trajectory unclear',
  ],
  designTeam: {
    teamSize: 'Unknown',
  },
  designWorkType: {
    logicBehavior: {
      level: 'medium',
      tasks: [
        'Sensor placement recommendation logic',
        'Occupancy threshold and alert rules',
        'Space utilization scoring algorithms',
      ],
    },
    evaluation: {
      level: 'medium',
      tasks: [
        'Sensor accuracy and data quality metrics',
        'Space utilization benchmarking frameworks',
        'ROI reporting for real estate decisions',
      ],
    },
    interface: {
      level: 'high',
      tasks: [
        'Real-time occupancy dashboards and floor plans',
        'Analytics and trend visualization for facility teams',
        'Self-service sensor installation UX (Waffle product)',
      ],
    },
  },
  productStage: '10→100',
  targetAudiences: {
    primary: 'Enterprise facility managers and workplace strategy teams',
    secondary: 'Commercial real estate operators and corporate CRE leaders',
  },
  userProblems: [
    'No visibility into how office spaces are actually used day-to-day',
    'Overpaying for underutilized real estate without data to justify changes',
    'Camera-based solutions raise employee privacy concerns and regulatory risk',
    'Return-to-office planning without occupancy data leads to poor decisions',
  ],
  designerLinks: [],
  openRoles: [],
  cultureInsights: [],
  tracking: {
    status: 'watching',
    fitScore: 5,
    whyJoin: [
      'Level B AI-native with deep sensor+ML integration',
      'Interesting spatial data visualization challenges',
      'Unicorn with strong investors (Kleiner Perkins, Founders Fund)',
    ],
    whyNot: [
      'Hardware company — slower iteration cycles than pure software',
      'No current design roles open',
      'Post-2021 funding silence raises growth questions',
    ],
    nextActions: [
      'Monitor density.io/careers for product design openings',
    ],
  },
  lastUpdated: '2026-02-17',
  sources: [
    { title: 'Density Series D announcement', url: 'https://www.density.io/resources/series-d' },
    { title: 'Density Series D — PR Newswire', url: 'https://www.prnewswire.com/news-releases/density-secures-125-million-in-series-d-funding-to-accelerate-growth-acquires-helix-re-301421033.html' },
    { title: 'Density Careers — no Product Design roles found', url: 'https://density.io/careers' },
    { title: 'Density Series C — Fortune', url: 'https://fortune.com/2020/07/28/indoor-people-counting-startup-density-raises-51-million/' },
    { title: 'Density Crunchbase profile', url: 'https://www.crunchbase.com/organization/density' },
  ],
};
