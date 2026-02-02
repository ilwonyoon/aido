import { Company } from '../types';

export const blossom: Company = {
    id: 'blossom',
    name: 'Blossom Health',
    description: 'AI copilots for psychiatry and behavioral health clinics, combining care delivery and technology.',
    website: 'https://www.joinblossomhealth.com',
    headquarters: 'New York, NY',
    remote: 'No',

  // Visual Assets
  screenshot: 'https://iad.microlink.io/vrcwRxYVI2NoS6f_CMyxp1LmBYL1brURwsjvoMyLFdTBxrALilbkGn46MMAemywQCqNQuZ7GXyKcVXVjbLySjw.png',

    // OG Image
    ogImage: '/og-images/blossom-og.webp',


  // Multi-dimensional Tags
  aiTypes: ['text-assistant'],
  markets: ['b2b'],
  industries: ['healthcare'],

    // Business
    stage: 'Series A',
    valuation: 'Unknown',
    totalFunding: '$20M+ (estimated)',
    fundingHistory: [
      { stage: 'Series A', amount: '$18.4M', date: '2025-10', leadInvestors: ['Headline', 'Village Global'] },
    ],
    revenue: 'Unknown',
    growth: 'Hundreds of clinicians and thousands of patients',
    runway: 'Unknown',
    customers: 'Psychiatry clinics and care teams',

    // Growth & Potential
    growthMetrics: {
      stage: 'high-growth',
      revenueGrowth: 'Unknown',
      userGrowth: 'Hundreds of clinicians and thousands of patients',
      signals: [
        'Raised $18.4M to expand virtual psychiatry operations (Oct 2025)',
        'Series A funding with top-tier investors',
        'Expanding AI copilot + care delivery model',
      ],
      tam: '$92.3B U.S. behavioral health market (2024)',
      marketShare: '<0.1% of TAM = 1000x+ upside potential',
      ceiling: 'Early innings: in-network psychiatry access remains constrained',
      tailwinds: [
        'Rising demand for mental health services',
        'Telehealth normalization in behavioral care',
        'Provider shortage increases need for workflow automation',
      ],
      headwinds: [
        'Reimbursement and payer complexity',
        'High clinical risk and regulatory oversight',
        'Provider supply constraints',
      ],
      moatType: 'none',
      moatStrength: 'Early: differentiation depends on care outcomes and clinician adoption.',
    },

    // Competition
    competitors: [
      {
        name: 'Talkiatry',
        description: 'Psychiatry practice with in-network insurance.',
        whyTheyWin: 'Scaled provider network and payer relationships.',
      },
      {
        name: 'Brightside Health',
        description: 'Online psychiatry and therapy platform.',
        whyTheyWin: 'Established telepsychiatry operations and brand.',
      },
      {
        name: 'Headway',
        description: 'Insurance and workflow infrastructure for therapists.',
        whyTheyWin: 'Network and payer integration advantage.',
      },
    ],
    marketPosition: 'AI copilots for psychiatry integrated into care delivery',
    moat: [
      'In-network psychiatry care model + AI copilot',
      'Workflow automation for clinician efficiency',
    ],
    vsGiants: 'Vertical focus on psychiatry vs horizontal telehealth platforms.',

    // AI-Native Level
    aiNativeLevel: 'C',
    aiNativeLevelDescription: 'AI as Major Feature: Therapy and mental health platform with AI features. Proven healthcare workflow with AI augmentation.',
    aiDesignChallenges: [
      'Empathetic UX for sensitive mental health contexts',
      'Safety and escalation design for high-risk cases',
      'Clinician + patient dual-journey workflow design',
      'Trust and transparency in AI-generated clinical support',
    ],

    // Founders & Vision
    founders: [
      {
        name: 'John Zhao',
        role: 'Co-Founder & CEO',
        background: 'BS in Economics & Philosophy from Duke University. Previously founded, scaled, and exited multi-$B startups: Athelas, Elemy, EverQuote. Backed by YCombinator, Sequoia, General Catalyst, Founders Fund. Built Blossom as care + technology platform for psychiatry.',
      },
      {
        name: 'Yury Yakubchyk',
        role: 'Co-Founder',
        background: 'Co-founded Blossom with John Zhao. Previously worked on multi-$B healthcare startups. Technical and operational expertise.',
      },
    ],
    whyBuilding:
      'Expand access to high-quality psychiatry by combining AI copilots with care delivery operations. Raise what the standard of care looks like in psychiatry through technology and AI.',
    beliefs: [
      'Mental health care should be accessible and in-network',
      'AI can reduce clinician administrative load',
      'Care quality depends on both clinical rigor and patient trust',
      'AI copilots and tools together can raise the standard of care in psychiatry',
      'Technology should enable clinicians, not replace them',
    ],
    designPhilosophy: 'Design for both clinicians and patients. Prioritize empathy, safety, and clinical outcomes. Build AI copilots that fit into psychiatric care workflows.',
    greenFlags: [
      'Series A funding to scale operations',
      'Clear vertical focus on psychiatry',
      'Product requires high-empathy UX (design leverage)',
    ],
    redFlags: [
      'Operational complexity of care delivery',
      'High regulatory and clinical risk profile',
    ],

    // Design Opportunity
    designTeam: {
      teamSize: 'Unknown (company size 11-50)',
    },
    designWorkType: {
      logicBehavior: {
        level: 'high',
        tasks: [
          'Clinical triage logic and AI copilot guardrails',
          'Workflow automation for intake and follow-ups',
          'Escalation paths for risk and safety',
        ],
      },
      evaluation: {
        level: 'high',
        tasks: [
          'Clinical quality metrics for AI support',
          'Safety auditing and error review',
          'Patient outcome tracking and feedback loops',
        ],
      },
      interface: {
        level: 'high',
        tasks: [
          'Patient intake and care plan UX',
          'Clinician dashboard and note review',
          'Care coordination and messaging flows',
        ],
      },
    },
    productStage: '1→10',

    // Product & User Context
    targetAudiences: {
        primary: 'Psychiatrists and mental health clinicians in virtual practice settings',
        secondary: 'Patients seeking accessible, in-network mental health care',
    },
    userProblems: [
        'Psychiatrists are in severe shortage with months-long wait times for appointments',
        'Most psychiatrists don\'t accept insurance forcing patients to pay $200-400+ per session',
        'Clinical documentation and administrative tasks consume 40% of psychiatrist time',
        'Telehealth platforms lack psychiatry-specific workflow tools and AI support',
        'Mental health care quality varies widely with limited standardization',
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
        'Deeply empathetic and safety-critical design work',
        'AI + care delivery model creates unique UX problems',
      ],
      whyNot: [
        'High regulatory risk and operational complexity',
        'Design scope may be constrained by clinical protocols',
      ],
      nextActions: [
        'Review care workflow and patient onboarding UX',
        'Track clinical outcomes and retention data',
      ],
    },

    // Meta
    lastUpdated: '2026-01-26T23:55:00',
    sources: [
      { title: 'Blossom Health website', url: 'https://www.joinblossomhealth.com' },
      { title: 'Blossom Health LinkedIn', url: 'https://www.linkedin.com/company/join-blossom-health/' },
      { title: 'Blossom raises $18.4M (Behavioral Health Business)', url: 'https://bhbusiness.com/2025/10/01/psychiatry-company-blossom-raises-18-4m/' },
      { title: 'Blossom funding and investors (job listing)', url: 'https://www.simplyhired.com/job/N8PM9y9hg0AQ2VSbU2wxf1uEl1O0TQ0bAlPK5S1Y7zzTH4e_1d8Y8g' },
      { title: 'Blossom Health Crunchbase', url: 'https://www.crunchbase.com/organization/blossom-health-32b4' },
      { title: 'U.S. behavioral health market size (2024)', url: 'https://www.precedenceresearch.com/us-behavioral-health-market' },
      { title: 'John Zhao LinkedIn', url: 'https://www.linkedin.com/in/zhao-john/' },
      { title: 'Blossom Health People', url: 'https://wellfound.com/company/join-blossom-health/people' },
    ],
  };
