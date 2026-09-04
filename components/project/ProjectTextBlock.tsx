interface ProjectTextBlockProps {
  title: string;
  content: string[];
  layout?: 'default' | 'narrow';
}

export default function ProjectTextBlock({ 
  title, 
  content,
  layout = 'default' 
}: ProjectTextBlockProps) {
  const maxWidth = layout === 'narrow' ? 'max-w-2xl' : 'max-w-4xl';

  return (
    <div className={maxWidth}>
      <h3 className="text-h3 font-medium mb-6">{title}</h3>
      <div className="space-y-6 text-body text-muted">
        {content.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
}
