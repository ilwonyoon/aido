import { Company } from '../types';

export const klue: Company = {
  id: 'klue',
  name: 'Klue',
  description: 'AI-powered competitive enablement platform for sales and product teams.',
  website: 'https://klue.com',
  headquarters: 'Vancouver, BC, Canada',
  region: 'other-intl' as const,
  remote: 'Unknown',

  // Multi-dimensional Tags
  aiTypes: ['search-retrieval', 'data-analysis'],
  markets: ['b2b'],
  category: 'sales-marketing' as const,
  industries: ['sales-marketing'],

  // Business
  stage: 'Private',
  normalizedStage: 'growth' as const,
  valuation: 'Not publicly disclosed',
  totalFunding: '$83.0M',
  revenue: 'Not publicly disclosed',
  growth: 'Not publicly disclosed',
  runway: 'Not publicly disclosed',
  customers: 'Revenue teams and product marketers tracking competitive intelligence',

  // Competition
  competitors: [
    {
      name: 'Crayon',
      description: 'Competitive intelligence platform for sales and marketing teams.',
      whyTheyWin: 'Broad competitive content automation and integrations.',
    },
    {
      name: 'Kompyte',
      description: 'Competitive intelligence and market monitoring platform.',
      whyTheyWin: 'Established enterprise customer base.',
    },
    {
      name: 'Similarweb',
      description: 'Market intelligence and digital competitive analytics.',
      whyTheyWin: 'Large dataset and market analytics depth.',
    },
  ],
  marketPosition: 'AI-driven competitive enablement for GTM teams.',
  moat: ['AI-driven competitive insights workflow', 'Sales enablement integrations'],
  vsGiants: 'Differentiates with AI surfacing of competitive insights for frontline teams.',

  // AI-native analysis
  aiNativeLevel: 'C',
  aiNativeLevelDescription: 'AI supports competitive insight extraction and automation.',
  aiDesignChallenges: [
    'Designing trustworthy competitive intelligence workflows',
    'Balancing automation with human review of insights',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Sarathy Naicker',
      role: 'Founder & CEO',
      background: 'Founded Klue to improve competitive enablement for revenue teams.',
    },
    {
      name: 'Jason Smith',
      role: 'Co-founder',
      background: 'Co-founded Klue and helped build the competitive intelligence platform.',
    },
  ],
  whyBuilding: 'Give GTM teams real-time competitive intelligence that drives revenue.',
  beliefs: ['Competitive insights should be automated and accessible', 'Sales teams need battlecards that stay current'],
  greenFlags: ['Clear sales enablement niche', 'Strong funding base'],
  redFlags: ['Competitive enablement is crowded'],

  // Design Opportunity
  designTeam: {
    teamSize: 'Unknown',
  },
  designWorkType: {
    logicBehavior: { level: 'medium', tasks: ['Insight extraction and battlecard logic UX'] },
    evaluation: { level: 'medium', tasks: ['Signal quality and alert workflows'] },
    interface: { level: 'medium', tasks: ['Competitive dashboards and enablement UI'] },
  },
  productStage: '10→100',

  // User Context
  targetAudiences: {
    primary: 'Product marketing and sales enablement teams',
    secondary: 'Revenue operations leaders',
  },
  userProblems: [
    'Competitive intel is fragmented and outdated',
    'Revenue teams need battlecards that stay current',
  ],

  // Designer Links
  designerLinks: [],

  // Open Roles
  openRoles: [],

  cultureInsights: [],

  // My Tracking
  tracking: {
    status: 'researching',
    fitScore: 5,
    whyJoin: ['Competitive intelligence workflow design challenges'],
    whyNot: ['Category crowded with incumbents'],
    nextActions: ['Track design hiring and GTM product expansion'],
  },

  // Growth Metrics
  growthMetrics: {
    stage: 'high-growth',
    revenueGrowth: 'Not publicly disclosed',
    userGrowth: 'Not publicly disclosed',
    signals: ['$83.0M total funding (Seedtable)'],
    tam: 'Competitive intelligence and enablement software market',
    marketShare: 'Not publicly disclosed',
    ceiling: 'Potential to become core CI layer for GTM teams',
    tailwinds: ['Increased GTM competition and need for enablement'],
    headwinds: ['Incumbents bundling CI features'],
    moatType: 'platform-ecosystem',
    moatStrength: 'Moderate',
  },

  // Meta
  lastUpdated: '2026-02-04T20:10:00',
  sources: [
    { title: 'Source', url: 'https://klue.com' },
    { title: 'Source', url: 'https://www.seedtable.com/best-ai-startups-in-north-america' }
  ],
};
