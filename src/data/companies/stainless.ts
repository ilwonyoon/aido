import { Company } from '../types';

export const stainless: Company = {
  id: 'stainless',
  name: 'Stainless',
  description:
    'API platform that generates high-quality SDKs and developer experiences for REST APIs, used by companies including OpenAI, Anthropic, and Cloudflare.',
  website: 'https://www.stainless.com',
  headquarters: 'New York, NY',
  remote: 'No',

  aiTypes: ['ai-infrastructure'],
  markets: ['b2b', 'enterprise'],
  category: 'developer-tools' as const,
  subcategories: ['developer-tools', 'infrastructure'],
  industries: ['developer-tools', 'infrastructure'],

  stage: 'Series A',
  valuation: 'Unknown',
  totalFunding: 'Over $35M',
  fundingHistory: [
    {
      stage: 'Series A',
      amount: '$25M',
      date: '2024-12',
      leadInvestors: ['Andreessen Horowitz'],
    },
  ],
  revenue: 'Unknown',
  growth: '~60-person team expecting to double in 9-12 months per job listing',
  runway: 'Strong after Series A',
  customers: 'OpenAI, Anthropic, Cloudflare, and other API-first companies',

  growthMetrics: {
    stage: 'high-growth',
    signals: [
      'Raised over $35M from a16z, Sequoia, and operators from Stripe, Datadog, Segment, and Linear',
      'Customer list includes OpenAI, Anthropic, and Cloudflare',
      'Hiring first/early product design capacity for developer experience and brand',
    ],
    tam: '$30B+ API platform, developer experience, and AI infrastructure market',
    ceiling:
      'High if Stainless becomes the default API experience layer for AI and platform companies.',
    tailwinds: [
      'AI companies need high-quality SDKs and API surfaces',
      'Developers expect Stripe-quality API experiences',
      'API quality increasingly affects adoption and retention',
    ],
    headwinds: [
      'SDK generation can face open-source and in-house competition',
      'Developer platform buyers have high technical standards',
      'AI relevance is infrastructure-adjacent, not agent workflow-native',
    ],
    moatType: 'product-experience',
    moatStrength:
      'Medium: developer experience quality and customer logos can compound into category authority.',
  },

  competitors: [
    {
      name: 'Fern',
      description: 'API SDK and documentation generation platform.',
      whyTheyWin: 'Developer-focused platform with strong API tooling depth.',
    },
    {
      name: 'Speakeasy',
      description: 'SDK and API infrastructure for developer platforms.',
      whyTheyWin: 'Broad API generation and developer experience tooling.',
    },
    {
      name: 'OpenAPI Generator',
      description: 'Open-source SDK generation tooling.',
      whyTheyWin: 'Free, widely known, and customizable.',
    },
  ],
  marketPosition: 'Stripe-quality SDK and API experience platform for modern developer companies.',
  moat: [
    'Founder experience building Stripe API developer tooling',
    'High-quality SDK generation and API design standards',
    'Strong customer logos in AI infrastructure',
  ],
  vsGiants:
    'Specialized API-experience platform rather than generic cloud developer tooling.',

  aiNativeLevel: 'B',
  aiNativeLevelDescription:
    'AI-infrastructure-adjacent: Stainless is not an AI product itself, but it powers API experiences for major AI companies and sits close to developer platform infrastructure.',
  aiDesignChallenges: [
    'Designing technical workflows for API schema, SDK generation, and developer docs',
    'Making API quality and generated SDK behavior legible to platform teams',
    'Balancing product UI, brand, and developer documentation as one coherent experience',
    'Designing for both technical accuracy and developer trust',
  ],

  founders: [
    {
      name: 'Alex Rattray',
      role: 'Founder & CEO',
      background:
        'Former Stripe developer platform engineer; helped build Stripe API documentation and client library code generation.',
    },
    {
      name: 'Mark McGranaghan',
      role: 'President & CTO',
      background: 'Engineering leader at Stainless focused on API platform architecture.',
    },
  ],
  whyBuilding:
    'Bring Stripe-quality SDKs, documentation, and API developer experience to companies of every size.',
  beliefs: [
    'APIs are core product surfaces',
    'Great developer experience should not require years of custom infrastructure',
    'REST APIs need stronger standards and tooling',
  ],
  designPhilosophy:
    'Technical product design for developer trust: precise, useful, and polished across product UI, docs, and brand.',
  greenFlags: [
    'Open Product Designer role with broad ownership across product and brand',
    'Very strong developer-experience relevance',
    'Customers include OpenAI and Anthropic',
  ],
  redFlags: [
    'Not directly AI agent workflow',
    'NYC on-site requirement',
    'Role is broad and may include brand/marketing design in addition to product',
  ],

  designTeam: {
    teamSize: 'Early design function (role describes helping establish design culture)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'API schema and SDK generation workflows',
        'Developer onboarding and configuration logic',
        'Error states for generated code and API compatibility',
      ],
    },
    evaluation: {
      level: 'medium',
      tasks: [
        'SDK quality and documentation usefulness feedback',
        'Developer activation and integration success metrics',
        'API platform health and adoption tracking',
      ],
    },
    interface: {
      level: 'high',
      tasks: [
        'Developer platform UI',
        'Documentation and API reference surfaces',
        'Brand and marketing systems for technical buyers',
      ],
    },
  },
  productStage: '1→10',

  targetAudiences: {
    primary: 'Developer platform teams building public APIs',
    secondary: 'AI companies and infrastructure teams needing high-quality SDKs and docs',
  },
  userProblems: [
    'High-quality SDK generation is expensive and hard to maintain',
    'Messy API specs create poor developer experience',
    'Developer platform teams need reliable tooling across languages',
    'API quality affects adoption but is difficult to operationalize',
  ],

  designerLinks: [],
  openRoles: [
    {
      title: 'Product Designer',
      location: 'New York City, NY',
      type: 'full-time',
      url: 'https://jobs.ashbyhq.com/stainlessapi/82f222ed-09c7-4f40-b551-2e41c843e5ad',
      roleFamily: 'product-design',
      roleSignal: 'standard',
      verificationStatus: 'confirmed',
      sourceType: 'ashby',
      lastVerifiedAt: '2026-05-12',
      compensation: '$170K-$220K + equity',
      whyInteresting:
        'Early product design role for complex developer experience, API platform UI, and design culture.',
    },
  ],
  cultureInsights: [],

  tracking: {
    status: 'watching',
    fitScore: 7,
    whyJoin: [
      'Strong developer-experience alignment',
      'Early design function with broad ownership',
      'Direct adjacency to OpenAI/Anthropic API ecosystem',
    ],
    whyNot: [
      'Less directly agentic than Conductor/Graphite',
      'NYC on-site and broad product+brand scope',
    ],
    nextActions: [
      'Review Stainless product and API docs',
      'Frame portfolio around technical UX and AI-native developer workflow infrastructure',
    ],
  },

  lastUpdated: '2026-05-12',
  sources: [
    { title: 'Stainless Company', url: 'https://www.stainless.com/company-stainless' },
    { title: 'Stainless Series A', url: 'https://www.stainless.com/blog/categories/announcements' },
    { title: 'TechCrunch: Stainless API platform', url: 'https://techcrunch.com/2024/04/24/stainless-is-helping-openai-anthropic-and-others-build-sdks-for-their-apis/' },
    { title: 'Product Designer', url: 'https://jobs.ashbyhq.com/stainlessapi/82f222ed-09c7-4f40-b551-2e41c843e5ad' },
    { title: 'a16z Portfolio Jobs', url: 'https://jobs.a16z.com/jobs' },
  ],
};

