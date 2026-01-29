export interface Article {
  // Core metadata
  slug: string; // URL-friendly identifier (e.g., "top-10-fastest-growing-ai-companies")
  title: string;
  excerpt: string; // 150-200 chars for list view
  publishedDate: string; // ISO format "2026-01-28"
  updatedDate?: string; // ISO format for updates

  // Author info
  author: {
    name: string;
    role?: string;
  };

  // SEO & Social
  seo: {
    metaDescription: string;
    keywords: string[];
    ogImage?: string; // Path to Open Graph image
  };

  // Content
  content: string; // Markdown content

  // Data links
  companyIds?: string[]; // Referenced company IDs for auto-linking

  // Categorization
  tags: string[];
  category: 'analysis' | 'insights' | 'trends' | 'guides';

  // Featured status
  featured?: boolean;

  // Reading time (auto-calculated)
  readingTimeMinutes?: number;
}
