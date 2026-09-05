import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Studio',
  description: 'Independent digital practice focused on identity and interactive experiences.',
};

export default function StudioPage() {
  return (
    <div className="min-h-screen pt-32 pb-section">
      {/* Introduction */}
      <section className="px-container mb-section">
        <div className="max-w-7xl">
          <h1 className="text-h1 sm:text-display font-medium mb-16 leading-tight">
            Independent in structure.
            <br />
            Collaborative by nature.
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-7 space-y-8 text-body text-muted">
              <p>
                FORME is an independent digital practice focused on identity and 
                interactive experiences.
              </p>
              <p>
                We work with founders, brands, and cultural organizations building 
                something meaningful. Our approach combines strategic thinking with 
                design execution and technical implementation.
              </p>
              <p>
                Rather than separating strategy, design, and development into 
                isolated phases, we maintain continuous collaboration throughout 
                the process. This allows ideas to evolve naturally and solutions 
                to remain grounded in what&apos;s actually possible.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="space-y-12">
                <div>
                  <h2 className="text-metadata uppercase tracking-wider mb-6 text-muted">
                    Capabilities
                  </h2>
                  <ul className="space-y-3 text-body">
                    <li>Strategy</li>
                    <li>Identity</li>
                    <li>Art Direction</li>
                    <li>Digital Design</li>
                    <li>Creative Development</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-metadata uppercase tracking-wider mb-6 text-muted">
                    Selected Industries
                  </h2>
                  <ul className="space-y-3 text-body text-muted">
                    <li>Fashion</li>
                    <li>Culture</li>
                    <li>Hospitality</li>
                    <li>Objects</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="px-container py-section border-t border-foreground/10">
        <div className="max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <h2 className="text-h2 font-medium mb-8">Approach</h2>
            </div>

            <div className="lg:col-span-7 space-y-12">
              <div>
                <h3 className="text-h3 font-medium mb-4">Clarity over complexity</h3>
                <p className="text-body text-muted">
                  We prioritize solutions that are clear in concept and precise in 
                  execution. Complexity is a tool, not a default. The best work often 
                  comes from restraint rather than addition.
                </p>
              </div>

              <div>
                <h3 className="text-h3 font-medium mb-4">Form follows context</h3>
                <p className="text-body text-muted">
                  Visual decisions are made in response to the specific context of each 
                  project: the audience, the medium, the message. Style is a byproduct 
                  of solving the right problem, not a predetermined aesthetic.
                </p>
              </div>

              <div>
                <h3 className="text-h3 font-medium mb-4">Built to last</h3>
                <p className="text-body text-muted">
                  We design systems that can evolve. Whether it&apos;s a visual identity or 
                  a digital platform, the goal is longevity. This means building with 
                  flexibility while maintaining coherence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="px-container py-section border-t border-foreground/10">
        <div className="max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <h2 className="text-h2 font-medium mb-8">Process</h2>
            </div>

            <div className="lg:col-span-7">
              <div className="space-y-16">
                <div>
                  <div className="text-metadata uppercase tracking-wider text-muted mb-2">
                    01
                  </div>
                  <h3 className="text-h3 font-medium mb-4">Discovery & Strategy</h3>
                  <p className="text-body text-muted">
                    Understanding the project context, audience, constraints, and 
                    opportunities. Defining the problem clearly before proposing solutions.
                  </p>
                </div>

                <div>
                  <div className="text-metadata uppercase tracking-wider text-muted mb-2">
                    02
                  </div>
                  <h3 className="text-h3 font-medium mb-4">Concept & Direction</h3>
                  <p className="text-body text-muted">
                    Developing visual concepts and interaction models. Exploring multiple 
                    directions before committing to execution.
                  </p>
                </div>

                <div>
                  <div className="text-metadata uppercase tracking-wider text-muted mb-2">
                    03
                  </div>
                  <h3 className="text-h3 font-medium mb-4">Design & Development</h3>
                  <p className="text-body text-muted">
                    Translating concepts into production-quality systems. Design and 
                    technical implementation happen in parallel, informing each other 
                    throughout.
                  </p>
                </div>

                <div>
                  <div className="text-metadata uppercase tracking-wider text-muted mb-2">
                    04
                  </div>
                  <h3 className="text-h3 font-medium mb-4">Launch & Evolution</h3>
                  <p className="text-body text-muted">
                    Delivering complete, documented systems ready for deployment. 
                    Providing guidance for ongoing evolution and maintenance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-container py-section border-t border-foreground/10">
        <div className="max-w-7xl text-center">
          <h2 className="text-h1 font-medium mb-8">
            Have something in mind?
          </h2>
          <p className="text-body text-muted mb-12 max-w-2xl mx-auto">
            We&apos;re currently accepting select projects for 2025.
          </p>
          <Link 
            href="/contact"
            className="inline-block text-sm uppercase tracking-wider border-b border-foreground pb-1 hover:opacity-60 transition-opacity duration-300"
          >
            Get in touch
          </Link>
        </div>
      </section>
    </div>
  );
}
