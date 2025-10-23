'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-[1200px] mx-auto px-6 py-6 flex items-center justify-between">
        <Link href="/" className="khela-logo-text text-4xl">
          Khela Design
        </Link>

        <div className="flex items-center gap-8">
          <Link
            href="/"
            className={`text-base font-medium transition-colors ${
              isActive('/') ? 'text-[hsl(var(--khela-brand))]' : 'text-gray-600 hover:text-[hsl(var(--khela-brand))]'
            }`}
          >
            Work
          </Link>
          <Link
            href="/about"
            className={`text-base font-medium transition-colors ${
              isActive('/about') ? 'text-[hsl(var(--khela-brand))]' : 'text-gray-600 hover:text-[hsl(var(--khela-brand))]'
            }`}
          >
            About
          </Link>
          <Link
            href="/projects"
            className={`text-base font-medium transition-colors ${
              isActive('/projects') ? 'text-[hsl(var(--khela-brand))]' : 'text-gray-600 hover:text-[hsl(var(--khela-brand))]'
            }`}
          >
            Services
          </Link>
          <Link
            href="/contact"
            className={`text-base font-medium transition-colors ${
              isActive('/contact') ? 'text-[hsl(var(--khela-brand))]' : 'text-gray-600 hover:text-[hsl(var(--khela-brand))]'
            }`}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
