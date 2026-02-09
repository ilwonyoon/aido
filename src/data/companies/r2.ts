import { Company } from '../types';

export const r2: Company = {
    id: 'r2',
    name: 'R2',
    description: 'Embedded lending infrastructure and AI credit scoring platform for Latin American SMBs.',
    website: 'https://r2.co',
    headquarters: 'Mexico City, Mexico',
    remote: 'Hybrid',
    aiTypes: ['automation'],
    markets: ['b2b'],
  productStage: '1→10',
  category: 'vertical-saas' as const,
    industries: ['fintech'],
    stage: 'Early-Stage',
  totalFunding: '$9M+ equity, $50M debt facility',
    valuation: 'Unknown',
    growth: 'High (Processing $200M+ in available credit)',
  competitors: [
    { name: 'Plaid', description: 'Financial data connectivity platform enabling apps to access bank data.', whyTheyWin: 'Dominant financial data API with massive developer adoption.' },
    { name: 'Unit', description: 'Banking-as-a-service platform for embedding financial products.', whyTheyWin: 'Comprehensive embedded banking stack with strong US market presence.' },
    { name: 'Bond', description: 'Embedded finance platform for cards, accounts, and lending.', whyTheyWin: 'Full-stack embedded finance with enterprise partnerships.' },
  ],
  moat: [
    'Deep integration with major LatAm platforms like Uber Eats and Rappi',
    'AI credit scoring using transaction data instead of traditional banking data',
    'First-mover advantage in embedded lending for LatAm digital platforms',
  ],
    aiNativeLevel: 'B',
  aiNativeLevelDescription: 'AI Native description pending.',
    founders: [
      { name: 'Unknown', role: 'Co-founder', background: 'Unknown' }
    ],
    whyBuilding: 'Building financial infrastructure so every digital platform in Latin America can provide capital to SMBs.',
    beliefs: [
            'Transaction data and AI, not traditional bank data, are the key to truly assessing SMB creditworthiness.',
            'Loans should happen with a single click within the platforms businesses use daily, without separate bank visits.',
        ],
  greenFlags: [],
  redFlags: [],
    aiDesignChallenges: [
            'Translating complex credit scoring results into simple, easy-to-understand loan offer UI for anyone.',
            'Designing a secure and trustworthy lending process within chat interfaces like WhatsApp.',
        ],
    userProblems: [
            'Chronic difficulty in accessing capital (Credit Gap) for Latin American SMBs.',
            'Slow and complex loan approval processes from traditional financial institutions.',
        ],
    cultureInsights: [
      { source: 'careers', sentiment: 'positive', content: 'Values: Financial Inclusion, Data-Driven Decisions. Benefits: At the center of LatAm fintech infrastructure innovation, large-scale integration experience with global platforms like Uber and Rappi.' }
    ],

  designTeam: {},
  designWorkType: {
    logicBehavior: { level: 'medium', tasks: ['AI credit scoring model output presentation and decision logic', 'Embedded loan application flow within partner platform UIs'] },
    evaluation: { level: 'medium', tasks: ['Loan approval rate and default rate monitoring dashboards', 'Credit model fairness and accuracy feedback loops'] },
    interface: { level: 'medium', tasks: ['Partner-facing lending widget and SDK design', 'SMB borrower dashboard for loan status and repayment tracking'] },
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

  lastUpdated: '2026-02-09T18:12:58.335Z',
  sources: [
    { title: 'Source', url: 'https://r2.co' },
    { title: 'Source', url: 'https://www.twilio.com/blog/ai-startup-searchlight-honorees-2025' }
  ],
};
