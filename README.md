# FORME

A sophisticated portfolio project presented as a fictional independent digital studio. Built with Next.js, TypeScript, and Tailwind CSS.

## Overview

**FORME** is an independent digital studio working at the intersection of brand, culture, and technology. This project demonstrates the ability to combine sophisticated visual design with production-quality frontend engineering.

### Visual Direction
- Minimal + Sophisticated + Editorial
- Strong typography and layout craftsmanship
- Subtle but refined motion design
- Light theme with warm off-white background

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Fonts:** Inter (Sans) + Newsreader (Serif)
- **Deployment:** Vercel (planned)

### Planned Additions
- Framer Motion (motion system)
- Sanity CMS (content management)
- Resend (email functionality)

## Project Structure

```
FORME/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles
├── components/
│   ├── layout/            # Header, Footer
│   ├── ui/                # Reusable UI components
│   ├── motion/            # Animation components
│   ├── project/           # Project-specific components
│   └── sections/          # Page sections
├── lib/                   # Utilities and helpers
└── public/                # Static assets
```

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

### Build

```bash
npm run build
npm start
```

## Design System

### Typography Scale
- **Display:** 80–140px (responsive)
- **H1:** 64–96px
- **H2:** 40–64px
- **Body:** 16–20px
- **Metadata:** 12–14px

### Colors
- **Background:** `#FAF9F6` (warm off-white)
- **Foreground:** `#0A0A0A` (near-black)
- **Muted:** `#6B6B6B` (muted gray)

### Grid System
- Desktop: 12 columns
- Tablet: 8 columns
- Mobile: 4 columns

## Project Timeline

**Duration:** 2 weeks

### Phase 1: Foundation (Days 1-2) ✅
- Project setup
- Design system
- Layout components
- Homepage foundation

### Phase 2: Case Studies (Days 3-5)
- Case study template
- Four project pages (Serein, Vela, Nomae, Atelier 27)

### Phase 3: Pages (Days 6-9)
- Studio page
- Contact page with form
- Motion system implementation

### Phase 4: Polish (Days 10-14)
- Performance optimization
- CMS integration
- Production deployment

## Featured Projects

1. **Serein** - Fashion
2. **Vela** - Music & Culture
3. **Nomae** - Hospitality
4. **Atelier 27** - Furniture & Objects

## Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Sanity (when ready)
# NEXT_PUBLIC_SANITY_PROJECT_ID=
# NEXT_PUBLIC_SANITY_DATASET=production

# Resend (when ready)
# RESEND_API_KEY=
```

## Performance Targets

- Lighthouse Performance: 90+
- Lighthouse Accessibility: 95+
- WCAG 2.1 AA compliance
- Core Web Vitals optimized

## Development Notes

- Animations respect `prefers-reduced-motion`
- Focus states visible for keyboard navigation
- Semantic HTML throughout
- Mobile-first responsive design

## License

This is a portfolio project for demonstration purposes.

---

**Status:** In Development  
**Last Updated:** 2026-09-04
