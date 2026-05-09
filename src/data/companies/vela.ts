import { Company } from '../types';

export const vela: Company = {
  id: 'vela',
  name: 'Vela',
  description: 'AI agents for complex scheduling coordination — handles outreach, negotiation, follow-up, and booking across email, SMS, WhatsApp, and phone, adapting to the human nuances of who to prioritize and how hard to push.',
  website: 'https://tryvela.ai',
  headquarters: 'Unknown',
  remote: 'Unknown',

  aiTypes: ['automation', 'conversation-ai'],
  markets: ['b2b', 'enterprise'],
  category: 'productivity' as const,
  industries: ['productivity'],

  // Business
  stage: 'Seed',
  valuation: 'Unknown',
  totalFunding: '$500K (estimated YC Seed)',
  fundingHistory: [
    {
      stage: 'Seed',
      amount: '$500K (estimated)',
      date: '2026-01',
      leadInvestors: ['Y Combinator'],
    },
  ],
  revenue: 'Unknown (live with paying enterprise customers)',
  growth: 'Live with paying enterprise customers; pilots at staffing firms conducting 1,000+ interviews/week',
  runway: 'YC-backed — typical 18-24 month runway',
  customers: 'Staffing firms, executive search firms, industrial staffing (drug test scheduling), enterprise HR teams',

  // Growth & Potential
  growthMetrics: {
    stage: 'early-growth',
    revenueGrowth: 'Unknown — early customer stage',
    userGrowth: 'Paying enterprise customers; expanding from staffing into healthcare scheduling',
    signals: [
      'YC W26 backing',
      'Live with paying enterprise customers at launch',
      'Staffing firm customer searched 8 years for this solution',
      'Expanding to industrial staffing (drug test + shift scheduling) and healthcare',
    ],
    tam: '$5B+ scheduling and calendar software market; $30B+ staffing/recruitment software adjacency',
    marketShare: '<0.1% of TAM = 500x+ upside potential',
    ceiling: 'Medium innings: scheduling coordination is underserved in enterprise but constrained by AI agent reliability thresholds for high-stakes meetings',
    tailwinds: [
      'AI agent reliability now sufficient for autonomous email/SMS/phone coordination',
      'Staffing industry growth — 1,000+ interviews/week is standard for large firms',
      'Existing solutions (Calendly, Doodle) are passive; active AI negotiation is a new category',
      'Healthcare scheduling is massively fragmented and underserved',
      'Remote and distributed work increased scheduling complexity across time zones',
    ],
    headwinds: [
      'Clara Labs, x.ai proved this is hard — previous AI scheduling assistants underdelivered',
      'Enterprise trust barrier: will companies let AI autonomously communicate with candidates?',
      'Google Calendar and Microsoft Teams are entrenched scheduling surfaces with AI roadmaps',
      'Narrow initial market (staffing) may cap early revenue ceiling',
    ],
    moatType: 'switching-costs',
    moatStrength: 'Growing moat: each customer teaches Vela their specific scheduling nuances and communication style — embedded in the workflow after months of use.',
  },

  // Competition
  competitors: [
    {
      name: 'Calendly',
      description: 'Self-serve scheduling link tool for individual and team meetings.',
      whyTheyWin: 'Market leader in self-serve scheduling; deeply embedded in sales workflows; simple and reliable.',
    },
    {
      name: 'Clara Labs',
      description: 'Decade-old AI scheduling assistant (email-based).',
      whyTheyWin: 'Established brand in AI email scheduling; existing enterprise customer base.',
    },
    {
      name: 'Doodle',
      description: 'Group availability polling and scheduling tool.',
      whyTheyWin: 'Simple, widely recognized for multi-party availability; integrates with existing calendar tools.',
    },
  ],
  marketPosition: 'The first AI scheduling agent that handles multi-channel, multi-party coordination with human negotiation nuance at enterprise scale',
  moat: [
    'Multi-channel coordination (email, SMS, WhatsApp, phone) is technically hard — most tools are email-only',
    'Learns customer-specific scheduling nuances and priorities over time',
    'Founded by operators who built at massive scale (SWIFTmfi at 14, AWS ML Supercompute)',
  ],
  vsGiants: 'Active AI negotiation and follow-up across channels vs passive calendar-link-sharing tools',

  // AI-Native Level
  aiNativeLevel: 'B',
  aiNativeLevelDescription: 'AI-Core: Without the AI agent, Vela is just a calendar tool like Calendly. The AI\'s ability to read context, negotiate autonomously, follow up when ghosted, and adapt to interpersonal nuances is the entire value proposition.',
  aiDesignChallenges: [
    'Agent transparency: how does the user know what Vela said and why, without reading every email?',
    'Override and escalation design: when should the AI defer to a human, and how is that communicated?',
    'Trust-building UI: how do new users develop confidence to let an agent email candidates on their behalf?',
    'Multi-channel coordination view: visualizing 100s of concurrent scheduling threads in progress',
    'Failure recovery: how do users understand and fix a scheduling loop that went wrong?',
  ],

  // Founders & Vision
  founders: [
    {
      name: 'Gobhanu Sasankar Korisepati',
      role: 'CEO & Co-founder',
      background: 'Left Wharton\'s Huntsman Program for Vela. Previously at Perplexity and BCG AI. Founded SWIFTmfi (microfinance bank) at age 14 — scaled to 77 countries.',
    },
    {
      name: 'Saatvik Suryajit Korisepati',
      role: 'CTO & Co-founder',
      background: 'Dropped out of UChicago Booth Scholar (MBA/MS CS). Engineer on AWS ML Supercompute team. CS and Information Systems degrees from Carnegie Mellon.',
    },
  ],
  whyBuilding: '"Scheduling is a constraint satisfaction problem disguised as email." The brothers built Vela because enterprise scheduling — especially for staffing firms running 1,000+ interviews/week — has no good solution. Existing tools are passive; great scheduling requires the judgment of a skilled EA.',
  beliefs: [
    'Scheduling is a human nuance problem first, a logistics problem second',
    'Every interaction should deepen the agent\'s understanding of your scheduling priorities',
    'Multi-channel is table stakes — meetings happen via email, SMS, WhatsApp, and phone',
  ],
  designPhilosophy: 'Unknown',
  greenFlags: [
    'Exceptional founder pedigree: microfinance bank at 14 (77 countries), AWS ML Supercompute, Perplexity, BCG AI',
    'Live with paying enterprise customers at launch',
    'Clear customer pain: staffing firm searched 8 years for this solution',
    'YC W26 backing',
  ],
  redFlags: [
    'Clara Labs and x.ai tried AI email scheduling for a decade — market education is slow',
    'Enterprise trust barrier for autonomous outreach is real',
    'Initial market (staffing) is specialized — path to broader enterprise scheduling requires pivots',
    'Very small team (4 people) building a complex multi-channel AI agent',
  ],

  // Design Opportunity
  designTeam: {
    teamSize: 'Unknown (estimated 0, engineering-first team of 4)',
  },
  designWorkType: {
    logicBehavior: {
      level: 'high',
      tasks: [
        'Agent behavior rules: when to follow up, how often, how to handle ghosting',
        'Escalation logic: when Vela defers to human vs proceeds autonomously',
        'Multi-channel coordination sequencing (email → SMS → phone fallback)',
      ],
    },
    evaluation: {
      level: 'high',
      tasks: [
        'Agent performance review: did Vela book meetings at target rate?',
        'Communication quality audit: reviewing AI-written messages for tone and accuracy',
        'Scheduling success/failure analysis: why did coordination fail for a given thread?',
      ],
    },
    interface: {
      level: 'medium',
      tasks: [
        'Active scheduling threads dashboard: 100s of concurrent negotiations in progress',
        'Message review and override UI: inspecting and editing what Vela sent',
        'Calendar and CRM integration management',
      ],
    },
  },
  productStage: '0→1',

  // Designer Links
  designerLinks: [],

  // Open Roles
  openRoles: [],

  // Culture Insights
  cultureInsights: [],

  // My Tracking
  tracking: {
    status: 'watching',
    fitScore: 5,
    whyJoin: [
      'Exceptional founders — SWIFTmfi at 14 and AWS ML Supercompute are impressive signals',
      'AI agent transparency and override design is genuinely hard and interesting UX problem',
      'Enterprise customers already paying validates real pain',
    ],
    whyNot: [
      'Clara Labs proved this market is slow to adopt and educate',
      'Initial staffing focus narrows the product design surface',
      'Very small team — design hire unlikely before Series A',
      'Google Calendar and Microsoft Teams are large platform threats',
    ],
    nextActions: [
      'Monitor for Series A funding announcement',
      'Watch product surface evolution beyond staffing into healthcare',
    ],
  },

  // Meta
  lastUpdated: '2026-04-22T00:00:00',
  sources: [
    { title: 'Vela YC Profile', url: 'https://www.ycombinator.com/companies/vela' },
    { title: 'Launch HN: Vela (YC W26)', url: 'https://news.ycombinator.com/item?id=47264741' },
    { title: 'Vela Website', url: 'https://tryvela.ai' },
    { title: 'Vela LinkedIn', url: 'https://www.linkedin.com/company/tryvela' },
  ],
};
