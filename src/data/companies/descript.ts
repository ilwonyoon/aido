import { Company } from '../types';

export const descript: Company = {
    id: 'descript',
    name: 'Descript',
    description: 'AI-powered video and audio editing. Edit by editing text transcripts.',
    website: 'https://www.descript.com',
    screenshot: '/screenshots/descript-screenshot.png',
    headquarters: 'San Francisco, CA',
    remote: 'Hybrid',

    // OG Image
    ogImage: '/og-images/descript-og.webp',

  // Multi-dimensional Tags
  aiTypes: ['audio-generation', 'code-assistant'],
  markets: ['b2b'],
  category: 'developer-tools' as const,

  industries: ['developer-tools', 'creative-media'],

    stage: 'Series C',
    valuation: 'Unknown',
    totalFunding: '$100M+',
    revenue: 'Unknown',
    growth: 'steady trajectory (public % not disclosed)',
    customers: 'Millions of users',
    growthMetrics: {
      stage: 'steady',
      revenueGrowth: 'Unknown',
      userGrowth: 'Millions of users',
      signals: ['Launched Underlord AI co-editor', 'Transcription-based editing pioneer', 'Strong creator community'],
      tam: '$10B (video editing software)',
      marketShare: 'Unknown',
      ceiling: 'Mid-stage: Competing with Adobe, Final Cut',
      tailwinds: ['Video content explosion', 'Creator economy growth', 'AI editing becoming mainstream'],
      headwinds: ['Adobe Premiere competition', 'Quality vs pro tools', 'Pricing pressure'],
      moatType: 'technology',
      moatStrength: 'Medium: Transcription-based editing is unique but replicable',
    },
    competitors: [],
    marketPosition: 'Unknown',
    moat: [],
    aiNativeLevel: 'C',
    aiNativeLevelDescription: 'AI as Major Feature: Video/audio editing tool with AI transcription and editing. Proven editing workflow with AI enhancement.',
    aiDesignChallenges: [],
    founders: [
      {
        name: 'Andrew Mason',
        role: 'CEO',
        background: 'Former Groupon founder; started Descript to make audio/video editing as easy as text editing.',
      },
    ],
    whyBuilding: 'Unknown',
    beliefs: [],
    greenFlags: ['AI-native company', 'Growth potential'],
    redFlags: ['Unknown design culture', 'Competitive market'],
    designTeam: { designHead: 'Unknown', teamSize: '201-500 employees (startups.gallery)' },
    designWorkType: {
      logicBehavior: { level: 'high', tasks: [] },
      evaluation: { level: 'medium', tasks: [] },
      interface: { level: 'high', tasks: [] },
    },
    productStage: '10→100',

    // Product & User Context
    targetAudiences: {
        primary: 'Podcasters, video creators, and content producers editing audio and video',
        secondary: 'Marketing teams, educators, and remote teams editing recorded content',
    },
    userProblems: [
        'Video and podcast editing in traditional tools requires steep learning curves',
        'Finding and removing filler words from hours of audio is tedious manual work',
        'Recording mistakes require re-recording or complex audio editing to fix',
        'Transcribing audio for subtitles or blog posts costs time or money',
        'Collaborative editing on video projects requires expensive professional editors',
    ],

    designerLinks: [],
    openRoles: [
      { title: 'Product Designer', location: 'San Francisco, CA (Hybrid)', url: 'https://www.descript.com/careers', type: 'full-time' }
    ],
    cultureInsights: [],
    tracking: {
      status: 'watching',
      fitScore: 7,
      whyJoin: ['AI-native Level 3', 'Unknown'],
      whyNot: ['Hybrid work policy', 'Unknown design culture'],
      nextActions: ['Try Descript product', 'Research founders'],
    },
    lastUpdated: '2026-02-18',
    sources: [
    { title: 'Source', url: 'https://www.descript.com/careers' },
    { title: 'Source', url: 'https://www.g2.com/products/descript/reviews' }
  ],
  };
