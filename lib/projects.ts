/**
 * Project data configuration for FORME
 * Centralized source of truth for project metadata and assets
 */

export interface Project {
  title: string;
  slug: string;
  industry: string;
  year: string;
  description: string;
  services: string[];
  assets: {
    hero: string;
    identity: string;
    interface1: string;
    interface2: string;
    detail: string;
  };
}

/**
 * All project data with actual SVG asset paths
 */
export const PROJECTS: Record<string, Project> = {
  serein: {
    title: 'Serein',
    slug: 'serein',
    industry: 'Fashion',
    year: '2025',
    description: 'Independent fashion label exploring restrained silhouettes and natural materials.',
    services: [
      'Brand Identity',
      'Art Direction',
      'Digital Design',
      'E-commerce Experience',
    ],
    assets: {
      hero: '/projects/serein/hero.svg',
      identity: '/projects/serein/identity.svg',
      interface1: '/projects/serein/interface-1.svg',
      interface2: '/projects/serein/interface-2.svg',
      detail: '/projects/serein/detail.svg',
    },
  },
  vela: {
    title: 'Vela',
    slug: 'vela',
    industry: 'Music & Culture',
    year: '2025',
    description: 'Independent platform documenting emerging music and underground cultural scenes.',
    services: [
      'Brand Strategy',
      'Identity',
      'Digital Platform',
      'Interaction Design',
    ],
    assets: {
      hero: '/projects/vela/hero.svg',
      identity: '/projects/vela/identity.svg',
      interface1: '/projects/vela/interface-1.svg',
      interface2: '/projects/vela/interface-2.svg',
      detail: '/projects/vela/detail.svg',
    },
  },
  nomae: {
    title: 'Nomae',
    slug: 'nomae',
    industry: 'Hospitality',
    year: '2024',
    description: 'Collection of remote retreats focused on architecture, landscape, and slow travel.',
    services: [
      'Brand Identity',
      'Digital Direction',
      'Booking Experience Concept',
      'Web Design',
    ],
    assets: {
      hero: '/projects/nomae/hero.svg',
      identity: '/projects/nomae/identity.svg',
      interface1: '/projects/nomae/interface-1.svg',
      interface2: '/projects/nomae/interface-2.svg',
      detail: '/projects/nomae/detail.svg',
    },
  },
  'atelier-27': {
    title: 'Atelier 27',
    slug: 'atelier-27',
    industry: 'Furniture & Objects',
    year: '2024',
    description: 'Limited furniture and everyday objects rooted in craft and materiality.',
    services: [
      'Identity',
      'Art Direction',
      'Digital Catalog',
      'Interactive Product Experience',
    ],
    assets: {
      hero: '/projects/atelier-27/hero.svg',
      identity: '/projects/atelier-27/identity.svg',
      interface1: '/projects/atelier-27/interface-1.svg',
      interface2: '/projects/atelier-27/interface-2.svg',
      detail: '/projects/atelier-27/detail.svg',
    },
  },
};

/**
 * Get all projects as array (for listing)
 */
export function getAllProjects(): Project[] {
  return Object.values(PROJECTS);
}

/**
 * Get project by slug
 */
export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS[slug];
}
