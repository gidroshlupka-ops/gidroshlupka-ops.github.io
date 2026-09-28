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

export interface ProjectVoiceSample {
  url: string;
  durationLabel: string;
  title?: string;
  caption?: string;
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
  voiceSample?: ProjectVoiceSample;
  accentColor: string;
  accentGradient: string;
  iconName: string;
  featured?: boolean;
  shortTabLabel?: string;
  statusLabel?: string;
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

export interface ResumeStackLine {
  label: string;
  value: string;
}

export interface ResumeProjectBlock {
  title: string;
  bullets: string[];
}

export interface ResumeJob {
  title: string;
  period: string;
  projects: ResumeProjectBlock[];
}

export interface ResumeData {
  fullName: string;
  title: string;
  contactsLine: string;
  locationLine: string;
  salary: string;
  about: string;
  stack: ResumeStackLine[];
  jobs: ResumeJob[];
  pets: ResumeProjectBlock[];
  education: string[];
}

export interface PersonalInfo {
  name: string;
  legalName: string;
  role: string;
  taglineRoles: string[];
  pitchEn: string;
  pitchRu: string;
  aboutStory: string[];
  location: string;
  workStatus: string;
  availabilityNote: string;
  email: string;
  phone?: string;
  telegramUsername: string;
  telegramLink: string;
  githubUrl: string;
  linkedinUrl?: string;
  twitterUrl?: string;
  twitterLink?: string;
  contactWorkerUrl?: string;
  resumePdf: string;
  resumeDownloadName: string;
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
  resume: ResumeData;
}
