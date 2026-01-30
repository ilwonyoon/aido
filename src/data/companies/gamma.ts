import { Company } from '../types';

export const gamma: Company = {
    id: 'gamma',
    name: 'Gamma',
    description: 'AI-powered presentation and document creation. Create beautiful, interactive content with AI in seconds—no slides required.',
    website: 'https://gamma.app',

    // Location
    headquarters: 'San Francisco, CA',
    remote: 'Yes',


  // Multi-dimensional Tags
  aiTypes: ['code-assistant', 'text-assistant'],
  markets: ['b2b'],
  industries: ['developer-tools', 'creative-media'],

    // Business
    stage: 'Series B',
    valuation: '$2.1B',
    totalFunding: '$87M',
    fundingHistory: [
      {
        stage: 'Series B',
        amount: '$68M',
        date: '2025-11',
        valuation: '$2.1B',
        leadInvestors: ['Andreessen Horowitz'],
      },
      {
        stage: 'Series A',
        amount: '$12M',
        date: '2023',
        leadInvestors: ['Accel'],
      },
    ],
    revenue: '$100M ARR (profitable)',
    growth: 'Crossed $100M ARR profitably with 52 employees',
    runway: 'Strong (just raised $68M)',
    customers: '30M+ users',

    // Competition
    competitors: [
      {
        name: 'Canva',
        description: 'Design platform with AI',
        whyTheyWin: 'Massive user base, broader design tools, brand',
      },
      {
        name: 'Beautiful.ai',
        description: 'AI presentation tool',
        whyTheyWin: 'Earlier mover, focused on presentations',
      },
      {
        name: 'PowerPoint + Copilot',
        description: 'Microsoft with AI',
        whyTheyWin: 'Enterprise distribution, Office ecosystem',
      },
    ],
    marketPosition: 'AI-first presentation tool. "PowerPoint killer." Lean team, high efficiency.',
    moat: [
      'First to market with generative AI presentations (2022)',
      '30M+ users, $100M ARR',
      'Profitable with only 52 employees',
      'Strong product velocity',
      'Backed by a16z and Accel',
    ],
    vsGiants: 'AI-native vs PowerPoint. Faster creation vs Canva. No slides, interactive documents.',

    // AI-Native Level
    aiNativeLevel: 'C',
    aiNativeLevelDescription: 'AI as Major Feature: Presentation tool with strong AI capabilities but built on proven presentation workflow. AI enhances established product.',
    aiDesignChallenges: [
      'AI-generated layouts and designs',
      'Balance AI speed vs manual control',
      'Template selection and customization',
      'Real-time collaboration with AI',
      'Enterprise features (branding, templates)',
    ],

    // Founders & Vision
    founders: [
      {
        name: 'Grant Lee',
        role: 'CEO & Co-Founder',
        background: 'Product designer. Previously at Dropbox, Optimizely. Design-led founder.',
      },
      {
        name: 'Jon Noronha',
        role: 'CPO & Co-Founder',
        background: 'Product leader. Previously at Optimizely.',
      },
      {
        name: 'James Fox',
        role: 'Co-Founder',
        background: 'Engineering leader.',
      },
    ],
    whyBuilding: 'Slides are dead. People waste hours making presentations. AI can create beautiful content in seconds.',
    beliefs: [
      'AI should do the heavy lifting',
      'Focus on content, not formatting',
      'Interactive documents > static slides',
      'Lean team, high efficiency (52 people at $100M ARR)',
      'Profitability matters',
    ],
    designPhilosophy: 'AI-generated beauty. Users focus on content, AI handles design. Fast and intuitive.',
    greenFlags: [
      'Grant Lee is designer CEO (rare!)',
      '$100M ARR profitably with 52 people',
      '30M+ users, strong growth',
      'Pivoted successfully to AI in 2022',
      'Yes',
    ],
    redFlags: [
      'Fierce competition from Canva, Microsoft',
      'AI presentation space is crowded',
      'Lean team = high expectations',
      'Design team size unknown',
    ],

    // Design Opportunity
    designTeam: {
      designHead: 'Grant Lee (CEO, designer background)',
      teamSize: 'Small (company is 52 people total)',
    },
    designWorkType: {
      logicBehavior: {
        level: 'high',
        tasks: [
          'Design AI generation behaviors',
          'Define user control vs AI automation',
          'Template and style selection logic',
        ],
      },
      evaluation: {
        level: 'high',
        tasks: [
          'Quality metrics for AI-generated designs',
          'User research on AI vs manual creation',
          'A/B testing on generation flows',
        ],
      },
      interface: {
        level: 'high',
        tasks: [
          'Editor interface design',
          'AI generation UI/UX',
          'Template gallery and customization',
        ],
      },
    },
    productStage: '1→10',

    // Product & User Context
    targetAudiences: {
        primary: 'Business professionals and teams creating presentations and slide decks',
        secondary: 'Educators, consultants, and content creators needing visual storytelling',
    },
    userProblems: [
        'Creating professional presentations in PowerPoint or Keynote is time-consuming',
        'Non-designers struggle to make visually appealing slides matching brand guidelines',
        'Starting from blank slides or generic templates requires significant design effort',
        'Collaborative deck editing requires version control and merge conflicts',
        'Presenting data and insights clearly requires design skills most people lack',
    ],

    // Designer Links
    designerLinks: [],

    // Open Roles
    openRoles: [
      {
        title: 'Product Designer',
        location: 'San Francisco, CA',
        type: 'full-time',
        url: 'https://careers.gamma.app/',
        aboutRole: 'Join a lean team transforming presentations with AI. Design for 30M+ users.',
        whyInteresting: 'Designer CEO. $100M ARR with 52 people. Profitable. AI-first product. High craft bar.',
      },
    ],

    // Culture Insights
    cultureInsights: [],

    // My Tracking
    tracking: {
      status: 'interested',
      fitScore: 9,
      whyJoin: [
        'Grant Lee is designer CEO (rare!)',
        'AI-native Level 4: AI is the product',
        '$100M ARR, profitable, lean team',
        '30M+ users, strong growth',
        'Interesting design challenges (AI generation)',
        'Remote-friendly',
      ],
      whyNot: [
        'Small team (52 people total)',
        'Design team size unknown',
        'Fierce competition from Canva, Microsoft',
      ],
      nextActions: [
        'Use Gamma extensively',
        'Research Grant Lee (designer CEO)',
        'Read "Dumbest idea" to $100M ARR on Lenny\'s',
      ],
    },

    growthMetrics: {
      stage: 'hypergrowth',
      revenueGrowth: "$100M ARR (2025), 10x+ YoY",
      userGrowth: "30M+ users",
      signals: ["$2.1B valuation", "$100M ARR with 52-person team", "Designer CEO (Grant Lee)", "30M+ users"],
      tam: "$20B+ (Presentation and creative software)",
      marketShare: "~0.5%",
      ceiling: "Mid innings: AI presentation generation growing fast but Canva ($40B) and Microsoft (PowerPoint) dominate.",
      tailwinds: ["AI generation democratizes design", "Designer CEO", "52 people = extreme efficiency", "Remote-friendly"],
      headwinds: ["Canva $40B adding AI features", "PowerPoint/Google Slides free", "Beautiful.ai competing"],
      moatType: 'technology',
      moatStrength: "Low-Medium: AI generation quality defensible short-term but Canva catching up. Small team efficiency impressive.",
    },

    // Meta
    lastUpdated: '2026-01-26T14:30:00',
    sources: [
      {
        title: 'Gamma $2.1B valuation, $100M ARR',
        url: 'https://techcrunch.com/2025/11/10/ai-powerpoint-killer-gamma-hits-2-1b-valuation-100m-arr-founder-says/',
      },
      {
        title: 'Grant Lee on Lenny\'s Podcast',
        url: 'https://www.lennysnewsletter.com/p/how-50-people-built-a-profitable-ai-unicorn',
      },
    ],
  };
