'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import ImageReveal from '@/components/motion/ImageReveal';
import ProjectMetadata from './ProjectMetadata';
import type { Project } from '@/lib/projects';

export type ProjectPreviewProject = Pick<
  Project,
  'title' | 'slug' | 'industry' | 'year' | 'description' | 'assets'
>;

type ImageStatus = 'loading' | 'loaded' | 'error';

interface ProjectPreviewProps {
  project: ProjectPreviewProject;
  index: number;
}

interface PreviewImageProps {
  project: ProjectPreviewProject;
  priority: boolean;
}

function PreviewImage({ project, priority }: PreviewImageProps) {
  const imageRef = useRef<HTMLImageElement>(null);
  const [status, setStatus] = useState<ImageStatus>('loading');
  const previewSrc = project.assets.hero;

  useEffect(() => {
    setStatus('loading');

    const image = imageRef.current;
    if (image?.complete) {
      setStatus(image.naturalWidth > 0 ? 'loaded' : 'error');
    }
  }, [previewSrc]);

  const handleError = () => {
    setStatus('error');

    if (process.env.NODE_ENV !== 'production') {
      console.error(`Failed to load ${project.title} preview image: ${previewSrc}`);
    }
  };

  return (
    <div
      className="relative aspect-[4/3] overflow-hidden bg-foreground/5"
      data-preview-frame
      data-image-status={status}
      aria-busy={status === 'loading'}
    >
      {status !== 'error' ? (
        <img
          ref={imageRef}
          src={previewSrc}
          alt={`${project.title} project preview`}
          className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-[1.02]"
          loading={priority ? 'eager' : 'lazy'}
          fetchPriority={priority ? 'high' : 'auto'}
          decoding="async"
          onLoad={() => setStatus('loaded')}
          onError={(event) => {
            event.currentTarget.hidden = true;
            handleError();
          }}
          data-preview-image
        />
      ) : (
        <div
          className="absolute inset-0 flex items-center justify-center bg-foreground/[0.03] px-6 text-center text-muted"
          role="img"
          aria-label={`${project.title} preview unavailable`}
        >
          <span className="text-metadata uppercase tracking-wider">Preview unavailable</span>
        </div>
      )}
      <div className="pointer-events-none absolute inset-0 z-10 bg-foreground/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </div>
  );
}

export default function ProjectPreview({ project, index }: ProjectPreviewProps) {
  const isEven = index % 2 === 0;
  const imageOrder = isEven ? '' : 'lg:order-2';
  const contentOrder = isEven ? '' : 'lg:order-1';

  return (
    <Link
      href={`/work/${project.slug}`}
      className="group block"
      data-project-preview={project.slug}
    >
      <article className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
        <div className={`lg:col-span-7 ${imageOrder}`}>
          <ImageReveal delay={Math.min(index * 0.08, 0.24)}>
            <PreviewImage project={project} priority={index === 0} />
          </ImageReveal>
        </div>

        <div className={`flex flex-col justify-center lg:col-span-5 ${contentOrder}`}>
          <ProjectMetadata industry={project.industry} year={project.year} />

          <h3 className="mt-6 mb-4 text-h1 font-medium transition-opacity duration-300 group-hover:opacity-60">
            {project.title}
          </h3>

          <p className="text-body text-muted">{project.description}</p>
        </div>
      </article>
    </Link>
  );
}
