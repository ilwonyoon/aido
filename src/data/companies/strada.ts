import { Company } from '../types';

export const strada: Company = {
    id: 'strada',
    name: 'Strada',
    description: '24/7 AI agent that automates customer service and claims processing in the insurance industry.',
    website: 'https://www.getstrada.com',
    headquarters: 'San Francisco, CA',
    remote: 'Unknown',
    aiTypes: ['automation'],
    markets: ['b2b'],
  productStage: '1→10',
  category: 'vertical-saas' as const,
    industries: ['sales-marketing'],
    stage: 'Early-Stage',
  totalFunding: 'Unknown (Twilio AI Startup Searchlight 2025 Honoree)',
    valuation: 'Unknown',
    growth: 'Early Stage',
  competitors: [
    { name: 'Bold Penguin', description: 'Commercial insurance exchange and quoting platform.', whyTheyWin: 'Strong carrier network and established commercial lines marketplace.' },
    { name: 'Zywave', description: 'Insurance technology platform for agencies and brokers.', whyTheyWin: 'Comprehensive agency management suite with deep industry relationships.' },
    { name: 'Applied Epic', description: 'Agency management system for property and casualty insurance.', whyTheyWin: 'Industry-standard agency management with massive installed base.' },
  ],
  moat: [
    'AI agents trained on insurance-specific workflows and claims language',
    'Omnichannel automation combining Twilio Voice and Messaging APIs',
    'Deep domain expertise in insurance claims and customer reassurance',
  ],
    aiNativeLevel: 'B',
  aiNativeLevelDescription: 'AI Native description pending.',
    founders: [
      { name: 'Arash Khazaei', role: 'Co-founder & CTO', background: 'Technical co-founder' },
      { name: 'Amir Prodensky', role: 'Co-founder & CEO', background: 'Insurance technology entrepreneur' }
    ],
    whyBuilding: 'Simplifying the complex procedures of insurance with AI to provide immediate support to customers.',
    beliefs: [
            'In stressful situations like insurance claims, customers want immediate and accurate responses.',
            'AI must handle not just phone calls but also evidence collection (messaging) in an integrated way.',
        ],
  greenFlags: [],
  redFlags: [],
    aiDesignChallenges: [
            'Designing tone and manner that reassures anxious customers during urgent situations like accident reporting.',
            'Building a conversational engine that translates complex insurance terms and procedures into plain language.',
        ],
    userProblems: [
            'Long wait times to reach an insurer after an accident.',
            'Difficulty with repetitive document submissions and tracking claim progress.',
        ],
    cultureInsights: [
      { source: 'careers', sentiment: 'positive', content: 'Values: Customer Reassurance, Process Automation. Benefits: Challenging the conservative insurance industry with AI innovation, omnichannel experience leveraging Twilio Voice and Messaging APIs.' }
    ],

  designTeam: {},
  designWorkType: {
    logicBehavior: { level: 'medium', tasks: ['Claims intake conversation flow and decision tree logic', 'Automated evidence collection and document routing workflows'] },
    evaluation: { level: 'medium', tasks: ['Claims resolution time and accuracy tracking', 'Customer satisfaction scoring for AI-handled interactions'] },
    interface: { level: 'medium', tasks: ['Policyholder-facing claims status and communication portal', 'Agent supervision dashboard for monitoring AI conversations'] },
  },

  designerLinks: [],
  openRoles: [],

  tracking: {
    status: 'researching',
    fitScore: 5,
    whyJoin: [],
    whyNot: [],
    nextActions: [],
  },

  lastUpdated: '2026-02-09T18:12:58.343Z',
  sources: [
    { title: 'Source', url: 'https://www.twilio.com/blog/ai-startup-searchlight-honorees-2025' },
    { title: 'Source', url: 'https://www.ycombinator.com/companies/strada' }
  ],
};
