import { Company } from '../types';

export const fireflies: Company = {
  id: 'fireflies',
  name: 'Fireflies.ai',
  description: 'AI meeting assistant that transcribes, summarizes, and automates action items from meetings across video conferencing platforms.',
  website: 'https://fireflies.ai',
  headquarters: 'San Francisco, CA',
  remote: 'Yes' as const,
  ogImage: '/og-images/fireflies-og.webp',

  aiTypes: ['conversation-ai', 'text-assistant'],
  markets: ['b2b', 'enterprise', 'smb'],
  category: 'productivity' as const,
  industries: ['productivity'],

  stage: 'Unicorn (Tender Offer)',
  valuation: '$1B+ (Jun 2025)',
  totalFunding: '$19M',
  fundingHistory: [
    { stage: 'Seed', amount: '$5M', date: '2019-12', leadInvestors: [] },
    { stage: 'Series A', amount: '$14M', date: '2021-05', leadInvestors: ['Khosla Ventures'] },
  ],
  revenue: '$10.9M ARR (2024)',
  growth: '~88% YoY ($5.8M → $10.9M)',
  runway: 'Profitable since 2023',
  customers: '20M+ users, 500K+ orgs, 75% of Fortune 500',

  competitors: [
    {
      name: 'Otter.ai',
      description: 'AI meeting transcription and notes with real-time collaboration',
      whyTheyWin: 'Strong brand recognition and transcription accuracy',
    },
    {
      name: 'Gong',
      description: 'Revenue intelligence platform with AI conversation analytics',
      whyTheyWin: 'Deep CRM integrations and enterprise sales focus',
    },
    {
      name: 'Granola',
      description: 'AI notepad for meetings with privacy-first local processing',
      whyTheyWin: 'No bot joining calls — privacy-first approach appeals to sensitive meetings',
    },
  ],
  marketPosition: 'Leading AI meeting assistant by user count (20M+), profitable unicorn',
  moat: [
    '20M+ users generating massive meeting data flywheel',
    'Profitable without primary fundraising since 2021',
    '75% Fortune 500 penetration = enterprise trust',
    '2B+ meeting minutes processed = training data advantage',
  ],
  vsGiants: 'Microsoft Copilot and Google Gemini offer native meeting AI, but Fireflies works across all platforms (Zoom, Teams, Meet, etc.) as a neutral, dedicated tool.',

  aiNativeLevel: 'B',
  aiNativeLevelDescription: 'AI is the core differentiator — transcription, summarization, and action item extraction are all AI-powered. The product enhances the proven meeting workflow with AI.',
  aiDesignChallenges: [
    'Real-time transcription accuracy UX and error correction flows',
    'AI summary quality feedback loops and user trust calibration',
    'Multi-platform bot presence design across Zoom, Teams, Meet',
  ],

  founders: [
    {
      name: 'Krish Ramineni',
      role: 'CEO & Co-founder',
      background: 'Former Microsoft PM (youngest to receive the role). UPenn and MIT. Forbes 30 Under 30.',
    },
    {
      name: 'Sam Udotong',
      role: 'CTO & Co-founder',
      background: 'MIT Aerospace Engineering. Former Lockheed Martin and Boeing intern. Met Krish at MIT hackathon.',
    },
  ],
  whyBuilding: 'Believed meetings are the largest untapped data source in organizations — wanted to make every conversation searchable and actionable.',
  beliefs: [
    'Meetings are the richest source of organizational knowledge',
    'AI should automate post-meeting busywork, not replace meetings',
    'Profitability and growth can coexist without massive fundraising',
  ],
  greenFlags: [
    'Profitable since 2023 — rare for AI startups',
    '$1B+ valuation on only $19M raised = capital-efficient',
    '8x user growth in 18 months',
    'Remote-first across 20+ countries',
  ],
  redFlags: [
    'Microsoft Copilot/Google Gemini building native meeting AI',
    'Low revenue ($10.9M) relative to user base — monetization challenge',
    'Commodity risk as transcription becomes a feature, not a product',
  ],

  designTeam: {
    teamSize: '~2-3 (1 Product Designer role open, 100 total employees)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'medium',
      tasks: [
        'AI summary generation logic and action item extraction flows',
        'Meeting bot behavior design across platforms',
        'Conversation search and retrieval UX',
      ],
    },
    evaluation: {
      level: 'medium',
      tasks: [
        'Transcription accuracy feedback mechanisms',
        'Summary quality scoring and user corrections',
        'Meeting analytics dashboard design',
      ],
    },
    interface: {
      level: 'high',
      tasks: [
        'Web and mobile meeting dashboard design',
        'Design system maintenance (Fireflies Essential Design System)',
        'Real-time meeting experience and playback UI',
      ],
    },
  },
  productStage: '1→10',

  targetAudiences: {
    primary: 'Business teams needing meeting transcription and action tracking',
    secondary: 'Enterprise sales and customer success teams',
  },
  userProblems: [
    'Manual note-taking during meetings causes missed details',
    'Action items from meetings get lost without structured follow-up',
    'Searching past meeting content is impossible without transcripts',
    'Meeting overload — too many calls, not enough time to process outcomes',
  ],

  designerLinks: [],
  openRoles: [
    {
      title: 'Product Designer',
      location: 'Remote (Manila, Lisbon, São Paulo, Buenos Aires, Jakarta, Cape Town, Budapest)',
      url: 'https://jobs.khoslaventures.com/companies/fireflies-ai/jobs/60169928-product-designer',
      level: 'Mid-Senior',
      type: 'full-time',
      aboutRole: 'Own end-to-end design initiatives from exploration through final implementation across web and mobile platforms.',
      responsibilities: [
        'Own end-to-end design projects from exploration to polished implementation',
        'Maintain Fireflies Essential Design System',
        'Use user data to identify pain points and drive design improvements',
        'Collaborate with engineering and cross-functional teams',
      ],
      requirements: [
        '3+ years product design experience',
        'Proficiency in UI design, interaction design, and copywriting',
        'Expertise with Figma (Auto-Layout, Variables, Components, Prototypes)',
        'Experience applying design systems across multiple products',
      ],
      whyInteresting: 'Rare chance to shape design at a profitable AI unicorn with 20M+ users and a small, autonomous design team.',
    },
  ],
  cultureInsights: [
    {
      source: 'glassdoor',
      sentiment: 'positive',
      rating: 4.2,
      content: 'Remote-first, async culture with zero micromanagement. Leaders trust you to own projects end-to-end. No-blame mindset for mistakes.',
      url: 'https://www.glassdoor.com/Reviews/Fireflies-CA-Reviews-E2304798.htm',
    },
    {
      source: 'glassdoor',
      sentiment: 'neutral',
      content: 'Limited career management — few 1-on-1s, conversations are deliverable-driven. Need to be self-directed to thrive.',
      url: 'https://www.glassdoor.com/Reviews/Fireflies-CA-Reviews-E2304798.htm',
    },
  ],

  growthMetrics: {
    stage: 'high-growth',
    revenueGrowth: '~88% YoY ($5.8M → $10.9M in 2024)',
    userGrowth: '8x in 18 months, 20M+ users',
    signals: [
      '$1B+ valuation via tender offer (Jun 2025)',
      'Profitable since 2023 on only $19M raised',
      '75% Fortune 500 adoption',
    ],
    tam: '$19.5B AI meeting assistant market',
    ceiling: 'Mid-innings: expanding from transcription to full meeting intelligence and workflow automation',
    tailwinds: [
      'Remote/hybrid work driving meeting volume',
      'Enterprise AI adoption accelerating',
      'Meeting fatigue creating demand for automation',
    ],
    headwinds: [
      'Microsoft Copilot native Teams integration',
      'Google Gemini in Google Meet',
      'Commoditization of transcription tech',
    ],
    moatType: 'data-flywheel',
    moatStrength: 'Strong: 2B+ meeting minutes processed, 20M+ users generating continuous training data',
  },

  tracking: {
    status: 'watching',
    fitScore: 6,
    whyJoin: [
      'Profitable AI unicorn — financial stability rare in AI startups',
      'Level B AI-native — AI is core product differentiator',
      'Small design team = high impact per designer',
      'Remote-first with global team across 20+ countries',
    ],
    whyNot: [
      'Big tech native AI meeting tools threaten core product',
      'Low revenue relative to massive user base',
      'Limited design team structure and mentorship',
    ],
    nextActions: [
      'Monitor how Fireflies differentiates against Copilot/Gemini',
      'Review product UX evolution over next quarter',
    ],
  },

  lastUpdated: '2026-02-17',
  sources: [
    { title: 'Fireflies $1B Valuation Announcement', url: 'https://fireflies.ai/blog/fireflies-1-billion-valuation/' },
    { title: 'TechCrunch - Fireflies $14M Series A', url: 'https://techcrunch.com/2021/05/24/fireflies-ai-raises-14m-for-its-meeting-transcription-and-automation-service/' },
    { title: 'Fireflies Product Designer - Khosla Ventures Job Board', url: 'https://jobs.khoslaventures.com/companies/fireflies-ai/jobs/60169928-product-designer' },
    { title: 'Glassdoor - Fireflies Reviews', url: 'https://www.glassdoor.com/Reviews/Fireflies-CA-Reviews-E2304798.htm' },
    { title: 'GetLatka - Fireflies Revenue Data', url: 'https://getlatka.com/companies/firefliesai' },
  ],
};
