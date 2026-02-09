import { Company } from '../types';

export const meya: Company = {
  id: 'meya',
  name: 'Meya',
  description:
    'Conversational AI platform for building and deploying customer support and workflow automation bots across messaging channels.',
  website: 'https://www.meya.ai',
  headquarters: 'Kitchener, ON, Canada',
  remote: 'Hybrid',

  // Multi-dimensional Tags
  aiTypes: ['conversation-ai', 'automation'],
  markets: ['b2b', 'enterprise'],
  category: 'developer-tools' as const,
  industries: ['developer-tools'],

  // Business
  stage: 'Seed',
  valuation: 'Not publicly disclosed',
  totalFunding: '$0.865M',
  fundingHistory: [
    {
      stage: 'Seed',
      amount: '$843K',
      date: '2017-10',
      leadInvestors: ['TMM Ventures'],
    },
    {
      stage: 'Pre-seed',
      amount: '$21.5K',
      date: '2016-02',
      leadInvestors: ['Angel investors'],
    },
  ],
  revenue: 'Not publicly disclosed',
  growth: 'Not publicly disclosed',
  runway: 'Not publicly disclosed',
  customers: '42M+ users assisted (via customer bots)',

  // Competition
  competitors: [
    {
      name: 'Ada',
      description: 'Automated customer service platform with no-code bot tooling.',
      whyTheyWin: 'Enterprise sales motion and strong automation templates.',
    },
    {
      name: 'Kore.ai',
      description: 'Enterprise conversational AI and automation platform.',
      whyTheyWin: 'Large enterprise deployments and extensive integration library.',
    },
    {
      name: 'Cognigy',
      description: 'Conversational AI automation platform for customer experience.',
      whyTheyWin: 'Mature workflow tooling and enterprise-grade governance.',
    },
  ],
  marketPosition:
    'Developer-focused conversational AI platform for building custom customer support and workflow automation bots.',
  moat: [
    'Developer-friendly tooling for complex conversational logic',
    'Multi-channel bot deployment with robust integration support',
    'Focus on custom workflows versus templated chatbots',
  ],
  vsGiants:
    'Competes with larger CX automation platforms by offering more flexible, developer-first bot workflows.',

  // AI-Native Level
  aiNativeLevel: 'B',
  aiNativeLevelDescription:
    'AI-driven conversational automation is central to the platform and customer value proposition.',
  aiDesignChallenges: [
    'Designing tooling that balances developer control with low-code simplicity',
    'Maintaining conversation quality and escalation paths for support teams',
    'Monitoring bot performance and customer satisfaction in real time',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Amanie Ismail',
      role: 'Co-founder & CEO',
      background: 'Co-founded Meya to enable businesses to build robust conversational AI experiences.',
    },
    {
      name: 'Erik Kalviainen',
      role: 'Co-founder & CTO',
      background: 'Co-founded Meya and leads the platform’s engineering and AI architecture.',
    },
  ],
  whyBuilding:
    'Meya was built to help teams create scalable, automated conversational experiences that go beyond simple chatbots.',
  beliefs: [
    'Conversational AI must integrate deeply with business workflows',
    'Developers need fine-grained control over automation logic',
    'Customer support automation should still feel human and responsive',
  ],
  greenFlags: ['Developer-first platform positioning', 'Seed funding with early traction'],
  redFlags: ['Crowded conversational AI market', 'Smaller funding scale than competitors'],

  // Design Opportunity
  designTeam: {
    teamSize: 'Not publicly disclosed',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Bot flow logic and orchestration tooling',
        'Escalation and fallback logic design',
        'Automation rule testing and debugging',
      ],
    },
    evaluation: {
      level: 'medium',
      tasks: [
        'Conversation quality metrics and analytics dashboards',
        'User feedback loops for bot improvements',
        'A/B testing for support automations',
      ],
    },
    interface: {
      level: 'medium',
      tasks: [
        'Bot builder and workflow editor UX',
        'Multi-channel deployment settings',
        'Support team monitoring and handoff UI',
      ],
    },
  },
  productStage: '1→10',

  // User Context
  targetAudiences: {
    primary: 'Customer support and product teams building automation bots',
    secondary: 'Developers integrating conversational workflows into apps',
  },
  userProblems: [
    'Support teams need scalable automation for high-volume inquiries',
    'Developers want flexible tools to build custom conversational logic',
    'Businesses struggle to maintain bot quality and escalation workflows',
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
    fitScore: 6,
    whyJoin: ['Developer-first AI tooling challenges', 'Conversational workflow design space'],
    whyNot: ['Highly competitive chatbot market', 'Limited public hiring signals'],
    nextActions: ['Monitor for product design roles', 'Track platform roadmap announcements'],
  },

  // Meta
  lastUpdated: '2026-02-07T12:00:00',
  sources: [
    { title: 'Source', url: 'https://www.meya.ai/' },
    { title: 'Source', url: 'https://www.seedtable.com/startups-meya' },
    { title: 'Source', url: 'https://golden.com/wiki/Meya-XEYNKJJ' },
    { title: 'Source', url: 'https://communitech.ca/companies/meya/' }
  ],
};
