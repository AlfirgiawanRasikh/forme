import type { Metadata } from 'next';
import Link from 'next/link';
import ProjectMetadata from '@/components/project/ProjectMetadata';
import { getAllProjects } from '@/lib/projects';

export const metadata: Metadata = {
  title: 'Work',
  description: 'Selected projects from FORME, independent digital studio.',
};

const projects = getAllProjects();

export default function WorkPage() {
  return (
    <div className="min-h-screen pt-32 pb-section">
      <div className="px-container">
        <div className="max-w-7xl">
          <h1 className="text-display font-medium mb-8">Work</h1>
          <p className="text-h3 text-muted max-w-3xl mb-24">
            Selected projects across fashion, culture, hospitality, and objects.
          </p>

          <div className="space-y-16">
            {projects.map((project) => (
              <Link
                key={project.slug}
                href={`/work/${project.slug}`}
                className="block group border-t border-foreground/10 pt-8 hover:opacity-60 transition-opacity duration-300"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                  <div className="md:col-span-3">
                    <ProjectMetadata 
                      industry={project.industry}
                      year={project.year}
                    />
                  </div>
                  
                  <div className="md:col-span-6">
                    <h2 className="text-h2 font-medium mb-4">{project.title}</h2>
                    <p className="text-body text-muted">{project.description}</p>
                  </div>

                  <div className="md:col-span-3 flex items-end justify-end">
                    <span className="text-metadata uppercase tracking-wider">
                      View project →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
