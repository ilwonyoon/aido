import { Company } from '../types';

export const abridge: Company = {
    id: 'abridge',
    name: 'Abridge',
    description: 'AI platform for medical conversation capture, summarization, and clinical documentation.',
    website: 'https://www.abridge.com',
    headquarters: 'Pittsburgh, PA',
    remote: 'Unknown',

    // Business
    stage: 'Series E',
    valuation: '$5.3B (Jun 2025)',
    totalFunding: '$757.5M (reported)',
    fundingHistory: [
      { stage: 'Series A', amount: '$12.5M', date: '2022-08', leadInvestors: ['Bessemer Venture Partners'] },
      { stage: 'Series B', amount: '$30M', date: '2023-10', leadInvestors: ['Spark Capital'] },
      { stage: 'Series C', amount: '$150M', date: '2024-02', leadInvestors: ['Lightspeed Venture Partners'] },
      { stage: 'Series D', amount: '$250M', date: '2025-02', leadInvestors: ['Elad Gil', 'IVP'] },
      { stage: 'Series E', amount: '$300M', date: '2025-06', valuation: '$5.3B', leadInvestors: ['Andreessen Horowitz'] },
    ],
    revenue: '$117M contracted ARR (Q1 2025)',
    growth: '200+ health systems, 12,000 clinicians, 28+ languages, 50+ specialties',
    runway: 'Strong (Series E $300M)',
    customers: '200+ health systems including UPMC, Emory, and others',

    // Growth & Potential
    growthMetrics: {
      stage: 'high-growth',
      revenueGrowth: 'Contracted ARR $117M (Q1 2025)',
      userGrowth: '200+ health systems, 12,000 clinicians; 28+ languages and 50+ specialties',
      signals: [
        '$300M Series E at $5.3B valuation (Jun 2025)',
        '$250M Series D at $2.75B valuation (Feb 2025)',
        'Large enterprise partnerships (UPMC, Emory)',
      ],
      tam: '$4.88B global clinical documentation improvement market (2024)',
      marketShare: '~2.4% of TAM (using $117M contracted ARR)',
      ceiling: 'Early innings: ambient AI adoption still a minority of clinician workflows',
      tailwinds: [
        'Clinician burnout driving adoption of AI scribing',
        'Health systems investing in automation and revenue integrity',
        'Regulatory push for accurate and auditable documentation',
      ],
      headwinds: [
        'Strong incumbents like Microsoft Nuance',
        'EHR vendors adding native AI capabilities',
        'Data privacy and compliance complexity',
      ],
      moatType: 'data-flywheel',
      moatStrength: 'Strong: clinician feedback loops and large enterprise deployments.',
    },

    // Competition
    competitors: [
      {
        name: 'Nuance DAX (Microsoft)',
        description: 'Ambient clinical documentation integrated with EHRs.',
        whyTheyWin: 'Enterprise distribution and deep EHR partnerships.',
      },
      {
        name: 'Ambience Healthcare',
        description: 'AI platform for clinical documentation and coding workflows.',
        whyTheyWin: 'Coding-first workflows and multi-specialty coverage.',
      },
      {
        name: 'Suki AI',
        description: 'AI assistant for clinicians with voice dictation.',
        whyTheyWin: 'Clinician-friendly UX and early mover advantage.',
      },
    ],
    marketPosition: 'Enterprise-grade AI for medical conversations and documentation',
    moat: [
      'Linked Evidence and structured outputs for auditability',
      'Multi-language support (28+ languages)',
      'Large health system deployments and feedback loops',
    ],
    vsGiants: 'Focused on clinical conversations and documentation rather than general AI assistants.',

    // AI-Native Level
    aiNativeLevel: 4,
    aiNativeLevelDescription: 'AI is the product; transcription and summarization drive value.',
    aiDesignChallenges: [
      'Designing audio + transcript + note workflows',
      'High-accuracy editing and review UX for clinicians',
      'Trust and attribution for AI-generated notes',
      'Multilingual and specialty-specific language handling',
    ],

    // Founders & Vision
    founders: [
      {
        name: 'Shiv Rao, MD',
        role: 'Co-founder & CEO',
        background: 'Physician and entrepreneur focused on reducing clinician burden',
      },
    ],
    whyBuilding:
      'Reduce administrative load and improve clinical documentation by capturing and summarizing medical conversations.',
    beliefs: [
      'Clinicians should spend more time with patients, less on documentation',
      'AI must be trustworthy and auditable in healthcare',
      'Medical language requires specialty-specific understanding',
    ],
    designPhilosophy: 'Unknown',
    greenFlags: [
      'Large enterprise adoption (200+ health systems)',
      'Strong funding momentum and valuation growth',
      'Clear product-market fit in healthcare documentation',
    ],
    redFlags: [
      'Heavy regulatory and compliance burden',
      'Competitive pressure from Microsoft and EHR incumbents',
    ],

    // Design Opportunity
    designTeam: {
      teamSize: 'Unknown (company size 201-500)',
    },
    designWorkType: {
      logicBehavior: {
        level: 'high',
        tasks: [
          'Conversation structuring for clinical documentation',
          'Clinical coding logic and data extraction',
          'AI behavior controls for sensitive medical content',
        ],
      },
      evaluation: {
        level: 'high',
        tasks: [
          'Accuracy benchmarking for summaries and notes',
          'Human review workflows and error correction',
          'Clinician feedback loop design',
        ],
      },
      interface: {
        level: 'high',
        tasks: [
          'Audio capture and transcript review UI',
          'Note editing and evidence linking UX',
          'EHR-embedded workflows',
        ],
      },
    },
    productStage: '10→100',

    // Designer Links
    designerLinks: [],

    // Open Roles
    openRoles: [],

    // Culture Insights
    cultureInsights: [],

    // My Tracking
    tracking: {
      status: 'watching',
      fitScore: 8,
      whyJoin: [
        'Large design leverage on safety-critical UX',
        'Strong market pull and enterprise adoption',
      ],
      whyNot: [
        'High compliance and risk constraints',
        'Product decisions may be dominated by clinical/regulatory needs',
      ],
      nextActions: [
        'Review demo workflows and note-review UX',
        'Track design leadership and product org structure',
      ],
    },

    // Meta
    lastUpdated: '2026-01-26T20:00:00',
    sources: [
      { title: 'Abridge Series E funding (TechCrunch)', url: 'https://techcrunch.com/2025/06/24/abridge-raises-300m-at-a-5-3b-valuation-to-grow-its-ai-powered-medical-transcription-tool/' },
      { title: 'Abridge Series D (Press release)', url: 'https://www.abridge.com/press/abridge-raises-250-million-series-d-funding-to-fuel-expansion-of-generative-ai-platform-for-clinical-conversations' },
      { title: 'Abridge Series C (Press release)', url: 'https://www.abridge.com/press/abridge-announces-150-million-series-c-funding-to-scale-generative-ai-platform-for-clinical-conversations' },
      { title: 'Abridge Series B (BusinessWire)', url: 'https://www.businesswire.com/news/home/20231004012861/en/Abridge-Raises-%2430M-Series-B-to-Scale-AI-Driven-Clinical-Documentation-Platform' },
      { title: 'Abridge Series A-1 (BusinessWire)', url: 'https://www.businesswire.com/news/home/20220823005269/en/Abridge-Raises-%2412.5M-Series-A-1-Extension-to-Scale-AI-Driven-Clinical-Documentation-Platform' },
      { title: 'Abridge + UPMC partnership (Press release)', url: 'https://www.abridge.com/press/upmc-and-abridge-announce-strategic-partnership-to-expand-generative-ai-clinical-documentation-for-providers-and-patients' },
      { title: 'Abridge Careers', url: 'https://www.abridge.com/careers' },
      { title: 'Abridge LinkedIn', url: 'https://www.linkedin.com/company/abridge/' },
      { title: 'Abridge funding total (Crunchbase News)', url: 'https://news.crunchbase.com/ai/abridge-funding-4-75b-valuation-sequoia-ai/' },
      { title: 'Abridge Crunchbase', url: 'https://www.crunchbase.com/organization/abridge-d1a4' },
      { title: 'Clinical documentation improvement market size', url: 'https://www.precedenceresearch.com/clinical-documentation-improvement-market' },
    ],
  };
