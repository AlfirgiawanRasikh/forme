'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navigation = [
  { name: 'Work', href: '/work' },
  { name: 'Studio', href: '/studio' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-foreground/5">
      <nav className="px-container py-6 flex items-center justify-between">
        <Link 
          href="/" 
          className="text-xl font-medium tracking-tight hover:opacity-60 transition-opacity duration-300"
          aria-label="FORME Home"
        >
          FORME
        </Link>

        <ul className="flex items-center gap-6 md:gap-8">
          {navigation.map((item) => {
            const isActive = pathname === item.href || pathname?.startsWith(`${item.href}/`);
            
            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`text-sm tracking-wide transition-opacity duration-300 hover:opacity-100 ${
                    isActive ? 'opacity-100' : 'opacity-60'
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
