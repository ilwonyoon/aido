import { Company } from '../types';

export const augment: Company = {
  id: 'augment',
  name: 'Augment',
  description: 'AI teammate for logistics.',
  website: 'https://www.augmentcode.com',
  headquarters: 'San Francisco, CA',
  remote: 'No',

  // Visual Assets
  ogImage: 'https://www.augmentcode.com/api/og?title=Augment+Code+-+The+Software+Agent+Company',
  screenshot: 'https://iad.microlink.io/ZBi054vIT-Aa62fqXaZ6WoKbJMGrg9Nsuao2kmZdz2tg5egHxK48OQ9pVHI7p0pICq5kI2fY6cJTT4wrmJ7IMg.png',

  // Multi-dimensional Tags
  aiTypes: ['code-assistant'],
  markets: ['b2b'],
  industries: ['developer-tools'],

  // Business
  stage: 'Series A',
  valuation: 'Unknown',
  totalFunding: '$252M',
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'Unknown',

  // Competition
  competitors: [
    { name: 'GitHub Copilot', description: 'Most widely adopted AI coding assistant by Microsoft/OpenAI', whyTheyWin: 'Massive distribution via VS Code and GitHub' },
    { name: 'Cursor', description: 'AI-first code editor with multi-model support', whyTheyWin: 'Superior IDE experience for individual developers' },
    { name: 'Tabnine', description: 'Privacy-focused AI coding assistant since 2017', whyTheyWin: '1M+ users, supports on-premise deployment' },
  ],
  marketPosition: 'Enterprise-focused AI coding assistant with 200k-token context window and deep codebase understanding for large teams with complex repositories',
  moat: ['200K-token context window', 'Enterprise-focused deep codebase understanding', 'Eric Schmidt backing + Pure Storage CEO pedigree'],
  vsGiants: 'Copilot is general-purpose; Augment targets enterprises with massive codebases needing deep context understanding across repos',

  // AI-native analysis
  aiNativeLevel: 'D',
  aiNativeLevelDescription: 'Unknown',
  aiDesignChallenges: ['Unknown'],

  // Founders & Vision
  founders: [
    { name: 'Igor Ostrovsky', role: 'Co-Founder', background: 'Former Chief Architect at Pure Storage, software engineer at Microsoft.' },
    { name: 'Guy Gur-Ari', role: 'Co-Founder', background: 'Former AI Research Scientist at Google. Leads research efforts at Augment.' },
    { name: 'Scott Dietzen', role: 'CEO', background: '4x entrepreneur. Former CEO of Pure Storage (grew from 0 to $1B+ revenue, successful IPO). PhD in CS/ML from Carnegie Mellon.' },
  ],
  whyBuilding: 'Enterprise codebases are too large and complex for generic AI coding tools. Teams need AI that deeply understands their entire codebase.',
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
  targetAudiences: { primary: 'Enterprise engineering teams with large, complex codebases' },
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
    { title: 'Augment', url: 'https://www.augmentcode.com' },
    { title: 'Augment on startups.gallery', url: 'https://startups.gallery/companies/augment' },
  ],
};
