import { Company } from '../types';

export const interaxon: Company = {
  id: 'interaxon',
  name: 'InteraXon',
  description:
    'Neurotechnology company behind the Muse brain-sensing headband, providing meditation and sleep insights using EEG data and AI-driven neurofeedback.',
  website: 'https://choosemuse.com',
  headquarters: 'Toronto, ON, Canada',
  region: 'toronto' as const,
  remote: 'Unknown',

  // Multi-dimensional Tags
  aiTypes: ['data-analysis'],
  markets: ['b2c', 'prosumer'],
  category: 'productivity' as const,
  industries: ['healthcare'],

  // Business
  stage: 'Series C',
  normalizedStage: 'series-c' as const,
  valuation: 'Not publicly disclosed',
  totalFunding: '$21.1M',
  fundingHistory: [
    {
      stage: 'Series C',
      amount: '$9.5M',
      date: '2022-02',
    },
    {
      stage: 'Series B',
      amount: '$11.6M',
      date: '2017-04',
    },
  ],
  revenue: 'Not publicly disclosed',
  growth: 'Not publicly disclosed',
  runway: 'Not publicly disclosed',
  customers: 'Not publicly disclosed',

  // Competition
  competitors: [
    {
      name: 'Oura',
      description: 'Wearable ring that tracks sleep and recovery metrics.',
      whyTheyWin: 'Strong consumer brand and biometric data ecosystem.',
    },
    {
      name: 'Dreem',
      description: 'Sleep-focused wearable headband with EEG-based insights.',
      whyTheyWin: 'Deep sleep analytics and clinical positioning.',
    },
    {
      name: 'Emotiv',
      description: 'EEG headsets for neurotech and brain-computer interfaces.',
      whyTheyWin: 'Established EEG hardware platform and developer community.',
    },
  ],
  marketPosition: 'Consumer-friendly EEG neurofeedback platform for meditation, focus, and sleep improvement.',
  moat: [
    'Proprietary EEG signal processing and neurofeedback algorithms',
    'Strong consumer brand in mindfulness and sleep wellness',
    'Hardware + software integration for longitudinal insights',
  ],
  vsGiants:
    'Competes with general-purpose wearables by offering EEG-based neurofeedback rather than heart-rate-only metrics.',

  // AI-Native Level
  aiNativeLevel: 'B',
  aiNativeLevelDescription:
    'InteraXon’s Muse product depends on AI-driven EEG analysis and neurofeedback to deliver its core value.',
  aiDesignChallenges: [
    'Making EEG insights understandable for everyday users',
    'Personalizing neurofeedback across different usage contexts',
    'Maintaining trust in brain-sensing accuracy and privacy',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Ariel Garten',
      role: 'Co-founder',
      background: 'Neuroscientist and entrepreneur focused on brain-computer interface products.',
    },
    {
      name: 'Trevor Coleman',
      role: 'Co-founder',
      background: 'Engineer and entrepreneur with experience in consumer neurotechnology hardware.',
    },
    {
      name: 'Chris Aimone',
      role: 'Co-founder',
      background: 'Neuroscientist and product leader in brain-sensing technologies.',
    },
  ],
  whyBuilding:
    'Built to help consumers improve meditation, focus, and sleep by turning brain signals into actionable feedback.',
  beliefs: [
    'Neurofeedback can make mindfulness more accessible',
    'Real-time biometric data empowers better mental wellness habits',
    'Hardware and software must work seamlessly to build trust',
  ],
  greenFlags: ['Series C funding supports continued product investment', 'Strong brand recognition in mindfulness space'],
  redFlags: ['Hardware-dependent growth and supply chain risk', 'Consumer wellness market competition'],

  // Design Opportunity
  designTeam: {
    teamSize: 'Not publicly disclosed',
  },
  designWorkType: {
    logicBehavior: {
      level: 'medium',
      tasks: [
        'Neurofeedback signal interpretation and personalization',
        'Habit formation workflows and coaching nudges',
        'Data privacy and consent flows for biometric data',
      ],
    },
    evaluation: {
      level: 'medium',
      tasks: [
        'Sleep and meditation progress analytics',
        'Quality scoring for EEG session data',
        'Feedback loops for behavioral insights',
      ],
    },
    interface: {
      level: 'high',
      tasks: [
        'Mobile app experience for daily sessions',
        'Device setup and onboarding UX',
        'Personal dashboards for brain activity insights',
      ],
    },
  },
  productStage: '10→100',

  // User Context
  targetAudiences: {
    primary: 'Consumers seeking meditation, focus, and sleep improvement',
    secondary: 'Wellness professionals and coaches',
  },
  userProblems: [
    'Users struggle to maintain consistent meditation habits',
    'Sleep tracking often lacks actionable insights',
    'Biometric data can be confusing without clear guidance',
    'Wellness tools need to feel trustworthy and clinically grounded',
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
    whyJoin: ['Consumer neurotech product with strong brand', 'AI-driven wellness experience'],
    whyNot: ['Hardware and consumer market volatility', 'Wellness space is crowded'],
    nextActions: ['Monitor product launches and job openings', 'Track partnerships in health and wellness'],
  },

  // Meta
  lastUpdated: '2026-02-11T17:00:52Z',
  sources: [
    { title: 'Muse (InteraXon)', url: 'https://choosemuse.com/' },
    { title: 'InteraXon Series C (BusinessWire)', url: 'https://www.businesswire.com/news/home/20220215005061/en/InteraXon-Completes-9.5-Million-Series-C-Round-to-Accelerate-Muse-Direct-to-Consumer-Platform' },
    { title: 'InteraXon Series B-1 (FinSMEs)', url: 'https://www.finsmes.com/2017/04/interaxon-raises-11-6m-series-b-1-funding.html' },
    { title: 'InteraXon (Wikipedia)', url: 'https://en.wikipedia.org/wiki/InteraXon' },
    { title: 'Muse Careers', url: 'https://choosemuse.com/careers/' },
  ],
};
