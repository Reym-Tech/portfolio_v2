import Link from "next/link";
import { HERO_CONTENT } from "@/data/hero";

export default function HeroSection() {
  const { name, role, tagline, location, available, stack, cta } = HERO_CONTENT;

  return (
    <section className="mx-auto w-full max-w-5xl px-6 py-20">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">

        {/* Primary card — glass */}
        <div className="
          md:col-span-2 rounded-[var(--radius-lg)]
          border border-[var(--glass-border-accent)]
          bg-[var(--glass-fill)] backdrop-blur-sm
          p-8 flex flex-col justify-between gap-8
        ">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <p className="text-sm font-medium text-[var(--accent-primary)]">
                {role}
              </p>
              <h1 className="text-4xl font-medium text-[var(--text-primary)] md:text-5xl">
                {name}
              </h1>
            </div>
            <p className="max-w-md text-base leading-relaxed text-[var(--text-secondary)]">
              {tagline}
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href={cta.primary.href}
              className="
                rounded-[var(--radius-md)] bg-[var(--accent-primary)]
                px-5 py-2.5 text-sm font-medium text-white
                transition-opacity hover:opacity-85
              "
            >
              {cta.primary.label}
            </Link>
            <Link
              href={cta.secondary.href}
              className="
                rounded-[var(--radius-md)] border border-[var(--border)]
                bg-[var(--surface)] px-5 py-2.5 text-sm font-medium
                text-[var(--text-primary)] transition-colors
                hover:border-[var(--glass-border-accent)]
              "
            >
              {cta.secondary.label}
            </Link>
          </div>
        </div>

        {/* Right column */}
        <div className="flex flex-col gap-4">

          {/* Status card — solid */}
          <div className="
            rounded-[var(--radius-lg)] border border-[var(--border)]
            bg-[var(--surface)] p-6 flex flex-col gap-3
          ">
            <p className="text-xs font-medium uppercase tracking-widest text-[var(--text-muted)]">
              Status
            </p>
            <div className="flex items-center gap-2">
              <span className={`
                h-2 w-2 rounded-full
                ${available ? "bg-emerald-400" : "bg-[var(--text-muted)]"}
              `} />
              <p className="text-sm font-medium text-[var(--text-primary)]">
                {available ? "Available for work" : "Not available"}
              </p>
            </div>
            <p className="text-sm text-[var(--text-secondary)]">
              {location}
            </p>
          </div>

          {/* Stack card — solid */}
          <div className="
            flex-1 rounded-[var(--radius-lg)] border border-[var(--border)]
            bg-[var(--surface)] p-6 flex flex-col gap-3
          ">
            <p className="text-xs font-medium uppercase tracking-widest text-[var(--text-muted)]">
              Current Stack
            </p>
            <div className="flex flex-wrap gap-2">
              {stack.map((tech) => (
                <span
                  key={tech}
                  className="
                    rounded-[var(--radius-sm)] border border-[var(--border)]
                    bg-[var(--surface-elevated)] px-3 py-1
                    text-xs font-medium text-[var(--text-secondary)]
                  "
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
