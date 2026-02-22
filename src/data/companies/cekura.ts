import { Company } from '../types';

export const cekura: Company = {
    id: 'cekura',
    name: 'Cekura',
    description: 'Testing and observability platform for ensuring reliability and safety of conversational AI agents.',
    website: 'https://cekura.ai',
    headquarters: 'San Francisco, CA',
    region: 'sf-bay-area' as const,
    remote: 'Unknown',
    aiTypes: ['automation'],
    markets: ['b2b'],
  productStage: '1→10',
  category: 'developer-tools' as const,
    industries: ['developer-tools'],
    stage: 'Early-Stage',
    normalizedStage: 'other' as const,
  totalFunding: '$2.4M (Seed)',
    valuation: 'Unknown',
    growth: 'Early Stage (YC Backed)',
  competitors: [
    { name: 'Braintrust', description: 'Enterprise AI platform for evaluating, testing, and monitoring LLM applications.' },
    { name: 'Patronus AI', description: 'AI evaluation and red-teaming platform for detecting hallucinations and safety issues.' },
    { name: 'Galileo AI', description: 'ML observability and data intelligence platform for debugging and improving AI models.' },
  ],
  moat: [],
    aiNativeLevel: 'B',
  aiNativeLevelDescription: 'AI Native description pending.',
    founders: [
      { name: 'Sidhant Kabra', role: 'Co-founder', background: 'Unknown' },
      { name: 'Shashij Gupta', role: 'Co-founder', background: 'Unknown' },
      { name: 'Tarush Agarwal', role: 'Co-founder', background: 'Unknown' }
    ],
    whyBuilding: 'Making it as easy to build reliable conversational AI agents as it is to build a website.',
    beliefs: [
            'AI agent hallucinations and errors must be systematically simulated before production deployment.',
            'Creating AI safety standards that enable secure use even in highly regulated industries like finance and healthcare.',
        ],
  greenFlags: [],
  redFlags: [],
    aiDesignChallenges: [
            'Dashboard design that simulates numerous edge cases and intuitively visualizes results.',
            'Interface enabling developers to quickly debug where issues occur in AI conversation flows.',
        ],
    userProblems: [
            'Reputational risk for enterprises from unpredictable AI chatbot/agent responses.',
            'Delayed AI product launches due to lack of systematic testing tools.',
        ],
    cultureInsights: [
      { source: 'careers', sentiment: 'positive', content: 'Values: Reliability First, Developer Experience. Benefits: Growth experience at an early-stage startup backed by YC and top VCs, deep technical expertise in AI infrastructure and testing.' }
    ],
    
  designTeam: {},
  designWorkType: {
    logicBehavior: { level: 'medium', tasks: ['AI agent test scenario generation and edge case simulation', 'Hallucination detection rule configuration and threshold logic'] },
    evaluation: { level: 'medium', tasks: ['Test result visualization and pass/fail scoring dashboards', 'Regression tracking for AI agent behavior across deployments'] },
    interface: { level: 'medium', tasks: ['Conversation flow debugging and replay interface', 'Test suite management and observability dashboard'] },
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
  
  lastUpdated: '2026-02-09T18:12:58.291Z',
  sources: [
    { title: 'Source', url: 'https://cekura.ai' },
    { title: 'Source', url: 'https://www.ycombinator.com/companies/cekura' }
  ],
};
