interface ProjectMetadataProps {
  industry: string;
  year: string;
}

export default function ProjectMetadata({ industry, year }: ProjectMetadataProps) {
  return (
    <div className="flex gap-6 text-metadata uppercase tracking-wider text-muted">
      <span>{industry}</span>
      <span>{year}</span>
    </div>
  );
}
