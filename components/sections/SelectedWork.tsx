'use client';

import Link from 'next/link';
import ProjectPreview from '@/components/project/ProjectPreview';
import TextReveal from '@/components/motion/TextReveal';

const projects = [
  {
    title: 'Serein',
    slug: 'serein',
    industry: 'Fashion',
    year: '2025',
    description: 'Independent fashion label exploring restrained silhouettes and natural materials.',
    imageUrl: '/projects/serein-hero.jpg',
  },
  {
    title: 'Vela',
    slug: 'vela',
    industry: 'Music & Culture',
    year: '2025',
    description: 'Independent platform documenting emerging music and underground cultural scenes.',
    imageUrl: '/projects/vela-hero.jpg',
  },
  {
    title: 'Nomae',
    slug: 'nomae',
    industry: 'Hospitality',
    year: '2024',
    description: 'Collection of remote retreats focused on architecture, landscape, and slow travel.',
    imageUrl: '/projects/nomae-hero.jpg',
  },
  {
    title: 'Atelier 27',
    slug: 'atelier-27',
    industry: 'Furniture & Objects',
    year: '2024',
    description: 'Limited furniture and everyday objects rooted in craft and materiality.',
    imageUrl: '/projects/atelier27-hero.jpg',
  },
];

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
