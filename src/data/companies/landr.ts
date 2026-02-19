import { Company } from '../types';

export const landr: Company = {
  id: 'landr',
  name: 'LANDR',
  description:
    'AI-powered music creation platform offering mastering, distribution, plugins, collaboration, and sample libraries for musicians.',
  website: 'https://www.landr.com',
  headquarters: 'Montreal, QC, Canada',
  region: 'other-intl' as const,
  remote: 'Hybrid',

  // Multi-dimensional Tags
  aiTypes: ['audio-generation', 'automation'],
  markets: ['prosumer', 'b2c'],
  category: 'creative-media' as const,
  industries: ['creative-media'],

  // Business
  stage: 'Series B',
  normalizedStage: 'series-b' as const,
  valuation: 'Not publicly disclosed',
  totalFunding: '$32.2M',
  fundingHistory: [
    {
      stage: 'Series A',
      amount: '$6.2M',
      date: '2015-07',
      leadInvestors: ['Warner Music Group'],
    },
    {
      stage: 'Series B',
      amount: '$26M',
      date: '2019-07',
      leadInvestors: ['Sony Innovation Fund', 'Shure', 'Investissement Québec', 'Fonds de solidarité FTQ'],
    },
  ],
  revenue: 'Not publicly disclosed',
  growth: 'Not publicly disclosed',
  runway: 'Not publicly disclosed',
  customers: '6M+ artists',

  // Competition
  competitors: [
    {
      name: 'Audacity',
      description: 'Open-source audio editor used for recording and mastering.',
      whyTheyWin: 'Free, widely adopted, and strong community support.',
    },
    {
      name: 'Descript',
      description: 'Audio and video editing platform with AI-powered tools.',
      whyTheyWin: 'Broad creator workflow support beyond mastering.',
    },
    {
      name: 'Adobe Audition',
      description: 'Professional audio editing suite in the Adobe ecosystem.',
      whyTheyWin: 'Deep feature set and Creative Cloud integration.',
    },
  ],
  marketPosition: 'AI-powered creative platform for musicians that combines mastering with distribution and creator tools.',
  moat: [
    'Decade-long AI mastering engine trained on professional audio workflows',
    'Integrated distribution, samples, and plugin ecosystem for creators',
    'Large community of musicians and catalog scale for improving tools',
  ],
  vsGiants: 'Competes with major DAW and audio editing suites by bundling AI mastering, distribution, and creator services into one platform.',

  // AI-Native Level
  aiNativeLevel: 'B',
  aiNativeLevelDescription:
    'AI is central to LANDR’s mastering and creator tools, while the broader platform wraps multiple creator services around it.',
  aiDesignChallenges: [
    'Balancing pro-audio control with simplified AI-assisted workflows',
    'Helping creators trust AI mastering outcomes',
    'Designing end-to-end creative pipelines from mastering to distribution',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Pascal Pilon',
      role: 'Founder & CEO',
      background: 'Founder of LANDR and executive leading the AI music production platform.',
    },
    {
      name: 'Justin Evans',
      role: 'Co-founder',
      background: 'Co-founded LANDR (MixGenius) and led product and innovation initiatives.',
    },
    {
      name: 'Stuart Mansbridge',
      role: 'Co-founder',
      background: 'Co-founded LANDR (MixGenius) and led early music technology development.',
    },
  ],
  whyBuilding:
    'LANDR was created to make professional-quality music production and mastering accessible to independent musicians.',
  beliefs: [
    'AI can democratize professional music production',
    'Creators need integrated tools from mastering through distribution',
    'Ethical AI practices should reward musicians for their data',
  ],
  greenFlags: ['Strong brand in AI music mastering', 'Expanding creator platform beyond mastering'],
  redFlags: ['Highly competitive creator tools market', 'Trust and quality expectations from professionals'],

  // Design Opportunity
  designTeam: {
    teamSize: 'Not publicly disclosed',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'AI mastering parameter controls and presets',
        'Automation rules for release-ready audio output',
        'Workflow logic for distribution and collaboration',
      ],
    },
    evaluation: {
      level: 'medium',
      tasks: [
        'Quality scoring and comparison of mastered tracks',
        'Feedback loops for AI mastering improvements',
        'User-reported satisfaction tracking',
      ],
    },
    interface: {
      level: 'high',
      tasks: [
        'Creator dashboards for mastering and distribution',
        'Marketplace and collaboration UI',
        'Mobile-ready workflows for creators on the go',
      ],
    },
  },
  productStage: '10→100',

  // User Context
  targetAudiences: {
    primary: 'Independent musicians and producers',
    secondary: 'Small labels and creator teams',
  },
  userProblems: [
    'Professional mastering is expensive and time-consuming',
    'Creators need one place to master, distribute, and promote tracks',
    'Non-technical musicians struggle with complex audio tools',
    'Music release workflows are fragmented across multiple services',
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
    whyJoin: ['AI + creative tooling challenges', 'Opportunity to shape creator workflows'],
    whyNot: ['Competitive creator tooling market', 'Hard to differentiate against DAW incumbents'],
    nextActions: ['Monitor hiring and new product launches', 'Track post-Series B growth signals'],
  },

  // Meta
  lastUpdated: '2026-02-07T12:00:00',
  sources: [
    { title: 'Source', url: 'https://www.landr.com/about/' },
    { title: 'Source', url: 'https://www.landr.com/careers/' },
    { title: 'Source', url: 'https://techcrunch.com/2015/07/07/landr-drums-up-6-2-million-to-master-music-with-big-data/' },
    { title: 'Source', url: 'https://www.prnewswire.com/news-releases/landr-raises-26m-in-series-b-financing-to-further-develop-its-ai-powered-creative-platform-for-musicians-300885248.html' },
    { title: 'Source', url: 'https://www.landr.com/fairtradeai' },
    { title: 'Source', url: 'https://www.cnbc.com/2017/02/28/upstart-25-landr-audio.html' },
    { title: 'Source', url: 'https://www.g2.com/products/landr/competitors/alternatives' }
  ],
};
