import { Company } from '../types';

export const cline: Company = {
  id: 'cline',
  name: 'Cline',
  description: 'Open source AI coding.',
  website: 'https://cline.bot',
  headquarters: 'San Francisco, CA',
  remote: 'No',

  // Visual Assets
  ogImage: 'https://cline.bot/cline_og_img.png',
  screenshot: '/screenshots/cline-screenshot.png',

  // Multi-dimensional Tags
  aiTypes: ['code-assistant', 'agent'],
  markets: ['b2b'],
  industries: ['developer-tools'],

  // Business
  stage: 'Series A',
  valuation: '$110M',
  totalFunding: '$32M',
  revenue: 'Unknown',
  growth: '2.7M developers, 57.3K GitHub stars',
  runway: 'Unknown',
  customers: '2.7M developers including Samsung and SAP',

  // Competition
  competitors: [
    { name: 'Cursor', description: 'AI-first code editor with deep IDE integration', whyTheyWin: 'Better IDE experience, fast autocomplete' },
    { name: 'GitHub Copilot', description: 'Microsoft-backed AI coding assistant', whyTheyWin: 'Massive distribution via VS Code and GitHub' },
    { name: 'Augment', description: 'AI coding platform for enterprise teams', whyTheyWin: 'Enterprise focus' },
  ],
  marketPosition: 'Open-source privacy-first AI coding agent with zero-trust architecture — code never touches their servers',
  moat: ['Open-source community (57K stars)', 'Zero-trust privacy model', 'Model-agnostic (bring your own key)'],
  vsGiants: 'Copilot is closed-source and sends code to Microsoft; Cline is open-source with zero-trust architecture',

  // AI-native analysis
  aiNativeLevel: 'D',
  aiNativeLevelDescription: 'Unknown',
  aiDesignChallenges: ['Unknown'],

  // Founders & Vision
  founders: [
    { name: 'Saoud Rizwan', role: 'Founder & CEO', background: '10 yrs software engineering. iOS dev with open-source contributions. Started as Anthropic hackathon project June 2024.' },
  ],
  whyBuilding: 'AI coding should be open-source, privacy-first, and model-agnostic — not locked into one vendor.',
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
  targetAudiences: { primary: 'Software developers wanting AI coding assistance with privacy' },
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
    { title: 'Cline', url: 'https://cline.bot' },
    { title: 'Cline on startups.gallery', url: 'https://startups.gallery/companies/cline' },
  ],
};
