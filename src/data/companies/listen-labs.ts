import { Company } from '../types';

export const listenLabs: Company = {
    id: 'listen-labs',
    name: 'Listen Labs',
    description: 'AI-first customer research platform that automates qualitative interviews at scale, conducting 1M+ AI-powered interviews for enterprises like Microsoft, Google, and Canva.',
    website: 'https://listenlabs.ai',
    screenshot: '/screenshots/listen-labs-screenshot.png',
    headquarters: 'San Francisco, CA',
    remote: 'No',

    // OG Image
    ogImage: '/og-images/listen-labs-og.webp',


  // Multi-dimensional Tags
  aiTypes: ['search-retrieval'],
  markets: ['b2b'],
  category: 'sales-marketing' as const,

  industries: ['sales-marketing'],

    // Business
    stage: 'Series B',
    valuation: '$500M (Jan 2026)',
    totalFunding: '$100M',
    fundingHistory: [
      { stage: 'Seed', amount: 'Included in Series A', date: '2024', leadInvestors: ['Pear VC'] },
      { stage: 'Series A', amount: '$27M', date: '2025-04', leadInvestors: ['Sequoia Capital'] },
      { stage: 'Series B', amount: '$69M', date: '2026-01', leadInvestors: ['Ribbit Capital'] },
    ],
    revenue: '8-figure annualized revenue (2025)',
    growth: '15x annualized revenue in 9 months; 1M+ interviews conducted',
    runway: 'Strong ($69M Series B closed Jan 2026)',
    customers: 'Microsoft, Google, Canva, Anthropic, Perplexity, Sweetgreen, Robinhood, Nestlé, Chubbies, Emeritus (hundreds of enterprises)',

    // Growth & Potential
    growthMetrics: {
      stage: 'high-growth',
      revenueGrowth: '15x annualized revenue in 9 months (2025)',
      userGrowth: '1M+ interviews; 30M+ participant network across 200 countries',
      signals: [
        'Series B led by Ribbit Capital at $500M valuation',
        '15x revenue growth to 8-figure ARR in 9 months',
        'Enterprise adoption: Microsoft, Google, Canva, Anthropic',
        'Viral billboard hiring stunt: 5M social media views',
        'Grew from 5 to 45 employees; targeting 150',
      ],
      tam: '$56B global market research industry (2023)',
      marketShare: '<0.1% of TAM — massive room for growth',
      ceiling: 'Evolving toward customer intelligence observability layer for enterprises',
      tailwinds: [
        'Faster product cycles require continuous research',
        'AI adoption lowering cost of qualitative research',
        'Enterprise demand for real-time customer insights',
        'Remote-first teams need scalable feedback loops',
      ],
      headwinds: [
        'Intensifying competition (Outset $51M, Aaru $1B val, Keplar)',
        'Foundation model risk — LLM providers could add interview features',
        'Enterprise skepticism about AI research quality',
        'Research ethics and bias concerns',
      ],
      moatType: 'data-flywheel',
      moatStrength: 'Growing: 1M+ interview dataset + 30M participant network + enterprise workflow lock-in.',
    },

    // Competition
    competitors: [
      {
        name: 'Outset',
        description: 'AI-native CX management platform with AI-moderated interviews. $51M raised (Series B Dec 2025).',
        whyTheyWin: '8x revenue growth in 2025; pivoted to CX management platform; backed by 8VC and Bain.',
      },
      {
        name: 'Aaru',
        description: 'Synthetic population AI for market research. $1B headline valuation (Series A Dec 2025).',
        whyTheyWin: 'No real humans needed — synthetic research at zero marginal cost; Redpoint-backed.',
      },
      {
        name: 'Keplar',
        description: 'Voice AI customer interviews via CRM. $3.4M seed from Kleiner Perkins.',
        whyTheyWin: 'Direct CRM integration for existing customer outreach; ex-Google AI voice team.',
      },
      {
        name: 'UserTesting',
        description: 'Remote user research and testing platform (acquired by Thoma Bravo).',
        whyTheyWin: 'Massive enterprise install base and brand recognition.',
      },
      {
        name: 'Maze',
        description: 'Product research and testing platform. $75M+ raised.',
        whyTheyWin: 'Strong product analytics and design team adoption.',
      },
    ],
    marketPosition: 'AI-native market research leader with largest AI interview dataset (1M+) and deepest enterprise penetration',
    moat: [
      'Largest AI interview dataset (1M+ interviews)',
      'Pre-qualified participant network (30M+ across 200 countries)',
      'Enterprise workflow lock-in (Microsoft, Google, Canva)',
      'Data flywheel: more interviews → better AI moderation',
    ],
    vsGiants: 'Foundation model dependency — built on LLMs for interview moderation. ChatGPT/Claude could add interview features, but lack participant network and research methodology rigor.',

    // AI-Native Level
    aiNativeLevel: 'B',
    aiNativeLevelDescription: 'AI is core differentiator: AI autonomously designs interviews, finds participants, conducts conversations with dynamic probing, and synthesizes insights into reports.',
    aiDesignChallenges: [
      'Conversation design for AI interviewers with dynamic probing',
      'Research workflow automation — study setup to insight delivery',
      'Insight synthesis UI for 1000+ interview responses',
      'Trust and transparency in AI interview decisions',
      'Balancing speed with methodological rigor in qualitative research UX',
    ],

    // Founders & Vision
    founders: [
      {
        name: 'Alfred Wahlforss',
        role: 'Co-founder & CEO',
        background: 'Swedish serial entrepreneur, Harvard MSc Data Science, brother founded SoundCloud. Previously co-founded BeFake (viral AI avatar app, 20K downloads day 1), Bemlo ($3.3M raised), and Snabbt.org (Swedish hacker fellowship to SF).',
      },
      {
        name: 'Florian Juengermann',
        role: 'Co-founder & CTO',
        background: 'German IOI medalist, ICPC world finalist. TU Munich CS + Harvard MSc Computational Science. Ex-Tesla Autopilot (presented to Elon Musk). Leads product development.',
      },
    ],
    whyBuilding:
      'Born from frustration: at their previous startup BeFake, they launched a feature users loved in interviews but broader users ignored. Realized they could use LLMs to interview every customer at scale.',
    beliefs: [
      'When you obsess over customers, everything else follows',
      'AI can run interviews at scale without losing conversational depth',
      'Every team — not just researchers — should have access to customer insights',
      'Technical fluency matters everywhere (hires engineers for non-engineering roles)',
    ],
    designPhilosophy: 'No formal design philosophy yet — hiring first product designer. Engineering-driven culture that values technical solutions.',
    greenFlags: [
      'Sequoia + Ribbit Capital backing at $500M valuation',
      '15x revenue growth to 8-figure ARR in 9 months',
      'Founding product designer role = maximum design ownership',
      'Genuinely novel design challenges (AI conversation UX)',
      'Elite technical team (30% IOI medalists)',
      'Customer list: Microsoft, Google, Canva, Anthropic',
    ],
    redFlags: [
      'No existing design team or design culture',
      'Engineering-dominant culture — hires engineers for non-engineering roles',
      'Lone designer among 45+ employees',
      'Below-market base comp ($120-150K for founding role in SF)',
      'Intense competition: Outset ($51M), Aaru ($1B val), Keplar (KP-backed)',
      'Foundation model dependency risk',
    ],

    // Design Opportunity
    designTeam: {
      teamSize: '0 designers (hiring first — ~45 total employees)',
    },
    designWorkType: {
      logicBehavior: {
        level: 'high',
        tasks: [
          'AI interview conversation flow and dynamic probing logic',
          'Research protocol templates and methodology guardrails',
          'Participant matching and audience targeting workflows',
        ],
      },
      evaluation: {
        level: 'high',
        tasks: [
          'Interview quality scoring and insight validation',
          'Response quality metrics and low-quality detection',
          'AI moderation transparency and decision explanation',
        ],
      },
      interface: {
        level: 'high',
        tasks: [
          'End-to-end study builder and research workflow',
          'Insight synthesis dashboards for 1000+ responses',
          'Searchable customer knowledge base',
          'Report generation and highlight reel creation',
        ],
      },
    },
    productStage: '1→10',

    // Product & User Context
    targetAudiences: {
        primary: 'Enterprise marketing and product research teams needing continuous customer insights',
        secondary: 'UX researchers, product managers, and strategy teams at mid-to-large companies',
    },
    userProblems: [
        'Qualitative research takes weeks/months and costs $50K+ per study',
        'Insights from research don\'t reach decision-makers in time',
        'Survey data is shallow — lacks the depth of conversational probing',
        'Research teams are bottlenecked — can only run 2-4 studies per year',
        'Customer insights are siloed in research teams, not distributed to product/marketing',
    ],

    // Designer Links
    designerLinks: [
      { name: 'Alfred Wahlforss', role: 'Co-founder & CEO', platform: 'linkedin', url: 'https://linkedin.com/in/wahlforss' },
      { name: 'Florian Juengermann', role: 'Co-founder & CTO', platform: 'linkedin', url: 'https://linkedin.com/in/juengermann' },
      { name: 'Erik Bartlett', role: 'Founding Engineer', platform: 'linkedin', url: 'https://linkedin.com/in/erik-bartlett-4321103a' },
      { name: 'Florian Juengermann', role: 'Co-founder & CTO', platform: 'blog', url: 'https://florianj.com/' },
    ],

    // Open Roles
    openRoles: [
      {
        title: 'Founding Product Designer',
        location: 'San Francisco, CA (Onsite)',
        url: 'https://jobs.ashbyhq.com/listenlabs/a8d40c4f-2367-493e-bd41-f3987abb4d4b',
        level: 'Founding',
        type: 'full-time',
      },
    ],

    // Culture Insights
    cultureInsights: [
      { source: 'linkedin', sentiment: 'neutral', content: 'Engineering-heavy: 30% of engineers are IOI medalists; hires engineers for non-engineering roles' },
      { source: 'techcrunch', sentiment: 'positive', content: 'Aggressive growth: 5 to 45 employees in one year, targeting 150', url: 'https://venturebeat.com/technology/listen-labs-raises-usd69m-after-viral-billboard-hiring-stunt-to-scale-ai' },
      { source: 'techcrunch', sentiment: 'positive', content: 'Creative hiring: spent $5K on SF billboard with coded AI puzzle, 5M social media views, some solvers hired', url: 'https://www.cbsnews.com/sanfrancisco/news/san-francisco-billboard-challenge-puts-ai-engineers-to-the-test/' },
      { source: 'linkedin', sentiment: 'neutral', content: 'Flat org: most roles report directly to CEO Alfred Wahlforss', url: 'https://theorg.com/org/listen-labs' },
      { source: 'linkedin', sentiment: 'neutral', content: 'Technical culture: co-founded by IOI medalist CTO who interned at Tesla Autopilot and presented to Elon Musk' },
    ],

    // My Tracking
    tracking: {
      status: 'watching',
      fitScore: 8,
      whyJoin: [
        'Founding product designer at $500M Sequoia-backed AI company',
        'Genuinely novel design challenges: AI conversation UX, insight synthesis at scale',
        'Maximum design ownership — build everything from zero',
        'Massive market ($56B) with 15x revenue growth trajectory',
        'Elite technical team with strong product instincts',
      ],
      whyNot: [
        'No design culture, peers, or mentorship — lone designer among 45+',
        'Engineering-dominant org may undervalue design',
        'Below-market base comp ($120-150K) for SF founding role',
        'Intense competition from well-funded rivals (Outset, Aaru, Keplar)',
        'Foundation model dependency risk',
      ],
      nextActions: [
        'Apply for Founding Product Designer role on Ashby',
        'Request call with Alfred Wahlforss to assess design culture openness',
        'Try product demo to evaluate current UX quality',
        'Ask about design headcount growth plan',
        'Negotiate equity carefully — founding designer at $500M is valuable',
      ],
      notes: 'Deep research completed 2026-02-11. Score: 7.15/10. See src/data/deep-research/listen-labs.md for full report.',
    },

    // Meta
    lastUpdated: '2026-02-11T00:00:00',
    sources: [
      { title: 'Listen Labs Website', url: 'https://listenlabs.ai' },
      { title: 'Founders Letter', url: 'https://listenlabs.ai/founders-letter' },
      { title: 'Series B PR Newswire', url: 'https://www.prnewswire.com/news-releases/listen-labs-raises-69-million-series-b-to-bring-customer-voices-into-every-decision-302661000.html' },
      { title: 'Fortune: $27M to reinvent customer research', url: 'https://fortune.com/article/ai-startup-listen-labs-sequoia-27-million-funding/' },
      { title: 'VentureBeat: $69M after viral billboard stunt', url: 'https://venturebeat.com/technology/listen-labs-raises-usd69m-after-viral-billboard-hiring-stunt-to-scale-ai' },
      { title: 'Sequoia: Partnering with Listen Labs', url: 'https://sequoiacap.com/article/partnering-with-listen-labs-next-level-customer-obsession/' },
      { title: 'Pear VC: Human insights layer', url: 'https://pear.vc/partnering-with-listen-labs-automating-customer-research-to-create-a-human-insights-layer/' },
      { title: 'Pear VC: Series B partnership', url: 'https://pear.vc/listen-labs-series-b/' },
      { title: 'eWeek: $500M AI Startup', url: 'https://www.eweek.com/news/listen-labs-ai-startup-microsoft-customers/' },
      { title: 'Crunchbase', url: 'https://www.crunchbase.com/organization/listen-labs' },
      { title: 'TheOrg: Org Chart', url: 'https://theorg.com/org/listen-labs' },
      { title: 'Ashby: Product Designer Job', url: 'https://jobs.ashbyhq.com/listenlabs/a8d40c4f-2367-493e-bd41-f3987abb4d4b' },
      { title: 'LinkedIn Company', url: 'https://www.linkedin.com/company/listenlabss' },
      { title: 'Greenbook Podcast: Alfred Wahlforss', url: 'https://www.greenbook.org/podcast-network/the-greenbook-podcast/listen-labs-path-to-winning-the-greenbook-insight-innovation-competition' },
      { title: 'Emeritus Case Study', url: 'https://listenlabs.ai/case-studies/emeritus' },
      { title: 'Tracxn Profile', url: 'https://tracxn.com/d/companies/listen-labs/__rC3UmpAr-lCC4lE6RAaV1NUQOhLYTZulJHaLc6vs_zI' },
    ],
  };
