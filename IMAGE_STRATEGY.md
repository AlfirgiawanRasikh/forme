# FORME - Image Strategy & Resources

## Image Requirements

### Total Images Needed: 16-20

#### Per Case Study (4-5 images each)
1. **Hero Image** - Large, impactful (1920x1440px)
2. **Identity/Detail** - Brand elements, typography
3. **Interface/Layout** - Digital experience
4. **Secondary Views** - 2-3 supporting images

### Technical Specifications
- **Aspect Ratio:** 4:3 (consistent across all)
- **Format:** WebP (with JPEG fallback)
- **Sizes:** 
  - Large: 1920x1440px
  - Medium: 1280x960px
  - Small: 640x480px
- **Optimization:** Use Next.js Image component
- **File Size:** Target < 200KB per image

---

## Option 1: Unsplash Collections (Free, Fast)

### Serein (Fashion)
**Theme:** Minimal fashion, monochromatic, clean silhouettes

Search terms:
- "minimal fashion editorial"
- "monochrome fashion photography"
- "clean fashion aesthetic"
- "fashion silhouette"

Recommended photographers:
- Cam Morin
- Godisable Jacob
- Tamara Bellis

Collection URL: https://unsplash.com/collections/1538150/minimal-fashion

### Vela (Music & Culture)
**Theme:** Underground culture, raw photography, experimental

Search terms:
- "concert photography"
- "urban culture"
- "street photography"
- "music festival crowd"

Recommended photographers:
- Anthony DELANOIX
- Hanny Naibaho
- Yvette de Wit

Collection URL: https://unsplash.com/collections/1163632/music-culture

### Nomae (Hospitality)
**Theme:** Architecture, landscape, serene retreats

Search terms:
- "minimal architecture"
- "landscape photography"
- "modern retreat"
- "natural architecture"

Recommended photographers:
- Stephen Leonardi
- Dillon Kydd
- R ARCHITECTURE

Collection URL: https://unsplash.com/collections/2178651/architecture-nature

### Atelier 27 (Furniture)
**Theme:** Product photography, clean backgrounds, material focus

Search terms:
- "furniture photography"
- "minimal product"
- "wood texture"
- "object photography"

Recommended photographers:
- Kam Idris
- Beazy
- Spacejoy

Collection URL: https://unsplash.com/collections/3734909/furniture-objects

---

## Option 2: AI-Generated Images (Midjourney/DALL-E)

### Serein Prompts
```
1. Minimal fashion editorial, black and white, clean silhouette, 
   neutral background, high contrast, vogue style --ar 4:3

2. Fashion brand identity, typography, monochromatic color palette, 
   minimalist design --ar 4:3

3. E-commerce interface mockup, clean layout, minimal fashion website, 
   whitespace, elegant --ar 4:3
```

### Vela Prompts
```
1. Underground music platform, experimental typography, poster design, 
   saturated colors, cultural energy --ar 4:3

2. Music editorial layout, bold typography, street culture aesthetic, 
   raw photography --ar 4:3

3. Music platform interface, dark UI, experimental grid, 
   cultural documentation --ar 4:3
```

### Nomae Prompts
```
1. Architectural retreat, natural landscape, modern minimalism, 
   warm earth tones, serene atmosphere --ar 4:3

2. Hospitality brand identity, elegant serif typography, 
   earth-inspired palette, calm aesthetic --ar 4:3

3. Booking interface mockup, minimal design, large photography, 
   travel experience --ar 4:3
```

### Atelier 27 Prompts
```
1. Furniture product photography, neutral environment, 
   natural light, material focus, catalog style --ar 4:3

2. Furniture brand identity, architectural grid, 
   minimalist typography, neutral palette --ar 4:3

3. Digital catalog interface, product focus, clean layout, 
   minimal e-commerce --ar 4:3
```

---

## Option 3: Stock Photography (Premium)

### Recommended Services
- **Adobe Stock** - High quality, consistent
- **Pexels** - Free, good selection
- **Pixels (Premium)** - Curated collections

### Search Strategy
1. Filter by "Editorial" style
2. Use "Minimal" keyword
3. Filter for 4:3 aspect ratio
4. Look for consistent photographer style
5. Download in highest resolution

---

## Option 4: Figma Mockups (Fastest)

### For Interface Screenshots
1. Use existing website templates from Figma Community
2. Customize with FORME aesthetic
3. Export at 2x resolution
4. Use for digital product screens only

### Recommended Templates
- E-commerce templates (for Serein)
- Music platform templates (for Vela)
- Booking interface templates (for Nomae)
- Product catalog templates (for Atelier 27)

---

## Image Organization

