'use client';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import Link from 'next/link';

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

export function MarkdownRenderer({
  content,
  className = '',
}: MarkdownRendererProps) {
  return (
    <div className={`markdown-content ${className}`}>
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
      components={{
        // Customize heading styles
        h1: ({ node, ...props }) => (
          <h1 className="text-3xl font-semibold mb-4 mt-8" {...props} />
        ),
        h2: ({ node, ...props }) => (
          <h2 className="text-2xl font-semibold mb-3 mt-6" {...props} />
        ),
        h3: ({ node, ...props }) => (
          <h3 className="text-xl font-medium mb-2 mt-4" {...props} />
        ),
        h4: ({ node, ...props }) => (
          <h4 className="text-lg font-medium mb-2 mt-3" {...props} />
        ),

        // Customize link styles
        a: ({ node, href, ...props }) => {
          // Internal links (starting with /)
          if (href?.startsWith('/')) {
            return (
              <Link
                href={href}
                className="text-[var(--accent-light)] underline hover:text-[var(--accent)]"
                {...props}
              />
            );
          }
          // External links
          return (
            <a
              href={href}
              className="text-[var(--accent-light)] underline hover:text-[var(--accent)]"
              target="_blank"
              rel="noopener noreferrer"
              {...props}
            />
          );
        },

        // Customize list styles
        ul: ({ node, ...props }) => (
          <ul className="space-y-2 my-4" {...props} />
        ),
        ol: ({ node, ...props }) => (
          <ol className="space-y-2 my-4 list-decimal list-inside" {...props} />
        ),
        li: ({ node, ...props }) => (
          <li className="text-[var(--foreground)] ml-5 list-disc" {...props} />
        ),

        // Customize paragraph
        p: ({ node, ...props }) => (
          <p className="mb-4 leading-relaxed text-[var(--foreground)]" {...props} />
        ),

        // Customize blockquote
        blockquote: ({ node, ...props }) => (
          <blockquote
            className="pl-4 border-l-4 border-[var(--accent)] text-[var(--muted)] my-4"
            {...props}
          />
        ),

        // Customize code blocks
        code: ({ node, className: codeClassName, ...props }) => {
          const inline = !codeClassName;
          if (inline) {
            return (
              <code
                className="font-mono text-sm text-[var(--accent)] bg-[var(--card)] px-1.5 py-0.5 rounded"
                {...props}
              />
            );
          }
          return (
            <code
              className="block font-mono text-sm bg-[var(--card)] p-4 rounded my-4 overflow-x-auto"
              {...props}
            />
          );
        },

        // Customize tables
        table: ({ node, ...props }) => (
          <div className="overflow-x-auto my-4">
            <table className="w-full text-sm" {...props} />
          </div>
        ),
        thead: ({ node, ...props }) => (
          <thead className="border-b border-[var(--border)]" {...props} />
        ),
        th: ({ node, ...props }) => (
          <th className="text-left py-3 font-medium" {...props} />
        ),
        tbody: ({ node, ...props }) => (
          <tbody className="text-[var(--muted)]" {...props} />
        ),
        tr: ({ node, ...props }) => (
          <tr className="border-b border-[var(--border)]" {...props} />
        ),
        td: ({ node, ...props }) => <td className="py-3" {...props} />,

        // Customize horizontal rule
        hr: ({ node, ...props }) => (
          <hr className="border-[var(--border)] my-8" {...props} />
        ),

        // Customize strong/bold
        strong: ({ node, ...props }) => (
          <strong className="font-semibold text-[var(--foreground)]" {...props} />
        ),

        // Customize emphasis/italic
        em: ({ node, ...props }) => (
          <em className="italic text-[var(--foreground)]" {...props} />
        ),
      }}
    >
      {content}
    </ReactMarkdown>
    </div>
  );
}
