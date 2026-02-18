import { Company } from '../types';

export const dakota: Company = {
  id: 'dakota',
  name: 'Dakota',
  description: 'Investment sales intelligence platform providing institutional investor data, AI-powered reports, and fundraising tools for asset managers.',
  website: 'https://www.dakota.com',
  headquarters: 'Bryn Mawr, PA',
  remote: 'Hybrid',

    // OG Image
    ogImage: '/og-images/dakota-og.webp',

  category: 'vertical-saas' as const,
  aiTypes: ['data-analysis', 'search-retrieval'],
  markets: ['b2b', 'enterprise'],
  industries: ['fintech'],

  stage: 'Private (Bootstrapped/Growth)',
  valuation: 'Not publicly disclosed',
  totalFunding: 'Not publicly disclosed',
  fundingHistory: [],
  revenue: 'Not publicly disclosed',
  growth: '5,000+ marketplace customers; $40B+ raised for partners since 2006',
  runway: 'Established (operating since 2006)',
  customers: '5,000+ fundraisers and leading global investment firms',

  competitors: [
    {
      name: 'PitchBook',
      description: 'Comprehensive financial data platform for PE, VC, and M&A.',
      whyTheyWin: 'Massive dataset breadth and Morningstar backing.',
    },
    {
      name: 'Preqin',
      description: 'Alternative assets data and analytics for institutional investors.',
      whyTheyWin: 'Deep LP coverage and established brand in alternatives.',
    },
    {
      name: 'Crunchbase',
      description: 'Company information and funding data platform.',
      whyTheyWin: 'Wider startup coverage and strong public brand awareness.',
    },
  ],
  marketPosition: 'Investment sales intelligence focused on fundraising workflows',
  moat: [
    'Proprietary investor database built from 18+ years of in-house fundraising',
    'Daily-updated data from own 11-person sales team actively raising capital',
    'Deep allocator intelligence across institutional and intermediary channels',
  ],
  vsGiants: 'Differentiated by practitioner-built data — Dakota sells fundraisers and also runs its own sales team, so data quality reflects real-world usage.',

  aiNativeLevel: 'C',
  aiNativeLevelDescription: 'AI is a major feature (Joe AI Report Builder, AI Account Summaries) but the core product is the investor database and sales intelligence platform.',
  aiDesignChallenges: [
    'Designing AI report generation that surfaces actionable investor insights',
    'Balancing AI summaries with data transparency for high-stakes fundraising decisions',
    'Integrating AI recommendations into established CRM and Salesforce workflows',
  ],

  founders: [
    {
      name: 'Gui Costin',
      role: 'Founder & CEO',
      background: 'Former intermediary sales at Turner Investments and Cramer Rosenthal McGlynn. 20+ years in asset management fundraising. UVA graduate.',
    },
  ],
  whyBuilding: 'Founded in 2006 to make fundraising easier for asset managers by providing accurate, practitioner-curated investor data.',
  beliefs: [
    'The best data comes from practitioners who use it daily',
    'Fundraising should be process-driven, not relationship-dependent',
    'AI should augment, not replace, experienced sales professionals',
  ],
  greenFlags: [
    '18+ years operating and profitable without disclosed VC funding',
    '5,000+ paying customers including leading global investment firms',
    '$40B+ raised for partners — proof of real-world value',
  ],
  redFlags: [
    'Level C AI-native — AI is additive, not core',
    'Niche vertical market limits designer career growth',
    'No disclosed design leadership or dedicated product design team',
  ],

  designTeam: {
    teamSize: '~1-2 (no dedicated product designers found; Director of Visual Media + Art Director on team)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'medium',
      tasks: [
        'AI report generation logic and investor matching rules',
        'Account summary AI aggregation and ranking logic',
        'Investor recommendation algorithms and filtering',
      ],
    },
    evaluation: {
      level: 'low',
      tasks: [
        'Data accuracy verification for investor profiles',
        'AI report quality and relevance metrics',
      ],
    },
    interface: {
      level: 'high',
      tasks: [
        'Investor database search and filtering UI',
        'AI-powered report builder and account summary dashboards',
        'CRM integrations and Salesforce extension design',
      ],
    },
  },
  productStage: '10→100',

  targetAudiences: {
    primary: 'Investment sales professionals and fundraisers at asset management firms',
    secondary: 'Deal teams and investment teams sourcing private market deals',
  },
  userProblems: [
    'Fundraisers waste hours compiling investor data from multiple fragmented sources',
    'Investor data decays quickly — allocator contacts and mandates change constantly',
    'Generic databases lack the fundraiser-specific context needed for targeted outreach',
  ],

  designerLinks: [],

  openRoles: [],

  cultureInsights: [
    {
      source: 'careers',
      sentiment: 'positive',
      content: 'Long operating history since 2006 and practitioner-led positioning point to a sales-operations culture with strong domain expertise.',
      url: 'https://www.dakota.com/about-dakota',
    },
    {
      source: 'techcrunch',
      sentiment: 'neutral',
      content: 'Advisory board formation in 2025 signals an explicit push toward formalized strategic governance and product scaling.',
      url: 'https://www.businesswire.com/news/home/20250701617282/en/Dakota-Announces-Formation-of-Advisory-Board-to-Accelerate-Strategic-Growth-and-Product-Evolution',
    },
  ],

  growthMetrics: {
    stage: 'mature-growth',
    signals: [
      'Advisory board formed (Jul 2025) to accelerate product evolution',
      'Launched private fund benchmarking dataset covering 14,000+ funds',
      'AI features (Joe AI, AI Summaries) shipping in 2025-2026',
    ],
    tam: '$12B+ financial data and analytics market',
    ceiling: 'Mid-innings: expanding from sales intelligence to full investment intelligence platform',
    tailwinds: [
      'Growing private markets = more allocators and fundraisers',
      'AI adoption in financial services accelerating',
      'Consolidation trend in financial data vendors',
    ],
    headwinds: [
      'Entrenched competitors (PitchBook, Preqin) with larger datasets',
      'Niche market limits TAM ceiling',
      'Enterprise procurement cycles are slow in finance',
    ],
    moatType: 'data-flywheel',
    moatStrength: 'Moderate: own sales team generates proprietary data, but scale is limited vs larger platforms.',
  },

  tracking: {
    status: 'watching',
    fitScore: 3,
    whyJoin: [
      'Established profitable company with real revenue',
      'AI features in active development (Joe AI, AI Summaries)',
    ],
    whyNot: [
      'Level C AI-native — AI is feature, not core product',
      'No visible product design team or design leadership',
      'Niche financial vertical limits design scope and career growth',
    ],
    nextActions: [
      'Monitor if dedicated product design roles open',
      'Track AI feature expansion in 2026',
    ],
  },

  lastUpdated: '2026-02-17',
  sources: [
    { title: 'Dakota Official Website — About', url: 'https://www.dakota.com/about-dakota' },
    { title: 'Dakota Team Page', url: 'https://www.dakota.com/team' },
    { title: 'Dakota AI Features Blog (2026)', url: 'https://www.dakota.com/resources/blog/new-dakota-marketplace-features-ai-tools-that-make-fundraising-faster-in-2026' },
    { title: 'Dakota Advisory Board Announcement (BusinessWire)', url: 'https://www.businesswire.com/news/home/20250701617282/en/Dakota-Announces-Formation-of-Advisory-Board-to-Accelerate-Strategic-Growth-and-Product-Evolution' },
    { title: 'Dakota Careers — no Product Design roles found', url: 'https://www.dakota.com/team' },
    { title: 'Dakota Crunchbase Profile', url: 'https://www.crunchbase.com/organization/dakota-funds-group' },
  ],
};
