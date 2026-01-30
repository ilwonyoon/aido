import React, { JSX } from 'react';

/**
 * Typography variants matching design system tokens
 *
 * - caption: ~13px, metadata, timestamps, labels
 * - label: ~13px medium, form labels
 * - body: ~15px, default reading text
 * - body-strong: ~15px medium, emphasized body
 * - body-lg: 17px, company descriptions
 * - title: ~19px semibold, role titles, card headers
 * - headline: ~25px semibold, section headers
 * - display: ~25-32px semibold, page titles
 * - section-title: ~13px uppercase, section labels
 */
export type TextVariant =
  | 'caption'
  | 'label'
  | 'body'
  | 'body-strong'
  | 'body-lg'
  | 'title'
  | 'headline'
  | 'display'
  | 'section-title';

export type TextColor = 'default' | 'muted' | 'success' | 'warning' | 'error' | 'accent';

type ElementType = keyof JSX.IntrinsicElements;

export interface TextProps {
  variant?: TextVariant;
  color?: TextColor;
  as?: ElementType;
  children: React.ReactNode;
  className?: string;
}

const variantClasses: Record<TextVariant, string> = {
  caption: 'text-caption',
  label: 'text-label',
  body: 'text-body',
  'body-strong': 'text-body-strong',
  'body-lg': 'text-body-lg',
  title: 'text-title',
  headline: 'text-headline',
  display: 'text-display',
  'section-title': 'section-title',
};

const colorClasses: Record<TextColor, string> = {
  default: '',
  muted: 'text-[var(--muted)]',
  success: 'text-success',
  warning: 'text-warning',
  error: 'text-error',
  accent: 'text-[var(--accent-light)]',
};

// Default HTML elements for each variant
const defaultElements: Record<TextVariant, ElementType> = {
  caption: 'span',
  label: 'label',
  body: 'p',
  'body-strong': 'span',
  'body-lg': 'p',
  title: 'h3',
  headline: 'h2',
  display: 'h1',
  'section-title': 'h4',
};

/**
 * Text component for consistent typography
 *
 * Usage:
 * <Text variant="headline">Section Title</Text>
 * <Text variant="body" color="muted">Description text</Text>
 * <Text variant="caption" as="div">Metadata</Text>
 */
export function Text({
  variant = 'body',
  color = 'default',
  as,
  children,
  className = '',
}: TextProps) {
  const Component = as || defaultElements[variant];

  return (
    <Component
      className={`${variantClasses[variant]} ${colorClasses[color]} ${className}`.trim()}
    >
      {children}
    </Component>
  );
}

/**
 * Heading component - shorthand for Text with heading variants
 */
export interface HeadingProps {
  level?: 1 | 2 | 3;
  children: React.ReactNode;
  className?: string;
}

export function Heading({ level = 2, children, className = '' }: HeadingProps) {
  const variantMap: Record<1 | 2 | 3, TextVariant> = {
    1: 'display',
    2: 'headline',
    3: 'title',
  };

  const tagMap: Record<1 | 2 | 3, ElementType> = {
    1: 'h1',
    2: 'h2',
    3: 'h3',
  };

  return (
    <Text variant={variantMap[level]} as={tagMap[level]} className={className}>
      {children}
    </Text>
  );
}

/**
 * SectionTitle - uppercase label for sections
 *
 * Usage:
 * <SectionTitle>Business</SectionTitle>
 */
export function SectionTitle({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Text variant="section-title" className={className}>
      {children}
    </Text>
  );
}
