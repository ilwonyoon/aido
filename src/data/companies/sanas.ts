import { Company } from '../types';

export const sanas: Company = {
  id: 'sanas',
  name: 'Sanas',
  description: 'Realtime speech AI platform for accent translation, language translation, speech enhancement, and noise cancellation across enterprise communication workflows.',
  website: 'https://www.sanas.ai',
  headquarters: 'Palo Alto, CA',
  remote: 'No',

  ogImage: 'https://www.sanas.ai/static-image.jpg',

  aiTypes: ['audio-generation', 'conversation-ai'],
  markets: ['enterprise', 'b2b', 'b2c'],
  category: 'vertical-saas' as const,
  subcategories: ['voice-ai'],
  industries: ['other'],

  stage: 'Growth',
  valuation: 'Unknown',
  totalFunding: '$100M+',
  revenue: '$50M ARR in 2025; target >$120M ARR by end of 2026 per job posting',
  growth: 'Grew from $16M to $50M ARR in 2025 per product design job posting.',
  runway: 'Core business profitable per job posting',
  customers: 'Fortune 100 companies and enterprise contact-center customers.',

  competitors: [
    { name: 'Krisp', description: 'AI noise cancellation and voice productivity tools.', whyTheyWin: 'Broad distribution for noise suppression.' },
    { name: 'Deepgram', description: 'Speech AI APIs for transcription and voice agents.', whyTheyWin: 'Developer API adoption and speech infrastructure focus.' },
    { name: 'ElevenLabs', description: 'Voice AI and speech generation platform.', whyTheyWin: 'Strong brand in generated voice and speech AI.' },
  ],
  marketPosition: 'Realtime speech AI for enterprise conversations, especially contact centers and customer communication.',
  moat: [
    'Realtime speech AI stack built in-house',
    'Strong ARR and profitability claims in job posting',
    'Enterprise deployment in contact center and communication workflows',
  ],
  vsGiants: 'Sanas focuses on realtime voice transformation and communication clarity rather than general-purpose voice assistants.',

  aiNativeLevel: 'A',
  aiNativeLevelDescription: 'Realtime speech AI is the product.',
  aiDesignChallenges: [
    'Making realtime voice transformation feel trustworthy and non-invasive',
    'Designing across desktop, mobile, web, and enterprise deployment surfaces',
    'Balancing B2B contact-center needs with possible B2C voice use cases',
  ],

  founders: [
    {
      name: 'Founding team (verification pending)',
      role: 'Founders',
      background: 'Sanas describes its founding team as Stanford researchers and entrepreneurs with deep industry experience.',
    },
  ],
  whyBuilding: 'Sanas aims to remove communication barriers caused by accent, background noise, and language differences.',
  beliefs: [
    'AI should enhance human communication rather than replace humans',
    'Clear speech can improve empathy, trust, and customer outcomes',
    'Realtime voice products need rigorous product craft and technical execution',
  ],
  greenFlags: [
    'Two open product design roles',
    'Strong ARR and profitability claims in official job posting',
    'Clear technical product design challenge across realtime voice AI',
  ],
  redFlags: [
    'No public compensation range found on official postings',
    'Contact-center market can raise ethical and adoption questions',
    'On-site Palo Alto role',
  ],

  designTeam: {
    teamSize: 'Hiring Product Design Lead and Product Designer; lead role includes mentoring and helping build the design team.',
  },
  designWorkType: {
    logicBehavior: { level: 'high', tasks: ['Realtime speech controls', 'Enterprise workflow behavior', 'AI tool settings'] },
    evaluation: { level: 'high', tasks: ['Usability testing', 'Speech quality feedback', 'Data-informed product decisions'] },
    interface: { level: 'high', tasks: ['Mobile apps', 'Desktop apps', 'Web apps', 'Design system'] },
  },
  productStage: '1→10',

  targetAudiences: {
    primary: 'Enterprise contact centers and customer-facing teams',
    secondary: 'Consumers and professionals using realtime speech tools',
  },
  userProblems: [
    'Accents and background noise reduce clarity in customer conversations',
    'Language barriers limit effective communication',
    'Enterprise users need speech tools that work in realtime across platforms',
  ],

  designerLinks: [],

  openRoles: [
    {
      title: 'Product Design Lead',
      location: 'Palo Alto, CA',
      type: 'full-time',
      url: 'https://ats.rippling.com/sanas/jobs/7027f127-0c86-463c-ab20-8bc95ba6ab8d',
      roleFamily: 'product-design',
      roleSignal: 'lead',
      verificationStatus: 'confirmed',
      sourceType: 'other',
      lastVerifiedAt: '2026-05-13',
      team: 'Product',
      aboutRole: 'Lead design across enterprise and consumer speech AI experiences for realtime communication tools.',
      responsibilities: [
        'Lead end-to-end design across discovery, research, prototyping, and delivery',
        'Evolve the Sanas design system and UI component library',
        'Mentor designers and contribute to hiring and onboarding',
      ],
      requirements: [
        '5+ years of product design experience',
        '1+ years leading or mentoring designers',
        'Strong interaction design, information architecture, accessibility, and research skills',
      ],
      preferred: [
        'Experience in voice/speech AI or audio-centric interfaces',
        'Motion or micro-interaction skills',
        'Familiarity with AI-assisted/vibe-coding design workflows',
      ],
      whyInteresting: 'Clear leadership scope, strong growth metrics, and rich realtime voice AI UX problems.',
    },
    {
      title: 'Product Designer',
      location: 'Palo Alto, CA',
      type: 'full-time',
      url: 'https://ats.rippling.com/sanas/jobs/6054b7a0-23a7-4f31-ae7c-34c5d1bd041c',
      roleFamily: 'product-design',
      roleSignal: 'standard',
      verificationStatus: 'confirmed',
      sourceType: 'other',
      lastVerifiedAt: '2026-05-13',
      team: 'Product',
      aboutRole: 'Design intuitive interfaces for realtime speech tools across enterprise and consumer experiences.',
      responsibilities: [
        'Own design from discovery to high-fidelity design and delivery',
        'Partner with product managers and engineers on strategy and success metrics',
        'Contribute to design system and research practices',
      ],
      requirements: [
        '2+ years of product design experience',
        'Strong Figma and component library skills',
        'Ability to leverage AI tools in research synthesis, ideation, and prototyping',
      ],
      whyInteresting: 'Good option if the lead role feels too senior or compensation for lead role is unclear.',
    },
  ],

  cultureInsights: [],

  tracking: {
    status: 'researching',
    fitScore: 7,
    whyJoin: [
      'Realtime voice AI is a genuine product-design frontier',
      'Strong ARR/profitability claims',
      'Lead role has mentorship and design-system ownership',
    ],
    whyNot: [
      'No public comp range',
      'On-site Palo Alto',
      'Less aligned with developer-tool/agent workflow target',
    ],
    nextActions: [
      'If applying, ask early for base range',
      'Position around voice UX, multimodal interaction, and design systems',
    ],
  },

  growthMetrics: {
    stage: 'hypergrowth',
    revenueGrowth: '$16M to $50M ARR in 2025 per job posting',
    userGrowth: '180-person team per job posting',
    signals: ['$100M+ funding', 'Core business profitable', 'Targeting >$120M ARR by end of 2026'],
    tam: 'Realtime speech AI for contact centers, enterprise communication, and voice agents',
    marketShare: 'Unknown',
    ceiling: 'Could become a major realtime speech layer for enterprise communication and voice agents.',
    tailwinds: ['Voice AI adoption', 'Global customer support demand', 'Realtime translation and speech enhancement'],
    headwinds: ['Enterprise deployment friction', 'Ethical concerns around accent translation', 'Competition in voice AI'],
    moatType: 'technology',
    moatStrength: 'Strong if realtime quality and enterprise deployments are defensible.',
  },

  lastUpdated: '2026-05-13T12:00:00',
  sources: [
    { title: 'Sanas careers', url: 'https://www.sanas.ai/careers' },
    { title: 'Product Design Lead at Sanas', url: 'https://ats.rippling.com/sanas/jobs/7027f127-0c86-463c-ab20-8bc95ba6ab8d' },
    { title: 'Product Designer at Sanas', url: 'https://ats.rippling.com/sanas/jobs/6054b7a0-23a7-4f31-ae7c-34c5d1bd041c' },
  ],
};
