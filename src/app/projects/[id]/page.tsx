import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { getProjectById, projects } from '@/lib/projects-data';
import { ArrowLeft } from 'lucide-react';

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default function ProjectDetail({ params }: { params: { id: string } }) {
  const project = getProjectById(params.id);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Navigation />

      <main className="min-h-screen pt-24">
        <div className="max-w-[1200px] mx-auto px-6 py-16">
          {/* Back Button */}
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-[hsl(var(--khela-brand))] mb-8 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Projects</span>
          </Link>

          {/* Project Header */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="project-label">{project.category}</span>
              {project.status && (
                <span className="text-sm text-gray-500 italic">{project.status}</span>
              )}
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">{project.title}</h1>
            <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Project Images */}
          <div className="space-y-8 mb-16">
            {project.images.map((image, index) => (
              <div
                key={index}
                className="relative w-full aspect-video rounded-2xl overflow-hidden bg-gray-100"
              >
                <Image
                  src={image}
                  alt={`${project.title} - Image ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          {/* Project Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div>
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-2">
                Category
              </h3>
              <p className="text-gray-600">{project.category}</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-2">
                Type
              </h3>
              <p className="text-gray-600">
                {project.status || 'Portfolio Project'}
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-2">
                Year
              </h3>
              <p className="text-gray-600">2024</p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gray-50 rounded-2xl p-12 text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Interested in similar work?
            </h3>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              Let's discuss how we can bring your design vision to life
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-[hsl(var(--khela-accent))] text-white rounded-lg font-medium hover:opacity-90 transition-all hover:transform hover:translate-y-[-2px]"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
