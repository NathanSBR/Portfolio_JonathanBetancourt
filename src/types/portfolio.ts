export type NavItem = { label: string; href: string };
export type SocialLink = { label: string; href: string; short: string };
export type Specialty = { icon: string; title: string; description: string };
export type Achievement = { value: number; suffix: string; label: string; icon: string };
export type Project = {
  title: string;
  category: string;
  description: string;
  problem: string | null;
  solution: string | null;
  result: string | null;
  technologies: string[];
  image: string | null;
  demoUrl: string | null;
  repositoryUrl: string | null;
  accent: string;
};
export type ExperienceItem = { company: string; role: string; period: string; location: string; clients?: string[]; description: string; technologies: string[] };
export type Technology = { name: string; short: string; color: string };

export type PortfolioData = {
  person: {
    name: string; shortName: string; initials: string; role: string; headline: string;
    description: string; email: string; location: string; availability: string | null; cvUrl: string | null;
  };
  about: {
    title: string; summary: string; values: { title: string; description: string }[];
    education: { degree: string; institution: string; period: string };
    languages: { name: string; level: string; code: string; flag: string; active: boolean }[];
  };
  contact: { title: string; description: string };
  footerText: string;
  navigation: NavItem[];
  socialLinks: SocialLink[];
  specialties: Specialty[];
  achievements: Achievement[];
  projects: Project[];
  experience: ExperienceItem[];
  technologies: Technology[];
};
