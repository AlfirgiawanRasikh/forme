import type { Metadata } from 'next';
import ProjectHero from '@/components/project/ProjectHero';
import ProjectSection from '@/components/project/ProjectSection';
import ProjectTextBlock from '@/components/project/ProjectTextBlock';
import ProjectImage from '@/components/project/ProjectImage';
import NextProject from '@/components/project/NextProject';

export const metadata: Metadata = {
  title: 'Vela',
  description: 'Independent platform documenting emerging music and underground cultural scenes.',
};

export default function VelaPage() {
  return (
    <>
      <ProjectHero
        title="Vela"
        industry="Music & Culture"
        year="2025"
        services={[
          'Brand Strategy',
          'Identity',
          'Digital Platform',
          'Interaction Design',
        ]}
        description="Independent platform documenting emerging music and underground cultural scenes."
      />

      {/* Hero Image */}
      <ProjectSection>
        <ProjectImage 
          alt="Vela platform hero" 
          layout="full"
        />
      </ProjectSection>

      {/* Challenge */}
      <ProjectSection>
        <ProjectTextBlock
          title="Challenge"
          content={[
            "Vela needed a digital presence that could capture the energy of underground music culture while remaining functional as an editorial platform. The platform would need to accommodate diverse content formats (interviews, photography, audio, and event listings) without becoming fragmented.",
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
          alt="Vela identity and typography"
          layout="full"
          caption="Typography and identity system"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ProjectImage 
            alt="Vela editorial layout 1"
            caption="Editorial layouts"
          />
          <ProjectImage 
            alt="Vela editorial layout 2"
            caption="Content templates"
          />
        </div>

        <ProjectImage 
          alt="Vela platform interface"
          layout="contained"
          caption="Platform interface and navigation"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <ProjectImage 
            alt="Vela mobile view 1"
            caption="Mobile interface"
          />
          <ProjectImage 
            alt="Vela mobile view 2"
            caption="Article view"
          />
          <ProjectImage 
            alt="Vela mobile view 3"
            caption="Event listings"
          />
        </div>
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
