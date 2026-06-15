import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/types';

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block rounded-2xl bg-white/5 backdrop-blur border border-slate-200/50 dark:border-white/10 overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/5 dark:hover:shadow-purple-500/10 hover:border-purple-500/30"
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
          {project.title}
        </h3>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 line-clamp-2">
          {project.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-xs font-medium rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
