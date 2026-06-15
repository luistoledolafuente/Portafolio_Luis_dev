import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { personalInfo, projects } from "@/lib/data";
import ProjectCard from "@/components/ProjectCard";

export const metadata: Metadata = {
  alternates: {
    canonical: personalInfo.siteUrl,
  },
};

export default function Home() {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <div className="flex flex-col">
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(168,85,247,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(236,72,153,0.1),transparent_50%)]" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div>
            <div className="relative w-28 h-28 mx-auto mb-8">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />
              <div className="absolute inset-1 rounded-full overflow-hidden bg-white dark:bg-slate-900">
                <Image
                  src={personalInfo.avatar}
                  alt={personalInfo.name}
                  fill
                  sizes="112px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
              Hola, soy{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {personalInfo.name.split(" ")[0]}
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-purple-200/80 mb-4">
              {personalInfo.title}
            </p>
            <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-300/70 mb-10">
              {personalInfo.description}
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/projects"
                className="px-8 py-3.5 rounded-xl font-medium text-white bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-500 hover:to-pink-400 transition-all duration-300 shadow-lg shadow-purple-500/25"
              >
                Ver Proyectos
              </Link>
              <Link
                href="/contact"
                className="px-8 py-3.5 rounded-xl font-medium text-white/80 border border-white/20 hover:bg-white/10 hover:text-white transition-all duration-300"
              >
                Contactar
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50/50 dark:bg-black/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
              Proyectos{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                Destacados
              </span>
            </h2>
            <p className="mt-3 text-slate-600 dark:text-slate-300">
              Una muestra de mi trabajo más reciente
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium text-purple-600 dark:text-purple-400 border border-purple-500/20 hover:bg-purple-500/5 transition-all"
            >
              Ver todos los proyectos
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
