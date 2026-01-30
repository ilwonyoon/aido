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
        // Headings — styled by .article-content CSS cascade
        h1: ({ node, ...props }) => <h1 {...props} />,
        h2: ({ node, ...props }) => <h2 {...props} />,
        h3: ({ node, ...props }) => <h3 {...props} />,
        h4: ({ node, ...props }) => <h4 {...props} />,

        // Links - let CSS handle styling
        a: ({ node, ...props }) => <a {...props} />,

        // Lists
        ul: ({ node, ...props }) => <ul {...props} />,
        ol: ({ node, ...props }) => <ol {...props} />,
        li: ({ node, ...props }) => <li {...props} />,

        // Paragraph
        p: ({ node, ...props }) => <p {...props} />,

        // Blockquote
        blockquote: ({ node, ...props }) => <blockquote {...props} />,

        // Code
        code: ({ node, ...props }) => <code {...props} />,
        pre: ({ node, ...props }) => <pre {...props} />,

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
