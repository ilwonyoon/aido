import { Company } from '../types';

export const harmonic: Company = {
    id: 'harmonic',
    name: 'Harmonic',
    description: 'AI lab developing Mathematical Superintelligence (MSI) and the Aristotle model for formal mathematical reasoning.',
    website: 'https://harmonic.fun',
    headquarters: 'Palo Alto, CA',
    remote: 'No',

    // Business
    stage: 'Series C',
    valuation: '$1.45B (Nov 2025)',
    totalFunding: '$295M',
    fundingHistory: [
      { stage: 'Series A', amount: '$75M', date: '2024-09', leadInvestors: ['Sequoia Capital', 'Index Ventures'] },
      { stage: 'Series B', amount: '$100M', date: '2025-07', valuation: '$875M', leadInvestors: ['Kleiner Perkins', 'Paradigm'] },
      { stage: 'Series C', amount: '$120M', date: '2025-11', valuation: '$1.45B', leadInvestors: ['Ribbit Capital'] },
    ],
    revenue: 'Unknown',
    growth: 'IMO gold medal-level performance; Aristotle launched for researchers',
    runway: 'Strong (Series C in Nov 2025)',
    customers: 'Researchers and teams in safety-critical domains',

    // Growth & Potential
    growthMetrics: {
      stage: 'high-growth',
      revenueGrowth: 'Unknown',
      userGrowth: 'Early access with researchers; no public user counts',
      signals: [
        '$120M Series C at $1.45B valuation (Nov 2025)',
        '$100M Series B at $875M valuation (Jul 2025)',
        'Aristotle launch + IMO gold medal-level performance (2025)',
      ],
      tam: '$52.79B global testing software market (2023)',
      marketShare: '<0.1% of TAM = 1000x+ upside potential',
      ceiling: 'Early innings: formal verification and math-first AI adoption just beginning',
      tailwinds: [
        'Rising demand for verified AI in safety-critical systems',
        'Regulatory and compliance pressure for provable correctness',
        'Formal verification adoption in software and finance',
      ],
      headwinds: [
        'Frontier labs also investing in reasoning models',
        'Long R&D cycles before broad commercial adoption',
        'Conservative procurement in safety-critical industries',
      ],
      moatType: 'technology',
      moatStrength: 'Strong technical differentiation via MSI and formal verification.',
    },

    // Competition
    competitors: [
      {
        name: 'OpenAI',
        description: 'Frontier reasoning models for code and math.',
        whyTheyWin: 'Scale, distribution, and developer ecosystem.',
      },
      {
        name: 'Google DeepMind',
        description: 'Advanced math and reasoning research (AlphaProof, etc.).',
        whyTheyWin: 'Deep research bench and compute advantage.',
      },
      {
        name: 'Anthropic',
        description: 'Safety-focused frontier model lab.',
        whyTheyWin: 'Enterprise adoption and strong safety positioning.',
      },
    ],
    marketPosition: 'Mathematical superintelligence for verified reasoning',
    moat: [
      'Math-first MSI model designed to eliminate hallucinations',
      'Formal verification workflows for provable correctness',
    ],
    vsGiants: 'Math-first MSI approach vs probabilistic LLM reasoning.',

    // AI-Native Level
    aiNativeLevel: 'B',
    aiNativeLevelDescription: 'AI-Core on Proven Workflow: AI is core differentiator for customer support. Proven support workflow enhanced by AI agents.',
    aiDesignChallenges: [
      'Designing proof-first workflows (specify, prove, verify)',
      'Communicating correctness guarantees and limits to users',
      'Debugging and explaining formal proofs to non-experts',
      'Human-in-the-loop collaboration for verified reasoning',
    ],

    // Founders & Vision
    founders: [
      {
        name: 'Tudor Achim',
        role: 'Co-founder & CEO',
        background: 'Former Helm.ai CTO and co-founder',
      },
      {
        name: 'Vlad Tenev',
        role: 'Co-founder & Executive Chairman',
        background: 'Robinhood CEO and co-founder',
      },
    ],
    whyBuilding:
      'Build Mathematical Superintelligence that guarantees accuracy and eliminates hallucinations in high-stakes reasoning.',
    beliefs: [
      'AI should produce provably correct outputs for mission-critical use cases',
      'Mathematical verification can replace probabilistic guessing',
      'Reasoning accuracy is the bottleneck for deploying AI in safety-critical domains',
    ],
    designPhilosophy: 'Unknown',
    greenFlags: [
      'Series C at $1.45B valuation (Nov 2025)',
      'Clear technical differentiation with MSI + formal verification',
      'Backed by top-tier investors across multiple rounds',
    ],
    redFlags: [
      'Early-stage commercialization and undefined product surface',
      'Long adoption cycles in regulated industries',
    ],

    // Design Opportunity
    designTeam: {
      teamSize: 'Unknown (company size 11-50)',
    },
    designWorkType: {
      logicBehavior: {
        level: 'high',
        tasks: [
          'Formal specification and proof workflow design',
          'Constraint definition and validation for MSI tasks',
          'Reasoning trace controls and safety rails',
        ],
      },
      evaluation: {
        level: 'high',
        tasks: [
          'Correctness benchmarks for proofs and reasoning steps',
          'Error taxonomy for formal verification failures',
          'Human review workflows for safety-critical outputs',
        ],
      },
      interface: {
        level: 'medium',
        tasks: [
          'Math editor and proof visualization UX',
          'Result comparison and verification UI',
          'API and developer tooling surfaces',
        ],
      },
    },
    productStage: '1→10',

    // Product & User Context
    targetAudiences: {
        primary: 'Field sales representatives selling home improvement and HVAC services door-to-door',
        secondary: 'Sales managers coaching distributed field sales teams',
    },
    userProblems: [
        'Field sales reps cannot receive real-time coaching during in-person customer interactions',
        'Sales managers cannot scale 1-on-1 coaching across hundreds of distributed reps',
        'Best sales techniques stay siloed with top performers instead of shared systematically',
        'Onboarding new field reps requires weeks of shadowing experienced sellers',
        'Performance feedback comes days after customer interactions when it is less actionable',
    ],

    // Designer Links
    designerLinks: [],

    // Open Roles
    openRoles: [],

    // Culture Insights
    cultureInsights: [],

    // My Tracking
    tracking: {
      status: 'watching',
      fitScore: 7,
      whyJoin: [
        'Deeply technical AI product with unique UX challenges',
        'High-impact work on correctness and safety',
      ],
      whyNot: [
        'Early product surface; designer leverage unclear',
        'Highly technical domain may narrow design scope',
      ],
      nextActions: [
        'Request Aristotle access',
        'Track product surface and developer onboarding',
      ],
    },

    // Meta
    lastUpdated: '2026-01-26T20:00:00',
    sources: [
      { title: 'Harmonic Series B (BusinessWire)', url: 'https://www.businesswire.com/news/home/20250710118878/en/Harmonic-Raises-%24100-Million-Series-B-to-Accelerate-Development-of-Mathematical-Superintelligence' },
      { title: 'Harmonic Series C (BusinessWire)', url: 'https://www.businesswire.com/news/home/20251125727962/en/Harmonic-Builds-Momentum-Towards-Mathematical-Superintelligence-with-%24120-Million-Series-C' },
      { title: 'Harmonic IMO gold performance (BusinessWire)', url: 'https://www.businesswire.com/news/home/20250728394917/en/Harmonic-Announces-IMO-Gold-Medal-Level-Performance-Launch-of-First-Mathematical-Superintelligence-MSI-AI-App' },
      { title: 'Harmonic website', url: 'https://harmonic.fun' },
      { title: 'Harmonic LinkedIn', url: 'https://www.linkedin.com/company/harmonicmath' },
      { title: 'Harmonic Crunchbase', url: 'https://www.crunchbase.com/organization/harmonic-ai-f3d1' },
      { title: 'Testing software market size (2023)', url: 'https://www.prnewswire.com/news-releases/testing-software-market-overview-estimated-market-size-forecast-growth-rate-and-major-drivers--by-the-business-research-company-301950731.html' },
    ],
  };