### Directory Structure
```
public/
├── projects/
│   ├── serein/
│   │   ├── hero.jpg
│   │   ├── identity.jpg
│   │   ├── interface-1.jpg
│   │   ├── interface-2.jpg
│   │   └── detail.jpg
│   ├── vela/
│   │   ├── hero.jpg
│   │   ├── identity.jpg
│   │   ├── interface-1.jpg
│   │   ├── interface-2.jpg
│   │   └── detail.jpg
│   ├── nomae/
│   │   ├── hero.jpg
│   │   ├── identity.jpg
│   │   ├── interface-1.jpg
│   │   ├── interface-2.jpg
│   │   └── detail.jpg
│   └── atelier-27/
│       ├── hero.jpg
│       ├── identity.jpg
│       ├── interface-1.jpg
│       ├── interface-2.jpg
│       └── detail.jpg
```

### Naming Convention
- `hero.jpg` - Main case study image
- `identity.jpg` - Brand/identity elements
- `interface-1.jpg` - Primary digital view
- `interface-2.jpg` - Secondary digital view
- `detail.jpg` - Close-up/detail shot

---

## Quick Start Guide

### Using Unsplash (Recommended for MVP)

1. **Visit Unsplash Collections**
   - Fashion: https://unsplash.com/s/photos/minimal-fashion
   - Music: https://unsplash.com/s/photos/concert-photography
   - Architecture: https://unsplash.com/s/photos/minimal-architecture
   - Furniture: https://unsplash.com/s/photos/furniture-minimal

2. **Download Images**
   - Select "Large" size (1920px wide)
   - Download 4-5 images per case study
   - Save to `public/projects/[project-name]/`

3. **Optimize Images**
   ```bash
   # Using ImageOptim (Mac) or Squoosh (Web)
   # Target: < 200KB per image
   ```

4. **Update Components**
   - Replace placeholder divs with Next.js Image
   - Add proper alt text
   - Set loading priorities

---

## Implementation Checklist

### Phase 1: Download Images
- [ ] Serein images (5)
- [ ] Vela images (5)
- [ ] Nomae images (5)
- [ ] Atelier 27 images (5)

### Phase 2: Optimize
- [ ] Resize to 1920x1440px (4:3)
- [ ] Compress to < 200KB each
- [ ] Convert to WebP (optional)
- [ ] Organize in folders

### Phase 3: Implement
- [ ] Create image components
- [ ] Add Next.js Image optimization
- [ ] Set responsive sizes
- [ ] Add loading priorities
- [ ] Add alt text

### Phase 4: Test
- [ ] Verify images load
- [ ] Check responsive behavior
- [ ] Test lazy loading
- [ ] Verify aspect ratios
- [ ] Run Lighthouse audit

---

## Legal & Attribution

### Unsplash
- Free to use (Unsplash License)
- No attribution required
- Can be used commercially
- Download from: https://unsplash.com

### Pexels
- Free to use (Pexels License)
- No attribution required
- Can be used commercially
- Download from: https://pexels.com

### AI-Generated
- Midjourney: Check terms of service
- DALL-E: Generally free for personal projects
- Retain generation rights

### Stock Photography
- Check individual licenses
- May require attribution
- May have usage restrictions

---

## Performance Tips

### Next.js Image Component
```tsx
import Image from 'next/image';

<Image
  src="/projects/serein/hero.jpg"
  alt="Serein fashion editorial"
  width={1920}
  height={1440}
  priority={false} // true for hero images
  quality={85}
  placeholder="blur"
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
/>
```

### Optimization Settings
- **Quality:** 85% (sweet spot)
- **Format:** WebP with JPEG fallback
- **Priority:** true for above-fold images
- **Lazy Load:** true for below-fold images
- **Blur Placeholder:** For smooth loading

---

## Timeline Estimate

### Fast Track (2-3 hours)
1. Search Unsplash collections - 30 min
2. Download 20 images - 15 min
3. Organize and optimize - 45 min
4. Implement in code - 60 min
5. Test and verify - 30 min

### Complete Track (1 day)
1. Curate custom images - 2 hours
2. Create Figma mockups - 3 hours
3. Optimize all images - 1 hour
4. Implement with Next.js Image - 2 hours
5. Test and polish - 1 hour

---

## Recommended Approach

**For immediate launch:**
1. Use Unsplash curated collections
2. Download 5 images per case study
3. Quick optimization pass
4. Implement with Next.js Image
5. Deploy

**For maximum impact:**
1. Mix Unsplash + Figma mockups
2. Create custom interface screenshots
3. Ensure visual consistency
4. Full optimization
5. Deploy with analytics

---

## Resources

### Free Image Sources
- Unsplash: https://unsplash.com
- Pexels: https://pexels.com
- Pixabay: https://pixabay.com

### Optimization Tools
- Squoosh: https://squoosh.app
- TinyPNG: https://tinypng.com
- ImageOptim: https://imageoptim.com (Mac)

### Figma Resources
- Figma Community: https://figma.com/community
- UI Templates: Search "e-commerce", "music platform", etc.

### AI Generation
- Midjourney: https://midjourney.com
- DALL-E: https://openai.com/dall-e
- Stable Diffusion: https://stability.ai

---

**Next Step:** Choose your approach and start sourcing images. The codebase is ready to accept them.
