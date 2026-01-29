'use client';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

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
        // Customize heading styles with generous spacing for blog readability
        h1: ({ node, ...props }) => (
          <h1 className="!text-4xl !font-semibold !mb-8 !mt-24 first:!mt-0" {...props} />
        ),
        h2: ({ node, ...props }) => (
          <h2 className="!text-3xl !font-semibold !mb-7 !mt-20 first:!mt-0 !border-t !border-[var(--border)] !pt-12 first:!border-0 first:!pt-0" {...props} />
        ),
        h3: ({ node, ...props }) => (
          <h3 className="!text-2xl !font-semibold !mb-5 !mt-14" {...props} />
        ),
        h4: ({ node, ...props }) => (
          <h4 className="!text-xl !font-semibold !mb-4 !mt-10" {...props} />
        ),

        // Links - let CSS handle styling
        a: ({ node, ...props }) => <a {...props} />,

        // Lists with proper styling - FORCE BULLETS
        ul: ({ node, ...props }) => (
          <ul
            className="!list-disc !list-outside !my-3"
            style={{
              listStyleType: 'disc',
              listStylePosition: 'outside',
              paddingLeft: '1.25rem',
              marginTop: '0.75rem',
              marginBottom: '1rem'
            }}
            {...props}
          />
        ),
        ol: ({ node, ...props }) => (
          <ol
            className="!list-decimal !list-outside !my-3"
            style={{
              listStyleType: 'decimal',
              listStylePosition: 'outside',
              paddingLeft: '1.25rem',
              marginTop: '0.75rem',
              marginBottom: '1rem'
            }}
            {...props}
          />
        ),
        li: ({ node, ...props }) => (
          <li
            className="!mb-2 leading-relaxed"
            style={{
              display: 'list-item',
              marginBottom: '0.5rem',
              paddingLeft: '0.25rem'
            }}
            {...props}
          />
        ),

        // Paragraph with better spacing
        p: ({ node, ...props }) => <p className="mb-4 leading-relaxed" {...props} />,

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
