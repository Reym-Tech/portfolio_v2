export type NavItem = {
  label: string;
  href:  string;
};

export type Project = {
  id:          string;
  title:       string;
  description: string;
  tags:        string[];
  href?:       string;
  repoHref?:   string;
  featured:    boolean;
};

export type Skill = {
  category: string;
  items:    string[];
};

export type SocialLink = {
  label: string;
  href:  string;
};
