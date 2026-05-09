import { Company } from '../types';

export const higgsfield: Company = {
    id: 'higgsfield',
    name: 'Higgsfield',
    description: 'GenAI video platform for creative professionals to produce high-quality, stylized content with true cinematic control.',
    website: 'https://higgsfield.ai',
    screenshot: '/screenshots/higgsfield-screenshot.png',
    headquarters: 'San Francisco, CA',
    region: 'sf-bay-area' as const,
    remote: 'Yes',

    // OG Image
    ogImage: '/og-images/higgsfield-og.webp',


  // Multi-dimensional Tags
  aiTypes: ['code-assistant'],
  markets: ['prosumer'],
  category: 'developer-tools' as const,

  industries: ['infrastructure', 'developer-tools'],

    // Business
    stage: 'Series A',
    normalizedStage: 'series-a' as const,
    valuation: '$1.3B+ (Jan 2026)',
    totalFunding: '$130M',
    fundingHistory: [
      { stage: 'Series A', amount: '$80M', date: '2026-01' },
    ],
    revenue: '$200M annual run rate (Jan 2026)',
    growth: 'Unknown',
    runway: 'Unknown',
    customers: 'Unknown',

    // Competition
    competitors: [
      {
        name: 'Runway',
        description: 'AI video generation and creative tools platform.',
        whyTheyWin: 'Strong brand and creator adoption in AI video workflows.',
      },
      {
        name: 'Synthesia',
        description: 'AI video platform focused on synthetic video creation.',
        whyTheyWin: 'Enterprise adoption and polished product experience.',
      },
    ],
    marketPosition: 'Cinematic, pro-focused AI video creation with camera-motion control.',
    moat: [
      'Cinematic control over camera motion for professional workflows',
      'High-quality, stylized output tuned for creative professionals',
    ],
    vsGiants: 'Differentiates on cinematic control and creator-first workflows rather than general-purpose video generation.',

    // AI-Native Level
    aiNativeLevel: 'A',
    aiNativeLevelDescription: 'AI generates the core product output (video), making the model central to the user experience.',
    aiDesignChallenges: [
      'Balancing speed of generation with creative control',
      'Designing intuitive prompt and editing workflows for video creation',
      'Ensuring output quality and consistency for professional creators',
    ],

    // Founders & Vision
    founders: [
      {
        name: 'Alex Mashrabov',
        role: 'Founder & CEO',
        background: 'Former Snap executive; founder of Higgsfield.',
      },
    ],
    whyBuilding: 'Make AI video creation accessible and high-quality for creative professionals.',
    beliefs: [
      'Creative tools should be fast without sacrificing craft',
      'AI should expand creative possibilities, not replace vision',
    ],
    designPhilosophy: 'Unknown',
    greenFlags: [
      'Series A extension brought total Series A funding to $130M (Jan 2026)',
      'Reported $200M annual run rate within nine months of launch',
    ],
    redFlags: [
      'Highly competitive AI video market',
    ],

    // Design Opportunity
    designTeam: {
      teamSize: '51-200 employees',
    },
    designWorkType: {
      logicBehavior: {
        level: 'high',
        tasks: [
          'Prompt-to-video control and iteration workflows',
          'Output validation and quality guardrails',
        ],
      },
      evaluation: {
        level: 'high',
        tasks: [
          'Quality benchmarks for generated video',
          'User feedback loops for creative iteration',
        ],
      },
      interface: {
        level: 'high',
        tasks: [
          'Creator workflows for video generation and editing',
          'Asset management and versioning UX',
        ],
      },
    },
    productStage: '1→10',

    // Product & User Context
    targetAudiences: {
      primary: 'Creative professionals and video creators',
      secondary: 'Marketing teams producing video content',
    },
    userProblems: [
      'Producing high-quality video content is time-consuming and expensive',
      'Creators want fast iteration without complex tools',
      'Teams need consistent output quality across iterations',
    ],

    // Designer Links
    designerLinks: [],

    // Open Roles (Product Design only)
    openRoles: [],

    // Culture Insights
    cultureInsights: [],

    // My Tracking
    tracking: {
      status: 'researching',
      fitScore: 6,
      whyJoin: [
        'Design-driven AI video product',
        'Creator workflow focus with cinematic control',
      ],
      whyNot: [
        'Crowded AI video market',
      ],
      nextActions: [
        'Monitor product design openings',
      ],
    },

    // Meta
    lastUpdated: '2026-01-27T10:58:34',
    sources: [
    { title: 'Source', url: 'https://startups.gallery/companies/higgsfield' },
    { title: 'Source', url: 'https://www.finsmes.com/2026/01/higgsfield-raises-80m-in-series-a-extension-funding.html' },
    { title: 'Source', url: 'https://www.investing.com/news/stock-market-news/ai-video-startup-higgsfield-hits-13-billion-valuation-with-latest-funding-4449312' },
    { title: 'Source', url: 'https://jobs.ashbyhq.com/higgsfieldai' },
    { title: 'Source', url: 'https://runwayml.com/' },
    { title: 'Source', url: 'https://www.synthesia.io/' }
  ],
};
