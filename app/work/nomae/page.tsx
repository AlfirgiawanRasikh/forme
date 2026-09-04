import type { Metadata } from 'next';
import ProjectHero from '@/components/project/ProjectHero';
import ProjectSection from '@/components/project/ProjectSection';
import ProjectTextBlock from '@/components/project/ProjectTextBlock';
import ProjectImage from '@/components/project/ProjectImage';
import NextProject from '@/components/project/NextProject';
import { getProjectBySlug } from '@/lib/projects';

const project = getProjectBySlug('nomae')!;

export const metadata: Metadata = {
  title: project.title,
  description: project.description,
};

export default function NomaePage() {
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
          alt="Nomae brand and visual identity" 
          layout="full"
          fit="contain"
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
            "We developed a visual system centered on landscape typography and elegant serif headings. The warm, earth-inspired palette and generous use of whitespace create a sense of breathing room.",
            "The booking experience was designed to feel unhurried. Large imagery, thoughtful pacing, and clear information architecture guide users through the process without pressure."
          ]}
          layout="narrow"
        />
      </ProjectSection>

      {/* Visual Story */}
      <ProjectSection className="space-y-24">
        <ProjectImage 
          src={project.assets.identity}
          alt="Nomae identity and color system"
          layout="contained"
          caption="Identity and color system"
          fit="contain"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ProjectImage 
            src={project.assets.interface1}
            alt="Nomae retreat editorial layout"
            caption="Retreat editorial layouts"
            fit="contain"
          />
          <ProjectImage 
            src={project.assets.interface2}
            alt="Nomae architectural details"
            caption="Architectural details"
            fit="contain"
          />
        </div>

        <ProjectImage 
          src={project.assets.detail}
          alt="Nomae booking interface"
          layout="contained"
          caption="Booking flow and mobile interface"
          fit="contain"
        />
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
