import { Company } from '../types';

export const lovable: Company = {
    id: 'lovable',
    name: 'Lovable',
    description: 'AI-powered no-code platform. Build full-stack apps by describing what you want.',
    website: 'https://lovable.dev',
    screenshot: '/screenshots/lovable-screenshot.png',
    headquarters: 'San Francisco, CA',
    remote: 'Yes',

    // OG Image
    ogImage: '/og-images/lovable-og.webp',

  // Multi-dimensional Tags
  aiTypes: ['code-assistant', 'automation'],
  markets: ['b2b'],
  category: 'developer-tools' as const,

  industries: ['infrastructure', 'developer-tools'],

    stage: 'Series B',
    valuation: '$6.6B (Dec 2025)',
    totalFunding: '$653M',
    revenue: '$200M ARR (2025)',
    growth: '100,000 new products built daily',
    customers: '8M users (Nov 2025), 50%+ Fortune 500',
    growthMetrics: {
      stage: 'hypergrowth',
      revenueGrowth: '$200M ARR in 1 year with 100 employees',
      userGrowth: '2.3M (July) → 8M users (Nov 2025)',
      signals: ['Fastest to $200M ARR in history', '$6.6B valuation (Dec 2025, 3.7x from $1.8B in 5 months)', '$653M total raised', '50%+ Fortune 500 using Lovable', '~750 employees'],
      tam: '$100B (no-code + AI coding market)',
      marketShare: '0.2% = 500x upside potential',
      ceiling: 'Early innings: Democratizing app creation',
      tailwinds: ['No-code adoption accelerating', 'Vibe coding entering job descriptions', 'Enterprise AI budgets growing'],
      headwinds: ['Competition from Bolt, v0, Replit', 'Code quality concerns at scale', 'Retention challenges post-launch'],
      moatType: 'network-effects',
      moatStrength: 'Strong: 100K daily products = data flywheel',
    },
    competitors: [
      { name: 'Bolt.new', description: '$40M ARR, fastest growth', whyTheyWin: 'StackBlitz technology, speed' },
      { name: 'v0 (Vercel)', description: '$9.3B valuation', whyTheyWin: 'Vercel distribution, enterprise' },
      { name: 'Replit', description: '$9B valuation', whyTheyWin: 'More mature, mobile apps' },
    ],
    marketPosition: '#1 in AI no-code by ARR',
    moat: ['100K daily products = training data', '50%+ Fortune 500 adoption', 'Network effects from templates'],
    vsGiants: 'Differentiate via no-code simplicity vs GitHub Copilot complexity',
    aiNativeLevel: 'A',
    aiNativeLevelDescription: 'AI-Native/Zero-to-One: AI IS the product. Building AI that codes entire apps autonomously. Zero-to-one in end-to-end AI development.',
    aiDesignChallenges: ['How to make AI-generated apps high quality', 'Balancing speed with customization', 'Teaching non-developers to prompt effectively', 'Managing expectations vs reality'],
    founders: [
      {
        name: 'Anton Osika',
        role: 'Co-founder & CEO',
        background: 'Engineering physics at KTH. Ex-CERN particle physicist, first employee at Sana (AI startup), co-founded Depict.ai. Swedish entrepreneur.',
      },
      {
        name: 'Fabian Hedin',
        role: 'Co-founder & CTO',
        background: 'KTH Industrial Engineering. Algorithm engineer, web developer. Built TenFAST property management. Youngest self-made billionaire in Europe at 26.',
      },
    ],
    whyBuilding: 'Everyone has app ideas. AI should make building them trivial.',
    beliefs: ['AI should make coding accessible to everyone', 'Speed of iteration > perfection', 'Product market fit > technology', 'Viral growth > paid acquisition'],
    designPhilosophy: 'Simple, delightful, fast. Make people feel like wizards.',
    greenFlags: ['Anton Osika (physicist-turned-founder, ex-CERN, ex-Sana)', '$200M ARR with ~750 employees', '$6.6B valuation (Dec 2025)', '50%+ Fortune 500 adoption', 'Fastest-growing software startup in history'],
    redFlags: ['Very fast scaling — culture may shift', 'High competition from Bolt, v0, Replit', 'Retention unknown post-initial excitement', 'Stockholm-based (on-site)'],
    designTeam: { designHead: 'Not publicly known', teamSize: '~15-20 designers (estimated, company now ~750 employees)' },
    designWorkType: {
      logicBehavior: { level: 'high', tasks: ['Design AI prompt interpretation', 'Define how AI makes design decisions', 'Product creation workflows'] },
      evaluation: { level: 'high', tasks: ['Quality scoring for generated apps', 'User satisfaction metrics', 'AI improvement feedback loops'] },
      interface: { level: 'high', tasks: ['Conversational app builder UI', 'Visual editor for AI outputs', 'Template and sharing systems'] },
    },
    productStage: '10→100',

    // Product & User Context
    targetAudiences: {
        primary: 'Non-technical founders, product managers, and business professionals with app ideas',
        secondary: 'Developers who want to prototype MVPs rapidly without writing boilerplate code',
    },
    userProblems: [
        'Building custom software requires hiring expensive developers or learning to code',
        'No-code tools like Webflow lack backend logic for complex business applications',
        'Prototyping MVPs takes months when you cannot code limiting idea validation speed',
        'Outsourcing development to agencies costs $50K-$500K+ per project',
        'Technical debt from rushed MVP code makes future iteration expensive',
    ],

    designerLinks: [],
    openRoles: [
      {
        title: 'Product Designer',
        location: 'Stockholm, Sweden',
        type: 'full-time',
        url: 'https://jobs.ashbyhq.com/lovable/cf78be5e-41ca-478a-b480-0d0839c24543',
        aboutRole: 'Shape AI-powered software creation platform. Lead design projects end-to-end collaborating with engineering.',
        responsibilities: [
          'Create detailed user flows and high-fidelity mockups for new features',
          'Own design projects from conception through delivery',
          'Establish scalable design processes maintaining quality standards',
          'Champion quick wins and impactful improvements',
          'Contribute to improving design quality of AI capabilities',
          'Help set design quality standards and culture',
        ],
        requirements: [
          'Track record in high-performing, fast-paced startup environments',
          'Portfolio demonstrating user-loved products from high-velocity teams',
          'Simplify complex user journeys into intuitive experiences',
          'Strong prototyping skills with visual communication emphasis',
          'Fluency with design systems and technical implementations',
          'Outstanding visual design, UI patterns, interaction principles',
          'High aptitude for shipping quickly and learning rapidly',
        ],
        preferred: [
          'Experience shipping to production with AI assistance',
          'Background designing AI products',
        ],
        whyInteresting: 'On-site in Stockholm. $200M ARR, 8M users (2M+ across 200+ countries). Fastest growing AI company ever. Extreme ownership, high velocity, low-ego collaboration culture. Hiring process: form → call → take-home → interviews → 1-2 day trial.',
      },
    ],
    cultureInsights: [],
    tracking: {
      status: 'interested',
      fitScore: 9,
      whyJoin: ['$200M ARR = incredible growth', 'Anton Osika (physicist-turned-founder)', '$6.6B valuation', 'AI-native Level 4', '50%+ Fortune 500'],
      whyNot: ['Fast-scaling team = culture shift risk', 'Stockholm on-site requirement', 'Design culture not well documented', 'High competition risk'],
      nextActions: ['Try Lovable product', 'Research Anton Osika', 'Connect with Lovable designers'],
    },
    lastUpdated: '2026-01-26T18:00:00',
    sources: [
      { title: 'Lovable $200M ARR', url: 'https://techcrunch.com/2025/11/10/lovable-says-its-nearing-8-million-users-as-the-year-old-ai-coding-startup-eyes-more-corporate-employees/' },
      { title: 'Lovable Growth Playbook', url: 'https://thecreatorsai.com/p/lovable-growth-secrets-and-costs' },
    ],
  };
