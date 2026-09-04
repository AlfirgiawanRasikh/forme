import type { Metadata } from 'next';
import ProjectHero from '@/components/project/ProjectHero';
import ProjectSection from '@/components/project/ProjectSection';
import ProjectTextBlock from '@/components/project/ProjectTextBlock';
import ProjectImage from '@/components/project/ProjectImage';
import NextProject from '@/components/project/NextProject';
import { getProjectBySlug } from '@/lib/projects';

const project = getProjectBySlug('vela')!;

export const metadata: Metadata = {
  title: project.title,
  description: project.description,
};

export default function VelaPage() {
  return (
    <>
      <ProjectHero
        title={project.title}
        industry={project.industry}
        year={project.year}
        services={project.services}
        description={project.description}
      />

      {/* Hero Image */}
      <ProjectSection>
        <ProjectImage 
          src={project.assets.hero}
          alt="Vela platform identity" 
          layout="full"
          fit="contain"
        />
      </ProjectSection>

      {/* Challenge */}
      <ProjectSection>
        <ProjectTextBlock
          title="Challenge"
          content={[
            "Vela needed a digital presence that could capture the energy of underground music culture while remaining functional as an editorial platform. The platform would need to accommodate diverse content formats without becoming fragmented.",
            "The visual identity needed to feel current but not disposable, rooted in music culture without relying on clichéd iconography."
          ]}
          layout="narrow"
        />
      </ProjectSection>

      {/* Approach */}
      <ProjectSection>
        <ProjectTextBlock
          title="Approach"
          content={[
            "We developed a typographic system inspired by poster design and street culture. Strong type hierarchy, experimental grids, and selective use of saturated color create visual impact without overwhelming the content.",
            "The platform architecture prioritizes discovery. Navigation is intuitive but not predictable, encouraging exploration while maintaining clear information hierarchy."
          ]}
          layout="narrow"
        />
      </ProjectSection>

      {/* Visual Story */}
      <ProjectSection className="space-y-24">
        <ProjectImage 
          src={project.assets.identity}
          alt="Vela typographic and identity system"
          layout="full"
          caption="Typography and identity system"
          fit="contain"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ProjectImage 
            src={project.assets.interface1}
            alt="Vela editorial layout"
            caption="Editorial layouts"
            fit="contain"
          />
          <ProjectImage 
            src={project.assets.interface2}
            alt="Vela content templates"
            caption="Content templates"
            fit="contain"
          />
        </div>

        <ProjectImage 
          src={project.assets.detail}
          alt="Vela platform interface and navigation"
          layout="contained"
          caption="Platform interface and mobile view"
          fit="contain"
        />
      </ProjectSection>

      {/* Outcome */}
      <ProjectSection>
        <ProjectTextBlock
          title="Outcome"
          content={[
            "The platform successfully bridges editorial depth with cultural immediacy. The design system is flexible enough to accommodate varied content while maintaining strong visual identity.",
            "Vela functions as both an archive and a living document of underground culture, designed to grow and evolve while maintaining coherence."
          ]}
          layout="narrow"
        />
      </ProjectSection>

      {/* Next Project */}
      <NextProject
        title="Nomae"
        slug="nomae"
        industry="Hospitality"
      />
    </>
  );
}
