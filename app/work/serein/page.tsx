import type { Metadata } from 'next';
import { getProjectBySlug } from '@/lib/projects';
import ProjectHero from '@/components/project/ProjectHero';
import ProjectSection from '@/components/project/ProjectSection';
import ProjectTextBlock from '@/components/project/ProjectTextBlock';
import ProjectImage from '@/components/project/ProjectImage';
import NextProject from '@/components/project/NextProject';

export async function generateMetadata(): Promise<Metadata> {
  const project = getProjectBySlug('serein');
  return {
    title: project?.title || 'Serein',
    description: project?.description || 'Independent fashion label exploring restrained silhouettes and natural materials.',
  };
}

export default function SereinPage() {
  const project = getProjectBySlug('serein');

  if (!project) {
    return null;
  }

  return (
    <>
      <ProjectHero
        title={project.title}
        industry={project.industry}
        year={project.year}
        services={project.services}
        description={project.description}
      />

      {/* Hero Identity */}
      <ProjectSection>
        <ProjectImage 
          src={project.assets.hero}
          alt={`${project.title} primary identity composition`}
          layout="full"
          fit="contain"
          caption="Core identity composition"
        />
      </ProjectSection>

      {/* Challenge */}
      <ProjectSection>
        <ProjectTextBlock
          title="Challenge"
          content={[
            "Serein approached FORME to establish their visual identity as they prepared to launch their first collection. The brand needed to communicate quality, restraint, and intentionality without relying on trend-driven fashion language.",
            "The challenge was to create a system that felt timeless rather than momentarily fashionable, one that would allow the garments themselves to remain the primary focus."
          ]}
          layout="narrow"
        />
      </ProjectSection>

      {/* Approach */}
      <ProjectSection>
        <ProjectTextBlock
          title="Approach"
          content={[
            "We developed an identity rooted in negative space and proportion. The visual language uses high-contrast typographic structures, generous whitespace, and narrow typeforms to create a sense of refinement.",
            "The digital experience was designed as an extension of the physical garments, with minimal interface elements that never compete with the clothing itself."
          ]}
          layout="narrow"
        />
      </ProjectSection>

      {/* Visual Story - Editorial Grid */}
      <ProjectSection className="space-y-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ProjectImage 
            src={project.assets.identity}
            alt={`${project.title} typography and identity study`}
            caption="Typography and identity system"
            fit="contain"
          />
          <ProjectImage 
            src={project.assets.interface1}
            alt={`${project.title} layout exploration`}
            caption="Layout and spacing explorations"
            fit="contain"
          />
        </div>

        <ProjectImage 
          src={project.assets.interface2}
          alt={`${project.title} interface design`}
          layout="contained"
          caption="Interface rhythm and modularity"
          fit="contain"
        />

        <ProjectImage 
          src={project.assets.detail}
          alt={`${project.title} visual details`}
          layout="full"
          caption="Micro-typography and detailing"
          fit="contain"
        />
      </ProjectSection>

      {/* Outcome */}
      <ProjectSection>
        <ProjectTextBlock
          title="Outcome"
          content={[
            "The identity system successfully positions Serein within the landscape of thoughtful independent fashion. The restrained visual approach allows the craftsmanship and materiality of the garments to communicate directly.",
            "The digital platform serves as both an e-commerce experience and a seasonal lookbook, providing context for each collection while maintaining focus on the work itself."
          ]}
          layout="narrow"
        />
      </ProjectSection>

      {/* Next Project */}
      <NextProject
        title="Vela"
        slug="vela"
        industry="Music & Culture"
      />
    </>
  );
}
