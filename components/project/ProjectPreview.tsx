'use client';

import Link from 'next/link';
import Image from 'next/image';
import ProjectMetadata from './ProjectMetadata';
import ImageReveal from '@/components/motion/ImageReveal';

interface Project {
  title: string;
  slug: string;
  industry: string;
  year: string;
  description: string;
  imageUrl: string;
}

interface ProjectPreviewProps {
  project: Project;
  index: number;
}

export default function ProjectPreview({ project, index }: ProjectPreviewProps) {
  // Alternate layouts for visual rhythm
  const isEven = index % 2 === 0;

  if (isEven) {
    // Layout A: Large image left, content right
    return (
      <Link 
        href={`/work/${project.slug}`}
        className="block group"
      >
        <article className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-7">
            <ImageReveal delay={index * 0.1}>
              <div className="relative aspect-[4/3] bg-foreground/5 overflow-hidden">
                <div className="absolute inset-0 bg-foreground/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {/* Image placeholder - will be replaced with actual images */}
                <div className="absolute inset-0 flex items-center justify-center text-muted transform group-hover:scale-105 transition-transform duration-700">
                  <span className="text-metadata uppercase tracking-wider">
                    Project imagery
                  </span>
                </div>
              </div>
            </ImageReveal>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-center">
            <ProjectMetadata 
              industry={project.industry}
              year={project.year}
            />
            
            <h3 className="text-h1 font-medium mt-6 mb-4 group-hover:opacity-60 transition-opacity duration-300">
              {project.title}
            </h3>
            
            <p className="text-body text-muted">
              {project.description}
            </p>
          </div>
        </article>
      </Link>
    );
  } else {
    // Layout B: Content left, large image right
    return (
      <Link 
        href={`/work/${project.slug}`}
        className="block group"
      >
        <article className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-5 flex flex-col justify-center order-2 lg:order-1">
            <ProjectMetadata 
              industry={project.industry}
              year={project.year}
            />
            
            <h3 className="text-h1 font-medium mt-6 mb-4 group-hover:opacity-60 transition-opacity duration-300">
              {project.title}
            </h3>
            
            <p className="text-body text-muted">
              {project.description}
            </p>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2">
            <ImageReveal delay={index * 0.1}>
              <div className="relative aspect-[4/3] bg-foreground/5 overflow-hidden">
                <div className="absolute inset-0 bg-foreground/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {/* Image placeholder - will be replaced with actual images */}
                <div className="absolute inset-0 flex items-center justify-center text-muted transform group-hover:scale-105 transition-transform duration-700">
                  <span className="text-metadata uppercase tracking-wider">
                    Project imagery
                  </span>
                </div>
              </div>
            </ImageReveal>
          </div>
        </article>
      </Link>
    );
  }
}
