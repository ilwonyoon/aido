import React from 'react';
import NextLink from 'next/link';

export interface LinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  /** Force external link behavior (auto-detected if href starts with http) */
  external?: boolean;
  /** Hide the external icon */
  hideExternalIcon?: boolean;
}

/**
 * Link component with automatic external link detection
 *
 * - Internal links: Uses Next.js Link, accent-light color
 * - External links: Opens in new tab, shows ↗ icon
 *
 * Usage:
 * <Link href="/about">Internal</Link>
 * <Link href="https://example.com">External (auto-detected)</Link>
 * <Link href="/api/download" external>Force external</Link>
 */
export function Link({
  href,
  children,
  className = '',
  external,
  hideExternalIcon = false,
}: LinkProps) {
  const isExternal = external ?? (href.startsWith('http://') || href.startsWith('https://'));

  const baseClassName = `text-[var(--color-interactive-link)] hover:underline transition-colors ${className}`.trim();

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={baseClassName}
      >
        {children}
        {!hideExternalIcon && <span className="ml-0.5">↗</span>}
      </a>
    );
  }

  return (
    <NextLink href={href} className={baseClassName}>
      {children}
    </NextLink>
  );
}

/**
 * Back link for navigation (e.g., "← Back to companies")
 */
export interface BackLinkProps {
  href: string;
  children?: React.ReactNode;
  className?: string;
}

export function BackLink({ href, children = 'Back', className = '' }: BackLinkProps) {
  return (
    <NextLink
      href={href}
      className={`text-caption text-[var(--color-fg-muted)] hover:text-[var(--color-fg-default)] transition-colors ${className}`.trim()}
    >
      ← {children}
    </NextLink>
  );
}
