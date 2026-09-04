'use client';

import { useEffect, useRef, useState } from 'react';
import ImageReveal from '@/components/motion/ImageReveal';

type ImageStatus = 'loading' | 'loaded' | 'error';

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
  fit = 'cover',
}: ProjectImageProps) {
  const imageRef = useRef<HTMLImageElement>(null);
  const [status, setStatus] = useState<ImageStatus>(src ? 'loading' : 'error');

  useEffect(() => {
    if (!src) {
      setStatus('error');
      return;
    }

    setStatus('loading');

    const image = imageRef.current;
    if (image?.complete) {
      setStatus(image.naturalWidth > 0 ? 'loaded' : 'error');
    }
  }, [src]);

  const layoutClasses = {
    full: 'w-full',
    contained: 'mx-auto max-w-5xl',
    'split-left': 'w-full lg:w-1/2',
    'split-right': 'w-full lg:ml-auto lg:w-1/2',
  };

  const fitClasses = fit === 'contain' ? 'object-contain p-8 md:p-12' : 'object-cover';

  const handleError = () => {
    setStatus('error');

    if (process.env.NODE_ENV !== 'production') {
      console.error(`Failed to load project image: ${src}`);
    }
  };

  return (
    <ImageReveal>
      <figure className={layoutClasses[layout]}>
        <div
          className="relative aspect-[4/3] overflow-hidden bg-foreground/5"
          data-project-image
          data-image-status={status}
          aria-busy={status === 'loading'}
        >
          {src && status !== 'error' ? (
            <img
              ref={imageRef}
              src={src}
              alt={alt}
              className={`h-full w-full ${fitClasses}`}
              loading="lazy"
              decoding="async"
              onLoad={() => setStatus('loaded')}
              onError={(event) => {
                event.currentTarget.hidden = true;
                handleError();
              }}
            />
          ) : (
            <div
              className="absolute inset-0 flex items-center justify-center bg-foreground/[0.03] px-6 text-center text-muted"
              role="img"
              aria-label={`${alt} unavailable`}
            >
              <span className="text-metadata uppercase tracking-wider">Visual unavailable</span>
            </div>
          )}
        </div>
        {caption && (
          <figcaption className="mt-4 text-metadata uppercase tracking-wider text-muted">
            {caption}
          </figcaption>
        )}
      </figure>
    </ImageReveal>
  );
}
