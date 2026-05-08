import { Company } from '../types';

export const parrot: Company = {
  id: 'parrot',
  name: 'Parrot',
  description:
    'AI-enhanced language learning app that turns short-form native videos into interactive lessons with subtitles, personalization, and AI-driven learning activities.',
  website: 'https://parrotapp.com/',
  headquarters: 'San Francisco, CA',
  remote: 'No',

  aiTypes: ['text-assistant', 'automation'],
  markets: ['b2c', 'prosumer'],
  category: 'vertical-saas' as const,
  subcategories: ['education', 'consumer-ai'],
  industries: ['education'],

  stage: 'Pre-seed',
  valuation: 'Unknown',
  totalFunding: 'Not publicly disclosed',
  revenue: 'Unknown',
  growth: 'YC F25 company with thousands of active users after launching in February 2025.',
  runway: 'Unknown',
  customers: 'Language learners using mobile-first short-form video lessons.',

  competitors: [
    {
      name: 'Duolingo',
      description: 'Large-scale consumer language learning app.',
      whyTheyWin: 'Massive distribution, brand, data, and broad language coverage.',
    },
    {
      name: 'Lingopie',
      description: 'Language learning through TV shows and videos.',
      whyTheyWin: 'Strong video-learning positioning and content library.',
    },
    {
      name: 'TikTok / YouTube',
      description: 'Short-form native language content platforms.',
      whyTheyWin: 'Unmatched content supply and user habit formation.',
    },
  ],
  marketPosition: 'AI-enhanced short-form video language learning',
  moat: [
    'Consumer mobile learning loop built around native short-form videos',
    'AI-driven activities and personalization layered on real content',
    'YC-backed early team focused on comprehension-first learning',
  ],
  vsGiants:
    'Competes by making language learning feel like short-form content discovery rather than drills or flashcards.',

  aiNativeLevel: 'A',
  aiNativeLevelDescription:
    'AI is central to Parrot: the product uses AI-generated activities and personalized learning paths around native videos.',
  aiDesignChallenges: [
    'Consumer mobile habit design for language learning',
    'AI-personalized learning flows that still feel simple and playful',
    'Progress, retention, and comprehension UX for short-form content',
  ],

  founders: [
    { name: 'Erik Dahl', role: 'Founder', background: 'YC lists Erik Dahl as a Parrot founder.' },
    { name: 'Amir Hanna', role: 'Founder', background: 'YC lists Amir Hanna as a Parrot founder.' },
    { name: 'Julia Hudea', role: 'Founder', background: 'YC lists Julia Hudea as a Parrot founder.' },
  ],
  whyBuilding:
    'Parrot wants to make language learning natural and effective by combining real native videos with AI-driven learning activities.',
  beliefs: [
    'Comprehensible input can become a mainstream mobile habit',
    'Language learning should feel closer to discovery than homework',
    'AI can personalize practice around authentic content',
  ],
  greenFlags: [
    'Live YC Founding Product Designer role in San Francisco',
    'Role explicitly says first Founding Product Designer',
    'Clear consumer mobile design surface with activation, retention, and learning progress problems',
  ],
  redFlags: [
    'Early consumer product with limited public metrics',
    'Competes against entrenched language learning incumbents',
    'Consumer growth and retention expectations may be intense',
  ],

  designTeam: {
    teamSize: 'First design hire',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Learning journey design',
        'AI-driven activity flows',
        'Activation, retention, and progress loops',
      ],
    },
    evaluation: {
      level: 'medium',
      tasks: ['Learning progress validation', 'Usage and retention analysis', 'User research with learners'],
    },
    interface: {
      level: 'high',
      tasks: ['Mobile UI', 'Design system foundations', 'Interactive prototypes and high-fidelity flows'],
    },
  },
  productStage: '0→1',

  targetAudiences: {
    primary: 'Language learners',
    secondary: 'Mobile-first consumers who learn through short-form video content',
  },
  userProblems: [
    'Traditional language learning apps can feel repetitive and disconnected from real content',
    'Learners need practice that is engaging enough to become a habit',
    'Short-form content needs learning scaffolding without killing entertainment value',
  ],

  designerLinks: [],
  openRoles: [
    {
      title: 'Founding Product Designer',
      location: 'San Francisco, CA',
      type: 'full-time',
      roleFamily: 'product-design',
      roleSignal: 'founding',
      verificationStatus: 'confirmed',
      sourceType: 'yc',
      lastVerifiedAt: '2026-05-06',
      url: 'https://www.ycombinator.com/companies/parrot/jobs/DCavRV9-founding-product-designer',
      compensation: '$120K-$180K + 0.50%-2.00%',
      aboutRole:
        'Own product design for the core mobile learning experience, design system, activation, retention, and learning progress.',
      whyInteresting:
        'A true first product designer role on a consumer AI education product with mobile craft and behavior-design problems.',
    },
  ],

  cultureInsights: [
    {
      source: 'ycombinator',
      sentiment: 'positive',
      content:
        'YC role says Parrot is hiring its first Founding Product Designer to join the core team and help scale the product.',
      url: 'https://www.ycombinator.com/companies/parrot/jobs/DCavRV9-founding-product-designer',
    },
  ],

  tracking: {
    status: 'researching',
    fitScore: 7,
    whyJoin: [
      'Confirmed SF founding product design role',
      'Consumer mobile AI product with clear design leverage',
      'First designer scope includes product direction and design system',
    ],
    whyNot: [
      'Very early consumer startup risk',
      'Education apps can be difficult to monetize and retain',
      'Product quality bar depends heavily on mobile craft and learning outcomes',
    ],
    nextActions: [
      'Try the product and evaluate current mobile UX',
      'Ask how much of the role is growth/retention vs. core learning experience',
      'Prepare consumer mobile and AI personalization portfolio examples',
    ],
  },

  growthMetrics: {
    stage: 'early-growth',
    revenueGrowth: 'Unknown',
    userGrowth: 'Thousands of active users publicly cited in the YC role.',
    signals: ['YC F25', 'Launched in February 2025', 'Thousands of active users'],
    tam: 'Consumer language learning and AI education software',
    marketShare: 'Early',
    ceiling: 'High if Parrot turns short-form video learning into a durable consumer habit.',
    tailwinds: [
      'Consumer familiarity with short-form video',
      'Growing acceptance of AI-personalized learning',
      'Large global language learning market',
    ],
    headwinds: [
      'Duolingo and content platforms have massive distribution',
      'Consumer subscription retention can be hard',
      'Learning outcomes need proof beyond engagement',
    ],
    moatType: 'product-experience',
    moatStrength: 'Early; depends on retention, learning outcomes, and content/AI loop quality.',
  },

  lastUpdated: '2026-05-06',
  sources: [
    { title: 'Parrot website', url: 'https://parrotapp.com/' },
    { title: 'Parrot YC profile', url: 'https://www.ycombinator.com/companies/parrot' },
    { title: 'Founding Product Designer at Parrot', url: 'https://www.ycombinator.com/companies/parrot/jobs/DCavRV9-founding-product-designer' },
  ],
};
