'use client';

import Link from 'next/link';
import ProjectPreview from '@/components/project/ProjectPreview';
import TextReveal from '@/components/motion/TextReveal';
import { getAllProjects } from '@/lib/projects';

const projects = getAllProjects();

export default function SelectedWork() {
  return (
    <section className="px-container py-section">
      <TextReveal>
        <div className="mb-16">
          <h2 className="text-h2 font-medium mb-4">Selected Work</h2>
          <p className="text-body text-muted max-w-2xl">
            Creating identities and digital spaces for culture-led brands.
          </p>
        </div>
      </TextReveal>

      <div className="space-y-32">
        {projects.map((project, index) => (
          <ProjectPreview 
            key={project.slug} 
            project={project} 
            index={index}
          />
        ))}
      </div>

      <div className="mt-24 text-center">
        <Link 
          href="/work" 
          className="inline-block text-sm uppercase tracking-wider border-b border-foreground pb-1 hover:opacity-60 transition-opacity duration-300"
        >
          View all work
        </Link>
      </div>
    </section>
  );
}
