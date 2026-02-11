import { Company } from '../types';

export const genspark: Company = {
    id: 'genspark',
    name: 'Genspark',
    description: 'All-in-one AI workspace that automates complex tasks for knowledge workers through AI agents and multi-agent search.',
    website: 'https://www.genspark.ai',
    headquarters: 'Palo Alto, CA',
    remote: 'Hybrid',
    aiTypes: ['automation'],
    markets: ['b2c'],
  productStage: '1→10',
  category: 'productivity' as const,
    industries: ['productivity'],
    stage: 'Early-Stage',
  totalFunding: '$460M (Series B)',
    valuation: '$1.25B (Unicorn status)',
    growth: 'Explosive (Pivoted from Search to Autonomous super-agents)',
  competitors: [
    { name: 'Perplexity', description: 'AI-powered answer engine combining real-time search with conversational AI.' },
    { name: 'You.com', description: 'AI search engine offering personalized, source-cited answers and productivity agents.' },
    { name: 'Google', description: 'Dominant global search engine integrating AI overviews into search results.' },
  ],
  moat: ['Multi-agent search architecture', 'Sparkpage proprietary format', 'Custom AI models for search'],
    aiNativeLevel: 'A',
  aiNativeLevelDescription: 'AI Native description pending.',
    founders: [
      { name: 'Eric Jing', role: 'CEO', background: 'Unknown' },
      { name: 'Wen Sang', role: 'COO', background: 'Unknown' },
      { name: 'Kay Zhu', role: 'CTO', background: 'Unknown' }
    ],
    whyBuilding: 'Beyond simple search, realizing super agents that autonomously generate and execute complex business deliverables.',
    beliefs: [
            'The future workbook is not a static document but a collection of intelligently evolving AI agents.',
            'Search is merely a process toward outcomes, and AI should deliver those outcomes directly.',
        ],
  greenFlags: [],
  redFlags: [],
    aiDesignChallenges: [
            'Architecture that maintains consistent user intent across numerous Sparkpages and agents.',
            'UI for real-time monitoring and providing feedback on autonomously executing AI agents.',
        ],
    userProblems: [
            'Fragmented workflows across various AI tools (Copilot, Gemini, etc.).',
            'High cognitive load spent creating actual deliverables compared to time spent searching for information.',
        ],
    cultureInsights: [
      { source: 'careers', sentiment: 'positive', content: 'Values: Outcome-oriented, Cross-functional Agentic Architecture. Benefits: Collaboration with top-tier AI talent from MIT/Google/Baidu, autonomous work environment and super agent development opportunities.' }
    ],
    
  designTeam: {},
  designWorkType: {
    logicBehavior: { level: 'medium', tasks: ['Multi-agent orchestration for search query decomposition', 'Sparkpage content generation and formatting logic'] },
    evaluation: { level: 'medium', tasks: ['Search result quality and relevance scoring', 'Agent task completion and accuracy metrics'] },
    interface: { level: 'medium', tasks: ['AI-powered search results and Sparkpage rendering UI', 'Agent workspace and task monitoring dashboard'] },
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
  
  lastUpdated: '2026-02-09T18:12:58.304Z',
  sources: [
    { title: 'Source', url: 'https://www.genspark.ai/blog' },
    { title: 'Source', url: 'https://www.forbes.com/sites/kenrickcai/2024/04/genspark-ai-unicorn-eric-jing/' }
  ],
};
