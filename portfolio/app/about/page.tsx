import { SKILLS }     from "@/data/skills";
import { EXPERIENCE } from "@/data/experience";

export const metadata = {
  title:       "About — John Remy C. Gonzales",
  description: "Full stack developer and Business Analytics student building real products at the intersection of software engineering and data-driven thinking.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-20">

      {/* Header */}
      <div className="mb-16 grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="
          md:col-span-2 rounded-[var(--radius-lg)]
          border border-[var(--glass-border-accent)]
          bg-[var(--glass-fill)] backdrop-blur-sm p-8
          flex flex-col gap-4
        ">
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-[var(--text-muted)]">
              About
            </p>
            <h1 className="mt-1 text-4xl font-medium text-[var(--text-primary)]">
              John Remy C. Gonzales
            </h1>
            <p className="mt-1 text-sm font-medium text-[var(--accent-primary)]">
              Full Stack Developer
            </p>
          </div>
          <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
            I am a 3rd year BSIT student majoring in Business Analytics at UM Digos College, and a developer who builds real, functional software. My academic background gives me a lens for understanding systems and data — my projects are where I apply that thinking.
          </p>
          <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
            I have built mobile platforms, POS systems, and web applications across Flutter, Next.js, and various backend stacks. I care about clean architecture, practical design, and software that actually works for the people using it.
          </p>
        </div>

        <div className="
          rounded-[var(--radius-lg)] border border-[var(--border)]
          bg-[var(--surface)] p-6 flex flex-col gap-4
        ">
          <p className="text-xs font-medium uppercase tracking-widest text-[var(--text-muted)]">
            Details
          </p>
          <div className="flex flex-col gap-4">
            {[
              { label: "Location",     value: "Digos City, Philippines" },
              { label: "Institution",  value: "UM Digos College"        },
              { label: "Program",      value: "BSIT — Business Analytics" },
              { label: "Year",         value: "3rd Year"                },
              { label: "Availability", value: "Open to work"            },
            ].map((item) => (
              <div key={item.label} className="flex flex-col gap-0.5">
                <p className="text-xs text-[var(--text-muted)]">{item.label}</p>
                <p className="text-sm font-medium text-[var(--text-primary)]">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Skills */}
      <div className="mb-16">
        <div className="mb-6">
          <p className="text-xs font-medium uppercase tracking-widest text-[var(--text-muted)]">
            Expertise
          </p>
          <h2 className="mt-1 text-2xl font-medium text-[var(--text-primary)]">
            Skills
          </h2>
        </div>
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
                  <li key={item} className="text-sm text-[var(--text-secondary)]">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Experience */}
      <div>
        <div className="mb-6">
          <p className="text-xs font-medium uppercase tracking-widest text-[var(--text-muted)]">
            Background
          </p>
          <h2 className="mt-1 text-2xl font-medium text-[var(--text-primary)]">
            Experience
          </h2>
        </div>
        <div className="flex flex-col gap-4">
          {EXPERIENCE.map((item, index) => (
            <div
              key={index}
              className="
                rounded-[var(--radius-lg)] border border-[var(--border)]
                bg-[var(--surface)] p-6 grid grid-cols-1 gap-4 md:grid-cols-4
              "
            >
              <div className="md:col-span-1 flex flex-col gap-1">
                <p className="text-xs text-[var(--text-muted)]">{item.period}</p>
                <p className="text-xs font-medium text-[var(--accent-primary)]">{item.company}</p>
              </div>
              <div className="md:col-span-3 flex flex-col gap-2">
                <p className="text-sm font-medium text-[var(--text-primary)]">{item.role}</p>
                <p className="text-sm leading-relaxed text-[var(--text-secondary)]">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
