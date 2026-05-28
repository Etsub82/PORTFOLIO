export type ExperienceItem = {
  title: string
  org: string
  period: string
  bullets: string[]
}

export const experience: ExperienceItem[] = [
  {
    title: '.NET Backend Developer Intern',
    org: 'Africom Company',
    period: 'Internship',
    bullets: [
      'Developed the Application Role Management System (ARMS) using ASP.NET Core Web API',
      'Implemented JWT authentication and role-based authorization',
      'Designed and managed database structure using Entity Framework Core',
      'Tested and documented APIs using Swagger and Postman',
      'Worked with Clean Architecture principles and repository pattern',
    ],
  },
  {
    title: 'Smart Health Kiosk (Thesis Project – Team Project)',
    org: 'Academic Project',
    period: '2026',
    bullets: [
      'Developed the doctor web dashboard',
      'Integrated backend APIs and authentication',
      'Designed responsive and secure web interfaces',
    ],
  },
  {
    title: 'ASTU Course Management Web Application (Team Project)',
    org: 'Academic Project',
    period: '2025–2026',
    bullets: [
      'Developed the admin dashboard interface',
      'Contributed to frontend-backend integration',
      'Participated in system design and testing',
    ],
  },
  {
    title: 'B.Sc. in Software Engineering',
    org: 'Adama Science and Technology University (ASTU)',
    period: 'Graduated: June 20, 2026',
    bullets: [],
  },
]

