import type { Metadata } from 'next';
import ContactForm from '@/components/ui/ContactForm';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with FORME for your next project.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-32 pb-section">
      <div className="px-container">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-display font-medium mb-8">
            Have something in mind?
          </h1>
          
          <p className="text-h3 text-muted mb-16 max-w-2xl">
            Tell us about the project, collaboration, or idea.
          </p>

          <ContactForm />

          {/* Additional Contact Info */}
          <div className="mt-24 pt-16 border-t border-foreground/10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-metadata uppercase tracking-wider mb-4 text-muted">
                  Email
                </h2>
                <a 
                  href="mailto:alfirgiawan234@gmail.com"
                  className="text-body hover:opacity-60 transition-opacity duration-300"
                >
                  alfirgiawan234@gmail.com
                </a>
              </div>

              <div>
                <h2 className="text-metadata uppercase tracking-wider mb-4 text-muted">
                  Location
                </h2>
                <p className="text-body text-muted">
                  Paris / Jakarta
                  <br />
                  Available worldwide
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
