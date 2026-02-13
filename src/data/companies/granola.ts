import { Company } from '../types';

export const granola: Company = {
  id: 'granola',
  name: 'Granola',
  description:
    'AI notepad for meetings that augments human note-taking with contextual summaries and memory.',
  website: 'https://granola.ai',
  screenshot: '/screenshots/granola-screenshot.png',
  headquarters: 'London, UK',
  remote: 'Hybrid',

  // OG Image
  ogImage: '/og-images/granola-og.webp',

  // Multi-dimensional Tags
  aiTypes: ['conversation-ai'],
  markets: ['b2b', 'prosumer'],
  category: 'productivity' as const,

  industries: ['productivity'],

  stage: 'Series B',
  valuation: '$250M (May 2025)',
  totalFunding: '$67M',
  fundingHistory: [
    {
      stage: 'Seed',
      amount: '$4M',
      date: '2024-02',
      leadInvestors: ['Craft Ventures'],
    },
    {
      stage: 'Series A',
      amount: '$20M',
      date: '2024-10',
      valuation: '$100M',
      leadInvestors: ['Spark Capital'],
    },
    {
      stage: 'Series B',
      amount: '$43M',
      date: '2025-05',
      valuation: '$250M',
      leadInvestors: ['NFDG', 'Lightspeed'],
    },
  ],
  revenue: 'Unknown',
  growth: 'High engagement and viral in-team adoption (company-reported)',
  runway: '24+ months',
  customers: 'VCs, founders at Vercel, Ramp, Roblox',

  competitors: [
    {
      name: 'Otter.ai',
      description: 'AI meeting transcription, $1B+ valuation',
      whyTheyWin:
        'First mover in AI transcription, 25M+ users, strong brand recognition, Zoom/Teams integrations',
    },
    {
      name: 'Fireflies.ai',
      description: 'AI meeting assistant and CRM integration',
      whyTheyWin:
        'Deep CRM integrations (Salesforce, HubSpot), sales team focus, action item extraction',
    },
    {
      name: 'Fathom',
      description: 'Free AI meeting notes',
      whyTheyWin: 'Free tier captures users, simple UX, fast transcription',
    },
  ],
  marketPosition:
    'Premium positioning — "for people who think their judgment matters"',
  moat: [
    'Unique positioning: augments vs replaces',
    'Strong word-of-mouth in VC/founder community',
    'Mike Krieger (Instagram) as investor',
    'Product-led growth with viral loop',
  ],
  vsGiants:
    'Philosophical differentiation: "AI should augment your judgment, not replace it." Premium positioning avoids price war with free tools. Not trying to be everything — opinionated product for specific users.',

  aiNativeLevel: 'B',
  aiNativeLevelDescription:
    'AI-Core on Proven Workflow: AI is core differentiator for meeting notes. Proven note-taking workflow enhanced by AI automation.',
  aiDesignChallenges: [
    'Balance AI assistance vs user control',
    'Real-time transcription UX',
    'Note organization and retrieval',
    'Team collaboration on shared context',
  ],

  founders: [
    {
      name: 'Chris Pedregal',
      role: 'Co-founder & CEO',
      background: 'Former AI PM at Google',
    },
    {
      name: 'Sam Stephenson',
      role: 'Co-founder',
      background: 'Product-focused engineer and technical co-founder',
    },
  ],
  whyBuilding:
    'AI meeting tools outsource judgment to AI. We believe your judgment is valuable — AI should augment, not replace it.',
  beliefs: [
    'Human judgment is irreplaceable',
    'AI should be invisible until needed',
    'Tools should make you smarter, not dependent',
    'Opinionated product design wins',
  ],
  designPhilosophy:
    'Opinionated, minimal design. The product has a clear point of view about how work should be done.',
  greenFlags: [
    'Strong product philosophy',
    'Mike Krieger as investor — design validation',
    'Used by top VCs — instant credibility',
    'Small team — high impact',
    'Ex-Google PM founder — product-focused',
  ],
  redFlags: [
    'Crowded meeting notes space',
    'Consumer-ish product — enterprise conversion?',
  ],

  designTeam: {
    teamSize: '~2-3 (very small)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'medium',
      tasks: [
        'Note augmentation rules',
        'When to surface AI suggestions',
        'Privacy and context boundaries',
      ],
    },
    evaluation: {
      level: 'medium',
      tasks: [
        'Note quality metrics',
        'User satisfaction tracking',
        'AI suggestion acceptance rate',
      ],
    },
    interface: {
      level: 'high',
      tasks: [
        'Real-time note-taking UI',
        'AI suggestion presentation',
        'Search and retrieval',
        'Team workspace design',
        'Mobile experience',
      ],
    },
  },
  productStage: '1→10',

  // Product & User Context
  targetAudiences: {
    primary:
      'Venture capitalists, founders, and executives taking frequent high-stakes meetings',
    secondary:
      'Sales professionals, consultants, and knowledge workers who value judgment',
  },
  userProblems: [
    'Taking comprehensive meeting notes distracts from active listening and engagement',
    'Auto-transcription tools produce verbose outputs lacking personal insights and judgment',
    'Reviewing hour-long transcripts to find key points wastes time after meetings',
    'Important context and non-verbal cues get lost in pure transcription',
    'Professionals want to augment their judgment not replace their thinking with AI',
  ],

  designerLinks: [
    {
      name: 'Ruari Shephard',
      role: 'Designer',
      platform: 'linkedin',
      url: 'https://www.linkedin.com/in/ruari-shephard-786304107/',
      description: 'Designer listed on Granola team page',
    },
    {
      name: 'Luke Bailey',
      role: 'Design Engineer',
      platform: 'linkedin',
      url: 'https://www.linkedin.com/company/meetgranola/',
      description: 'Design Engineer role listed on Granola team page',
    },
    {
      name: 'Granola Blog',
      role: 'Company',
      platform: 'blog',
      url: 'https://granola.ai/blog',
      description: 'Product updates and philosophy',
    },
  ],
  openRoles: [],

  cultureInsights: [
    {
      source: 'twitter',
      sentiment: 'positive',
      content:
        'Small, tight-knit team (~10 people). Strong product opinions. Design-forward culture.',
    },
    {
      source: 'linkedin',
      sentiment: 'positive',
      content:
        'Ex-Palantir, ex-Apple founders. London-based, design-first culture.',
    },
    {
      source: 'glassdoor',
      sentiment: 'neutral',
      content: 'No reviews — Seed stage startup with limited data.',
    },
    {
      source: 'levels.fyi',
      sentiment: 'neutral',
      content: 'No Product Design data. No salary data for startup size.',
    },
  ],

  growthMetrics: {
    stage: 'hypergrowth',
    revenueGrowth: 'Not publicly disclosed',
    userGrowth: 'Company reports high engagement and viral spread within teams',
    signals: [
      '$67M raised in 15 months (Seed → Series B)',
      '$250M valuation (2.5x from $100M in 7 months)',
      '10% week-over-week user growth sustained',
      'Used by VCs, founders at Vercel, Ramp, Roblox (high-value users)',
      'Mike Krieger (Instagram) as investor — strong design validation',
    ],

    tam: '$5B+ (Meeting productivity tools for knowledge workers)',
    marketShare: '<0.1% (early stage, niche positioning)',
    ceiling:
      "Early-mid innings: AI meeting notes rapidly growing, but Granola's 'augment not replace' philosophy targets premium subset (~20% of market)",
    tailwinds: [
      'Remote/hybrid work increases meeting volume',
      'AI meeting notes becoming table stakes for knowledge work',
      'Premium positioning avoids commoditization race',
      'Product-led growth with viral loop (meeting attendees see it)',
      'Strong word-of-mouth in tech/VC community',
    ],
    headwinds: [
      'Otter.ai has 25M+ users and strong brand',
      'Free alternatives (Fathom, Zoom AI) commoditize basic transcription',
      'Meeting fatigue may reduce TAM',
      'Enterprise sales cycle vs prosumer focus',
    ],

    moatType: 'brand',
    moatStrength:
      "Medium: Philosophical differentiation ('augment not replace') and premium brand positioning create moat, but limited network effects. Product quality and opinionated design are defensive.",
  },

  tracking: {
    status: 'interested',
    fitScore: 8,
    whyJoin: [
      'Level B AI-core',
      'Strong design philosophy',
      'Small team — can shape everything',
      'Mike Krieger connection',
      'Consumer + prosumer positioning',
      'Product-led growth model',
    ],
    whyNot: [
      'Very small — may not be hiring designers',
      'Meeting notes is narrow space',
    ],
    nextActions: [
      'Use Granola daily for 2 weeks',
      'Connect with founders on Twitter',
      'Watch for design job postings',
    ],
  },

  lastUpdated: '2026-02-13',
  sources: [
    { title: 'Granola Careers', url: 'https://www.granola.ai/jobs' },
    { title: 'Granola Series A', url: 'https://www.granola.ai/blog/series-a' },
    {
      title: 'TechCrunch - Granola raises $43M Series B',
      url: 'https://techcrunch.com/2025/05/14/ai-note-taking-app-granola-raises-43m/',
    },
    { title: 'Ashby Jobs - Granola', url: 'https://jobs.ashbyhq.com/granola' },
    {
      title: 'LinkedIn Jobs - Granola',
      url: 'https://www.linkedin.com/company/meetgranola/jobs/',
    },
  ],
};
