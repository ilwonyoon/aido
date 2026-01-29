'use client';

import { useState } from 'react';
import Image from 'next/image';

interface CompanyOGImageProps {
  companyId: string;
  companyName: string;
}

export function CompanyOGImage({ companyId, companyName }: CompanyOGImageProps) {
  const [imageError, setImageError] = useState(false);
  const [useScreenshot, setUseScreenshot] = useState(false);

  // Try OG image first, fallback to screenshot
  const imagePath = imageError || useScreenshot
    ? `/og-images/${companyId}-screenshot.webp`
    : `/og-images/${companyId}-og.webp`;

  const handleError = () => {
    if (!useScreenshot) {
      // Try screenshot instead
      setUseScreenshot(true);
    } else {
      // Both failed, hide image
      setImageError(true);
    }
  };

  if (imageError && useScreenshot) {
    // No image available
    return null;
  }

  return (
    <div
      className="relative w-full bg-[var(--card)] overflow-hidden -mx-4 sm:-mx-6 -mt-4 sm:-mt-6"
      style={{ aspectRatio: '16 / 9' }}
    >
      <Image
        src={imagePath}
        alt={`${companyName} preview`}
        fill
        className="object-cover"
        onError={handleError}
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
      />
      {/* Gradient overlay for better text visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />
    </div>
  );
}
