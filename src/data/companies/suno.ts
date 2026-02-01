import { Company } from '../types';

export const suno: Company = {
    id: 'suno',
    name: 'Suno',
    description: 'AI-powered music creation platform helping anyone turn ideas into original songs and fully produced tracks.',
    website: 'https://suno.com',
    headquarters: 'Cambridge, MA',
    remote: 'No',

    // OG Image
    ogImage: '/og-images/suno-og.webp',


  // Multi-dimensional Tags
  aiTypes: ['code-assistant'],
  markets: ['b2b'],
  industries: ['infrastructure', 'developer-tools'],

    // Business
    stage: 'Series C',
    valuation: '$2.45B (Nov 2025)',
    totalFunding: 'Unknown',
    fundingHistory: [
      {
        stage: 'Series C',
        amount: '$250M',
        date: '2025-11',
        valuation: '$2.45B',
        leadInvestors: ['Menlo Ventures', 'NVentures', 'Hallwood Media', 'Lightspeed', 'Matrix'],
      },
    ],
    revenue: 'Reported ~$200M revenue (Nov 2025)',
    growth: 'Unknown',
    runway: 'Strong (Series C in Nov 2025)',
    customers: 'Unknown',

    // Competition
    competitors: [
      {
        name: 'Udio',
        description: 'AI music generation platform focused on full-track creation.',
        whyTheyWin: 'Strong model quality and rapid iteration in the same creator segment.',
      },
      {
        name: 'Stable Audio (Stability AI)',
        description: 'Text-to-music and audio generation tools for creators and pros.',
        whyTheyWin: 'Broader AI ecosystem and tooling around creative workflows.',
      },
      {
        name: 'Boomy',
        description: 'AI music generator focused on quick song creation and distribution.',
        whyTheyWin: 'Distribution and publishing pipeline with large creator base.',
      },
      {
        name: 'Soundraw',
        description: 'AI music generation for creators and commercial licensing.',
        whyTheyWin: 'Clear licensing proposition for commercial use cases.',
      },
    ],
    marketPosition: 'Consumer-first AI music creation platform for generating full songs fast.',
    moat: [
      'End-to-end product experience for creation + listening, not just model outputs',
      'Strong product taste focused on craft, interaction design, and quality',
      'Community-driven creativity loop that encourages sharing and iteration',
    ],
    vsGiants: 'Differentiates on music-specific UX and creation workflows rather than general-purpose AI distribution.',

    // AI-Native Level
    aiNativeLevel: 'A',
    aiNativeLevelDescription: 'AI is the product: the core experience is generating music from prompts and iterative edits.',
    aiDesignChallenges: [
      'Designing user control over style, structure, and quality in generative music',
      'Building trust in output quality, originality, and consistency',
      'Balancing speed of generation with meaningful creative iteration',
      'Communicating model limitations and copyright considerations clearly',
    ],

    // Founders & Vision
    founders: [
      {
        name: 'Mikey Shulman',
        role: 'Co-founder & CEO',
        background: 'Co-founder and CEO; leads product and company direction.',
      },
    ],
    whyBuilding:
      'To let anyone create meaningful music quickly and unlock more joy in musical expression.',
    beliefs: [
      'Music creation should be accessible to everyone',
      'Great creative tools blend speed with high craft',
      'The product experience matters as much as model quality',
    ],
    greenFlags: [
      'Large Series C raise at $2.45B valuation (Nov 2025)',
      'Reported ~$200M revenue indicates strong demand',
    ],
    redFlags: [
      'Ongoing legal and copyright scrutiny in AI music category',
      'High competition and fast-moving market dynamics',
    ],

    // Design Opportunity
    designTeam: {
      teamSize: 'Unknown',
    },
    designWorkType: {
      logicBehavior: {
        level: 'high',
        tasks: [
          'Prompt-to-music control systems and iteration flows',
          'Feedback loops for refining output style and structure',
          'Quality guardrails and trust cues in generative flows',
        ],
      },
      evaluation: {
        level: 'high',
        tasks: [
          'Defining and testing quality metrics for generated music',
          'User feedback capture for model improvements',
          'A/B testing of creative workflows and iteration UX',
        ],
      },
      interface: {
        level: 'high',
        tasks: [
          'Cross-platform creation experience (desktop + mobile)',
          'Listening, sharing, and version management interfaces',
          'Creator onboarding and tutorial flows',
        ],
      },
    },
    productStage: '10→100',

    // Product & User Context
    targetAudiences: {
      primary: 'Everyday creators and hobbyists who want to make music fast',
      secondary: 'Independent musicians and producers',
    },
    userProblems: [
      'Making original music is hard without technical skills or tools',
      'Creators want high-quality results from minimal input',
      'Iteration and versioning of ideas can be slow and fragmented',
      'Sharing and collaborating on drafts is cumbersome',
    ],

    // Designer Links
    designerLinks: [],

    // Open Roles
    openRoles: [
      {
        title: 'Staff Product Designer',
        location: 'New York City, NY; Boston, MA; Los Angeles, CA (Onsite)',
        url: 'https://jobs.ashbyhq.com/suno/350abb93-94b0-44e1-9f40-362736bbd9ed?departmentId=a35a807e-03df-4167-a8a2-d0e85fa7dfb3',
        level: 'Staff',
        type: 'full-time',
        compensation: '$200K-$280K + equity',
        postedDate: '2025-11',
        aboutRole:
          'Drive end-to-end design for the web app across desktop and mobile, shaping core user flows and interaction details for music creation and listening.',
        responsibilities: [
          'Elevate the design of the web and mobile experience across platforms.',
          'Collaborate closely with Product, Engineering, Research, and Data.',
          'Maintain a high bar for craft, microinteractions, and motion design.',
          'Push UI/UX boundaries while keeping the experience intuitive.',
        ],
        requirements: [
          'Experience crafting delightful consumer product design.',
          'Bias for action in fast-paced, ambiguous environments.',
          'Comfort bringing clarity to fast-moving problem spaces.',
          'Expertise in Figma; bonus for animation prototyping and design systems.',
          'Love of music (listening, exploring, or making).',
        ],
        whyInteresting:
          'High-craft consumer product with strong design emphasis, onsite collaboration in major creative hubs, and significant company equity and benefits.',
      },
    ],

    // Culture Insights
    cultureInsights: [
      {
        source: 'careers',
        sentiment: 'positive',
        content:
          'Emphasis on craft and quality with strong benefits (equity, 401(k) match, healthcare, unlimited PTO, parental leave, and creative education stipend).',
        url: 'https://jobs.ashbyhq.com/suno/350abb93-94b0-44e1-9f40-362736bbd9ed?departmentId=a35a807e-03df-4167-a8a2-d0e85fa7dfb3',
      },
    ],

    // My Tracking
    tracking: {
      status: 'researching',
      fitScore: 8,
      whyJoin: [
        'Design-driven consumer product with generative AI at the core',
        'High craft expectations and cross-platform design scope',
      ],
      whyNot: [
        'Onsite-only role limits location flexibility',
        'Copyright and legal uncertainty in AI music',
      ],
      nextActions: [
        'Confirm design leadership and team structure on LinkedIn',
        'Track additional design openings or related roles',
      ],
    },

    // Meta
    lastUpdated: '2026-01-27T10:00:00',
    sources: [
      { title: 'Suno About', url: 'https://suno.com/about' },
      { title: 'Suno Series C (PRNewswire)', url: 'https://www.prnewswire.com/news-releases/suno-raises-250m-at-a-2-45b-valuation-302620166.html' },
      { title: 'Suno Series C (TechCrunch)', url: 'https://techcrunch.com/2025/11/19/legally-embattled-ai-music-startup-suno-raises-at-2-45b-valuation-on-200m-revenue/' },
      { title: 'Suno Staff Product Designer (Ashby)', url: 'https://jobs.ashbyhq.com/suno/350abb93-94b0-44e1-9f40-362736bbd9ed?departmentId=a35a807e-03df-4167-a8a2-d0e85fa7dfb3' },
      { title: 'Udio', url: 'https://www.udio.com' },
      { title: 'Stable Audio', url: 'https://stability.ai/news/stable-audio-2-0' },
      { title: 'Boomy', url: 'https://boomy.com' },
      { title: 'Soundraw', url: 'https://soundraw.io' },
    ],
  };
