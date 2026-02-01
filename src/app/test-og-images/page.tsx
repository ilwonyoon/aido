'use client';

import Image from 'next/image';
import { useState } from 'react';

// Successfully downloaded OG images from scripts/og-downloaded-0-40.json
const successfulImages = [
  { companyId: 'abridge', name: 'Abridge' },
  { companyId: 'airops', name: 'Airops' },
  { companyId: 'alloy', name: 'Alloy' },
  { companyId: 'alphaxiv', name: 'alphaXiv' },
  { companyId: 'ambience-healthcare', name: 'Ambience Healthcare' },
  { companyId: 'anrok', name: 'Anrok' },
  { companyId: 'anthropic', name: 'Anthropic' },
  { companyId: 'anything-ai', name: 'Anything AI' },
  { companyId: 'arcade-dev', name: 'Arcade.dev' },
  { companyId: 'artie', name: 'Artie' },
  { companyId: 'assort-health', name: 'Assort Health' },
  { companyId: 'base44', name: 'Base44' },
  { companyId: 'baseten', name: 'Baseten' },
  { companyId: 'beautiful-ai', name: 'Beautiful.ai' },
  { companyId: 'blacksmith', name: 'Blacksmith' },
  { companyId: 'blossom', name: 'Blossom Health' },
  { companyId: 'brex', name: 'Brex' },
  { companyId: 'buildforever', name: 'BuildForever' },
  { companyId: 'casca', name: 'Casca' },
  { companyId: 'chai-discovery', name: 'Chai Discovery' },
  { companyId: 'character-ai', name: 'Character.AI' },
  { companyId: 'chroma', name: 'Chroma' },
  { companyId: 'clerk', name: 'Clerk' },
  { companyId: 'cocoon', name: 'Cocoon' },
  { companyId: 'codeium', name: 'Codeium (now Windsurf)' },
  { companyId: 'cogent-security', name: 'Cogent Security' },
  { companyId: 'cognition', name: 'Cognition' },
  { companyId: 'cohere', name: 'Cohere' },
  { companyId: 'collective', name: 'Collective' },
  { companyId: 'conductor', name: 'Conductor' },
  { companyId: 'console', name: 'Console' },
  { companyId: 'copy-ai', name: 'Copy.ai' },
];

export default function TestOGImagesPage() {
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set());

  const handleImageError = (companyId: string) => {
    setImageErrors(prev => new Set(prev).add(companyId));
  };

  const successCount = successfulImages.length - imageErrors.size;

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">OG Images Test Gallery</h1>
          <p className="text-[var(--muted)]">
            Testing {successfulImages.length} successfully downloaded OG images
          </p>
          <div className="mt-4 flex gap-4 text-sm">
            <span className="px-3 py-1 bg-green-500/10 text-green-500 rounded-full">
              ✓ Loaded: {successCount}
            </span>
            <span className="px-3 py-1 bg-red-500/10 text-red-500 rounded-full">
              ✗ Failed: {imageErrors.size}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {successfulImages.map(({ companyId, name }) => {
            const hasError = imageErrors.has(companyId);
            const imagePath = `/og-images/${companyId}-og.webp`;

            return (
              <div
                key={companyId}
                className="card p-4 space-y-3"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">{name}</h3>
                  {hasError ? (
                    <span className="text-xs px-2 py-1 bg-red-500/10 text-red-500 rounded">
                      Failed
                    </span>
                  ) : (
                    <span className="text-xs px-2 py-1 bg-green-500/10 text-green-500 rounded">
                      OK
                    </span>
                  )}
                </div>

                <div className="relative w-full bg-[var(--card)] rounded overflow-hidden"
                     style={{ aspectRatio: '16 / 9' }}>
                  {hasError ? (
                    <div className="absolute inset-0 flex items-center justify-center text-[var(--muted)] text-sm">
                      Image failed to load
                    </div>
                  ) : (
                    <Image
                      src={imagePath}
                      alt={`${name} OG image`}
                      fill
                      className="object-cover"
                      onError={() => handleImageError(companyId)}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      unoptimized
                    />
                  )}
                </div>

                <div className="text-xs text-[var(--muted)] font-mono">
                  {imagePath}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 p-6 card">
          <h2 className="text-xl font-semibold mb-4">Summary</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-[var(--muted)]">Total Images:</span>
              <span className="font-semibold">{successfulImages.length}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[var(--muted)]">Successfully Loaded:</span>
              <span className="font-semibold text-green-500">{successCount}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[var(--muted)]">Failed to Load:</span>
              <span className="font-semibold text-red-500">{imageErrors.size}</span>
            </div>
            <div className="flex justify-between pt-2 border-t border-[var(--border)]">
              <span className="text-[var(--muted)]">Success Rate:</span>
              <span className="font-semibold">
                {((successCount / successfulImages.length) * 100).toFixed(1)}%
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
