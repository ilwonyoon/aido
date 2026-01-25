import React from 'react';
import Link from 'next/link';

export interface CardProps {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
}

export function Card({ className = '', children, onClick, href }: CardProps) {
  const baseClass = `card ${className}`.trim();

  if (href) {
    return (
      <Link href={href} className={baseClass} onClick={onClick}>
        {children}
      </Link>
    );
  }

  if (onClick) {
    return (
      <div className={baseClass} onClick={onClick} role="button" tabIndex={0}>
        {children}
      </div>
    );
  }

  return <div className={baseClass}>{children}</div>;
}
