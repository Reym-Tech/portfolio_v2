import { ROUTES }  from "@/constants/routes";
import type { NavItem } from "@/types";

export const NAV_ITEMS: NavItem[] = [
  { label: "Home",     href: ROUTES.home     },
  { label: "Projects", href: ROUTES.projects },
  { label: "About",    href: ROUTES.about    },
  { label: "Contact",  href: ROUTES.contact  },
];
