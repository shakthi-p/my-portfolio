export interface Project {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  highlights: string[];
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  type: 'ml' | 'timeseries' | 'qa' | 'web' | 'nlp';
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  skills: string[];
  isCurrent?: boolean;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  score: string;
  details: string;
}

export interface SkillCategory {
  name: string;
  label: string;
  items: {
    name: string;
    level?: string;
    description: string;
  }[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  skills: string[];
  summary: string;
}
