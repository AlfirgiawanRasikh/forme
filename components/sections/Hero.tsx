'use client';

import TextReveal from '@/components/motion/TextReveal';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-container pt-32 pb-section">
      <div className="max-w-7xl w-full">
        <TextReveal>
          <h1 className="text-display font-medium tracking-tight mb-12">
            FORME
          </h1>
        </TextReveal>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7">
            <TextReveal delay={0.1}>
              <p className="text-h2 font-light leading-tight">
                Independent digital studio for brand, culture and technology.
              </p>
            </TextReveal>
          </div>
          
          <div className="lg:col-span-5 flex items-end">
            <TextReveal delay={0.2}>
              <div className="space-y-4 text-metadata uppercase tracking-wider text-muted">
                <p>Paris / Jakarta</p>
                <p>Available worldwide</p>
              </div>
            </TextReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
