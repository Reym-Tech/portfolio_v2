import Link from "next/link";
import { ROUTES } from "@/constants/routes";

export default function ContactCTASection() {
  return (
    <section className="mx-auto w-full max-w-5xl px-6 pb-24">
      <div className="
        rounded-[var(--radius-lg)]
        border border-[var(--glass-border-accent)]
        bg-[var(--glass-fill)] backdrop-blur-sm
        p-12 flex flex-col items-center text-center gap-6
      ">
        <div className="flex flex-col gap-3">
          <p className="text-xs font-medium uppercase tracking-widest text-[var(--text-muted)]">
            Contact
          </p>
          <h2 className="text-3xl font-medium text-[var(--text-primary)]">
            Let's build something together.
          </h2>
          <p className="max-w-md text-sm leading-relaxed text-[var(--text-secondary)]">
            Open to freelance projects, full-time roles, and startup collaborations. If you have something worth building, reach out.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link
            href={ROUTES.contact}
            className="
              rounded-[var(--radius-md)] bg-[var(--accent-primary)]
              px-6 py-2.5 text-sm font-medium text-white
              transition-opacity hover:opacity-85
            "
          >
            Get in touch
          </Link>
          <Link
            href={ROUTES.projects}
            className="
              rounded-[var(--radius-md)] border border-[var(--border)]
              bg-[var(--surface)] px-6 py-2.5 text-sm font-medium
              text-[var(--text-primary)] transition-colors
              hover:border-[var(--glass-border-accent)]
            "
          >
            View projects
          </Link>
        </div>
      </div>
    </section>
  );
}
