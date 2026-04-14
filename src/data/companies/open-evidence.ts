import { Company } from '../types';

export const openEvidence: Company = {
    id: 'open-evidence',
    name: 'OpenEvidence',
    description: 'AI-powered medical information platform that synthesizes peer-reviewed literature in real time for physicians — used by 40% of U.S. doctors for clinical decision support.',
    website: 'https://www.openevidence.com',
    headquarters: 'New York, NY',
    remote: 'Hybrid',

    // Multi-dimensional Tags
    aiTypes: ['text-assistant'],
    markets: ['b2b'],
    category: 'vertical-saas' as const,
    industries: ['healthcare'],

    // Business
    stage: 'Series D',
    valuation: '$12B (Jan 2026)',
    totalFunding: '$735M+',
    fundingHistory: [
      { stage: 'Series A', amount: '$75M', date: '2025-02', leadInvestors: ['Sequoia Capital'] },
      { stage: 'Series B', amount: '$210M', date: '2025-07', valuation: '$3.5B', leadInvestors: ['Google Ventures', 'Kleiner Perkins'] },
      { stage: 'Series C', amount: '$200M', date: '2025-10', valuation: '$6.1B', leadInvestors: ['GV', 'Sequoia Capital', 'Blackstone'] },
      { stage: 'Series D', amount: '$250M', date: '2026-01', valuation: '$12B', leadInvestors: ['Thrive Capital', 'DST Global'] },
    ],
    revenue: '$100M+ ARR (end of 2025)',
    growth: '6x YoY (3M → 18M clinical consultations/month)',
    runway: 'Very strong ($735M+ raised, $12B valuation)',
    customers: '760,000 verified U.S. physicians across 10,000+ hospitals',

    // Growth & Potential
    growthMetrics: {
      stage: 'hypergrowth',
      revenueGrowth: '~6x YoY ($50M ARR mid-2025 → $100M+ ARR end-2025)',
      userGrowth: '40% of U.S. physicians using daily; 65,000 new verified physicians/month',
      signals: [
        '$12B valuation (Jan 2026), up from $3.5B in July 2025 — 3.4x in 6 months',
        '18 million clinical consultations/month (Dec 2025), up from 3M a year prior',
        '1 million single-day consultations record (March 10, 2026)',
        '$100M+ ARR with ad CPMs of $70–$1,000+ (vs $5–$15 for typical social)',
        'Microsoft enterprise partnership announced',
        'DeepConsult AI agent launch — first AI agent purpose-built for physicians',
      ],
      tam: '$4B clinical decision support market (2025); $613B AI in healthcare by 2034',
      marketShare: '~2.5% of clinical decision support TAM = 40x+ upside; near-monopoly on U.S. physician daily workflows',
      ceiling: 'Early innings: expanding from U.S. to global (1M+ physicians worldwide), adding AI coding, agentic workflows',
      tailwinds: [
        'Medical knowledge doubling every 5 years — physicians cannot keep up without AI',
        'Physician burnout crisis driving demand for cognitive offloading tools',
        'FDA and hospital systems increasingly comfortable with evidence-based AI',
        'Pharmaceutical advertisers paying premium CPMs ($70–$1,000+) to reach physicians',
        'Agentic AI enabling subspecialist-level AI agents for complex clinical cases',
      ],
      headwinds: [
        'Legal battle with Doximity (sued June 2025, countersued Sept 2025) — reputational risk',
        '$12B valuation at $100M ARR = 120x revenue multiple — highly priced for growth',
        'Ad-based model may create tension with clinical integrity and regulatory scrutiny',
        'Large incumbents (UpToDate, Epocrates) rapidly adding AI features',
        'FDA oversight of medical AI could constrain product velocity',
      ],
      moatType: 'data-flywheel',
      moatStrength: '760K verified physicians creating consultation data flywheel; Kensho founder credibility; exclusive medical journal partnerships',
    },

    // Competition
    competitors: [
      {
        name: 'Doximity / DoxGPT',
        description: 'Physician social network (1.8M+ members) with AI medical assistant built in.',
        whyTheyWin: 'Existing physician network and EHR integrations; physician-reviewed answers via PeerCheck (10K medical experts); sued OpenEvidence for copying features.',
      },
      {
        name: 'UpToDate (Wolters Kluwer)',
        description: 'Traditional gold-standard clinical reference — 12,000+ topics by 7,400+ physician authors.',
        whyTheyWin: 'Deep institutional trust, EHR integrations, comprehensive coverage; now launching Expert AI to compete head-on.',
      },
      {
        name: 'Epocrates',
        description: 'Drug reference and clinical decision app, one of the earliest physician mobile apps.',
        whyTheyWin: 'Legacy adoption among prescribing physicians; strong drug interaction and dosing database.',
      },
      {
        name: 'Vera Health',
        description: 'Emerging clinical AI platform rated higher than OpenEvidence in some independent evaluations (4.8 vs 4.5 stars).',
        whyTheyWin: 'Newer architecture, potential quality advantages in head-to-head evals.',
      },
      {
        name: 'Glass Health',
        description: 'AI clinical reasoning tool focused on differential diagnosis.',
        whyTheyWin: 'Deep clinical reasoning focus vs OpenEvidence\'s broader literature synthesis approach.',
      },
    ],
    marketPosition: 'Fastest-growing physician AI platform in history; used by 40% of U.S. physicians',
    moat: [
      '760,000 verified physicians creating consultation data flywheel',
      'Trained on peer-reviewed medical literature only (no public internet) — reduces hallucination',
      'Exclusive content partnerships with NEJM, JAMA, and other top journals',
      'First mover at physician scale (>40% market penetration in U.S.)',
    ],
    vsGiants: 'Free vs UpToDate\'s $559/year; AI synthesis vs static reference; real-time evidence vs curated summaries.',

    // AI-Native Level
    aiNativeLevel: 'B',
    aiNativeLevelDescription: 'AI-Core on Proven Workflow: Clinical decision support existed (UpToDate, Epocrates), but OpenEvidence\'s real-time AI synthesis of 30M+ papers is fundamentally new capability — impossible without AI.',
    aiDesignChallenges: [
      'Trust design: Communicating AI confidence and citation quality in life-or-death decisions',
      'Evidence visualization: Presenting conflicting studies, evidence strength, and clinical consensus',
      'Conversation design for DeepConsult: High-stakes AI agent workflows for complex clinical cases',
      'Mobile-first: Physicians use on rounds under time pressure — glanceability and speed are critical',
      'Ad integration without compromising clinical neutrality — unique ethical design constraint',
      'Uncertainty communication: When to show "Unknown" vs confident recommendation',
    ],

    // Founders & Vision
    founders: [
      {
        name: 'Daniel Nadler',
        role: 'CEO & Co-founder',
        background: 'Harvard PhD (Political Economy). Founded Kensho (AI for financial data), sold to S&P Global for $700M in 2018. Visiting scholar at the Federal Reserve. Named to TIME100 Health 2025.',
      },
      {
        name: 'Zachary Ziegler',
        role: 'CTO & Co-founder',
        background: 'Harvard PhD candidate in machine learning. Core technical architect of OpenEvidence\'s specialized medical AI models.',
      },
    ],
    whyBuilding: 'Medical knowledge now doubles every 5 years. One new paper is published every minute. Nadler built AI for financial regulators at Kensho ($700M exit) and saw the same pattern — domain experts drowning in data. OpenEvidence applies the same insight to medicine: AI as cognitive infrastructure for professionals.',
    beliefs: [
      'Physician always in the loop: AI presents evidence, physician makes the call',
      'Peer-reviewed only: No hallucination risk from public internet training',
      'Immediate dividends: AI benefit should be measurable now, not in 5 years',
      'Smaller specialized models beat large general models for clinical reasoning',
    ],
    designPhilosophy: 'Unknown (no public statements on design philosophy)',

    greenFlags: [
      'Proven founder: Daniel Nadler previously built and sold Kensho for $700M',
      'Hypergrowth: $12B valuation in Jan 2026 (3.4x in 6 months)',
      'Near-monopoly: 40% of U.S. physicians using daily — fastest-growing clinician app ever',
      '$100M+ ARR with high-CPM ad model ($70–$1,000+ vs $5–$15 industry average)',
      'Microsoft enterprise partnership — EHR distribution channel opening',
      'DeepConsult agent = new product frontier with high design complexity',
    ],
    redFlags: [
      'Legal battle with Doximity (mutual lawsuits June–Sept 2025) — distraction + reputational risk',
      '$12B valuation at $100M ARR = 120x revenue multiple — very expensive to join via equity',
      'Small team (~50 employees) running a platform used by 40% of U.S. physicians — operational risk',
      'Ad-based model creates inherent tension between revenue and clinical neutrality',
      'Regulatory risk: FDA oversight of clinical AI claims could slow product iteration',
    ],

    // Design Opportunity
    designTeam: {
      teamSize: 'Unknown (company ~31–50 employees total; design team likely 2–5 people)',
    },
    designWorkType: {
      logicBehavior: {
        level: 'high',
        tasks: [
          'AI agent workflow design for DeepConsult (subspecialist AI agents)',
          'Evidence confidence visualization — communicating certainty levels for clinical decisions',
          'Citation and source hierarchy design for medical literature',
          'Multi-turn clinical conversation flows for complex diagnostic queries',
        ],
      },
      evaluation: {
        level: 'high',
        tasks: [
          'Physician feedback loops for AI response quality assessment',
          'Hallucination detection UX and correction workflows',
          'Clinical accuracy measurement surfaces for internal medical review teams',
          'A/B testing frameworks for AI response formats in clinical context',
        ],
      },
      interface: {
        level: 'medium',
        tasks: [
          'Mobile-first point-of-care UI (used during patient rounds)',
          'Evidence summary cards with citation depth controls',
          'Pharmaceutical ad integration that preserves clinical neutrality',
          'Physician onboarding and verification flows',
          'Enterprise dashboard for hospital system administrators',
        ],
      },
    },
    productStage: '1→10',

    // Product & User Context
    targetAudiences: {
      primary: 'Verified U.S. physicians across all specialties using OpenEvidence at point of care during patient consultations',
      secondary: 'Hospital system administrators procuring enterprise clinical AI tools; pharmaceutical/medical device advertisers reaching physicians',
    },
    userProblems: [
      'Medical knowledge is doubling every 5 years — physicians cannot read enough literature to stay current',
      'One new paper is published every minute; reading just top 10 journal updates would require 9 hours/day',
      'Existing tools (UpToDate) are static and curated, not real-time; cost $559/year',
      'General LLMs (ChatGPT) hallucinate medical information, causing safety concerns',
      'Clinical questions need cited, peer-reviewed answers — not probability-weighted language model outputs',
    ],

    // Designer Links
    designerLinks: [],

    // Open Roles
    openRoles: [
      // No Product Designer roles currently listed; check jobs.ashbyhq.com/openevidence
    ],

    // Culture Insights
    cultureInsights: [
      {
        source: 'linkedin',
        sentiment: 'positive',
        content: 'Very small team (~50 employees) managing massive scale — high ownership and leverage per person.',
      },
      {
        source: 'techcrunch',
        sentiment: 'positive',
        content: 'Academic credibility matters: Harvard/MIT founders, Mayo Clinic partnership, NEJM collaboration.',
        url: 'https://techcrunch.com/2025/10/20/openevidence-the-chatgpt-for-doctors-raises-200m-at-6b-valuation/',
      },
    ],

    // My Tracking
    tracking: {
      status: 'interested',
      fitScore: 8,
      whyJoin: [
        'Hypergrowth at unprecedented physician scale — 40% of U.S. doctors daily',
        'DeepConsult AI agent = new frontier of clinical conversation design with highest stakes',
        'Tiny team = huge designer leverage; likely one of very few designers shaping the product',
        'Proven founder (Kensho $700M exit) with domain credibility + Sequoia/Thrive/GV backing',
        'Ad-integration design challenge is uniquely complex — balancing clinical trust with monetization',
      ],
      whyNot: [
        'No Product Designer roles currently listed — may not be hiring design',
        '$12B valuation = equity upside may be limited vs earlier stage companies',
        'Doximity legal battle creates uncertainty; ad-based model may face regulatory pressure',
        'Medical domain depth required — steep learning curve without clinical background',
        'Small team at massive scale = likely high-pressure, fast-paced, under-resourced for design ops',
      ],
      nextActions: [
        'Check jobs.ashbyhq.com/openevidence weekly for Product Designer roles',
        'Follow Daniel Nadler on LinkedIn for product and vision updates',
        'Try OpenEvidence free as a physician (or request access) to experience the product firsthand',
      ],
    },

    // Meta
    lastUpdated: '2026-04-14T00:00:00',
    sources: [
      { title: 'OpenEvidence $250M Series D, $12B valuation — CNBC (Jan 2026)', url: 'https://www.cnbc.com/2026/01/21/openevidence-chatgpt-for-doctors-doubles-valuation-to-12-billion.html' },
      { title: 'OpenEvidence $210M Series B announcement — PR Newswire', url: 'https://www.prnewswire.com/news-releases/openevidence-the-fastest-growing-application-for-physicians-in-history-announces-210-million-round-at-3-5-billion-valuation-302505806.html' },
      { title: 'OpenEvidence $200M Series C at $6B — TechCrunch (Oct 2025)', url: 'https://techcrunch.com/2025/10/20/openevidence-the-chatgpt-for-doctors-raises-200m-at-6b-valuation/' },
      { title: 'Daniel Nadler interview — Sequoia Training Data podcast', url: 'https://sequoiacap.com/podcast/training-data-daniel-nadler/' },
      { title: 'Daniel Nadler — Wikipedia', url: 'https://en.wikipedia.org/wiki/Daniel_Nadler' },
      { title: 'OpenEvidence vs Doximity — Sacra research', url: 'https://sacra.com/research/openevidence-vs-doximity/' },
      { title: 'OpenEvidence careers — Ashby', url: 'https://jobs.ashbyhq.com/openevidence' },
      { title: 'OpenEvidence JPM26 — Medical superintelligence vision', url: 'https://www.fiercehealthcare.com/ai-and-machine-learning/jpm26-openevidence-makes-case-ai-powered-medical-superintelligence' },
      { title: 'OpenEvidence clinical decision support study — PMC', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC12033599/' },
    ],
};
