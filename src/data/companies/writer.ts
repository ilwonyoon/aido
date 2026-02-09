import { Company } from '../types';

export const writer: Company = {
    id: 'writer',
    name: 'Writer',
    description: 'AI writing platform for enterprises. Full-stack generative AI for business workflows.',
    website: 'https://writer.com',
  screenshot: '/screenshots/writer-screenshot.png',
    headquarters: 'San Francisco, CA',
    remote: 'Hybrid',

    // OG Image
    ogImage: '/og-images/writer-og.webp',

  // Multi-dimensional Tags
  aiTypes: ['text-assistant', 'automation'],
  markets: ['b2b', 'enterprise'],
  category: 'productivity' as const,

  industries: ['infrastructure'],

    stage: 'Series C',
    valuation: '$1.9B (2024)',
    totalFunding: '$326M',
    revenue: '$84M ARR (2024)',
    growth: '194% YoY ARR growth, expanding to healthcare, retail, financial services',
    customers: 'Accenture, L\'Oreal, Uber',
    growthMetrics: {
      stage: 'high-growth',
      revenueGrowth: '$16M (2023) → $84M (2024) = 194% YoY',
      userGrowth: '250+ enterprise customers (Accenture, L\'Oreal, Uber, Mars, Marriott, Vanguard)',
      signals: ['$200M Series C at $1.9B valuation', 'Adobe Ventures, IBM Ventures, Salesforce Ventures investors', 'Expanding to healthcare, retail, financial services'],
      tam: '$25B (AI writing + content generation)',
      marketShare: '0.34% of $25B TAM = 73x upside potential',
      ceiling: 'Mid-stage: Enterprise AI writing market consolidating',
      tailwinds: ['Enterprise AI adoption', 'Content generation demand', 'Multi-industry expansion'],
      headwinds: ['Competition from Jasper, Copy.ai', 'OpenAI/Anthropic direct competition', 'Commoditization risk'],
      moatType: 'switching-costs',
      moatStrength: 'Medium: Enterprise integration creates stickiness',
    },
    competitors: [],
    marketPosition: 'Leading enterprise generative AI platform at $1.9B valuation. Full-stack approach with proprietary LLMs. Customers include Accenture, L\'Oreal, Uber, Mars, Marriott, Vanguard.',
    moat: [],
    aiNativeLevel: 'B',
    aiNativeLevelDescription: 'AI-Core on Proven Workflow: AI is core differentiator for enterprise content. Building on proven business writing needs with AI.',
    aiDesignChallenges: [],
    founders: [
      {
        name: 'May Habib',
        role: 'Co-founder & CEO',
        background: 'Harvard University (Economics, Near Eastern Languages and Civilizations). 10+ years in NLP and ML. Previously co-founded Qordoba (localization software). Family fled Lebanon for Canada in the 1990s. Focuses on strategy and enterprise sales.',
      },
      {
        name: 'Waseem Alshikh',
        role: 'Co-founder & CTO',
        background: 'Beirut Arab University (BS Computer Science), Damascus Polytechnic University (Electronics). Grew up in mountains south of Damascus, Syria. Co-founded Qordoba with May Habib (2015-2019). Built summarization tools while learning English in Lebanon.',
      },
    ],
    whyBuilding: 'May and Waseem spent 10+ years solving enterprise language problems together, starting with localization at Qordoba. They launched Writer in 2020 to bring generative AI to the enterprise, focusing on maintaining brand voice and compliance at scale.',
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
        primary: 'Enterprise content teams and brand managers ensuring content quality',
        secondary: 'Marketing operations and compliance teams enforcing brand standards',
    },
    userProblems: [
        'Maintaining consistent brand voice across hundreds of content creators is impossible manually',
        'Content compliance and legal review slows down marketing velocity',
        'Scaling content production while maintaining quality requires expensive editorial teams',
        'Finding and enforcing terminology and style guidelines across teams is manual',
        'Content quality varies dramatically across writers and campaigns',
    ],

    designerLinks: [],
    openRoles: [
      {
        title: 'Product Designer',
        location: 'San Francisco, CA or New York City, NY',
        type: 'full-time',
        url: 'https://jobs.ashbyhq.com/writer/19e8f173-5af9-4ddf-9b72-74cea606bd8d',
        compensation: '$157,700-$250,000 + equity',
        team: 'Product & Design (reports to Director of Product Design)',
        aboutRole: 'Own end-to-end design for high-impact product areas in enterprise AI, converting complex AI capabilities into intuitive, delightful designs.',
        responsibilities: [
          'Lead user research and translate insights into design decisions',
          'Convert complex AI capabilities into intuitive, delightful designs',
          'Prototype and validate solutions at multiple fidelity levels',
          'Build design system components and patterns',
          'Shape product roadmap through cross-functional partnerships',
          'Gather customer feedback to refine shipped experiences',
          'Elevate design processes, tooling, and culture',
        ],
        requirements: [
          '5+ years UX/UI or product design experience with shipped products',
          'Proficiency designing complex desktop experiences and design systems',
          'Technical or B2B SaaS product background',
          'Portfolio demonstrating strategic thinking, visual craft, business results',
          'Strong cross-functional collaboration and stakeholder influence',
        ],
        preferred: [
          'AI/ML experience',
          'Exceptional taste and keen eye for aesthetics',
          'Comfort navigating ambiguity in emerging AI product design',
          'Track record influencing product decisions',
        ],
        whyInteresting: 'Hybrid work. $1.9B valuation. Enterprise clients: Mars, Marriott, Uber, Vanguard. PST timezone overlap required. Company values: Connect, Challenge, Own. Light-filled offices across 5 major cities.',
      },
    ],
    cultureInsights: [],
    tracking: {
      status: 'watching',
      fitScore: 7,
      whyJoin: ['AI-native Level 4', '$1.9B (2024)'],
      whyNot: ['Hybrid work policy', 'Unknown design culture'],
      nextActions: ['Try Writer product', 'Research founders'],
    },
    lastUpdated: '2026-01-26T18:30:00',
    sources: [
    { title: 'Source', url: 'https://writer.com/blog/series-c-funding-writer-press-release/' },
    { title: 'Source', url: 'https://techcrunch.com/2024/11/12/generative-ai-startup-writer-raises-200m-at-a-1-9b-valuation/' },
    { title: 'Source', url: 'https://startups.gallery/companies/writer' }
  ],
  };
