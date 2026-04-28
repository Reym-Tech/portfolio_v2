"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { NAV_ITEMS } from "@/data/navigation";
import { useScrolled } from "@/hooks/useScrolled";

export default function Navbar() {
  const pathname  = usePathname();
  const scrolled  = useScrolled();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${scrolled || open
          ? "bg-[var(--bg-base)]/80 backdrop-blur-md border-b border-[var(--border)]"
          : "bg-transparent"
        }
      `}
    >
      <nav
        className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="text-sm font-medium text-[var(--text-primary)] transition-opacity hover:opacity-70 shrink-0"
        >
          John Remy Gonzales
        </Link>

        {/* Desktop nav */}
        <ul className="hidden sm:flex items-center gap-1" role="list">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`
                    rounded-[var(--radius-md)] px-4 py-2 text-sm transition-colors
                    ${isActive
                      ? "bg-[var(--surface)] text-[var(--text-primary)] font-medium"
                      : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--surface)]"
                    }
                  `}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="sm:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <span className={`
            block h-px w-5 bg-[var(--text-primary)] transition-all duration-300
            ${open ? "translate-y-[3.5px] rotate-45" : ""}
          `} />
          <span className={`
            block h-px w-5 bg-[var(--text-primary)] transition-all duration-300
            ${open ? "opacity-0" : ""}
          `} />
          <span className={`
            block h-px w-5 bg-[var(--text-primary)] transition-all duration-300
            ${open ? "-translate-y-[3.5px] -rotate-45" : ""}
          `} />
        </button>
      </nav>

      {/* Mobile dropdown */}
      <div
        className={`
          sm:hidden overflow-hidden transition-all duration-300
          ${open ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <ul
          className="
            flex flex-col px-6 pb-4 gap-1
            border-t border-[var(--border)]
            bg-[var(--bg-base)]/80 backdrop-blur-md
          "
          role="list"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`
                    flex w-full rounded-[var(--radius-md)] px-4 py-3 text-sm transition-colors
                    ${isActive
                      ? "bg-[var(--surface)] text-[var(--text-primary)] font-medium"
                      : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--surface)]"
                    }
                  `}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}
