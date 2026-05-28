import type { ReactNode } from 'react'

import { cn } from '../utils/cn'

type BadgeProps = {
  children: ReactNode
  className?: string
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full bg-white/6 px-2.5 py-1 text-[11px] font-medium text-slate-200 ring-1 ring-white/10',
        className,
      )}
    >
      {children}
    </span>
  )
}

