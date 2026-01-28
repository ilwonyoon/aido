import { Company } from '../types';

export const abridge: Company = {
    id: 'abridge',
    name: 'Abridge',
    description: 'AI platform for medical conversation capture, summarization, and clinical documentation.',
    website: 'https://www.abridge.com',
    headquarters: 'Pittsburgh, PA',
    remote: 'Unknown',


  // Multi-dimensional Tags
  aiTypes: ['text-assistant', 'conversation-ai'],
  markets: ['b2b'],
  industries: ['infrastructure', 'productivity'],

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
    aiNativeLevel: 'B',
    aiNativeLevelDescription: 'AI-Core on Proven Workflow: AI is core differentiator for medical conversations. Building on proven clinical documentation needs.',
    aiDesignChallenges: [
      'Designing audio + transcript + note workflows',
      'High-accuracy editing and review UX for clinicians',
      'Trust and attribution for AI-generated notes',
      'Multilingual and specialty-specific language handling',
    ],

    // Founders & Vision
    founders: [
      {
        name: 'Shivdev (Shiv) Rao, MD',
        role: 'Co-founder & CEO',
        background: 'Cardiologist and faculty at UPMC Heart and Vascular Institute. Previously EVP at UPMC Enterprises. Undergraduate at Carnegie Mellon, residency at University of Michigan. High school skateboarder and outsider music fan (Fugazi, Minor Threat). Practices medicine one weekend/month.',
      },
      {
        name: 'Zachary Lipton, PhD',
        role: 'Co-founder & CTO',
        background: 'Machine learning professor at Carnegie Mellon. Former professional jazz saxophonist. Leads AI research and model development at Abridge.',
      },
      {
        name: 'Sandeep Konam',
        role: 'Co-founder',
        background: 'Co-founded Abridge in 2018. Technical co-founder focused on product engineering.',
      },
      {
        name: 'Florian Metze',
        role: 'Co-founder (former)',
        background: 'Former co-founder, no longer with company. Speech recognition and NLP expert.',
      },
    ],
    whyBuilding:
      'Healthcare is about people having conversations upstream of all diagnostics and therapeutics. Technology should bring providers and patients closer together, not add to clinician workload. Rao built Abridge as a tool he wants to use himself as a practicing physician.',
    beliefs: [
      'Healthcare is about people—technology should bring them closer together',
      'Clinicians should spend more time with patients, less on documentation',
      'AI must be trustworthy and auditable in healthcare: "Precision, accuracy, trust—these aren\'t just features. They\'re existential."',
      'Medical language requires specialty-specific understanding',
      'Physician-driven, patient-centered, AI-powered: key triad for clinician-facing AI',
      'Taste, empathy, and curiosity are the real moats in healthcare AI',
      'Don\'t overpromise—only tout features that are built and thoroughly tested',
    ],
    designPhilosophy: 'Build tools that actively lighten clinician workload, not add to it. Focus on patient benefit above all else. Design for trust and auditability—precision is existential in healthcare.',
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

    // Product & User Context
    targetAudiences: {
        primary: 'Physicians and clinical staff documenting patient encounters in real-time',
        secondary: 'Healthcare administrators reducing documentation burden and improving efficiency',
    },
    userProblems: [
        'Doctors spend 2+ hours daily on medical documentation taking time from patient care',
        'Typing into EHR systems during appointments reduces doctor-patient eye contact',
        'Medical scribes cost $30-$50K+ per doctor annually',
        'Physician burnout from administrative burden leads to early retirement',
        'Accurate clinical documentation is critical but extremely time-consuming',
    ],

    // Designer Links
    designerLinks: [
      {
        name: 'Rez Khan',
        role: 'VP of Product (Series A to Series C)',
        platform: 'linkedin',
        url: 'https://www.linkedin.com/in/rezk/',
        description: 'Led product management and design team during rapid growth. Expanded from 1 PM to 9 PMs and Designers.',
      },
    ],

    // Open Roles
    openRoles: [],

    // Culture Insights
    cultureInsights: [
      {
        source: 'linkedin',
        sentiment: 'positive',
        content: 'Physician-driven culture. CEO Shiv Rao remains practicing doctor. Product team expanded from 1 to 9 PMs and designers from Series A to Series C. Strong focus on clinical empathy and user research.',
        url: 'https://www.linkedin.com/in/rezk/',
      },
    ],

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
