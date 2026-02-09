import { Company } from '../types';

export const crowdriff: Company = {
  id: 'crowdriff',
  name: 'CrowdRiff',
  description:
    'Travel and tourism marketing platform that helps destinations discover, manage, and publish visual content at scale.',
  website: 'https://crowdriff.com',
  headquarters: 'Toronto, ON, Canada',
  remote: 'No',

  // Multi-dimensional Tags
  aiTypes: ['data-analysis'],
  markets: ['b2b', 'enterprise'],
  category: 'sales-marketing' as const,
  industries: ['creative-media'],

  // Business
  stage: 'Series A',
  valuation: 'Not publicly disclosed',
  totalFunding: '$9M',
  revenue: 'Not publicly disclosed',
  growth: 'Not publicly disclosed',
  runway: 'Not publicly disclosed',
  customers: 'Tourism boards, destinations, and travel brands managing visual marketing content.',

  // Competition
  competitors: [
    {
      name: 'Lightricks',
      description: 'Creative media tools for content production and editing.',
      whyTheyWin: 'Large creator adoption and product suite.',
    },
    {
      name: 'Later',
      description: 'Social media management and content planning platform.',
      whyTheyWin: 'Broader social scheduling footprint.',
    },
    {
      name: 'Hootsuite',
      description: 'Enterprise social media management platform.',
      whyTheyWin: 'Enterprise distribution and integrations.',
    },
  ],
  marketPosition: 'Visual content marketing platform tailored to travel and tourism organizations.',
  moat: [
    'Specialized travel and tourism use cases',
    'Content rights management for UGC',
    'Destination-focused content workflows',
  ],
  vsGiants: 'Competes by focusing on travel-specific workflows rather than generic social tools.',

  // AI-Native Level
  aiNativeLevel: 'C',
  aiNativeLevelDescription:
    'AI supports content discovery and analytics but is not the sole product.',
  aiDesignChallenges: [
    'Content discovery and curation workflows',
    'Rights management for user-generated content',
    'Performance analytics for tourism campaigns',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Founding team (verification pending)',
      role: 'Co-founder',
      background: 'Founding team details not publicly confirmed in official sources.',
    },
  ],
  whyBuilding:
    'Help destinations and travel brands surface compelling visual content and turn it into bookings.',
  beliefs: [
    'Authentic visual content drives travel decisions',
    'Travel marketers need rights-safe content workflows',
    'Data-backed storytelling improves destination marketing',
  ],
  greenFlags: ['Clear niche in travel marketing', 'Recognized tourism customer base'],
  redFlags: ['Travel market cyclicality', 'Competition from general social tools'],

  // Design Opportunity
  designTeam: {
    teamSize: 'Not publicly disclosed',
  },
  designWorkType: {
    logicBehavior: {
      level: 'medium',
      tasks: [
        'Content curation rules and workflows',
        'Rights approval logic design',
        'Campaign automation setup',
      ],
    },
    evaluation: {
      level: 'medium',
      tasks: [
        'Campaign performance dashboards',
        'Content engagement analytics',
      ],
    },
    interface: {
      level: 'high',
      tasks: [
        'Content libraries and asset management UX',
        'Publishing workflows for marketers',
        'Brand content review interfaces',
      ],
    },
  },
  productStage: '10→100',

  // User Context
  targetAudiences: {
    primary: 'Destination marketing and tourism teams',
    secondary: 'Travel and hospitality brand marketers',
  },
  userProblems: [
    'Travel marketers struggle to source rights-safe visual content',
    'Campaign performance is hard to link to content impact',
    'Managing UGC rights and approvals is time-consuming',
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
    whyJoin: ['Travel content workflow challenges', 'Creative-media product design'],
    whyNot: ['Seasonal market exposure', 'Competitive social tooling'],
    nextActions: ['Track funding and product updates', 'Monitor design hiring'],
  },

  // Meta
  lastUpdated: '2026-02-06T12:00:00',
  sources: [
    { title: 'Source', url: 'https://crowdriff.com' },
    { title: 'Source', url: 'https://crowdriff.com/about' },
    { title: 'Source', url: 'https://crowdriff.com/blog/2018/03/01/crowdriff-series-a-funding' }
  ],
};
