'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/lib/projects-data';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.id}`}>
      <div className="group bg-white rounded-xl overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-300 cursor-pointer">
        {/* Image Container */}
        <div className="aspect-square bg-gray-100 relative overflow-hidden">
          <Image
            src={project.images[0]}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Content */}
        <div className="p-8">
          <h4 className="text-xl font-semibold text-gray-900 mb-2">
            {project.title}
          </h4>
          <span className="project-label">View Project</span>
        </div>
      </div>
    </Link>
  );
}
