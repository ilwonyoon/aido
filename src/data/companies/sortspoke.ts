import { Company } from '../types';

export const sortspoke: Company = {
  id: 'sortspoke',
  name: 'SortSpoke',
  description: 'AI-powered intelligent document processing platform that automates data extraction from complex, unstructured PDFs for insurance underwriting and claims.',
  website: 'https://sortspoke.com',
  headquarters: 'Toronto, ON',
  region: 'toronto' as const,
  remote: 'Unknown',

    // OG Image
    ogImage: '/og-images/sortspoke-og.webp',

  category: 'vertical-saas' as const,
  aiTypes: ['automation', 'data-analysis'],
  markets: ['enterprise', 'b2b'],
  industries: ['fintech'],

  stage: 'Series A',

  normalizedStage: 'series-a' as const,
  valuation: 'Unknown',
  totalFunding: '$4.6M',
  fundingHistory: [
    {
      stage: 'Series A',
      amount: '$4.6M',
      date: '2022-03',
      leadInvestors: ['IDEA Fund Partners', 'SixThirty Ventures'],
    },
  ],
  revenue: '$1.6M ARR (2024)',
  growth: '164% YoY ($605K → $1.6M)',
  runway: 'Unknown',
  customers: 'RGA, SCM Insurance, TAI Reinsurance',

  competitors: [
    {
      name: 'Pibit.AI',
      description: 'AI document processing for insurance submissions.',
      whyTheyWin: 'Direct insurance IDP competitor with similar vertical focus.',
    },
    {
      name: 'Federato',
      description: 'AI-powered underwriting platform for insurance carriers.',
      whyTheyWin: 'Broader underwriting workflow beyond document extraction.',
    },
    {
      name: 'Rossum',
      description: 'AI document processing across industries.',
      whyTheyWin: 'Larger scale and cross-industry applicability.',
    },
  ],
  marketPosition: 'Insurance-specialized IDP with human-in-the-loop verification',
  moat: [
    'Deep insurance vertical specialization (P&C, life, reinsurance)',
    'Human-in-the-loop with full data provenance to source document',
    'Few-shot learning for new document types with minimal training',
  ],
  vsGiants: 'Insurance-specific workflows vs generic document AI from Google/AWS/Microsoft.',

  aiNativeLevel: 'B',
  aiNativeLevelDescription: 'AI is the core differentiator for document processing. Proprietary ML models extract data from unstructured PDFs, but the product applies AI to a proven insurance workflow rather than building frontier AI.',
  aiDesignChallenges: [
    'Human-in-the-loop review UX for AI-extracted data with source provenance',
    'Confidence visualization for extraction accuracy across document types',
    'Few-shot training interface for teaching AI new document formats',
  ],

  founders: [
    {
      name: 'Jasper Li',
      role: 'Founder & CEO',
      background: 'Former PwC Director (10 years) leading Information Strategy, Architecture and Governance. MBA from Rotman School of Management.',
    },
  ],
  whyBuilding: 'Saw at PwC that virtually every business spends enormous human capital on manual data extraction from documents. Founded SortSpoke to automate this universal pain point.',
  beliefs: [
    'AI should augment humans, not replace them',
    'Data provenance and transparency build trust in AI outputs',
    'Vertical specialization beats horizontal breadth for enterprise AI',
  ],
  greenFlags: [
    '164% YoY revenue growth ($605K → $1.6M)',
    'Working with Fortune 500 insurance carriers and RGA',
    'Clear vertical focus with deep domain expertise',
  ],
  redFlags: [
    'Small team (~15-20) with no dedicated design function',
    'Limited funding ($4.6M total) in competitive IDP market',
    'Solo founder risk',
  ],

  designTeam: {
    teamSize: '~0 (no dedicated designers; product led by Joel Charlebois, Product Team Lead)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'medium',
      tasks: [
        'Document classification and routing logic',
        'Extraction confidence thresholds and fallback rules',
        'Human review trigger conditions',
      ],
    },
    evaluation: {
      level: 'high',
      tasks: [
        'Extraction accuracy metrics and quality dashboards',
        'Human review feedback loops for model improvement',
        'Data provenance verification UX',
      ],
    },
    interface: {
      level: 'high',
      tasks: [
        'Document review and correction interface',
        'Side-by-side source document and extracted data view',
        'Submission triage and prioritization dashboard',
      ],
    },
  },
  productStage: '1→10',

  targetAudiences: {
    primary: 'Commercial P&C insurance underwriters processing submissions daily',
    secondary: 'Reinsurers and TPAs handling claims documentation',
  },
  userProblems: [
    'Manual data extraction from insurance submissions limits throughput to ~10/day per underwriter',
    'Unstructured PDFs (loss runs, SOVs, financials) resist automated processing',
    'Existing OCR tools lack accuracy for complex insurance documents',
    'No data provenance in current tools makes verification time-consuming',
  ],

  designerLinks: [],
  openRoles: [],
  cultureInsights: [],

  growthMetrics: {
    stage: 'early-growth',
    revenueGrowth: '164% YoY ($605K → $1.6M in 2024)',
    userGrowth: 'Unknown',
    signals: [
      '$4.6M Series A (March 2022)',
      '164% YoY revenue growth',
      'Fortune 500 insurance carrier as customer and investor',
    ],
    tam: '$2.3B IDP market (2024), projected $12B+ by 2030',
    marketShare: '<0.1% of IDP TAM',
    ceiling: 'Early innings: insurance IDP adoption still nascent',
    tailwinds: [
      'IDP market growing 33% CAGR',
      'Insurance industry digitization accelerating',
      'LLM advances improving document understanding',
    ],
    headwinds: [
      'Hyperscience, ABBYY, and cloud giants entering IDP',
      'Small team limits enterprise sales capacity',
      'Long insurance procurement cycles',
    ],
    moatType: 'vertical-specialization',
    moatStrength: 'Moderate: deep insurance domain expertise but limited scale.',
  },

  tracking: {
    status: 'watching',
    fitScore: 3,
    whyJoin: [
      'Ground-floor design opportunity — no existing design team',
      'AI-core product with interesting human-in-the-loop UX challenges',
    ],
    whyNot: [
      'Very small team (~15-20) with limited funding ($4.6M)',
      'No open design roles and no dedicated design function',
      'Narrow insurance vertical limits design scope',
    ],
    nextActions: [
      'Monitor for design hiring signals',
      'Track Series B fundraising progress',
    ],
  },

  lastUpdated: '2026-02-13',
  sources: [
    { title: 'SortSpoke Website', url: 'https://sortspoke.com' },
    { title: 'SortSpoke Crunchbase', url: 'https://www.crunchbase.com/organization/sortspoke' },
    { title: 'SortSpoke $4.5M Funding (Coverager)', url: 'https://coverager.com/sortspoke-raises-4-5-million/' },
    { title: 'IDEA Fund Partners — Why SortSpoke', url: 'https://ideafundpartners.medium.com/why-sortspoke-ee7d5a3bc0e5' },
    { title: 'SortSpoke Careers — no Product Design roles found', url: 'https://sortspoke.com/careers' },
  ],
};
