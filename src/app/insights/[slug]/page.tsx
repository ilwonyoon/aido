import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllArticles, getArticleBySlug, getRelatedArticles } from '@/data/articles';
import { MarkdownRenderer } from '@/components/markdown/MarkdownRenderer';
import Link from 'next/link';

export function generateStaticParams() {
  const articles = getAllArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: 'Article Not Found',
      description: 'The requested article could not be found.',
    };
  }

  return {
    title: `${article.title} | AIDO Insights`,
    description: article.seo.metaDescription,
    keywords: article.seo.keywords,
    authors: [{ name: article.author.name }],
    openGraph: {
      title: `${article.title} | AIDO Insights`,
      description: article.excerpt,
      type: 'article',
      publishedTime: article.publishedDate,
      modifiedTime: article.updatedDate || article.publishedDate,
      authors: [article.author.name],
      url: `https://aido-d2cc0.web.app/insights/${article.slug}`,
      images: article.seo.ogImage
        ? [
            {
              url: article.seo.ogImage,
              width: 1200,
              height: 630,
              alt: article.title,
            },
          ]
        : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.excerpt,
      images: article.seo.ogImage ? [article.seo.ogImage] : undefined,
    },
    alternates: {
      canonical: `https://aido-d2cc0.web.app/insights/${article.slug}`,
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = getRelatedArticles(article.slug, article.tags);

  return (
    <article className="max-w-3xl mx-auto">
      {/* Article Schema (JSON-LD) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: article.title,
            description: article.excerpt,
            image: article.seo.ogImage,
            author: {
              '@type': 'Person',
              name: article.author.name,
            },
            datePublished: article.publishedDate,
            dateModified: article.updatedDate || article.publishedDate,
            publisher: {
              '@type': 'Organization',
              name: 'AIDO',
              url: 'https://aido-d2cc0.web.app',
            },
          }),
        }}
      />

      {/* Article Header */}
      <header className="mb-8">
        {/* Category Badge */}
        <div className="flex items-center gap-2 mb-4">
          <span className="badge badge-accent">
            {article.category.charAt(0).toUpperCase() +
              article.category.slice(1)}
          </span>
          {article.featured && (
            <span className="badge badge-success">Featured</span>
          )}
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-semibold mb-4">
          {article.title}
        </h1>

        {/* Excerpt/Subtitle */}
        <p className="text-lg text-[var(--muted)] mb-4">{article.excerpt}</p>

        {/* Meta info */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--muted)]">
          <div className="flex items-center gap-2">
            <span>{article.author.name}</span>
            {article.author.role && (
              <>
                <span>•</span>
                <span>{article.author.role}</span>
              </>
            )}
          </div>
          <span>•</span>
          <span>
            {new Date(article.publishedDate).toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric',
            })}
          </span>
          {article.readingTimeMinutes && (
            <>
              <span>•</span>
              <span>{article.readingTimeMinutes} min read</span>
            </>
          )}
        </div>

        {/* Tags */}
        {article.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs text-[var(--muted)] hover:text-[var(--accent-light)]"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </header>

      {/* Article Content */}
      <div className="article-content mb-12">
        <MarkdownRenderer content={article.content} />
      </div>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <aside className="mt-12 pt-8 border-t border-[var(--border)]">
          <h2 className="text-xl font-semibold mb-4">Related Articles</h2>
          <div className="space-y-4">
            {relatedArticles.map((related) => (
              <Link
                key={related.slug}
                href={`/insights/${related.slug}`}
                className="block card p-4 hover:border-[var(--muted)] transition-all"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="badge badge-accent text-xs">
                    {related.category.charAt(0).toUpperCase() +
                      related.category.slice(1)}
                  </span>
                </div>
                <h3 className="font-medium mb-1">{related.title}</h3>
                <p className="text-sm text-[var(--muted)] line-clamp-2">
                  {related.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </aside>
      )}

      {/* Back to Insights */}
      <div className="mt-8">
        <Link
          href="/insights"
          className="text-[var(--accent-light)] hover:underline text-sm"
        >
          ← Back to Insights
        </Link>
      </div>
    </article>
  );
}
