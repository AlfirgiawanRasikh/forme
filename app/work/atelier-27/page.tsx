import type { Metadata } from 'next';
import ProjectHero from '@/components/project/ProjectHero';
import ProjectSection from '@/components/project/ProjectSection';
import ProjectTextBlock from '@/components/project/ProjectTextBlock';
import ProjectImage from '@/components/project/ProjectImage';
import NextProject from '@/components/project/NextProject';
import { getProjectBySlug } from '@/lib/projects';

const project = getProjectBySlug('atelier-27')!;

export const metadata: Metadata = {
  title: project.title,
  description: project.description,
};

export default function Atelier27Page() {
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
          alt="Atelier 27 brand identity" 
          layout="full"
          fit="contain"
        />
      </ProjectSection>

      {/* Challenge */}
      <ProjectSection>
        <ProjectTextBlock
          title="Challenge"
          content={[
            "Atelier 27 creates limited-edition furniture and everyday objects rooted in material honesty. They required a digital catalog that reflected the tactile and architectural qualities of their physical pieces.",
            "The challenge was to present catalog items with precision, allowing material texture and form to take precedence over standard e-commerce UI conventions."
          ]}
          layout="narrow"
        />
      </ProjectSection>

      {/* Approach */}
      <ProjectSection>
        <ProjectTextBlock
          title="Approach"
          content={[
            "We designed an architectural grid system inspired by print catalogs and gallery monographs. Neutral environments, strong object silhouettes, and crisp typography frame each piece.",
            "The interactive product experience provides close inspection capabilities without cluttering the interface."
          ]}
          layout="narrow"
        />
      </ProjectSection>

      {/* Visual Story */}
      <ProjectSection className="space-y-24">
        <ProjectImage 
          src={project.assets.identity}
          alt="Atelier 27 typography and catalog layout"
          layout="contained"
          caption="Catalog typography and layout"
          fit="contain"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ProjectImage 
            src={project.assets.interface1}
            alt="Atelier 27 product object view 1"
            caption="Object presentation"
            fit="contain"
          />
          <ProjectImage 
            src={project.assets.interface2}
            alt="Atelier 27 product object view 2"
            caption="Material specifications"
            fit="contain"
          />
        </div>

        <ProjectImage 
          src={project.assets.detail}
          alt="Atelier 27 digital catalog interface"
          layout="contained"
          caption="Digital catalog interface"
          fit="contain"
        />
      </ProjectSection>

      {/* Outcome */}
      <ProjectSection>
        <ProjectTextBlock
          title="Outcome"
          content={[
            "The resulting digital catalog acts as both an archive and a calm digital showroom. The restraint of the interface mirrors the physical stillness of the objects themselves.",
            "Atelier 27 now possesses a digital presence capable of conveying the permanence and material quality of their work."
          ]}
          layout="narrow"
        />
      </ProjectSection>

      {/* Next Project */}
      <NextProject
        title="Serein"
        slug="serein"
        industry="Fashion"
      />
    </>
  );
}
