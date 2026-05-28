import { experience } from '../data/experience'
import { Container } from '../components/Container'
import { SectionHeading } from '../components/SectionHeading'

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Experience"
          title="Work & Education"
          description="Internship experience, academic projects, and education highlights."
        />

        <div className="mx-auto mt-10 max-w-4xl">
          <ol className="relative border-l border-white/10">
            {experience.map((item) => (
              <li key={`${item.title}-${item.org}`} className="ml-6 py-6">
                <span className="absolute -left-[7px] mt-1.5 h-3.5 w-3.5 rounded-full bg-sky-400/80 ring-4 ring-slate-950" />
                <div className="rounded-2xl bg-white/4 p-6 ring-1 ring-white/10">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-sm font-bold text-white sm:text-base">{item.title}</h3>
                    <p className="text-xs font-medium text-slate-300">{item.period}</p>
                  </div>
                  <p className="mt-1 text-xs text-slate-400">{item.org}</p>

                  {item.bullets.length ? (
                    <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-slate-300">
                      {item.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  )
}

