import { useEffect, useState } from 'react'

import { navItems } from '../data/navigation'
import { profile } from '../data/profile'
import { cn } from '../utils/cn'

import { Button } from './Button'
import { Container } from './Container'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 border-b border-transparent transition',
        scrolled ? 'border-white/10 bg-slate-950/70 backdrop-blur' : 'bg-transparent',
      )}
    >
      <Container className="flex h-16 items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/6 text-sm font-bold text-white ring-1 ring-white/10">
            EA
          </span>
          <span className="hidden text-sm font-semibold text-white sm:inline">{profile.name}</span>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.slice(1).map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-200/90 hover:text-white"
            >
              {item.label}
            </a>
          ))}
          <Button href="#contact" variant="secondary">
            Contact
          </Button>
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-xl bg-white/6 p-2 text-slate-100 ring-1 ring-white/10 hover:bg-white/10 md:hidden"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="h-5 w-5">
            <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </button>
      </Container>

      {open ? (
        <div className="border-t border-white/10 bg-slate-950/90 backdrop-blur md:hidden">
          <Container className="py-4">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-xl px-3 py-2 text-sm font-medium text-slate-200 hover:bg-white/6 hover:text-white"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
            <div className="mt-4 flex gap-3">
              <Button href="#projects" variant="primary" className="w-full" onClick={() => setOpen(false)}>
                View Projects
              </Button>
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  )
}

