'use client';

import { useState } from 'react';
import ImageReveal from '@/components/motion/ImageReveal';

interface ProjectImageProps {
  src?: string;
  alt: string;
  caption?: string;
  layout?: 'full' | 'contained' | 'split-left' | 'split-right';
  fit?: 'cover' | 'contain';
}

export default function ProjectImage({ 
  src,
  alt, 
  caption,
  layout = 'contained',
  fit = 'cover'
}: ProjectImageProps) {
  const [hasError, setHasError] = useState(false);

  const layoutClasses = {
    full: 'w-full',
    contained: 'max-w-5xl mx-auto',
    'split-left': 'w-full lg:w-1/2',
    'split-right': 'w-full lg:w-1/2 lg:ml-auto',
  };

  const fitClasses = fit === 'contain' ? 'object-contain p-8 md:p-12' : 'object-cover';

  return (
    <ImageReveal>
      <figure className={layoutClasses[layout]}>
        <div className="relative aspect-[4/3] bg-foreground/5 overflow-hidden">
          {src && !hasError ? (
            <img 
              src={src} 
              alt={alt}
              className={`w-full h-full ${fitClasses} transition-opacity duration-500`}
              onError={() => setHasError(true)}
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-muted bg-foreground/[0.02]">
              <span className="text-metadata uppercase tracking-wider px-6 text-center">
                {alt}
              </span>
            </div>
          )}
        </div>
        {caption && (
          <figcaption className="mt-4 text-metadata text-muted uppercase tracking-wider">
            {caption}
          </figcaption>
        )}
      </figure>
    </ImageReveal>
  );
}
