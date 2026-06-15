import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { personalInfo } from "@/lib/data";

const ContactForm = dynamic(() => import("@/components/ContactForm"));

export const metadata: Metadata = {
  title: "Contacto",
  description: `Ponte en contacto con ${personalInfo.name}. Estoy disponible para proyectos freelance, colaboraciones y oportunidades laborales.`,
  openGraph: {
    title: `Contacto | ${personalInfo.name}`,
    description: `Ponte en contacto con ${personalInfo.name}.`,
  },
  alternates: {
    canonical: `${personalInfo.siteUrl}/contact`,
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50/50 to-transparent dark:from-slate-900/50" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Ponte en{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              Contacto
            </span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente? ¿Quieres colaborar? Estoy abierto a nuevas oportunidades.
            No dudes en enviarme un mensaje.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="animate-fade-in-up">
            <div className="p-8 rounded-2xl bg-white/50 dark:bg-white/5 backdrop-blur border border-slate-200/50 dark:border-white/10">
              <ContactForm />
            </div>
          </div>

          <div className="space-y-6 animate-fade-in-up animate-delay-200">
            <div className="p-6 rounded-2xl bg-white/50 dark:bg-white/5 backdrop-blur border border-slate-200/50 dark:border-white/10">
              <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                Información de Contacto
              </h2>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-400" aria-hidden="true">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Email</p>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-400" aria-hidden="true">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">GitHub</p>
                    <a
                      href={personalInfo.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                    >
                      {personalInfo.github.replace("https://", "")}
                    </a>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-400" aria-hidden="true">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">LinkedIn</p>
                    <a
                      href={personalInfo.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                    >
                      {personalInfo.linkedin.replace("https://", "")}
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-600/5 to-pink-500/5 dark:from-purple-600/10 dark:to-pink-500/10 border border-purple-500/10">
              <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                ¿Por qué contactarme?
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Estoy siempre abierto a nuevos desafíos. Ya sea para un proyecto freelance,
                una colaboración interesante o una oportunidad laboral, me encantaría escuchar tu propuesta.
                Respondo a todos los mensajes en un plazo de 24 horas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
