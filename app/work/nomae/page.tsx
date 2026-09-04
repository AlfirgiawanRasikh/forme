import type { Metadata } from 'next';
import ProjectHero from '@/components/project/ProjectHero';
import ProjectSection from '@/components/project/ProjectSection';
import ProjectTextBlock from '@/components/project/ProjectTextBlock';
import ProjectImage from '@/components/project/ProjectImage';
import NextProject from '@/components/project/NextProject';

export const metadata: Metadata = {
  title: 'Nomae',
  description: 'Collection of remote retreats focused on architecture, landscape, and slow travel.',
};

export default function NomaePage() {
  return (
    <>
      <ProjectHero
        title="Nomae"
        industry="Hospitality"
        year="2024"
        services={[
          'Brand Identity',
          'Digital Direction',
          'Booking Experience Concept',
          'Web Design',
        ]}
        description="Collection of remote retreats focused on architecture, landscape, and slow travel."
      />

      {/* Hero Image */}
      <ProjectSection>
        <ProjectImage 
          alt="Nomae landscape photography" 
          layout="full"
        />
      </ProjectSection>

      {/* Challenge */}
      <ProjectSection>
        <ProjectTextBlock
          title="Challenge"
          content={[
            "Nomae curates architectural retreats in remote locations. The brand needed to communicate both the physical beauty of these spaces and the philosophy behind slow, intentional travel.",
            "The challenge was to create a digital experience that felt calm and considered, never rushed or transactional, while still functioning as a booking platform."
          ]}
          layout="narrow"
        />
      </ProjectSection>

      {/* Approach */}
      <ProjectSection>
        <ProjectTextBlock
          title="Approach"
          content={[
            "We developed a visual system centered on landscape photography and elegant serif typography. The warm, earth-inspired palette and generous use of whitespace create a sense of breathing room, mirroring the physical experience of the retreats themselves.",
            "The booking experience was designed to feel unhurried. Large imagery, thoughtful pacing, and clear information architecture guide users through the process without pressure."
          ]}
          layout="narrow"
        />
      </ProjectSection>

      {/* Visual Story */}
      <ProjectSection className="space-y-24">
        <ProjectImage 
          alt="Nomae identity and color system"
          layout="contained"
          caption="Identity and color system"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ProjectImage 
            alt="Nomae retreat detail 1"
            caption="Retreat photography"
          />
          <ProjectImage 
            alt="Nomae retreat detail 2"
            caption="Architectural details"
          />
        </div>

        <ProjectImage 
          alt="Nomae website homepage"
          layout="full"
          caption="Homepage experience"
        />

        <ProjectImage 
          alt="Nomae booking interface"
          layout="contained"
          caption="Booking flow"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ProjectImage 
            alt="Nomae retreat page"
            caption="Retreat detail page"
          />
          <ProjectImage 
            alt="Nomae mobile experience"
            caption="Mobile interface"
          />
        </div>
      </ProjectSection>

      {/* Outcome */}
      <ProjectSection>
        <ProjectTextBlock
          title="Outcome"
          content={[
            "The digital experience successfully translates Nomae's philosophy into a functional platform. The slower pacing and emphasis on imagery create space for consideration, appropriate for the type of travel the brand represents.",
            "The system balances beauty with utility, providing all necessary booking functionality while maintaining the contemplative quality central to the brand."
          ]}
          layout="narrow"
        />
      </ProjectSection>

      {/* Next Project */}
      <NextProject
        title="Atelier 27"
        slug="atelier-27"
        industry="Furniture & Objects"
      />
    </>
  );
}
