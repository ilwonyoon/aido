import { Company } from '../types';

export const nextai: Company = {
  id: 'nextai',
  name: 'NextAI',
  description: 'Customer intelligence platform that helps teams collect, structure, and activate qualitative user feedback for faster product and GTM decisions.',
  website: 'https://nextapp.co',
  headquarters: 'Amsterdam, Netherlands',
  remote: 'Unknown',

    // OG Image
    ogImage: '/og-images/nextai-og.webp',

  category: 'enterprise-ops' as const,
  aiTypes: ['automation', 'data-analysis', 'text-assistant'],
  markets: ['b2b', 'enterprise'],
  industries: ['other'],

  stage: 'Seed',
  valuation: 'Unknown',
  totalFunding: 'Unknown',
  fundingHistory: [
    {
      stage: 'Seed',
      amount: 'Undisclosed',
      date: '2024-01',
      leadInvestors: [],
    },
  ],
  revenue: 'Unknown',
  growth: 'Unknown',
  runway: 'Unknown',
  customers: 'Unknown',

  growthMetrics: {
    stage: 'early-growth',
    revenueGrowth: 'Unknown',
    userGrowth: 'Unknown',
    signals: [
      'Public product positioning around customer intelligence workflows',
      'Early-stage team profile with active product iteration',
    ],
    tam: '$30B+ customer intelligence and voice-of-customer software market',
    marketShare: 'Early stage (<0.1% estimated)',
    ceiling: 'Can expand from insight capture into decision and workflow automation',
    tailwinds: [
      'Rising demand for faster customer-feedback loops',
      'LLM-native summarization and signal extraction adoption',
    ],
    headwinds: [
      'Crowded category with incumbent analytics and feedback tools',
      'Data quality and trust requirements for automated insights',
    ],
    moatType: 'technology',
    moatStrength: 'Early: differentiation depends on insight quality and team workflow integration',
  },

  competitors: [
    {
      name: 'Sprig',
      description: 'Product insights platform combining surveys and session feedback.',
      whyTheyWin: 'Strong PM tool integrations and established GTM motion.',
    },
    {
      name: 'Gong',
      description: 'Revenue intelligence platform that structures customer conversation data.',
      whyTheyWin: 'Large enterprise footprint and robust conversation analytics.',
    },
    {
      name: 'Dovetail',
      description: 'User research repository and analysis platform.',
      whyTheyWin: 'Mature qualitative research workflows and collaboration features.',
    },
  ],
  marketPosition: 'Early-stage AI customer intelligence layer for product and GTM teams',
  moat: [
    'Workflow-centric AI summarization tuned to customer signal extraction',
    'Potential data flywheel from repeated feedback-to-decision loops',
    'Cross-functional use case spanning product, support, and GTM teams',
  ],
  vsGiants: 'Focuses on lightweight, team-level customer intelligence workflows rather than broad BI suites.',

  aiNativeLevel: 'B',
  aiNativeLevelDescription: 'AI is a core product differentiator for structuring and activating unstructured customer feedback.',
  aiDesignChallenges: [
    'Trust UX for AI-generated summaries and recommendations',
    'Signal-to-noise controls for large volumes of customer feedback',
    'Cross-team workflow handoff between research, product, and GTM',
  ],

  founders: [
    {
      name: 'Moodi Mahmoudi',
      role: 'Co-founder',
      background: 'Building AI-first customer intelligence workflows for B2B teams.',
    },
    {
      name: 'Ronny Roeller',
      role: 'Co-founder',
      background: 'Product and growth operator focused on customer signal systems.',
    },
  ],
  whyBuilding: 'Teams collect large amounts of customer feedback but struggle to turn it into clear, prioritized decisions quickly.',
  beliefs: [
    'Customer feedback should directly drive product and GTM decisions',
    'AI should reduce synthesis time while preserving evidence traceability',
    'Insight systems must be embedded in everyday team workflows',
  ],
  greenFlags: [
    'Clear wedge in customer-intelligence workflow automation',
    'Cross-functional value across product and GTM teams',
    'AI-native approach to qualitative signal extraction',
  ],
  redFlags: [
    'Limited public funding and traction transparency',
    'Crowded competitive landscape',
    'Execution risk in proving sustained insight quality',
  ],

  designTeam: {
    teamSize: 'Unknown (early-stage)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Feedback ingestion and classification logic design',
        'Recommendation confidence and explainability behaviors',
        'Workflow routing rules for customer signals',
      ],
    },
    evaluation: {
      level: 'high',
      tasks: [
        'Quality scoring for AI summaries',
        'Precision/recall monitoring of surfaced insights',
        'User trust and actionability measurement',
      ],
    },
    interface: {
      level: 'medium',
      tasks: [
        'Insight dashboards and filtering interfaces',
        'Evidence traceability views',
        'Cross-team collaboration surfaces',
      ],
    },
  },
  productStage: '0→1',

  targetAudiences: {
    primary: 'Product teams and GTM teams at B2B SaaS companies',
    secondary: 'Customer success and research operations teams',
  },
  userProblems: [
    'Customer feedback is fragmented across tools and channels',
    'Teams spend too much time manually synthesizing qualitative data',
    'Important customer signals are missed or de-prioritized',
    'Insights do not consistently translate into execution decisions',
  ],

  designerLinks: [],
  openRoles: [],
  cultureInsights: [],

  tracking: {
    status: 'watching',
    fitScore: 6,
    whyJoin: [
      'AI-heavy workflow design problems with clear product impact',
      'Early-stage scope for foundational product decisions',
      'Cross-functional domain spanning product, support, and GTM',
    ],
    whyNot: [
      'Limited public data on traction and scale',
      'Unclear current design team maturity',
      'Category competition from better-funded incumbents',
    ],
    nextActions: [
      'Track hiring page for product design roles',
      'Monitor funding/news updates for traction signals',
      'Validate product UX depth through hands-on trial if available',
    ],
  },

  lastUpdated: '2026-02-18',
  sources: [
    { title: 'NextAI website', url: 'https://nextapp.co' },
    { title: 'NextAI LinkedIn page', url: 'https://www.linkedin.com/company/next-ai/' },
    { title: 'Crunchbase search (limited public funding details)', url: 'https://www.crunchbase.com/' },
    { title: 'Sprig (competitor reference)', url: 'https://sprig.com/' },
    { title: 'Dovetail (competitor reference)', url: 'https://dovetail.com/' },
  ],
};
