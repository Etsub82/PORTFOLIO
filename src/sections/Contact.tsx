import { profile } from '../data/profile'
import { Button } from '../components/Button'
import { Container } from '../components/Container'
import { SectionHeading } from '../components/SectionHeading'

export function Contact() {
  const emailHref = `mailto:${profile.contact.email}`

  return (
    <section id="contact" className="scroll-mt-24 py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Contact"
          title="Let’s talk"
          description="Want to collaborate or discuss an opportunity? Reach out anytime."
        />

        <div className="mx-auto mt-10 grid max-w-4xl gap-6 sm:grid-cols-2">
          <div className="rounded-2xl bg-white/4 p-6 ring-1 ring-white/10">
            <h3 className="text-sm font-bold text-white">Email</h3>
            <p className="mt-2 text-sm text-slate-300">{profile.contact.email}</p>
            <div className="mt-5">
              <Button href={emailHref} variant="primary">
                Send Email
              </Button>
            </div>
          </div>

          <div className="rounded-2xl bg-white/4 p-6 ring-1 ring-white/10">
            <h3 className="text-sm font-bold text-white">Links</h3>
            <div className="mt-4 flex flex-col gap-3">
              <Button href={profile.contact.github} target="_blank" rel="noreferrer" variant="secondary">
                GitHub
              </Button>
              {profile.contact.linkedin ? (
                <Button href={profile.contact.linkedin} target="_blank" rel="noreferrer" variant="secondary">
                  LinkedIn
                </Button>
              ) : (
                <div className="text-xs text-slate-400">LinkedIn: add in `src/data/profile.ts`</div>
              )}

              {profile.contact.resumeUrl ? (
                <Button href={profile.contact.resumeUrl} target="_blank" rel="noreferrer" variant="ghost">
                  Download Resume
                </Button>
              ) : (
                <div className="text-xs text-slate-400">Resume: add `resumeUrl` in `src/data/profile.ts`</div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

