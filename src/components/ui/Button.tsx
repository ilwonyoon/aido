import React from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  /** Full width button */
  fullWidth?: boolean;
}

/**
 * Button component using design system tokens
 *
 * Variants:
 * - primary: Accent blue background, white text
 * - secondary: Card background with border
 * - ghost: Transparent, text only
 *
 * Sizes:
 * - sm: 32px height (--control-height-sm)
 * - md: 40px height (--control-height-md) - default
 * - lg: 48px height (--control-height-lg)
 */
export function Button({
  variant = 'primary',
  size = 'md',
  children,
  fullWidth = false,
  className = '',
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles = `
    inline-flex items-center justify-center
    rounded-lg font-medium
    transition-colors
    disabled:opacity-50 disabled:cursor-not-allowed
  `;

  const variantStyles: Record<ButtonVariant, string> = {
    primary: 'bg-[var(--accent)] text-white hover:bg-[var(--accent-light)]',
    secondary: 'bg-[var(--card)] border border-[var(--border)] hover:border-[var(--muted)]',
    ghost: 'hover:bg-[var(--card)]',
  };

  const sizeStyles: Record<ButtonSize, string> = {
    sm: 'h-[var(--control-height-sm)] px-3 text-caption',
    md: 'h-[var(--control-height-md)] px-4 text-body',
    lg: 'h-[var(--control-height-lg)] px-5 text-body',
  };

  const widthStyle = fullWidth ? 'w-full' : '';

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyle} ${className}`.trim()}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}

/**
 * Icon button (square, for icons only)
 */
export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize;
  children: React.ReactNode;
  /** Accessible label */
  label: string;
}

export function IconButton({
  size = 'md',
  children,
  label,
  className = '',
  ...props
}: IconButtonProps) {
  const sizeStyles: Record<ButtonSize, string> = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
  };

  return (
    <button
      className={`
        inline-flex items-center justify-center
        rounded-lg
        text-[var(--muted)] hover:text-[var(--foreground)]
        hover:bg-[var(--card)]
        transition-colors
        ${sizeStyles[size]}
        ${className}
      `.trim()}
      aria-label={label}
      title={label}
      {...props}
    >
      {children}
    </button>
  );
}
