import { cn } from '../utils/cn'

type SectionHeadingProps = {
  title: string
  description?: string
  eyebrow?: string
  className?: string
}

export function SectionHeading({ title, description, eyebrow, className }: SectionHeadingProps) {
  return (
    <div className={cn('mx-auto max-w-2xl text-center', className)}>
      {eyebrow ? (
        <p className="text-xs font-semibold tracking-widest text-sky-300/80">{eyebrow}</p>
      ) : null}
      <h2 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl">{title}</h2>
      {description ? (
        <p className="mt-3 text-sm leading-6 text-slate-300 sm:text-base">{description}</p>
      ) : null}
    </div>
  )
}

