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
