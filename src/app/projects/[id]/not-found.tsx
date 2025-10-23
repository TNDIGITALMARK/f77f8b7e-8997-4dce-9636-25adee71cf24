import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-24 flex items-center justify-center">
        <div className="text-center px-6">
          <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Project Not Found
          </h2>
          <p className="text-gray-600 mb-8">
            Il progetto che stai cercando non esiste o è stato rimosso.
          </p>
          <Link
            href="/projects"
            className="inline-block px-8 py-4 bg-[hsl(var(--khela-accent))] text-white rounded-lg font-medium hover:opacity-90 transition-all"
          >
            Torna ai Progetti
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
