import React from 'react';

interface CitationChipProps {
  href: string;
  publisher: string;
}

/**
 * Inline source citation chip.
 * Used in articles to link to source material.
 * Renders as a subtle pill with publisher name + arrow.
 *
 * Usage in markdown: [↗ Publisher](url)
 * MarkdownRenderer auto-detects this pattern and renders CitationChip.
 */
export function CitationChip({ href, publisher }: CitationChipProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="citation-chip"
    >
      {publisher} <span aria-hidden="true">↗</span>
    </a>
  );
}
