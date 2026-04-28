import type { Project } from "@/types";

export const PROJECTS: Project[] = [
  {
    id:          "ayo",
    title:       "AYO",
    description: "A mobile platform that connects homeowners with verified home repair professionals — plumbers, electricians, and appliance technicians. Built with Flutter and Supabase using Clean Architecture and a premium Glassmorphism design system.",
    tags:        ["Flutter", "Supabase", "Dart", "Clean Architecture"],
    href:        "https://drive.google.com/file/d/1XRqTRw4xIkN_clRi62vX1vsYorLbilEp/view?usp=sharing",
    repoHref:    "https://github.com/Reym-Tech/Technopreneur-Fixify",
    featured:    true,
  },
  {
    id:          "brewtrack",
    title:       "BrewTrack",
    description: "A web-based POS and inventory system for cafés. Manages sales, tracks stock, and provides basic analytics in a single dashboard. Live in production.",
    tags:        ["HTML", "CSS", "JavaScript", "Supabase"],
    href:        "https://bt-hitnotes.vercel.app",
    repoHref:    "https://github.com/Reym-Tech/BrewTrack_Latest",
    featured:    false,
  },
  {
    id:          "tfc-pos",
    title:       "Tagalog FC POS",
    description: "A comprehensive mobile POS system for restaurant operations. Features real-time order management, inventory tracking, sales reporting, and payment processing optimized for quick-service restaurants.",
    tags:        ["Flutter", "Dart", "Supabase", "C++"],
    href:        "https://drive.google.com/file/d/13mClr8Gk6Y4M6r1Q6IrfrKFbeoKLDzKC/view",
    repoHref:    "https://github.com/Reym-Tech/Tagalog_FC_POS",
    featured:    false,
  },
  {
    id:          "ancientcrafts",
    title:       "AncientCrafts",
    description: "A full-stack e-commerce mobile application with product catalog, shopping cart, and checkout functionality. Built with a Java and PHP backend connected to Firebase and MySQL.",
    tags:        ["Java", "PHP", "Firebase", "MySQL"],
    href:        undefined,
    repoHref:    "https://github.com/Reym-Tech/AncientCrafts",
    featured:    false,
  },
];

export const FEATURED_PROJECTS = PROJECTS.filter((p) => p.featured);

export const ALL_TAGS = Array.from(
  new Set(PROJECTS.flatMap((p) => p.tags))
).sort();
