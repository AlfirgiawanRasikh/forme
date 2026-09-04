/**
 * Image utility functions for FORME
 */

export interface ImageData {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
}

/**
 * Get optimized image path
 */
export function getImagePath(project: string, imageName: string): string {
  return `/projects/${project}/${imageName}`;
}

/**
 * Generate responsive image sizes
 */
export function getImageSizes(layout: 'full' | 'contained' | 'split-left' | 'split-right'): string {
  switch (layout) {
    case 'full':
      return '100vw';
    case 'contained':
      return '(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px';
    case 'split-left':
    case 'split-right':
      return '(max-width: 768px) 100vw, 50vw';
    default:
      return '100vw';
  }
}

/**
 * Check if image exists (for development)
 */
export function hasRealImage(src: string): boolean {
  // In production, this would check if actual image exists
  // For now, check if src starts with /projects/
  return src.startsWith('/projects/') && !src.includes('placeholder');
}

/**
 * Default image dimensions (4:3 aspect ratio)
 */
export const DEFAULT_IMAGE_DIMENSIONS = {
  width: 1920,
  height: 1440,
};

/**
 * Project image sets
 * Update these arrays when real images are added
 */
export const PROJECT_IMAGES = {
  serein: {
    hero: '/projects/serein/hero.jpg',
    identity: '/projects/serein/identity.jpg',
    interface1: '/projects/serein/interface-1.jpg',
    interface2: '/projects/serein/interface-2.jpg',
    detail: '/projects/serein/detail.jpg',
  },
  vela: {
    hero: '/projects/vela/hero.jpg',
    identity: '/projects/vela/identity.jpg',
    interface1: '/projects/vela/interface-1.jpg',
    interface2: '/projects/vela/interface-2.jpg',
    detail: '/projects/vela/detail.jpg',
  },
  nomae: {
    hero: '/projects/nomae/hero.jpg',
    identity: '/projects/nomae/identity.jpg',
    interface1: '/projects/nomae/interface-1.jpg',
    interface2: '/projects/nomae/interface-2.jpg',
    detail: '/projects/nomae/detail.jpg',
  },
  'atelier-27': {
    hero: '/projects/atelier-27/hero.jpg',
    identity: '/projects/atelier-27/identity.jpg',
    interface1: '/projects/atelier-27/interface-1.jpg',
    interface2: '/projects/atelier-27/interface-2.jpg',
    detail: '/projects/atelier-27/detail.jpg',
  },
};
