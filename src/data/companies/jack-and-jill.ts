import { Company } from '../types';

export const jackAndJill: Company = {
  id: 'jack-and-jill',
  name: 'Jack & Jill',
  description: 'AI-powered two-sided recruitment platform with conversational AI agents — Jack for job seekers and Jill for hiring teams — that replaces traditional recruiters with voice-based matching.',
  website: 'https://jackandjill.ai',
  headquarters: 'London, UK',
  remote: 'Hybrid',

    // OG Image
    ogImage: '/og-images/jack-and-jill-og.webp',

  // Category
  category: 'enterprise-ops',

  // Multi-dimensional Tags
  aiTypes: ['conversation-ai', 'automation'],
  markets: ['b2c', 'b2b'],
  industries: ['other'],

  // Business
  stage: 'Seed',
  valuation: 'Unknown',
  totalFunding: '$20M',
  fundingHistory: [
    {
      stage: 'Seed',
      amount: '$20M',
      date: '2025-10',
      leadInvestors: ['Creandum'],
    },
  ],
  revenue: 'Unknown',
  growth: '49K+ candidates spoken to in first 6 months; hundreds of companies using Jill',
  runway: 'Strong (fresh $20M seed, Oct 2025)',
  customers: '49K+ candidates, hundreds of fast-growing companies (incl. TrueLayer)',

  // Growth & Potential
  growthMetrics: {
    stage: 'early-growth',
    revenueGrowth: 'Unknown',
    userGrowth: '0 → 49K+ candidates in 6 months',
    signals: [
      '$20M seed led by Creandum (early Spotify/Klarna backer)',
      '75+ angel investors including Anthropic, Lovable, ElevenLabs angels',
      'Expanding to US and Europe with new funding',
      'Hiring founding team across engineering, design, and GTM',
    ],
    tam: '$500B+ global recruitment market',
    marketShare: '<0.01% of TAM = massive upside potential',
    ceiling: 'Early innings: AI-native recruitment replacing legacy job boards and agencies',
    tailwinds: [
      'Broken recruitment system with high friction for both sides',
      'Voice AI technology maturing rapidly',
      'Companies seeking to cut recruitment costs (10% vs 20% agency fees)',
      'AI-generated application spam making traditional job boards worse',
    ],
    headwinds: [
      'LinkedIn dominance in professional recruitment',
      'Trust barrier for AI-driven hiring decisions',
      'Cold start problem in two-sided marketplace',
      'Privacy concerns around AI voice conversations',
    ],
    moatType: 'network-effects',
    moatStrength: 'Building: two-sided network where more candidates = better matching for companies and vice versa',
  },

  // Competition
  competitors: [
    {
      name: 'LinkedIn',
      description: 'Dominant professional networking and job search platform.',
      whyTheyWin: 'Massive network effects with 900M+ users; established recruiter workflows.',
    },
    {
      name: 'Indeed',
      description: 'Largest job board aggregator globally.',
      whyTheyWin: 'Scale of job listings and brand recognition among job seekers.',
    },
    {
      name: 'Dex',
      description: 'AI recruitment platform with end-to-end automation including sourcing, screening, and interviews.',
      whyTheyWin: 'Full-stack automation with algorithmic candidate success prediction.',
    },
    {
      name: 'AINA',
      description: 'Fair AI recruiter focused on unbiased real-time candidate evaluation.',
      whyTheyWin: 'Emphasis on fairness and adaptive interviewing.',
    },
    {
      name: 'Sonara AI',
      description: 'AI-powered job application automation for candidates.',
      whyTheyWin: 'Automated mass-application approach for job seekers.',
    },
  ],
  marketPosition: 'AI-native recruitment platform combining voice AI with two-sided marketplace at fraction of agency cost',
  moat: [
    'Two-sided network effects: 49K+ candidates create value for hiring companies',
    'Voice-first approach captures nuanced candidate signals lost in resumes',
    'Conversational AI engine with three-layer architecture (Conversational, Knowledge, Matching)',
    'Cost advantage: 10% placement fee vs 20% traditional agency',
    'Founder pedigree: scaled Omnipresent to $600M valuation',
  ],
  vsGiants: 'Voice-first conversational approach vs LinkedIn keyword matching; personalized AI agent vs job board spam.',

  // AI-Native Level
  aiNativeLevel: 'A',
  aiNativeLevelDescription: 'AI IS the product. Jack and Jill are autonomous AI agents that conduct voice conversations, understand candidates/companies deeply, and make matches. Without AI, the product does not exist.',
  aiDesignChallenges: [
    'Voice conversation UX: designing natural AI-to-human dialogue flows',
    'Trust calibration: users need to trust AI recruiter with career decisions',
    'Two-sided marketplace design: balancing candidate and employer experiences',
    'AI transparency: showing why a match was recommended',
    'Privacy UX: making data sharing controls clear and intuitive',
    'Multimodal interaction: voice + written + visual candidate profiles',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Matthew Wilson',
      role: 'Co-founder & CEO',
      background: 'Previously co-founded Omnipresent (HR tech, scaled to $600M valuation in 3 years). Oxford Physics graduate with Masters in Theoretical & Mathematical Physics. Deep experience in global hiring and remote work.',
    },
    {
      name: 'Saaras Mehan',
      role: 'Co-founder & CTO',
      background: 'YC-backed founder of Kular.ai (AI sales platform). Cambridge CS graduate, former England Chess Team member. Previously software engineer at Microsoft, Goldman Sachs, and Autodesk. Entrepreneur First alum.',
    },
  ],
  whyBuilding: 'Experienced the broken recruitment system firsthand while scaling previous startups. Saw generative AI as an opportunity to rebuild hiring from first principles rather than accelerate a broken process.',
  beliefs: [
    'Recruitment is fundamentally broken — low-signal, high-anxiety for everyone',
    'AI should not accelerate broken processes but rebuild them from first principles',
    'Conversation reveals more about a candidate than any resume or keyword match',
    'Everyone deserves world-class support when hiring or finding a job',
    'Empathy and genuine dialogue matter more than efficiency metrics in hiring',
  ],
  designPhilosophy: 'Deliberately playful and approachable (hence the name "Jack & Jill") to counteract recruitment\'s cold, intimidating atmosphere. Designed for comfort so users provide more authentic information.',
  greenFlags: [
    'Founders with proven track record (Omnipresent $600M, YC-backed Kular)',
    '$20M seed led by Creandum (Spotify/Klarna backer) with tier-1 angel network',
    'Rapid traction: 49K candidates in 6 months',
    'Clear design philosophy and emphasis on user empathy',
    'Founding designer role = high-impact, greenfield 0→1 opportunity',
    'Strong team culture: "high agency people, many with founding experience"',
  ],
  redFlags: [
    'Very early stage (9 months old) — product still evolving rapidly',
    'London HQ may limit design talent pool access',
    'Two-sided marketplace cold start risk',
    'Trustpilot reviews show product quality inconsistency (3.9/5, some glitchy reports)',
    'AI recruitment market skepticism: 78% of job seekers prefer human interaction',
    'Privacy concerns flagged by users about data sharing defaults',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: '0 (hiring first/founding designer)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Voice conversation flow design for AI agent-to-human dialogues',
        'AI matching logic: defining how candidate signals map to job recommendations',
        'Agent autonomy boundaries: what Jack/Jill decide vs. what users control',
        'Career coaching mode design for passive job seekers',
        'Feedback loop design between candidate preferences and job recommendations',
      ],
    },
    evaluation: {
      level: 'high',
      tasks: [
        'Match quality metrics: measuring recommendation relevance',
        'Candidate satisfaction scoring across voice and text interactions',
        'Placement success tracking (hire retention, candidate happiness)',
        'AI conversation quality evaluation and improvement loops',
        'Bias detection and fairness monitoring in matching',
      ],
    },
    interface: {
      level: 'high',
      tasks: [
        'Voice UI and conversation interface design',
        'Candidate dashboard: job recommendations, salary benchmarks, profile management',
        'Employer dashboard: candidate shortlists, Jill insights, hiring pipeline',
        'Email digest design for job recommendations',
        'Resume/LinkedIn optimization tools UX',
        'Mobile and cross-platform experience design',
      ],
    },
  },
  productStage: '0→1',

  // Product & User Context
  targetAudiences: {
    primary: 'Job seekers (especially in tech and fast-growing companies) looking for personalized career support',
    secondary: 'Hiring teams at fast-growing startups and scaleups seeking cost-effective recruitment',
  },
  userProblems: [
    'Job seekers are overwhelmed by irrelevant listings and application spam on traditional job boards',
    'Recruiters reduce candidates to keywords, losing crucial signals about ambition and cultural fit',
    'Traditional recruitment agencies charge 20%+ fees, too expensive for startups',
    'AI-generated fake applications flood hiring pipelines, making screening harder',
    'Passive job seekers have no good way to discover relevant opportunities without active searching',
  ],

  // Designer Links
  designerLinks: [],

  // Open Roles
  openRoles: [
    {
      title: 'Founding Product Designer',
      location: 'London, UK',
      url: 'https://uk.talent.com/view?id=5f3dae973243',
      level: 'Senior',
      type: 'full-time',
      compensation: '£180K+ total comp (cash + equity)',
      aboutRole: 'First design hire. Take ownership of how users interact with Jack & Jill through voice, written, and visual mediums. Shape the product direction from inception.',
      responsibilities: [
        'Own the end-to-end user experience for both Jack (job seekers) and Jill (employers)',
        'Design voice conversation flows and multimodal interaction patterns',
        'Conduct user research and shape overall design strategy',
        'Define product feel and behavior for AI agent interactions',
        'Collaborate directly with founders on product direction',
      ],
      requirements: [
        'Extensive product design experience',
        'Deep empathy and understanding of user needs',
        'Ability to innovate in fast-paced startup environment',
        'Experience designing for conversational or voice-based interfaces preferred',
      ],
      teamInfo: 'You would be the first design hire, collaborating with a 12-person founding team of engineers and operators',
      whyInteresting: 'Rare 0→1 founding designer role at a well-funded AI startup. Shape the UX of voice-first AI recruitment from scratch with £180K+ comp.',
    },
  ],

  // Culture Insights
  cultureInsights: [
    {
      source: 'linkedin',
      sentiment: 'positive',
      content: 'Matt and Saaras are a formidable duo who have assembled a team of high-agency people, many of whom have been founders themselves. Team includes Sam (founding engineer with early neural voice agent experience) and Franky (CMO with multiple 0-to-$xxM ARR scaling experiences).',
      url: 'https://www.adaventures.com/post/why-we-invested-in-jack-and-jill',
    },
    {
      source: 'techcrunch',
      sentiment: 'positive',
      content: 'Trustpilot rating of 3.9/5 with 105 reviews. Users praise conversational AI quality and personalized job matching. Noted issues include occasional irrelevant job recommendations and privacy concerns.',
      url: 'https://uk.trustpilot.com/review/jackandjill.ai',
    },
    {
      source: 'linkedin',
      sentiment: 'positive',
      content: 'Investor Ada Ventures highlights Matt\'s "pace and relentlessness" and ability to "raise the ambition levels of everyone." Team described as having unreasonable expectations and huge ambition.',
      url: 'https://www.adaventures.com/post/why-we-invested-in-jack-and-jill',
    },
  ],

  // My Tracking
  tracking: {
    status: 'researching',
    fitScore: 7,
    whyJoin: [
      'Founding designer role = shape product from zero',
      'Voice-first AI UX is a novel, cutting-edge design challenge',
      'Strong founders with proven scaling track record',
      'Well-funded ($20M seed) with tier-1 investor backing',
      'Two-sided marketplace design is complex and rewarding',
      'Competitive comp (£180K+ with equity)',
    ],
    whyNot: [
      'London-based, not US',
      'Very early stage (9 months old) with product still maturing',
      'AI recruitment market faces user trust challenges',
      'Trustpilot reviews show some product quality inconsistency',
      'Being the only designer can mean wearing many hats without peer support',
    ],
    nextActions: [
      'Try Jack AI as a candidate to evaluate conversational experience',
      'Research Matthew Wilson and Saaras Mehan on LinkedIn/Twitter for design philosophy signals',
      'Monitor Ashby careers page for additional design roles',
      'Evaluate US expansion timeline and remote work options',
    ],
    notes: 'Unique voice-first AI recruitment startup. Founding designer opportunity with high impact potential. Key concern is London location and early-stage product maturity. Strong founder pedigree mitigates execution risk.',
  },

  // Meta
  lastUpdated: '2026-02-08T18:00:00',
  sources: [
    { title: 'Jack & Jill website', url: 'https://jackandjill.ai' },
    { title: 'TechCrunch: Jack & Jill raises $20M', url: 'https://techcrunch.com/2025/10/16/jack-jill-raises-20-million-to-bring-conversational-ai-to-job-hunting/' },
    { title: 'Sifted: Anthropic and Lovable angels back Jack & Jill', url: 'https://sifted.eu/articles/jack-and-jill-funding-round-lovable-nico-rosberg' },
    { title: 'Ada Ventures: Why we invested in Jack & Jill', url: 'https://www.adaventures.com/post/why-we-invested-in-jack-and-jill' },
    { title: 'Made in Shoreditch: Matt Wilson & Saaras Mehan interview', url: 'https://madeinshoreditch.co.uk/2025/09/02/jack-and-jill-interview/' },
    { title: 'TechRound: Startup of the Week - Jack & Jill', url: 'https://techround.co.uk/startups/startup-of-the-week-jack-and-jill/' },
    { title: 'Trustpilot reviews (3.9/5, 105 reviews)', url: 'https://uk.trustpilot.com/review/jackandjill.ai' },
    { title: 'Meritt: Analysis of AI recruitment platforms', url: 'https://www.meritt.io/resources/posts/jack-jill-dex-ai-recruitment' },
    { title: 'Founding Product Designer listing', url: 'https://uk.talent.com/view?id=5f3dae973243' },
    { title: 'Crunchbase: Jack & Jill AI', url: 'https://www.crunchbase.com/organization/jack-jill-ai' },
    { title: 'Crunchbase: Matthew Wilson', url: 'https://www.crunchbase.com/person/matthew-wilson-e30a' },
    { title: 'Crunchbase: Saaras Mehan', url: 'https://www.crunchbase.com/person/saaras-mehan' },
  ],
};
