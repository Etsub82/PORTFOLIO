export type SkillCategory = {
  title: string
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    skills: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS'],
  },
  {
    title: 'Backend',
    skills: ['ASP.NET Core', 'C#', 'REST APIs', 'JWT Auth', 'Entity Framework Core', 'Swagger'],
  },
  {
    title: 'Database',
    skills: ['SQL Server', 'PostgreSQL', 'SQLite', 'EF Core Migrations'],
  },
  {
    title: 'Tools & DevOps',
    skills: ['Git', 'GitHub', 'Postman', 'Docker (learning)', 'Clean Architecture'],
  },
  {
    title: 'Currently Learning',
    skills: ['Go', 'Cloud Computing', 'Docker', 'System Design', 'Scalable Backend Architectures'],
  },
]
