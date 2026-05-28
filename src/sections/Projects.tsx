import { projects } from '../data/projects'
import { Container } from '../components/Container'
import { ProjectCard } from '../components/ProjectCard'
import { SectionHeading } from '../components/SectionHeading'

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Selected Work"
          title="Projects"
          description="Full-stack and backend systems I've designed and built, from RBAC APIs to SaaS platforms and health tech."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </Container>
    </section>
  )
}
