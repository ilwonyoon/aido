import { Company } from '../types';

export const mageLegal: Company = {
  id: 'mage-legal',
  name: 'Mage Legal',
  description:
    'AI-native legal diligence platform building trusted AI systems for M&A, private equity, and corporate legal teams working on live deals.',
  website: 'https://www.magelegal.com/',
  headquarters: 'San Francisco, CA',
  remote: 'No',

  aiTypes: ['automation', 'text-assistant'],
  markets: ['b2b', 'enterprise'],
  category: 'vertical-saas' as const,
  subcategories: ['legal'],
  industries: ['legal'],

  stage: 'Pre-seed',
  valuation: 'Unknown',
  totalFunding: 'Not publicly disclosed',
  revenue: 'Unknown',
  growth: 'YC S24 company with a live Founding Designer role.',
  runway: 'Unknown',
  customers: 'Law firms, private equity teams, and corporate legal teams doing diligence on live deals.',

  competitors: [
    {
      name: 'Harvey',
      description: 'AI platform for legal professionals.',
      whyTheyWin: 'Strong brand, funding, and enterprise legal distribution.',
    },
    {
      name: 'Legora',
      description: 'Collaborative AI workspace for lawyers.',
      whyTheyWin: 'Strong law-firm adoption and polished legal workflow product.',
    },
    {
      name: 'Hebbia',
      description: 'AI document analysis platform used in financial and legal diligence.',
      whyTheyWin: 'Deep document analysis capabilities and institutional customer traction.',
    },
  ],
  marketPosition: 'AI legal diligence for M&A, PE, and corporate legal workflows',
  moat: [
    'Focused legal diligence workflows for high-stakes deal work',
    'Trust and credibility requirements embedded into product and GTM surfaces',
    'YC-backed early team in a fast-moving legal AI market',
  ],
  vsGiants:
    'Competes by focusing on automatic legal diligence workflows rather than broad legal AI assistance.',

  aiNativeLevel: 'A',
  aiNativeLevelDescription:
    'AI is central to Mage Legal: the company is building AI systems attorneys can trust during live diligence workflows.',
  aiDesignChallenges: [
    'Trust design for AI outputs used in high-stakes legal diligence',
    'Product-adjacent demos and onboarding that communicate rigor and credibility',
    'Complex legal workflow previews for sophisticated buyers',
  ],

  founders: [
    {
      name: 'Raffi Isanians',
      role: 'Founder',
      background: 'Founder of Mage Legal; YC profile lists him as the active founder.',
    },
  ],
  whyBuilding:
    'Mage Legal wants to make legal diligence faster and more reliable by building AI systems attorneys can trust on live deals.',
  beliefs: [
    'Legal AI needs trust and rigor before adoption',
    'Design should make sophisticated legal buyers understand and trust the product quickly',
    'Early GTM and product-adjacent surfaces can shape buyer confidence',
  ],
  greenFlags: [
    'Live YC Founding Designer role in San Francisco',
    'First design hire scope across UX, product-adjacent workflows, demos, onboarding, and brand system',
    'Strong AI-native legal diligence design problems around trust and credibility',
  ],
  redFlags: [
    'Role is product-adjacent and GTM-heavy, not pure core-product design',
    'Very small team with limited public metrics',
    'Legal AI market is crowded and requires high trust',
  ],

  designTeam: {
    teamSize: 'First design hire',
  },
  designWorkType: {
    logicBehavior: {
      level: 'medium',
      tasks: [
        'Onboarding and workflow previews for legal diligence',
        'Product demo flows that explain AI-supported diligence',
        'Trust-building interactions for AI legal workflows',
      ],
    },
    evaluation: {
      level: 'high',
      tasks: [
        'Credibility and conversion signals for legal and PE buyers',
        'Clarity of product-adjacent workflows',
        'Trust and rigor in AI-driven legal diligence communication',
      ],
    },
    interface: {
      level: 'high',
      tasks: [
        'Marketing pages and landing pages',
        'Product-adjacent demos, onboarding flows, and workflow previews',
        'Brand identity and design system foundations',
      ],
    },
  },
  productStage: '0→1',

  targetAudiences: {
    primary: 'M&A, private equity, and corporate legal teams',
    secondary: 'Law firms and deal teams evaluating AI diligence tools',
  },
  userProblems: [
    'Legal diligence is slow, document-heavy, and high-stakes',
    'Sophisticated legal buyers need to trust AI before using it on live deals',
    'Early-stage legal AI products need clear demos and credible onboarding',
  ],

  designerLinks: [],
  openRoles: [
    {
      title: 'Founding Designer',
      location: 'San Francisco, CA',
      type: 'full-time',
      roleFamily: 'other-design',
      roleSignal: 'founding',
      verificationStatus: 'confirmed',
      sourceType: 'yc',
      lastVerifiedAt: '2026-05-06',
      url: 'https://www.ycombinator.com/companies/mage-legal/jobs/HQwuocB-founding-designer',
      compensation: '$80K-$130K + 1.50%',
      aboutRole:
        'Own visual design and UX across marketing surfaces, demos, onboarding flows, workflow previews, and product-adjacent experiences.',
      whyInteresting:
        'Not a pure product-design role, but a true first-design-hire opportunity in AI legal diligence with trust-heavy UX problems.',
    },
  ],

  cultureInsights: [
    {
      source: 'ycombinator',
      sentiment: 'neutral',
      content: 'Role is in person in San Francisco and emphasizes rapid iteration with the CEO and engineering.',
      url: 'https://www.ycombinator.com/companies/mage-legal/jobs/HQwuocB-founding-designer',
    },
  ],

  tracking: {
    status: 'researching',
    fitScore: 6,
    whyJoin: [
      'Confirmed first design hire in SF',
      'AI-native legal diligence category has strong trust and clarity problems',
      'Very high ownership over visual system and buyer-facing product experience',
    ],
    whyNot: [
      'Scope is GTM/product-adjacent rather than core product-only',
      'Very small team and limited public traction data',
      'Lower cash compensation than many SF product design roles',
    ],
    nextActions: [
      'Clarify how much work is core product vs. marketing and demos',
      'Review current product demo if available',
      'Prepare trust-heavy B2B design examples for outreach',
    ],
  },

  growthMetrics: {
    stage: 'early-growth',
    revenueGrowth: 'Unknown',
    userGrowth: 'Unknown',
    signals: [
      'YC S24 company',
      'Live Founding Designer role on YC',
      'Role describes adoption accelerating inside law firms and funds',
    ],
    tam: 'Legal AI, diligence automation, and M&A workflow software market',
    marketShare: 'Early',
    ceiling: 'High if Mage Legal becomes a trusted diligence workflow layer for deal teams.',
    tailwinds: [
      'Legal teams are actively testing AI for document-heavy work',
      'M&A and PE diligence has high willingness to pay for speed and accuracy',
      'Trust-focused product design can differentiate legal AI tools',
    ],
    headwinds: [
      'Legal buyers have high accuracy and confidentiality requirements',
      'Large legal AI incumbents are well funded',
      'Early GTM may depend heavily on founder-led sales',
    ],
    moatType: 'vertical-specialization',
    moatStrength: 'Early; depends on legal workflow depth and trust with deal teams.',
  },

  lastUpdated: '2026-05-06',
  sources: [
    { title: 'Mage Legal Website', url: 'https://www.magelegal.com/' },
    { title: 'Mage Legal YC Profile', url: 'https://www.ycombinator.com/companies/mage-legal' },
    { title: 'Founding Designer at Mage Legal', url: 'https://www.ycombinator.com/companies/mage-legal/jobs/HQwuocB-founding-designer' },
  ],
};
