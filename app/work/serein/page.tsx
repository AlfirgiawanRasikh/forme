import type { Metadata } from 'next';
import ProjectHero from '@/components/project/ProjectHero';
import ProjectSection from '@/components/project/ProjectSection';
import ProjectTextBlock from '@/components/project/ProjectTextBlock';
import ProjectImage from '@/components/project/ProjectImage';
import NextProject from '@/components/project/NextProject';

export const metadata: Metadata = {
  title: 'Serein',
  description: 'Independent fashion label exploring restrained silhouettes and natural materials.',
};

export default function SereinPage() {
  return (
    <>
      <ProjectHero
        title="Serein"
        industry="Fashion"
        year="2025"
        services={[
          'Brand Identity',
          'Art Direction',
          'Digital Design',
          'E-commerce Experience',
        ]}
        description="Independent fashion label exploring restrained silhouettes and natural materials."
      />

      {/* Hero Image */}
      <ProjectSection>
        <ProjectImage 
          src="/projects/serein/hero.svg"
          alt="Serein hero imagery" 
          layout="full"
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
            "We developed an identity rooted in negative space and proportion. The visual language uses high-contrast monochromatic photography, generous whitespace, and narrow typography to create a sense of refinement.",
            "The digital experience was designed as an extension of the physical garments, with minimal interface elements that never compete with the clothing itself."
          ]}
          layout="narrow"
        />
      </ProjectSection>

      {/* Visual Story - Editorial Grid */}
      <ProjectSection className="space-y-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ProjectImage 
            src="/projects/serein/identity.svg"
            alt="Serein lookbook spread 1"
            caption="Editorial photography"
          />
          <ProjectImage 
            src="/projects/serein/interface-1.svg"
            alt="Serein lookbook spread 2"
            caption="Collection details"
          />
        </div>

        <ProjectImage 
          src="/projects/serein/interface-2.svg"
          alt="Serein identity system"
          layout="contained"
          caption="Identity system and applications"
        />

        <ProjectImage 
          src="/projects/serein/hero.svg"
          alt="Serein e-commerce interface"
          layout="full"
          caption="E-commerce experience"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ProjectImage 
            src="/projects/serein/detail.svg"
            alt="Serein product detail 1"
            caption="Product interface"
          />
          <ProjectImage 
            src="/projects/serein/identity.svg"
            alt="Serein product detail 2"
            caption="Mobile experience"
          />
        </div>
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
