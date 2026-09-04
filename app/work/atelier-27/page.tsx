import type { Metadata } from 'next';
import ProjectHero from '@/components/project/ProjectHero';
import ProjectSection from '@/components/project/ProjectSection';
import ProjectTextBlock from '@/components/project/ProjectTextBlock';
import ProjectImage from '@/components/project/ProjectImage';
import NextProject from '@/components/project/NextProject';

export const metadata: Metadata = {
  title: 'Atelier 27',
  description: 'Limited furniture and everyday objects rooted in craft and materiality.',
};

export default function Atelier27Page() {
  return (
    <>
      <ProjectHero
        title="Atelier 27"
        industry="Furniture & Objects"
        year="2024"
        services={[
          'Identity',
          'Art Direction',
          'Digital Catalog',
          'Interactive Product Experience',
        ]}
        description="Limited furniture and everyday objects rooted in craft and materiality."
      />

      {/* Hero Image */}
      <ProjectSection>
        <ProjectImage 
          src="/projects/atelier-27/hero.svg"
          alt="Atelier 27 product photography" 
          layout="full"
        />
      </ProjectSection>

      {/* Challenge */}
      <ProjectSection>
        <ProjectTextBlock
          title="Challenge"
          content={[
            "Atelier 27 produces limited furniture and objects with an emphasis on materiality and craft. The studio needed a digital presence that could function as both portfolio and catalog without becoming a traditional e-commerce experience.",
            "The challenge was to showcase individual pieces with the attention they deserve while maintaining the cohesive identity of the studio itself."
          ]}
          layout="narrow"
        />
      </ProjectSection>

      {/* Approach */}
      <ProjectSection>
        <ProjectTextBlock
          title="Approach"
          content={[
            "We developed a catalog-inspired system with strong architectural grids and neutral environments that allow the objects themselves to occupy focus. Product photography emphasizes form, silhouette, and material texture.",
            "The digital experience was designed to feel more like browsing a curated collection than shopping. Each piece is given space to be understood on its own terms before any commercial interaction."
          ]}
          layout="narrow"
        />
      </ProjectSection>

      {/* Visual Story */}
      <ProjectSection className="space-y-24">
        <ProjectImage 
          src="/projects/atelier-27/identity.svg"
          alt="Atelier 27 identity system"
          layout="contained"
          caption="Identity and typography"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ProjectImage 
            src="/projects/atelier-27/interface-1.svg"
            alt="Atelier 27 object detail 1"
            caption="Object photography"
          />
          <ProjectImage 
            src="/projects/atelier-27/interface-2.svg"
            alt="Atelier 27 object detail 2"
            caption="Material details"
          />
        </div>

        <ProjectImage 
          src="/projects/atelier-27/hero.svg"
          alt="Atelier 27 catalog interface"
          layout="full"
          caption="Digital catalog experience"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <ProjectImage 
            src="/projects/atelier-27/detail.svg"
            alt="Atelier 27 product view 1"
            caption="Product detail"
          />
          <ProjectImage 
            src="/projects/atelier-27/identity.svg"
            alt="Atelier 27 product view 2"
            caption="Material specs"
          />
          <ProjectImage 
            src="/projects/atelier-27/interface-1.svg"
            alt="Atelier 27 product view 3"
            caption="Dimensions"
          />
        </div>

        <ProjectImage 
          src="/projects/atelier-27/interface-2.svg"
          alt="Atelier 27 collection view"
          layout="contained"
          caption="Collection overview"
        />
      </ProjectSection>

      {/* Outcome */}
      <ProjectSection>
        <ProjectTextBlock
          title="Outcome"
          content={[
            "The digital catalog successfully positions Atelier 27 within the landscape of thoughtful object design. The restrained interface allows the work to speak for itself while providing all necessary information for interested buyers.",
            "The system scales gracefully as new pieces are introduced, maintaining consistency while allowing each object its moment of focus."
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
