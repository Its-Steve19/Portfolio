export interface Project {
  id: string;
  title: string;
  type: string;
  summary: string;
  problem: string;
  targetUsers: string;
  role: string;
  features: string[];
  technologies: string[];
  challenges: string;
  decisions: string;
  lessons: string;
  githubUrl?: string;
  liveUrl?: string;
  status: "Completed" | "In Progress" | "Maintained";
  image: string;
}

export interface SkillCategory {
  category: string;
  skills: { name: string; level?: string; iconName?: string }[];
}

export interface Profile {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  location: string;
  email: string;
  whatsapp: string;
  whatsappFormatted: string;
  github: string;
  linkedin?: string;
  education: {
    institution: string;
    degree: string;
    completion: string;
  };
}
