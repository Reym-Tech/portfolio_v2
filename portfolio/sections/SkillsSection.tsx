import { SKILLS } from "@/data/skills";

export default function SkillsSection() {
  return (
    <section className="mx-auto w-full max-w-5xl px-6 pb-20">

      {/* Section header */}
      <div className="mb-6">
        <p className="text-xs font-medium uppercase tracking-widest text-[var(--text-muted)]">
          Expertise
        </p>
        <h2 className="mt-1 text-2xl font-medium text-[var(--text-primary)]">
          Skills
        </h2>
      </div>

      {/* Skills grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
        {SKILLS.map((skill) => (
          <div
            key={skill.category}
            className="
              rounded-[var(--radius-lg)] border border-[var(--border)]
              bg-[var(--surface)] p-6 flex flex-col gap-4
            "
          >
            <p className="text-xs font-medium uppercase tracking-widest text-[var(--text-muted)]">
              {skill.category}
            </p>
            <ul className="flex flex-col gap-2">
              {skill.items.map((item) => (
                <li
                  key={item}
                  className="text-sm text-[var(--text-secondary)]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

    </section>
  );
}
