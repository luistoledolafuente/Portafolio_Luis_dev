export interface Project {
  slug: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface PersonalInfo {
  name: string;
  title: string;
  description: string;
  email: string;
  github: string;
  linkedin: string;
  siteUrl: string;
  avatar: string;
}
