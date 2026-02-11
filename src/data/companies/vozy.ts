import { Company } from '../types';

export const vozy: Company = {
    id: 'vozy',
    name: 'Vozy',
    description: 'AI voice customer service and automation platform for the Latin American market (supporting 7+ accents).',
    website: 'https://vozy.co',
    headquarters: 'Medellin, Colombia / Miami, FL',
    remote: 'Hybrid',
    aiTypes: ['automation'],
    markets: ['b2b'],
  productStage: '1→10',
  category: 'vertical-saas' as const,
    industries: ['sales-marketing'],
    stage: 'Early-Stage',
  totalFunding: '$8.1M total',
    valuation: 'Unknown',
    growth: 'High (Operating in 5+ countries)',
  competitors: [
    { name: 'Nuance', description: 'Enterprise AI-powered speech and language solutions for customer engagement.', whyTheyWin: 'Deep enterprise relationships and decades of speech recognition expertise.' },
    { name: 'Replicant', description: 'Autonomous contact center AI that resolves customer service calls.', whyTheyWin: 'Strong US enterprise contact center presence with high automation rates.' },
    { name: 'PolyAI', description: 'Conversational AI platform for customer-led voice assistants.', whyTheyWin: 'Advanced voice AI with natural conversation handling and enterprise scale.' },
  ],
  moat: [
    'Specialized understanding of 7+ Latin American Spanish accents and dialects',
    'Partnerships with AWS (GenAI Accelerator) and Twilio for regional deployment',
    'First-mover advantage in LatAm voice AI with deep cultural and linguistic localization',
  ],
    aiNativeLevel: 'B',
  aiNativeLevelDescription: 'AI Native description pending.',
    founders: [
      { name: 'Humberto Pertuz', role: 'CEO & Co-founder', background: 'Colombian tech entrepreneur, voice AI pioneer in LatAm' }
    ],
    whyBuilding: 'Revolutionizing customer experience in Latin America through AI that understands linguistic and cultural nuances.',
    beliefs: [
            'Voice AI must go beyond simply understanding speech to comprehend regional accents and emotions.',
            'Combining generative AI with existing contact centers (Twilio Flex) creates a near-human experience.',
        ],
  greenFlags: [],
  redFlags: [],
    aiDesignChallenges: [
            'Localization UX that accurately recognizes diverse Spanish dialects and accents and responds in region-appropriate tone.',
            'Real-time interaction design that detects customer emotion changes during voice conversations to escalate to agents or adjust response tone.',
        ],
    userProblems: [
            'Communication frustration from existing chatbots/voicebots failing to understand regional dialects.',
            'Long wait times and low resolution rates at Latin American customer service centers.',
        ],
    cultureInsights: [
      { source: 'careers', sentiment: 'positive', content: 'Values: Cultural Intelligence, Hyper-Localization. Benefits: Close partnerships with global tech giants like AWS and Twilio, leadership driving the LatAm AI startup scene.' }
    ],

  designTeam: {},
  designWorkType: {
    logicBehavior: { level: 'medium', tasks: ['Voice conversation flow logic with accent and dialect detection', 'Real-time emotion sensing and agent escalation decision rules'] },
    evaluation: { level: 'medium', tasks: ['Accent recognition accuracy and dialect coverage metrics', 'Customer sentiment analysis and call resolution quality scoring'] },
    interface: { level: 'medium', tasks: ['Contact center supervisor dashboard with live call monitoring', 'Voice agent configuration and dialect/accent tuning interface'] },
  },

  designerLinks: [],
  openRoles: [],

  tracking: {
    status: 'researching',
    fitScore: 5,
    whyJoin: [],
    whyNot: [],
    nextActions: [],
  },

  lastUpdated: '2026-02-09T18:12:58.352Z',
  sources: [
    { title: 'Source', url: 'https://vozy.co' },
    { title: 'Source', url: 'https://www.twilio.com/blog/vozy-lili-assist-twilio-flex' }
  ],
};
