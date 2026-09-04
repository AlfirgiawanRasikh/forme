import Link from 'next/link';

interface NextProjectProps {
  title: string;
  slug: string;
  industry: string;
}

export default function NextProject({ title, slug, industry }: NextProjectProps) {
  return (
    <section className="border-t border-foreground/10 px-container py-section">
      <Link 
        href={`/work/${slug}`}
        className="block group max-w-7xl"
      >
        <div className="flex items-end justify-between">
          <div>
            <p className="text-metadata uppercase tracking-wider text-muted mb-6">
              Next Project
            </p>
            <h2 className="text-display font-medium group-hover:opacity-60 transition-opacity duration-300">
              {title}
            </h2>
            <p className="text-body text-muted mt-4">{industry}</p>
          </div>
          
          <div className="text-metadata uppercase tracking-wider">
            View project →
          </div>
        </div>
      </Link>
    </section>
  );
}
