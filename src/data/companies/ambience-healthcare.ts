import { Company } from '../types';

export const ambienceHealthcare: Company = {
    id: 'ambience-healthcare',
    name: 'Ambience Healthcare',
    description: 'AI platform for clinical documentation, coding, and workflow automation for health systems.',
    website: 'https://www.ambiencehealthcare.com',
    headquarters: 'San Francisco, CA',
    remote: 'Yes',

    // Business
    stage: 'Series C',
    valuation: '$1B (Jul 2025, estimated)',
    totalFunding: '$373M (estimated)',
    fundingHistory: [
      { stage: 'Series A', amount: '$30M (estimated)', date: '2022-04', leadInvestors: ['Andreessen Horowitz'] },
      { stage: 'Series B', amount: '$70M', date: '2024-02', leadInvestors: ['Kleiner Perkins', 'OpenAI Startup Fund'] },
      { stage: 'Series C', amount: '$243M', date: '2025-07', leadInvestors: ['Oak HC/FT', 'Andreessen Horowitz'] },
    ],
    revenue: '$30M ARR (May 2025, estimated)',
    growth: '100+ specialties; deployed across major health systems',
    runway: 'Strong (Series C $243M)',
    customers: 'Cleveland Clinic, UCSF Health, Houston Methodist, Memorial Hermann',

    // Growth & Potential
    growthMetrics: {
      stage: 'high-growth',
      revenueGrowth: '$19M → $30M ARR (end 2024 → May 2025, estimated)',
      userGrowth: '100+ clinical specialties supported; expanding enterprise deployments',
      signals: [
        '$243M Series C co-led by Oak HC/FT + a16z (Jul 2025)',
        'EHR integrations across Epic, Oracle Cerner, and athenahealth',
        'Expansion to 100+ specialties and enterprise health systems',
      ],
      tam: '$4.88B global clinical documentation improvement market (2024)',
      marketShare: '~0.6% of TAM (using $30M ARR estimate)',
      ceiling: 'Early innings: ambient AI adoption still rolling out across health systems',
      tailwinds: [
        'Clinician burnout driving demand for automation',
        'Health systems investing in AI for documentation and coding',
        'Regulatory push for accurate clinical documentation',
      ],
      headwinds: [
        'EHR vendors building native AI scribes',
        'Data privacy and compliance constraints',
        'Lengthy procurement cycles in healthcare',
      ],
      moatType: 'switching-costs',
      moatStrength: 'Strong: deep EHR integrations and workflow embedding.',
    },

    // Competition
    competitors: [
      {
        name: 'Abridge',
        description: 'AI medical conversation and documentation platform.',
        whyTheyWin: 'Strong health system adoption and clinical validation.',
      },
      {
        name: 'Nuance DAX (Microsoft)',
        description: 'Ambient clinical documentation integrated with EHRs.',
        whyTheyWin: 'Deep enterprise distribution and EHR partnerships.',
      },
      {
        name: 'Suki AI',
        description: 'AI assistant for clinicians with voice documentation.',
        whyTheyWin: 'Early mover in ambient scribing and clinician-focused UX.',
      },
    ],
    marketPosition: 'Enterprise-grade ambient AI for documentation and coding',
    moat: [
      'Deep EHR integrations (Epic, Oracle Cerner, athenahealth)',
      'Multi-specialty coverage (100+ specialties)',
      'Coding and compliance-aware documentation workflows',
    ],
    vsGiants: 'Focused clinical documentation + coding workflows vs general AI assistants.',

    // AI-Native Level
    aiNativeLevel: 4,
    aiNativeLevelDescription: 'AI is the product; ambient clinical AI drives core workflows.',
    aiDesignChallenges: [
      'Multi-stakeholder UX across clinicians, admins, and coders',
      'Error-proofing AI documentation with high clinical risk',
      'Designing trust and accountability for AI-generated notes',
      'Reducing workflow friction inside EHR systems',
    ],

    // Founders & Vision
    founders: [
      {
        name: 'Mike Ng',
        role: 'Co-founder & CEO',
        background: 'Co-founded Ambience Healthcare in 2020',
      },
      {
        name: 'Nikhil Buduma',
        role: 'Co-founder & Chief Scientist',
        background: 'Co-founded Ambience Healthcare in 2020',
      },
    ],
    whyBuilding:
      'Reduce administrative burden and improve clinical documentation quality with ambient AI that fits inside real healthcare workflows.',
    beliefs: [
      'Clinical AI must be accurate and auditable',
      'AI should reduce clinician burnout, not add complexity',
      'Healthcare workflows require deep EHR integration',
    ],
    designPhilosophy: 'Unknown',
    greenFlags: [
      'Series C $243M from top-tier healthcare investors',
      'Adoption across large, brand-name health systems',
      'Clear multi-stakeholder workflow focus',
    ],
    redFlags: [
      'Procurement cycles are long and complex',
      'Competitive pressure from EHR vendors and incumbents',
    ],

    // Design Opportunity
    designTeam: {
      teamSize: 'Unknown (company size 51-200)',
    },
    designWorkType: {
      logicBehavior: {
        level: 'high',
        tasks: [
          'Clinical documentation logic and coding alignment',
          'Safety constraints for AI note generation',
          'Workflow decision trees for multi-role users',
        ],
      },
      evaluation: {
        level: 'high',
        tasks: [
          'Accuracy metrics for AI notes and summaries',
          'Human review workflows for clinical risk',
          'Feedback loops from clinicians and coders',
        ],
      },
      interface: {
        level: 'high',
        tasks: [
          'EHR-embedded UI patterns',
          'Hands-free dictation and ambient capture UX',
          'Review and edit interfaces for clinicians',
        ],
      },
    },
    productStage: '10→100',

    // Designer Links
    designerLinks: [],

    // Open Roles
    openRoles: [
      {
        title: 'Staff Product Designer',
        location: 'San Francisco, CA (Onsite)',
        url: 'https://www.monster.com/job-openings/staff-designer-san-francisco-ca--820b0d57-9c92-447b-b2ea-2c4244a58e65',
        level: 'Staff',
        type: 'full-time',
      },
    ],

    // Culture Insights
    cultureInsights: [],

    // My Tracking
    tracking: {
      status: 'watching',
      fitScore: 8,
      whyJoin: [
        'Multi-stakeholder UX with high clinical impact',
        'Deep design leverage in workflows, trust, and safety',
      ],
      whyNot: [
        'Long sales cycles and complex compliance environment',
        'High-stakes errors increase design risk',
      ],
      nextActions: [
        'Review product demos and clinician workflows',
        'Research design leadership and team structure',
      ],
    },

    // Meta
    lastUpdated: '2026-01-26T20:00:00',
    sources: [
      { title: 'Ambience Series C announcement', url: 'https://www.ambiencehealthcare.com/blog/ambience-healthcare-announces-243-million-series-c-to-build-the-first-ai-platform-for-clinical-workflows' },
      { title: 'Ambience Series B (PRNewswire)', url: 'https://www.prnewswire.com/news-releases/ambience-healthcare-raises-70m-series-b-led-by-kleiner-perkins-and-openai-startup-fund-to-scale-its-ai-platform-for-clinicians-302055520.html' },
      { title: 'Ambience founder background (TechCrunch)', url: 'https://techcrunch.com/2025/07/15/ambience-healthcare-raises-243m-to-build-ai-operating-system-for-clinical-workflows/' },
      { title: 'Ambience Careers', url: 'https://www.ambiencehealthcare.com/careers' },
      { title: 'Ambience LinkedIn', url: 'https://www.linkedin.com/company/ambience-healthcare/' },
      { title: 'Ambience Crunchbase', url: 'https://www.crunchbase.com/organization/ambience-healthcare' },
      { title: 'Ambience funding + ARR estimates (Sacra)', url: 'https://sacra.com/c/ambience-healthcare/' },
      { title: 'Clinical documentation improvement market size', url: 'https://www.precedenceresearch.com/clinical-documentation-improvement-market' },
    ],
  };
