import { Company } from '../types';

export const arcadeAi: Company = {
  id: 'arcade-ai',
  name: 'Arcade',
  description: 'AI product creation platform enabling anyone to design, purchase, and sell custom physical products using generative AI and a global artisan network.',
  website: 'https://arcade.ai',
  screenshot: 'https://iad.microlink.io/XEO9Xgv_8TloLjUTyzdKXmBsVwfVVREyX_kyCUXNRknd72LTfxZzp_vnh0ufq_NsyyXTCxh2wSsNeui0ZOFrRA.png',
  headquarters: 'San Francisco, CA',
  region: 'sf-bay-area' as const,
  remote: 'No',

  // OG Image
  ogImage: '/og-images/arcade-ai-og.webp',

  // Multi-dimensional Tags
  aiTypes: ['image-generation', 'automation'],
  markets: ['b2c', 'prosumer'],
  category: 'creative-media' as const,
  industries: ['creative-media'],

  // Business
  stage: 'Series A',
  normalizedStage: 'series-a' as const,
  totalFunding: '$42M',
  fundingHistory: [
    {
      stage: 'Seed',
      amount: '$5M',
      date: '2024-03',
      leadInvestors: ['Reid Hoffman', 'Offline Ventures'],
    },
    {
      stage: 'Seed',
      amount: '$5M',
      date: '2024-06',
      leadInvestors: ['Sound Ventures'],
    },
    {
      stage: 'Seed',
      amount: '$7M',
      date: '2024-09',
      leadInvestors: ['Inspired Capital', 'Torch Capital'],
    },
    {
      stage: 'Series A',
      amount: '$25M',
      date: '2025-03',
      leadInvestors: ['Canaan Partners', 'Forerunner Ventures'],
    },
  ],
  customers: '650K+ designs created in first 3 months of beta',

  // Competition
  competitors: [
    {
      name: 'Off/Script',
      description: 'Community-led AI product creation platform for fashion, accessories, and home decor',
      whyTheyWin: 'Crowdfunding model de-risks production; strong creator community',
    },
    {
      name: 'Etsy',
      description: 'Marketplace for handmade and custom goods from independent sellers',
      whyTheyWin: 'Massive existing marketplace with brand trust and millions of sellers',
    },
    {
      name: 'Minted',
      description: 'Crowdsourced design marketplace for stationery, art, and home decor',
      whyTheyWin: 'Established brand in crowdsourced design with 20K+ artist community',
    },
  ],
  marketPosition: 'First AI-to-physical product creation marketplace bridging generative AI with artisan manufacturing',
  moat: [
    'Patent-pending AI product creation platform',
    'Proprietary detection models for real-time pricing of AI-generated designs',
    'Vetted global artisan and manufacturer network',
    'Serial entrepreneur founder with deep e-commerce expertise',
  ],
  vsGiants: 'Amazon/Etsy are search-and-buy marketplaces; Arcade is create-and-buy — fundamentally different value proposition where AI generates the product itself',

  // AI-native analysis
  aiNativeLevel: 'B',
  aiNativeLevelDescription: 'AI is the core differentiator that enables product creation from text/image prompts, but the end value is physical goods manufactured by artisans. Without AI, the product creation workflow would not exist at this scale.',
  aiDesignChallenges: [
    'AI-to-physical translation: ensuring generated designs are actually manufacturable',
    'Dynamic pricing UX: communicating real-time cost of AI-modified designs transparently',
    'Trust design: bridging the gap between AI rendering and physical product expectations',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Mariam Naficy',
      role: 'Co-founder & CEO',
      background: 'Serial entrepreneur: founded Eve.com (1998, sold to LVMH), Minted (2007, grew to hundreds of millions in revenue). Stanford MBA. Board member at Victoria\'s Secret & Co.',
    },
    {
      name: 'Varun Jampani',
      role: 'Chief AI Officer (joined Oct 2025)',
      background: 'Co-creator of Stable Diffusion 3.5 and DreamBooth. Former VP of Research at Stability AI. Previously at Google and NVIDIA.',
    },
  ],
  whyBuilding: 'Naficy saw generative AI as the next evolution of the creator economy she pioneered at Minted — democratizing physical product creation so anyone can turn imagination into real goods.',
  beliefs: [
    'Anyone should be able to design and sell physical products without expertise or capital',
    'AI-generated designs must translate into real, high-quality manufactured goods',
    'The creator economy is shifting from digital content to physical product creation',
  ],
  designPhilosophy: 'AI handles the creative generation; human artisans ensure quality and craft — technology amplifies rather than replaces human skill.',
  greenFlags: [
    'Proven founder with two successful exits (Eve.com to LVMH, Minted multi-hundred million)',
    '$42M raised from tier-1 investors including Reid Hoffman and Forerunner Ventures',
    'World-class AI hire: Stable Diffusion co-creator as Chief AI Officer',
    '650K designs in 3 months shows strong product-market fit signal',
  ],
  redFlags: [
    'Physical product margins are lower than pure software',
    'On-site only (Presidio, SF) limits talent pool',
    'Supply chain complexity — dependent on global artisan network quality',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: '~2-3 (contract UX/Product Designer role was posted; no dedicated Head of Design identified)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'AI prompt-to-product creation flow design',
        'Design-to-manufacture feasibility feedback loops',
        'Creator/seller marketplace logic and pricing workflows',
      ],
    },
    evaluation: {
      level: 'medium',
      tasks: [
        'AI design quality vs physical product expectation gap',
        'Maker quality assurance and satisfaction guarantee flows',
        'Design iteration and refinement UX patterns',
      ],
    },
    interface: {
      level: 'high',
      tasks: [
        'AI design editor and customization tools',
        'Marketplace browse, collect, and purchase experience',
        'Creator dashboard and storefront tools',
      ],
    },
  },
  productStage: '1→10',

  // User Context
  targetAudiences: {
    primary: 'Consumers who want unique, personalized physical products (jewelry, home goods)',
    secondary: 'Creators and influencers building branded product lines',
  },
  userProblems: [
    'Custom product creation requires expertise, capital, and manufacturer relationships',
    'Existing marketplaces offer limited personalization — search-and-buy, not create-and-buy',
    'Translating creative vision into manufacturable physical goods is slow and expensive',
    'Influencers lack tools to easily create and sell branded merchandise',
  ],

  // Designer Links
  designerLinks: [],

  // Open Roles
  openRoles: [],

  // Culture Insights
  cultureInsights: [
    {
      source: 'glassdoor',
      sentiment: 'positive',
      content: 'Interns report loving the culture and the agency given to team members. Flexible environment with creative freedom.',
      url: 'https://www.glassdoor.com/Reviews/Arcade-Reviews-E1314992.htm',
    },
    {
      source: 'glassdoor',
      sentiment: 'negative',
      content: 'Company changes direction frequently — typical of early-stage startup finding product-market fit.',
      url: 'https://www.glassdoor.com/Reviews/Arcade-Reviews-E1314992.htm',
    },
  ],

  // Growth Metrics
  growthMetrics: {
    stage: 'early-growth',
    revenueGrowth: 'Pre-revenue or undisclosed',
    userGrowth: '650K designs in 3 months post-beta launch (Sep 2024)',
    signals: [
      '$25M Series A from Canaan Partners + Forerunner Ventures (Mar 2025)',
      'Expanding from jewelry into home goods, textiles, ceramics',
      'Hired Stable Diffusion co-creator as Chief AI Officer (Oct 2025)',
    ],
    tam: '$1.1T+ (accessories $350B + home decor $750B US market)',
    ceiling: 'Early innings: first mover in AI-to-physical product creation category',
    tailwinds: [
      'Generative AI image quality rapidly improving',
      'Creator economy expanding into physical products',
      'On-demand manufacturing reducing inventory risk',
    ],
    headwinds: [
      'Physical product margins and supply chain complexity',
      'Consumer trust gap between AI renders and physical goods',
      'Competition from established marketplaces adding AI features',
    ],
    moatType: 'platform-ecosystem',
    moatStrength: 'Moderate: proprietary pricing models + vetted maker network, but early stage',
  },

  // My Tracking
  tracking: {
    status: 'watching',
    fitScore: 5,
    whyJoin: [
      'First-mover in AI-to-physical product creation — novel design space',
      'Proven serial entrepreneur founder with deep e-commerce track record',
      'Small team (~31) with high individual impact potential',
    ],
    whyNot: [
      'No Product Designer roles currently open',
      'On-site only in Presidio, SF — no remote option',
      'E-commerce/physical goods not core AI product design territory',
    ],
    nextActions: [
      'Monitor careers page for Product Designer openings',
      'Track product expansion into new categories',
    ],
  },

  // Meta
  lastUpdated: '2026-02-22',
  sources: [
    { title: 'Arcade - Official Website', url: 'https://arcade.ai' },
    { title: 'Arcade $25M Series A Announcement', url: 'https://www.prnewswire.com/news-releases/arcade-first-ever-ai-physical-product-marketplace-raises-25m-series-a-and-expands-into-home-goods-302410603.html' },
    { title: 'TechCrunch - Arcade expands to home goods', url: 'https://techcrunch.com/2025/03/24/ai-creation-platform-arcade-expands-from-jewelry-to-home-goods/' },
    { title: 'Cerebral Valley - Arcade deep dive', url: 'https://cerebralvalley.ai/blog/arcade-a-new-kind-of-marketplace-5IpHiTxEgRyxPQtJYcKxX' },
    { title: 'Varun Jampani joins as Chief AI Officer', url: 'https://www.prnewswire.com/news-releases/arcade-welcomes-varun-jampani-as-ai-chief-to-build-the-next-era-of-ai-creation-and-commerce-302578726.html' },
    { title: 'Arcade Careers - Ashby (no Product Design roles)', url: 'https://jobs.ashbyhq.com/arcade-ai' },
  ],
};
