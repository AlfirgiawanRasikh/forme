import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#FAF9F6', // Warm off-white
        foreground: '#0A0A0A', // Near-black
        muted: '#6B6B6B', // Muted gray
      },
      fontFamily: {
        sans: ['var(--font-sans)'],
        serif: ['var(--font-serif)'],
      },
      fontSize: {
        'display': ['clamp(4rem, 8vw, 8.75rem)', { lineHeight: '0.95', letterSpacing: '-0.02em' }],
        'h1': ['clamp(3rem, 6vw, 6rem)', { lineHeight: '1', letterSpacing: '-0.02em' }],
        'h2': ['clamp(2rem, 4vw, 4rem)', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
        'h3': ['clamp(1.5rem, 2.5vw, 2.5rem)', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'body': ['clamp(1rem, 1.25vw, 1.25rem)', { lineHeight: '1.6' }],
        'metadata': ['clamp(0.75rem, 0.875vw, 0.875rem)', { lineHeight: '1.4', letterSpacing: '0.02em' }],
      },
      spacing: {
        'section': 'clamp(4rem, 8vw, 8rem)',
        'container': 'clamp(1.5rem, 5vw, 5rem)',
      },
      screens: {
        'xs': '480px',
      },
      gridTemplateColumns: {
        '12': 'repeat(12, minmax(0, 1fr))',
      },
      transitionDuration: {
        'page': '600ms',
      },
    },
  },
  plugins: [],
};

export default config;
