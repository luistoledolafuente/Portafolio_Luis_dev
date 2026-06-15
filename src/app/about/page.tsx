import type { Metadata } from "next";
import Image from "next/image";
import { personalInfo } from "@/lib/data";

export const metadata: Metadata = {
  title: "Sobre Mí",
  description: `Conoce más sobre ${personalInfo.name}, ${personalInfo.title}. Experiencia, habilidades y pasión por el desarrollo web.`,
  openGraph: {
    title: `Sobre Mí | ${personalInfo.name}`,
    description: `Conoce más sobre ${personalInfo.name}, ${personalInfo.title}.`,
  },
  alternates: {
    canonical: `${personalInfo.siteUrl}/about`,
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50/50 to-transparent dark:from-slate-900/50" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative animate-fade-in-up">
            <div className="relative w-full aspect-[3/4] max-w-md mx-auto lg:mx-0">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl opacity-20 blur-xl" />
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <Image
                  src={personalInfo.avatar}
                  alt={personalInfo.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div className="animate-fade-in-up animate-delay-200">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Sobre{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                Mí
              </span>
            </h1>

            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              Soy un desarrollador apasionado por crear experiencias web excepcionales. 
              Con experiencia en tecnologías modernas como React, Next.js y Node.js, 
              me especializo en construir aplicaciones web rápidas, accesibles y optimizadas para SEO.
            </p>

            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
              Me encanta transformar ideas en productos digitales que marquen la diferencia. 
              Cada proyecto es una oportunidad para aprender y superar los límites de lo que es posible en la web.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
              {[
                { label: "Años Exp.", value: "3+" },
                { label: "Proyectos", value: "15+" },
                { label: "Tecnologías", value: "10+" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="p-4 rounded-xl bg-white/50 dark:bg-white/5 backdrop-blur border border-slate-200/50 dark:border-white/10 text-center"
                >
                  <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              {["React", "Next.js", "TypeScript", "Node.js", "Tailwind", "PostgreSQL", "MongoDB", "Docker"].map(
                (skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm font-medium rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-400"
                  >
                    {skill}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
