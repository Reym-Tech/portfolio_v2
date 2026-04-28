import type { Project } from "@/types";

export const PROJECTS: Project[] = [
  {
    id:          "project-one",
    title:       "Project One",
    description: "A scalable web application that automates complex workflows using modern full stack technologies and AI integration.",
    tags:        ["Next.js", "TypeScript", "OpenAI"],
    href:        "#",
    repoHref:    "#",
    featured:    true,
  },
  {
    id:          "project-two",
    title:       "Project Two",
    description: "A backend system built for high-throughput data processing with a clean API layer.",
    tags:        ["Python", "FastAPI", "PostgreSQL"],
    href:        "#",
    repoHref:    "#",
    featured:    false,
  },
  {
    id:          "project-three",
    title:       "Project Three",
    description: "A lightweight SaaS tool for managing and automating repetitive business operations.",
    tags:        ["React", "Node.js", "Tailwind"],
    href:        "#",
    repoHref:    "#",
    featured:    false,
  },
];

export const FEATURED_PROJECTS = PROJECTS.filter((p) => p.featured);
