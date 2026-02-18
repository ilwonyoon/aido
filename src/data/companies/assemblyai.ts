import { Company } from '../types';

export const assemblyai: Company = {
  id: 'assemblyai',
  name: 'AssemblyAI',
  description: 'Speech AI platform providing state-of-the-art transcription, speech understanding, and audio intelligence APIs for developers and enterprises.',
  website: 'https://www.assemblyai.com',
  headquarters: 'San Francisco, CA (Remote-first)',
  remote: 'Yes',

    // OG Image
    ogImage: '/og-images/assemblyai-og.webp',

  // Category
  category: 'developer-tools' as const,

  // Multi-dimensional Tags
  aiTypes: ['ai-infrastructure', 'conversation-ai'],
  markets: ['b2b', 'enterprise'],
  industries: ['developer-tools'],

  // Business
  stage: 'Series C',
  valuation: '~$385M',
  totalFunding: '$115M',
  fundingHistory: [
    { stage: 'Seed', amount: '$7M', date: '2019-01', leadInvestors: [] },
    { stage: 'Series A', amount: '$28M', date: '2021-05', leadInvestors: ['Accel'] },
    { stage: 'Series B', amount: '$30M', date: '2022-07', leadInvestors: ['Insight Partners'] },
    { stage: 'Series C', amount: '$50M', date: '2023-12', leadInvestors: ['Accel'] },
  ],
  revenue: '$40M+ ARR (Jan 2026)',
  growth: '~4x YoY ($10.4M 2024 → $40M+ 2026)',
  runway: '24+ months',
  customers: 'Thousands of enterprise customers, 200K+ developers',

  // Competition
  competitors: [
    {
      name: 'Deepgram',
      description: 'Enterprise speech-to-text API with low-latency streaming and on-prem deployment.',
      whyTheyWin: 'Faster inference (40x), lower WER, more affordable pricing at scale.',
    },
    {
      name: 'OpenAI Whisper',
      description: 'Open-source speech recognition model with broad language support.',
      whyTheyWin: 'Free and open-source, massive community, backed by OpenAI ecosystem.',
    },
    {
      name: 'Google Cloud Speech-to-Text',
      description: 'Enterprise speech-to-text from Google Cloud with deep integrations.',
      whyTheyWin: 'Google ecosystem lock-in, massive scale, multi-modal capabilities.',
    },
  ],
  marketPosition: 'Leading developer-first Speech AI API with best-in-class accuracy and built-in audio intelligence features.',
  moat: [
    'Developer-first API design with lowest integration friction',
    'Built-in audio intelligence (sentiment, topics, PII detection) included free',
    'Proprietary speech models trained on massive datasets',
    'Strong YC network and developer community',
  ],
  vsGiants: 'Outperforms Google/AWS on accuracy and developer experience; bundles intelligence features others charge extra for.',

  // AI-Native Level
  aiNativeLevel: 'A',
  aiNativeLevelDescription: 'AssemblyAI builds proprietary Speech AI models from scratch — the AI models ARE the product. Transcription, understanding, and audio intelligence are all AI-first.',
  aiDesignChallenges: [
    'API documentation UX: making complex AI capabilities intuitive for developers',
    'Real-time streaming transcription UI for debugging and monitoring',
    'Confidence visualization: communicating transcription accuracy and uncertainty',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Dylan Fox',
      role: 'Founder & CEO',
      background: 'Former Senior ML Engineer at Cisco. Self-taught programmer, GWU Business Administration. Y Combinator alum.',
    },
  ],
  whyBuilding: 'Believed speech data was massively underutilized and existing speech-to-text solutions were too inaccurate and hard to use for developers.',
  beliefs: [
    'Speech AI should be accessible via simple APIs, not complex infra',
    'Accuracy is the most important metric — everything else follows',
    'Developer experience is a competitive moat',
  ],
  greenFlags: [
    '$40M+ ARR with ~4x growth — strong product-market fit',
    'Solo founder still leading after 9 years — rare dedication',
    'YC-backed with tier-1 investors (Accel, Insight Partners)',
    'Remote-first culture enables global talent access',
  ],
  redFlags: [
    'Glassdoor 3.3/5 with reports of toxic culture and leadership issues',
    'Small team (~60 employees) competing against Google/AWS/OpenAI',
    'Commoditization risk as Whisper is free and open-source',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: '~2-3 (Design Lead role previously posted, Rodney Manabat identified on LinkedIn)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'medium',
      tasks: [
        'API playground and testing workflow design',
        'Real-time streaming transcription interaction patterns',
        'Audio intelligence feature configuration flows',
      ],
    },
    evaluation: {
      level: 'medium',
      tasks: [
        'Transcription accuracy metrics dashboards',
        'Developer usage analytics and billing clarity',
        'Model performance comparison tooling',
      ],
    },
    interface: {
      level: 'high',
      tasks: [
        'Developer console and API documentation UX',
        'Dashboard for usage monitoring and billing',
        'Marketing website and developer onboarding',
      ],
    },
  },
  productStage: '1→10',

  // Product & User Context
  targetAudiences: {
    primary: 'Developers and engineering teams building voice-powered applications',
    secondary: 'Enterprise product teams needing audio intelligence at scale',
  },
  userProblems: [
    'Existing speech-to-text APIs are inaccurate and require heavy post-processing',
    'Audio intelligence features (sentiment, topics, PII) require separate vendors',
    'Real-time streaming transcription is hard to implement reliably',
    'Enterprise compliance needs (PII redaction) are not built-in',
  ],

  // Designer Links
  designerLinks: [],

  // Open Roles
  openRoles: [],

  // Culture Insights
  cultureInsights: [
    {
      source: 'glassdoor',
      sentiment: 'negative',
      rating: 3.3,
      content: 'Mixed reviews: praised for smart people and good pay, but multiple reports of toxic top-down culture and lack of psychological safety.',
      url: 'https://www.glassdoor.com/Reviews/AssemblyAI-Reviews-E4953587.htm',
    },
    {
      source: 'glassdoor',
      sentiment: 'positive',
      content: 'Remote-first company with fantastic support and camaraderie. Great work-life balance.',
      url: 'https://www.glassdoor.com/Reviews/Employee-Review-AssemblyAI-RVW79322663.htm',
    },
  ],

  // Growth Metrics
  growthMetrics: {
    stage: 'high-growth',
    revenueGrowth: '~4x YoY ($10.4M 2024 → $40M+ Jan 2026)',
    signals: [
      '$50M Series C led by Accel (Dec 2023)',
      '200K+ developers on platform',
      '4x revenue growth in ~2 years',
    ],
    tam: '$10B+ (Speech AI and voice data intelligence market)',
    ceiling: 'Mid innings: speech AI adoption accelerating but commoditization pressures rising',
    tailwinds: [
      'Voice data growing exponentially (meetings, calls, podcasts)',
      'Enterprise demand for audio compliance and intelligence',
      'Multimodal AI trend requires speech capabilities',
    ],
    headwinds: [
      'OpenAI Whisper is free and improving rapidly',
      'Google/AWS bundling speech-to-text with cloud services',
      'Price pressure from Deepgram and Rev.ai',
    ],
    moatType: 'technology',
    moatStrength: 'Moderate: proprietary models with high accuracy, but open-source alternatives closing gap',
  },

  // Tracking
  tracking: {
    status: 'watching',
    fitScore: 5,
    whyJoin: [
      'Level A AI-native: building speech AI models from scratch',
      'Remote-first with strong revenue growth ($40M+ ARR)',
      'Developer tools = high design impact on API/console UX',
    ],
    whyNot: [
      'Small design team (~2-3), may lack design leadership maturity',
      'Glassdoor culture concerns (3.3/5)',
      'Commoditization risk from Whisper and big cloud providers',
    ],
    nextActions: [
      'Monitor for Product Designer openings',
      'Track culture improvements via Glassdoor updates',
    ],
  },

  // Meta
  lastUpdated: '2026-02-17',
  sources: [
    { title: 'AssemblyAI Official Website', url: 'https://www.assemblyai.com' },
    { title: 'AssemblyAI Series C - TechCrunch', url: 'https://techcrunch.com/2023/12/04/assemblyai-nabs-50m-to-build-and-serve-ai-speech-models/' },
    { title: 'AssemblyAI Revenue Data - Latka', url: 'https://getlatka.com/companies/assemblyai' },
    { title: 'AssemblyAI Glassdoor Reviews', url: 'https://www.glassdoor.com/Reviews/AssemblyAI-Reviews-E4953587.htm' },
    { title: 'AssemblyAI Careers - No Product Design roles', url: 'https://www.assemblyai.com/careers' },
  ],
};
