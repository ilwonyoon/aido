import { Company } from '../types';

export const gamma: Company = {
    id: 'gamma',
    name: 'Gamma',
    description: 'AI-powered presentation and document creation. Create beautiful, interactive content with AI in seconds—no slides required.',
    website: 'https://gamma.app',
    screenshot: '/screenshots/gamma-screenshot.png',

    // Location
    headquarters: 'San Francisco, CA',
    region: 'sf-bay-area' as const,
    remote: 'Yes',

    // OG Image
    ogImage: '/og-images/gamma-og.webp',


  // Multi-dimensional Tags
  aiTypes: ['code-assistant', 'text-assistant'],
  markets: ['b2b'],
  category: 'developer-tools' as const,

  industries: ['developer-tools', 'creative-media'],

    // Business
    stage: 'Series B',
    normalizedStage: 'series-b' as const,
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
    customers: '70M+ users (600K+ paying subscribers, 40% of Fortune 500 have users)',

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
        background: 'Stanford BS/MS, Berkeley Haas. Previously Head of Strategic Finance at Optimizely, COO at ClearBrain (acq. by Amplitude). Product-obsessed leader with "unparalleled design taste" (a16z). Finance + strategy background, not trained designer.',
      },
      {
        name: 'Jon Noronha',
        role: 'CPO & Co-Founder',
        background: 'Harvard CS. Previously VP Product at Optimizely, PM intern at Microsoft. Strong quantitative + product background. Pioneered A/B testing at Optimizely. Leads PLG strategy.',
      },
      {
        name: 'James Fox',
        role: 'Co-Founder',
        background: 'Cal Poly SLO (2003-2008). Staff Software Engineer at Optimizely (2014-2020). Co-founded Join Tilt. Expert in TypeScript, React, Redux, VueJS, NodeJS.',
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
      'Design-obsessed leadership: CEO Grant Lee + founding Head of Design Zach Leach',
      '$100M ARR profitably with 52 people — $1.96M revenue per employee',
      '70M+ users, 3.3x YoY revenue growth, profitable since 2023',
      'Pivoted successfully to AI in 2022, launched Gamma Agent in 2025',
      'a16z-backed at $2.1B with secondary for employee liquidity',
    ],
    redFlags: [
      'Canva ($2.55B ARR, 220M MAU) is the elephant in the room with AI features',
      'Microsoft PowerPoint + Copilot has enterprise governance advantage',
      'Lean team = high expectations, potential burnout risk',
      'Export/interop limitations: web-native format loses fidelity in PowerPoint export',
      'Design leadership ceiling: narrow path above Head of Design level',
    ],

    // Design Opportunity
    designTeam: {
      cpo: 'Jon Noronha (Co-Founder, Harvard CS, ex-VP Product Optimizely)',
      designHead: 'Zach Leach (Head of Design, founding member since 2020, ex-Sr Staff Product Designer Optimizely)',
      teamSize: '7-8 designers (Head of Design, Creative Director, 5-6 ICs including Design Engineer)',
      notableMembers: [
        { name: 'Zach Leach', role: 'Head of Design' },
        { name: 'Melissae Elhajj', role: 'Creative Director' },
        { name: 'Nik Payne', role: 'Product Designer' },
        { name: 'Alison Bemis', role: 'Product Designer' },
        { name: 'Michelle Tran', role: 'Product Designer' },
      ],
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
    designerLinks: [
      { name: 'Zach Leach', role: 'Head of Design', platform: 'linkedin', url: 'https://www.linkedin.com/in/zleach/' },
      { name: 'Zach Leach', role: 'Head of Design', platform: 'twitter', url: 'https://x.com/thisiszach' },
      { name: 'Melissae Elhajj', role: 'Creative Director', platform: 'linkedin', url: 'https://www.linkedin.com/in/melissaeart' },
      { name: 'Nik Payne', role: 'Product Designer', platform: 'linkedin', url: 'https://www.linkedin.com/in/nikpayne/' },
      { name: 'Nik Payne', role: 'Product Designer', platform: 'blog', url: 'https://nikpayne.com/' },
      { name: 'Alison Bemis', role: 'Product Designer', platform: 'linkedin', url: 'https://www.linkedin.com/in/alisonbemis/' },
      { name: 'Alison Bemis', role: 'Product Designer', platform: 'blog', url: 'https://www.alisonbemis.com/' },
      { name: 'Michelle Tran', role: 'Product Designer', platform: 'linkedin', url: 'https://www.linkedin.com/in/michelle-tran-282399b4/' },
      { name: 'Grant Lee', role: 'CEO & Co-Founder', platform: 'linkedin', url: 'https://www.linkedin.com/in/grantslee/' },
      { name: 'Grant Lee', role: 'CEO & Co-Founder', platform: 'twitter', url: 'https://x.com/thisisgrantlee' },
      { name: 'Jon Noronha', role: 'CPO & Co-Founder', platform: 'linkedin', url: 'https://www.linkedin.com/in/jonnoronha/' },
    ],

    // Open Roles
    openRoles: [],

    // Culture Insights
    cultureInsights: [
      {
        source: 'careers' as const,
        sentiment: 'positive' as const,
        content: 'Warm, quirky culture fueled by curiosity. Strong bias towards action. All 3 founders + Head of Design came from Optimizely — team has worked together ~10 years.',
        url: 'https://careers.gamma.app/',
      },
      {
        source: 'linkedin' as const,
        sentiment: 'positive' as const,
        content: 'Design team uses AI extensively in workflow: ChatGPT for multilingual feedback synthesis, Midjourney for art direction, Claude for hiring docs, Replicate for image processing.',
        url: 'https://www.chatprd.ai/how-i-ai/gammas-ai-for-design-art-direction-hiring',
      },
      {
        source: 'linkedin' as const,
        sentiment: 'positive' as const,
        content: 'Zach Leach (Head of Design) views AI as "creative partner" — personal data researcher, art department, and hiring coordinator combined.',
        url: 'https://www.lennysnewsletter.com/p/gammas-head-of-design-on-how-his',
      },
      {
        source: 'techcrunch' as const,
        sentiment: 'positive' as const,
        content: 'Extreme efficiency culture: $1.96M ARR per employee. PLG-first with 40% word-of-mouth, 25% social referrals. 1,000+ micro-influencer program.',
        url: 'https://techcrunch.com/2025/11/10/ai-powerpoint-killer-gamma-hits-2-1b-valuation-100m-arr-founder-says/',
      },
      {
        source: 'careers' as const,
        sentiment: 'positive' as const,
        content: 'Remote-friendly. Distributed team with SF headquarters. Secondary funding round provided employee liquidity — signal of caring about team.',
        url: 'https://careers.gamma.app/',
      },
    ],

    // My Tracking
    tracking: {
      status: 'interested',
      fitScore: 9,
      whyJoin: [
        'Design-obsessed founding team: CEO with "unparalleled design taste" + Zach Leach as founding Head of Design',
        '$100M ARR profitable with 52 people — extreme capital efficiency, real equity value',
        '70M+ users, 3.3x YoY growth, 600K+ paying subscribers',
        'Novel AI design challenges: human-AI collaboration for visual content creation at massive scale',
        'Design team of 7-8 means enormous influence and scope per designer',
        'Remote-friendly, a16z-backed, IPO candidate in 2-3 years',
      ],
      whyNot: [
        'Lean team (52 people) = very high expectations, potential burnout',
        'Canva ($2.55B ARR) and Microsoft (PowerPoint+Copilot) are formidable competitors',
        'Design leadership ceiling is narrow (Head of Design → CEO only)',
      ],
      nextActions: [
        'Use Gamma extensively — evaluate AI generation UX critically',
        'Listen to Zach Leach on Dive Club + How I AI podcasts',
        'Listen to Grant Lee on Lenny\'s Podcast for founding story',
        'Apply for Staff Product Designer role',
        'Reach out to Nik Payne or Alison Bemis for culture insights',
      ],
      notes: 'Deep research completed 2026-02-11. See src/data/deep-research/gamma.md for full report. Score: 8.7/10.',
    },

    growthMetrics: {
      stage: 'hypergrowth',
      revenueGrowth: "$101.88M ARR (Oct 2025), up from $30.5M (end 2024) — 3.3x YoY",
      userGrowth: "70M+ users, 600K+ paying subscribers",
      signals: ["$2.1B valuation at 21x revenue", "$100M ARR with 52-person team ($1.96M/employee)", "Profitable since 2023", "40% of Fortune 500 have Gamma users", "Launched Gamma 3.0 with AI Agent (Sep 2025)"],
      tam: "$36.35B AI productivity tools market by 2030. Presentation software market growing 10.8% CAGR.",
      marketShare: "~0.5% of total presentation market, but dominant in AI-native segment",
      ceiling: "Mid innings: expanding beyond presentations to websites, documents, social media. IPO candidate in 2-3 years.",
      tailwinds: ["AI-native architecture advantage over bolted-on AI", "Web-native format drives viral adoption", "Credit-based monetization creates natural conversion", "International growth (60%+ non-US users)"],
      headwinds: ["Canva $2.55B ARR adding AI features + acquired Leonardo AI ($370M)", "PowerPoint + Copilot enterprise governance advantage", "Google Slides + Gemini free in education"],
      moatType: 'technology',
      moatStrength: "Medium: AI-native product experience + 70M user distribution + web-native format. No proprietary ML models (uses open-source via Baseten). Moat is in product craft and UX, not technology.",
    },

    // Meta
    lastUpdated: '2026-02-18',
    sources: [
    { title: 'TechCrunch: AI PowerPoint-killer Gamma hits $2.1B', url: 'https://techcrunch.com/2025/11/10/ai-powerpoint-killer-gamma-hits-2-1b-valuation-100m-arr-founder-says/' },
    { title: 'Lenny\'s Podcast: Grant Lee on building Gamma', url: 'https://www.lennysnewsletter.com/p/how-50-people-built-a-profitable-ai-unicorn' },
    { title: 'a16z: Investing in Gamma', url: 'https://a16z.com/announcement/investing-in-gamma/' },
    { title: 'Sacra: Gamma revenue & valuation', url: 'https://sacra.com/c/gamma/' },
    { title: 'Lenny\'s How I AI: Zach Leach design workflow', url: 'https://www.lennysnewsletter.com/p/gammas-head-of-design-on-how-his' },
    { title: 'Baseten: Gamma AI infrastructure', url: 'https://www.baseten.co/resources/customers/how-gamma-makes-building-presentations-criminally-fun/' },
    { title: 'Sequoia: Jon Noronha on scaling Gamma', url: 'https://sequoiacap.com/podcast/training-data-jon-noronha/' },
  ],
};
