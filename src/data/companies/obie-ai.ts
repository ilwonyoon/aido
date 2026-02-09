import { Company } from '../types';

export const obieAi: Company = {
  id: 'obie-ai',
  name: 'Obie.ai',
  description: 'AI knowledge base platform that delivers answers to internal FAQs across workplace tools.',
  website: 'https://www.obie.ai',
  headquarters: 'San Francisco, CA',
  remote: 'Unknown',

  // Multi-dimensional Tags
  aiTypes: ['search-retrieval', 'automation'],
  markets: ['b2b'],
  category: 'productivity' as const,
  industries: ['productivity'],

  // Business
  stage: 'Acquired',
  valuation: 'Not publicly disclosed',
  totalFunding: '$765K',
  revenue: 'Not publicly disclosed',
  growth: 'Not publicly disclosed',
  runway: 'Not publicly disclosed',
  customers: 'Teams using Slack, Confluence, Jira, and internal knowledge bases',

  // Competition
  competitors: [
    {
      name: 'Glean',
      description: 'Enterprise search platform for workplace knowledge.',
      whyTheyWin: 'Strong enterprise distribution and AI search quality.',
    },
    {
      name: 'Guru',
      description: 'Knowledge base and internal wiki platform.',
      whyTheyWin: 'Established KB workflows and integration ecosystem.',
    },
    {
      name: 'Slab',
      description: 'Internal documentation platform for teams.',
      whyTheyWin: 'Simple documentation-first product approach.',
    },
  ],
  marketPosition: 'Embedded AI knowledge base inside daily collaboration tools.',
  moat: ['Deep integrations with collaboration tools', 'Fast internal search + Q&A workflow'],
  vsGiants: 'Differentiated by lightweight deployment inside existing workflows.',

  // AI-native analysis
  aiNativeLevel: 'C',
  aiNativeLevelDescription: 'AI augments knowledge retrieval and FAQ automation.',
  aiDesignChallenges: [
    'Ensuring high precision in internal answer retrieval',
    'Balancing automation with verification of internal knowledge',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Alex Sopinka',
      role: 'Founder & CTO',
      background: 'Co-founded Obie.ai to build an AI-first internal knowledge base.',
    },
    {
      name: 'Chris Buttenham',
      role: 'Founder',
      background: 'Co-founded Obie.ai and led product direction.',
    },
  ],
  whyBuilding: 'Make internal knowledge instantly accessible within everyday tools.',
  beliefs: ['Self-serve knowledge reduces support load', 'Teams need answers where they work'],
  greenFlags: ['Clear productivity use case'],
  redFlags: ['Acquired status reduces standalone growth'],

  // Design Opportunity
  designTeam: {
    teamSize: 'Unknown',
  },
  designWorkType: {
    logicBehavior: { level: 'medium', tasks: ['Answer ranking and confidence UX'] },
    evaluation: { level: 'medium', tasks: ['Feedback loops for answer quality'] },
    interface: { level: 'medium', tasks: ['Search and Q&A interfaces in collaboration tools'] },
  },
  productStage: '1→10',

  // User Context
  targetAudiences: {
    primary: 'Internal support and operations teams',
    secondary: 'Cross-functional knowledge workers',
  },
  userProblems: [
    'Internal FAQs are fragmented across tools and documents',
    'Employees lose time searching for accurate internal answers',
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
    whyJoin: ['Embedded AI search UX challenges'],
    whyNot: ['Acquired status'],
    nextActions: ['Confirm acquisition details and brand status'],
  },

  // Growth Metrics
  growthMetrics: {
    stage: 'early-growth',
    revenueGrowth: 'Not publicly disclosed',
    userGrowth: 'Not publicly disclosed',
    signals: ['Acquired status (Innovation Factory listing)'],
    tam: 'Large internal knowledge management market',
    marketShare: 'Not publicly disclosed',
    ceiling: 'Limited by acquisition and integration path',
    tailwinds: ['Continued interest in AI knowledge management'],
    headwinds: ['Crowded enterprise search market'],
    moatType: 'none',
    moatStrength: 'Unknown',
  },

  // Meta
  lastUpdated: '2026-02-04T19:35:00',
  sources: [
    { title: 'Source', url: 'https://innovationfactory.ca/clients/obie-ai/' },
    { title: 'Source', url: 'https://www.seedtable.com/best-ai-startups-in-north-america' }
  ],
};
