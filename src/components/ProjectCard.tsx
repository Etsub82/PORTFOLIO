import type { Project } from '../data/projects'

import { Badge } from './Badge'
import { Button } from './Button'

type ProjectCardProps = {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-2xl bg-white/4 ring-1 ring-white/10 transition hover:bg-white/6">
      <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100">
        <div className="pointer-events-none absolute -left-24 -top-24 h-56 w-56 rounded-full bg-sky-500/10 blur-2xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-56 w-56 rounded-full bg-fuchsia-500/10 blur-2xl" />
      </div>

      <div className="relative flex h-full flex-col p-6">
        <h3 className="text-base font-bold text-white sm:text-lg">{project.title}</h3>
        <p className="mt-2 text-sm leading-6 text-slate-300">{project.description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((t) => (
            <Badge key={t}>{t}</Badge>
          ))}
        </div>

        <div className="mt-5">
          <p className="text-xs font-semibold tracking-wide text-slate-200/90">My role</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-300">
            {project.roleBullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3 pt-2">
          {project.githubUrl ? (
            <Button
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              variant="secondary"
              className="w-full sm:w-auto"
            >
              View on GitHub
            </Button>
          ) : (
            <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-slate-400 ring-1 ring-white/10">
              Private / Coming Soon
            </span>
          )}
          {project.liveUrl && (
            <Button
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              variant="primary"
              className="w-full sm:w-auto"
            >
              Live Demo
            </Button>
          )}
        </div>
      </div>
    </article>
  )
}

