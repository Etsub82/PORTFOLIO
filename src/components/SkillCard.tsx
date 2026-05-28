import type { SkillCategory } from '../data/skills'

type SkillCardProps = {
  category: SkillCategory
}

export function SkillCard({ category }: SkillCardProps) {
  return (
    <div className="rounded-2xl bg-white/4 p-6 ring-1 ring-white/10">
      <h3 className="text-sm font-bold text-white">{category.title}</h3>
      <ul className="mt-3 flex flex-wrap gap-2">
        {category.skills.map((s) => (
          <li
            key={s}
            className="rounded-full bg-white/6 px-3 py-1 text-xs font-medium text-slate-200 ring-1 ring-white/10"
          >
            {s}
          </li>
        ))}
      </ul>
    </div>
  )
}

