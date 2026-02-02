import { Company } from '../types';

export const walrus: Company = {
  id: 'walrus',
  name: 'Walrus',
  description: 'Scalable, onchain storage.',
  website: 'https://www.walrus.xyz',
  headquarters: 'San Francisco, CA',
  remote: 'Yes',

  // Visual Assets
  ogImage: 'https://cdn.prod.website-files.com/6864f039b26f4afedada6bc5/68b711a06f9db1a7f43bfa3b_walrus-og.jpg',
  screenshot: '/screenshots/walrus-screenshot.png',

  // Multi-dimensional Tags
  aiTypes: ['automation'],
  markets: ['b2b'],
  industries: ['data', 'other'],

  // Business
  stage: 'Token Sale',
  valuation: '~$2B (WAL token)',
  totalFunding: '$140M',
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: '120+ projects building on Walrus',

  // Competition
  competitors: [
    { name: 'Filecoin', description: 'Decentralized storage with full replication', whyTheyWin: 'First mover, large ecosystem' },
    { name: 'Arweave', description: 'Permanent decentralized storage', whyTheyWin: 'One-time payment model' },
    { name: 'IPFS', description: 'Content-addressed P2P file protocol', whyTheyWin: 'Open protocol, massive adoption' },
  ],
  marketPosition: 'Next-gen programmable decentralized storage on Sui using novel 2D erasure coding — 100x cost reduction vs competitors',
  moat: ['Novel 2D erasure coding', 'Sui blockchain ecosystem', 'Mysten Labs backing'],
  vsGiants: 'Filecoin/Arweave use 25-100x replication overhead; Walrus achieves same reliability with 4-5x',

  // AI-native analysis
  aiNativeLevel: 'D',
  aiNativeLevelDescription: 'Unknown',
  aiDesignChallenges: ['Unknown'],

  // Founders & Vision
  founders: [
    { name: 'Evan Cheng', role: 'Co-Founder & CEO (Mysten Labs)', background: '10 yrs at Apple as LLVM tech lead. Led Novi Research at Meta. Co-authored Move language.' },
    { name: 'George Danezis', role: 'Co-Founder & Chief Scientist', background: 'Distributed systems and cryptography expert. Former Novi Research at Meta.' },
    { name: 'Sam Blackshear', role: 'Co-Founder & CTO', background: 'Programming languages expert, lead architect of Move at Meta.' },
  ],
  whyBuilding: 'Decentralized storage should be as fast and cheap as centralized solutions, not 25-100x more expensive.',
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
  targetAudiences: { primary: 'Unknown' },
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
    { title: 'Walrus', url: 'https://www.walrus.xyz' },
    { title: 'Walrus on startups.gallery', url: 'https://startups.gallery/companies/walrus' },
  ],
};
