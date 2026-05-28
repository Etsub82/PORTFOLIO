import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from 'react'

import { cn } from '../utils/cn'

type CommonProps = {
  children: ReactNode
  className?: string
  variant?: 'primary' | 'secondary' | 'ghost'
}

type ButtonProps = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never
  }

type LinkButtonProps = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string
  }

export function Button(props: ButtonProps | LinkButtonProps) {
  const { className, variant = 'primary', children, ...rest } = props

  const base =
    'inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition will-change-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/70 focus-visible:ring-offset-0'

  const variants: Record<NonNullable<CommonProps['variant']>, string> = {
    primary:
      'bg-sky-500 text-slate-950 hover:bg-sky-400 active:translate-y-px shadow-sm shadow-sky-500/15',
    secondary:
      'bg-white/8 text-slate-100 hover:bg-white/12 ring-1 ring-white/10 active:translate-y-px',
    ghost: 'bg-transparent text-slate-100 hover:bg-white/6 ring-1 ring-white/10',
  }

  const cls = cn(base, variants[variant], className)

  if ('href' in props) {
    const linkProps = rest as AnchorHTMLAttributes<HTMLAnchorElement>
    return (
      <a className={cls} {...linkProps}>
        {children}
      </a>
    )
  }

  const buttonProps = rest as ButtonHTMLAttributes<HTMLButtonElement>
  return (
    <button className={cls} {...buttonProps}>
      {children}
    </button>
  )
}

