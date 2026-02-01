export type InterestStatus = 'tier_0' | 'tier_1' | 'not_interested' | null;

// Multi-dimensional tagging system
export type AIType =
  | 'foundation-model'    // Anthropic, OpenAI, Mistral (LLM 직접 개발)
  | 'model-platform'      // Together AI, Replicate (모델 호스팅/커스터마이징)
  | 'ai-infrastructure'   // Weights & Biases, LangChain (AI 개발 도구/MLOps)
  | 'image-generation'    // Midjourney, Stable Diffusion
  | 'video-generation'    // Runway, Pika, HeyGen
  | 'audio-generation'    // Suno, ElevenLabs
  | 'code-assistant'      // Cursor, Replit, Codeium
  | 'text-assistant'      // Jasper, Copy.ai
  | 'search-retrieval'    // Perplexity, Glean
  | 'conversation-ai'     // Intercom, Gong
  | 'data-analysis'       // Hightouch
  | 'automation';         // Zapier AI

export type Market =
  | 'b2c'          // 개인 소비자
  | 'prosumer'     // 크리에이터, 프리랜서
  | 'smb'          // 중소기업
  | 'b2b'          // 기업
  | 'enterprise';  // 대기업

export type Industry =
  | 'infrastructure'     // AI 인프라
  | 'developer-tools'    // 개발자 도구
  | 'creative-media'     // 크리에이티브/미디어
  | 'productivity'       // 생산성
  | 'sales-marketing'    // 영업/마케팅
  | 'healthcare'         // 헬스케어
  | 'fintech'            // 금융
  | 'legal'              // 법률
  | 'security'           // 보안
  | 'education'          // 교육
  | 'other';             // 기타

export const AI_TYPE_LABELS: Record<AIType, string> = {
  'foundation-model': 'Foundation Model',
  'model-platform': 'Model Platform',
  'ai-infrastructure': 'AI Infrastructure',
  'image-generation': 'Image Generation',
  'video-generation': 'Video Generation',
  'audio-generation': 'Audio Generation',
  'code-assistant': 'Code Assistant',
  'text-assistant': 'Text Assistant',
  'search-retrieval': 'Search & Retrieval',
  'conversation-ai': 'Conversation AI',
  'data-analysis': 'Data Analysis',
  'automation': 'Automation',
};

export const MARKET_LABELS: Record<Market, string> = {
  'b2c': 'B2C',
  'prosumer': 'Prosumer',
  'smb': 'SMB',
  'b2b': 'B2B',
  'enterprise': 'Enterprise',
};

export const INDUSTRY_LABELS: Record<Industry, string> = {
  'infrastructure': 'Infrastructure',
  'developer-tools': 'Developer Tools',
  'creative-media': 'Creative & Media',
  'productivity': 'Productivity',
  'sales-marketing': 'Sales & Marketing',
  'healthcare': 'Healthcare',
  'fintech': 'Fintech',
  'legal': 'Legal',
  'security': 'Security',
  'education': 'Education',
  'other': 'Other',
};

export interface FundingRound {
  stage: 'Pre-seed' | 'Seed' | 'Series A' | 'Series B' | 'Series C' | 'Series D' | 'Series E' | 'Series F' | 'Unknown';
  amount: string; // e.g., "$50M"
  date: string; // e.g., "2024-03"
  valuation?: string; // post-money valuation if known
  leadInvestors?: string[];
}

export interface DesignWorkType {
  logicBehavior: {
    level: 'high' | 'medium' | 'low';
    tasks: string[];
  };
  evaluation: {
    level: 'high' | 'medium' | 'low';
    tasks: string[];
  };
  interface: {
    level: 'high' | 'medium' | 'low';
    tasks: string[];
  };
}

export interface DesignerLink {
  name: string;
  role: string;
  platform: 'twitter' | 'threads' | 'substack' | 'blog' | 'linkedin' | 'podcast' | 'careers';
  url: string;
  description?: string;
}

export interface OpenRole {
  title: string;
  location: string;
  url: string;
  // Enhanced job description fields
  team?: string; // e.g., "Claude Code Team", "Growth Team"
  level?: string; // e.g., "Senior", "Staff", "Lead"
  type?: 'full-time' | 'contract' | 'intern';
  compensation?: string; // e.g., "$180K-$250K + Equity"
  postedDate?: string; // e.g., "2025-01"
  aboutRole?: string; // Brief description of what you'll do
  responsibilities?: string[]; // Key responsibilities
  requirements?: string[]; // Required qualifications (keeping for backward compat)
  preferred?: string[]; // Nice-to-have qualifications
  teamInfo?: string; // About the team you'll join
  whyInteresting?: string; // Why this role is interesting for designers
}

