import { Company } from '../types';

export const avoca: Company = {
  id: 'avoca',
  name: 'Avoca',
  description: 'AI voice agent and coaching platform exclusively for home services and trades businesses — answers 100% of calls, books jobs, and coaches CSRs in real time.',
  website: 'https://www.avoca.ai',
  headquarters: 'New York, NY',
  remote: 'Unknown',

  // Multi-dimensional Tags
  aiTypes: ['conversation-ai', 'automation'],
  markets: ['smb', 'b2b'],
  category: 'vertical-saas' as const,
  industries: ['other'],

  // Business
  stage: 'Series B',
  valuation: '$1B (Apr 2026)',
  totalFunding: '$125M+',
  fundingHistory: [
    { stage: 'Seed', amount: '$500K', date: '2022-01', leadInvestors: ['Pioneer Fund', 'Outbound Capital'] },
    { stage: 'Seed', amount: '~$10M', date: '2024-10', leadInvestors: ['Y Combinator'] },
    { stage: 'Series A', amount: 'Undisclosed', date: '2025-06', leadInvestors: ['Kleiner Perkins'] },
    { stage: 'Series B', amount: '$125M+ total raised across Seed-Series B', date: '2026-04', valuation: '$1B', leadInvestors: ['Meritech', 'General Catalyst'] },
  ],
  revenue: 'Unknown',
  growth: 'On track to book $1B in jobs in 2026; grew to ~100 employees in 3 years; Harmonic Hot 25 Q1 2026',
  runway: 'Very strong (Series B / $1B valuation, Apr 2026)',
  customers: 'Home services contractors: HVAC, plumbing, electrical, roofing businesses',

  // Growth & Potential
  growthMetrics: {
    stage: 'high-growth',
    revenueGrowth: 'Unknown',
    userGrowth: '100 employees by Q1 2026 (from ~10 in 2022); Harmonic Hot 25 Q1 2026 signal',
    signals: [
      '$125M+ raised across Seed, Series A, and Series B at $1B valuation (Apr 2026)',
      'Series B led by Meritech and General Catalyst; Series A led by Kleiner Perkins',
      'On track to book $1B in jobs in 2026',
      'Named to Harmonic Hot 25 Q1 2026 — momentum signal',
      'YC-backed (S22) with strong operator pedigree',
    ],
    tam: '$50B+ home services industry (HVAC, plumbing, roofing = $500B+ labor market)',
    marketShare: '<0.1% of TAM = massive upside',
    ceiling: 'Early innings: most trades businesses still use human-only call centers',
    tailwinds: [
      'Labor shortages in trades forcing technology adoption',
      'Voice AI maturation enabling near-human call quality',
      'Home services industry underdigitized vs. other SMB verticals',
      'Booking abandonment (unanswered calls) costs contractors $50K-$500K/year',
      'Private equity roll-ups creating larger trades businesses that need scalable ops',
    ],
    headwinds: [
      'Trades business owners are skeptical of tech — trust is earned slowly',
      'AI voice still has failure modes that hurt customer experience when they occur',
      'Competitors like Numa, Hatch, and others targeting same market',
      'ServiceTitan and Jobber (SMB software incumbents) could build or acquire similar features',
    ],
    moatType: 'data-flywheel',
    moatStrength: 'Trades-specific AI model trained exclusively on home services calls = superior booking and objection handling vs. general voice AI.',
  },

  // Competition
  competitors: [
    {
      name: 'Numa',
      description: 'AI-powered phone and texting for automotive dealerships, expanding to other verticals.',
      whyTheyWin: 'Auto dealership focus gives strong domain depth, well-funded.',
    },
    {
      name: 'Hatch',
      description: 'AI texting and follow-up for home services.',
      whyTheyWin: 'Text-first approach complements voice, strong contractor marketing fit.',
    },
    {
      name: 'ServiceTitan',
      description: 'Dominant SMB software platform for trades ($9B valuation).',
      whyTheyWin: 'Massive installed base — could add AI voice as a feature and kill standalone players.',
    },
  ],
  moat: [
    'Trades-exclusive AI training data (not a general voice AI)',
    'Two-product flywheel: Responder answers calls, Coach improves human CSRs — mutual reinforcement',
    'Deep CRM integrations with ServiceTitan, Jobber, HouseCall Pro',
  ],

  // AI-Native Level
  aiNativeLevel: 'A',
  aiNativeLevelDescription: 'AI IS the Product: Avoca\'s entire value prop is the AI voice agent answering 100% of calls and AI coaching CSRs. Remove AI and there is no product.',
  aiDesignChallenges: [
    'Designing conversation flows for home services calls (booking logic, objection handling, upsells)',
    'Coaching UI: how do you display AI real-time coaching feedback to a CSR mid-call?',
    'Trust design: convincing trades business owners their customers won\'t notice it\'s AI',
    'Analytics dashboard design for call performance, booking rate, abandonment metrics',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Tyson Chen',
      role: 'CEO & Co-founder',
      background: 'MIT CS (generative AI for drug discovery), BCG (AI for F500), PM at Nuro (autonomous delivery). Personal connection: mom runs a local acupuncture business.',
    },
    {
      name: 'Apurva Shrivastava',
      role: 'CTO & Co-founder',
      background: '2nd-time founder. MIT CS, Apple (AI products), Retool (worked with largest enterprise customers). Engineering depth in AI-native product.',
    },
  ],
  whyBuilding: '"When we started Avoca, the home services industry was lagging behind on technology. Contractors were losing customers to missed calls and spending hours on the phone instead of doing the work they love." — Tyson Chen',
  beliefs: [
    'Trades businesses deserve enterprise-grade AI without enterprise-grade complexity',
    'AI should answer 100% of calls — not help humans answer calls — to solve the problem properly',
    'Vertical AI beats horizontal: trades-specific training dramatically outperforms general voice AI',
  ],
  designPhilosophy: 'Unknown',

  greenFlags: [
    'Trades-vertical focus is a moat vs. general voice AI competitors',
    '$125M+ raised at $1B valuation from Meritech, General Catalyst, Kleiner Perkins, Amplify, Alt Capital, BoxGroup, Nexus, and YC',
    'Harmonic Hot 25 Q1 2026 — independent signal of growth momentum',
    'On track to book $1B in jobs in 2026 — unusually strong vertical AI operating signal',
    'Two-product model (Responder + Coach) = multiple revenue streams and customer lock-in',
    'MIT + BCG + Nuro pedigree for both founders = strong operator-researcher combo',
  ],
  redFlags: [
    'ServiceTitan ($9B) could replicate core features as add-on to their dominant platform',
    'Revenue unknown — hard to assess PMF depth without ARR data',
    'Trades owners are late adopters of technology — sales cycle and churn risk is real',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: 'Unknown (company size ~100)',
    designHead: 'Unknown',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Conversation flow design: booking logic, objection scripts, handoff rules',
        'Real-time coaching overlay design (what does the AI say to the CSR mid-call?)',
        'Call routing and escalation logic for edge cases AI can\'t handle',
      ],
    },
    evaluation: {
      level: 'high',
      tasks: [
        'Call performance analytics: booking rate, abandonment, average handle time',
        'AI vs. human performance comparison dashboards',
        'Call grading and quality scoring UI for managers',
      ],
    },
    interface: {
      level: 'medium',
      tasks: [
        'Business owner dashboard (calls, bookings, revenue impact)',
        'CSR coaching interface (real-time + post-call feedback)',
        'CRM integration setup and configuration flows',
      ],
    },
  },
  productStage: '1→10',

  // Open Roles
  openRoles: [
    {
      title: 'Product Designer',
      location: 'New York, NY',
      url: 'https://www.avoca.ai/careers?ashby_jid=fd85e19f-12cf-421e-9ef5-afc4997c071e',
      type: 'full-time',
      aboutRole: 'Design Avoca\'s AI-powered conversational platform and core B2B SaaS workflows for service businesses.',
    },
  ],
  designerLinks: [],
  cultureInsights: [],

  // My Tracking
  tracking: {
    status: 'watching',
    fitScore: 8,
    whyJoin: [
      'AI IS the product (Level A) = frontier AI UX design challenges every day',
      'Real-time coaching UI is one of the most novel AI interaction design problems',
      'High-growth with strong signal (Harmonic Hot 25, Series B, $1B valuation)',
      'Vertical AI approach = clear product differentiation and design focus',
    ],
    whyNot: [
      'Trades/home services is a narrow vertical — design portfolio may not be broadly recognized',
      'High valuation may compress equity upside from here',
      'NYC but remote policy unclear — office days unknown',
    ],
    nextActions: [
      'Review and apply to open Product Designer role',
      'Review product screenshots/demos to assess design quality',
    ],
  },

  // Meta
  lastUpdated: '2026-04-27T00:00:00',
  sources: [
    { title: 'Avoca raises $125M+ at $1B valuation — PRNewswire', url: 'https://www.prnewswire.com/news-releases/avoca-raises-125m-at-1b-valuation-to-power-americas-services-economy-with-ai-302753962.html' },
    { title: 'Avoca careers', url: 'https://www.avoca.ai/careers?ashby_jid=fd85e19f-12cf-421e-9ef5-afc4997c071e' },
    { title: 'Avoca — YC company profile', url: 'https://www.ycombinator.com/companies/avoca' },
    { title: 'Avoca officially launches — Homepros', url: 'https://homepros.news/home-services-startup-avoca-lands-investment-officially-launches/' },
    { title: 'Avoca — Harmonic Hot 25 Q1 2026', url: 'https://www.harmonic.ai/hot-25-companies/q1-2026' },
    { title: 'Avoca — Crunchbase', url: 'https://www.crunchbase.com/organization/avoca-ai' },
    { title: 'How Avoca\'s AI Books Every Call — Avoca Blog', url: 'https://www.avoca.ai/blog/avocas-ai-answers-the-phones-100-of-the-time-tyson-chen-avoca-rilla-labs-episode-15' },
    { title: 'Avoca AI Funding Analysis — Extruct AI', url: 'https://www.extruct.ai/hub/avoca-ai-funding/' },
  ],
};
