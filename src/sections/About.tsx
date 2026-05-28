import { profile } from '../data/profile'
import { Container } from '../components/Container'
import { SectionHeading } from '../components/SectionHeading'

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-16 sm:py-20">
      <Container>
        <SectionHeading title={profile.aboutTitle} description="A quick summary of who I am and what I build." />

        <div className="mx-auto mt-10 grid max-w-5xl gap-6 lg:grid-cols-12">
          <div className="rounded-2xl bg-white/4 p-6 ring-1 ring-white/10 lg:col-span-7">
            <div className="space-y-4 text-sm leading-6 text-slate-300 sm:text-base">
              {profile.aboutBody.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-white/4 p-6 ring-1 ring-white/10 lg:col-span-5">
            <h3 className="text-sm font-bold text-white">Highlights</h3>
            <ul className="mt-3 space-y-3 text-sm text-slate-300">
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-sky-400" />
                <span>Focused on secure APIs, clean architecture, and practical full-stack systems.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-purple-400" />
                <span>Comfortable with ASP.NET Core, EF Core, JWT auth, and React UI development.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-fuchsia-400" />
                <span>Building toward impactful, large-scale software engineering work.</span>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  )
}

