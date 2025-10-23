'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';
import { projects, ProjectCategory } from '@/lib/projects-data';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory | 'All'>('All');

  const categories: Array<ProjectCategory | 'All'> = ['All', 'Product', 'Visual', 'Experimental'];

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <>
      <Navigation />

      <main className="min-h-screen pt-24">
        <div className="max-w-[1200px] mx-auto px-6 py-16">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">Projects</h1>
            <p className="text-xl text-gray-600 max-w-2xl">
              Una selezione di progetti di design di prodotto, branding e sperimentazioni
              con materiali sostenibili
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-[hsl(var(--khela-brand))] text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-gray-500">
                Nessun progetto trovato in questa categoria
              </p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}
