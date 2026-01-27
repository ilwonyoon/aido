import { Company } from '../types';

export const higgsfield: Company = {
    id: 'higgsfield',
    name: 'Higgsfield',
    description: 'GenAI video platform for creative professionals to produce high-quality, stylized content with true cinematic control.',
    website: 'https://higgsfield.ai',
    headquarters: 'San Francisco, CA',
    remote: 'Yes',

    // Business
    stage: 'Series A',
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
        name: 'Synthesia',
        description: 'AI-generated video platform focused on synthetic video creation.',
        whyTheyWin: 'Strong positioning in AI video generation for business use cases.',
      },
      {
        name: 'Deepgram',
        description: 'Voice AI platform; adjacent in AI media infrastructure and tooling.',
        whyTheyWin: 'Established platform and developer adoption for media AI workflows.',
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
        role: 'Founder',
        background: 'Former head of Generative AI at Snap; previously co-founded AI Factory.',
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

    // Open Roles
    openRoles: [
      {
        title: 'GTM Engineer',
        location: 'San Francisco Bay Area',
        url: 'https://jobs.ashbyhq.com/higgsfieldai/c6ab1b04-6ec6-411e-afe0-6f97040925a9',
        postedDate: '2026-01',
      },
      {
        title: 'HR Operations',
        location: 'San Francisco / Los Angeles',
        url: 'https://jobs.ashbyhq.com/higgsfieldai/a3a55d98-4a59-45cb-a57d-0d132e83bc93',
        postedDate: '2026-01',
      },
      {
        title: 'Financial Controller',
        location: 'San Francisco Bay Area',
        url: 'https://jobs.ashbyhq.com/higgsfieldai/3dc7610f-2328-47e4-9511-64a0ffc92438',
        postedDate: '2026-01',
      },
      {
        title: 'AI educator - Enterprise',
        location: 'San Francisco / Los Angeles',
        url: 'https://jobs.ashbyhq.com/higgsfieldai/381bdce4-7aa1-4db5-b6ae-4411af8ee793',
        postedDate: '2026-01',
      },
      {
        title: 'GTM - Enterprise',
        location: 'San Francisco Bay Area',
        url: 'https://jobs.ashbyhq.com/higgsfieldai/211e40d3-6d66-4abe-b09d-0e679f12293d',
        postedDate: '2026-01',
      },
    ],

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
        'Monitor design openings',
      ],
    },

    // Meta
    lastUpdated: '2026-01-27T00:00:00',
    sources: [
      { title: 'Higgsfield (startups.gallery)', url: 'https://startups.gallery/companies/higgsfield' },
      { title: 'Higgsfield Series A + Run Rate (PRNewswire)', url: 'https://www.prnewswire.com/news-releases/higgsfield-announces-130m-series-a-and-reports-200m-annual-run-rate-302661805.html' },
      { title: 'Higgsfield valuation + founder (TechCrunch)', url: 'https://techcrunch.com/2026/01/15/ai-video-startup-higgsfield-founded-by-ex-snap-exec-lands-1-3b-valuation/' },
    ],
  };
