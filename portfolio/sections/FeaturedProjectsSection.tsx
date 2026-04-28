import Link from "next/link";
import { PROJECTS } from "@/data/projects";
import { ROUTES } from "@/constants/routes";

export default function FeaturedProjectsSection() {
  const [featured, ...rest] = PROJECTS;

  return (
    <section className="mx-auto w-full max-w-5xl px-6 pb-20">

      {/* Section header */}
      <div className="mb-6 flex items-end justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-[var(--text-muted)]">
            Selected Work
          </p>
          <h2 className="mt-1 text-2xl font-medium text-[var(--text-primary)]">
            Projects
          </h2>
        </div>
        <Link
          href={ROUTES.projects}
          className="text-sm text-[var(--accent-primary)] transition-opacity hover:opacity-70"
        >
          View all
        </Link>
      </div>

      {/* Bento grid */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

        {/* Featured card — glass, full width */}
        {featured && (
          <div className="
            md:col-span-2 rounded-[var(--radius-lg)]
            border border-[var(--glass-border-accent)]
            bg-[var(--glass-fill)] backdrop-blur-sm
            p-8 flex flex-col justify-between gap-6
          ">
            <div className="flex flex-col gap-3">
              <p className="text-xs font-medium uppercase tracking-widest text-[var(--accent-primary)]">
                Featured
              </p>
              <h3 className="text-2xl font-medium text-[var(--text-primary)]">
                {featured.title}
              </h3>
              <p className="max-w-xl text-sm leading-relaxed text-[var(--text-secondary)]">
                {featured.description}
              </p>
            </div>

            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex flex-wrap gap-2">
                {featured.tags.map((tag) => (
                  <span
                    key={tag}
                    className="
                      rounded-[var(--radius-sm)] border border-[var(--border)]
                      bg-[var(--surface)] px-3 py-1
                      text-xs font-medium text-[var(--text-secondary)]
                    "
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                {featured.repoHref && (
                  <Link
                    href={featured.repoHref}
                    className="text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
                  >
                    Repository
                  </Link>
                )}
                {featured.href && (
                  <Link
                    href={featured.href}
                    className="text-sm font-medium text-[var(--accent-primary)] transition-opacity hover:opacity-70"
                  >
                    View project
                  </Link>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Remaining cards — solid */}
        {rest.map((project) => (
          <div
            key={project.id}
            className="
              rounded-[var(--radius-lg)] border border-[var(--border)]
              bg-[var(--surface)] p-6 flex flex-col justify-between gap-6
            "
          >
            <div className="flex flex-col gap-2">
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
        ))}

      </div>
    </section>
  );
}
