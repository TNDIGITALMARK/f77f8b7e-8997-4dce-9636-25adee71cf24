// Project data for Khela Design portfolio

export type ProjectCategory = 'Product' | 'Visual' | 'Experimental';

export interface Project {
  id: string;
  title: string;
  description: string;
  category: ProjectCategory;
  images: string[];
  status?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 'nordic-chair-series',
    title: 'Nordic Chair Series',
    description: 'Serie di sedie in legno naturale con design geometrico essenziale per spazi domestici moderni',
    category: 'Product',
    images: ['/generated/nordic-chair.png'],
    status: 'Progetto personale - in fase di sviluppo',
    featured: true,
  },
  {
    id: 'terra-bloom-brand',
    title: 'Terra Bloom',
    description: 'Identità visiva completa per brand di prodotti sostenibili ed eco-friendly',
    category: 'Visual',
    images: ['/generated/terra-bloom-logo.png'],
    featured: true,
  },
  {
    id: 'concrete-homeware',
    title: 'Recycled Concrete Homeware',
    description: 'Serie di contenitori e vasi in cemento riciclato per spazi domestici, design minimalista e sostenibile',
    category: 'Product',
    images: ['/generated/concrete-homeware.png'],
    status: 'Progetto personale - in fase di sviluppo',
    featured: true,
  },
  {
    id: 'ceramic-tableware',
    title: 'Tarcenta Rebrand',
    description: 'Collezione di ceramiche artigianali con pattern decorativi ispirati alla natura',
    category: 'Experimental',
    images: ['/generated/ceramic-bowl.png'],
    status: 'Progetto personale - in fase di sviluppo',
    featured: true,
  },
  {
    id: 'eco-grounds-identity',
    title: 'Eco Grounds Identity',
    description: 'Sistema di identità visiva per brand sostenibile con focus su materiali naturali e design organico',
    category: 'Visual',
    images: ['/generated/eco-grounds-identity.png'],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export const getProjectsByCategory = (category: ProjectCategory) =>
  projects.filter((p) => p.category === category);

export const getProjectById = (id: string) =>
  projects.find((p) => p.id === id);
