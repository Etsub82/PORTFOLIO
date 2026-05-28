import { profile } from '../data/profile'
import { Container } from './Container'

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <Container className="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-xs text-slate-400">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-4 text-xs">
          <a className="text-slate-300 hover:text-white" href="#home">
            Back to top
          </a>
          <a
            className="text-slate-300 hover:text-white"
            href={profile.contact.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          {profile.contact.linkedin && (
            <a
              className="text-slate-300 hover:text-white"
              href={profile.contact.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          )}
        </div>
      </Container>
    </footer>
  )
}

