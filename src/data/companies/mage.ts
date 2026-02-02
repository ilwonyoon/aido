import { Company } from '../types';

export const mage: Company = {
  id: 'mage',
  name: 'Mage',
  description: 'Open-source data pipeline tool.',
  website: 'https://www.mage.ai',
  headquarters: 'San Francisco, CA',
  remote: 'No',

  // Visual Assets
  ogImage: 'https://framerusercontent.com/images/RWcxzAUa8aAmswMQDlrq8fER8.jpg',
  screenshot: '/screenshots/mage-screenshot.png',

  // Multi-dimensional Tags
  aiTypes: ['automation'],
  markets: ['b2b'],
  industries: ['data'],

  // Business
  stage: 'Seed',
  valuation: 'Unknown',
  totalFunding: '$11.8M',
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'Unknown',

  // Competition
  competitors: [
    { name: 'Apache Airflow', description: 'Industry-standard open-source data pipeline orchestrator', whyTheyWin: 'Massive community adoption (52K members)' },
    { name: 'Prefect', description: 'Hybrid execution data orchestration with strong observability', whyTheyWin: 'Strong cloud offerings and observability' },
    { name: 'Dagster', description: 'Software-defined assets approach to data orchestration', whyTheyWin: 'Asset-centric paradigm innovation' },
  ],
  marketPosition: 'Open-source modern replacement for Airflow with visual pipeline building, AI-powered code assistance, and Python/SQL/R support',
  moat: ['Open-source Airflow alternative', 'Visual pipeline builder with notebook-style UI', 'AI-powered code generation'],
  vsGiants: 'Airflow requires extensive boilerplate and painful DAG management; Mage provides visual building with notebook-style UI and AI assistance',

  // AI-native analysis
  aiNativeLevel: 'D',
  aiNativeLevelDescription: 'Unknown',
  aiDesignChallenges: ['Unknown'],

  // Founders & Vision
  founders: [
    { name: 'Tommy Dang', role: 'Co-Founder & CEO', background: 'UC Berkeley graduate. Former engineer at Airbnb (joined when <200 engineers), built internal low-code data tools.' },
    { name: 'Xiaoyou Wang', role: 'Co-Founder', background: 'Former Airbnb engineer. Co-built internal low-code tool Omni with Tommy Dang.' },
  ],
  whyBuilding: 'Data pipelines shouldnt require writing hundreds of lines of boilerplate code. Visual building with AI assistance makes data engineering accessible.',
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
  targetAudiences: { primary: 'Data engineers and analytics teams building and maintaining data pipelines' },
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
  lastUpdated: '2026-02-02T18:00:00',
  sources: [
    { title: 'Mage', url: 'https://www.mage.ai' },
    { title: 'Mage on startups.gallery', url: 'https://startups.gallery/companies/mage' },
  ],
};
