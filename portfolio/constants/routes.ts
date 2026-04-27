export const ROUTES = {
  home:     "/",
  projects: "/projects",
  about:    "/about",
  contact:  "/contact",
} as const;

export type Route = (typeof ROUTES)[keyof typeof ROUTES];
