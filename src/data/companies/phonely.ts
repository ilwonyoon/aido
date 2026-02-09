import { Company } from '../types';

export const phonely: Company = {
    id: 'phonely',
    name: 'Phonely',
    description: 'AI-powered human-like phone answering service that automates customer experience for businesses.',
    website: 'https://phonely.ai',
    headquarters: 'San Francisco, CA (Relocated from Melbourne)',
    remote: 'Unknown',
    aiTypes: ['automation'],
    markets: ['b2b'],
  productStage: '1→10',
  category: 'vertical-saas' as const,
    industries: ['sales-marketing'],
    stage: 'Early-Stage',
  totalFunding: '$750K (YC S24)',
    valuation: 'Unknown',
    growth: 'Early Stage (YC Backed)',
  competitors: [
    { name: 'Smith.ai', description: 'Virtual receptionist and intake service combining AI with live agents.', whyTheyWin: 'Hybrid human+AI approach builds trust with professional services.' },
    { name: 'Ruby Receptionists', description: 'Live virtual receptionist service for small businesses.', whyTheyWin: 'Established brand with loyal SMB customer base and human touch.' },
    { name: 'Dialpad', description: 'AI-powered business communications platform with voice intelligence.', whyTheyWin: 'Full communications suite with enterprise-grade AI features.' },
  ],
  moat: [
    'PhD-level AI research team focused on voice realism and low-latency response',
    'YC S24 backing and network for rapid go-to-market',
    'End-to-end AI phone agent with calendar booking and CRM integration',
  ],
    aiNativeLevel: 'B',
  aiNativeLevelDescription: 'AI Native description pending.',
    founders: [
      { name: 'Will Bodewes', role: 'Co-founder', background: 'Unknown' },
      { name: 'Nisal Ranasinghe', role: 'PhD AI Researchers', background: 'Unknown' }
    ],
    whyBuilding: 'Scaling the reliability of voice AI so every business can provide 24/7 perfect phone answering service.',
    beliefs: [
            'Traditional IVR systems harm customer experience and AI should fully replace them.',
            'AI must go beyond simple answering to perform real tasks like calendar booking and CRM integration.',
        ],
  greenFlags: [],
  redFlags: [],
    aiDesignChallenges: [
            'Voice UX where AI maintains conversation context and handles turn-taking as naturally as a human.',
            'Dashboard for users to easily customize AI agent personality and call handling behavior.',
        ],
    userProblems: [
            'Lost potential customers and business opportunities from missed phone calls.',
            'Unnatural voices and slow response times of existing AI voice assistants.',
        ],
    cultureInsights: [
      { source: 'careers', sentiment: 'positive', content: 'Values: Voice Realism, Research-Driven. Benefits: Deep technical leadership from PhD AI researcher founders, rapid global growth opportunity through YC network.' }
    ],

  designTeam: {},
  designWorkType: {
    logicBehavior: { level: 'medium', tasks: ['Call flow logic and conversation branching for AI phone agents', 'Integration workflows for calendar booking and CRM updates during calls'] },
    evaluation: { level: 'medium', tasks: ['Call quality scoring and voice naturalness metrics', 'Customer satisfaction tracking and call outcome analysis'] },
    interface: { level: 'medium', tasks: ['Agent personality and behavior customization dashboard', 'Call analytics and real-time monitoring interface'] },
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

  lastUpdated: '2026-02-09T18:12:58.333Z',
  sources: [
    { title: 'Source', url: 'https://phonely.ai' },
    { title: 'Source', url: 'https://www.ycombinator.com/companies/phonely' }
  ],
};