export interface CultureInsight {
  source: 'blind' | 'glassdoor' | 'linkedin' | 'twitter' | 'threads' | 'levels.fyi' | 'careers' | 'inc.com' | 'ycombinator' | 'techcrunch';
  sentiment: 'positive' | 'neutral' | 'negative';
  rating?: number; // e.g., 4.2 out of 5
  content: string;
  url?: string;
}

export interface Company {
  id: string;
  name: string;
  description: string;
  website: string;

  // Visual Assets (automatically collected)
  ogImage?: string;      // OpenGraph image URL (from Microlink API)
  screenshot?: string;   // Screenshot URL (fallback if no OG image)

  // Location
  headquarters: string; // e.g., "San Francisco, CA"
  remote?: 'Yes' | 'Hybrid' | 'No' | 'Unknown';

  // Multi-dimensional Tags
  aiTypes: AIType[];      // 1-3개, 주요 유형 먼저
  markets: Market[];      // 1-3개
  industries: Industry[]; // 1-2개

  // Business
  stage: string;
  valuation?: string;
  totalFunding?: string;
  fundingHistory?: FundingRound[]; // All funding rounds with dates
  revenue?: string;
  growth?: string;
  runway?: string;
  customers?: string;

  // Growth & Potential
  growthMetrics?: {
    // Current growth trajectory
    stage: 'hypergrowth' | 'high-growth' | 'early-growth' | 'mature-growth' | 'steady' | 'plateau' | 'declining' | 'unknown';
    revenueGrowth?: string; // "3x YoY ($50M → $150M)" or "Unknown"
    userGrowth?: string; // "10M → 50M users (5x in 1 year)" or "Unknown"
    signals: string[]; // ["Hiring 200+ this year", "Expanding to EU/APAC", "Series D at 3x valuation"]

    // Market potential
    tam: string; // "$100B market (AI coding tools)"
    marketShare?: string; // "0.5% of TAM = 200x upside potential"
    ceiling: string; // "Early innings: Replacing all legacy dev tools" or "Approaching saturation"
    tailwinds: string[]; // ["AI adoption accelerating", "Developer productivity = must-have"]
    headwinds: string[]; // ["GitHub Copilot competition", "Commoditization risk"]

    // Competitive moat
    moatType?: 'network-effects' | 'data-flywheel' | 'switching-costs' | 'brand' | 'technology' | 'platform-ecosystem' | 'vertical-specialization' | 'none';
    moatStrength?: string; // "Strong: 10M+ users generate training data"
  };

  // Competition
  competitors: {
    name: string;
    description: string;
    whyTheyWin?: string;
  }[];
  marketPosition?: string;
  moat: string[];
  vsGiants?: string; // How they differentiate vs Google/OpenAI/Anthropic

  // AI-Native Level
  aiNativeLevel: 'A' | 'B' | 'C' | 'D';
  aiNativeLevelDescription: string;
  aiDesignChallenges: string[];

  // Founders & Vision
  founders: {
    name: string;
    role: string;
    background: string;
  }[];
  whyBuilding: string;
  beliefs: string[];
  designPhilosophy?: string;
  greenFlags: string[];
  redFlags: string[];

  // Design Opportunity
  designTeam: {
    cpo?: string;
    designHead?: string;
    teamSize?: string;
    notableMembers?: { name: string; role: string }[];
  };
  designWorkType: DesignWorkType;
  productStage: '0→1' | '1→10' | '10→100';

  // Product & User Context
  targetAudiences?: {
    primary: string; // Primary target user (e.g., "Enterprise sales teams", "Clinical doctors")
    secondary?: string; // Potential expanded target (e.g., "SMB sales teams", "Nurses and medical staff")
  };
  userProblems?: string[]; // Core problems being solved for customers (3-5 items)

  // Designer Links
  designerLinks: DesignerLink[];

  // Open Roles
  openRoles: OpenRole[];

  // Media Assets
  media?: {
    ogImage?: string; // Absolute URL or public path (e.g., "/og/anthropic.png")
    ogImageSource?: string; // Source page URL where OG image was found
    screenshot?: string; // Product UI screenshot (absolute URL or public path)
    screenshotSource?: string; // Source page URL where screenshot was captured
  };

  // Culture Insights (Blind, Glassdoor, etc.)
  cultureInsights?: CultureInsight[];

  // My Tracking
  tracking: {
    status: 'watching' | 'interested' | 'researching' | 'applied' | 'rejected' | 'dead';
    fitScore: number; // 1-10
    whyJoin: string[];
    whyNot: string[];
    nextActions: string[];
    notes?: string;
  };

  // Meta
  lastUpdated: string; // ISO format: "2025-01-25T14:30:00" for minute precision
  sources: { title: string; url: string }[];
}
