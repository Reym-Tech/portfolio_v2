"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { ALL_TAGS } from "@/data/projects";

export default function ProjectFilter() {
  const router       = useRouter();
  const pathname     = usePathname();
  const searchParams = useSearchParams();
  const activeTag    = searchParams.get("tag");

  function handleFilter(tag: string | null) {
    const params = new URLSearchParams(searchParams.toString());
    if (tag) {
      params.set("tag", tag);
    } else {
      params.delete("tag");
    }
    router.push(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => handleFilter(null)}
        className={`
          rounded-[var(--radius-sm)] border px-4 py-1.5 text-xs font-medium transition-colors
          ${activeTag === null
            ? "border-[var(--accent-primary)] bg-[var(--accent-primary)] text-white"
            : "border-[var(--border)] bg-[var(--surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
          }
        `}
      >
        All
      </button>
      {ALL_TAGS.map((tag) => (
        <button
          key={tag}
          onClick={() => handleFilter(tag)}
          className={`
            rounded-[var(--radius-sm)] border px-4 py-1.5 text-xs font-medium transition-colors
            ${activeTag === tag
              ? "border-[var(--accent-primary)] bg-[var(--accent-primary)] text-white"
              : "border-[var(--border)] bg-[var(--surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
            }
          `}
        >
          {tag}
        </button>
      ))}
    </div>
  );
}
