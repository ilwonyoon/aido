import React from 'react';

export type BadgeVariant = 'default' | 'accent' | 'success' | 'warning';

export interface BadgeProps {
  variant?: BadgeVariant;
  children: React.ReactNode;
  className?: string;
}

export function Badge({ variant = 'default', children, className = '' }: BadgeProps) {
  const variantClass = variant !== 'default' ? `badge-${variant}` : '';
  return (
    <span className={`badge ${variantClass} ${className}`.trim()}>
      {children}
    </span>
  );
}

export interface AiLevelBadgeProps {
  level: number;
}

export function AiLevelBadge({ level }: AiLevelBadgeProps) {
  const labels = { 1: 'AI Feature', 2: 'AI Major', 3: 'AI Core', 4: 'AI Native' };
  const variants: Record<number, BadgeVariant> = { 1: 'default', 2: 'default', 3: 'accent', 4: 'success' };
  
  return (
    <Badge variant={variants[level as keyof typeof variants]}>
      L{level}: {labels[level as keyof typeof labels]}
    </Badge>
  );
}

export interface LevelBadgeProps {
  level: 'high' | 'medium' | 'low';
}

export function LevelBadge({ level }: LevelBadgeProps) {
  const variants: Record<'high' | 'medium' | 'low', BadgeVariant> = {
    high: 'success',
    medium: 'accent',
    low: 'default',
  };
  const labels = {
    high: 'High',
    medium: 'Medium',
    low: 'Low',
  };
  
  return <Badge variant={variants[level]}>{labels[level]}</Badge>;
}
