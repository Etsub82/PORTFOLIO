import avatarUrl from '../assets/avatar.svg'
import { profile } from '../data/profile'

import { Button } from '../components/Button'
import { Container } from '../components/Container'

export function Hero() {
  return (
    <section id="home" className="scroll-mt-24 pt-12 sm:pt-16">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="inline-flex items-center rounded-full bg-white/6 px-3 py-1 text-xs font-semibold text-slate-200 ring-1 ring-white/10">
              Full-Stack Engineer • ASP.NET Core • React • Cloud-Native
            </p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
              {profile.name}
            </h1>
            <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg">
              {profile.headline}
            </p>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-300 sm:text-base">
              {profile.heroSummary}
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href="#projects" variant="primary" className="w-full sm:w-auto">
                View My Projects
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative mx-auto w-full max-w-sm">
              <div className="absolute -inset-8 rounded-[32px] bg-gradient-to-tr from-sky-500/20 via-purple-500/10 to-fuchsia-500/20 blur-2xl" />
              <div className="relative overflow-hidden rounded-[28px] bg-white/4 p-8 ring-1 ring-white/10">
                <img
                  src={avatarUrl}
                  alt="Portrait placeholder"
                  className="mx-auto h-48 w-48 rounded-full bg-white/5 ring-1 ring-white/10"
                />
                <div className="mt-6 space-y-2 text-center">
                  <p className="text-sm font-semibold text-white">{profile.name}</p>
                  <p className="text-xs text-slate-300">B.Sc. Software Engineering · ASTU · 2026</p>
                  <p className="mt-1 text-xs text-sky-400">Open to full-time & remote opportunities</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

