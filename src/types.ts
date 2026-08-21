export type Theme = 'dark' | 'light';

export interface TechSkill {
  name: string;
  category: 'backend' | 'frontend' | 'database' | 'devops' | 'ai_bots' | 'tools';
  categoryLabel: string;
  iconName: string;
  highlight?: string;
  featured?: boolean;
}

export interface ProjectScreenshot {
  title: string;
  url: string;
  description: string;
}

export interface ProjectCaseStudy {
  overview: string;
  problem: string;
  solution: string;
  architecture: string;
  keyFeatures: string[];
  metrics: { label: string; value: string }[];
  techDetails: { area: string; stack: string }[];
  screenshots?: ProjectScreenshot[];
}

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  category: 'all' | 'fullstack' | 'ai_llm' | 'telegram_bot' | 'backend';
  categoryLabel: string;
  shortDescription: string;
  quoteHighlight: string;
  tags: string[];
  previewImage: string;
  heroImage?: string;
  githubUrl?: string;
  liveUrl?: string;
  telegramBotUrl?: string;
  accentColor: string;
  accentGradient: string;
  iconName: string;
  featured?: boolean;
  caseStudy: ProjectCaseStudy;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  type: string;
  location: string;
  summary: string;
  achievements: string[];
  technologies: string[];
}

export interface SocialLink {
  platform: string;
  url: string;
  label: string;
  iconName: string;
  handle: string;
}

export interface PersonalInfo {
  name: string;
  role: string;
  taglineRoles: string[];
  pitchEn: string;
  pitchRu: string;
  aboutStory: string[];
  location: string;
  workStatus: string;
  availabilityNote: string;
  email: string;
  telegramUsername: string;
  telegramLink: string;
  githubUrl: string;
  linkedinUrl: string;
  experienceYears: string;
  metricsSummary: {
    value: string;
    label: string;
    description: string;
  }[];
}

export interface PortfolioData {
  personal: PersonalInfo;
  skills: TechSkill[];
  skillCategories: { id: string; label: string }[];
  projects: ProjectItem[];
  projectCategories: { id: string; label: string }[];
  experiences: ExperienceItem[];
  socials: SocialLink[];
}
