import type { Metadata } from "next";
import { projects } from "@/lib/data";
import { personalInfo } from "@/lib/data";
import ProjectCard from "@/components/ProjectCard";

export const metadata: Metadata = {
  title: "Proyectos",
  description: `Explora los proyectos de ${personalInfo.name}. Desarrollo web, aplicaciones full stack y más.`,
  openGraph: {
    title: `Proyectos | ${personalInfo.name}`,
    description: `Explora los proyectos de ${personalInfo.name}. Desarrollo web, aplicaciones full stack y más.`,
  },
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50/50 to-transparent dark:from-slate-900/50" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Mis{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              Proyectos
            </span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Proyectos en los que he trabajado, desde aplicaciones web completas hasta herramientas interactivas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
