import Link from "next/link";
import { ROUTES } from "@/constants/routes";

export default function AboutSnippetSection() {
  return (
    <section className="mx-auto w-full max-w-5xl px-6 pb-20">

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">

        {/* Bio card — glass */}
        <div className="
          md:col-span-2 rounded-[var(--radius-lg)]
          border border-[var(--glass-border-accent)]
          bg-[var(--glass-fill)] backdrop-blur-sm
          p-8 flex flex-col justify-between gap-6
        ">
          <div className="flex flex-col gap-3">
            <p className="text-xs font-medium uppercase tracking-widest text-[var(--text-muted)]">
              About
            </p>
            <p className="text-lg font-medium text-[var(--text-primary)] leading-relaxed">
              A full stack developer focused on building products that solve real problems.
            </p>
            <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
              Placeholder — replace with your actual background, what drives you, and what kind of work you want to be known for. Keep it specific and human. Two to three sentences is enough.
            </p>
          </div>
          <Link
            href={ROUTES.about}
            className="text-sm font-medium text-[var(--accent-primary)] transition-opacity hover:opacity-70 w-fit"
          >
            More about me
          </Link>
        </div>

        {/* Stats card — solid */}
        <div className="
          rounded-[var(--radius-lg)] border border-[var(--border)]
          bg-[var(--surface)] p-6 flex flex-col justify-between gap-6
        ">
          <p className="text-xs font-medium uppercase tracking-widest text-[var(--text-muted)]">
            At a glance
          </p>
          <div className="flex flex-col gap-5">
            {[
              { value: "3+",         label: "Years building"        },
              { value: "10+",        label: "Projects shipped"      },
              { value: "Fullstack",  label: "Frontend to backend"   },
              { value: "AI-focused", label: "Automation & products" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1">
                <p className="text-xl font-medium text-[var(--text-primary)]">
                  {stat.value}
                </p>
                <p className="text-xs text-[var(--text-muted)]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
