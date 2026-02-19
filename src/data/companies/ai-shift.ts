import { Company } from '../types';

export const aiShift: Company = {
  id: 'ai-shift',
  name: 'AI Shift',
  description: 'Intelligent voice AI agent solution revolutionizing Japan\'s call center industry with 24/7 automated customer service.',
  website: 'https://www.ai-shift.co.jp',
  headquarters: 'Tokyo, Japan',
  region: 'other-intl' as const,
  remote: 'Hybrid',
  aiTypes: ['automation'],
  markets: ['b2b'],
  productStage: '1→10',
  category: 'vertical-saas' as const,
  industries: ['sales-marketing'],
  stage: 'Early-Stage',
  normalizedStage: 'other' as const,
  totalFunding: 'Unknown (Subsidiary of CyberAgent)',
    valuation: 'Unknown',
    growth: 'High (Recognized by Twilio Searchlight Awards 2025)',
  competitors: [
    { name: 'Zendesk', description: 'Cloud-based customer service and support ticketing platform.' },
    { name: 'Intercom', description: 'AI-first customer messaging platform for sales, marketing, and support.' },
    { name: 'PKSHA Technology', description: 'Japanese AI company specializing in natural language processing and conversational AI.' },
  ],
  moat: ['CyberAgent subsidiary backing', 'Japanese market specialization', 'NLP optimized for Japanese language'],
  aiNativeLevel: 'B',
  aiNativeLevelDescription: 'AI Native description pending.',
  founders: [
      { name: 'Yuto Yoneyama', role: 'President', background: 'Unknown' }
    ],
    whyBuilding: 'Realizing human-AI collaboration to bring a productivity revolution for humanity.',
    beliefs: [
      'Voice AI is not merely a tool for answering calls but a partner that transforms agent productivity.',
      'Balancing service quality and operational efficiency through seamless 24/7 customer support.',
    ],
  greenFlags: [],
  redFlags: [],
  aiDesignChallenges: [
      'Minimizing latency in voice conversations and handling natural barge-in (interruption) processing.',
      'UX design that simplifies complex business logic for delivery through a voice interface.',
    ],
    userProblems: [
      'High stress and turnover rates among call center agents due to repetitive tasks.',
      'Decreased customer satisfaction from delayed responses to inquiries outside business hours.',
    ],
  cultureInsights: [
      { source: 'careers', sentiment: 'positive', content: 'Values: Settlement (AI solutions fully integrated into daily operations), Human-AI Collaboration. Benefits: Professional generative AI consulting support, access to CyberAgent group technology resources.' }
    ],
  
  designTeam: {},
  designWorkType: {
    logicBehavior: { level: 'medium', tasks: ['Voice AI conversation flow design and barge-in handling', 'Call routing logic between AI agent and human operators'] },
    evaluation: { level: 'medium', tasks: ['Customer satisfaction scoring for AI-handled calls', 'Voice recognition accuracy monitoring for Japanese language'] },
    interface: { level: 'medium', tasks: ['Call center operator dashboard for AI-human handoff', 'Real-time voice conversation monitoring UI'] },
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
  
  lastUpdated: '2026-02-09T18:12:58.278Z',
  sources: [
    { title: 'Source', url: 'https://www.ai-shift.co.jp/news/7817' },
    { title: 'Source', url: 'https://www.twilio.com/en-us/signal/london/awards' }
  ],
};
