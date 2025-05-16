export type Theme = 'light' | 'neon';

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

export interface NavItem {
  id: string;
  label: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Experience {
  title: string;
  description: string;
  highlights: string[];
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  image?: string;
}