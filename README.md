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
- **Motion:** Framer Motion
- **Email:** Resend
- **Validation:** Zod
- **Fonts:** Inter (Sans) + Newsreader (Serif)
- **Deployment:** Vercel

## Project Structure

```
FORME/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Homepage
│   ├── work/              # Case study pages
│   ├── studio/            # Studio page
│   ├── contact/           # Contact page with form
│   └── globals.css        # Global styles
├── components/
│   ├── layout/            # Header, Footer
│   ├── ui/                # Reusable UI components
│   ├── motion/            # Animation components (Framer Motion)
│   ├── project/           # Project-specific components
│   └── sections/          # Page sections
├── lib/
│   └── projects.ts        # Centralized project data
├── public/
│   └── projects/          # Project visual assets (SVG)
└── tailwind.config.ts     # Design system configuration
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

## Case Studies

1. **Serein** - Fashion
2. **Vela** - Music & Culture
3. **Nomae** - Hospitality
4. **Atelier 27** - Furniture & Objects

## Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Resend (required for contact form delivery)
RESEND_API_KEY=your_api_key_here
CONTACT_TO_EMAIL=your_destination@example.com
```

## Features

- **Responsive Design:** Mobile-first approach with fluid typography
- **Refined Motion:** Page transitions, image reveals, text animations
- **Accessibility:** Semantic HTML, keyboard navigation, reduced-motion support
- **Type Safety:** Full TypeScript coverage
- **Production Build:** Verified with Next.js 15 optimization

## Development Notes

- Animations respect `prefers-reduced-motion`
- Focus states visible for keyboard navigation
- Semantic HTML throughout
- Mobile-first responsive design

## License

This is a portfolio project for demonstration purposes.

---

**Built by:** [Alfirgiawan Rasikh](https://github.com/AlfirgiawanRasikh)  
**Repository:** [github.com/AlfirgiawanRasikh/forme](https://github.com/AlfirgiawanRasikh/forme)
