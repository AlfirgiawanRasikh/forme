import Link from 'next/link';

const footerLinks = {
  connect: [{ name: 'Email', href: '/contact' }],
  explore: [
    { name: 'Work', href: '/work' },
    { name: 'Studio', href: '/studio' },
    { name: 'Contact', href: '/contact' },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-foreground/10 mt-section">
      <div className="px-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <Link 
              href="/" 
              className="text-2xl font-medium tracking-tight inline-block mb-4"
            >
              FORME
            </Link>
            <p className="text-metadata text-muted max-w-xs">
              Independent digital studio for brand, culture and technology.
            </p>
            <p className="text-metadata text-muted mt-2">
              Paris / Jakarta
            </p>
          </div>

          {/* Links */}
          <div className="md:col-span-7 grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-metadata uppercase tracking-wider mb-4 text-muted">
                Connect
              </h3>
              <ul className="space-y-2">
                {footerLinks.connect.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm hover:opacity-60 transition-opacity duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-metadata uppercase tracking-wider mb-4 text-muted">
                Explore
              </h3>
              <ul className="space-y-2">
                {footerLinks.explore.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm hover:opacity-60 transition-opacity duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-foreground/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-metadata text-muted">
            © {currentYear} FORME. All rights reserved.
          </p>
          <p className="text-metadata text-muted">
            A portfolio project showcasing digital craftsmanship.
          </p>
        </div>
      </div>
    </footer>
  );
}
