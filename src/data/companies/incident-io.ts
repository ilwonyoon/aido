import { Company } from '../types';

export const incidentIo: Company = {
  id: 'incident-io',
  name: 'incident.io',
  description: 'Incident management platform.',
  website: 'https://incident.io',
  headquarters: 'San Francisco, CA',
  remote: 'No',

  // Visual Assets
  ogImage: 'https://incident.io/opengraph-image.png?opengraph-image.bb73b9f4.png',
  screenshot: '/screenshots/incident-io-screenshot.png',

  // Multi-dimensional Tags
  aiTypes: ['agent', 'automation'],
  markets: ['b2b'],
  industries: ['developer-tools', 'security'],

  // Business
  stage: 'Series B',
  valuation: '$400M',
  totalFunding: '$96M',
  revenue: 'Unknown',
  growth: '250,000+ incidents managed',
  runway: 'Unknown',
  customers: 'Netflix, Linear, Ramp, Etsy',

  // Competition
  competitors: [
    { name: 'PagerDuty', description: 'Market leader in alerting/on-call', whyTheyWin: 'Brand recognition, large customer base' },
    { name: 'FireHydrant', description: 'Full lifecycle incident management', whyTheyWin: 'Comprehensive feature set' },
    { name: 'Rootly', description: 'Slack-native incident management', whyTheyWin: 'Deep Slack integration' },
  ],
  marketPosition: 'Chat-native incident management with AI agents for automated response — G2 9.5 ease of use, 9.8 support quality',
  moat: ['Superior UX (G2 9.5/9.8)', 'Slack/Teams native', 'Opsgenie shutting down 2027 → customer migration opportunity'],
  vsGiants: 'PagerDuty is alerting-centric with weak incident coordination; incident.io covers full lifecycle with better UX',

  // AI-native analysis
  aiNativeLevel: 'D',
  aiNativeLevelDescription: 'Unknown',
  aiDesignChallenges: ['Unknown'],

  // Founders & Vision
  founders: [
    { name: 'Stephen Whitworth', role: 'Co-Founder & CEO', background: 'Co-founded Ravelin (fraud detection). Former staff engineer at Monzo Bank.' },
    { name: 'Pete Hamilton', role: 'Co-Founder & CTO', background: 'Former Senior Staff Engineer at Monzo. Previously at GoCardless and Amazon.' },
    { name: 'Chris Evans', role: 'Co-Founder & CPO', background: 'Former engineer at Monzo, built open-source incident tooling that inspired incident.io.' },
  ],
  whyBuilding: 'Incident management tools are outdated and painful. Modern teams deserve chat-native, AI-powered incident response.',
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
  targetAudiences: { primary: 'Engineering and SRE teams managing production incidents' },
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
    { title: 'incident.io', url: 'https://incident.io' },
    { title: 'incident.io on startups.gallery', url: 'https://startups.gallery/companies/incident-io' },
  ],
};
