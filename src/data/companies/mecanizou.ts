import { Company } from '../types';

export const mecanizou: Company = {
    id: 'mecanizou',
    name: 'Mecanizou',
    description: 'AI-powered parts sourcing and connection platform digitizing the Brazilian automotive aftermarket.',
    website: 'https://mecanizou.com',
    headquarters: 'Sao Paulo, Brazil',
    region: 'other-intl' as const,
    remote: 'Hybrid',
    aiTypes: ['automation'],
    markets: ['b2b'],
  productStage: '1→10',
  category: 'vertical-saas' as const,
    industries: ['other'],
    stage: 'Early-Stage',
    normalizedStage: 'other' as const,
  totalFunding: '$18.5M (Series A)',
    valuation: 'Unknown',
    growth: 'High (Only Brazilian Startup in Twilio Searchlight 2025)',
  competitors: [
    { name: 'RepairPal', description: 'Online auto repair marketplace connecting consumers with certified shops.', whyTheyWin: 'Strong US consumer brand and network of certified shops.' },
    { name: 'Mitchell', description: 'Auto repair estimation and parts management software.', whyTheyWin: 'Deep integration with insurance and collision repair workflows.' },
    { name: 'Solera', description: 'Global vehicle lifecycle management and data analytics platform.', whyTheyWin: 'Massive global data network and insurance integrations.' },
  ],
  moat: [
    'Deep integration with WhatsApp, the dominant communication channel in Brazil',
    'AI-powered matching of incomplete part descriptions from mechanics to correct parts',
    'Network effects from connecting thousands of repair shops and suppliers',
  ],
    aiNativeLevel: 'B',
  aiNativeLevelDescription: 'AI Native description pending.',
    founders: [
      { name: 'Ian Faria', role: 'CEO', background: 'Unknown' },
      { name: 'André Simões', role: 'CTO', background: 'Unknown' }
    ],
    whyBuilding: 'Streamlining the complex and fragmented automotive parts market by connecting shops and suppliers through AI and WhatsApp.',
    beliefs: [
            'In developing markets, familiar messengers like WhatsApp are the most powerful business tools, more than websites.',
            'Data-driven matching saves both repair shops and suppliers time and money.',
        ],
  greenFlags: [],
  redFlags: [],
    aiDesignChallenges: [
            'Designing intuitive UI/UX to display complex part specifications and quotes within WhatsApp conversations.',
            'Building a search experience that matches millions of auto parts against incomplete descriptions from mechanics.',
        ],
    userProblems: [
            'Inefficiency of repair shops having to call multiple suppliers individually to find parts.',
            'Returns and repair delays caused by ordering the wrong parts.',
        ],
    cultureInsights: [
      { source: 'careers', sentiment: 'positive', content: 'Values: Market Transformation, Hyper-local Solution. Benefits: Unicorn growth potential in Latin America\'s largest market, impact of digitally transforming a legacy industry.' }
    ],

  designTeam: {},
  designWorkType: {
    logicBehavior: { level: 'medium', tasks: ['AI parts matching logic from incomplete mechanic descriptions', 'Automated quote generation and supplier routing'] },
    evaluation: { level: 'medium', tasks: ['Parts matching accuracy metrics and feedback loops', 'Supplier response time and order fulfillment tracking'] },
    interface: { level: 'medium', tasks: ['WhatsApp-embedded conversational parts catalog UI', 'Supplier dashboard for inventory and order management'] },
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

  lastUpdated: '2026-02-09T18:12:58.320Z',
  sources: [
    { title: 'Source', url: 'https://mecanizou.com' },
  ],
};
