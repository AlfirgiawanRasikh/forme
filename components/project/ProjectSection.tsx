interface ProjectSectionProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export default function ProjectSection({ 
  title, 
  children, 
  className = '' 
}: ProjectSectionProps) {
  return (
    <section className={`px-container py-section ${className}`}>
      {title && (
        <h2 className="text-h2 font-medium mb-12 max-w-7xl">
          {title}
        </h2>
      )}
      <div className="max-w-7xl">
        {children}
      </div>
    </section>
  );
}
