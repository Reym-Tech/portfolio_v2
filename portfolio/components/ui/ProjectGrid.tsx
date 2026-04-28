"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { PROJECTS } from "@/data/projects";

export default function ProjectGrid() {
  const searchParams = useSearchParams();
  const activeTag    = searchParams.get("tag");

  const filtered = activeTag
    ? PROJECTS.filter((p) => p.tags.includes(activeTag))
    : PROJECTS;

  if (filtered.length === 0) {
    return (
      <p className="text-sm text-[var(--text-secondary)]">
        No projects found for this filter.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {filtered.map((project) => (
        <div
          key={project.id}
          className={`
            rounded-[var(--radius-lg)] p-6 flex flex-col justify-between gap-6
            ${project.featured
              ? "md:col-span-2 border border-[var(--glass-border-accent)] bg-[var(--glass-fill)] backdrop-blur-sm"
              : "border border-[var(--border)] bg-[var(--surface)]"
            }
          `}
        >
          <div className="flex flex-col gap-2">
            {project.featured && (
              <p className="text-xs font-medium uppercase tracking-widest text-[var(--accent-primary)]">
                Featured
              </p>
            )}
            <h3 className="text-lg font-medium text-[var(--text-primary)]">
              {project.title}
            </h3>
            <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
              {project.description}
            </p>
          </div>

          <div className="flex items-center justify-between flex-wrap gap-3">
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="
                    rounded-[var(--radius-sm)] border border-[var(--border)]
                    bg-[var(--surface-elevated)] px-3 py-1
                    text-xs font-medium text-[var(--text-secondary)]
                  "
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-3">
              {project.repoHref && (
                <Link
                  href={project.repoHref}
                  className="text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
                >
                  Repository
                </Link>
              )}
              {project.href && (
                <Link
                  href={project.href}
                  className="text-sm font-medium text-[var(--accent-primary)] transition-opacity hover:opacity-70"
                >
                  View
                </Link>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
