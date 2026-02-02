import { Company } from '../types';

export const dagster: Company = {
  id: 'dagster',
  name: 'Dagster',
  description: 'Ship data pipelines with extraordinary velocity.',
  website: 'https://dagster.io',
  headquarters: 'San Francisco, CA',
  remote: 'Yes',

  // Visual Assets
  ogImage: 'https://cdn.prod.website-files.com/681399f654933b29e12fb8bd/681cb5f07ccf87ece14559ef_OG%20-%20v2FIX.jpg',
  screenshot: '/screenshots/dagster-screenshot.png',

  // Multi-dimensional Tags
  aiTypes: ['automation'],
  markets: ['b2b'],
  industries: ['data', 'developer-tools'],

  // Business
  stage: 'Series B',
  valuation: 'Unknown',
  totalFunding: '$47M',
  revenue: 'Unknown',
  growth: '97 employees across 4 continents',
  runway: 'Unknown',
  customers: 'Unknown',

  // Competition
  competitors: [
    { name: 'Apache Airflow', description: 'Most widely adopted task-based DAG orchestrator', whyTheyWin: 'Massive adoption, 2K+ job listings' },
    { name: 'Prefect', description: 'Python-native orchestration', whyTheyWin: 'Founded by former Airflow PMC member' },
    { name: 'Mage', description: 'Modern data pipeline with notebook-style UI', whyTheyWin: 'Familiar notebook interface' },
  ],
  marketPosition: 'Asset-centric data orchestration pioneer — created by GraphQL co-creator, led by React co-creator',
  moat: ['Asset-centric paradigm (first-mover)', 'Founder pedigree (GraphQL + React creators)', 'Sequoia/Index Ventures backing'],
  vsGiants: 'Airflow is task-based and painful to maintain; Dagster treats data assets as first-class citizens',

  // AI-native analysis
  aiNativeLevel: 'D',
  aiNativeLevelDescription: 'Unknown',
  aiDesignChallenges: ['Unknown'],

  // Founders & Vision
  founders: [
    { name: 'Nick Schrock', role: 'Founder', background: 'Former Facebook engineer, co-created GraphQL. Founded Elementl (now Dagster Labs) in 2018.' },
    { name: 'Pete Hunt', role: 'CEO (joined 2022)', background: 'Co-creator of React at Facebook. Joined as CEO to enhance developer experience focus.' },
  ],
  whyBuilding: 'Data orchestration should be asset-centric, not task-centric. Data pipelines deserve the same developer experience as code.',
  beliefs: ['Unknown'],
  greenFlags: ['Unknown'],
  redFlags: ['Unknown'],

  // Design Opportunity
  designTeam: { teamSize: 'Unknown' },
  designWorkType: {
    logicBehavior: { level: 'medium', tasks: ['Unknown'] },
    evaluation: { level: 'low', tasks: ['Unknown'] },
    interface: { level: 'medium', tasks: ['Unknown'] },
  },
  productStage: '1→10',

  // User Context
  targetAudiences: { primary: 'Data engineers and analytics teams' },
  userProblems: ['Unknown'],

  // Designer Links
  designerLinks: [],

  // Open Roles
  openRoles: [],

  cultureInsights: [],

  // My Tracking
  tracking: {
    status: 'researching',
    fitScore: 5,
    whyJoin: ['Unknown'],
    whyNot: ['Unknown'],
    nextActions: ['Research'],
  },

  // Growth Metrics
  growthMetrics: {
    stage: 'early-growth',
    revenueGrowth: 'Unknown',
    userGrowth: 'Unknown',
    signals: ['Unknown'],
    tam: 'Unknown',
    marketShare: 'Unknown',
    ceiling: 'Unknown',
    tailwinds: ['Unknown'],
    headwinds: ['Unknown'],
    moatType: 'none',
    moatStrength: 'Unknown',
  },

  // Meta
  lastUpdated: '2026-02-02T17:30:00',
  sources: [
    { title: 'Dagster', url: 'https://dagster.io' },
    { title: 'Dagster on startups.gallery', url: 'https://startups.gallery/companies/dagster' },
  ],
};
