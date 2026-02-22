import { Company } from '../types';

export const roadway: Company = {
  id: 'roadway',
  name: 'Roadway',
  description: 'AI-powered growth marketing platform providing cross-channel attribution and AI coworkers that help teams measure, monitor, and scale ad campaigns.',
  website: 'https://www.roadwayai.com',
  headquarters: 'San Rafael, CA',
  region: 'other-us' as const,
  remote: 'Unknown',
  ogImage: '/og-images/roadway-og.webp',

  // Multi-dimensional Tags
  aiTypes: ['data-analysis', 'automation'],
  markets: ['b2b', 'smb'],
  category: 'sales-marketing' as const,
  industries: ['sales-marketing'],

  // Business
  stage: 'Seed',
  normalizedStage: 'seed' as const,
  totalFunding: '$3.2M',
  fundingHistory: [
    {
      stage: 'Seed',
      amount: '$3.2M',
      date: '2025-06',
      leadInvestors: [],
    },
  ],
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'Clay, Notion, Decagon, Gamma, Glide, Reforge, Mobbin, Castmagic',

  // Competition
  competitors: [
    {
      name: 'Triple Whale',
      description: 'AI-powered attribution and analytics for e-commerce brands',
      whyTheyWin: 'Strong e-commerce focus with deep Shopify integration',
    },
    {
      name: 'Northbeam',
      description: 'Cross-channel marketing attribution platform',
      whyTheyWin: 'Established player with robust multi-touch attribution models',
    },
    {
      name: 'Growify',
      description: 'AI marketing analytics for ROI optimization',
      whyTheyWin: 'Comprehensive attribution tracking across 315+ data sources',
    },
  ],
  marketPosition: 'AI-first attribution platform purpose-built for SaaS growth teams',
  moat: [
    'Forward-deployed model with dedicated growth engineers per customer',
    'Custom attribution built by ex-Notion/Webflow growth leads',
    'AI coworker paradigm vs traditional dashboard tools',
  ],
  vsGiants: 'Differentiates from Google Analytics and HubSpot by offering custom attribution mapped to company-specific growth levers, not generic dashboards',

  // AI-native analysis
  aiNativeLevel: 'B',
  aiNativeLevelDescription: 'AI is the core differentiator — AI coworkers autonomously monitor campaigns 24/7, generate optimization recommendations, and automate reporting. Attribution is enhanced but not entirely dependent on AI.',
  aiDesignChallenges: [
    'AI coworker interaction design: making autonomous campaign recommendations transparent and actionable',
    'Attribution visualization: presenting complex multi-touch attribution data clearly',
    'Trust calibration: helping marketers trust AI-generated insights over their own intuition',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Tim Dalrymple',
      role: 'Co-Founder & CEO',
      background: 'Former Head of Growth Marketing at Notion and Director of Growth at Webflow. B.S. Marketing from Northern Illinois University.',
    },
    {
      name: 'Sawyer Kisken',
      role: 'Co-Founder',
      background: 'First business hire at Webflow (2019-2023). Previously investor at Housatonic Partners and M&A at Credit Suisse. B.A. from University of Chicago.',
    },
  ],
  whyBuilding: 'Tim left Notion frustrated by the chaos of growth marketing — stitching together Hex, Looker, and Tableau for attribution that never gave clear answers. Built Roadway to give every growth team expert-level attribution and AI-powered optimization.',
  beliefs: [
    'Distribution makes or breaks every startup',
    'Growth marketing expertise should be democratized, not gatekept by well-funded companies',
    'AI coworkers should augment marketers, not replace them',
  ],
  greenFlags: [
    'Founders have deep domain expertise from Notion and Webflow growth teams',
    'Already serving high-quality customers (Clay, Notion, Reforge)',
    'Backed by Neo, Precursor Ventures, and founders from Looker/Webflow/Notion',
  ],
  redFlags: [
    'Very early stage with only 6 employees at launch',
    'Competing against well-funded incumbents (HubSpot, Google Analytics)',
    'SaaS-focused positioning may limit TAM',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: '~0-1 (6 total employees, no dedicated designer found)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'AI coworker conversation flows and recommendation logic',
        'Campaign monitoring alert thresholds and escalation rules',
        'Autonomous action boundaries for AI-driven optimizations',
      ],
    },
    evaluation: {
      level: 'medium',
      tasks: [
        'Attribution model accuracy feedback loops',
        'AI recommendation quality scoring',
        'Campaign performance benchmarking dashboards',
      ],
    },
    interface: {
      level: 'high',
      tasks: [
        'Cross-channel attribution dashboards and funnels',
        'AI coworker interaction surfaces',
        'One-click connector setup and data integration flows',
      ],
    },
  },
  productStage: '0→1',

  // User Context
  targetAudiences: {
    primary: 'SaaS growth marketing teams managing multi-channel ad campaigns',
    secondary: 'Marketing agencies managing attribution for multiple clients',
  },
  userProblems: [
    'Attribution data is fragmented across Hex, Looker, Tableau with no unified view',
    'Manual campaign analysis takes 20+ hours per month',
    'Difficult to identify which channels drive quality customers vs just volume',
    'Wasted ad spend from inability to optimize campaigns in real-time',
  ],

  // Designer Links
  designerLinks: [],

  // Open Roles
  openRoles: [],

  // Culture Insights
  cultureInsights: [
    {
      source: 'linkedin',
      sentiment: 'positive',
      content: 'Small founding team (6 people) with deep growth marketing expertise from Notion and Webflow. Forward-deployed model suggests high customer intimacy.',
    },
  ],

  // Growth Metrics
  growthMetrics: {
    stage: 'early-growth',
    signals: [
      '$3.2M Seed from Neo and Precursor Ventures',
      'Marquee early customers: Clay ($3.1B valuation), Notion, Reforge',
      'Expanding from SaaS to marketing agency segment',
    ],
    tam: '$15B+ (marketing analytics and attribution market)',
    ceiling: 'Early innings: AI-native attribution is replacing legacy manual analytics tools',
    tailwinds: [
      'AI adoption in marketing accelerating rapidly',
      'Growing complexity of multi-channel attribution',
      'SaaS companies increasing growth marketing budgets',
    ],
    headwinds: [
      'Incumbents adding AI features (HubSpot, Google)',
      'Small team competing in crowded martech space',
      'Enterprise sales cycle may be long for a 6-person team',
    ],
    moatType: 'vertical-specialization',
    moatStrength: 'Moderate: deep SaaS growth marketing expertise but limited data flywheel at current scale',
  },

  // My Tracking
  tracking: {
    status: 'researching',
    fitScore: 5,
    whyJoin: [
      'Level B AI-native with interesting AI coworker design challenges',
      'Founders with elite growth marketing pedigree (Notion, Webflow)',
      'Early stage (0→1) means high design impact opportunity',
    ],
    whyNot: [
      'Very early stage — only 6 employees, no design team yet',
      'No open design roles currently',
      'Narrow SaaS growth marketing focus',
    ],
    nextActions: [
      'Monitor for Product Designer role opening',
      'Track growth trajectory after Seed round',
    ],
  },

  // Meta
  lastUpdated: '2026-02-14',
  sources: [
    { title: 'Roadway Official Website', url: 'https://www.roadwayai.com' },
    { title: 'Upstarts Media - Roadway Seed Funding', url: 'https://www.upstartsmedia.com/p/roadway-brings-ai-to-growth-marketers' },
    { title: 'Roadway Crunchbase Profile', url: 'https://www.crunchbase.com/organization/roadway-1155' },
    { title: 'Tim Dalrymple LinkedIn', url: 'https://www.linkedin.com/in/timdalrymple/' },
    { title: 'Roadway Careers (Notion) - no Product Design roles found', url: 'https://roadway.notion.site/Careers-0b3ef3911cf543328e2dbef41923a537' },
  ],
};
