import Link from 'next/link';

export default function StudioIntro() {
  return (
    <section className="px-container py-section border-t border-foreground/10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Left side - Introduction */}
        <div className="lg:col-span-7">
          <h2 className="text-h1 font-medium mb-8 leading-tight">
            Independent in structure.
            <br />
            Collaborative by nature.
          </h2>
          
          <div className="space-y-6 text-body text-muted max-w-2xl">
            <p>
              FORME is an independent digital practice focused on identity and 
              interactive experiences.
            </p>
            <p>
              We work with founders, brands, and cultural organizations building 
              something meaningful.
            </p>
          </div>

          <Link 
            href="/studio" 
            className="inline-block mt-12 text-sm uppercase tracking-wider border-b border-foreground pb-1 hover:opacity-60 transition-opacity duration-300"
          >
            About the studio
          </Link>
        </div>

        {/* Right side - Capabilities */}
        <div className="lg:col-span-5">
          <div className="space-y-12">
            <div>
              <h3 className="text-metadata uppercase tracking-wider mb-6 text-muted">
                Capabilities
              </h3>
              <ul className="space-y-3 text-body">
                <li>Strategy</li>
                <li>Identity</li>
                <li>Art Direction</li>
                <li>Digital Design</li>
                <li>Creative Development</li>
              </ul>
            </div>

            <div>
              <h3 className="text-metadata uppercase tracking-wider mb-6 text-muted">
                Selected Industries
              </h3>
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
    </section>
  );
}
