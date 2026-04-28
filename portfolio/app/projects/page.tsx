import { Suspense } from "react";
import ProjectFilter from "@/components/ui/ProjectFilter";
import ProjectGrid   from "@/components/ui/ProjectGrid";

export const metadata = {
  title:       "Projects — Your Name",
  description: "A collection of projects built across full stack development, automation, and AI.",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-20">

      {/* Page header */}
      <div className="mb-10 flex flex-col gap-2">
        <p className="text-xs font-medium uppercase tracking-widest text-[var(--text-muted)]">
          Work
        </p>
        <h1 className="text-4xl font-medium text-[var(--text-primary)]">
          Projects
        </h1>
        <p className="mt-1 text-sm text-[var(--text-secondary)]">
          A selection of things I have built — personal projects, client work, and experiments.
        </p>
      </div>

      {/* Filter + Grid wrapped in Suspense */}
      <Suspense fallback={null}>
        <div className="flex flex-col gap-6">
          <ProjectFilter />
          <ProjectGrid />
        </div>
      </Suspense>

    </div>
  );
}
