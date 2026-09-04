'use client';

import ImageReveal from '@/components/motion/ImageReveal';

interface ProjectImageProps {
  src?: string;
  alt: string;
  caption?: string;
  layout?: 'full' | 'contained' | 'split-left' | 'split-right';
}

export default function ProjectImage({ 
  src,
  alt, 
  caption,
  layout = 'contained' 
}: ProjectImageProps) {
  const layoutClasses = {
    full: 'w-full',
    contained: 'max-w-5xl mx-auto',
    'split-left': 'w-full lg:w-1/2',
    'split-right': 'w-full lg:w-1/2 lg:ml-auto',
  };

  return (
    <ImageReveal>
      <figure className={layoutClasses[layout]}>
        <div className="relative aspect-[4/3] bg-foreground/5 overflow-hidden">
          {src ? (
            <img 
              src={src} 
              alt={alt}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-muted">
              <span className="text-metadata uppercase tracking-wider">
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
