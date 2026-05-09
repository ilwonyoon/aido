import { Company } from '../types';

export const cardboard: Company = {
  id: 'cardboard',
  name: 'Cardboard',
  description: 'Agentic video editor that lives in your browser. Upload raw footage, describe your goal, and Cardboard produces a finished cut — handling multi-track timelines, shot detection, captions, voice cloning, and XML exports to Premiere/DaVinci/FCP.',
  website: 'https://www.usecardboard.com',
  screenshot: '/screenshots/cardboard-screenshot.png',
  headquarters: 'Unknown',
  remote: 'Unknown',

  ogImage: '/og-images/cardboard-og.webp',

  aiTypes: ['video-generation', 'automation'],
  markets: ['prosumer', 'smb', 'b2b'],
  category: 'creative-media' as const,
  industries: ['creative-media'],

  stage: 'Seed',
  valuation: 'Unknown',
  totalFunding: '$500K',
  fundingHistory: [
    { stage: 'Seed', amount: '$500K', date: '2026-01', leadInvestors: ['Y Combinator'] },
  ],
  revenue: 'Unknown (plans start at $60/month, Pro at $150/month)',
  growth: 'Early — highest-upvoted HN launch in YC W26 cohort; unicorns, agencies, and creators with millions of followers already using it',
  runway: 'YC-backed seed',
  customers: 'Growth/marketing teams at unicorns, media agencies, and creators with large audiences',

  growthMetrics: {
    stage: 'high-growth',
    revenueGrowth: 'Unknown (pre-series A)',
    userGrowth: 'Unknown — strong launch signal (highest HN upvotes in W26); unicorns and agencies early adopters',
    signals: [
      'Highest-upvoted HN launch in entire YC W26 cohort',
      'Unicorns, media agencies, and creators with millions of followers cited as early customers',
      'YC W26 backed with $500K',
      '$60–$150/month pricing shows early monetization',
    ],
    tam: '$10B+ video editing and production software market; broader creative AI tools market $50B+ by 2028',
    marketShare: '<0.01% of TAM — very early',
    ceiling: 'High ceiling — video content creation is exploding; every company and creator needs video',
    tailwinds: [
      'Video content demand growing across social, marketing, and internal comms',
      'AI dramatically lowering the skill barrier to professional video production',
      'Browser-native tools displacing desktop app installs',
      'Short-form video formats (Reels, TikTok, YouTube Shorts) increasing production velocity demands',
      'Enterprise marketing teams under pressure to produce more content with same headcount',
    ],
    headwinds: [
      'Runway, Descript, Adobe Premiere, and CapCut are well-funded incumbents',
      'Agentic video editing is unproven at scale — quality consistency is hard',
      'Customers may not trust AI-generated cuts without heavy human review',
      'Very competitive market; difficult to build durable moat in creative tools',
    ],
    moatType: 'switching-costs',
    moatStrength: 'Weak today — no clear data flywheel or network effect. Switching costs build as teams adopt custom workflows and templates inside Cardboard.',
  },

  competitors: [
    {
      name: 'Descript',
      description: 'Text-based video editor with AI transcription, overdub, and screen recording. Strong with podcasters and L&D teams.',
      whyTheyWin: 'Established brand, deep text-to-video workflow, strong podcast community.',
    },
    {
      name: 'Runway',
      description: 'AI video generation and editing platform. Gen-2/Gen-3 video generation, strong with creatives and film.',
      whyTheyWin: 'Powerful generative models, premium creative positioning, Series D funded at $1.5B+ valuation.',
    },
    {
      name: 'CapCut (ByteDance)',
      description: 'Consumer and SMB video editor with AI features. Dominant in creator market.',
      whyTheyWin: 'Free, mobile-first, massive ByteDance distribution via TikTok ecosystem.',
    },
    {
      name: 'Adobe Premiere Pro',
      description: 'Industry-standard professional video editor with growing AI features.',
      whyTheyWin: 'Enterprise installed base, Creative Cloud integration, professional trust.',
    },
  ],
  marketPosition: 'AI-first agentic video editor for growth/marketing teams that want finished cuts from raw footage',
  moat: [
    'Browser-native architecture — no install friction vs. Premiere/DaVinci',
    'Agentic goal-driven editing (describe intent, get result) vs. manual timeline tools',
    'Multi-export to industry formats (XML → Premiere/DaVinci/FCP) reduces switching risk',
  ],
  vsGiants: 'Agentic goal-based editing vs. Descript text-layer and Runway generation; positioned as the fastest path from raw footage to finished cut for non-editors.',

  aiNativeLevel: 'A',
  aiNativeLevelDescription: 'AI IS the product — Cardboard\'s core value is agentic editing that replaces the human editor workflow. Without AI, it is just a browser video player.',
  aiDesignChallenges: [
    'Designing the "goal input" interface — how users describe what they want vs. fine-grained timeline control',
    'Communicating AI edit quality and confidence — when to show preview vs. just ship the cut',
    'Iteration and revision UX — how users correct AI mistakes without reverting to manual editing',
    'Multi-variant generation UX (e.g., "3 variants") — surfacing differences without overwhelming',
    'Timeline affordances for agentic output — familiar enough for video editors, simpler for non-editors',
  ],

  founders: [
    {
      name: 'Ishan Sharma',
      role: 'Co-founder',
      background: '~4.5 years at HackerRank building memory-heavy, performance-critical browser apps and leading multiple 0→1 products.',
    },
    {
      name: 'Saksham Aggarwal',
      role: 'Co-founder',
      background: 'CS at BITS Pilani; co-founded and was CTO of Iterate AI (backed by Entrepreneur First); published at ACL; speaks internationally on AI evaluations.',
    },
  ],
  whyBuilding: 'Founders see video production as stuck in the paradigm of complex desktop tools designed for professional editors — Cardboard makes it feel closer to modern design/coding tools: fast, accessible, and collaborative.',
  beliefs: [
    'Video production should be as fast and iterative as writing a doc or designing in Figma',
    'Non-editors should be able to ship professional-quality video without learning Premiere Pro',
    'AI agents can replace the repetitive mechanical labor of timeline editing while preserving creative intent',
  ],
  designPhilosophy: 'Unknown',
  greenFlags: [
    'Highest HN launch upvotes in all of YC W26 — exceptional early demand signal',
    'Unicorns and large creators already using it — meaningful early adoption',
    'Browser-native removes the #1 friction point (install/update) of pro video tools',
    'Founders have complementary depth: browser perf engineering + AI research',
    'Strongest HN launches in W26 often become breakout companies',
  ],
  redFlags: [
    'Very crowded market — Runway ($1.5B+), Descript, Adobe, CapCut all well-funded',
    'AI video quality consistency is hard to maintain across diverse footage types',
    'Pre-revenue at seed; path to $10M ARR unclear',
    'No design head or design team — 2-person founding team',
    'Pricing ($60-$150/month) may be too low to build a meaningful B2B business quickly',
  ],

  designTeam: {
    teamSize: 'None — 2-person founding team (both engineers)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Agentic editing pipeline UX — goal input, variant generation, iteration flow',
        'Auto-cut logic communication — how AI selects clips, pacing, and transitions',
        'Voice cloning and audio sync interfaces',
      ],
    },
    evaluation: {
      level: 'high',
      tasks: [
        'Cut quality review — user feedback loops to improve AI edit decisions',
        'Multi-variant comparison UX',
        'Export preview and format validation flows',
      ],
    },
    interface: {
      level: 'high',
      tasks: [
        'Browser-native timeline editor — performant and intuitive for non-editors',
        'Asset upload and organization (raw footage management)',
        'Caption and B-roll overlay controls',
        'Team collaboration and sharing workflows',
      ],
    },
  },
  productStage: '0→1',

  targetAudiences: {
    primary: 'Growth and marketing teams at tech companies who need to produce video content at scale without a dedicated video editor',
    secondary: 'Creators with large audiences who produce content consistently and need faster iteration cycles',
  },
  userProblems: [
    'Marketing teams have hours of raw footage but no in-house video editor',
    'Professional video tools have steep learning curves that take months to master',
    'Desktop-install video editors create friction for collaboration and sharing',
    'Producing multiple video variants for A/B testing is extremely time-consuming manually',
    'Captions, B-roll insertion, and beat-syncing are mechanical tasks that consume disproportionate editor time',
  ],

  designerLinks: [],
  openRoles: [],
  cultureInsights: [],

  tracking: {
    status: 'watching',
    fitScore: 7,
    whyJoin: [
      'AI-native creative tool with rich design surface — agentic UX is genuinely novel territory',
      'Exceptional early demand signal (top HN launch in W26 cohort)',
      'Product stage 0→1 means founding designer would have massive scope and leverage',
      'Creative tools are inherently design-forward — design has outsized impact on product trajectory',
    ],
    whyNot: [
      'Very competitive market — risk of getting commoditized by Runway/Adobe/CapCut',
      'Pre-revenue, 2-person team — design hire likely 12+ months away',
      'AI video quality control remains a hard unsolved problem',
    ],
    nextActions: [
      'Watch for Series A — design hire will likely follow quickly given product complexity',
      'Monitor product evolution at usecardboard.com',
      'Check if HN launch comments surface any early design/UX feedback',
    ],
  },

  lastUpdated: '2026-04-29T00:00:00',
  sources: [
    { title: 'Cardboard - Y Combinator', url: 'https://www.ycombinator.com/companies/cardboard' },
    { title: 'Launch YC: Cardboard - Agentic Video Editor', url: 'https://www.ycombinator.com/launches/PM3-cardboard-agentic-video-editor' },
    { title: 'Launch HN: Cardboard (YC W26)', url: 'https://news.ycombinator.com/item?id=47170174' },
    { title: 'Cardboard website', url: 'https://www.usecardboard.com/' },
    { title: 'Cardboard - LinkedIn', url: 'https://www.linkedin.com/company/cardboardinc' },
    { title: 'Cardboard Review 2026 - OutlierKit', url: 'https://outlierkit.com/resources/cardboard-review/' },
  ],
};
