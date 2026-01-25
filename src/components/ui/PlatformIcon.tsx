import React from 'react';

export interface PlatformIconProps {
  platform: string;
}

export function PlatformIcon({ platform }: PlatformIconProps) {
  const icons: Record<string, string> = {
    twitter: '𝕏',
    threads: '@',
    substack: '📝',
    blog: '📄',
    linkedin: 'in',
    podcast: '🎙️',
  };
  
  return <span className="text-xs">{icons[platform] || '🔗'}</span>;
}
