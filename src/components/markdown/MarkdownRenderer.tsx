'use client';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { getCompanyDomain } from '@/utils/companyDomains';

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

export function MarkdownRenderer({
  content,
  className = '',
}: MarkdownRendererProps) {
  return (
    <div className={className}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
        // Headings — styled by .article-content CSS cascade
        h1: ({ node, ...props }) => <h1 {...props} />,
        h2: ({ node, ...props }) => <h2 {...props} />,
        h3: ({ node, ...props }) => <h3 {...props} />,
        h4: ({ node, ...props }) => <h4 {...props} />,

        // Links - detect company links and render with favicon
        a: ({ node, href, children, ...props }) => {
          // Check if this is a company link
          if (href && href.startsWith('/company/')) {
            const companyId = href.replace('/company/', '');
            const domain = getCompanyDomain(companyId);

            if (domain) {
              return (
                <a
                  href={href}
                  className="inline-flex items-center gap-1.5 text-[var(--accent-light)] hover:underline align-baseline"
                  {...props}
                >
                  <img
                    src={`https://www.google.com/s2/favicons?domain=${domain}&sz=16`}
                    alt=""
                    width={16}
                    height={16}
                    className="inline-block flex-shrink-0"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  {children}
                </a>
              );
            }
          }

          // Regular link
          return <a href={href} {...props}>{children}</a>;
        },

        // Lists - Proximity Principle: CLOSE to heading, FAR from next section
        ul: ({ node, ...props }) => (
          <ul
            style={{
              listStyleType: 'disc',
              listStylePosition: 'outside',
              paddingLeft: '1.25rem',
              marginTop: '0.5rem',  /* CLOSE to heading */
              marginBottom: '1.5rem' /* FAR from next section */
            }}
            {...props}
          />
        ),
        ol: ({ node, ...props }) => (
          <ol
            style={{
              listStyleType: 'decimal',
              listStylePosition: 'outside',
              paddingLeft: '1.25rem',
              marginTop: '0.5rem',
              marginBottom: '1.5rem'
            }}
            {...props}
          />
        ),
        li: ({ node, ...props }) => (
          <li
            style={{
              display: 'list-item',
              marginBottom: '0.25rem', /* Tight grouping */
              paddingLeft: '0.25rem',
              lineHeight: '1.6'
            }}
            {...props}
          />
        ),

        // Paragraph with optimal spacing
        p: ({ node, ...props }) => (
          <p
            style={{
              marginBottom: '1rem',
              lineHeight: '1.6'
            }}
            {...props}
          />
        ),

        // Blockquote with visual styling
        blockquote: ({ node, ...props }) => (
          <blockquote className="border-l-4 border-[var(--accent)] pl-4 italic my-6 text-[var(--muted)]" {...props} />
        ),

        // Code with inline/block handling
        code: ({ node, className, ...props }) => {
          const isInline = !className;
          return isInline ? (
            <code className="bg-[var(--card)] px-1.5 py-0.5 rounded text-sm font-mono" {...props} />
          ) : (
            <code {...props} />
          );
        },
        pre: ({ node, ...props }) => (
          <pre className="bg-[var(--card)] border border-[var(--border)] rounded-lg p-4 overflow-x-auto my-6 text-sm" {...props} />
        ),

        // Tables
        table: ({ node, ...props }) => <table {...props} />,
        thead: ({ node, ...props }) => <thead {...props} />,
        tbody: ({ node, ...props }) => <tbody {...props} />,
        tr: ({ node, ...props }) => <tr {...props} />,
        th: ({ node, ...props }) => <th {...props} />,
        td: ({ node, ...props }) => <td {...props} />,

        // HR
        hr: ({ node, ...props }) => <hr {...props} />,

        // Strong/Em
        strong: ({ node, ...props }) => <strong {...props} />,
        em: ({ node, ...props }) => <em {...props} />,
      }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
