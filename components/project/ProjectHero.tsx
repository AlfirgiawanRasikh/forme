import ProjectMetadata from './ProjectMetadata';

interface ProjectHeroProps {
  title: string;
  industry: string;
  year: string;
  services: string[];
  description: string;
}

export default function ProjectHero({ 
  title, 
  industry, 
  year, 
  services,
  description 
}: ProjectHeroProps) {
  return (
    <section className="min-h-screen flex items-center px-container pt-32 pb-section">
      <div className="max-w-7xl w-full">
        <ProjectMetadata industry={industry} year={year} />
        
        <h1 className="text-display font-medium tracking-tight mt-8 mb-12">
          {title}
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <p className="text-h3 leading-tight">
              {description}
            </p>
          </div>

          <div className="lg:col-span-5">
            <div>
              <h2 className="text-metadata uppercase tracking-wider mb-6 text-muted">
                Services
              </h2>
              <ul className="space-y-2 text-body">
                {services.map((service) => (
                  <li key={service}>{service}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
