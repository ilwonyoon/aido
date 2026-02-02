import { Company } from '../types';

export const freed: Company = {
  id: 'freed',
  name: 'Freed',
  description: 'AI Scribe for happier clinicians.',
  website: 'https://www.getfreed.ai',
  headquarters: 'San Francisco, CA',
  remote: 'Yes',

  // Visual Assets
  ogImage: 'https://cdn.prod.website-files.com/6626cd90a59907680f6ccb64/68d1bac5ecc2952f7db814fb_OpenGraph.jpg',
  screenshot: '/screenshots/freed-screenshot.png',

  // Multi-dimensional Tags
  aiTypes: ['llm-app', 'voice'],
  markets: ['b2b'],
  industries: ['healthcare'],

  // Business
  stage: 'Series A',
  valuation: 'Unknown',
  totalFunding: '$34M',
  revenue: '$20M+ ARR',
  growth: '4x YoY revenue growth',
  runway: 'Unknown',
  customers: '20,000 paying clinicians, 3M patient visits/month',

  // Competition
  competitors: [
    { name: 'Abridge', description: 'AI medical conversation summarization', whyTheyWin: 'Strong clinical partnerships' },
    { name: 'Suki', description: 'AI voice assistant for clinicians', whyTheyWin: 'Voice-first approach, significant funding' },
    { name: 'Doximity', description: 'Free ambient AI scribe for US physicians', whyTheyWin: 'Free tier may commoditize market' },
  ],
  marketPosition: 'Fastest-growing AI medical scribe — generates clinical notes within 60s, saves clinicians 2-3 hours daily',
  moat: ['20K paying clinicians', '4x YoY growth', 'Sequoia backing', '60-second note generation'],
  vsGiants: 'Doximity offers free scribe but lacks depth; Freed is purpose-built with superior clinical accuracy',

  // AI-native analysis
  aiNativeLevel: 'D',
  aiNativeLevelDescription: 'Unknown',
  aiDesignChallenges: ['Unknown'],

  // Founders & Vision
  founders: [
    { name: 'Erez Druk', role: 'Co-Founder & CEO', background: 'Former Meta engineer. Berklee music scholarship at 10. Top of class at Technion. Wife is a clinician.' },
    { name: 'Andrey Bannikov', role: 'Co-Founder & CTO', background: 'Former Meta engineer. Met Erez on his first day at Facebook. Long partnership in tech.' },
  ],
  whyBuilding: 'Clinicians spend hours on documentation instead of patients. Founded because co-founder\'s wife (Dr. Gabi Meckler) suffered this burden daily.',
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
  targetAudiences: { primary: 'Clinicians and healthcare providers burdened by documentation' },
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
    { title: 'Freed', url: 'https://www.getfreed.ai' },
    { title: 'Freed on startups.gallery', url: 'https://startups.gallery/companies/freed' },
  ],
};
