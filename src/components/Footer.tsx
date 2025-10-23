import Link from 'next/link';
import { Instagram, Mail, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white mt-20">
      <div className="max-w-[1200px] mx-auto px-6 py-12">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-base font-medium text-gray-900 mb-2">Khela Design</p>
            <p className="text-sm text-gray-600">Email: info@kheladesign.com</p>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[hsl(var(--khela-accent))] text-white flex items-center justify-center hover:opacity-80 transition-opacity"
            >
              <Instagram className="w-5 h-5" />
            </Link>
            <Link
              href="mailto:info@kheladesign.com"
              className="w-10 h-10 rounded-full bg-[hsl(var(--khela-accent))] text-white flex items-center justify-center hover:opacity-80 transition-opacity"
            >
              <Mail className="w-5 h-5" />
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[hsl(var(--khela-accent))] text-white flex items-center justify-center hover:opacity-80 transition-opacity"
            >
              <Linkedin className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
