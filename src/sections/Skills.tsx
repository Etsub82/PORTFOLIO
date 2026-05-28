import { skillCategories } from '../data/skills'
import { Container } from '../components/Container'
import { SectionHeading } from '../components/SectionHeading'
import { SkillCard } from '../components/SkillCard'

export function Skills() {
  const coreSkills = skillCategories.filter((c) => c.title !== 'Currently Learning')
  const learning = skillCategories.find((c) => c.title === 'Currently Learning')

  return (
    <section id="skills" className="scroll-mt-24 py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Technical Skills"
          title="Skills"
          description="Technologies I use to build secure backends, modern web UIs, and scalable systems."
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {coreSkills.map((c) => (
            <SkillCard key={c.title} category={c} />
          ))}
        </div>

        {learning && (
          <div className="mt-6 rounded-2xl border border-sky-500/20 bg-sky-500/5 p-6 ring-1 ring-sky-500/10">
            <p className="text-xs font-semibold uppercase tracking-widest text-sky-400">
              Currently Learning
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {learning.skills.map((s) => (
                <span
                  key={s}
                  className="rounded-full bg-sky-500/10 px-3 py-1 text-xs font-medium text-sky-300 ring-1 ring-sky-500/20"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        )}
      </Container>
    </section>
  )
}

