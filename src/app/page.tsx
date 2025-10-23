import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';
import { featuredProjects } from '@/lib/projects-data';

export const dynamic = 'force-dynamic';

export default function Home() {
  return (
    <>
      <Navigation />

      <main className="min-h-screen pt-24">
        {/* Hero Section */}
        <section className="max-w-[1200px] mx-auto px-6 py-16">
          <div className="mb-16">
            <h1 className="khela-logo-text mb-8">Khela Design</h1>
            <h2 className="text-5xl font-bold text-gray-900 mb-6 max-w-3xl leading-tight">
              Design accessibile, onesto e indispensabile
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl">
              Michela Rossi è product & visual designer specializzata in sustainable soluzioni.
            </p>
            <Link
              href="/projects"
              className="inline-block px-8 py-4 bg-[hsl(var(--khela-accent))] text-white rounded-lg font-medium hover:opacity-90 transition-all hover:transform hover:translate-y-[-2px]"
            >
              Scopri i miei lavori
            </Link>
          </div>

          {/* Featured Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-20">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-[1200px] mx-auto px-6 py-16 mt-12">
          <div className="bg-gray-50 rounded-2xl p-12 text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to start your project?
            </h3>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-[hsl(var(--khela-accent))] text-white rounded-lg font-medium hover:opacity-90 transition-all hover:transform hover:translate-y-[-2px] mt-4"
            >
              Let's Connect
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}